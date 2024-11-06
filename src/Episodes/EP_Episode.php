<?php

namespace HNMG\Episodes;

use HNMG\Episodes\EP_Helper;
use HNMG\LoadCore\HN_Helper;
use Illuminate\Support\Str;
use function Roots\view;

class EP_Episode {
	
	public function __construct() {
		$this->load = new EP_Helper(); 
		$this->helper = new HN_Helper(); 
	}
	
	public function register() {
		if ($this->helper->get_product_status(SKU_THEMES) === 'connected') {
			add_filter('HNMG-tabs', [$this, 'hnapisode_manage_menu']);
			add_filter('HNMG-pages', [$this, 'hnapisode_manage_menu']);
		}
		add_action('add_meta_boxes', [$this, 'hnmovies_meta_box']);
		add_action('save_post', [$this, 'hnmovies_save_metapost']);
	}
	
	public function hnapisode_manage_menu($nav) {
        $nav['110'] = array(
            'slug'     => 'hnmg-episode',
            'callback' => array($this, 'hnmg_episode_manager'),
            'title'    => __('HNMG Manager', 'hnmgepis'),
            'icon'     => 'fa-play-circle',
        );
        return $nav;
    }

	public function hnmg_episode_manager() {
		$post_query = isset($_GET['s']) ? wp_strip_all_tags($_GET['s']) : '';
		$postID = isset($_GET['post_id']) ? absint($_GET['post_id']) : 0;
		$server = isset($_GET['server']) ? absint($_GET['server']) : 0;
		$episode = isset($_GET['episode_slug']) && $_GET['episode_slug'] ? wp_strip_all_tags(str_replace('-', '', $_GET['episode_slug'])) : '';
		$paged = isset($_GET['paged']) ? absint($_GET['paged']) : 1;
		$cat_id = isset($_GET['cat']) ? wp_strip_all_tags($_GET['cat']) : '';
		$p = isset($_GET['p']) ? absint($_GET['p']) : 1;
		$countries = isset($_GET['country_id']) ? absint($_GET['country_id']) : '';
		$released = isset($_GET['released']) ? wp_strip_all_tags($_GET['released']) : '';
		$formality = isset($_GET['formality']) ? wp_strip_all_tags($_GET['formality']) : '';
		$status = isset($_GET['status']) ? wp_strip_all_tags($_GET['status']) : '';
		$orderby = isset($_GET['orderby']) ? wp_strip_all_tags($_GET['orderby']) : '';
		$get_formality = $this->load->get_post_format($formality);
		$post_formats = array(
			'single_movies' => __('Single movie', 'hnmgepis'), 
			'tv_series' => __('TV series', 'hnmgepis'), 
			'tv_shows' => __('TV show', 'hnmgepis'), 
			'theater_movie' => __('Theater movie', 'hnmgepis'), 
			'completed' => __('Completed', 'hnmgepis'), 
			'ongoing' => __('Ongoing', 'hnmgepis'), 
			'is_trailer' => __('Trailer', 'hnmgepis')
		);

		echo view('HNMG::episode.listepisode', compact('post_query', 'postID', 'server', 'episode', 'paged', 'cat_id', 'p', 'countries', 'released', 'formality', 'status', 'orderby', 'get_formality', 'post_formats'));
	}

	public function hnmovies_meta_box(){
		if(hnmg_value('enable_old_episode_manager')){
			add_meta_box('hnmovies', __('Episode List', 'hnmgepis'), [$this, 'hnmovies_metabox_output'], 'post', 'normal', 'low');
		}
	}
	
	public function hnmovies_metabox_output() {
		wp_nonce_field('haunmovies_save_metaposts', 'hnmovies_link_nonce');
		global $post;
		$postID   = $post->ID;
		$count = 1;
		if (isset($metaPost[0]['haunmovies_server_data']) && json_decode($metaPost, true)[0]['haunmovies_server_data']) {
			$count = count(json_decode($metaPost, true)[0]['haunmovies_server_data']);
		}
		echo view('HNMG::episode.epi-meta', compact('postID', 'count'));
	}
	
