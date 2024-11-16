<?php

namespace HNMG\EP_Load;

use HNMG\EP_Load\EP_Cache;

class EP_MCache {
	
	public function register() {
		add_action('wp_ajax_reset_player_cache', [$this, 'reset_player_cache']);
		add_action('wp_ajax_nopriv_reset_player_cache', [$this, 'reset_player_cache']);
		add_filter('HNMG-tabs', [$this, 'hnapisode_cache_menu']);
        add_filter('HNMG-pages', [$this, 'hnapisode_cache_menu']);
		add_action('wp_ajax_delete_all_cache', [$this, 'delete_all_cache']);
		add_action('wp_ajax_nopriv_delete_all_cache', [$this, 'delete_all_cache']);
	}
	
	public function hnapisode_cache_menu($nav) {
        $nav['120'] = array(
            'slug'     => 'haun-cache-manager',
            'callback' => array($this, 'haun_cache_manage_page'),
            'title'    => __('HNMG Cache', 'hnmgepis'),
            'icon'     => 'fa-play-circle',
        );
        return $nav;
    }
	
	public function haun_cache_manage_page(){ ?>
		<div class="wrap haun-wrap">
			<h1>Cache Manager</h1>
			<div class="haun-cache-box">
				<?php
					$cache = new EP_Cache();
					$cache_count = json_decode($cache->cacheCount());
					if($cache_count->result == 1) echo '<span class="cache-count" style="color: red;">Total cache: '.$cache_count->total_cache.'</span>';
					$get_cache = json_decode($cache->getCache());
					echo '<ul class="list-cache" style="
						max-height: 300px;
						overflow-x: hidden;
						border: 1px solid;
						padding: 15px;
					">';
					if($get_cache) {

						foreach ($get_cache as $key => $value) {
							echo  '<li>'.$value->file.'</li>';
						}
					}
					else
					{
						echo '<li>Cache empty!</li>';
					}
					echo '</ul>';
					?>
				<div id="delete-all-cache" class="button button-primary">Delete all cache</div>
				<div id="result"></div>
				<script>
					jQuery(document).ready(function($){
						jQuery('#delete-all-cache').click(function($){
							var confirmation = confirm("Are you sure you want to remove all cache?");
							if (confirmation) {
								jQuery.ajax({
									type: 'POST',
									url: '<?php echo admin_url('admin-ajax.php'); ?>',
									data: {
										action: 'delete_all_cache'
									},
									success: function(data){
										jQuery('#result').html(data);
										jQuery('.list-cache').html('<li>Cache empty!</li>');
										jQuery('.cache-count').html('Total cache: 0');
									}
								});
							}
						})
					})

				</script>
			</div>
		</div>
		<?php
	}

	public function delete_all_cache() {
		$cache = new EP_Cache();
		$result = json_decode($cache->delAllCache(0), true);
		?>
			<ul class="delete-cache">
				<li><span>Status: </span><?php echo $result['status'] == 1 ? 'Successfuly' : 'Error!'; ?></li>
				<li><span>Total cache: </span><?php echo $result['total_cache']; ?></li>
				<li><span>Cache time: </span><?php echo $result['time_limit']; ?></li>
				<li><span>Cache deleted: </span><?php echo $result['cache_deleted']; ?></li>
			</ul>

		<?php
		wp_die();
	}

	public function reset_player_cache() {
		$server = isset($_POST['server_id']) ? (int)$_POST['server_id'] : '';
		$post_id = isset($_POST['post_id']) ? (int)$_POST['post_id'] : '';
		$episode_slug = isset($_POST['episode_slug']) ? str_replace('-', '_', wp_strip_all_tags($_POST['episode_slug'])) : '';
		$film_meta = get_post_meta($post_id, HNMG_EPS, true);
		$data = json_decode($film_meta, true);
		$link = $data[($server-1)]['haunmovies_server_data'][$episode_slug]['haunmovies_ep_link'];
		$cache = new EP_Cache();
		$cacheData = $cache->delCache($link);
		wp_send_json($cacheData);

	}
}
