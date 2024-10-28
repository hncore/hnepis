<?php 
namespace HNMG\EP_Load;
use function Roots\view;

use HNMG\EP_Load\EP_Cache;
use HNMG\EP_Load\EP_Getlink;
use HNMG\EP_Load\EP_Helper;

class EP_Player { 
	public $cache;
	public $getlink;
	
	public function __construct() {
		$this->cache  = new EP_Cache();
		$this->getlink = new EP_Getlink();
		add_shortcode('haunPlayer', [$this, 'haunBuildPlayerShotcode'] );
		add_shortcode('haun_detect_server', [$this, 'haun_detect_server'], 10, 0);
	}
	
	public function haun_detect_server($link, $post_id) {
		$this->cache->timeCache = hnmg_value('player_cache_time');
		$this->getlink->init($link);
		if (hnmg_value('player_cache')) {
			$doccahe = $this->cache->readCache($link);
			if ($doccahe) {
				$dataplayer = json_decode($doccahe);
			} else {
				$dataplayer = $this->getlink->host->get_link($this->getlink->_url);
				$this->cache->saveCache($link, json_encode($dataplayer));
			}
		} else {
			$dataplayer = $this->getlink->host->get_link($this->getlink->_url);
		}
		return apply_filters('haun_player_sources', (object) ['post_id' => $post_id, 'sources' => $dataplayer, 'link' => $this->getlink->_url]);
	}
	
	public function haun_detect_embed($args){
		$detectembed = '';
		if (strpos($args['link'], 'youtube')) {
			$id = EP_Helper::getYoutubeId($args['link']);
			$detectembed = '//www.youtube.com/embed/' . $id;
		}elseif (strpos($args['link'], '.m3u8') === FALSE) {
			$detectembed = $args['link'];
		} else {
			if (strpos($args['link'], 'drive')) {
				$detectembed = str_replace('view', 'preview', $args['link']);
			} else {
				if (strpos($args['link'], 'dailymotion')) {
					$id = EP_Helper::getDailyMotionId($args['link']);
					$detectembed = '//www.dailymotion.com/embed/video/' . $id;
				} else {
					if (strpos($args['link'], 'vimeo')) {
						$id = EP_Helper::getVimeoId($args['link']);
						$detectembed = '//player.vimeo.com/video/' . $id;
					} else {
						if (strpos($args['link'], 'ok.ru/video/')) {
							$detectembed = str_replace('video', 'videoembed', $args['link']);
						} else {
							$detectembed = $args['link'];
						}
					}
				}
			}
		}
		$haun_embed_url = apply_filters('haun_embed_url', (object) ['post_id' => $args['post_id'], 'link' => $detectembed, 'subtitle' => $args['subtitle'], 'sublabel' => $args['sublabel'], 'custom_var' => @$args['custom_var']]);
		$linkembed = has_filter('haun_embed_url') ? $haun_embed_url : $haun_embed_url->link;
		echo apply_filters('haun_embed_player', $this->load_embed($linkembed));
	}
	
	public function load_embed($linkembed){
		if (hnmg_value('jw_player_show_ad') && hnmg_value('jw_show_embed_ads')){
			$haun_embed_player = '<div id="haun-embed" class="embed-responsive embed-responsive-16by9" style="display: none;">
				<iframe class="embed-responsive-item" src="'. $linkembed .'" allowfullscreen></iframe>
			</div>
			<div id="haun-player"></div><script>Load_Embed()</script>';
		} else {
			$haun_embed_player = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' . $linkembed . '" frameborder="0" scrolling="no"allowfullscreen="" allow="autoplay"></iframe></div></div>';
		}
		return $haun_embed_player;
	}
	
