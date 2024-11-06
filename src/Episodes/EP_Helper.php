<?php
namespace HNMG\Episodes;

class EP_Helper {
	
	public function selected($query, $key){
		$active = $query == $key ? ' selected' : '';
		return $active;
	}
	
	public function checked_selected_multiple($selected_arr, $current = true, $type = 'selected', $echo = true) {
		if (is_array($selected_arr) && in_array($current, $selected_arr)) {
			if ($echo) {
				echo $type;
			}
			return $type;
		}
		return '';
	}
	
	public function set_post_modified($post_id) {
	    $post = array(
	        'ID' => $post_id,
	        'post_modified_gmt' => date( 'Y:m:d H:i:s' )
	    );
	    wp_update_post( $post );
	}	
	
	public function get_post_format($type) {
        $post_formats = array(
            'movie' => 'aside',
            'movies' => 'aside',
            'single_movies' => 'aside',
            'tv_series' => 'gallery',
            'tv_shows' => 'video',
            'theater_movie' => 'audio'
        );
        $post_format = $type ? $post_formats[$type] : '';
        return $post_format;
    }
	
	public function array_key_last($array){
        if (!is_array($array) || empty($array)) {
            return NULL;
        }
        return array_keys($array)[count($array)-1];
    }
	
	public function hnmg_last_episodes($post_id) {
		$last_episode = '';
		$metaPost = get_post_meta($post_id, HNMG_EPS, true );
		$dataPlayer = json_decode($metaPost, true);
		if($dataPlayer != ''){
			$last_episode = $dataPlayer[0]['haunmovies_server_data'][$this->array_key_last($dataPlayer[0]['haunmovies_server_data'])]['haunmovies_ep_name'];
		}
		return $last_episode;
	}
	
	public function last_episode_by_serverid($post_id, $server) {
		$episode_meta = get_post_meta($post_id, HNMG_EPS, true);
		$data = json_decode(stripslashes($episode_meta));
		if ($data && isset($data->$server)) {
			$server_data = $data->$server->haunmovies_server_data ?? [];
			if (!empty($server_data)) {
				$lastEl = end(array_keys((array) $server_data));
				if (preg_match('/(\d+)/', $lastEl, $lastEp)) {
					return $lastEp[1] ?? false; 
				}
			}
		}
		return false;
	}

	
	public function hnmg_last_episode($post_id, $meta) {
		$last_episode = '';
		$total_episode = isset($meta['haun_total_episode']) ? $meta['haun_total_episode'] : ' <svg class="size-4 inline text-white font-bold" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" /></svg>';
		$metaPost = get_post_meta($post_id, HNMG_EPS, true );
		if (!empty($metaPost)) {
			$dataPlayer = json_decode($metaPost, true);
			if (!empty($dataPlayer)) {
				if (!empty($dataPlayer[0]['haunmovies_server_data'])) {
					$last_key = $this->array_key_last($dataPlayer[0]['haunmovies_server_data']);
					if (isset($dataPlayer[0]['haunmovies_server_data'][$last_key]['haunmovies_ep_name'])) {
						$last_episode = $dataPlayer[0]['haunmovies_server_data'][$last_key]['haunmovies_ep_name'];
					}
				}
			}
		}
		if ($last_episode == 'Full') {
			return '<button class="py-1 px-5 bg-sky-500 text-white text-xs font-semibold rounded-full shadow-blue-500/50 focus:outline-none">Full</button>';
		}
		if(!empty($last_episode) && !empty($total_episode)) {
			return '<button class="py-1 px-5 bg-sky-500 text-white text-xs font-semibold rounded-full shadow-blue-500/50 focus:outline-none">' . $last_episode . '/' . $total_episode . '</button>';
		}
		return $last_episode;
	}

	
	public function list_episode_servers($post_id, $data) {
		if ($data !== NULL) {
			echo '<select class="rounded-full text-xs font-bold px-6 hnserver-to-export" data-post-id="' . $post_id . '">
				<option value="">' . __('Choose A Server', 'hnmgepis') . ' </option>';
				foreach ($data as $key => $value) {
					echo ' <option value=" ' .$key . ' ">' . $value['haunmovies_server_name'] . '</option>';
				}
			echo '</select>';
		}
	}
	
