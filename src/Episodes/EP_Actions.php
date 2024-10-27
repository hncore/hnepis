<?php

namespace HNMG\Episodes;

use HNMG\Episodes\EP_Helper;

class EP_Actions {
	
	public function __construct() {
		$this->load = new EP_Helper(); 
	}
	
	public function register() {
		add_action('wp_ajax_hnajax_getlist_episodes', [$this, 'hnajax_getlist_episodes']);
		add_action('wp_ajax_hnajax_remove_server', [$this, 'hnajax_remove_server']);
		add_action('wp_ajax_hnajax_publish_post', [$this, 'hnajax_publish_post']);
		add_action('wp_ajax_hnajax_one_importer', [$this, 'hnajax_one_importer']);
		add_action('wp_ajax_hnajax_two_importer', [$this, 'hnajax_two_importer']);
		add_action('wp_ajax_hnajax_list_serverid', [$this, 'hnajax_list_serverid']);
		add_action('wp_ajax_hnajax_update_episode', [$this, 'hnajax_update_episode']);
		add_action('wp_ajax_hnajax_addnewserver', [$this, 'hnajax_addnewserver']);
		add_action('wp_ajax_hnajax_update_postmeta', [$this, 'hnajax_update_postmeta']);
		add_action('wp_ajax_hnsave_server_hidden', [$this, 'hnsave_server_hidden']);
		add_action('wp_ajax_hnajax_export_episodes', [$this, 'hnajax_export_episodes']);
	}
	
	public function hnajax_update_episode() {
		$post_id = isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
		$input = [];

		// Xử lý từng server
		foreach ($_POST['haunmovies_server_name'] as $serverIndex => $serverName) {
			$serverdata = [];
			$serverdata['haunmovies_server_name'] = esc_attr($serverName ? $serverName : 'Server #' . $serverIndex);
			$serverdata['haunmovies_server_data'] = [];

			// Xử lý từng tập phim trong server
			if (isset($_POST['haunmovies_ep_link'][$serverIndex])) {
				foreach ($_POST['haunmovies_ep_link'][$serverIndex] as $episodeIndex => $episodeLink) {
					$episode_slug = sanitize_title($_POST['haunmovies_ep_slug'][$serverIndex][$episodeIndex]);
					$_slug = str_replace('-', '_', $episode_slug);

					$serverdata['haunmovies_server_data'][$_slug] = [
						'haunmovies_ep_name' => isset($_POST['haunmovies_ep_name'][$serverIndex][$episodeIndex]) ? $_POST['haunmovies_ep_name'][$serverIndex][$episodeIndex] : '',
						'haunmovies_ep_slug' => isset($_POST['haunmovies_ep_slug'][$serverIndex][$episodeIndex]) ? $_POST['haunmovies_ep_slug'][$serverIndex][$episodeIndex] : '',
						'haunmovies_ep_type' => isset($_POST['haunmovies_ep_type'][$serverIndex][$episodeIndex]) ? $_POST['haunmovies_ep_type'][$serverIndex][$episodeIndex] : '',
						'haunmovies_ep_link' => $episodeLink,
						'haunmovies_ep_subs' => [],
						'haunmovies_ep_listsv' => []
					];

					// Xử lý phụ đề
					if (isset($_POST['sub_label'][$serverIndex][$episodeIndex])) {
						$subLabels = $_POST['sub_label'][$serverIndex][$episodeIndex];
						$subDefaults = $_POST['sub_default'][$serverIndex][$episodeIndex];
						foreach ($subLabels as $subIndex => $subLabel) {
							$subFile = '';
							if (isset($_FILES['sub_file_upload']['name'][$serverIndex][$episodeIndex][$subIndex]) && !empty($_FILES['sub_file_upload']['name'][$serverIndex][$episodeIndex][$subIndex])) {
								$uploadedFile = [
									'name' => $_FILES['sub_file_upload']['name'][$serverIndex][$episodeIndex][$subIndex],
									'type' => $_FILES['sub_file_upload']['type'][$serverIndex][$episodeIndex][$subIndex],
									'tmp_name' => $_FILES['sub_file_upload']['tmp_name'][$serverIndex][$episodeIndex][$subIndex],
									'error' => $_FILES['sub_file_upload']['error'][$serverIndex][$episodeIndex][$subIndex],
									'size' => $_FILES['sub_file_upload']['size'][$serverIndex][$episodeIndex][$subIndex]
								];
								$upload = wp_handle_upload($uploadedFile, ['test_form' => false]);
								if (!isset($upload['error'])) {
									$subFile = $upload['url'];
								}
							} else {
								if (isset($_POST['sub_file'][$serverIndex][$episodeIndex][$subIndex])) {
									$subFile = $_POST['sub_file'][$serverIndex][$episodeIndex][$subIndex];
								}
							}
							$serverdata['haunmovies_server_data'][$_slug]['haunmovies_ep_subs'][] = [
								'haunmovies_ep_sub_file' => trim($subFile),
								'haunmovies_ep_sub_label' => trim($subLabel),
								'haunmovies_ep_sub_kind' => 'captions',
								'haunmovies_ep_sub_default' => isset($subDefaults[$subIndex]) && $subDefaults[$subIndex] == '1' ? 'true' : 'false'
							];
						}
					}

					// Xử lý server dự phòng
					if (isset($_POST['listsv_link'][$serverIndex][$episodeIndex])) {
						foreach ($_POST['listsv_link'][$serverIndex][$episodeIndex] as $svIndex => $listsvLink) {
							$listsvName = isset($_POST['listsv_name'][$serverIndex][$episodeIndex][$svIndex]) ? $_POST['listsv_name'][$serverIndex][$episodeIndex][$svIndex] : '';
							$listsvType = isset($_POST['listsv_type'][$serverIndex][$episodeIndex][$svIndex]) ? $_POST['listsv_type'][$serverIndex][$episodeIndex][$svIndex] : '';
							$serverdata['haunmovies_server_data'][$_slug]['haunmovies_ep_listsv'][] = [
								'haunmovies_ep_listsv_link' => trim($listsvLink),
								'haunmovies_ep_listsv_name' => trim($listsvName),
								'haunmovies_ep_listsv_type' => trim($listsvType)
							];
						}
					}
				}
			}

			$input[] = $serverdata;
		}

		// Lưu dữ liệu
		update_post_meta($post_id, HNMG_EPS, json_encode($input, JSON_UNESCAPED_UNICODE));
		wp_die(json_encode($input, JSON_UNESCAPED_UNICODE));
	}

