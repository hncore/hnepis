<?php 
namespace HNMG\EP_Load;

class EP_List { 
	
	public function compose($view) {
        $view->with([
            'haun_show_all_eps_list' 	=> [$this, 'haun_show_all_eps_list'],
            'haun_show_all_eps_table' 	=> [$this, 'haun_show_all_eps_table'],
            'haun_episode_pagination' 	=> [$this, 'haun_episode_pagination'],
            'hnshow_btnplayer' 			=> [$this, 'hnshow_btnplayer'],
            'hn_five_epislast' 			=> [$this, 'hn_five_epislast'],
			'hn_listsv' 				=> [$this, 'hn_listsv'],
			'hnis_type' 				=> [$this, 'hnis_type'],
			'hn_show_sv' 				=> [$this, 'hn_show_sv'],
			'hntype_slug' 				=> [$this, 'hntype_slug'],
			'firstlast_link' 			=> [$this, 'firstlast_link'],
			'haun_title' 				=> [$this, 'haun_title'],
			'hnshow_views' 				=> [$this, 'hnshow_views'],
        ]);
    }
	
	public function hnshow_views($postid = '', $type = 'all') {
		global $post;
		$post_id = $postid != '' ? $postid : $post->ID;
		$views = get_post_meta($post_id, '_hnviews', true);
		if (!$views) {
			$views = [
				'hnview_post_all' => 0,
				'hnview_post_day' => 0,
				'hnview_post_week' => 0,
				'hnview_post_mon' => 0,
			];
			update_post_meta($post_id, '_hnviews', $views);
		}
		$count = $views["hnview_post_{$type}"] ?? $views['hnview_post_all'];
		$precision = 1; 
		if ($count < 900) { 
			$n_format = number_format($count, $precision);
			$suffix = '';
		} else if ($count < 900000) { 
			$n_format = number_format($count / 1000, $precision);
			$suffix = 'K';
		} else if ($count < 900000000) {
			$n_format = number_format($count / 1000000, $precision);
			$suffix = 'M';
		} else if ($count < 900000000000) {
			$n_format = number_format($count / 1000000000, $precision);
			$suffix = 'B';
		} else { 
			$n_format = number_format($count / 1000000000000, $precision);
			$suffix = 'T';
		}
		if ($precision > 0) {
			$dotzero = '.' . str_repeat('0', $precision);
			$n_format = str_replace($dotzero, '', $n_format);
		}
		return $n_format . $suffix;
	}
	
