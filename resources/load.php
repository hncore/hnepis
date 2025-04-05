<?php

namespace HNCore;

use HNEPIS\EP_Load\EP_Player;

header('Content-type: application/json; charset=utf-8');
header('X-Frame-Options: SAMEORIGIN');

if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/wp-load.php')) {
    include $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
} else {
    include $_SERVER['DOCUMENT_ROOT'] . '/web/wp/wp-load.php';
} 

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
