<?php

namespace HNMG\EP_Core;

class EP_Core {
	public function register() {
		add_action('admin_menu', [$this, 'change_admin_label']);
		add_action('init', [$this, 'haun_movies_label']);
		add_action('admin_footer_text', [$this, 'custom_admin_footer']);
		add_action('wp_after_admin_bar_render', [$this, 'change_admin_bar_label']);
		add_action('admin_footer', [$this, 'force_delete_post_script']);
		add_action('before_delete_post', [$this, 'remove_attachment_with_post'], 10 );
		add_action('save_post', [$this, 'haun_save_post_actions'], 100, 2);
		add_action('save_post', [$this, 'auto_remove_meta']);
		add_filter('gettext_with_context', [$this, 'rename_post_formats'], 10, 4);
		add_action('current_screen', [$this, 'haun_current_screen']);
		add_filter('pre_get_posts', [$this, 'exclude_pages_from_search']);
		add_action('init', [$this, 'remove_extra_image_sizes']);
		add_filter('intermediate_image_sizes_advanced', [$this, 'remove_unwanted_image_sizes'], 10, 2);
		add_action('wp_nav_menu_item_custom_fields', [$this, 'add_custom_menu_fields'], 10, 4);
		add_action('wp_update_nav_menu_item', [$this, 'save_custom_menu_fields'], 10, 2);
	}
	
	public function add_custom_menu_fields($item_id, $item, $depth, $args) {
		$fontAwesomeCssPath = get_template_directory() . '/vendor/hncore/hnmgepis/vendor/fortawesome/font-awesome/css/font-awesome.min.css';
		$iconsList = [];
		if (file_exists($fontAwesomeCssPath)) {
			$cssContent = file_get_contents($fontAwesomeCssPath);
			preg_match_all('/\.fa-([\w\-]+):before/', $cssContent, $matches);
			if (isset($matches[1])) {
				foreach ($matches[1] as $icon) {
					$iconsList["fa fa-$icon"] = ucwords(str_replace('-', ' ', $icon));
				}
			}
		}
		$selectedIcon = get_post_meta($item_id, '_menu_item_icon', true);
		?>
		<p class="description description-wide">
			<label for="edit-menu-item-icon-<?php echo $item_id; ?>">
				<?php _e('Menu Icon (Font Awesome class)', 'hnmgepis'); ?><br>
				<div id="icon-list-<?php echo $item_id; ?>" style="display: grid; grid-template-columns: 1fr; gap: 10px; max-height: 350px; overflow-y: auto; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
					<input type="text" id="icon-search-<?php echo $item_id; ?>" placeholder="Search icon..." style="grid-column: 1 / -1; width: 100%; margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;">
					<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 10px;">
						<?php foreach ($iconsList as $iconClass => $iconLabel): ?>
							<div class="icon-item" data-icon="<?php echo esc_attr($iconClass); ?>" style="display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
								<i class="<?php echo esc_attr($iconClass); ?>" style="font-size: 24px; display: block; margin-bottom: 3px;"></i>
								<span style="font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;"><?php echo esc_html($iconLabel); ?></span>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
				<input type="hidden" id="selected-icon-<?php echo $item_id; ?>" name="menu-item-icon[<?php echo $item_id; ?>]" value="<?php echo esc_attr($selectedIcon); ?>">
			</label>
		</p>
		<script>
			jQuery(document).ready(function($) {
				var itemId = <?php echo json_encode($item_id); ?>;
				$('#icon-list-' + itemId + ' .icon-item').on('click', function() {
					$('#icon-list-' + itemId + ' .icon-item').css('border', '1px solid #ddd');
					$(this).css('border', '2px solid #0073aa');
					var selectedIcon = $(this).data('icon');
					$('#selected-icon-' + itemId).val(selectedIcon);
				});
				$('#icon-search-' + itemId).on('input', function() {
					var searchTerm = $(this).val().toLowerCase();
					$('#icon-list-' + itemId + ' .icon-item').each(function() {
						var label = $(this).text().toLowerCase();
						if (label.indexOf(searchTerm) > -1) {
							$(this).show();
						} else {
							$(this).hide();
						}
					});
				});
			});
		</script>
		<?php
	}

	public function save_custom_menu_fields($menu_id, $menu_item_db_id) {
		if (isset($_POST['menu-item-icon'][$menu_item_db_id])) {
			$icon_value = sanitize_text_field($_POST['menu-item-icon'][$menu_item_db_id]);
			update_post_meta($menu_item_db_id, '_menu_item_icon', $icon_value);
		}
	}