	public function hnshow_btnplayer() {
		$btnonoff 	= hnmg_value('hnbtn_player'); 
		if(!$btnonoff) return; 
		$bgcolor  	= hnmg_value('hnbtn_player_color') ?: '#0b0f15';
		$showbtn  	= hnmg_value('hnbtn_player_select');
		$postion 	= hnmg_value('hnbtn_player_postion') === 'left' ? 'justify-start' : (hnmg_value('hnbtn_player_postion') === 'center' ? 'justify-center' : 'justify-end');
		$btnclass  	= apply_filters('button_player', 'bg-['.$bgcolor.'] hover:bg-sky-700 px-4 py-1.5 rounded-sm relative z-50 text-white font-semibold text-xs leading-5 cursor-pointer ');
		$html = '<div x-data="Button_Player()" x-init="init()" class="flex items-center gap-1 my-4 '.$postion.'">'; 
		if(in_array('autonext', $showbtn)) {
			$html .= '<div class="' .$btnclass. '">
				<label for="toggleInfo" class="inline-flex items-center cursor-pointer my-0">
					<input @click="toggleAutoNext()" id="toggleInfo" type="checkbox" class="peer sr-only" role="switch" x-bind:checked="isAutoNext" />
					<span class="tracking-wide text-xs font-medium text-white peer-checked:text-white peer-disabled:cursor-not-allowed mr-2">' . __('AutoNext', 'hnmgepis') . '</span>
					<div class="relative h-4 w-8 after:h-3.5 after:w-3.5 peer-checked:after:translate-x-4 rounded-full border border-neutral-300 bg-neutral-50 after:absolute after:bottom-0 after:left-[0.0625rem] after:top-0 after:my-auto after:rounded-full after:bg-neutral-600 after:transition-all after:content-[\'\'] peer-checked:bg-sky-500 peer-checked:after:bg-white peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-neutral-800 peer-focus:peer-checked:outline-sky-500 peer-active:outline-offset-0 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" aria-hidden="true">
					</div>
				</label>
			</div>';
		}
		if(in_array('next_prev', $showbtn)) {
			$html .= '<div class="' .$btnclass. '" @click="Prev_Episode()"><i class="fa fa-fast-backward prev mr-1"></i>Prev EP</div>
				<div class="' .$btnclass. '" @click="Next_Episode()">Next EP<i class="fa fa-fast-forward ml-1"></i></div>';
		}
		if(in_array('expand', $showbtn)) {
			$html .= '<div id="explayer" class="' .$btnclass. '"><i class="fa fa-expand mr-1"></i>Expand</div>';
		}
		if (in_array('light', $showbtn)) {
			$html .= '<div @click="Toggle_Light()" class="' . $btnclass . '"><i class="fa fa-adjust mr-1"></i><span x-text="toggleLightText"></span></div>';
		}
		if(in_array('report', $showbtn)) {
			$html .= '<div @click="ReportOpen()" class="' .$btnclass. '"><i class="fa fa-exclamation-triangle mr-1"></i>Report</div>';
		}
		if(in_array('view', $showbtn)) {
			$html .= '<div class="' .$btnclass. '"><i class="fa fa-eye mr-1"></i>'.$this->hnshow_views().' Views</div>';
		}
		$html .= '</div>';
		return $html;
	}

	public function haun_show_findmovies() {
		if (hnmg_value('haun_find_episodes')) {
			echo '<div x-data="Find_Episodes()" x-init="EpisodeItemSearch()" class="relative max-w-xs md:w-48 mt-10">
				<div class="flex items-center bg-slate-800 text-white rounded-full border border-gray-600 overflow-hidden">
					<span class="px-3 text-gray-500"><i class="fa fa-search"></i></span>
					<input name="search-episode-item" x-ref="searchInput" @keyup="EpisodeItemSearch" class="search-episode-item py-1 pl-2 pr-3 w-full bg-slate-800 text-white focus:outline-none focus:border-yellow-500" type="text" placeholder="Tìm tập phim" autocomplete="off">
				</div>
			</div>
			<ul x-show="showResults" id="episode-result" class="list-none overflow-y-auto overflow-x-hidden m-0 grid max-h-[285px] overflow-x-auto gap-2 grid-cols-[repeat(auto-fill,minmax(66px,1fr))] box-border text-center pt-[15px] px-3"></ul>';
		}
	}

