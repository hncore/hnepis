<?php
namespace HNMG\Episodes;

class EP_Options {
	
	public function register() {
		add_filter('hnmg_maintab_option', [$this, 'load_main_tab_two'], 2);
		add_action('hnmg_opentab_option', [$this, 'tabitem_player_bottom']);
		add_action('hnmg_add_general', [$this, 'hnmg_add_general']);
	}
	
	public function load_main_tab_two($items) {
		$items['player'] 		= '<i class="hnmgbox-icon hnmgbox-icon-play"></i>' . esc_html__('All Options', 'hnmgepis');
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
		$hnmgbox->open_tab_item( 'player' );
				$hnmgbox->add_tab( array(
					'name' => esc_html__( 'Player tabs', 'hnmgepis' ),
					'id' => 'player-tabs',
					'items' => array(
						'player-general' 		=> '<i class="hnmgbox-icon hnmgbox-icon-home"></i>' . esc_html__( 'General', 'hnmgepis' ),
						'player-listepis' 		=> '<i class="hnmgbox-icon hnmgbox-icon-cogs"></i>' . esc_html__( 'List Episodes', 'hnmgepis' ),
						'player-optimization' 	=> '<i class="hnmgbox-icon hnmgbox-icon-link"></i>' . esc_html__( 'SEO Optimization', 'hnmgepis' ),
						'player-jwplayer' 		=> '<i class="hnmgbox-icon hnmgbox-icon-play"></i>' . esc_html__( 'JWPlayer Settings', 'hnmgepis' ),
						'player-advertising' 	=> '<i class="hnmgbox-icon hnmgbox-icon-folder"></i>' . esc_html__( 'ADS Vast Settings', 'hnmgepis' ),
						'player-adult' 			=> '<i class="hnmgbox-icon hnmgbox-icon-exclamation-triangle"></i>' . esc_html__( 'Adult Content', 'hnmgepis' ),
					),
				));
					$hnmgbox->open_tab_item( 'player-general' );
						$this->player_general($hnmgbox);
					$hnmgbox->close_tab_item( 'player-general' );
					
					$hnmgbox->open_tab_item( 'player-listepis' );
						$this->player_listepis($hnmgbox);
					$hnmgbox->close_tab_item( 'player-listepis' );
					
					$hnmgbox->open_tab_item( 'player-optimization' );
						$this->player_optimization($hnmgbox);
					$hnmgbox->close_tab_item( 'player-optimization' );
					
					$hnmgbox->open_tab_item( 'player-jwplayer' );
						$this->player_jwplayer($hnmgbox);
					$hnmgbox->close_tab_item( 'player-jwplayer' );
						
					$hnmgbox->open_tab_item('player-advertising');
						$this->player_advertising($hnmgbox);
					$hnmgbox->close_tab_item('player-advertising');
					
					$hnmgbox->open_tab_item('player-adult');
						$this->player_adult($hnmgbox);
					$hnmgbox->close_tab_item('player-adult');
					
				$hnmgbox->close_tab( 'player-tabs' );
			$hnmgbox->close_tab_item( 'player' );	
			
	}
	