	public function haunPlayer($post_id, $episode, $server, $sub_server = '', $custom_var = ''){
		ob_start();
		$metaPost = get_post_meta($post_id, HNMG_EPS, true);
		$data = json_decode(stripslashes($metaPost), true);
		if ($data && isset($data[$server - 1]['haunmovies_server_data'][$episode])) {
			$dataPlayer = $data[$server - 1]['haunmovies_server_data'][$episode];
		} elseif ($data && isset($data[0]['haunmovies_server_data'][$episode])) {
			$dataPlayer = $data[0]['haunmovies_server_data'][$episode];
		} else {
			$datasub['data'] = ['status' => true, 'code' => 403];
			wp_send_json($datasub);
			return;
		}
		$subtitle_list = $dataPlayer['haunmovies_ep_subs'] ?? '';
		$subtitle_listt = $subtitle_list ?: ($data[0]['haunmovies_server_data'][$episode]['haunmovies_ep_subs'] ?? '');
		$subtitleb = '[';
		if (!empty($subtitle_listt)) {
			foreach ($subtitle_listt as $key => $value) {
				$default = $key == 0 ? 'true' : 'false';
				$subtitleb .= '{file: "'.trim($value['haunmovies_ep_sub_file']).'",label: "'.trim($value['haunmovies_ep_sub_label']).'",kind: "captions",default: '.$default.'},';
			}
			$subtitleb = rtrim($subtitleb, ',');
		} else {
			$jw_player_default_subtitle = hnmg_value('jw_player_default_subtitle') ?? '';
			if ($jw_player_default_subtitle) {
				$checksubtitle = isDomain($jw_player_default_subtitle) ? $jw_player_default_subtitle : home_url($jw_player_default_subtitle);
				$subtitleb .= '{file: "'.trim($checksubtitle).'",label: "Default",kind: "captions",default: true}';
			}
		}
		$subtitleb .= ']';
		$haunmovies_ep_sub_file = $haunmovies_ep_sub_label = [];
		if ($subtitle_listt) {
			foreach ($subtitle_listt as $value) {
				$haunmovies_ep_sub_file[] = $value['haunmovies_ep_sub_file'];
				$haunmovies_ep_sub_label[] = $value['haunmovies_ep_sub_label'];
			}
			$haunmovies_ep_sub_file = implode('|', $haunmovies_ep_sub_file);
			$haunmovies_ep_sub_label = implode('|', $haunmovies_ep_sub_label);
		}

		if ($sub_server) {
			$haunmovies_listsv = $dataPlayer['haunmovies_ep_listsv'] ?? '';
			if ($haunmovies_listsv) {
				$sublink = $haunmovies_listsv[$sub_server - 1]['haunmovies_ep_listsv_link'] ?? '';
				$subtype = $haunmovies_listsv[$sub_server - 1]['haunmovies_ep_listsv_type'] ?? '';
				$this->haunPlayerInit($post_id, $sublink, $subtype, $subtitleb, $haunmovies_ep_sub_file, $haunmovies_ep_sub_label, $custom_var);
			}
		} else {
			$this->haunPlayerInit($post_id, $dataPlayer['haunmovies_ep_link'], $dataPlayer['haunmovies_ep_type'], $subtitleb, $haunmovies_ep_sub_file, $haunmovies_ep_sub_label, $custom_var);
		}
		$html = ob_get_clean();
		$datasub['data'] = ['status' => true, 'sources' => $html];
		wp_send_json($datasub);
	}
	