	public function haun_show_all_eps_list($post_id, $server, $episode_slug) {
		$episode_slug = get_query_var('episode_slug') ? wp_strip_all_tags(get_query_var('episode_slug')) : $episode_slug;
		$meta 		= get_post_meta($post_id, HNMG_META, true);
		$check_eps 	= isset($meta['haun_add_to_widget']) && in_array('paging_eps', (array)$meta['haun_add_to_widget']);
		$data 		= json_decode(stripslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
		$bgcolor 	= apply_filters('episodes_bgcolor', ' bg-[#0b0f15]');
		$svcolor 	= apply_filters('episodes_svcolor', ' text-[#ea9b06]');
		$server 	= $this->hidden_servers($post_id, $server ?: 1, $data);
		$result 	= '';
		$result .= $this->haun_show_findmovies();
		$result .= '<div x-data="Epi_Pagination_List()" id="haun-list-server" class="hn-server list-eps-ajax mt-3.5">';
		if ($data) {
			$slug_first = key($data[$server - 1]['haunmovies_server_data']);
			$slug_last = str_replace('-', '_', end($data[$server - 1]['haunmovies_server_data'])['haunmovies_ep_slug']);
			foreach ($data as $key => $value) {
				$result .= '<div class="mb-2.5" data-episode-nav="' . $check_eps . '">';
				$result .= '<span class="haun-list-name' . $bgcolor . $svcolor . ' "><span class="fa fa-server"></span> ' . $value['haunmovies_server_name'] . '</span>';
				$hnserver_data = hnmg_value('episode_display_mode') == 'desc' ? array_reverse($value['haunmovies_server_data'], true) : $value['haunmovies_server_data'];
				$is_active_server = array_filter($hnserver_data, function ($v) use ($server, $episode_slug, $key) {
					return $server == $key + 1 && $episode_slug && $episode_slug == $v["haunmovies_ep_slug"];
				});
				$active_class = $is_active_server ? ' hnactive' : '';

				$result .= '<div id="server-' . ($key + 1) . '" class="haun-list-wrapper' . $active_class . '">';
				$result .= '<ul id="listsv-' . ($key + 1) . '" class="haun-list-eps ' . $bgcolor . '">';

				foreach ($hnserver_data as $k => $v) {
					if (!empty($v["haunmovies_ep_name"])) {
						$server = get_query_var('haun_action') ? get_query_var('haun_server') : $server;
						$active = ($server == $key + 1 && $episode_slug && $episode_slug == $v["haunmovies_ep_slug"]) ? ' active' : '';
						$activehtml = $active == ' active' ? '<div class="hn-pulse-ring"></div>' : '';
						$position = ($k == $slug_first) ? 'data-position="first"' : (($k == $slug_last) ? 'data-position="last"' : '');
						$embed = $v['haunmovies_ep_type'] == 'embed' ? 1 : 0;
						$isSpecialEpisode = strlen($v['haunmovies_ep_name']) > 10 ? ' col-span-2' : '';
						$hnwatch = $this->hntype_slug($post_id, $v['haunmovies_ep_slug'], ($key + 1));

						$result .= '<li class="haun-episode' . $active . $isSpecialEpisode . '"
									data-href="' . $hnwatch . '" data-post-id="' . $post_id . '" data-number="' . ($k++) . '" data-server="' . ($key + 1) . '" data-episode-slug="' . $v['haunmovies_ep_slug'] . '" ' . $position . ' data-embed="' . $embed . '">
									<a href="' . $hnwatch . '" title="' . $v['haunmovies_ep_name'] . '">' . $activehtml . '
									<span class="haun-btn">' . $v['haunmovies_ep_name'] . '</span></a>
								</li>';
					}
				}
				$result .= '</ul></div></div><div id="pagination-' . ($key + 1) . '"></div>';
			}
		}

		$result .= '</div>';
		echo $result;
	}

    public function haun_show_all_eps_table($post_id, $server, $episode_slug) {
		ob_start();
		$episode_slug = get_query_var('episode_slug') ? wp_strip_all_tags(get_query_var('episode_slug')) : $episode_slug;
		$meta 		= get_post_meta($post_id, HNMG_META, true);
		$check_eps 	= isset($meta['haun_add_to_widget']) && in_array('paging_eps', (array)$meta['haun_add_to_widget']);
		$data 		= json_decode(stripslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
		$bgcolor 	= apply_filters('episodes_bgcolor', ' bg-[#0b0f15]');
		$svcolor 	= apply_filters('episodes_svcolor', ' text-[#ea9b06]');
		$server 	= $this->hidden_servers($post_id, $server ?: 1, $data);
		$result 	= '';
		$result .= $this->haun_show_findmovies();
		$result .= '<div id="haun-list-server" x-data="Epi_Pagination_Table()" class="hn-server mt-3.5">';
		if ($data) {
			$slug_first = key($data[$server - 1]['haunmovies_server_data']);
			$slug_last = str_replace('-', '_', end($data[$server - 1]['haunmovies_server_data'])['haunmovies_ep_slug']);
			$result .= '<div class="my-4">';
			$result .= '<ul class="flex">';
				foreach ($data as $key => $value) {
					$result .= '<li class="mr-4">';
					$result .= '<a href="javascript:void(0);" @click="setActiveTab(' . $key . ')" :class="{ \'' . $bgcolor.$svcolor . '\': activeTab === ' . $key . ', \'text-gray-400\': activeTab !== ' . $key . ' }" class="block py-2 px-4 rounded-t-sm"><span class="fa fa-server"></span> ' . $value['haunmovies_server_name'] . '</a>';
					$result .= '</li>';
				}
			$result .= '</ul>';
			$result .= '<div>';
			foreach ($data as $key => $value) {
				$hnserver_data = hnmg_value('episode_display_mode') == 'desc' ? array_reverse($value['haunmovies_server_data'], true) : $value['haunmovies_server_data'];
				$result .= '<div x-show="activeTab === ' . $key . '" :class="{ \'hnactive\': activeTab === ' . $key . '}" class="haun-list-wrapper">';
				$result .= '<ul class="haun-list-eps' . $bgcolor . '">';
				foreach ($hnserver_data as $k => $v) {
					if (!empty($v["haunmovies_ep_name"])) {
						$server 			= get_query_var('haun_action') ? get_query_var('haun_server') : $server;
						$active 			= ($server == $key + 1 && $episode_slug && $episode_slug == $v["haunmovies_ep_slug"]) ? ' active' : '';
						$activehtml 		= $active == ' active' ? '<div class="hn-pulse-ring"></div>' : '';
						$position 			= ($k == $slug_first) ? 'data-position="first"' : (($k == $slug_last) ? 'data-position="last"' : '');
						$embed 				= $v['haunmovies_ep_type'] == 'embed' ? 1 : 0;
						$hnwatch 			= $this->hntype_slug($post_id, $v['haunmovies_ep_slug'], ($key + 1));
						$isSpecialEpisode 	= strlen($v['haunmovies_ep_name']) > 10 ? ' col-span-2' : '';
						$result .= '<li class="haun-episode' . $active . $isSpecialEpisode .'"
									data-href="' . $hnwatch . '" data-post-id="' . $post_id . '" data-number="' . ($k++) . '" data-server="' . ($key + 1) . '" data-episode-slug="' . $v['haunmovies_ep_slug'] . '" ' . $position . ' data-embed="' . $embed . '">
									<a href="' . $hnwatch . '" title="' . $v['haunmovies_ep_name'] . '">
										' . $activehtml . '
										<span class="haun-btn">' . $v['haunmovies_ep_name'] . '</span>
									</a>
								</li>';
					}
				}
				$result .= '</ul>';
				$result .= '</div>';
			}
			$result .= '</div>';
			$result .= '</div>';
		}
		$result .= '</div>';
		echo $result;
		echo ob_get_clean();
	}

	public function haun_episode_pagination($post_id, $server, $episode_slug) {
		ob_start();
		$episode_slug 		= get_query_var('episode_slug') ? wp_strip_all_tags(get_query_var('episode_slug')) : $episode_slug;
		$episodePagination 	= hnmg_value('episode_pagination') ?: 100;
		$bgcolor 			= apply_filters('episodes_bgcolor', ' bg-[#0b0f15]');
		$svcolor 			= apply_filters('episodes_svcolor', ' text-[#ea9b06]');
		$metaPost 			= get_post_meta($post_id, HNMG_EPS, true);
		$data 				= json_decode(stripslashes($metaPost), true);
		$server 			= $this->hidden_servers($post_id, $server ?: 1, $data);
		$result = '';
		$result .= $this->haun_show_findmovies();
		$result .= '<div id="haun-list-server" x-data="Epi_Pagination()" class="hn-server mt-3.5">';
		if ($data) {
			$slug_first = key($data[$server - 1]['haunmovies_server_data']);
			$slug_last = str_replace('-', '_', end($data[$server - 1]['haunmovies_server_data'])['haunmovies_ep_slug']);
			$result .= '<div class="my-4">';
			$result .= '<ul class="flex">';
			foreach ($data as $key => $value) {
				$result .= '<li class="mr-4">';
				$result .= '<a href="javascript:void(0);" @click="setActiveServer(' .$key. ')" :class="{ \'' . $bgcolor.$svcolor . '\': activeServer === ' . $key . ', \'text-gray-400\': activeServer !== ' . $key . ' }" class="block py-2 px-4"><span class="fa fa-server"></span> ' . $value['haunmovies_server_name'] . '</a>';
				$result .= '</li>';
			}
			$result .= '</ul>';
			$result .= '<div class="'.$bgcolor.' p-2">';
			foreach ($data as $key => $value) {
				$hnserver_data = hnmg_value('episode_display_mode') == 'desc' ? array_reverse($value['haunmovies_server_data'], true) : $value['haunmovies_server_data'];
				$episodeChunks = array_chunk($hnserver_data, $episodePagination, true);
				$result .= '<div x-show="activeServer === ' . $key . '" :class="{ \'hnactive\': activeServer === ' . $key . '}">';
				$result .= '<div class="flex flex-wrap items-center space-x-2 mb-4 px-2"> <div class="flex mr-3">' . __('Episodes:', 'hnmgepis') . '</div>';
					foreach ($episodeChunks as $rangeIndex => $chunk) {
						$firstEp = reset($chunk)['haunmovies_ep_name'];
						$lastEp = end($chunk)['haunmovies_ep_name'];
						$rangeText = $firstEp . '-' . $lastEp;
						$result .= ' <button @click="setActiveEpisodeRange(' . $rangeIndex . ')" :class="{ \'bg-blue-500 text-white\': activeEpisodeRange === ' . $rangeIndex . ', \'text-orange-400\': activeEpisodeRange !== ' . $rangeIndex . ' }" class="py-1 px-3">' . $rangeText . '</button>';
					}
				$result .= '</div>';
				foreach ($episodeChunks as $rangeIndex => $chunk) {
					$result .= '<ul x-show="activeEpisodeRange === ' . $rangeIndex . '" class="haun-list-eps ' . $bgcolor . '">';
					foreach ($chunk as $k => $v) {
						$active 			= ($server == $key + 1 && $episode_slug == $v['haunmovies_ep_slug']) ? ' active' : '';
						$hnwatch 			= $this->hntype_slug($post_id, $v['haunmovies_ep_slug'], $key + 1);
						$activehtml 		= $active == ' active' ? '<div class="hn-pulse-ring"></div>' : '';
						$position 			= ($k == $slug_first) ? 'data-position="first"' : (($k == $slug_last) ? 'data-position="last"' : '');
						$embed 	 			= $v['haunmovies_ep_type'] == 'embed' ? 1 : 0;
						$isSpecialEpisode 	= strlen($v['haunmovies_ep_name']) > 10 ? ' col-span-2' : '';
						$result .= '<li class="haun-episode' . $active.$isSpecialEpisode. '" 
							data-href="' . $hnwatch . '" data-post-id="' . $post_id . '" data-number="' . ($k++) . '" data-server="' . ($key + 1) . '" data-episode-slug="' . $v['haunmovies_ep_slug'] . '" ' . $position . ' data-embed="' . $embed . '">
							<a href="' . $hnwatch . '" title="' . $v['haunmovies_ep_name'] . '">
								' . $activehtml . '
								<span class="haun-btn">' . $v['haunmovies_ep_name'] . '</span>
							</a>
						</li>';
					}
					$result .= '</ul>';
				}
				$result .= '</div>';
			}
			$result .= '</div>';
			$result .= '</div>';
		}
		$result .= '</div>';
		echo $result;
		echo ob_get_clean();
	}
	
	public function hn_listsv($post_id, $server, $episode_slug) {
		$html = '';
		$server = $server ?: 1;
		$hnajax_listsv = apply_filters('haun_disable_alternate_player_with_ajax', false);
		$data = json_decode(stripslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
		$episode_slug = str_replace('-', '_', $episode_slug);
		$dataPlayer = $data[$server - 1]['haunmovies_server_data'][$episode_slug] ?? [];
		$hnlistsv = $dataPlayer['haunmovies_ep_listsv'] ?? [];
		if (!$hnlistsv) return;
		$hn_ep_link = $dataPlayer['haunmovies_ep_link'] ?? '';
		if ($hn_ep_link) do_action('haun_custom_alternative_server', $hn_ep_link);
		$html .= '<div class="haun-ajax-list-server">';
		$html .= '<div id="haun-ajax-list-server" class="hnajax-listsv">';
		$html .= '<span class="listsv-name">' . __('Change Server', 'hnmgepis') . ':</span>';
		foreach ($hnlistsv as $key => $value) {
			$svid = $key + 1;
			$svname = trim($value['haunmovies_ep_listsv_name']);
			if ($hnajax_listsv) {
				$html .= '<a href="?svid=' . $svid . '" rel="nofollow">';
				$html .= '<span id="server-item-' . $svid . '" class="listsv-eps" data-episode-slug="' . $episode_slug . '" data-server="' . $server . '" data-post-id="' . $post_id . '" data-subsv-id="' . $svid . '">' . $svname . '</span>';
				$html .= '</a>';
			} else {
				$html .= '<span id="server-item-' . $svid . '" class="play-listsv listsv-eps" data-episode-slug="' . $episode_slug . '" data-server="' . $server . '" data-post-id="' . $post_id . '" data-subsv-id="' . $svid . '">' . $svname . '</span>';
			}
		}
		$varlist = array_map(function ($key) { return $key + 1; }, array_keys($hnlistsv));
		$html .= '<script>var svlists = [' . implode(',', $varlist) . '];</script>';
		$html .= '</div>';
		$html .= '</div>';
		return $html;
	}

	public function hntype_slug($post_id, $episode, $server ) {
		$urltype 	= hnmg_value('hncore_url_type');
		$meta 	 	= get_post_meta($post_id, HNMG_META, true);
		$release 	= has_term('', 'release') ? get_the_terms($post_id, 'release')[0]->name : '';
		$country 	= has_term('', 'country') ? get_the_terms($post_id, 'country')[0]->name : '';
		$org_title 	= isset($meta['haun_original_title']) ? $meta['haun_original_title'] : '';
		$home_url 	= (strpos($urltype, 'http') === 0) ? '' : home_url();
		$patterns = [
			'{home_url}'   => $home_url,
			'{title}'      => basename(get_permalink($post_id)),
			'{episode}'    => $episode,
			'{server}'     => $server,
			'{org_title}'  => $org_title,
			'{country}'    => $country,
			'{year}'       => $release,
			'{html}'       => '.html'
		];
		$watch = str_replace(array_keys($patterns), array_values($patterns), $urltype);
		return $watch;
	}
	
	public function hnis_type($type, $postid = '') {
		global $post;
		$post_id = $postid != '' ? $postid : $post->ID;
		$meta = get_post_meta($post_id, HNMG_META, true);
		if(isset($meta['haun_movie_formality']) && $meta['haun_movie_formality'] == $type) {
			return true;
		}
		return false;
	}
	
	public function hn_five_epislast($post_id, $number = 5) {
		$html = '';
		$episodename = hnmg_value('haun_episode_name');
		$episode_slug = get_query_var('episode_slug') ? wp_strip_all_tags(get_query_var('episode_slug')) : '';
		$metaPost = get_post_meta($post_id, HNMG_EPS, true);
		$dataPlayer = json_decode(stripslashes($metaPost), true);
		$hidden_servers = get_post_meta($post_id, 'episode_server_hidden', true);
		if ($hidden_servers) {
			foreach ($hidden_servers as $key => $value) {
				unset($dataPlayer[(int)$value]);
			}
			$server = key($dataPlayer);
		} else {
			$server = 0;
		}
		if ($dataPlayer) {
			$wrapper_class = apply_filters('hnfive_epislast_wrapper', 'overflow-hidden mt-2.5 mb-0 mx-0 p-[5px] bg-[#282828]');
			$title_class = apply_filters('hnfive_epislast_title', 'float-left m-2.5 text-[#fdfdfd]');
			$episode_link_class = apply_filters('hnfive_epislast_link', 'float-left text-[#fdfdfd] text-[13px] m-1 p-[7px] rounded bg-[#3a3a3a] hover:bg-orange-500');
			$last_eps = array_slice($dataPlayer[$server]['haunmovies_server_data'], -$number, $number, true);
			$html .= '<div class="' . esc_attr($wrapper_class) . '">';
			$html .= '<span class="' . esc_attr($title_class) . '">' . __('Latest Episode', 'hnmgepis') . ': </span>';
			foreach (array_reverse($last_eps, true) as $key => $value) {
				$name_movies = (strpos($value['haunmovies_ep_name'], $episodename) === false || strpos($value['haunmovies_ep_name'], 'EP') !== false) ? $episodename.' '.$value['haunmovies_ep_name'] : $value['haunmovies_ep_name'];
				$name_movies = $this->hnis_type('tv_series') ? $name_movies : $value['haunmovies_ep_name'];
				$hnwatch = $this->hntype_slug($post_id, $value['haunmovies_ep_slug'], $server + 1);
				$html .= '<a class="' . esc_attr($episode_link_class) . '" href="' . esc_url($hnwatch) . '">' . esc_html($name_movies) . '</a>';
			}
			$html .= '</div>';
		}
		return $html;
	}

	public function hidden_servers($post_id, $server, $data) {
		$hidden_servers = get_post_meta($post_id, 'episode_server_hidden', true);
		if ($hidden_servers) {
			foreach ($hidden_servers as $value) {
				unset($data[(int)$value]);
			}
		}
		if (isset($data[$server - 1])) {
			return $server;
		}
		reset($data);
		return key($data) !== null ? key($data) + 1 : 1;
	}

	public function haun_title($post_id) {
		$country 		= $release = '';
		$post_title 	= get_the_title($post_id);
		$episode_name 	= get_query_var('episode_slug') ? wp_strip_all_tags(get_query_var('episode_slug')) : '';
		$release 		= has_term('', 'release') ? get_the_terms($post_id, 'release')[0]->name : '';
		$country 		= has_term('', 'country') ? get_the_terms($post_id, 'country')[0]->name : '';
		$meta 			= get_post_meta($post_id, HNMG_META, true);
		$quality 		= isset($meta['haun_quality']) ? $meta['haun_quality'] : '';
		$runtime 		= isset($meta['haun_runtime']) ? $meta['haun_runtime'] : '';
		$org_title 		= isset($meta['haun_original_title']) ? $meta['haun_original_title'] : '';
		$titles_option 	= get_query_var('haun_action') ? hnmg_value('haun_title_watch_page') : hnmg_value('haun_title_info_page');
		$haun_titles_template_variables_array = array(
			'{title}', 
			'{episode}', 
			'{quality}', 
			'{release}', 
			'{org_title}', 
			'{runtime}', 
			'{country}'
		);
		$haun_titles_template_replace_array = array(
			$post_title, 
			$episode_name, 
			$quality, 
			$release, 
			$org_title, 
			$runtime, 
			$country
		);
		$haun_titles_title_template = str_replace($haun_titles_template_variables_array, $haun_titles_template_replace_array, $titles_option);
		return apply_filters('haun_seo_title_filter', $haun_titles_title_template);
	}
	
	public function firstlast_link($post_id, $postion = 'first') {
		$data 	= json_decode(stripslashes(get_post_meta($post_id, HNMG_EPS, true)), true);
		$hidden = get_post_meta($post_id, 'episode_server_hidden', true);
		if ($hidden) {
			foreach ($hidden as $key => $value) {
				unset($data[(int) $value]);
			}
			$server = key($data);
		} else {
			$server = 0;
		}
		if ($data) {
			if($postion == 'first'){
				 $episode_slug = $data[$server]['haunmovies_server_data'][key($data[$server]['haunmovies_server_data'])]['haunmovies_ep_slug'];
			}else{
				$episode_slug = $data[$server]['haunmovies_server_data'][array_key_last($data[$server]['haunmovies_server_data'])]['haunmovies_ep_slug'];
			}
			$hnwatch = $this->hntype_slug($post_id, $episode_slug, $server + 1);
			return $hnwatch;
		}
		return '#';
	}
}