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
use HNMG\Episodes\EP_Options;

class EpisServiceProvider extends ServiceProvider {
	public function register() {
        
    }
	
    public function boot() {
		if (!is_plugin_active('hncore/hncore.php')) {
            return false;
        }
		$this->ep_constants();
		$this->ep_load();
		$this->eplocalization();
		$this->registerEPLang();
		$this->load = $this->app->make(EP_Helper::class);
        $this->app->make(EP_Episode::class)->register();
        $this->app->make(EP_Actions::class)->register();
        $this->app->make(EP_Post::class)->register();
        $this->app->make(EP_Options::class)->register();
		View::composer('*', \HNMG\EP_Load\EP_List::class);
		View::composer('*', \HNMG\Episodes\EP_Helper::class);
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'HNMG');
        add_action('admin_enqueue_scripts', [$this, 'HNMG_MOVIES']);
        add_action('wp_enqueue_scripts', [$this, 'hnmg_load'], 10,1);
    }
	
	public function hnmg_load() {
		wp_enqueue_style('hnmg-font', home_url('/font-awesome.min.css'), [], '', '');
		if (is_single()) {
			$post_id 		 = get_queried_object_id();
			$episode         = get_query_var('haun_episode');
			$server          = get_query_var('haun_server');
			$ep_slug 		 = get_query_var('episode_slug') ?? '1';
			$episode_display = hnmg_value( 'haun_episode_display');
			$meta            = get_post_meta($post_id, HNMG_META, true );
			$post_slug       = basename(get_permalink($post_id));
			$post_meta       = get_post_meta($post_id, HNMG_EPS, true);
			$data            = json_decode(stripslashes($post_meta), true);
			$first_episode 	 = isset($data) && isset($data[0]['haunmovies_server_data'])  ? key($data[0]['haunmovies_server_data']) : '';
			if(hnmg_value('haun_thumb_url', HNMG_META)) {
				if(strpos($meta['haun_thumb_url'], home_url()) !== false) {
					$meta['haun_thumb_url'] = $this->haun_make_url_relative($meta['haun_thumb_url']);
					$meta['haun_thumb_url'] = $meta['haun_thumb_url'];
					update_post_meta($post_id, HNMG_META, $meta);
				}
			}
			wp_enqueue_style('hnmg-loadcss', home_url('/hnmgplayer.css'), [], '0.1.0', 'all');
			wp_enqueue_script('hnmg-loadjs', home_url('/hnmgplayer.js'), [], null, true);
			wp_localize_script('hnmg-loadjs', 'player_epis', [
				'ajax_url'       		=> admin_url('admin-ajax.php'),
				'jwplayer_url'   		=> home_url('/jwplayer/'),
				'player_url'     		=> get_template_directory_uri() . '/app/load.php',
				'report_enable'     	=> hnmg_value('haun_report_enable'),
            	'jwplayer_showad'   	=> hnmg_value('jw_player_show_ad'),
            	'jw_adcode'         	=> hnmg_value('jw_player_custom_ads_code'),
            	'player_sharing'    	=> hnmg_value('jw_player_share') ? 'true' : 'false',
            	'jwplayer_key'      	=> hnmg_value('jw_player_license_key') ? hnmg_value('jw_player_license_key') : 'MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g==',
				'act'               	=> get_query_var('haun_action'),
				'loading_img'       	=> \Roots\asset('images/loading.gif')->uri(),
				'type_slug'         	=> hnmg_value('haun_url_type'),
				'auto_reset_cache'  	=> hnmg_value('auto_reset_cache'),
				'resume_playback'   	=> hnmg_value('resume_playback'),
				'is_adult'          	=> !empty($meta['is_adult']) && $meta['is_adult'] == 'on' ? true : false,
				'adult_title'       	=> hnmg_value('adult_content_title'),
				'adult_content'     	=> hnmg_value('adult_content_info_text'),
				'post_title'        	=> get_the_title($post_id),
				'post_id'           	=> $post_id,
				'episode_slug'      	=> $ep_slug ? $ep_slug : str_replace('_', '-', $first_episode),
				'server'            	=> $server ? $server : 1,
				'player_error_detect' 	=> hnmg_value( 'player_error_detect' ) ? hnmg_value( 'player_error_detect' ) : 'display_modal',
				'episode_display'    	=> hnmg_value( 'haun_episode_display') != '' ? hnmg_value( 'haun_episode_display') : 'none',
				'i18n'                 	=> $this->hnmgepis_localize(),
			]);
		}
		remove_action('wp_head', 'wp_generator');
	}
	
	public function haun_make_url_relative($url) {
		$relativeurl = wp_make_link_relative($url);
		return $relativeurl;
	}
	
	public function registerEPLang() {
		Blade::directive('hnepis', function ($expression) {
			return "<?php echo __({$expression}, 'hnmgepis'); ?>";
		});
	}

	public function ep_load(){
		$this->app->make(\HNMG\EP_Load\EP_Rewrite::class)->register();
		$this->app->make(\HNMG\EP_Core\EP_Core::class)->register();
		$this->app->make(\HNMG\EP_Core\EP_Taxonomy::class)->register();
		$this->app->make(\HNMG\EP_Load\EP_MCache::class)->register();
		$this->app->make(\HNMG\EP_Load\EP_Reporter::class)->register();
		$this->app->make(\HNMG\EP_Core\EP_Meta::class);
		$this->app->make(\HNMG\EP_Core\EP_AutoIMG::class);
		$this->app->make(\HNMG\EP_Load\EP_PLayer::class);
	}
	
	public function ep_constants(){
		define('HNMG_META', '_haun_metabox_options');
        define('HNMG_OPTION', 'hnmg-options');
        define('HNMG_VIDEO', '_videos_metabox_options');
        define('HNMG_METANEWS', '_news_metabox_options');
        define('HNMG_SHOP_URL', 'https://haunytb.com');
		define('HNMG_KEYMANAGER', 'HNCORE_options');
        define('HNMG_EPS', '_haunmovies');
		define('HNMG_PART', wp_normalize_path(WP_CONTENT_DIR) . '/film-export');
		define('HNMG_EPIURL', get_template_directory_uri() . '/vendor/hncore/hnmgepis/resources');
		define('HNMG_EPDIR', trailingslashit(str_replace('src/Providers', 'resources', wp_normalize_path(dirname(__FILE__)))));
	}

	public function eplocalization() {
        load_textdomain('hnmgepis', HNMG_EPDIR . 'lang/hnmgepis-' . get_locale() . '.mo');
    }
	
	public function hnmgepis_localize() {
		$localize = array();
		$localize_file = wp_normalize_path( HNMG_EPDIR . 'localize.php' );
		if ( file_exists( $localize_file ) ) {
			$localize = include_once $localize_file;
		}
		return $localize;
	}

    public function HNMG_MOVIES() {
		global $pagenow;
		if (
			($pagenow == 'admin.php' && (isset($_GET['page']) && ($_GET['page'] == 'hnmg-episode' || $_GET['page'] == 'haun-movie-report'))) ||
			($pagenow == 'post-new.php' || $pagenow == 'post.php')
		) {
			wp_enqueue_script('hnmg-moviesjs', HNMG_EPIURL . '/assets/js/hnmgepis.js', [], null, true);
			wp_localize_script('hnmg-moviesjs', 'hnmgepis', [
				'ajax_url'             => admin_url('admin-ajax.php'),
				'episode_type'         => $this->load->getPlayerTypesJs(),
				'hnepisode_type'       => $this->load->HNPlayerTypesJs(),
				'nonce'                => wp_create_nonce('ajax-nonce'),
				'i18n'                 => $this->hnmgepis_localize(),
				'epslug_default'       => 'tap'
			]);
		} else {
			return;
		}
    }
	
}