	public function player_general($hnmgbox){
		$hnmgbox->add_field(array(
			'name' => esc_html__( 'Movies Filter', 'hnmgepis' ),
			'id' => 'haun_filter_enable',
			'type' => 'switcher',
			'default' => 'on',
		));
		$hnmgbox->open_mixed_field(array('id' => 'displayed-when:switch:haun_filter_enable:on:haun_filter_select', 'name' => __('Setting Button Player', 'hnmgepis')));
			$hnmgbox->add_field(array(
				'name'   	=> __('Select Filter', 'hnmgepis'),
				'id'     	=> 'haun_filter_select',
				'type'   	=> 'select',
				'default' 	=> array('sort', 'formality', 'status', 'country', 'release', 'category'),
				'items'     => array(
					'sort'      	=> __('Sort By', 'hnmgepis'),
					'formality'     => __('Formality', 'hnmgepis'),
					'status'     	=> __('Status', 'hnmgepis'),
					'country'     	=> __('Country', 'hnmgepis'),
					'release'     	=> __('Release', 'hnmgepis'),
					'category'     	=> __('Category', 'hnmgepis'),
				),
				'options'   => array(
					'multiple'     		=> true,
					'search'       		=> true,
					'max_selections'    => 10,
				),
				'grid' 		=> '3-of-6',
			));
		$hnmgbox->close_mixed_field();
		
		$hnmgbox->add_field(array(
			'name' => esc_html__( 'On/Off Button Player', 'hnmgepis' ),
			'id' => 'hnbtn_player',
			'type' => 'switcher',
			'default' => 'on',
		));
		$hnmgbox->open_mixed_field(array('id' => 'displayed-when:switch:hnbtn_player:on:hnbtn_player_postion', 'name' => __('Setting Button Player', 'hnmgepis')));
			$hnmgbox->add_field(array(
				'id' => 'hnbtn_player_postion',
				'name' => __('Button Player Postion', 'hnmgepis'),
				'type' => 'radio',
				'default' => 'left',
				'items' => array(
					'left' 		=> __('Left', 'hnmgepis'),
					'center' 	=> __('Center', 'hnmgepis'),
					'last' 		=> __('Last', 'hnmgepis'),
				),
				'options' => array('inline' => true),
				'grid' 		=> '6-of-6',
			));
			$hnmgbox->add_field(array(
				'name'   	=> __('Select Button Player', 'hnmgepis'),
				'id'     	=> 'hnbtn_player_select',
				'type'   	=> 'select',
				'default' 	=> array('view', 'next_prev', 'expand', 'light', 'report', 'like', 'autonext'),
				'items'     => array(
					'view'      	=> __('Views', 'hnmgepis'),
					'next_prev'     => __('Next & Prev', 'hnmgepis'),
					'autonext'     	=> __('Auto Next', 'hnmgepis'),
					'expand'     	=> __('Expand', 'hnmgepis'),
					'light'     	=> __('Light', 'hnmgepis'),
					'report'     	=> __('Report', 'hnmgepis'),
					'like'     		=> __('Like & DisLike', 'hnmgepis'),
				),
				'options'   => array(
					'multiple'     		=> true,
					'search'       		=> true,
					'sort'       		=> true,
					'max_selections'    => 10,
				),
				'grid' 		=> '6-of-6',
				'desc' => __('For Auto Next, Next & Prev Only Works With TV Series', 'hnmgepis') . '<br /><img style="margin-top: 10px" src="' . HNMG_EPIURL . '/assets/images/button_player.png'. '">',
			));
			$hnmgbox->add_field(array(
				'id' => 'hnbtn_player_color',
				'name' => __('Background Button color', 'hnmgepis'),
				'type' => 'colorpicker',
				'default' => '#0b0f15',
				'grid' => '2-of-8'
			));
		$hnmgbox->close_mixed_field();
		
		$hnmgbox->add_field(array(
			'name' => esc_html__( 'Auto reset cache', 'hnmgepis' ),
			'id' => 'auto_reset_cache',
			'type' => 'switcher',
			'default' => 'off',
			'desc' => esc_html__( 'Automatically clear the cache if the player error', 'hnmgepis' ),
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
	}
	
	public function player_listepis($hnmgbox){
		$hnmgbox->add_field(array(
			'name' => hnlang('Enable Find Episodes'),
			'id' => 'haun_find_episodes',
			'type' => 'switcher',
			'default' => 'on',
		));
		$hnmgbox->add_field( array(
			'id' => 'haun_episode_display',
			'name' => hnlang('Select the style to display the episode list'),
			'type' => 'image_selector',
			'default' => 'show_list_eps',
			'items' => array(
				'show_list_eps'    	=> \Roots\asset('images/show_list_episode.png')->uri(),
				'show_tab_eps'    	=> \Roots\asset('images/show_tab_episode.png')->uri(),
				'show_paging_eps'   => \Roots\asset('images/show_list_paging.png')->uri(),
			),
			'options' => array(
				'width' 	=> '300px',
				'height' 	=> '200px'
			),
		));
		$hnmgbox->add_field(
			array(
				'id'      => 'episode_pagination',
				'name'    => hnlang('Episode pages show at most'),
				'type'    => 'number',
				'default' => 50,
				'grid'    => '3-of-6',
				'options' => array(
					'unit' => 'Episodes',
				),
				'desc'    => hnlang('The number of episodes displayed on the page'),
			)
		);
		$hnmgbox->add_field(array(
			'id' => 'watch_btn_display',
			'name' => hnlang('Watch Button'),
			'type' => 'radio',
			'default' => 'first_episode',
			'items' => array(
				'first_episode' => hnlang('First Episode'),
				'last_episode' => hnlang('Last Episode'),
			),
			'options' => array(
				'inline' => false,
			),
		));
		$hnmgbox->add_field(array(
			'name'   => hnlang('Episode order'),
			'id'     => 'episode_display_mode',
			'type'   => 'select',
			'items'        => array(
				'asc'      		=> 'ASC',
				'desc'      	=> 'DESC',
			),
			'default'  => 'asc',
			'grid' 		=> '3-of-6',
		));
	}
	
	public function player_optimization($hnmgbox){
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
			'id'     	=> 'haun_episode_name',
			'type'   	=> 'text',
			'name'   	=> hnlang('Default Episode Name'),
			'grid' 		=> '3-of-6',
			'default'   => get_bloginfo('language') == 'vi-VN' ? 'tập' : 'episode',
			'desc'      => 'Tập, EP, Episode (Show alternative if the episode name is not set, or set to integer)',
		));
		$hnmgbox->add_field(array(
			'id'    	=> 'haun_title_info_page',
			'type'  	=> 'text',
			'name'  	=> __('SEO Title (Page movie info)', 'hnmgepis'),
			'default' 	=> '{title} {quality}',
			'desc'      => '<div style="padding: 5px 0;">' . __('Accept', 'hnmgepis') . ' <i class="hnmgbox-icon hnmgbox-icon-check"></i> : 
				<b>{title}</b> 		= ' . __('Film Title', 'hnmgepis') . ', 
				<b>{release}</b> 	= ' . __('Film Released', 'hnmgepis') . ', 
				<b>{runtime}</b> 	= ' . __('Film Duration', 'hnmgepis') . ', 
				<b>{quality}</b> 	= ' . __('Film Quality', 'hnmgepis') . ', 
				<b>{org_title}</b> 	= ' . __('Original Title', 'hnmgepis') . ',
				<b>{country}</b> 	= ' . __('Country', 'hnmgepis') . '</div>',
		));
		$hnmgbox->add_field(array(
			'id'       	=> 'haun_title_watch_page',
			'type'     	=> 'text',
			'name'    	=> __('SEO title (Page watch movie)', 'hnmgepis'),
			'default'   => 'Watch {title} {episode} {quality}',
			'attributes' => array(
				'placeholder' => 'Watch {title} {episode} {quality}',
			),
			'desc'      => '<div style="padding: 5px 0;">' . __('Accept', 'hnmgepis') . ' <i class="hnmgbox-icon hnmgbox-icon-check"></i> : 
				<b>{title}</b> 		= ' . __('Film Title', 'hnmgepis') . ', 
				<b>{episode}</b> 	= ' . __('Film Episode', 'hnmgepis') . ', 
				<b>{quality}</b> 	= ' . __('Film Quality', 'hnmgepis') . ', 
				<b>{release}</b> 	= ' . __('Film Released', 'hnmgepis') . ', 
				<b>{runtime}</b> 	= ' . __('Film Duration', 'hnmgepis') . ', 
				<b>{org_title}</b> 	= ' . __('Original Title', 'hnmgepis') . ',
				<b>{country}</b> 	= ' . __('Country', 'hnmgepis') . '</div>',
		));
		$hnmgbox->add_field(array(
			'id'       	=> 'hncore_url_type',
			'type'     	=> 'text',
			'name'    	=> __('URL Watch Page', 'hnmgepis'),
			'default'   => '{home_url}/watch/{title}-ep-{episode}-sv{server}{html}',
			'attributes' => array(
				'placeholder' => '{home_url}/watch/{title}-ep-{episode}-sv{server}{html}',
			),
			'grid' 		=> '6-of-6',
			'desc'      => '<div style="padding: 5px 0;">' . __('Accept', 'hnmgepis') . ' <i class="hnmgbox-icon hnmgbox-icon-check"></i> : 
				<b>{home_url}</b> 	= ' . __('Home Url', 'hnmgepis') . ', 
				<b>{html}</b> 		= ' . __('.html', 'hnmgepis') . ', 
				<b>{title}</b> 		= ' . __('Film Title', 'hnmgepis') . ', 
				<b>{episode}</b> 	= ' . __('Film Episode', 'hnmgepis') . ', 
				<b>{server}</b> 	= ' . __('Film Server', 'hnmgepis') . ',
				<b>{org_title}</b> 	= ' . __('Original Title', 'hnmgepis') . ',
				<b>{country}</b> 	= ' . __('Country', 'hnmgepis') . '</div>',
		));
	}
	
