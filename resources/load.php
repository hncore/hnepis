<?php

namespace HNCore;

use HNMG\EP_Load\EP_Player;

header('Content-type: application/json; charset=utf-8');
header('X-Frame-Options: SAMEORIGIN');

define('WP_LOAD_PATH', file_exists(__DIR__ . '/../../../../../../../wp/wp-load.php') ? __DIR__ . '/../../../../../../../wp/wp-load.php' : __DIR__ . '/../../../../../../../wp-load.php');
require_once WP_LOAD_PATH;

$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
if ($isAjax) {
    $episode_slug = isset($_POST['episode_slug']) ? sanitize_text_field(str_replace('-', '_', $_POST['episode_slug'])) : '';
    $post_id = isset($_POST['post_id']) ? absint($_POST['post_id']) : 0;
    $server = isset($_POST['server_id']) ? absint($_POST['server_id']) : 0;
    $subsv_id = isset($_POST['subsv_id']) ? absint($_POST['subsv_id']) : 0;
    $custom_var = isset($_POST['custom_var']) ? sanitize_text_field($_POST['custom_var']) : '';
    if ($post_id) {
        $player = new EP_Player();
        $player->haunPlayer($post_id, $episode_slug, $server, $subsv_id, $custom_var);
    } else {
        echo json_encode([
            'status' => false,
            'code' => 403
        ]);
    }
} else {
    header("HTTP/1.1 404 Not Found");
}
