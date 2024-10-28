<?php

namespace HNMG\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Blade;
use Roots\Acorn\Sage\SageServiceProvider;

use HNMG\LoadCore\HN_Core;

use HNMG\Episodes\EP_Actions;
use HNMG\Episodes\EP_Episode;
use HNMG\Episodes\EP_Helper;
use HNMG\Episodes\EP_Post;
use HNMG\Episodes\EP_Taxonomy;
use HNMG\Episodes\EP_Options;

use HNMG\EP_Load\EP_PLayer;

class EpisServiceProvider extends SageServiceProvider {
    private $load;

	public function register() {
        if (!class_exists(HN_Core::class)) {
            throw new \Exception("HN_Core is required for EpisServiceProvider but is not loaded.");
        }
    }
	
    public function boot() {
		$this->ep_constants();
		$this->ep_load();
		$this->load = $this->app->make(EP_Helper::class);
        $this->app->make(EP_Episode::class)->register();
        $this->app->make(EP_Actions::class)->register();
        $this->app->make(EP_Post::class)->register();
        $this->app->make(EP_Taxonomy::class)->register();
        $this->app->make(EP_Options::class)->register();
		View::composer('*', function ($view) {
			$view->with('load', $this->load);
        });
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'HNMG');
        add_action('admin_enqueue_scripts', [$this, 'HNMG_MOVIES']);
        add_action('wp_enqueue_scripts', [$this, 'HNMG_LOAD']);
    }
	
	public function ep_load(){
		$this->app->make(EP_PLayer::class);
	}
	
	public function ep_constants(){
		define('HNMG_META', '_haun_metabox_options');
        define('HNMG_VIDEO', '_videos_metabox_options');
        define('HNMG_EPS', '_haunmovies');
		define('HNMG_EPIURL', get_template_directory_uri() . '/vendor/hncore/hnmgepis/resources');
	}
	
    public function hnmg_load() {
		if (is_single()) {
			wp_enqueue_style('hnmg-loadcss', HNMG_EPIURL . '/assets/css/style.css', [], '0.1.0', 'all');
			wp_enqueue_script('hnmg-loadjs', HNMG_EPIURL . '/assets/js/hnmgplayer.js', [], null, true);

			wp_localize_script('hnmg-loadjs', 'player_epis', [
				'ajax_url'       => admin_url('admin-ajax.php'),
				'jwplayer_url'   => HNMG_EPIURL . '/assets/jwplayer/',
				'player_url'     => get_template_directory_uri() . '/app/load.php',
				'report_enable'     => hnmg_value('haun_report_enable'),
            	'jwplayer_showad'   => hnmg_value('jw_player_show_ad'),
            	'jw_adcode'         => hnmg_value('jw_player_custom_ads_code'),
            	'player_sharing'    => hnmg_value('jw_player_share') ? 'true' : 'false',
            	'jwplayer_key'      => hnmg_value('jw_player_license_key') ? hnmg_value('jw_player_license_key') : 'MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g==',
				'i18n'           => [
					'player_loading'  => __('Loading player, please wait...', 'hnmgepis'),
					'jw_error_msg_0'  => __('We are unable to find the video you are looking for. There could be several reasons for this, for example it got removed by the owner!', 'hnmgepis'),
					'jw_error_msg_1'  => __('This video file cannot be played.', 'hnmgepis'),
					'jw_error_msg_2'  => __('To continue watching, please click on the "Reload Player" button', 'hnmgepis'),
					'jw_error_msg_3'  => __('or click on the buttons below', 'hnmgepis'),
					'player_reload'   => __('Reload Player', 'hnmgepis'),
				]
			]);
		}
	}

    public function HNMG_MOVIES() {
        wp_enqueue_style('hnmg-moviescss', HNMG_EPIURL . '/assets/css/style.css', array(), '0.1.0', 'all');
		wp_enqueue_script('hnmg-moviesjs', HNMG_EPIURL . '/assets/js/hnmgepis.js', [], null, true);
		wp_localize_script('hnmg-moviesjs', 'hnmgepis', [
			'ajax_url'             => admin_url('admin-ajax.php'),
			'episode_type'         => $this->load->getPlayerTypesJs(),
			'hnepisode_type'       => $this->load->HNPlayerTypesJs(),
			'nonce'                => wp_create_nonce('ajax-nonce'),
			'epslug_default'       => 'tap'
		]);
    }
	
}
