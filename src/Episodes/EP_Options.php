<?php
namespace HNMG\Episodes;

class EP_Options {
	
	public function register() {
		add_filter('hnmg_maintab_option', [$this, 'load_main_tab_two'], 2);
		add_action('hnmg_opentab_option', [$this, 'tabitem_player_bottom']);
		add_action('hnmg_add_general', [$this, 'hnmg_add_general']);
	}
	
	public function load_main_tab_two($items) {
		$items['player'] 		= '<i class="hnmgbox-icon hnmgbox-icon-play"></i>' . esc_html__('Player Options', 'hnmgepis');
		$items['optimization']  = '<i class="hnmgbox-icon hnmgbox-icon-link"></i>' . esc_html__('SEO Optimization', 'hnmgepis');
		return $items;
	}
	
	public function hnmg_add_general($hnmgbox) {
		$hnmgbox->add_field(array(
			'id' => 'enable_old_episode_manager',
			'name' => __('Showing old episodes manager', 'hnvlxx'),
			'type' => 'switcher',
			'desc' => __('Displays the old episodes manager in the post editor', 'hnvlxx'),
			'default' => 'on',
		));
	}
	
	public function tabitem_player_bottom($hnmgbox) {
		$hnmgbox->open_tab_item( 'optimization' );
			$hnmgbox->add_field(array(
				'name' => esc_html__( 'Auto config Yoast SEO', 'hnmgepis' ),
				'id' => 'auto_config_yoast_seo',
				'type' => 'switcher',
				'default' => 'on',
			));
			$hnmgbox->add_field(array(
				'name' => esc_html__( 'Display custom title on the info page (including episode, release, quality...)', 'hnmgepis' ),
				'id' => 'display_custom_title',
				'type' => 'switcher',
				'default' => 'off',
			));
			$hnmgbox->add_field(array(
				'name' => esc_html__( 'Remove the categories prefix', 'hnmgepis' ),
				'id' => 'haun_remove_categories_prefix',
				'type' => 'switcher',
				'default' => 'on',
				'desc' => esc_html__( 'Category URLs in WordPress contain a prefix, usually <strong>/category/</strong>, this feature removes that prefix, for categories only.', 'hnmgepis' ),
			));
			$hnmgbox->add_field(array(
				'id'    	=> 'haun_seo_title',
				'type'  	=> 'text',
				'name'  	=> __('SEO title (Page movie info)', 'hnmgepis'),
				'default' 	=> '{title} {quality}',
				'desc'    	=> __('Modify your SEO title by editing it right here', 'hnmgepis'),
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
				'name'    	=> __('SEO title (Page watch movie)', 'hnmgepis'),
				'default'   => 'Watch {title} {episode} {quality}',
				'attributes' => array(
					'placeholder' => 'Watch {title} {episode} {quality}',
				),
				'options' => array(
					'helper' => '<i class="hnmgbox-icon hnmgbox-icon-check"></i> {title} = film title, {episode} = film episode, {quality} = film quality, {release} = released, {org_title} = original title, {runtime} = duration, {country} = country'
				),
				'desc'      => __('Modify your SEO title by editing it right here', 'hnmgepis'),
			));
		$hnmgbox->close_tab_item( 'optimization' );
			
		$hnmgbox->open_tab_item( 'player' );
				$hnmgbox->add_tab( array(
					'name' => esc_html__( 'Player tabs', 'hnmgepis' ),
					'id' => 'player-tabs',
					'items' => array(
						'player-general' => '<i class="hnmgbox-icon hnmgbox-icon-home"></i>' . esc_html__( 'General', 'hnmgepis' ),
						'player-jwplayer' => '<i class="hnmgbox-icon hnmgbox-icon-play"></i>' . esc_html__( 'JW Player Basic Settings', 'hnmgepis' ),
						'player-advertising' => '<i class="hnmgbox-icon hnmgbox-icon-folder"></i>' . esc_html__( 'ADS Vast Settings', 'hnmgepis' ),
					),
				));
					$hnmgbox->open_tab_item( 'player-general' );
						$hnmgbox->add_field(array(
							'name' => esc_html__( 'Resume Playback', 'hnmgepis' ),
							'id' => 'resume_playback',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => esc_html__( 'Use localStorage to remember where the user left off and resume playback at the same time offset when revisiting the page.', 'hnmgepis' ),
						));
						$hnmgbox->add_field(array(
							'name' => esc_html__( 'Auto reset cache', 'hnmgepis' ),
							'id' => 'auto_reset_cache',
							'type' => 'switcher',
							'default' => 'off',
							'desc' => esc_html__( 'Automatically clear the cache if the player error', 'hnmgepis' ),
						));
						$hnmgbox->add_field(array(
						  'id'      => 'player_error_detect',
						  'type'    => 'radio',
						  'name'   => esc_html__( 'JWPlayer Error Detect', 'hnmgepis' ),
						  'class'   => 'horizontal',
						  'items' => array(
							'display_modal'    => esc_html__( 'Show Modal Popup', 'hnmgepis' ),
							'autoload_server'   => esc_html__( 'Auto Play Alternative Server', 'hnmgepis' )
						  ),
						  'default'   => 'display_modal',
						));
						
						$hnmgbox->add_field(array(
							'name' => __('Autostart', 'hnmgepis'),
							'id' => 'jw_player_autoplay',
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => __('Auto Pause Player', 'hnmgepis'),
							'id' => 'jw_player_autopause',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => __('Automatically pauses the player based on certain rules', 'hnmgepis'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_share',
							'name' => __('Share Button', 'hnmgepis'),
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => esc_html__( 'Cache Player', 'hnmgepis' ),
							'id' => 'player_cache',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => esc_html__( 'Enable cache link' , 'hnmgepis' ),
						));
						$hnmgbox->add_field(array(
							'id' => 'player_cache_time',
							'name' =>  esc_html__( 'Cache time', 'hnmgepis' ),
							'type' => 'number',
							'default' => '180',
							'desc' => esc_html__( 'Cache expired time. (seconds)', 'hnmgepis' ),
							'options' => array(
								'unit' => 'seconds'
							)
						));
					$hnmgbox->close_tab_item( 'player-general' );
					
					$hnmgbox->open_tab_item( 'player-jwplayer' );
						$hnmgbox->add_field(array(
							'id' => 'jw_player_version',
							'name' => __('License Version', 'hnmgepis'),
							'type' => 'select',
							'items' => array(
								'jw_player_pro' => 'Pro (free)',
								'jw_player_premium' => 'Premium',
								'jw_player_ads' => 'Ads',
							),
							'default' => 'jw_player_pro',
						));
						$hnmgbox->add_field(array(
							'name' => __('Jwplayer License key', 'hnmgepis'),
							'id' => 'jw_player_license_key',
							'type' => 'text',
							'grid' => '3-of-8',
							'default' => 'MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g==',
							'desc' => __('A license key is required for the Pro, Premium and Ads edition.', 'hnmgepis'),
						));
						$hnmgbox->add_field( array(
							'id' => 'jw_player_logo',
							'name' => __('Logo File', 'hnmgepis'),
							'type' => 'file',
							'options' => array(
								'mime_types' => array( 'jpg', 'jpeg', 'png', 'gif', 'ico' ),
								'preview_size' => array( 'width' => '200px','height' => '60px' ),
								'multiple' => false,
							),
							'desc' => __('The URL of an external JPG, PNG or GIF image to be used as watermark (e.g. /assets/logo.png). We recommend using 24 bit PNG images with transparency', 'hnmgepis'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_logo_link',
							'name' => __('Logo link', 'hnmgepis'),
							'type' => 'text',
							'grid' => '3-of-6',
							'default' => home_url(),
							'desc' => __('The URL to visit when the watermark image is clicked. Clicking a logo will have no affect unless this is configured', 'hnmgepis'),
						));
						$hnmgbox->add_field(array(
							'name' => __('Auto hide logo', 'hnmgepis'),
							'id' => 'jw_player_logo_hide',
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => __('Logo Position', 'hnmgepis'),
							'id' => 'jw_player_logo_position',
							'type' => 'select',
							'default' => 'top-left',
							'items' => array(
								'top-left'     => __('Top left', 'hnmgepis'),
								'top-right'    => __('Top right', 'hnmgepis'),
								'bottom-left'  => __('Bottom left', 'hnmgepis'),
								'bottom-right' => __('Bottom right', 'hnmgepis'),
								'control-bar'  => __('Control bar', 'hnmgepis')
							),
							'desc' => __('This sets the corner in which to display the watermark. "control-bar" adds the logo as the leftmost icon in the right grouping of buttons in the control bar.', 'hnmgepis'),
						));
						$hnmgbox->add_field( array(
							'id' => 'jw_player_poster_image',
							'name' => __('Default poster image', 'hnmgepis'),
							'type' => 'file',
							'options' => array(
								'mime_types' => array( 'jpg', 'jpeg', 'png', 'gif', 'ico' ),
								'preview_size' => array( 'width' => '200px','height' => '200px' ),
								'multiple' => false,
							),
						));
						$hnmgbox->add_field( array(
							'id' => 'jw_player_default_subtitle',
							'name' => __('Upload Subtitle', 'hnmgepis'),
							'type' => 'file',
							'options' => array(
								'mime_types' => array('srt', 'vtt' ),
								'preview_size' => array( 'width' => '200px','height' => '60px' ),
								'multiple' => false,
							),
							'desc' => __('Add the url of the file subtitle.srt, .vtt or using the Upload button.', 'hnmgepis'),
						));
						$hnmgbox->add_field(array(
							'name' => __('Select a method to read subtitles', 'hnmgepis'),
							'id' => 'jw_player_subtitle_method',
							'type' => 'select',
							'default' => 'direct_link',
							'items' => array(
								'direct_link'  => __('Direct link', 'hnmgepis'),
								'readsub_php'  => __('Use readsub.php', 'hnmgepis')
							),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_tracks_color',
							'name' => __('Subtitle color', 'hnmgepis'),
							'type' => 'colorpicker',
							'default' => '#fff',
							'grid' => '2-of-8'
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_tracks_font_size',
							'name' => __('Subtitle font size', 'hnmgepis'),
							'type' => 'number',
							'default' => 14,
							'grid' => '2-of-8',
							'options' => array(
								'unit' => 'em'
							),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_about_text',
							'name' => __('About text', 'hnmgepis'),
							'type' => 'text',
							'grid' => '3-of-6',
							'desc' => __('Custom text to display in the right-click menu. Can only be set for the Premium and Ads Editions', 'hnmgepis'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_about_link',
							'name' => __('About link', 'hnmgepis'),
							'type' => 'text',
							'grid' => '3-of-6',
							'desc' => __('Custom URL to link to when clicking the right-click menu. Can only be set for the Premium and Ads Editions', 'hnmgepis'),
						));
					$hnmgbox->close_tab_item( 'player-jwplayer' );
						
					$hnmgbox->open_tab_item('player-advertising');
						$hnmgbox->add_field(array(
							'name' => esc_html__('Show Ads Vast', 'hnmgepis'),
							'id' => 'jw_player_show_ad',
							'type' => 'switcher',
							'default' => 'on',
						));
						$hnmgbox->add_field(array(
							'name' => esc_html__('Enable Ads For Embed', 'hnmgepis'),
							'id' => 'jw_show_embed_ads',
							'type' => 'switcher',
							'default' => 'on',
							'desc' => __('If This Option is Enabled, Ads Will Display in Embed Links', 'hnmgepis'),
						));
						$hnmgbox->add_field(array(
							'id' => 'jw_player_custom_ads_code',
							'name' => __('Ads code', 'hnmgepis'),
							'type' => 'code_editor',
							'options' => array(
								'language' => 'php',
								'theme' => 'tomorrow_night',
								'height' => '240px',
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