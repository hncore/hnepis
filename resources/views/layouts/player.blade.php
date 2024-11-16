@use('HNMG\EP_Load\EP_Helper')
<script>
    var resumeId = encodeURI('{{ md5($sources) }}');
    var playerInstance = jwplayer('ajax-player');
    if (typeof playerInstance !== 'undefined') {
        playerInstance.setup({
            key: "{{ $jwplayerkey }}",
            primary: "html5",
            playlist: [{
                title: "{{ get_the_title($post_id) }}",
                image: "{{ $poster }}",
                sources: {!! $sources !!},
                tracks: {!! $tracks !!},
                captions: {
                    color: "{{ $captions_color }}",
                    fontSize: {{ $captions_fontsize }},
                    backgroundOpacity: 0,
                    edgeStyle: "raised"
                }
            }],
            @if($player_logo)
                logo: {
                    file: "{{ $player_logo }}",
                    link: "{{ $player_logo_link }}",
                    hide: "{{ $player_logo_hide }}",
                    target: "_blank",
                    position: "{{ $logo_position }}",
                },
            @endif
            @if($floating == '1')
                floating: {
                    dismissible: true
                },
            @endif
            @if($autopause)
                autoPause: {
                    viewability: true,
                    pauseAds: true
                },
            @endif
            base: ".",
            width: "100%",
            height: "100%",
            hlshtml: true,
            autostart: {{ $autoplay }},
            fullscreen: true,
            playbackRateControls: true,
            displayPlaybackLabel: true,
            aspectratio: "16:9",
            @if($player_sharing)
            sharing: {
                sites: ["reddit", "facebook", "twitter", "googleplus", "email", "linkedin"]
            },
            @endif
            
            @if($jwplayer_showad)
            {!! $jw_adcode !!}
            @endif
        });
        
		const loadPlayerInstance = window.Load_Player();
		loadPlayerInstance.haunJwConfig(playerInstance);
		loadPlayerInstance.haunResumeVideo(resumeId, playerInstance);
        playerInstance.on('ready', function() {
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

        @if($adblock)
        playerInstance.on('adBlock', function() {
            playerInstance.pause();
            jQuery("#haun-player-loader").show().html('{!! EP_Helper::compress_htmlcode($adblock_msg) !!}');
        });
        @endif
    }
</script>