	public function hnshow_formality($data = '') {
		$types = [
			'single_movies' => ['label' => __('Movies', 'hnmgepis'), 'color' => 'bg-red-500'],
			'tv_series' => ['label' => __('TV Series', 'hnmgepis'), 'color' => 'bg-blue-600'],
			'tv_shows' => ['label' => __('TV Shows', 'hnmgepis'), 'color' => 'bg-teal-600'],
			'theater_movie' => ['label' => __('Theater Movie', 'hnmgepis'), 'color' => 'bg-fuchsia-800']
		];
		if ($data != '' && isset($types[$data])) {
			return '<button type="button" class="py-1 px-3 my-0.5 ' . $types[$data]['color'] . ' text-white text-xs font-semibold rounded-full shadow-blue-500/50 focus:outline-none">'  . $types[$data]['label'] . '</button>';
		}
		return '';
	}

	public function hnshow_status($data = '') {
		$statuses = [
			'is_trailer' => ['label' => __('Trailer', 'hnmgepis'), 'color' => 'bg-red-500'],
			'ongoing' => ['label' => __('Ongoing', 'hnmgepis'), 'color' => 'bg-blue-600'],
			'completed' => ['label' => __('Completed', 'hnmgepis'), 'color' => 'bg-teal-600'],
			'moviecoming' => ['label' => __('Movies Coming', 'hnmgepis'), 'color' => 'bg-fuchsia-800']
		];
		if (isset($statuses[$data])) {
			return '<button type="button" class="py-1 px-3 my-0.5 ' . $statuses[$data]['color'] . ' text-white text-xs font-semibold rounded-full shadow-blue-500/50 focus:outline-none">' . $statuses[$data]['label'] .  '</button>';
		}
		return '';
	}


	
	public function getPlayerTypes($type = 'link'){
		$taxonomies = get_terms('episode-types', array('hide_empty' => false));
		$type = apply_filters( 'haun_episode_type', $type );
		?>
			<option value="link" <?php $this->selected($type, 'link' ); ?>>Link</option>
			<option value="mp4" <?php $this->selected($type, 'mp4' ); ?>>MP4 file</option>
			<option value="embed" <?php $this->selected($type, 'embed' ); ?>>Embed</option>
		<?php
		if ( !empty($taxonomies) ) :
			foreach( $taxonomies as $category ) { ?>
				<option value="<?php echo esc_attr( $category->slug ); ?>" <?php $this->selected($type, $category->slug ); ?>><?php echo esc_html( $category->name ); ?></option>
			<?php
			}
		endif;
	}
	
	public function HNPlayerTypesJs($type = 'link') {
		$taxonomies = get_terms('episode-types', array('hide_empty' => false));
		$type = apply_filters('haun_episode_type', $type);

		$types = [
			'link' => 'Link',
			'mp4' => 'MP4 file',
			'embed' => 'Embed'
		];

		if (!empty($taxonomies)) {
			foreach ($taxonomies as $category) {
				$types[$category->slug] = $category->name;
			}
		}

		return $types;
	}

	public function getPlayerTypesJs($type = 'link'){
		$taxonomies = get_terms('episode-types', array('hide_empty' => false));
		$type = apply_filters( 'haun_episode_type', $type );
		$html = '';
		$html .= '<option value="link"'.$this->selected($type, 'link' ).'>Link</option><option value="mp4"'.$this->selected($type, 'mp4' ).'>MP4 file</option><option value="embed"'.$this->selected($type, 'embed' ).'>Embed</option>';
		if ( !empty($taxonomies) ) :

			foreach( $taxonomies as $category ) {
				$html .= '<option value="'.$category->slug.'"'.$this->selected($type, $category->slug).'>'.$category->name.'</option>';
			}
		endif;
		return $html;
	}
	
