import $ from "jquery";
import './jwplayer.js';

function ___(text) {
    return player_epis?.i18n[text] || text;
};

function haunPlayer(e, a, l, i, t, o) {
    return $("#ajax-player").length && $.ajax({
        url: player_epis.player_url,
        dataType: "html",
        data: {
            episode_slug: e,
            server_id: a,
            subsv_id: t,
            post_id: l,
            nonce: i,
            custom_var: o
        },
        beforeSend: function() {
            $("#hn-player-loader").show().html('<p class="loading-player">' + ___('player_loading') + '</p>')
        },
        success: function(e) {
            e = JSON.parse(e).data;
            1 == e.status && (localStorage.removeItem("reSizePlayerObject"),
            $("#hn-player-loader").css("display", "none"),
            $("#ajax-player").html(e.sources),
            $("#hn-player-wrapper").css("padding-top", "0"),
            $("#icon-rebuild-player").removeClass("animate-spin"))
        },
        error: function(e, a, l) {
            console.log(e.status + " " + l)
        }
    }),
    !1
}

$(document).ready(function() {
    let episodeSlug, server, postId, svid;

    if ($("#ajax-player").length) {
        svid = getURLParameterValues("svid");
        if (svid == null) {
            haunPlayer(
                player_epis.episode_slug,
                player_epis.server,
                player_epis.post_id,
                $("body").data("nonce"),
                "",
                player_epis.custom_var
            );
        } else {
            episodeSlug = $(".haun-btn.bg-red-600").data("episode-slug");
            server = $(".haun-btn.bg-red-600").data("server");
            postId = $(".haun-btn.bg-red-600").data("post-id");

            if (typeof playerInstance !== 'undefined') {
                playerInstance.pause();
            }

            $("#server-item-" + svid).addClass("bg-red-600").siblings().removeClass("bg-red-600");
            $("#hn-player-wrapper").css("z-index", "99999");
            $("button.close").trigger("click");
            haunPlayer(episodeSlug, server, postId, "", svid, player_epis.custom_var);
        }

        setTimeout(function() {
            if ($(document).find(".haun-btn.bg-red-600").data("embed") == 1) {
                $("#autonext").hide();
            } else {
                $("#autonext").show();
            }
        }, 2000);
    }

    $("body").on("click", ".play-listsv", function() {
        const $this = $(this);
        episodeSlug = $this.data("episode-slug");
        server = $this.data("server");
        postId = $this.data("post-id");

        if (!$this.hasClass("bg-red-600")) {
            $(".play-listsv.bg-red-600").removeClass("bg-red-600");
            $this.addClass("bg-red-600");
            $("#hn-player-wrapper").css("z-index", "99999");
            $("#hn-player-loader").show().css("position", "absolute");
            $("button.close").trigger("click");
            haunPlayer(episodeSlug, server, postId, "", "", player_epis.custom_var);
        }
    });

    $("body").on("click", "#reBuildPlayer", function() {
        episodeSlug = $(".haun-btn.bg-red-600").data("episode-slug");
        server = $(".haun-btn.bg-red-600").data("server");
        postId = $(".haun-btn.bg-red-600").data("post-id");

        $("#hn-player-wrapper").css("z-index", "99999");
        $("#icon-rebuild-player").addClass("animate-spin");
        $("button.close").trigger("click");
        $("#hn-player-loader").show().css("position", "absolute");
        haunPlayerResetCache(episodeSlug, server, postId);
        haunPlayer(episodeSlug, server, postId, "", "", player_epis.custom_var);
        console.log("Player has been reloaded!");
    });
});

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

window.getURLParameterValues = function(e, a) {
    return a = a || window.location.href, (a = RegExp("[?&]" + (e = e.replace(/[\[\]]/g, "\\><")) + "(=([^&#]*)|&|#|$)").exec(a)) ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
}

window.haunJwConfig = function(playerInstance) {
    playerInstance.on("ready", function() {
        is_Mobile();
        $("#hn-player-loader").hide();
    });

    playerInstance.on("error", function(error) {  
        if (player_epis.player_error_detect === "display_modal") {
            haunPlayerErrorDetect();
        } else if (player_epis.player_error_detect === "autoload_server") {
            let currentIndex = 0;
    
            function tryNextServer() {
                if (currentIndex >= svlists.length) {
                    return;
                }
                const serverId = svlists[currentIndex];
                $("#server-item-" + serverId).trigger("click");
                setTimeout(function() {
                    if (playerInstance.getState() === "error") {
                        currentIndex++;
                        tryNextServer(); 
                    }
                }, 3000); 
            }
    
            tryNextServer(); 
        } else if ($.fn.customErrorHandler) {
            customErrorHandler();
        }
    
        if (player_epis.auto_reset_cache === 1) {
            const episodeSlug = $(".haun-btn.bg-red-600").data("episode-slug");
            const server = $(".haun-btn.bg-red-600").data("server");
            const postId = $(".haun-btn.bg-red-600").data("post-id");
            haunPlayerResetCache(episodeSlug, server, postId);
        }
    });
    

    playerInstance.on("play", function() {
        if (typeof window.reLoadPlayerModal !== 'undefined') {
            $("#reLoadPlayerModal").remove();
        }
    });


    playerInstance.on("complete", function() {
        haunPlayerAutoNext();
    });

    playerInstance.on("buffer", function() {
        $("#hn-player-loader").show(); 
    });
    playerInstance.on("bufferFull", function() {
        $("#hn-player-loader").hide(); 
    });
};

window.haunPlayerResetCache = function(e, a, t) {
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
}

window.haunPlayerErrorDetect = function() {
    window.reLoadPlayerModal();
}

window.reLoadPlayerModal = function() {
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
                    <button id="reBuildPlayer" class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 mt-4 rounded inline-flex items-center">
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
};

window.haunResumeVideo = function (videoId, playerInstance) {
    if (player_epis.resume_playback) {
        playerInstance.on("ready", function () {
            if (typeof Storage !== "undefined") {
                const storageKey = `HauNPlayerPosition-${videoId}`;
                let position = localStorage.getItem(storageKey);
                position = position === null || position === "undefined" ? 0 : parseFloat(position);
                if (position > 0 && Math.abs(playerInstance.getDuration() - position) > 5) {
                    playerInstance.seek(position);
                    const modalHtml = `
                        <div id="resume" class="absolute inset-0 flex items-center justify-center z-50 bg-black/[.86]">
                            <div class="bg-slate-900 border border-gray-900 mx-2 md:mx-0 px-5 py-4 md:py-10 rounded-2xl text-center w-full md:w-6/12">
                                <p>${___('resume_text')} </p>
                                <div class="text-red-500 font-bold mt-2 md:mt-4">${formatSeconds(position)}</div>
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
                    $('#hn-player-wrapper').on('click', '.no-resume', function () {
                        $('#resume').remove();
                        playerInstance.play();
                    });
                    $('#hn-player-wrapper').on('click', '.yes-resume', function () {
                        $('#resume').remove();
                        localStorage.setItem(storageKey, 0);
                        playerInstance.seek(0);
                        playerInstance.play();
                    });
                }
                $(window).on('unload', function () {
                    localStorage.setItem(storageKey, playerInstance.getPosition());
                });
            } else {
                console.log("Your browser is too old!");
            }
        });
    }
};

window.formatSeconds = function(e) {
    var a = new Date(1970, 0, 1);
    return a.setSeconds(e), a.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
}

window.is_Mobile = function() {
    var e, a = !1;
    return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (a = !0), a
}

