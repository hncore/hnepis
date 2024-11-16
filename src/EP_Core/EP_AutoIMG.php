<?php

namespace HNMG\EP_Core;

class EP_AutoIMG {

    public function __construct(){
        if ($this->is_metabox_options_set()) {
            $this->initialize_hooks();
        }
    }

    private function is_metabox_options_set() {
        return isset($_POST['_haun_metabox_options']) || isset($_POST['_videos_metabox_options']) || isset($_POST['_news_metabox_options']);
    }

    private function initialize_hooks() {
        $meta_options = $_POST['_haun_metabox_options'] ?? '';
        $news_meta = $_POST['_news_metabox_options'] ?? '';
        $video_meta = $_POST['_videos_metabox_options'] ?? '';

        if (!empty($meta_options['save_all_img']) || !empty($news_meta['save_all_img'])) {
            add_filter('content_save_pre', [$this, 'haun_post_save_images']);
        }

        if (!empty($meta_options['save_poster_image']) || !empty($meta_options['set_reatured_image']) || !empty($video_meta['set_as_featured_image'])) {
            add_action('save_post', [$this, 'HNGenerate_Poster_Image']);
        }
    }

    public function HNGenerate_Poster_Image($post_id) {
        global $post;
        
        if ($post->post_type === 'video') {
            $this->process_video_thumbnail($post_id, $_POST['_videos_metabox_options'] ?? '');
        } elseif ($post->post_type === 'post') {
            $this->process_post_thumbnail($post_id);
        }
    }

    private function process_video_thumbnail($post_id, $video_meta) {
        $image_url = $video_meta['video_thumbnail_url'] ?? '';
        $set_feature = $video_meta['set_as_featured_image'] ?? '';

        if ($set_feature && !has_post_thumbnail($post_id)) {
            $this->haun_save_images($image_url, $post_id, $_POST['post_title'] ?? '', true);
        }
    }

    private function process_post_thumbnail($post_id) {
        $meta = get_post_meta($post_id, HNMG_META, true);
        $check_meta = $_POST['_haun_metabox_options'] ?? '';

        $thumb_url = $check_meta['haun_thumb_url'] ?? ($meta['haun_thumb_url'] ?? '');
        $poster_url = $check_meta['haun_poster_url'] ?? ($meta['haun_poster_url'] ?? '');
        $set_feature = $meta['set_reatured_image'] ?? '';
        $save_poster = $meta['save_poster_image'] ?? '';
        
        if ($set_feature && $thumb_url && !has_post_thumbnail($post_id)) {
            $this->haun_save_images($thumb_url, $post_id, $_POST['post_title'] ?? '', true);
        }

        if ($save_poster && $poster_url) {
            $poster_image_url = $this->haun_save_images($poster_url, $post_id, $_POST['post_title'] ?? '');
        } else {
            $poster_image_url = $poster_url;
        }

        $meta['haun_thumb_url'] = get_the_post_thumbnail_url($post_id, 'movie-thumb') ?: $thumb_url;
        $meta['haun_poster_url'] = $poster_image_url;
        $meta['save_poster_image'] = '';
        $meta['set_reatured_image'] = '';
        update_post_meta($post_id, HNMG_META, $meta);
    }

    public function haun_post_save_images($content) {
        if (isset($_POST['save']) || isset($_POST['publish'])) {
            set_time_limit(500);
            $post_id = get_the_ID();
            $post_title = $_POST['post_title'] ?? '';
            preg_match_all('/<img.*?src="(.*?)"/', stripslashes($content), $matches);
            
            foreach ($matches[1] as $image_url) {
                if ($image_url && strpos($image_url, $_SERVER['HTTP_HOST']) === false) {
                    $res = $this->haun_save_images($image_url, $post_id, $post_title);
                    $content = str_replace($image_url, $res['url'], $content);
                }
            }
        }
        remove_filter('content_save_pre', [$this, 'haun_post_save_images']);
        return $content;
    }

    public function haun_save_images($image_url, $post_id, $post_title, $set_thumb = false) {
        $file = file_get_contents($image_url);
        $im_name = sanitize_title($post_title) . "-$post_id.jpg";
        $res = wp_upload_bits($im_name, '', $file);
        
        if (!$res['error']) {
            $this->haun_insert_attachment($res['file'], $post_id, $set_thumb);
        }
        return $res;
    }

    public function haun_insert_attachment($file, $post_id, $set_thumb) {
        $filetype = wp_check_filetype($file);
        $attachment = [
            'guid' => wp_get_upload_dir()['url'] . '/' . _wp_relative_upload_path($file),
            'post_mime_type' => $filetype['type'],
            'post_title' => preg_replace('/\.[^.]+$/', '', basename($file)),
            'post_content' => '',
            'post_status' => 'inherit'
        ];

        $attach_id = wp_insert_attachment($attachment, $file, $post_id);
        wp_update_attachment_metadata($attach_id, wp_generate_attachment_metadata($attach_id, $file));

        if ($set_thumb) {
            set_post_thumbnail($post_id, $attach_id);
        }
        return $attach_id;
    }
}