	public function getPlayerTypesAsText(){
		$taxonomies = get_terms('episode-types', array('hide_empty' => false));
		$html = '';
		if ( !empty($taxonomies) ) :
			foreach( $taxonomies as $category ) {
				$html .= $category->slug.', ';
			}
		endif;
		return $html;
	}

	
	public function hnmg_pagenav($total, $showpost, $paged) {
		$idpage = isset($_GET["post_id"]) ? absint($_GET["post_id"]) : "";
		$server = isset($_GET["server"]) ? absint($_GET["server"]) : "";
		$paged = isset($_GET["paged"]) && $_GET["paged"] ? absint($_GET["paged"]) : "1";
		$total_page = ceil($total / $showpost);
		$max = intval($total_page);
		$hnlink = [];
		if ($paged >= 1) {
			$hnlink[] = $paged;
		}
		if ($paged >= 3) {
			$hnlink[] = $paged - 1;
			$hnlink[] = $paged - 2;
		}
		if ($paged + 2 <= $max) {
			$hnlink[] = $paged + 1;
			$hnlink[] = $paged + 2;
		}

		echo '<nav aria-label="pagination" class="w-full text-center mt-5">';
			echo '<form action="admin.php" method="GET" class="inline-block text-center"><div class="relative w-full md:w-36">';
			echo '<input name="page" type="hidden" value="hnmg-episode"/>';
			echo '<input name="act" type="hidden" value="edit_ep"/>';
			echo '<input name="post_id" type="hidden" value="' . $idpage . '"/>';
			echo '<input name="server" type="hidden" value="' . $server . '"/>';
			echo '<input name="paged" type="number" value="' . $paged . '" class="block pl-5 py-1.5 w-full z-20 text-xs text-gray-900 bg-gray-50 rounded-full border border-slate-300 focus:ring-0 focus:outline-none" required />
					<button type="submit" class="absolute top-0 end-0 px-4 py-1.5 text-xs font-bold h-full text-white bg-sky-500 hover:bg-sky-700 rounded-e-full border border-sky-500 focus:ring-0 focus:outline-none">
						GO
					</button>
				</div>';
			echo '</form>';
			echo '<ul class="flex items-center justify-center gap-2 text-sm font-medium pb-7 pt-4">';
				if ($paged > 1) {
					echo '<li><a href="' . esc_url(get_pagenum_link($paged - 1)) . '" class="flex items-center justify-center rounded-full px-2.5 py-1 bg-teal-700 font-semibold text-white hover:text-rose-500 no-underline">Previous</a></li>';
				}
				if (!in_array(1, $hnlink)) {
					$class = 1 == $paged ? ' bg-black text-white font-bold' : ' bg-teal-700 text-white hover:text-rose-500';
					echo '<li><a href="' . esc_url(get_pagenum_link(1)) . '" class="flex items-center justify-center rounded-full px-2.5 py-1 font-semibold no-underline' . $class . '">1</a></li>';
				}
				sort($hnlink);
				foreach ($hnlink as $link) {
					$class = $paged == $link ? ' bg-black text-white font-bold' : ' bg-teal-700 text-white hover:text-rose-500';
					echo '<li><a href="' . esc_url(get_pagenum_link($link)) . '" class="flex items-center justify-center rounded-full px-2.5 py-1 font-semibold no-underline ' . $class . '">' . $link . '</a></li>';
				}
				if (!in_array($max, $hnlink) && $max > 1) {
					$class = $paged == $max ? ' bg-black text-white font-bold' : ' bg-teal-700 text-white hover:text-rose-500';
					echo '<li><a href="' . esc_url(get_pagenum_link($max)) . '" class="flex items-center justify-center rounded-full px-2.5 py-1 font-semibold no-underline ' . $class . '">' . $max . '</a></li>';
				}

				if ($paged < $max) {
					echo '<li><a href="' . esc_url(get_pagenum_link($paged + 1)) . '" class="flex items-center justify-center rounded-full px-2.5 py-1 font-semibold bg-teal-700 text-white hover:text-rose-500 no-underline">Next</a></li>';
				}
			echo '</ul>';
		echo '</nav>';
		
	}
	