	public function player_jwplayer($hnmgbox){
		$hnmgbox->add_field(array(
			'name' => esc_html__( 'Resume Playback', 'hnmgepis' ),
			'id' => 'resume_playback',
			'type' => 'switcher',
			'default' => 'on',
			'desc' => esc_html__( 'Use localStorage to remember where the user left off and resume playback at the same time offset when revisiting the page.', 'hnmgepis' ),
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
	}

	public function player_advertising($hnmgbox){
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
	}

	public function player_adult($hnmgbox){
		$hnmgbox->add_field(array(
			'id'       	=> 'adult_content_title',
			'type'     	=> 'text',
			'name'    	=> __('Title Adult', 'hnmgepis'),
			'default'   => 'Adult Content Warning',
			'attributes' => array(
				'placeholder' => 'Adult Content Warning!',
			)
		));
		$hnmgbox->add_field(array(
			'id'       	=> 'adult_content_info_text',
			'type'     	=> 'wp_editor',
			'name'    	=> __('Adult Content Info', 'hnmgepis'),
			'default'   => 'This site contains content intended for individuals 18/21 years of age or older as determined by the local and national laws of the region in which you reside. If you are not yet 18+, leave this website immediately. By entering this website, you agree that you are at least 18 years of age or older. You will not redistribute this material to anyone, nor will you permit any minor to view this material.',
		));
	}

}

?>