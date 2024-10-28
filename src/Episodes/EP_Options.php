<?php
namespace HNMG\Episodes;

class EP_Options {
	
	public function register() {
		add_filter('hnmg_maintab_option', [$this, 'load_main_tab_two'], 2);
		add_action('hnmg_opentab_option', [$this, 'tabitem_player_bottom']);
	}
	
	public function load_main_tab_two($items) {
		$items['player'] 		= '<i class="hnmgbox-icon hnmgbox-icon-play"></i>' . esc_html__('Player Options', 'hnvlxx');
		$items['optimization']  = '<i class="hnmgbox-icon hnmgbox-icon-link"></i>' . esc_html__('SEO Optimization', 'hnvlxx');
		return $items;
	}
	
	public function tabitem_player_bottom($hnmgbox) {
		$hnmgbox->open_tab_item( 'optimization' );
			$hnmgbox->add_field(array(
				'name' => esc_html__( 'Auto config Yoast SEO', 'hnvlxx' ),
				'id' => 'auto_config_yoast_seo',
				'type' => 'switcher',
				'default' => 'on',
			));
			$hnmgbox->add_field(array(
				'name' => esc_html__( 'Display custom title on the info page (including episode, release, quality...)', 'hnvlxx' ),
				'id' => 'display_custom_title',
				'type' => 'switcher',
				'default' => 'off',
			));
			$hnmgbox->add_field(array(
				'name' => esc_html__( 'Remove the categories prefix', 'hnvlxx' ),
				'id' => 'haun_remove_categories_prefix',
				'type' => 'switcher',
				'default' => 'on',
				'desc' => esc_html__( 'Category URLs in WordPress contain a prefix, usually <strong>/category/</strong>, this feature removes that prefix, for categories only.', 'hnvlxx' ),
			));
			$hnmgbox->add_field(array(
				'id'    	=> 'haun_seo_title',
				'type'  	=> 'text',
				'name'  	=> __('SEO title (Page movie info)', 'hnvlxx'),
				'default' 	=> '{title} {quality}',
				'desc'    	=> __('Modify your SEO title by editing it right here', 'hnvlxx'),
				'attributes' => array(
					'placeholder' => 'Film {title} {quality}',
				),
				'options' => array(
					'helper' => '<i class="hnmgbox-icon hnmgbox-icon-check"></i> {title} = film title, {episode} = film episode, {quality} = film quality, {release} = released, {org_title} = original title, {runtime} = duration, {country} = country'
				),
			));
			$hnmgbox->add_field(array(
				'id'       	=> 'haun_seo_title_watch_page',
				'type'     	=> 'text',
				'name'    	=> __('SEO title (Page watch movie)', 'hnvlxx'),
				'default'   => 'Watch {title} {episode} {quality}',
				'attributes' => array(
					'placeholder' => 'Watch {title} {episode} {quality}',
				),
				'options' => array(
					'helper' => '<i class="hnmgbox-icon hnmgbox-icon-check"></i> {title} = film title, {episode} = film episode, {quality} = film quality, {release} = released, {org_title} = original title, {runtime} = duration, {country} = country'
				),
				'desc'      => __('Modify your SEO title by editing it right here', 'hnvlxx'),
			));
			$hnmgbox->add_field(array(
				'id'             => 'haun_url_type',
				'type'           => 'select',
				'name'           => __('URL Type', 'hnvlxx'),
				'items'        => array(
					'slug-1'     => 'https://haunytb.com/watch/the-movie-title-eps-1-sv1',
					'slug-2'     => 'https://haunytb.com/watch-the-movie-title/episode-1-sv1.html',
					'slug-3'     => 'https://haunytb.com/watch-the-movie-title/1-sv1.html',
					'slug-4'     => 'https://haunytb.com/the-movie-title (only xxx 1 episode)',
				),
				'default'        => 'slug-1',
				'grid' 		=> '3-of-6',
			));
		$hnmgbox->close_tab_item( 'optimization' );
			
		$hnmgbox->open_tab_item( 'player' );
				$hnmgbox->add_tab( array(
					'name' => esc_html__( 'Player tabs', 'hnvlxx' ),
					'id' => 'player-tabs',
					'items' => array(
						'player-general' => '<i class="hnmgbox-icon hnmgbox-icon-home"></i>' . esc_html__( 'General', 'hnvlxx' ),
						'player-jwplayer' => '<i class="hnmgbox-icon hnmgbox-icon-play"></i>' . esc_html__( 'JW Player Basic Settings', 'hnvlxx' ),
						'player-advertising' => '<i class="hnmgbox-icon hnmgbox-icon-folder"></i>' . esc_html__( 'ADS Vast Settings', 'hnvlxx' ),
					),
				));
					$hnmgbox->open_tab_item( 'player-general' );
						$hnmgbox->add_field(array(
							'name' => esc_html__( 'Resume Playback', 'hnvlxx' ),
							'id' => 'resume_playback',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => esc_html__( 'Use localStorage to remember where the user left off and resume playback at the same time offset when revisiting the page.', 'hnvlxx' ),
						));
						$hnmgbox->add_field(array(
							'name' => esc_html__( 'Auto reset cache', 'hnvlxx' ),
							'id' => 'auto_reset_cache',
							'type' => 'switcher',
							'default' => 'off',
							'desc' => esc_html__( 'Automatically clear the cache if the player error', 'hnvlxx' ),
						));
						$hnmgbox->add_field(array(
						  'id'      => 'player_error_detect',
						  'type'    => 'radio',
						  'name'   => esc_html__( 'JWPlayer Error Detect', 'hnvlxx' ),
						  'class'   => 'horizontal',
						  'items' => array(
							'display_modal'    => esc_html__( 'Show Modal Popup', 'hnvlxx' ),
							'autoload_server'   => esc_html__( 'Auto Play Alternative Server', 'hnvlxx' )
						  ),
						  'default'   => 'display_modal',
						));
						
						$hnmgbox->add_field(array(
							'name' => __('Autostart', 'hnvlxx'),
							'id' => 'jw_player_autoplay',
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => __('Auto Pause Player', 'hnvlxx'),
							'id' => 'jw_player_autopause',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => __('Automatically pauses the player based on certain rules', 'hnvlxx'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_share',
							'name' => __('Share Button', 'hnvlxx'),
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => esc_html__( 'Cache Player', 'hnvlxx' ),
							'id' => 'player_cache',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => esc_html__( 'Enable cache link' , 'hnvlxx' ),
						));
						$hnmgbox->add_field(array(
							'id' => 'player_cache_time',
							'name' =>  esc_html__( 'Cache time', 'hnvlxx' ),
							'type' => 'number',
							'default' => '180',
							'desc' => esc_html__( 'Cache expired time. (seconds)', 'hnvlxx' ),
							'options' => array(
								'unit' => 'seconds'
							)
						));
					$hnmgbox->close_tab_item( 'player-general' );
					
					$hnmgbox->open_tab_item( 'player-jwplayer' );
						$hnmgbox->add_field(array(
							'id' => 'jw_player_version',
							'name' => __('License Version', 'hnvlxx'),
							'type' => 'select',
							'desc' => sprintf(
								__('Select which edition of JW Player you own %s', 'hnvlxx'),
								', <a href="' . esc_url('http://www.jwplayer.com/pricing/') . '" target="_blank" rel="nofollow">pricing page</a>'
							),
							'items' => array(
								'jw_player_pro' => 'Pro (free)',
								'jw_player_premium' => 'Premium',
								'jw_player_ads' => 'Ads',
							),
							'default' => 'jw_player_pro',
						));
						$hnmgbox->add_field(array(
							'name' => __('Jwplayer License key', 'hnvlxx'),
							'id' => 'jw_player_license_key',
							'type' => 'text',
							'grid' => '3-of-8',
							'default' => 'MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g==',
							'desc' => __('A license key is required for the Pro, Premium and Ads edition.', 'hnvlxx'),
						));
						$hnmgbox->add_field( array(
							'id' => 'jw_player_logo',
							'name' => __('Logo File', 'hnvlxx'),
							'type' => 'file',
							'options' => array(
								'mime_types' => array( 'jpg', 'jpeg', 'png', 'gif', 'ico' ),
								'preview_size' => array( 'width' => '200px','height' => '60px' ),
								'multiple' => false,
							),
							'desc' => __('The URL of an external JPG, PNG or GIF image to be used as watermark (e.g. /assets/logo.png). We recommend using 24 bit PNG images with transparency', 'hnvlxx'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_logo_link',
							'name' => __('Logo link', 'hnvlxx'),
							'type' => 'text',
							'grid' => '3-of-6',
							'default' => home_url(),
							'desc' => __('The URL to visit when the watermark image is clicked. Clicking a logo will have no affect unless this is configured', 'hnvlxx'),
						));
						$hnmgbox->add_field(array(
							'name' => __('Auto hide logo', 'hnvlxx'),
							'id' => 'jw_player_logo_hide',
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => __('Logo Position', 'hnvlxx'),
							'id' => 'jw_player_logo_position',
							'type' => 'select',
							'default' => 'top-left',
							'items' => array(
								'top-left'     => __('Top left', 'hnvlxx'),
								'top-right'    => __('Top right', 'hnvlxx'),
								'bottom-left'  => __('Bottom left', 'hnvlxx'),
								'bottom-right' => __('Bottom right', 'hnvlxx'),
								'control-bar'  => __('Control bar', 'hnvlxx')
							),
							'desc' => __('This sets the corner in which to display the watermark. "control-bar" adds the logo as the leftmost icon in the right grouping of buttons in the control bar.', 'hnvlxx'),
						));
						$hnmgbox->add_field( array(
							'id' => 'jw_player_poster_image',
							'name' => __('Default poster image', 'hnvlxx'),
							'type' => 'file',
							'options' => array(
								'mime_types' => array( 'jpg', 'jpeg', 'png', 'gif', 'ico' ),
								'preview_size' => array( 'width' => '200px','height' => '200px' ),
								'multiple' => false,
							),
						));
						$hnmgbox->add_field( array(
							'id' => 'jw_player_default_subtitle',
							'name' => __('Upload Subtitle', 'hnvlxx'),
							'type' => 'file',
							'options' => array(
								'mime_types' => array('srt', 'vtt' ),
								'preview_size' => array( 'width' => '200px','height' => '60px' ),
								'multiple' => false,
							),
							'desc' => __('Add the url of the file subtitle.srt, .vtt or using the Upload button.', 'hnvlxx'),
						));
						$hnmgbox->add_field(array(
							'name' => __('Select a method to read subtitles', 'hnvlxx'),
							'id' => 'jw_player_subtitle_method',
							'type' => 'select',
							'default' => 'direct_link',
							'items' => array(
								'direct_link'  => __('Direct link', 'hnvlxx'),
								'readsub_php'  => __('Use readsub.php', 'hnvlxx')
							),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_tracks_color',
							'name' => __('Subtitle color', 'hnvlxx'),
							'type' => 'colorpicker',
							'default' => '#fff',
							'grid' => '2-of-8'
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_tracks_font_size',
							'name' => __('Subtitle font size', 'hnvlxx'),
							'type' => 'number',
							'default' => 14,
							'grid' => '2-of-8',
							'options' => array(
								'unit' => 'em'
							),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_about_text',
							'name' => __('About text', 'hnvlxx'),
							'type' => 'text',
							'grid' => '3-of-6',
							'desc' => __('Custom text to display in the right-click menu. Can only be set for the Premium and Ads Editions', 'hnvlxx'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_about_link',
							'name' => __('About link', 'hnvlxx'),
							'type' => 'text',
							'grid' => '3-of-6',
							'desc' => __('Custom URL to link to when clicking the right-click menu. Can only be set for the Premium and Ads Editions', 'hnvlxx'),
						));
					$hnmgbox->close_tab_item( 'player-jwplayer' );
						
					$hnmgbox->open_tab_item('player-advertising');
						$hnmgbox->add_field(array(
							'name' => esc_html__('Show Ads Vast', 'hnvlxx'),
							'id' => 'jw_player_show_ad',
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => esc_html__('Enable Ads For Embed', 'hnvlxx'),
							'id' => 'jw_show_embed_ads',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => __('If This Option is Enabled, Ads Will Display in Embed Links', 'hnvlxx'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_custom_ads_code',
							'name' => __('Ads code', 'hnvlxx'),
							'type' => 'code_editor',
							'options' => array(
								'language' => 'php',
								'theme' => 'tomorrow_night',
								'height' => '240px',
							),
							'desc' => sprintf(
								__('Specific advertising options. %s %s', 'hnvlxx'),
								'<br/><a href="' . esc_url('https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising') . '" target="_blank" rel="nofollow">Learn More about Advertising.</a>',
								'| <a href="' . esc_url('https://developer.jwplayer.com/jw-player/docs/developer-guide/advertising/') . '" target="_blank" rel="nofollow">Advertising Guide</a>'
							),
							'default' => '
	"advertising": {
		"tag": "'.get_template_directory_uri().'/vast-ad.xml",
		"client": "vast",
		"vpaidmode": "insecure",
		"preloadAds": true,
		"admessage": "Quảng cáo còn XX giây.",
		"skipoffset": 5,
		"skiptext": "Bỏ qua quảng cáo",
		"skipmessage": "Bỏ qua sau xxs",
	}',
						));
					$hnmgbox->close_tab_item('player-advertising');
					
				$hnmgbox->close_tab( 'player-tabs' );
			$hnmgbox->close_tab_item( 'player' );	
			
	}
	
}

?>