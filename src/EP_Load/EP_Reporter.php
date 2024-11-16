<?php
namespace HNMG\EP_Load;

class EP_Reporter {
	
	private $dbname = 'hnmovie_report';
	
	public function register() {
		add_action('init', function() {
			if(!hnmg_value('hnbtn_player') || !in_array('report', (array) hnmg_value('hnbtn_player_select'))) return;
			add_action('admin_menu', [$this, 'hnmovie_report_menu']);
			add_filter('wp_head', [$this, 'add_report_metadata']);
			add_action('admin_init', [$this, 'hnreport_createdb']);
			add_action('wp_ajax_haun_report', [$this, 'hnmovie_report_ajax']);
			add_action('wp_ajax_nopriv_haun_report', [$this, 'hnmovie_report_ajax']);
			add_action('wp_ajax_hnreport_ajax_removeall', [$this, 'hnreport_ajax_removeall']);
			add_action('wp_ajax_hnreport_ajax_remove_item', [$this, 'hnreport_ajax_remove_item']);
			add_action('wp_ajax_hnreport_ajax_update_status', [$this, 'hnreport_ajax_update_status']);
		});
	}
	
	public function hnmovie_report_ajax() {
		global $wpdb;
		$data = [
			'seen' => 0,
			'url' => sanitize_text_field($_POST['haun_error_url']),
			'date_time' => current_time('mysql'),
			'post' => absint($_POST['id_post']),
			'episode' => sanitize_text_field($_POST['episode']),
			'server' => absint($_POST['server']) - 1,
			'post_name' => sanitize_text_field($_POST['post_name']),
			'content' => sanitize_text_field($_POST['content']),
			'name' => sanitize_text_field($_POST['name'])
		];
		$wpdb->insert($this->dbname, $data);
		exit;
	}

	public function hnreport_createdb() {
		global $wpdb;
		$table_name = $this->dbname;
		if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
			$charset_collate = $wpdb->get_charset_collate();
			$sql = "CREATE TABLE $table_name (
				id int(11) NOT NULL AUTO_INCREMENT,
				date_time datetime NOT NULL,
				content TEXT DEFAULT NULL,
				post int(11),
				episode int(11),
				server int(11),
				seen int(1),
				name varchar(50),
				url varchar(200),
				post_name varchar(150) DEFAULT NULL,
				PRIMARY KEY (id)
			) $charset_collate;";
			require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
			dbDelta($sql);
		}
		register_setting('haun-report-settings', 'haun_report_issues');
	}

	public function hnmovie_report_menu(){
		global $wpdb;
	    $count = $wpdb->get_var("SELECT COUNT(*) FROM $this->dbname WHERE seen = 0");
	    $menu = __('Broken Movie', 'hnmgepis');
	    if($count > 0) $menu .= '<span class="awaiting-mod count-' . $count . '"><span class="pending-count"> ' . $count . '</span></span>';
	    add_menu_page(__('Broken Movie', 'hnmgepis'), $menu, 'edit_pages', 'haun-movie-report', [$this, 'haun_movie_report_UI'], 'dashicons-warning');
	}
	
	public function hnreport_ajax_update_status() {
		global $wpdb;
		$id = absint($_POST['id']);
		if ($wpdb->get_var("SHOW TABLES LIKE '$this->dbname'") == $this->dbname && $id) {
			$updated = $wpdb->update($this->dbname, ['seen' => 1], ['id' => $id], ['%d'], ['%d']);
			if ($updated !== false) {
				wp_send_json_success(['message' => 'Status updated successfully', 'id' => $id]);
			}
		}
		wp_send_json_error(['message' => 'Failed to update status', 'id' => $id]);
	}

	public function hnreport_ajax_remove_item() {
		global $wpdb;
		$id = absint($_POST['id']);
		if ($wpdb->get_var("SHOW TABLES LIKE '$this->dbname'") == $this->dbname && $id) {
			$deleted = $wpdb->delete($this->dbname, ['id' => $id], ['%d']);
			if ($deleted !== false) {
				wp_send_json_success(['message' => 'Item removed successfully', 'id' => $id]);
			}
		}
		wp_send_json_error(['message' => 'Failed to remove item', 'id' => $id]);
	}

	public function hnreport_ajax_removeall() {
		global $wpdb;
		if ($wpdb->get_var("SHOW TABLES LIKE '$this->dbname'") == $this->dbname) {
			$deleted = $wpdb->query("DELETE FROM $this->dbname");
			if ($deleted !== false) {
				wp_send_json_success(['message' => 'All items removed successfully']);
			}
		}
		wp_send_json_error(['message' => 'Failed to remove all items']);
	}

	public function haun_movie_report_UI(){
		global $wpdb;
	    $page = (int) (isset($_GET['haun_page'])) ? $_GET['haun_page'] : 1;
	    $show = (int) (isset($_GET['haun_show'])) ? $_GET['haun_show'] : 20;
	    $pos = ($page - 1) * $show;
	    $data = $wpdb->get_results("SELECT * FROM $this->dbname ORDER BY id DESC LIMIT $pos, $show;");
	    $count = $wpdb->get_var("SELECT COUNT(*) FROM $this->dbname");
		echo view('HNMG::layouts.reporter', compact('page', 'show', 'data', 'count'));
	}
	
	public function add_report_metadata() {
		$issues = preg_split('/\r\n|[\r\n]/', get_option('haun_report_issues'));
	    foreach ($issues as $key => $val) {
	        $meta[] = $val;
	    }
	    echo '<script>var haunrp_cfg = '.json_encode($meta, JSON_UNESCAPED_UNICODE).'</script>';
	}
	
}

?>