	public function hnajax_getlist_episodes() {
		$postID = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
		$metaPost = get_post_meta($postID, HNMG_EPS, true);
		$data = json_decode(stripslashes($metaPost), true);
		wp_send_json_success($data);
		wp_die();
	}
	
	public function hnajax_remove_server() {
        $post_id 	= isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
        $server 	= isset($_POST['server']) ? absint($_POST['server']) : '';
        $data 		= json_decode(stripcslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
		$hiddensv 	= get_post_meta($post_id, 'episode_server_hidden', true);
        unset($data[$server]);
        $metaPost = array_values($data);
        if($hiddensv) {
            unset($hiddensv[$server]);
            update_post_meta($post_id, 'episode_server_hidden', $hiddensv);
        }
		update_post_meta($post_id, HNMG_EPS, wp_json_encode($metaPost, JSON_UNESCAPED_UNICODE));
		wp_die(wp_json_encode($metaPost, JSON_UNESCAPED_UNICODE));
    }
	
	public function hnajax_publish_post() {
		$post_id = isset($_POST['post_id']) ? (int) $_POST['post_id'] : '';
		if ($post_id) {
			$postData = array(
				'ID' => $post_id, 
				'post_status' => 'publish'
			);
			wp_update_post($postData);
			wp_send_json(array(
				'status' => 1, 
				'message' => ''
			));
		} else {
			wp_send_json(array(
                'status' => 0,
                'message' => ''
            ));
		}
	}
	
	public function hnajax_one_importer() {
		$post_id        = isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
		$server         = isset($_POST['server']) ? absint($_POST['server']) : '';
		$server_name    = isset($_POST['server_name']) ? sanitize_text_field(trim($_POST['server_name'])) : 'Server #1';
		$list_link      = $_POST['list_link'] ?? [];
		$import_type    = sanitize_text_field(trim($_POST['import_type'] ?? ''));
		$episode_slug   = sanitize_text_field(trim($_POST['episode_slug'] ?? ''));
		$metaPost       = json_decode(get_post_meta($post_id, HNMG_EPS, true), true) ?? [];

		foreach ($list_link as $link) {
			if (empty($link)) {
				continue;
			}
			$link_parts = explode('|', $link);
			if (count($link_parts) < 2) {
				continue; 
			}

			switch ($import_type) {
				case 'listserver':
					$new_episode_data = [
						'haunmovies_ep_listsv_name' => sanitize_text_field(trim($link_parts[0])),
						'haunmovies_ep_listsv_link' => sanitize_text_field(trim($link_parts[1])),
						'haunmovies_ep_listsv_type' => sanitize_text_field(trim($link_parts[2] ?? ''))
					];
					$metaPost[$server]['haunmovies_server_data'][$episode_slug]['haunmovies_ep_listsv'] = 
					$metaPost[$server]['haunmovies_server_data'][$episode_slug]['haunmovies_ep_listsv'] ?? [];
					$metaPost[$server]['haunmovies_server_data'][$episode_slug]['haunmovies_ep_listsv'][] = $new_episode_data;
				break;
				
				case 'subtitle':
					$new_subtitle_data = [
						'haunmovies_ep_sub_label' 	=> sanitize_text_field(trim($link_parts[0])),
						'haunmovies_ep_sub_link' 	=> sanitize_text_field(trim($link_parts[1]))
					];
					$metaPost[$server]['haunmovies_server_data'][$episode_slug]['haunmovies_ep_subs'] = 
					$metaPost[$server]['haunmovies_server_data'][$episode_slug]['haunmovies_ep_subs'] ?? [];
					$metaPost[$server]['haunmovies_server_data'][$episode_slug]['haunmovies_ep_subs'][] = $new_subtitle_data;
					break;

				case 'listepisode':
					list($ep_name, $ep_link, $ep_type) = $link_parts;
					$ep_slug = sanitize_text_field(trim($ep_name));
					$metaPost[$server]['haunmovies_server_data'][$ep_slug] = [
						'haunmovies_ep_name' => sanitize_text_field(trim($ep_name)),
						'haunmovies_ep_slug' => $ep_slug,
						'haunmovies_ep_type' => sanitize_text_field(trim($ep_type)),
						'haunmovies_ep_link' => sanitize_text_field(trim($ep_link)),
						'haunmovies_ep_subs' => [],
						'haunmovies_ep_listsv' => []
					];
					break;
			}
		}

		update_post_meta($post_id, HNMG_EPS, wp_json_encode($metaPost, JSON_UNESCAPED_UNICODE));
		wp_die(wp_json_encode($metaPost, JSON_UNESCAPED_UNICODE));
	}

	public function hnajax_list_serverid() {
        $post_id 		= isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
        $server 		= isset($_POST['server']) ? absint($_POST['server']) : '';
        $episode_meta 	= get_post_meta($post_id, HNMG_EPS, true);
        $data 			= json_decode(stripcslashes($episode_meta));
        echo '<option value="" id="choose-ep">' . __('Choose Episode', 'haunthemes') . '</option>';
        foreach ($data[$server]->haunmovies_server_data as $key => $val) {
            echo '<option value="' . $key . '">' . $val->haunmovies_ep_name . '</option>';
        }
        exit;
    }
	
	public function hnajax_two_importer() {
        $post_id 		= isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
        $server 		= isset($_POST['server']) ? absint($_POST['server']) : 0;
        $server_name 	= isset($_POST['server_name']) ? sanitize_text_field(trim($_POST['server_name'])) : 'Server #1';
        $list_link 		= isset($_POST['list_link']) ? $_POST['list_link'] : '';
        $episode_slug 	= hnmanager_value(HNMG_OPTION, 'haun_episode_url', 'ep');
        $json = json_decode(stripcslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
        $json[$server]['haunmovies_server_name'] = $server_name;
        foreach ($list_link as $links) {
            if ($links != '') {
                $info = explode('|', $links);
                list($ep_name, $ep_link, $ep_type) = $info;
                $ep_slug = preg_match('/([a-z]+)/is', $ep_name) ? sanitize_title($ep_name) : sanitize_title($episode_slug . ' ' . $ep_name);
                $_slug = str_replace('-', '_', $ep_slug);
                $array = array(
					'haunmovies_ep_name' => sanitize_text_field($ep_name), 
					'haunmovies_ep_slug' => sanitize_text_field($ep_slug), 
					'haunmovies_ep_type' => sanitize_text_field($ep_type), 
					'haunmovies_ep_link' => sanitize_text_field($ep_link), 
					'haunmovies_ep_subs' => array(), 
					'haunmovies_ep_listsv' => array()
				);
                $json[$server]['haunmovies_server_data'][$_slug] = $array;
                if(isset($info[3])) {
                    $subtitle_arr = str_replace('subtitle=', '', explode(',', $info[3]));
                    if ($subtitle_arr[0] !== '') {
                        foreach ($subtitle_arr as $key => $subfile) {
                            $subfile = explode('*', $subfile);
                            $subtitle_info[$key]['haunmovies_ep_sub_file'] = sanitize_text_field($subfile[0]);
                            $subtitle_info[$key]['haunmovies_ep_sub_label'] = sanitize_text_field($subfile[1]);
                            $subtitle_info[$key]['haunmovies_ep_sub_default'] = $key == 0 ? true : false;
                        }
                        $json[$server]['haunmovies_server_data'][$_slug]['haunmovies_ep_subs'] = $subtitle_info;
                    }
                }
                if (isset($info[4])) {
                    $server_data = str_replace('server=', '', explode(',', $info[4]));
                    if ($server_data[0] !== '') {
                        foreach ($server_data as $key => $sv) {
                            $sv = explode('*', $sv);
                            $dataserver[$key]['haunmovies_ep_listsv_link'] = sanitize_text_field($sv[0]);
                            $dataserver[$key]['haunmovies_ep_listsv_name'] = sanitize_text_field($sv[1]);
                            $dataserver[$key]['haunmovies_ep_listsv_type'] = sanitize_text_field($sv[2]);
                        }
                        $json[$server]['haunmovies_server_data'][$_slug]['haunmovies_ep_listsv'] = $dataserver;
                    }
                }
            }
        }
        update_post_meta($post_id, HNMG_EPS, wp_json_encode($json, JSON_UNESCAPED_UNICODE));
		wp_die(wp_json_encode($json, JSON_UNESCAPED_UNICODE));
    }
	
	public function hnajax_addnewserver() {
		$post_id 		= isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
		$server 		= isset($_POST['server']) ? absint($_POST['server']) : '';
		$server_name 	= isset($_POST['server_name']) ? sanitize_text_field($_POST['server_name']) : '';
		$list_link 		= isset($_POST['list_link']) ? $_POST['list_link'] : '';
		$episode_slug 	= hnmanager_value(HNMG_OPTION, 'haun_episode_url', 'ep');
		$metaPost 		= json_decode(stripslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
		$metaPost[$server]['haunmovies_server_name'] = $server_name;
		foreach ($list_link as $key => $link) {
			$data = explode('|', $link);
			$ep_name = sanitize_text_field($data[0]);
			$ep_link = sanitize_text_field($data[1]);
			$ep_type = sanitize_text_field($data[2]);
			$ep_slug = preg_match('/([a-z]+)/is', $ep_name) ? sanitize_title($ep_name) : sanitize_title($episode_slug . ' ' . $ep_name);
			$ep_slug = str_replace('-', '_', $ep_slug);
			$metaPost[$server]['haunmovies_server_data'][$ep_slug] = [
				'haunmovies_ep_name' => $ep_name,
				'haunmovies_ep_slug' => $ep_slug,
				'haunmovies_ep_type' => $ep_type,
				'haunmovies_ep_link' => $ep_link,
				'haunmovies_ep_subs' => [],
				'haunmovies_ep_listsv' => []
			];
		}
		$this->load->set_post_modified($post_id);
		update_post_meta($post_id, HNMG_EPS, wp_json_encode($metaPost, JSON_UNESCAPED_UNICODE));
		wp_die(wp_json_encode($metaPost, JSON_UNESCAPED_UNICODE));
	}

	public function hnajax_update_postmeta() {
		$post_id 	= isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
		$server 	= isset($_POST['server']) ? absint($_POST['server']) : '';
		$post_meta 	= isset($_POST['post_meta']) ? $_POST['post_meta'] : '';
		$meta_data 	= get_post_meta($post_id, HNMG_META, true);
		$metaPost['haun_poster_url'] 	= sanitize_text_field($meta_data['haun_poster_url']);
		$metaPost['haun_thumb_url'] 	= sanitize_text_field($meta_data['haun_thumb_url']);
		foreach ($post_meta as $key => $val) {
			$metaPost[$val['name']] = sanitize_text_field($val['value']);
			if ($val['name'] == 'haun_add_to_widget') {
				$widget_values[] = sanitize_text_field($val['value']);
			}
		}
		$metaPost['haun_add_to_widget'] = $widget_values;
		$this->load->set_post_modified($post_id);
		update_post_meta($post_id, HNMG_META, $metaPost);
		sleep(1);
		$post_meta = get_post_meta($post_id, HNMG_META, true);
		wp_set_object_terms($post_id, $post_meta['haun_movie_status'], 'status', false);
		wp_set_object_terms($post_id, $post_meta['haun_add_to_widget'], 'post_options', false);
		$formality = $this->load->get_post_format($post_meta['haun_movie_formality']);
		set_post_format($post_id, $formality);
		wp_die(wp_json_encode($metaPost, JSON_UNESCAPED_UNICODE));
	}
	
	public function hnajax_export_episodes() {
		$post_id = sanitize_text_field($_POST['post_id']);
		$server  = sanitize_text_field($_POST['server_id']);
		$json    = json_decode(stripslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
		$list_link = array_map(function($episode) {
			$subtitle_list = array_map(function($sub) {
				return $sub['haunmovies_ep_sub_file'] . '*' . $sub['haunmovies_ep_sub_label'];
			}, $episode['haunmovies_ep_subs'] ?? []);

			$list_server = array_map(function($server_data) {
				return implode('*', [
					$server_data['haunmovies_ep_listsv_name'],
					$server_data['haunmovies_ep_listsv_link'],
					$server_data['haunmovies_ep_listsv_type']
				]);
			}, $episode['haunmovies_ep_listsv'] ?? []);

			$subtitle_string = !empty($subtitle_list) ? '|subtitle=' . implode(',', $subtitle_list) : '';
			$lists_v = !empty($list_server) ? '|server=' . implode(',', $list_server) : '';
			return implode('|', [$episode['haunmovies_ep_name'], $episode['haunmovies_ep_link'], $episode['haunmovies_ep_type']]) . $subtitle_string . $lists_v;
		}, $json[$server]['haunmovies_server_data'] ?? []);

		if(!is_dir(HNMG_PART)) wp_mkdir_p(HNMG_PART);
		
		$list_link_string 	= implode("\r\n", $list_link);
		$file_name 			= 'Episode - ' . get_the_title($post_id) . ' - ' . str_replace('#', '', $json[$server]['haunmovies_server_name']) . '.txt';
		$file_path 			= HNMG_PART . '/' . sanitize_file_name($file_name);
		file_put_contents($file_path, $list_link_string);
		wp_send_json([
			'status' => true,
			'msg' => '<div class="text-base font-bold px-4 py-6 text-center"><a href="' . esc_url(content_url('film-export') . '/' . sanitize_file_name($file_name)) . '" download>Download ' . esc_html($file_name) . '</a></div>'
		]);
	}

	public function hnsave_server_hidden() {
		$value = isset($_POST['value']) ? $_POST['value'] : '';
		$post_id = isset($_POST['post_id']) ? absint($_POST['post_id']) : '';
		update_post_meta($post_id, 'episode_server_hidden', $value);
		wp_die();
	}
	
	
	
}
