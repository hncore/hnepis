import Alpine from 'alpinejs';
import $ from "jquery";
import axios from 'axios';
import Cookies from 'js-cookie';
import './jwplayer.js';

function ___(text) {
    return player_epis?.i18n[text] || text;
};

window.Alpine = Alpine;
window.Find_Episodes = function () {
    return {
        showResults: false,
        searchTimeout: null,
        EpisodeItemSearch() {
            clearTimeout(this.searchTimeout);
            const query = this.$refs.searchInput.value.toLowerCase();
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
                    resultContainer.html(activeEpisodes.map((_, ep) => ep.outerHTML).get().join(""));
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
        }
    };
};
window.Epi_Pagination = function () {
    return {
        activeServer: 0,
        activeEpisodeRange: 0,
        init() {
            const activeEpisode = document.querySelector('.haun-episode.active');
            if (activeEpisode) {
                const server = parseInt(activeEpisode.getAttribute('data-server')) - 1;
                const episodeSlug = activeEpisode.getAttribute('data-episode-slug');
                this.activeServer = server;
                
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
        }
    };
};
window.Epi_Pagination_Table = function () {
    return {
        activeTab: 0,
        init() {
            const activeEpisode = document.querySelector('.haun-episode.active');
            if (activeEpisode) {
                const server = parseInt(activeEpisode.getAttribute('data-server')) - 1;
                const episodeSlug = activeEpisode.getAttribute('data-episode-slug');
                this.activeTab = server;
                this.scrollToActiveEpisode(activeEpisode);
            }
        },
        setActiveTab(tabIndex) {
            this.activeTab = tabIndex;
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
        }
    };
};
window.Epi_Pagination_List = function () {
    return {
        init() {
            const activeEpisode = document.querySelector('.haun-episode.active');
            if (activeEpisode) {
                this.scrollToActiveEpisode(activeEpisode);
            }
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
        haunPlayer(episodeSlug, serverId, postId, nonce, subsvId, customVar) {
            if (this.isLoading) return;
            if (!$("#ajax-player").length) return false;
            this.isLoading = true;
            const data = new FormData();
            data.append('post_id', postId);
            data.append('episode_slug', episodeSlug);
            data.append('server_id', serverId);
            data.append('subsv_id', subsvId);
            data.append('nonce', nonce || '');
            data.append('custom_var', customVar || '');
            $("#hn-player-loader").html('<p class="loading-player">' + ___('player_loading') + '</p>');
            axios.post(player_epis.player_url, data, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(response => {
                const hnresponse = response.data.data;
                if (hnresponse.status) {
                    localStorage.removeItem("reSizePlayerObject");
                    $("#hn-player-loader").empty();
                    $("#ajax-player").html(hnresponse.sources);
                    $("#icon-rebuild-player").removeClass("animate-spin");
                    $("#hn-player-wrapper").css("paddingTop", "0");
                }
            })
            .catch(error => {
                console.log(`${error}`);
            }).finally(() => {
                this.isLoading = false;
            });
        
            return false;
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
                url: player_epis.ajax_url,
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
        haunJwConfig(playerInstance) {
            playerInstance.on("ready", () => {
                this.isMobile();
               
            });
        
            playerInstance.on("error", (error) => {
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
                playerInstance.on("ready", () => {
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
                                        <div class="text-red-500 font-bold mt-2 md:mt-4">${this.formatSeconds(position)}</div> <!-- No error here -->
                                        <div class="flex justify-center space-x-2 mt-2 md:mt-4">
                                            <button class="yes-resume bg-red-500 hover:bg-red-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
                                                ${___('playback')}
                                            </button>
                                            <button class="no-resume bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
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
                                localStorage.setItem(storageKey, 0);
                                playerInstance.seek(0);
                                playerInstance.play();
                            });
                        }
                        $(window).on('unload', () => {
                            localStorage.setItem(storageKey, playerInstance.getPosition());
                        });
                    } else {
                        console.log("Your browser is too old!");
                    }
                });
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
            if (this.isLoading) return;
            this.isLoading = true;

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

            this.isLoading = false;
            return false;
        }, 
    }
}
window.Button_Player = function () {
    return {
        isAutoNext: false,
        isLightOn: true,
        isReportOpen: false,
        checkbox_list: '',
        clickedButton: null,
        currentForm: null,
        toggleLightText: ___('Light On'),
        init() {
            this.isAutoNext = sessionStorage.getItem('autonext') === 'On';
            this.updateCurrentEpisode();
            const reportedKey = `report_${player_epis.post_id}_${player_epis.server || 1}_${player_epis.episode_slug || ''}`;
            if (Cookies.get(reportedKey)) {
                $('#submitReport').prop('disabled', true).text('Reported');
            }
        },
        ReportOpen() {
            const self = this;
            self.checkbox_list = '';
            $.each(haunrp_cfg, function (i, item) {
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
                            <h2 class="text-xl font-semibold text-green-500">Report Issue</h2>
                            <button id="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
                        </div>

                        <!-- Body -->
                        <div class="p-4 space-y-4">
                            <div class="haun-content">
                                <div id="modalMessage" class="haun-message mb-4 text-red-500 hidden"></div>
                                <ul id="issuesList" class="space-y-2">
                                ` + self.checkbox_list + `
                                </ul>
                            </div>
                            <div id="reportForm" class="haun-form hidden">
                                <input type="text" id="userName" class="w-full px-3 py-2 border rounded" placeholder="Name or Email">
                                <textarea rows="5" id="userMessage" class="w-full px-3 py-2 border rounded mt-2" placeholder="Message"></textarea>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="flex justify-end p-4 border-t space-x-2">
                            <button id="closeModalFooter" class="bg-gray-300 px-4 py-2 rounded text-gray-800">Close</button>
                            <button id="submitReport" class="bg-blue-500 px-4 py-2 rounded text-white">Submit Report</button>
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
        updateCurrentEpisode() {
            this.currEp = document.querySelector('.haun-episode.active');
            if (!this.currEp) {
                this.currEp = document.querySelector('.haun-episode');
                if (this.currEp) {
                    this.currEp.classList.add('active');
                }
            }
        },
        Next_Episode() {
            this.updateCurrentEpisode(); 
            if (this.currEp && this.currEp.dataset.position !== 'last') {
                this.currEp.classList.remove('active');
                this.currEp = this.currEp.nextElementSibling;
                if (this.currEp) {
                    this.currEp.classList.add('active');
                    this.goToEpisode(this.currEp);
                }
            } else {
                alert(___('End of episode list'));
            }
        },
        Prev_Episode() {
            this.updateCurrentEpisode();
            if (this.currEp && this.currEp.dataset.position !== 'first') {
                this.currEp.classList.remove('active');
                this.currEp = this.currEp.previousElementSibling;
                if (this.currEp) {
                    this.currEp.classList.add('active');
                    this.goToEpisode(this.currEp);
                }
            } else {
                alert(__('First of episode list'));
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
        } 
    }
}

Alpine.start();

window.Load_Embed = function(){
	var adscode 	= player_epis.jw_adcode;
	var regex = /"tag":\s*"([^"]+)"|"client":\s*"([^"]+)"|"vpaidmode":\s*"([^"]+)"|"skipoffset":\s*(\d+)|"skipmessage":\s*"([^"]+)"|"skiptext":\s*"([^"]+)"/g;
	var jwplayer_key 	= player_epis.jwplayer_key;
	var playerInstance 	= jwplayer('haun-player');
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
	playerInstance.setup({
		key: jwplayer_key,
		file: 'https://dl.dropboxusercontent.com/s/s2x75z3e2j9c3cr/1s_blank.mp4?dl=0',
		width: '100%',
		primary: 'html5',
		controls: true,
		autostart: true,
		aspectratio: '16:9',
		advertising: advertising
	});
	playerInstance.on('complete', function(event){ 
		$('#haun-embed').show();
		playerInstance.remove();
	});
	playerInstance.on('adSkipped', function(event){
		$('#haun-embed').show();
		playerInstance.remove();
	});
	playerInstance.on('adComplete', function(event){ 
		$('#haun-embed').show();
		playerInstance.remove();
	});
}




