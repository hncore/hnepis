import $ from "jquery";
import Alpine from 'alpinejs';
import axios from 'axios';
import Cookies from 'js-cookie';
import Toastify from "toastify-js";
import { checkAdBlock } from "adblock-checker";
import CryptoJS from "crypto-js";
import "toastify-js/src/toastify.css";
import './jwplayer.js';

const ajax_url = player_epis.ajax_url;

function ___(text) {
    return player_epis?.i18n[text] || text;
};

window.showToast = (function () {
    let currentToast = null;
    return function (message, type = "success") {
        if (currentToast) {
            currentToast.hideToast();
            currentToast = null; 
        }
        const backgroundColors = {
            success: "linear-gradient(to right, #00b09b, #96c93d)",
            error: "linear-gradient(to right, #e52d27, #b31217)",
            info: "linear-gradient(to right, #2196F3, #21CBF3)",
        };
        const backgroundColor = backgroundColors[type] || backgroundColors.success;
        currentToast = Toastify({
            text: message,
            duration: 3000, 
            gravity: "top",
            position: "center",
            backgroundColor: backgroundColor,
            stopOnFocus: true, 
        });
        currentToast.showToast();
    };
})();
window.hnsetcolor = function () {
    const colorVars = {
        '--btnbg': 'btn_bgcolor',
        '--btntext': 'btn_textcolor',
        '--btnhover': 'btn_hover',
        '--btnradius': 'btn_radius',
        '--backupbg': 'backupbg',
        '--backuptext': 'backuptext',
        '--backuphover': 'backuphover',
        '--backupbgactive': 'backupbgactive',
        '--backuptextactive': 'backuptextactive',
        '--bordersv': 'bordersv',
        '--episbgcolor': 'episbgcolor',
        '--episbghover': 'episbghover',
        '--episbglist': 'episbglist',
        '--epistextsv': 'epistextsv',
        '--commentsbg': 'commentsbg',
        '--quicklybg': 'quicklybg',
        '--quicklytext': 'quicklytext',
        '--quicklyborder': 'quicklyborder',
        '--sitebgcolor': 'sitebgcolor',
        '--fivebg': 'fivebg',
        '--fivetext': 'fivetext',
        '--fivebutton': 'fivebutton',
        '--hnlogosize': 'hnlogosize',
        '--hnlogowidth': 'hnlogowidth',
        '--hnlogoheight': 'hnlogoheight',
    };
    $.each(colorVars, function (cssVar, colorKey) {
        const colorValue = player_epis?.playcolor?.[colorKey] || colorKey;
        if (colorValue) {
            $(':root').css(cssVar, colorValue);
        }
    });
};
$(document).ready(function () {
    hnsetcolor();
});
window.Alpine = Alpine
window.HNComment = function () {
    return {
        isEmoji: false,
        likeCount: 0,
        name: '',
        content: '',
        isLoader: false,
        isReplying: false,
        replyTarget: null,
        addEmoji(emoji) {
            this.content += emoji;
        },
        moveReplyForm(event, commentID) {
            event.stopImmediatePropagation();
            this.isReplying = true;
            this.replyTarget = commentID;
            const replyContainer = document.getElementById(`replies-${commentID}`);
            const mainForm = document.getElementById('new-comment');

            if (replyContainer && mainForm) {
                replyContainer.appendChild(mainForm);
            }
        },
        HNSubComment(event) {
            event.stopImmediatePropagation();
            if (this.isLoader) {
                return;
            }
            const name = $('#name_comment').val()?.trim() || '';
            const content = $('#comment_content').val()?.trim() || '';
            const videoId = $("input[name='video_id']").val()?.trim() || '';
            
            if (!name || !content) {
                showToast(___('Please fill in all information.'), 'error');
                return;
            }
            
            this.isLoader = true; 
            const data = new FormData();
            data.append('action', 'add_comment');
            data.append('video_id', videoId);
            data.append('name', name);
            data.append('comment', content);
            if (this.isReplying && this.replyTarget) {
                data.append('parent_comment_id', this.replyTarget);
            }

            axios.post(ajax_url, data, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(response => {
                if (response.data.success) {
                    const resultHTML = response.data.data.html;
                    if (this.isReplying && this.replyTarget) {
                        if (!document.querySelector(`#replies-${this.replyTarget} [data-commentid="${response.data.data.comment_id}"]`)) {
                            document.querySelector(`#replies-${this.replyTarget}`).insertAdjacentHTML('beforeend', resultHTML);
                        }
                    } else {
                        if (!document.querySelector(`#comment-data [data-commentid="${response.data.data.comment_id}"]`)) {
                            document.querySelector("#comment-data").insertAdjacentHTML('afterbegin', resultHTML);
                        }
                    }
                    $('#name_comment').val('');
                     $('#comment_content').val('');
                    this.name = '';
                    this.content = '';
                    this.isReplying = false;
                    this.replyTarget = null;
                }
            })
            .catch(error => {
                console.log(`${error}`);
            }).finally(() => {
                this.isLoader = false;
            });
            this.isLoader = false;
            return false;
        },
         
        addLike(event) {
            event.stopImmediatePropagation();
            const postID = event.target.getAttribute('data-postid');
            const commentID = event.target.getAttribute('data-commentid');
            const likeCountElement = document.getElementById(`likeCount-${commentID}`);

            const data = new FormData();
            data.append('action', 'like_comment');
            data.append('comment_id', commentID);
            data.append('post_id', postID);
            axios.post(ajax_url, data, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(response => {
                if (response.data.success) {
                    likeCountElement.innerText = response.data.data.like_count;
                }
            })
            .catch(error => {
                console.log(`${error}`);
            }).finally(() => {
                this.isLoader = false;
            });
        },
        loadMore(event) {
            event.stopImmediatePropagation();
            const commentCount = document.querySelectorAll("#comment-data .list-comment").length;
            const loadMoreButton = document.querySelector(".load-more-comment");
            const post_id = loadMoreButton.getAttribute("data-postid");
            const totalComments = loadMoreButton.getAttribute("data-total");
            
            const data = new FormData();
            data.append('action', 'load_more_comment');
            data.append('post_id', post_id);
            data.append('offset', commentCount);
            data.append('total', totalComments);
            axios.post(ajax_url, data, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(response => {
                if (response.data.success && response.data.data && response.data.data.comment) {
                    document.querySelector("#comment-data").insertAdjacentHTML('beforeend', response.data.data.comment);
                    if (parseInt(response.data.data.count) < 5) {
                        loadMoreButton.style.display = 'none';
                    }
                }
            })
            .catch(error => {
                console.log(`${error}`);
            }).finally(() => {
                this.isLoader = false;
            });
        }
    }
};
window.List_Episodes = function () {
    return {
        showResults: false,
        searchTimeout: null,
        activeServer: 0,
        activeEpisodeRange: 0,
        activeTab: 0,
        isAutoNext: false,
        isLightOn: true,
        isReportOpen: false,
        checkbox_list: '',
        isLoader: false,
        clickedButton: null,
        currentForm: null,
        resizeCheck: 'small',
        toggleLightText: ___('Light On'),
        Position: $(".haun-list-eps").find(".haun-episode.active").data("position") || null,
        FindEpis: $(".haun-list-eps").find(".haun-episode.active"),

        init() {
            this.button_init();
            const activeEpisode = document.querySelector('.haun-episode.active');
            if (activeEpisode) {
                const server = parseInt(activeEpisode.getAttribute('data-server')) - 1;
                const episodeSlug = activeEpisode.getAttribute('data-episode-slug');
                this.activeServer = server;
                this.activeTab = server;
                const episodeRanges = document.querySelectorAll(`div[x-show="activeServer === ${server}"] .haun-list-eps`);
                episodeRanges.forEach((range, index) => {
                    const episodes = range.querySelectorAll('.haun-episode');
                    episodes.forEach(ep => {
                        if (ep.getAttribute('data-episode-slug') === episodeSlug) {
                            this.activeEpisodeRange = index;
                        }
                    });
                });
                this.scrollToActiveEpisode(activeEpisode);
            }
        },
        setActiveServer(serverIndex) {
            this.activeServer = serverIndex;
            this.activeEpisodeRange = 0;
        },
        setActiveEpisodeRange(rangeIndex) {
            this.activeEpisodeRange = rangeIndex;
        },
        scrollToActiveEpisode(activeEpisode) {
            const parentContainer = activeEpisode.closest('.haun-list-eps');
            if (parentContainer) {
                setTimeout(() => {
                    parentContainer.scrollTo({
                        top: activeEpisode.offsetTop - parentContainer.offsetTop - (parentContainer.clientHeight / 2) + (activeEpisode.clientHeight / 2),
                        behavior: 'smooth'
                    });
                }, 300);
            }
        },
        EpisodeItemSearch() {
            clearTimeout(this.searchTimeout);
            const query = $("#searchInput").val().toLowerCase();
            $("ul.haun-list-eps li").removeClass("matched");
            this.showResults = false;
            if (!query) {
                $("#episode-result").empty();
                return;
            }
            this.searchTimeout = setTimeout(() => {
                const activeEpisodes = $('.hnactive ul.haun-list-eps li').filter((_, li) => 
                    $(li).data('number').toString().includes(query)
                );
                if (activeEpisodes.length > 0) {
                    activeEpisodes.each((_, episode) => {
                        $(episode).addClass("matched");
                    });
                    const resultContainer = $("#episode-result");
                    resultContainer.html(
                        activeEpisodes.map((_, ep) => ep.outerHTML).get().join("")
                    );
                    this.showResults = true;
                } else {
                    $("#episode-result").empty();
                }
        
                const firstMatch = activeEpisodes[0];
                if (firstMatch) {
                    $(firstMatch).get(0).scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest"
                    });
                }
            }, 200);
        },        
        setActiveTab(tabIndex) {
            this.activeTab = tabIndex;
        },
        button_init(){
            this.isAutoNext = sessionStorage.getItem('autonext') === 'On';
            const reportedKey = `report_${player_epis.post_id}_${player_epis.server || 1}_${player_epis.episode_slug || ''}`;
            if (Cookies.get(reportedKey)) {
                $('#submitReport').prop('disabled', true).text('Reported');
            }
        },
        ReportOpen() {
            const self = this;
            self.checkbox_list = '';
            $.each(player_epis.report_issues, function (i, item) {
                const issuesName = item.replace('(', '<br><span class="text-sm">').replace(')', '</span>');
                self.checkbox_list += `
                <li class="flex items-center space-x-2">
                    <input type="checkbox" name="issues[]" class="report-checkbox" id="item_${i}" value="${item}">
                    <label for="item_${i}" class="text-gray-700">${issuesName}</label>
                </li>`;
            });
            if ($('#reportModal').length === 0) {
                const modalHTML = `
                <div id="reportModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
                    <div class="bg-white w-full max-w-3xl rounded-lg shadow-lg">
                        <!-- Header -->
                        <div class="flex justify-between items-center p-4 border-b">
                            <h2 class="text-xl font-semibold text-green-500">${___('report_btn')}</h2>
                            <button id="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
                        </div>
                        <div class="p-4 space-y-4">
                            <div class="haun-content">
                                <div id="modalMessage" class="haun-message mb-4 text-red-500 hidden"></div>
                                <ul id="issuesList" class="space-y-2">
                                ` + self.checkbox_list + `
                                </ul>
                            </div>
                            <div id="reportForm" class="haun-form hidden">
                                <input type="text" id="userName" class="w-full px-3 py-2 border rounded" placeholder="${___('name_or_email')}">
                                <textarea rows="5" id="userMessage" class="w-full px-3 py-2 border rounded mt-2" placeholder="${___('message')}"></textarea>
                            </div>
                        </div>
                        <div class="flex justify-end p-4 border-t space-x-2">
                            <button id="closeModalFooter" class="bg-gray-300 px-4 py-2 rounded text-gray-800">${___('close')}</button>
                            <button id="submitReport" class="bg-blue-500 px-4 py-2 rounded text-white">${___('submit_report')}</button>
                        </div>
                    </div>
                </div>`;
                $('body').append(modalHTML);
                $('#closeModal, #closeModalFooter').on('click', () => {
                    self.closeModal();
                });
                $('#submitReport').on('click', () => {
                    self.submitReport();
                });
            }
            $('#reportModal').removeClass('hidden').addClass('flex');
            $(document).on('change', '.report-checkbox', function () {
                if ($(".report-checkbox:checked").length) {
                    $('#reportForm, .modal-footer-report').removeClass('hidden');
                } else {
                    $('#reportForm, .modal-footer-report').addClass('hidden');
                }
            });
        },
        closeModal() {
            $('#reportModal').removeClass('flex').addClass('hidden');
        },
        submitReport() {
            const issues = [];
            $('input[name="issues[]"]:checked').each(function () {
                issues.push($(this).val());
            });
            const issuesJoined = issues.join('@');
            const userName = $('#userName').val() || 'Anonymous';
            const userMessage = $('#userMessage').val();
            if (!issues.length) {
                $('#modalMessage').text('Please select at least one issue.').removeClass('hidden');
                return;
            }

            const reportedKey = `report_${player_epis.post_id}_${player_epis.server || 1}_${player_epis.episode_slug || ''}`;
            $.ajax({
                type: 'POST',
                url: player_epis.ajax_url,
                data: {
                    action: 'haun_report',
                    id_post: player_epis.post_id,
                    server: player_epis.server || 1,
                    episode: player_epis.episode_slug || '',
                    post_name: player_epis.post_title || '',
                    haun_error_url: encodeURI(window.location.href),
                    content: userMessage + '|' + issuesJoined,
                    name: userName,
                    issues: issuesJoined
                },
                success: function () {
                    $('#modalMessage').text('Report submitted successfully.').removeClass('hidden text-red-500').addClass('text-green-500');
                    $('#reportForm, #issuesList').addClass('hidden');
                    $('#submitReport').prop('disabled', true).text('Reported');
                    Cookies.set(reportedKey, true, { expires: 7 });
                },
                error: function () {
                    $('#modalMessage').text('Error submitting the report.').removeClass('hidden');
                }
            });
        },
        toggleAutoNext() {
            this.isAutoNext = !this.isAutoNext;
            sessionStorage.setItem('autonext', this.isAutoNext ? 'On' : 'Off');
        },
        Next_Episode() {
            if ( this.FindEpis && this.Position !== "last") {
                const pulseRing = this.FindEpis.find('.hn-pulse-ring').detach();
                this.FindEpis.removeClass('active');
                const $nextEpisode = this.FindEpis.next('li.haun-episode');
                if ($nextEpisode.length) {
                    $nextEpisode.addClass('active');
                    $nextEpisode.children('a').prepend(pulseRing);
                    this.goToEpisode($nextEpisode.get(0));
                }
            } else {
                showToast(___('End of episode list'), 'info');
            }
        },
        Prev_Episode() {
            if (this.FindEpis && this.Position !== 'first') {
                const pulseRing = this.FindEpis.find('.hn-pulse-ring').detach();
                this.FindEpis.removeClass('active');
                const $prevEpisode = this.FindEpis.prev('li.haun-episode');
                if ($prevEpisode.length) {
                    $prevEpisode.addClass('active');
                    $prevEpisode.children('a').prepend(pulseRing);
                    this.prevepis = $prevEpisode;
                    this.goToEpisode($prevEpisode.get(0));
                }
            } else {
                showToast(___('First of episode list'), 'info');
            }
        },
        goToEpisode(el) {
            const href = el.querySelector('a') ? el.querySelector('a').getAttribute('href') : el.dataset.href;
            if (href) {
                window.location.href = href;
            }
        },
        Toggle_Light() {
            this.isLightOn = !this.isLightOn;
            const overlay = $('#hn-lightout');
            const playerWrapper = $('#hn-player-wrapper');
            
            if (this.isLightOn) {
                overlay.addClass('hidden').removeClass('block');
                playerWrapper.removeClass('relative z-50');
                this.toggleLightText = ___('Light On');
            } else {
                overlay.addClass('block').removeClass('hidden');
                playerWrapper.addClass('relative z-50');
                this.toggleLightText = ___('Light Off');
            }
        },
        ExpandPlayer() {
            const playerWrapper = $("#hn-player-wrapper");
            const pagePlayer = $("#page-player");
            const sidebar = $("#siderbar");
            const hnbutton = $("#hnbutton-player");
            if (sidebar.length === 0) {
                alert("Sidebar not found. Cannot expand player.");
                return;
            }
            const currentPlayerWidth = playerWrapper.outerWidth();
            const currentPlayerHeight = playerWrapper.outerHeight();
            const currentPageWidth = pagePlayer.outerWidth();
            const currentSidebarWidth = sidebar.outerWidth();
            if (!this.originalSizes) {
                this.originalSizes = {
                    player: { width: currentPlayerWidth, height: currentPlayerHeight },
                    page: { width: currentPageWidth, classes: pagePlayer.attr("class") },
                    sidebar: { marginTop: sidebar.css("marginTop"), classes: sidebar.attr("class") }
                };
            }
            const replaceWidthClass = (element, newWidthClass) => {
                const currentClasses = element.attr("class") || "";
                const updatedClasses = currentClasses.replace(/\bw-\S+/g, newWidthClass);
                element.attr("class", updatedClasses);
            };
            if (this.resizeCheck === "small") {
                const newPlayerWidth = currentPageWidth;
                const newPageWidth = newPlayerWidth + currentSidebarWidth;
                $(playerWrapper).animate({ width: newPlayerWidth }, 300).removeClass('overflow-hidden');
                $(pagePlayer).animate({ width: newPageWidth }, 300);
                $(sidebar).animate({ marginTop: currentPlayerHeight + 20 }, 300);
                $(hnbutton).attr('style', 'padding-top: 20px');
                replaceWidthClass(pagePlayer, "w-full");
                replaceWidthClass(sidebar, "hidden");
                $('#explayer').html('<i class="fa fa-compress"></i> ' + ___('collapse'));
                this.resizeCheck = "large";
            } else {
                $(playerWrapper).animate({
                    width: this.originalSizes.player.width,
                    height: this.originalSizes.player.height
                }, 300).addClass('overflow-hidden');
                $(pagePlayer).animate({ width: this.originalSizes.page.width }, 300);
                $(sidebar).animate({ marginTop: this.originalSizes.sidebar.marginTop }, 300);
                $(hnbutton).attr('style', 'padding-top: 0');
                pagePlayer.attr("class", this.originalSizes.page.classes);
                sidebar.attr("class", this.originalSizes.sidebar.classes);
                $('#explayer').html('<i class="fa fa-expand"></i> ' + ___('expand'));
                this.resizeCheck = "small";
            }
            $("html, body").animate({ scrollTop: $(playerWrapper).offset().top - 63 }, 1000);
        },
        Like_Dislikes(event, type) {
            event.stopImmediatePropagation();
            const postId = player_epis.post_id;
            const nonce = player_epis.nonce;
            let actionType = type == 'likes' ? 'like' : 'dislike';
            let userAction = Cookies.get(`user_action_${postId}`);
            if (userAction) {
                showToast(___('You reaction this post.'), 'error');
                return;
            }
            let data = new FormData();
            data.append('action', 'handle_like_dislike');
            data.append('post_id', postId);
            data.append('type', actionType);
            data.append('nonce', nonce);
            axios.post(ajax_url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                if (response.data.success) {
                    if (actionType === 'like') {
                        $('.like-count').text(response.data.data.likes);
                    } else {
                        $('.dislike-count').text(response.data.data.dislikes);
                    }
                    $('.like-percentage').text(response.data.data.percentage + '%');
                    Cookies.set(`user_action_${postId}`, actionType, { expires: 365 });
                    showToast(response.data.data.message, 'success');
                } 
            })
            .catch(() => {});
        }  
    };
};
window.Load_Player = function () {
    return {
        isLoaded: false,
        svid: null,
        episodeSlug: '',
        position: '',
        counter: '5',
        serverId: '',
        postId: '',
        href: '',
        loadPlayer() {
            this.isAdult();
            if ($("#ajax-player").length) {
                this.svid = this.getURLParameterValues("svid");
                if (this.svid === null) {
                    this.haunPlayer(player_epis.episode_slug, player_epis.server, player_epis.post_id, $("body").data("nonce"),"", player_epis.custom_var);
                } else {
                    this.episodeSlug = $(".haun-episode.active").data("episode-slug");
                    this.serverId = $(".haun-episode.active").data("server");
                    this.postId = $(".haun-episode.active").data("post-id");

                    if (typeof playerInstance !== 'undefined') {
                        playerInstance.pause();
                    }
                    
                    $("#server-item-" + this.svid).addClass("active").siblings().removeClass("active");
                    $("#hn-player-wrapper").css("z-index", "99999");
                    $("button.close").trigger("click");
                    this.haunPlayer(this.episodeSlug, this.serverId, this.postId, "", this.svid, player_epis.custom_var);
                }

                setTimeout(() => {
                    if ($(document).find(".haun-episode.active").data("embed") == 1) {
                        $("#autonext").hide();
                    } else {
                        $("#autonext").show();
                    }
                }, 2000);
            }
            this.playlistsv();
        },
        playlistsv() {
            $(document).on("click", ".play-listsv", (event) => {
                const $this = $(event.currentTarget);
                this.episodeSlug = $this.data("episode-slug");
                this.serverId = $this.data("server");
                this.postId = $this.data("post-id");
                this.svid = $this.data("subsv-id");
                
                if (typeof playerInstance !== "undefined") {
                    playerInstance.pause();
                }

                $this.addClass("active").siblings().removeClass("active");
                $("#hn-player-wrapper").css("z-index", "99999");
                $("#hn-player-loader").show().css("position", "absolute");
                $("button.close").trigger("click");

                this.haunPlayer(this.episodeSlug, this.serverId, this.postId, "", this.svid, player_epis.custom_var);
            });
        },
        isAdBlockEnabled(callback) {
            if (player_epis.adblock) {
                checkAdBlock()
                    .then((result) => {
                        callback(result);
                    })
                    .catch((error) => {
                        callback(false);
                    });
            } else {
                callback(false);
            }
        },
        haunPlayer(episodeSlug, serverId, postId, nonce, subsvId, customVar) {
            if (this.isLoaded) return;
            if (!$("#ajax-player").length) return false;
            this.isLoaded = true;
            const data = new FormData();
            data.append("post_id", postId);
            data.append("episode_slug", episodeSlug);
            data.append("server_id", serverId);
            data.append("subsv_id", subsvId);
            data.append("nonce", nonce || "");
            data.append("custom_var", customVar || "");
            $("#hn-player-loader").html('<img height="100px" width="100px" src="' + player_epis.loading_img + '" alt="loading"/>'); 
            axios
                .post(player_epis.player_url, data, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                .then((response) => {
                    const hnresponse = response.data.data;
                    if (response.data.success) {
                        this.isAdBlockEnabled((isBlocked) => {
                            if (isBlocked) {
                                $("#hn-player-loader").empty().html(
                                    player_epis.adblock_msg
                                );
                            } else {
                                $("#hn-player-loader").empty();
                                localStorage.removeItem("reSizePlayerObject");
                                this.HNPlayer(hnresponse);
                                $("#icon-rebuild-player").removeClass("animate-spin");
                                $("#hn-player-wrapper").css("paddingTop", "0");
                            }
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error loading episode:", error);
                    $("#ajax-player").html(
                        '<p class="error-player">' + ___("Error loading player") + "</p>"
                    );
                })
                .finally(() => {
                    this.isLoaded = false;
                });
        
            return false;
        },        
        HNPlayer(hnresponse) {
            var resumeId = hnresponse.resumeId || '';
            var sources = hnresponse.sources ? this.decryptEncData(hnresponse.sources) : '';
            var tracks = hnresponse.tracks || '';
            const playerInstance = jwplayer('ajax-player');
        const autoplay              = Boolean(player_epis.autoplay);
            const autopause         = Boolean(player_epis.autopause);
            const floating          = Boolean(player_epis.floating);
            const show_logo         = Boolean(player_epis.show_logo_player);
            const commonConfig = {
                key: player_epis.jwplayer_key,
                primary: "html5",
                width: "100%",
                height: "100%",
                aspectratio: "16:9",
                controls: true,
                autostart: autoplay,
            };      
            if (player_epis.jwplayer_showad && !resumeId) {
                const adConfig = {
                    file: 'https://dl.dropboxusercontent.com/s/s2x75z3e2j9c3cr/1s_blank.mp4?dl=0',
                };
                const advertising = this.parseAdCode();
                if (Object.keys(advertising).length > 0) {
                    adConfig.advertising = advertising;
                }
                playerInstance.setup({ ...commonConfig, ...adConfig });
                ['complete', 'adSkipped', 'adComplete'].forEach(event => {
                    playerInstance.on(event, function () {
                        playerInstance.remove();
                        $("#ajax-player").append(sources);
                    });
                });
            } else if (!player_epis.jwplayer_showad && !resumeId) {
                    playerInstance.remove();
                    $("#ajax-player").append(sources);
            } else {
                const videoConfig = {
                    playlist: [{
                        title: player_epis.post_title,
                        image: player_epis.poster,
                        sources: sources,
                        tracks: tracks,
                        captions: {
                            color: player_epis.captions_color,
                            fontSize: player_epis.captions_fontsize,
                            backgroundOpacity: 0,
                            edgeStyle: "raised",
                        },
                    }],
                    hlshtml: true,
                    fullscreen: true,
                    autostart: autoplay,
                    playbackRateControls: true,
                    displayPlaybackLabel: true,
                };
        
                if (player_epis.player_logo && show_logo) {
                    videoConfig.logo = {
                        file: player_epis.player_logo,
                        link: player_epis.player_logo_link,
                        hide: player_epis.player_logo_hide,
                        target: "_blank",
                        position: player_epis.logo_position,
                    };
                }
                if (floating) {
                    videoConfig.floating = { 
                        dismissible: true 
                    };
                }
                if (autopause) {
                    videoConfig.autoPause = {
                        viewability: true,
                        pauseAds: true,
                    };
                }
                if (player_epis.player_about_text && player_epis.player_about_text.trim() !== '') {
                    videoConfig.abouttext = player_epis.player_about_text;
                }
                if (player_epis.player_about_link && player_epis.player_about_link.trim() !== '') {
                    videoConfig.aboutlink = player_epis.player_about_link;
                }
                
                if (player_epis.player_sharing) {
                    videoConfig.sharing = {
                        sites: ["reddit", "facebook", "twitter", "googleplus", "email", "linkedin"],
                    };
                }
                if (player_epis.jwplayer_showad) {
                    const advertising = this.parseAdCode();
                    if (Object.keys(advertising).length > 0) {
                        videoConfig.advertising = advertising;
                    }
                }
                playerInstance.setup({ ...commonConfig, ...videoConfig });
                playerInstance.addButton(
                    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g id="icon-jw-rewind-10" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="undo-29" transform="translate(8.000000, 9.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M2.248,5.6 L2.248,0.08 L0,0.08 L0,0.968 L1,0.968 L1,5.6 L2.248,5.6 Z M5.728,5.696 C7.336,5.696 8.016,4.304 8.016,2.848 C8.016,1.392 7.336,0 5.728,0 C4.12,0 3.44,1.392 3.44,2.848 C3.44,4.304 4.112,5.696 5.728,5.696 Z M5.728,4.584 C5.016,4.584 4.712,3.816 4.712,2.824 C4.712,1.832 5.016,1.08 5.728,1.08 C6.44,1.08 6.744,1.832 6.744,2.824 C6.744,3.816 6.44,4.584 5.728,4.584 Z" id="10"/>
                            </g>
                            <g id="refresh" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) translate(3.000000, 3.000000)" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18,9 C18,13.95 13.95,18 9,18 C4.05,18 0,13.95 0,9 C0,4.05 4.05,0 9,0 C12.1754861,0 14.9458263,1.65741481 16.544631,4.10589091" id="Path" stroke-width="1.8"/>
                                <polyline id="Path" stroke-width="1.6" points="18 2 17.5259259 5 14 4.59663866"/>
                            </g>
                        </g>
                    </svg>`,
                    "Rewind 10 Seconds",
                    function(){
                        playerInstance.seek(playerInstance.getPosition() - 10);
                    },
                    "Rewind 10 Seconds"
                );
                playerInstance.addButton(
                    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g id="icon-jw-rewind-10" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="undo-29" transform="translate(8.000000, 9.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M2.248,5.6 L2.248,0.08 L0,0.08 L0,0.968 L1,0.968 L1,5.6 L2.248,5.6 Z M5.728,5.696 C7.336,5.696 8.016,4.304 8.016,2.848 C8.016,1.392 7.336,0 5.728,0 C4.12,0 3.44,1.392 3.44,2.848 C3.44,4.304 4.112,5.696 5.728,5.696 Z M5.728,4.584 C5.016,4.584 4.712,3.816 4.712,2.824 C4.712,1.832 5.016,1.08 5.728,1.08 C6.44,1.08 6.744,1.832 6.744,2.824 C6.744,3.816 6.44,4.584 5.728,4.584 Z" id="10"/>
                            </g>
                            <g id="refresh" transform="translate(12.000000, 12.000000) scale(1, 1) translate(-12.000000, -12.000000) translate(3.000000, 3.000000)" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18,9 C18,13.95 13.95,18 9,18 C4.05,18 0,13.95 0,9 C0,4.05 4.05,0 9,0 C12.1754861,0 14.9458263,1.65741481 16.544631,4.10589091" id="Path" stroke-width="1.8"/>
                                <polyline id="Path" stroke-width="1.6" points="18 2 17.5259259 5 14 4.59663866"/>
                            </g>
                        </g>
                    </svg>`,
                    "Forward 10 Seconds",
                    function(){
                        playerInstance.seek(playerInstance.getPosition() + 10);
                    },
                    "Forward 10 Seconds"
                ); 
                playerInstance.on("ready", () => {
                    if (window.innerWidth > 768) { 
                        const playerContainer = playerInstance.getContainer();
                        const buttonContainer = playerContainer.querySelector('.jw-button-container');
                        const spacer = buttonContainer.querySelector('.jw-spacer');
                        const timeSlider = playerContainer.querySelector('.jw-slider-time');
                        if (buttonContainer && spacer && timeSlider) {
                            buttonContainer.replaceChild(timeSlider, spacer);
                        }
                    }
                });
                if (player_epis.jwplayer_showad) {
                    const adEvents = ["adComplete", "adSkipped", "complete"];
                    adEvents.forEach((event) => {
                        playerInstance.once(event, () => {
                            this.haunResumeVideo(resumeId, playerInstance);
                            this.haunJwConfig(playerInstance);
                        });
                    });
                } else {
                    playerInstance.on("ready", () => {
                        this.haunResumeVideo(resumeId, playerInstance);
                        this.haunJwConfig(playerInstance);
                    });
                }
                
                $("#ajax-player").html(playerInstance);
            }
        },               
        decryptEncData(encryptedDataWithIv) {
            var Sha256 = CryptoJS.SHA256;
            var Hex = CryptoJS.enc.Hex;
            var Utf8 = CryptoJS.enc.Utf8;
            var AES = CryptoJS.AES;
            var secret_key = "TheQuickBrownFoxWasJumping";
            var secret_iv = "4f01bede9221586c";
            var key = Sha256(secret_key).toString(Hex).substr(0, 32); 
            var iv = Sha256(secret_iv).toString(Hex).substr(0, 16);
            var decrypted = AES.decrypt(encryptedDataWithIv, Utf8.parse(key), {
              iv: Utf8.parse(iv),
            }).toString(Utf8);
            try {
                return JSON.parse(decrypted); 
            } catch (error) {
                return decrypted;
            }
        },
        loadEpisode(event) {
            event.preventDefault();
            if (this.isLoaded) return;
            const $target = $(event.currentTarget);
            const episodeSlug = $target.data("episode-slug");
            const serverId = $target.data("server");
            const postId = $target.data("post-id");
            this.isLoaded = true;
            $("#hn-player-loader").removeClass("hidden");
            const data = new FormData();
            data.append('post_id', postId);
            data.append('episode_slug', episodeSlug);
            data.append('server_id', serverId);
            axios.post(player_epis.player_url, data, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((response) => {
                const hnresponse = response.data.data;
                if (response.data.success) {
                    const Load = window.Load_Player();
                    localStorage.removeItem("reSizePlayerObject");
                    $("#hn-player-loader").addClass("hidden");
                    Load.HNPlayer(hnresponse);
                    $(".haun-episode, .haun-custom").removeClass("active");
                    $(".haun-episode .hn-pulse-ring").remove();
                    $target.addClass("active");
                    $target.find("a").prepend('<div class="hn-pulse-ring"></div>');
                } else {
                    $("#ajax-player").html('<p class="error-player">' + ___("Error loading player") + '</p>');
                }
            })
            .catch((error) => {
                console.error("Error loading episode:", error);
                $("#ajax-player").html('<p class="error-player">' + ___("Error loading player") + '</p>');
            })
            .finally(() => {
                this.isLoaded = false;
            });
        },     
        reLoadPlayerModal() {
            $("#reLoadPlayerModal").remove();
            const modalHTML = `
                <div id="reLoadPlayerModal" class="absolute inset-0 z-[999999] flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                        <div class="flex justify-between items-center border-b pb-3">
                            <h4 class="text-lg font-semibold text-gray-800">Error (Code: 224003)</h4>
                            <button class="text-gray-500 hover:text-gray-700 close-modal">
                                <span class="text-xl font-bold">&times;</span>
                            </button>
                        </div>
                        <div class="py-4 text-center">
                            <h4 class="text-lg font-bold text-red-600">${___('jw_error_msg_1')}</h4>
                            <p class="mt-2">${___('jw_error_msg_0')}</p>
                            <p class="mt-2">${___('jw_error_msg_2')}</p>
                            <button @click="reBuildPlayer()" class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 mt-4 rounded inline-flex items-center">
                                <i id="icon-rebuild-player" class="hn-spin4"></i> ${___('player_reload')}
                            </button>
                            <p style="${$("#haun-ajax-list-server").length === 0 ? 'display:none;' : ''}">
                                ${___('jw_error_msg_3')}
                            </p>
                            <div id="serverList" class="mt-4"></div>
                        </div>
                    </div>
                </div>`;
            $("#hn-player-wrapper").append(modalHTML);
            $(document).on("click", function(event) {
                if (!$(event.target).closest("#reLoadPlayerModal > div").length) {
                    $("#reLoadPlayerModal").remove();
                }
            });
            $(".close-modal").on("click", function() {
                $("#reLoadPlayerModal").remove();
            });
            if ($("#haun-ajax-list-server").length) {
                $("#haun-ajax-list-server").prependTo("#serverList");
            }
            $("#hn-player-wrapper").removeClass("modal-open").css("padding-right", "");
        },
        haunPlayerErrorDetect() {
            this.reLoadPlayerModal();
        },
        haunPlayerResetCache(e, a, t) {
            return $.ajax({
                url: ajax_url,
                type: "POST",
                data: {
                    action: "reset_player_cache",
                    episode_slug: e,
                    server_id: a,
                    post_id: t
                },
                success: function(e) {
                    console.log(e)
                }
            }), !1
        },
        ReportError()  {
            $.ajax({
                type: 'POST',
                url: ajax_url,
                data: {
                    action: 'haun_report',
                    id_post: player_epis.post_id,
                    server: player_epis.server,
                    episode: player_epis.episode_slug,
                    post_name: player_epis.post_title + ' server ' + player_epis.server,
                    haun_error_url: encodeURI(window.location),
                    content: ___('Auto Report'),
                    name: 'BOT'
                },
                success: function (data) {
                    console.log('Auto report successfuly!');
                }
            });
        },
        haunJwConfig(playerInstance) {
            playerInstance.on("error", (error) => {
                this.ReportError();
                if (player_epis.player_error_detect === "display_modal") {
                    this.haunPlayerErrorDetect();
                } else if (player_epis.player_error_detect === "autoload_server") {
                    let currentIndex = 0;
        
                    const tryNextServer = () => {
                        if (currentIndex >= svlists.length) return;
                        const serverId = svlists[currentIndex];
                        document.querySelector(`#server-item-${serverId}`).click();
                        setTimeout(() => {
                            if (playerInstance.getState() === "error") {
                                currentIndex++;
                                tryNextServer(); 
                            }
                        }, 3000); 
                    };
        
                    tryNextServer(); 
                } else if (typeof $.fn.customErrorHandler === "function") {
                    $.fn.customErrorHandler();
                }
        
                if (player_epis.auto_reset_cache === 1) {
                    const episodeSlug = document.querySelector(".haun-episode.active").dataset.episodeSlug;
                    const server = document.querySelector(".haun-episode.active").dataset.server;
                    const postId = document.querySelector(".haun-episode.active").dataset.postId;
                    this.haunPlayerResetCache(episodeSlug, server, postId);
                }
            });
            
            playerInstance.on("play", () => {
                if (typeof window.reLoadPlayerModal !== 'undefined') {
                    document.querySelector("#reLoadPlayerModal").remove();
                }
            });
        
            playerInstance.on("complete", () => {
                this.haunPlayerAutoNext();
            });

            playerInstance.on('ready', async function() {
                playerInstance.addButton(
                    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g id="icon-jw-rewind-10" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="undo-29" transform="translate(8.000000, 9.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M2.248,5.6 L2.248,0.08 L0,0.08 L0,0.968 L1,0.968 L1,5.6 L2.248,5.6 Z M5.728,5.696 C7.336,5.696 8.016,4.304 8.016,2.848 C8.016,1.392 7.336,0 5.728,0 C4.12,0 3.44,1.392 3.44,2.848 C3.44,4.304 4.112,5.696 5.728,5.696 Z M5.728,4.584 C5.016,4.584 4.712,3.816 4.712,2.824 C4.712,1.832 5.016,1.08 5.728,1.08 C6.44,1.08 6.744,1.832 6.744,2.824 C6.744,3.816 6.44,4.584 5.728,4.584 Z" id="10"/>
                            </g>
                            <g id="refresh" transform="translate(12.000000, 12.000000) scale(1, 1) translate(-12.000000, -12.000000) translate(3.000000, 3.000000)" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18,9 C18,13.95 13.95,18 9,18 C4.05,18 0,13.95 0,9 C0,4.05 4.05,0 9,0 C12.1754861,0 14.9458263,1.65741481 16.544631,4.10589091" id="Path" stroke-width="1.8"/>
                                <polyline id="Path" stroke-width="1.6" points="18 2 17.5259259 5 14 4.59663866"/>
                            </g>
                        </g>
                    </svg>`,
                    ___("Forward 10 Seconds"),
                    function(){
                        playerInstance.seek(playerInstance.getPosition() + 10);
                    },
                    ___("Forward 10 Seconds"),
                ); 
                playerInstance.addButton(
                    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g id="icon-jw-rewind-10" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="undo-29" transform="translate(8.000000, 9.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M2.248,5.6 L2.248,0.08 L0,0.08 L0,0.968 L1,0.968 L1,5.6 L2.248,5.6 Z M5.728,5.696 C7.336,5.696 8.016,4.304 8.016,2.848 C8.016,1.392 7.336,0 5.728,0 C4.12,0 3.44,1.392 3.44,2.848 C3.44,4.304 4.112,5.696 5.728,5.696 Z M5.728,4.584 C5.016,4.584 4.712,3.816 4.712,2.824 C4.712,1.832 5.016,1.08 5.728,1.08 C6.44,1.08 6.744,1.832 6.744,2.824 C6.744,3.816 6.44,4.584 5.728,4.584 Z" id="10"/>
                            </g>
                            <g id="refresh" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) translate(3.000000, 3.000000)" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18,9 C18,13.95 13.95,18 9,18 C4.05,18 0,13.95 0,9 C0,4.05 4.05,0 9,0 C12.1754861,0 14.9458263,1.65741481 16.544631,4.10589091" id="Path" stroke-width="1.8"/>
                                <polyline id="Path" stroke-width="1.6" points="18 2 17.5259259 5 14 4.59663866"/>
                            </g>
                        </g>
                    </svg>`,
                    ___("Rewind 10 Seconds"),
                    function(){
                        playerInstance.seek(playerInstance.getPosition() - 10);
                    },
                    ___("Rewind 10 Seconds"),
                );
            });
        },
        haunPlayerAutoNext() {
            const autoNextStatus = sessionStorage.getItem('autonext');
            if (autoNextStatus === "On") {
                this.position = $(".haun-list-eps").find(".haun-episode.active").data("position") || null;
                if (this.position !== "last") {
                    let href;
                    if (player_epis.server > 1) {
                        href = $('.haun-episode.active').next().data('href');
                    } else {
                        href = $('.haun-episode.active').next().find('a').attr('href');
                    }
        
                    let interval = setInterval(() => {
                        this.counter--;
                        if (this.counter <= 0) {
                            clearInterval(interval);
                            window.location = href;
                            return;
                        } else {
                            $('#hn-player-loader').html(___('player_autonext') + ' <span>[' + this.counter + 's]');
                        }
                    }, 1000);
                } else {
                    $('#hn-player-loader').html(___('no_episode_or_last'));
                }
            }
        },
        formatSeconds(seconds) {
            const date = new Date(1970, 0, 1);
            date.setSeconds(seconds);
            return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        },
        haunResumeVideo(videoId, playerInstance) {
            if (player_epis.resume_playback) {
                if (typeof Storage !== "undefined") {
                    const storageKey = `HauNPlayerPosition-${videoId}`;
                    let position = localStorage.getItem(storageKey);
                    position = position === null || position === "undefined" ? 0 : parseFloat(position);
        
                    if (position > 0 && Math.abs(playerInstance.getDuration() - position) > 5) {
                        playerInstance.seek(position);
                        const modalHtml = `
                            <div id="resume" class="absolute inset-0 flex items-center justify-center z-50 bg-black/[.86]">
                                <div class="bg-slate-900 border border-gray-900 mx-2 md:mx-0 px-5 py-4 md:py-10 rounded-2xl text-center w-auto md:w-6/12">
                                    <p>${___('resume_text')} </p>
                                    <div class="text-red-500 font-bold mt-2 md:mt-4">${this.formatSeconds(position)}</div>
                                    <div class="flex justify-center space-x-2 mt-2 md:mt-4">
                                        <button class="no-resume bg-red-500 hover:bg-red-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
                                            ${___('playback')}
                                        </button>
                                        <button class="yes-resume bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
                                            ${___('continue_watching')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                        $('#hn-player-wrapper').append(modalHtml);
                        setTimeout(() => {
                            $('#resume').css('display', 'flex');
                        }, 800);
                        $('#hn-player-wrapper').on('click', '.no-resume', () => {
                            $('#resume').remove();
                            playerInstance.play();
                        });
                        $('#hn-player-wrapper').on('click', '.yes-resume', () => {
                            $('#resume').remove();
                            playerInstance.seek(position); 
                            playerInstance.play();
                        });
                    }
                    $(window).on('unload', () => {
                        localStorage.setItem(storageKey, playerInstance.getPosition());
                    });
                } else {
                    console.log("Your browser is too old!");
                }
            }
        },
        isMobile() {
            var e, a = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (a = !0), a
        },
        getURLParameterValues(e, a) {
            return a = a || window.location.href, (a = RegExp("[?&]" + (e = e.replace(/[\[\]]/g, "\\><")) + "(=([^&#]*)|&|#|$)").exec(a)) ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
        },
        reBuildPlayer() {
            const $activeEpisode = $("body").find(".haun-episode.active");
            const episodeSlug = $activeEpisode.data("episode-slug");
            const serverId = $activeEpisode.data("server");
            const postId = $activeEpisode.data("post-id");
            $("#hn-player-wrapper").css("z-index", "99999");
            $("#icon-rebuild-player").addClass("animate-spin");
            $("button.close").trigger("click");
            $("#hn-player-loader").addClass("block");
            this.haunPlayerResetCache(episodeSlug, serverId, postId);
            this.haunPlayer(episodeSlug, serverId, postId, "", "", player_epis.custom_var);
            console.log("Player has been reloaded!");
        },
        isAdult() {
            if (this.isLoaded) return;
            this.isLoaded = true;

            if (typeof player_epis !== 'undefined') {
                const html = `
                    <div x-data="{ showModal: ${sessionStorage.getItem('is_adult') !== 'dont-show'} }" 
                         x-show="showModal" 
                         :class="{ 'hidden': !showModal }" 
                         class="absolute inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
                        <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                            <div class="flex justify-between items-center border-b pb-3">
                                <h4 class="text-lg font-semibold text-gray-800">${player_epis.adult_title}</h4>
                                <button @click="showModal = false" class="text-gray-500 hover:text-gray-700">
                                    <span class="text-xl font-bold">&times;</span>
                                </button>
                            </div>
                            <div class="py-4">
                                <p class="text-gray-700">${player_epis.adult_content}</p>
                            </div>
                            <div class="flex justify-between items-center border-t pt-3">
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2 modal-check" 
                                           @change="sessionStorage.setItem('is_adult', $event.target.checked ? 'dont-show' : 'show')" 
                                           :checked="sessionStorage.getItem('is_adult') === 'dont-show'" />
                                    ${___('show_only_once')}
                                </label>
                                <div class="flex space-x-2">
                                    <a href="/" class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                                        ${___('exit_btn')}
                                    </a>
                                    <button @click="showModal = false" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                                        ${___('is_18plus')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                if (player_epis.is_adult === '1' && sessionStorage.getItem('is_adult') !== 'dont-show') {
                    $('#hn-player-wrapper').append(html);
                }
            }

            this.isLoaded = false;
            return false;
        }, 
        parseAdCode (){
            var adscode 	= player_epis.jw_adcode;
            var regex = /"tag":\s*"([^"]+)"|"client":\s*"([^"]+)"|"vpaidmode":\s*"([^"]+)"|"skipoffset":\s*(\d+)|"skipmessage":\s*"([^"]+)"|"skiptext":\s*"([^"]+)"/g;
            var match;
            var advertising = {};
            while ((match = regex.exec(adscode)) !== null) {
                if (match[1]) advertising.tag = match[1];
                if (match[2]) advertising.client = match[2];
                if (match[3]) advertising.vpaidmode = match[3];
                if (match[4]) advertising.skipoffset = match[4];
                if (match[5]) advertising.skipmessage = match[5];
                if (match[6]) advertising.skiptext = match[6];
            }
            return advertising;
        }
    }
}
$(document).on("click", ".hnload-ajax-epis", function (event) {
    const hnEpAjax = window.Load_Player();
    hnEpAjax.loadEpisode(event);
});

document.addEventListener('DOMContentLoaded', () => {
    Alpine.start();
});