	public function hnmovies_save_metapost($post_id) {
		if(hnmg_value('enable_old_episode_manager')){
			if(!isset($_POST['hnmovies_link_nonce']) || !wp_verify_nonce($_POST['hnmovies_link_nonce'], 'haunmovies_save_metaposts')) return NULL;
			$svname     = isset($_POST['haunmovies_server_name']) ? $_POST['haunmovies_server_name'] : '';
			$name       = isset($_POST['haunmovies_ep_name']) ? $_POST['haunmovies_ep_name'] : '';
			$slug       = isset($_POST['haunmovies_ep_slug']) ? $_POST['haunmovies_ep_slug'] : '';
			$link       = isset($_POST['haunmovies_ep_link']) ? $_POST['haunmovies_ep_link'] : '';
			$type       = isset($_POST['haunmovies_ep_type']) ? $_POST['haunmovies_ep_type'] : '';
			$sublabel   = isset($_POST['haunmovies_ep_sub_label']) ? $_POST['haunmovies_ep_sub_label'] : '';
			$subfile    = isset($_POST['haunmovies_ep_sub_file']) ? $_POST['haunmovies_ep_sub_file'] : '';
			$subdefault = isset($_POST['haunmovies_ep_sub_default']) ? $_POST['haunmovies_ep_sub_default'] : '';
			$listsvname = isset($_POST['haunmovies_ep_listsv_name']) ? $_POST['haunmovies_ep_listsv_name'] : '';
			$listsvlink = isset($_POST['haunmovies_ep_listsv_link']) ? $_POST['haunmovies_ep_listsv_link'] : '';
			$listsvtype = isset($_POST['haunmovies_ep_listsv_type']) ? $_POST['haunmovies_ep_listsv_type'] : '';
			$input = array();
			
			if($svname) {
				$epslug = hnmg_value('haun_episode_url', 'ep');
				foreach ($svname as $key => $value) {
					$serverdata = [];
					$serverdata['haunmovies_server_name'] = esc_attr($value ? $value : 'Server #' . $key);
					$serverdata['haunmovies_server_data'] = [];

					if (isset($link[$key]) && $link[$key]) {
						foreach ($link[$key] as $k => $v) {
							$episode_slug = preg_match('/([^0-9]+)/is', $slug[$key][$k]) ? sanitize_title($slug[$key][$k]) : sanitize_title($epslug . '-' . $slug[$key][$k]);
							$_slug = str_replace('-', '_', $episode_slug);
							$serverdata['haunmovies_server_data'][$_slug] = [
								'haunmovies_ep_name' => isset($name[$key][$k]) ? $name[$key][$k] : '',
								'haunmovies_ep_slug' => isset($slug[$key][$k]) ? $slug[$key][$k] : '',
								'haunmovies_ep_type' => isset($type[$key][$k]) ? $type[$key][$k] : '',
								'haunmovies_ep_link' => $v,
								'haunmovies_ep_subs' => [],
								'haunmovies_ep_listsv' => []
							];

							if (isset($subfile[$key][$k]) && $subfile[$key][$k]) {
								$countSub = 0;
								foreach ($subfile[$key][$k] as $s => $sub) {
									$countSub++;
									$serverdata['haunmovies_server_data'][$_slug]['haunmovies_ep_subs'][] = [
										'haunmovies_ep_sub_file' => trim($sub),
										'haunmovies_ep_sub_label' => isset($sublabel[$key][$k][$s]) ? trim($sublabel[$key][$k][$s]) : '',
										'haunmovies_ep_sub_kind' => 'captions',
										'haunmovies_ep_sub_default' => $countSub == 1 ? 'true' : 'false'
									];
								}
							}

							if (isset($listsvlink[$key][$k]) && $listsvlink[$key][$k]) {
								foreach ($listsvlink[$key][$k] as $s => $link_parts) {
									$serverdata['haunmovies_server_data'][$_slug]['haunmovies_ep_listsv'][] = [
										'haunmovies_ep_listsv_link' => trim($link_parts),
										'haunmovies_ep_listsv_name' => isset($listsvname[$key][$k][$s]) ? trim($listsvname[$key][$k][$s]) : '',
										'haunmovies_ep_listsv_type' => isset($listsvtype[$key][$k][$s]) ? trim($listsvtype[$key][$k][$s]) : ''
									];
								}
							}
						}
					}
					array_push($input, $serverdata);
				}
				update_post_meta($post_id, HNMG_EPS, json_encode($input, JSON_UNESCAPED_UNICODE));
			}
		}
	}

}