	public function hnimage_display($size = 'movie-thumb') {
		global $post;
		if (!$post) return null;
		$meta_data = $post->post_type === 'video' ? get_post_meta($post->ID, HNMG_VIDEO, true) : get_post_meta($post->ID, HNMG_META, true);
		$thumb = $meta_data['video_thumbnail_url'] ?? $meta_data['haun_thumb_url'] ?? '';
		if (has_post_thumbnail()) {
			$image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), $size)[0] ?? '';
		} else {
			if (!$thumb) {
				ob_start();
				ob_end_clean();

				preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
				$thumb = $matches[1][0] ?? null;
			}
			$image_url = $thumb ?: get_template_directory_uri() . '/assets/images/' . ($post->post_type === 'video' || $post->post_type === 'news' ? 'default.png' : 'default-poster.jpg');
		}

		return esc_url($image_url);
	}
	
	public function hnupdate_views($postID) {
		$views = get_post_meta($postID, '_hnviews', true);
		if (!$views) {
			$views = [
				'hnview_post_all' => 0,
				'hnview_post_day' => 0,
				'hnview_post_week' => 0,
				'hnview_post_mon' => 0,
			];
		}
		$views['hnview_post_all']++;
		$views['hnview_post_day']++;
		$views['hnview_post_week']++;
		$views['hnview_post_mon']++;
		update_post_meta($postID, '_hnviews', $views);
	}

	public function hnshow_views($postid, $type = 'all') {
		$views = get_post_meta($postid, '_hnviews', true);
		if (!$views) {
			$views = [
				'hnview_post_all' => 0,
				'hnview_post_day' => 0,
				'hnview_post_week' => 0,
				'hnview_post_mon' => 0,
			];
			update_post_meta($postid, '_hnviews', $views);
		}
		$count = $views["haun_view_post_{$type}"] ?? $views['hnview_post_all'];
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

	public function hnserver_hide($postid) {
		$postmeta 	= get_post_meta($postid, HNMG_EPS, true);
		$data 		= json_decode(stripslashes($postmeta), true);
		$hidden_servers = get_post_meta($postid, "episode_server_hidden", true);
		echo '<div x-data="{ open: false, saveMessage: \'Save\', postId: ' . $postid . ' }" class="relative">
			<button @click="open = !open" class="text-gray-600 text-xs font-semibold border border-slate-400/10 bg-slate-400/10 rounded-full py-1 px-3">
				' . __('Choose Server Hide', 'hnmgepis') . '
				<svg width="6" height="3" class="ml-2 overflow-visible inline" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
			</button>
			<ul x-show="open" @click.away="open = false" class="absolute left-0 mt-2 bg-white border border-slate-100 w-44 shadow-lg z-10 rounded-lg">
				<li data-divid="episode_server_hidden-' . $postid . '" data-post-id="' . $postid . '" class="save-option cursor-pointer px-4 py-2 hover:bg-gray-100 text-right hover:rounded-t-lg">
					<span class="bg-sky-500 hover:bg-sky-700 px-5 py-1 text-xs leading-5 rounded-full font-semibold text-white" x-text="saveMessage"></span>
				</li>';
		if ($data) {
			foreach ($data as $key => $value) {
				echo '<li id="episode_server_hidden-' . $postid . '" class="px-2 py-1.5 text-left hover:bg-gray-200">
					<input type="checkbox" value="' . $key . '" class="mr-2 mt-0" name="episode_server_hidden[]"';
				if ($hidden_servers) {
					echo in_array($key, $hidden_servers) ? ' checked' : '';
				}
				echo ' />
					' . __('Hide', 'hnmgepis') . ' <strong>' . $value['haunmovies_server_name'] . '</strong>
				</li>';
			}
		}
		echo '</ul>
		</div>';
	}

	public function hnupdate_publish($postid){
		if(get_post_status($postid) !== 'publish'):
			echo '<button class="relative inline-flex cursor-default items-center py-1 px-4 text-xs font-bold text-center text-white rounded-full mb-2 md:mb-0 bg-red-400">
				' .ucwords(get_post_status($postid)). '
				<div class="absolute hnpublish cursor-pointer inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900" data-post-id="'.$postid.'">
					<svg aria-hidden="true" class="loadpublish size-3 text-white fill-blue-600 stroke-[7px]"  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
					</svg>
				</div>
			</button>';
		else: 
			echo '<button class="py-1 px-4 text-xs cursor-default font-bold text-center text-white rounded-full mb-2 md:mb-0 bg-green-600">' .ucwords(get_post_status($postid)). '</button>';
		endif;
	}
	
	public static function compress_htmlcode($codedata) {
		$searchdata = array('/\>[^\S ]+/s','/[^\S ]+\</s','/(\s)+/s');
		$replacedata = array('>','<','\\1');
		$codedata = preg_replace($searchdata, $replacedata, $codedata);
		return $codedata;
	}
}

?>