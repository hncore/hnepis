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
use HNMG\Episodes\EP_Options;

use HNMG\EP_Load\EP_PLayer;
use HNMG\EP_Load\EP_MCache;
use HNMG\EP_Load\EP_Rewrite;
use HNMG\EP_Core\EP_Core;
use HNMG\EP_Core\EP_AutoIMG;
use HNMG\EP_Core\EP_Taxonomy;
use HNMG\EP_Core\EP_Meta;

class EpisServiceProvider extends SageServiceProvider {
    private $load;

	public function register() {
        
    }
	
    public function boot() {
		$this->ep_constants();
		$this->ep_load();
		$this->eplocalization();
		$this->registerEPLang();
		$this->load = $this->app->make(EP_Helper::class);
		$this->load = $this->app->make(EP_Helper::class);
        $this->app->make(EP_Episode::class)->register();
        $this->app->make(EP_Actions::class)->register();
        $this->app->make(EP_Post::class)->register();
        $this->app->make(EP_Options::class)->register();
		View::composer('*', function ($view) {
			$view->with('load', $this->load);
        });
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'HNMG');
        add_action('admin_enqueue_scripts', [$this, 'HNMG_MOVIES']);
        add_action('wp_enqueue_scripts', [$this, 'HNMG_LOAD']);
    }
	
	public function haun_make_url_relative($url) {
		$relativeurl = wp_make_link_relative($url);
		return $relativeurl;
	}
	
	public function registerEPLang(): void {
		Blade::directive('hnepis', function ($expression) {
			return "<?php echo __({$expression}, 'hnmgepis'); ?>";
		});
	}

	public function ep_load(){
		$this->app->make(EP_Core::class)->register();
		$this->app->make(EP_Taxonomy::class)->register();
		$this->app->make(EP_MCache::class)->register();
		$this->app->make(EP_Meta::class);
		$this->app->make(EP_AutoIMG::class);
		$this->app->make(EP_PLayer::class);
		$this->app->make(EP_Rewrite::class);
	}
	
	public function ep_constants(){
		define('HNMG_META', '_haun_metabox_options');
        define('HNMG_OPTION', 'hnmg-options');
        define('HNMG_VIDEO', '_videos_metabox_options');
        define('HNMG_METANEWS', '_news_metabox_options');
        define('HNMG_SHOP_URL', 'https://haunytb.com');
        define('HNMG_EPS', '_haunmovies');
		define('HNMG_PART', wp_normalize_path(WP_CONTENT_DIR) . '/film-export');
		define('HNMG_EPIURL', get_template_directory_uri() . '/vendor/hncore/hnmgepis/resources');
		define('HNMG_EPDIR', trailingslashit(str_replace('src/Providers', 'resources', wp_normalize_path(dirname(__FILE__)))));
	}
	
    public function hnmg_load() {
		$fontAwesomeCssPath = get_template_directory_uri() . '/vendor/hncore/hnmgepis/vendor/fortawesome/font-awesome/css/font-awesome.min.css';
		wp_enqueue_style('hnmg-font', home_url('/font-awesome.min.css'), [], '', '');
		if (is_single()) {
			global $post;
			$episode         = get_query_var('haun_episode');
			$server          = get_query_var('haun_server');
			$meta            = get_post_meta($post->ID, HNMG_META, true );
			$post_slug       = basename(get_permalink($post->ID));
			$watch_slug      = hnmg_value( 'haun_watch_url');
			$episode_display = hnmg_value( 'haun_episode_display');
			$post_meta       = get_post_meta($post->ID, '_haunmovies', true);
			$data            = json_decode(stripslashes($post_meta), true);
			$first_episode 	 = isset($data) && isset($data[0]['haunmovies_server_data'])  ? key($data[0]['haunmovies_server_data']) : '';
			$ep_slug 		 = get_query_var('episode_slug') ?? '1';
			if(hnmg_value('haun_thumb_url', HNMG_META)) {
				if(strpos($meta['haun_thumb_url'], home_url()) !== false) {
					$meta['haun_thumb_url'] = $this->haun_make_url_relative($meta['haun_thumb_url']);
					$meta['haun_thumb_url'] = $meta['haun_thumb_url'];
					update_post_meta($post->ID, HNMG_META, $meta);
				}
			}
			wp_enqueue_style('hnmg-loadcss', home_url('/hnmgplayer.css'), [], '0.1.0', 'all');
			wp_enqueue_script('hnmg-loadjs', home_url('/hnmgplayer.js'), [], null, true);
			wp_localize_script('hnmg-loadjs', 'player_epis', [
				'ajax_url'       => admin_url('admin-ajax.php'),
				'jwplayer_url'   => home_url('/jwplayer/'),
				'player_url'     => get_template_directory_uri() . '/app/load.php',
				'report_enable'     => hnmg_value('haun_report_enable'),
            	'jwplayer_showad'   => hnmg_value('jw_player_show_ad'),
            	'jw_adcode'         => hnmg_value('jw_player_custom_ads_code'),
            	'player_sharing'    => hnmg_value('jw_player_share') ? 'true' : 'false',
            	'jwplayer_key'      => hnmg_value('jw_player_license_key') ? hnmg_value('jw_player_license_key') : 'MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g==',
				'act'               => get_query_var('haun_action'),
				'post_url'          => home_url('/'.$watch_slug.'/'.$post_slug),
				'loading_img'       => \Roots\asset('images/loading.gif')->uri(),
				'eps_slug'          => hnmg_value('haun_episode_url'),
				'server_slug'       => hnmg_value('haun_server_url'),
				'type_slug'         => hnmg_value('haun_url_type'),
				'auto_reset_cache'  => hnmg_value('auto_reset_cache'),
				'resume_playback'   => hnmg_value('resume_playback'),
				'is_adult'          => hnmg_value('is_adult', HNMG_META),
				'adult_title'       => hnmg_value('adult_content_title'),
				'adult_content'     => hnmg_value('adult_content_info_text'),
				'post_title'        => $post->post_title,
				'post_id'           => $post->ID,
				'episode_slug'      => $ep_slug ? $ep_slug : str_replace('_', '-', $first_episode),
				'server'            => $server ? $server : 1,
				'player_error_detect' => hnmg_value( 'player_error_detect' ) ? hnmg_value( 'player_error_detect' ) : 'display_modal',
				'episode_display'    => hnmg_value( 'haun_episode_display') != '' ? hnmg_value( 'haun_episode_display') : 'none',
				'i18n'           => [
					'player_loading'  	=> __('Loading player, please wait...', 'hnmgepis'),
					'jw_error_msg_0'  	=> __('We are unable to find the video you are looking for. There could be several reasons for this, for example it got removed by the owner!', 'hnmgepis'),
					'jw_error_msg_1'  	=> __('This video file cannot be played.', 'hnmgepis'),
					'jw_error_msg_2'  	=> __('To continue watching, please click on the "Reload Player" button', 'hnmgepis'),
					'jw_error_msg_3'  	=> __('or click on the buttons below', 'hnmgepis'),
					'player_reload'   	=> __('Reload Player', 'hnmgepis'),
					'player_autonext' 	=> __('Autoplay next episode, please wait...', 'hnmgepis'),
					'resume_text'       => __('Automatically resumes your videos from where you played them last at', 'hnmgepis'),
					'resume_text_2'     => __('Playback from the beginning?', 'hnmgepis'),
					'playback'          => __('Playback', 'hnmgepis'),
					'continue_watching' => __('Continue watching', 'hnmgepis'),
					'light_on'          => __('Light On', 'hnmgepis'),
					'light_off'         => __('Light Off', 'hnmgepis'),
					'expand'            => __('Expand', 'hnmgepis'),
					'collapse'          => __('Collapse', 'hnmgepis'),
					'show_only_once'    => __('Don\'t show again', 'hnmgepis'),
					'exit_btn'          => __('EXIT', 'hnmgepis'),
					'is_18plus'         => __('18+ ENTER', 'hnmgepis'),
					'title'             => get_the_title($post->ID),
					'alert'             => __('Your name and message is required (*)', 'hnmgepis'),
					'msg'               => __('Your message', 'hnmgepis'),
					'msg_success'       => __('Thank you for sending error messages. We will fix the problem in the shortest time possible.', 'hnmgepis'),
					'loading_img'       => \Roots\asset('images/loading.gif')->uri(),
					'report_btn'        => __('Report', 'hnmgepis'),
					'name_or_email'     => __('Name or Email', 'hnmgepis'),
					'close'             => __('Close', 'hnmgepis')
				]
			]);
		}
	}

	public function eplocalization() {
        load_textdomain('hnmgepis', HNMG_EPDIR . 'lang/hnmgepis-' . get_locale() . '.mo');
    }

	public function hnmgepis_localize() {
		$localize = array();
		$localize_file = wp_normalize_path( HNMG_EPDIR . 'ep_localize.php' );
		if ( file_exists( $localize_file ) ) {
			$localize = include_once $localize_file;
		}
		return $localize;
	}

    public function HNMG_MOVIES() {
		global $pagenow;
		if (
			($pagenow == 'admin.php' && (isset($_GET['page']) && ($_GET['page'] == 'hnmg-episode' || $_GET['page'] == 'crawl-tools'))) ||
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