	public function haunPlayerInit($post_id, $episode_link, $episode_type, $tracks, $list_sub, $list_sub_label, $custom_var = ''){
        if (has_filter('haun_custom_player_types')) {
            $haun_custom_player_types = apply_filters('haun_custom_player_types', (object) [
				'post_id' => $post_id, 
				'link' => $episode_link, 
				'episode_type' => $episode_type, 
				'player_type' => '', 
				'subtitle' => $list_sub,
				'sublabel' => $list_sub_label, 
				'sources' => '', 
				'custom_var' => $custom_var
			]);
            if ($haun_custom_player_types->player_type == 'custom_api') {
                $sources = $haun_custom_player_types->sources;
                $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_custom_player_types->link);
            } else {
                if ($haun_custom_player_types->player_type == 'custom_iframe') {
                    if ($haun_custom_player_types->sources) {
                        echo $haun_custom_player_types->sources;
                    } else {
                        $this->haun_detect_embed([
							'post_id' => $post_id, 
							'link' => $haun_custom_player_types->link, 
							'subtitle' => $haun_custom_player_types->subtitle, 
							'sublabel' => $haun_custom_player_types->sublabel
						]);
                    }
                } else {
                    if ($haun_custom_player_types->player_type == 'custom_player') {
                        if ($haun_custom_player_types->sources) {
                            echo $haun_custom_player_types->sources;
                        }
                    } else {
                        if ($haun_custom_player_types->episode_type == 'link') {
                            $array_filter = (object) [
								'post_id' => $post_id, 
								'link' => $episode_link, 
								'type' => $episode_type, 
								'subtitle' => $list_sub, 
								'sublabel' => $list_sub_label, 
								'sources' => '', 
								'custom_var' => $custom_var
							];
                            $haun_type_filter = apply_filters('haun_type_filter', $array_filter);
                            if (has_filter('haun_type_filter')) {
                                if ($haun_type_filter->type == 'embed') {
                                    $this->haun_detect_embed([
										'post_id' => $post_id, 
										'link' => $haun_type_filter->link, 
										'subtitle' => $haun_type_filter->subtitle, 
										'sublabel' => $haun_type_filter->sublabel, 
										'custom_var' => $custom_var
									]);
                                } else {
                                    if ($haun_type_filter->type == 'jwplayer') {
                                        $sources = $haun_type_filter->sources;
                                        $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_type_filter->link);
                                    } else {
                                        do_action('haun_custom_type_filter_sources', $array_filter);
                                    }
                                }
                            } else {
                                $sources = $this->haun_detect_server($haun_custom_player_types->link, $post_id)->sources;
                                $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_custom_player_types->link);
                            }
                        } else {
                            if ($haun_custom_player_types->episode_type == 'mp4') {
                                $result[] = [
									'file' => $haun_custom_player_types->link, 
									'label' => 'HD', 
									'type' => 'video/mp4'
								];
                                $sources = json_encode($result);
                                $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_custom_player_types->link);
                            } else {
                                if ($haun_custom_player_types->episode_type == 'embed') {
									$this->haun_detect_embed([
										'post_id' => $post_id, 
										'link' => $haun_custom_player_types->link, 
										'subtitle' => $haun_custom_player_types->subtitle, 
										'sublabel' => $haun_custom_player_types->sublabel
									]);
                                } else {
                                    echo '<div class="alert alert-danger text-center" role="alert">Biến <code>{$data->player_type}</code> chưa được khai báo hoặc Episode Type <strong>'. $haun_custom_player_types->episode_type . '</strong> chưa được hỗ trợ!<br> Để tạo episode type mới, vui lòng truy cập Dashboard -> Danh sách phim -> Episode Types</div>';
                                }
                            }
                        }
                    }
                }
            }
        } else {
           if ($episode_type == 'link') {
				$array_filter = (object) [
					'post_id' => $post_id,
					'link' => $episode_link,
					'type' => $episode_type,
					'subtitle' => $list_sub,
					'sublabel' => $list_sub_label,
					'sources' => ''
				];
				$haun_type_filter = apply_filters('haun_type_filter', $array_filter);
				if (has_filter('haun_type_filter')) {
					if ($haun_type_filter->type == 'embed') {
						$this->haun_detect_embed([
							'post_id' => $post_id, 
							'link' => $haun_type_filter->link, 
							'subtitle' => $haun_type_filter->subtitle, 
							'sublabel' => $haun_type_filter->sublabel
						]);
					} else {
						if ($haun_type_filter->type == 'jwplayer') {
							$sources = $haun_type_filter->sources;
							$this->haunBuildPlayer($post_id, $sources, $tracks, $haun_type_filter->link);
						} else {
							do_action('haun_custom_type_filter_sources', $array_filter);
						}
					}
				} else {
					$sources = $this->haun_detect_server($episode_link, $post_id)->sources;
					$this->haunBuildPlayer($post_id, $sources, $tracks, $episode_link);
				}
			} else {
				if ($episode_type == 'mp4') {
					$result[] = [
						'file' => $episode_link, 
						'label' => 'HD', 
						'type' => 'video/mp4'
					];
					$sources = json_encode($result);
					$this->haunBuildPlayer($post_id, $sources, $tracks, $episode_link);
				} else {
					if ($episode_type == 'embed') {
						$this->haun_detect_embed([
							'post_id' => $post_id, 
							'link' => $episode_link, 
							'subtitle' => $list_sub, 
							'sublabel' => $list_sub_label
						]);
					} else {
						echo '<div class="alert alert-danger text-center" role="alert">Episode Type "<strong>' . $episode_type . '</strong>" không tồn tại.<br> Để tạo episode type mới, vui lòng truy cập Dashboard -> Danh sách phim -> Episode Types</div>';
					}
				}
			}
        }
    }
	
	public function haunBuildPlayer($post_id, $sources = null, $tracks = array(), $link = '') {
		$cache_time         = hnmg_value('player_cache_time');
		$jwplayer_showad    = hnmg_value('jw_player_show_ad');
		$player_cfg         = hnmg_value('haun_jw_player_options');
		$adblock            = hnmg_value('detect_adblock') ? "true" : "false";
		$adblock_msg        = hnmg_value('adblock_msg') ? hnmg_value('adblock_msg') : '<p style="padding-top:15px;"><h2>Sorry!</h2> Users please remove ad blocker!</p>';
		$floating           = hnmg_value('floating_player') ? '1' : '0';
		$player_logo        = hnmg_value('jw_player_logo') ?: '';
		$player_logo_hide   = hnmg_value('jw_player_logo_hide') ? true : false;
		$logo_position      = hnmg_value('jw_player_logo_position') ?: '';
		$player_logo_link   = hnmg_value('jw_player_logo_link') ?: 'https://haunytb.com';
		$captions_color     = hnmg_value('jw_tracks_color') ?: '#eeee22';
		$captions_fontsize  = hnmg_value('jw_tracks_font_size') ?: 12;
		$jwplayerkey        = hnmg_value('jw_player_license_key') ?: 'MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g==';
		$player_sharing     = hnmg_value('jw_player_share') ?: '';
		$autoplay           = hnmg_value('jw_player_autoplay') ? 'true' : 'false';
		$autopause          = hnmg_value('jw_player_autopause') ? 'true' : 'false';
		$meta               = get_post_meta($post_id, HNMG_META, true);
		$poster             = isset($meta['haun_poster_url']) && $meta['haun_poster_url'] ? $meta['haun_poster_url'] : '';
		$jw_adcode          = hnmg_value('jw_player_custom_ads_code') ?: '';
		$sources            = $sources == '[]' || $sources == '' || $sources == 'null' || !json_decode($sources)[0]->file ? '[{ file: "//content.jwplatform.com/videos/not-a-real-video-file.mp4", label: "720p", type: "video/mp4"}]' : $sources;
		echo view('HNMG::layouts.player', compact('sources', 'jwplayerkey', 'post_id', 'poster', 'tracks', 'captions_color', 'captions_fontsize', 'player_logo', 'player_logo_link', 'player_logo_hide', 'logo_position', 'floating', 'autopause', 'autoplay', 'player_sharing', 'jw_adcode', 'jwplayer_showad', 'adblock', 'adblock_msg'));
		do_action('haun_player_instance', (object)['post_id' => $post_id, 'link' => $link]);
	}

	public function haunBuildPlayerShotcode($attr) {
        $args = shortcode_atts(array(
                'link' => '#',
                'post_id' => get_the_ID(),
                'sources' => '',
                'tracks' => '[]'
            ), $attr);
        $this->haunBuildPlayer($args['post_id'], HauNCrypt::decrypt($args['sources']), $args['tracks'], $args['link']);
    }
	
}