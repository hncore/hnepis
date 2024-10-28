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
        
        haunResumeVideo(resumeId, playerInstance);
        haunJwConfig(playerInstance);
        
        @if($adblock)
        playerInstance.on('adBlock', function() {
            playerInstance.pause();
            jQuery("#haun-player-loader").show().html('{!! EP_Helper::compress_htmlcode($adblock_msg) !!}');
        });
        @endif
    }
</script>