	public function auto_remove_meta($post_id) {
		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
			return;
		}
		if (!current_user_can('edit_post', $post_id)) {
			return;
		}
		$custom_fields = get_post_custom($post_id);
		if (!$custom_fields) {
			return;
		}
		foreach ($custom_fields as $key => $custom_field):
			$values = array_filter($custom_field);
			if (empty($values)):
				delete_post_meta($post_id, $key);
			endif;
		endforeach;
		return;
	}

	public function remove_unwanted_image_sizes($sizes, $metadata = null) {
		$disabled_sizes = array(
			'thumbnail',
			'medium',
			'medium_large',
			'large',
			'shop_thumbnail',
			'shop_catalog',
			'shop_single'
		);
		foreach ($disabled_sizes as $size) {
			if (isset($sizes[$size])) {
				unset($sizes[$size]);
			}
		}
		
		return $sizes;
	}

	public function remove_extra_image_sizes() {
		$allowed_sizes = array('thumbnail', 'medium', 'medium_large', 'large');
		foreach (get_intermediate_image_sizes() as $size) {
			if (!in_array($size, $allowed_sizes)) {
				remove_image_size($size);
			}
		}
	}

	public function exclude_pages_from_search($query) {
		if ( $query->is_main_query() && is_search() ) {
			$query->set('post_type', 'post');
			$query->set('posts_per_page',  20);
		}
		return $query;
	}

	public function haun_current_screen() {
		if ( function_exists('get_current_screen')) {
			$pt = get_current_screen()->post_type;
			if ( $pt != 'post' && $pt != 'news' && $pt != 'video' && $pt != 'page') return;
			remove_meta_box( 'statusdiv', $pt, 'normal' );
			remove_meta_box( 'post_optionsdiv', $pt, 'normal' );
			remove_meta_box( 'tagsdiv-episode-types', $pt, 'normal' );
			remove_meta_box( 'authordiv', $pt, 'normal' );
			remove_meta_box( 'commentstatusdiv', $pt,'normal' );
			remove_meta_box( 'commentsdiv', $pt, 'normal' );
			remove_meta_box( 'postcustom', $pt, 'normal' );
			remove_meta_box( 'postexcerpt', $pt, 'normal' );
			remove_meta_box( 'revisionsdiv', $pt, 'normal' );
			remove_meta_box( 'trackbacksdiv', $pt, 'normal' );
		}
	}

	public function rename_post_formats($translation, $text, $context, $domain) {
		$names = array(
			'Aside'  => __('Movie', 'hnmgepis'),
			'Gallery'  => __('TV Series', 'hnmgepis'),
			'Video'  => __('TV Shows', 'hnmgepis'),
			'Audio'  => __('Theater Movie', 'hnmgepis'),
		);
		if ($context == 'Post format') {
			$translation = str_replace(array_keys($names), array_values($names), $text);
		}
		return $translation;
	}
	
	public function haun_save_post_actions($post_id, $post) {
		if ((defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) || !current_user_can('edit_post', $post_id)) {
			return;
		}
		$options = get_post_meta($post_id, HNMG_META, true);
		if (!empty($options)) {
			if (isset($options['haun_movie_status'])) {
				wp_set_object_terms($post_id, $options['haun_movie_status'], 'status', false);
			}
			if (isset($options['haun_movie_schedule'])) {
				wp_set_object_terms($post_id, $options['haun_movie_schedule'], 'post_haun', false);
			}
			if (isset($options['haun_movie_formality'])) {
				$post_format = $this->get_post_format($options['haun_movie_formality']);
				set_post_format($post_id, $post_format);
			}
		}
		if ('publish' === $post->post_status) {
			$defaults = ['status' => 'ongoing'];
			$taxonomies = get_object_taxonomies($post->post_type);
			foreach ($taxonomies as $taxonomy) {
				$terms = wp_get_post_terms($post_id, $taxonomy);
				if (empty($terms) && array_key_exists($taxonomy, $defaults)) {
					wp_set_object_terms($post_id, $defaults[$taxonomy], $taxonomy);
				}
			}
		}
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
	
	public function haun_movies_label() {
		global $wp_post_types;
		$labels                     = &$wp_post_types['post']->labels;
		$labels->name               = __('List Movies', 'hnmgepis');
		$labels->singular_name      = __('Movies', 'hnmgepis');
		$labels->add_new            = __('Add new', 'hnmgepis');
		$labels->add_new_item       = __('Add new movie', 'hnmgepis');
		$labels->edit_item          = __('Edit', 'hnmgepis');
		$labels->new_item           = __('Movie', 'hnmgepis');
		$labels->view_item          = __('View Post', 'hnmgepis');
		$labels->search_items       = __('Search', 'hnmgepis');
		$labels->not_found          = __('No result', 'hnmgepis');
		$labels->not_found_in_trash = __('No result', 'hnmgepis');
	}
	
	public function change_admin_label() {
		global $menu;
		global $submenu;
		$menu[5][0]                 = __('List Movies', 'hnmgepis');
		$submenu['edit.php'][5][0]  = __('All Movies', 'hnmgepis');
		$submenu['edit.php'][10][0] = __('Add new', 'hnmgepis');
		$submenu['edit.php'][15][0] = __('Category', 'hnmgepis');
		$submenu['edit.php'][16][0] = __('Tags', 'hnmgepis');
	}
	
	public function custom_admin_footer(){
		echo 'Theme Developed By <a href="'.HNMG_SHOP_URL.'" target="_blank">HNCore</a>';
	}
	
	public function change_admin_bar_label() {
		if(is_admin()){
		?>
		<script>
			jQuery(document).ready(function($) {
				$('#wp-admin-bar-new-post > a').text('<?php _e('Add Movie', 'hnmgepis') ?>');
			});
		</script>
		<?php
		}
	}
	
	public function force_delete_post_script() {
		?>
		<script>
		jQuery(function($){
			$('body.post-type-post .row-actions .trash a').on('click', function( event ){
				event.preventDefault();
				var url = new URL( $(this).attr('href') ),
					nonce = url.searchParams.get('_wpnonce'), 
					row = $(this).closest('tr'),
					postID = url.searchParams.get('post'),
					postTitle = row.find('.row-title').text();
				row.css('background-color','#ffafaf').fadeOut(300, function(){
					row.removeAttr('style').html('<td colspan="5">Post <strong>' + postTitle + '</strong> has been deleted.</td>').show();
				});
				$.ajax({
					method:'POST',
					url: ajaxurl,
					data: {
						'action' : 'hnajax_force_delete_post',
						'post_id' : postID,
						'_wpnonce' : nonce
					}
				});

			});
		});
		</script>
		<?php
	}
	
	public function remove_attachment_with_post($post_id){
		if(has_post_thumbnail( $post_id )){
		  $attachment_id = get_post_thumbnail_id( $post_id );
		  wp_delete_attachment($attachment_id, true);
		}
	}
}
