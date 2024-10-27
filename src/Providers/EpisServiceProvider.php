<?php

namespace HNMG\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

use HNMG\LoadCore\HN_Core;

use HNMG\Episodes\EP_Actions;
use HNMG\Episodes\EP_Episode;
use HNMG\Episodes\EP_Helper;
use HNMG\Episodes\EP_Post;
use HNMG\Episodes\EP_Taxonomy;

class EpisServiceProvider extends ServiceProvider {
    private $load;

	public function register() {
        if (!class_exists(HN_Core::class)) {
            throw new \Exception("HN_Core is required for EpisServiceProvider but is not loaded.");
        }
    }
	
    public function boot() {
		$this->load = $this->app->make(EP_Helper::class);
        $this->app->make(EP_Episode::class)->register();
        $this->app->make(EP_Actions::class)->register();
        $this->app->make(EP_Post::class)->register();
        $this->app->make(EP_Taxonomy::class)->register();
		
		View::composer('*', function ($view) {
			$view->with('load', $this->load);
        });
		
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'HNMG');
        add_action('admin_enqueue_scripts', [$this, 'HNMG_MOVIES']);
    }
	
    public function HNMG_MOVIES() {
		global $pagenow;
        wp_enqueue_style('hnmg-movies-css', get_template_directory_uri() . '/vendor/hncore/hnmgepis/resources/assets/css/style.css', array(), '0.1.0', 'all');
		wp_enqueue_script('hnmg-movies-js', get_template_directory_uri() . '/vendor/hncore/hnmgepis/resources/assets/js/hnmgepis.js', [], null, true);
		wp_localize_script('hnmg-movies-js', 'hnmgepis', [
			'ajax_url'             => admin_url('admin-ajax.php'),
			'episode_type'         => $this->load->getPlayerTypesJs(),
			'hnepisode_type'       => $this->load->HNPlayerTypesJs(),
			'nonce'                => wp_create_nonce('ajax-nonce'),
			'epslug_default'       => 'tap'
		]);
    }
	
}
