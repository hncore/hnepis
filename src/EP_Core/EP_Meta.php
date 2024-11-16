<?php

namespace HNMG\EP_Core;

class EP_Meta {

    public function __construct(){
        add_action('hnmg_post_metabox', [$this, 'hnmg_post_metabox'] );
        add_action('hnmg_videos_metabox', [$this, 'hnmg_videos_metabox'] );
        add_action('hnmg_news_metabox', [$this, 'hnmg_news_metabox'] );
    }

	public function hnmg_post_metabox($hnmgbox){
		$hnmgbox->add_field(array(
			'id'         => 'haun_movie_formality',
			'type'       => 'radio',
			'name'      => __('Formality', 'hnmgepis'),
			'items'    => array(
				'single_movies' => __('Movies', 'hnmgepis'),
				'tv_series'   	=> __('TV Series', 'hnmgepis'),
				'tv_shows'   	=> __('TV Shows', 'hnmgepis'),
				'theater_movie' => __('Theater Movie', 'hnmgepis')
			),
			'default' => 'single_movies'
		));
		$hnmgbox->add_field(array(
			'id'         => 'haun_movie_status',
			'type'       => 'radio',
			'name'      => __('Status', 'hnmgepis'),
			'items'    => array(
				'is_trailer'  => __('Trailer', 'hnmgepis'),
				'ongoing'     => __('Ongoing', 'hnmgepis'),
				'completed'   => __('Completed', 'hnmgepis'),
			),
			'default'    => 'completed'
		));
		$hnmgbox->add_field(array(
			'id' => 'haun_poster_url',
			'name' => __('Poster image URL', 'hnmgepis'),
			'type' => 'file',
			'options' => array(
				'mime_types' => array( 'jpg', 'jpeg', 'png', 'gif', 'ico' ),
				'preview_size' => array( 'width' => '200px','height' => '100px' ),
				'multiple' => false,
			),
			'desc' => __('Input image url or use Upload button.', 'hnmgepis'),
		));
		$hnmgbox->add_field(array(
			  'id'    => 'save_poster_image',
			  'type'  => 'switcher',
			  'name' => __('Upload Poster image', 'hnmgepis'),
			  'desc' => __('Remote upload the poster image to server', 'hnmgepis'),
		));
		$hnmgbox->add_field(array(
			'id' => 'haun_thumb_url',
			'name' => __('Featured image URL', 'hnmgepis'),
			'type' => 'file',
			'options' => array(
				'mime_types' => array( 'jpg', 'jpeg', 'png', 'gif', 'ico' ),
				'preview_size' => array( 'width' => '238px','height' => '134px' ),
				'multiple' => false,
			),
			'desc' => __('Post thumbnail URL', 'hnmgepis'),
		));
		$hnmgbox->add_field(array(
			  'id'    => 'set_reatured_image',
			  'type'  => 'switcher',
			  'name' => __('Set as featured image', 'hnmgepis'),
			  'desc' => __('Set as featured image and save image to server', 'hnmgepis'),
		));
		$hnmgbox->add_field(array(
			  'id'    => 'save_all_img',
			  'type'  => 'switcher',
			  'name' => __('Auto save images', 'hnmgepis'),
			  'desc'  => __('Auto save images to server', 'hnmgepis'),
		));
		$hnmgbox->add_field(array(
			'id'    => 'is_copyright',
			'type'  => 'switcher',
			'name' => __('Copyright', 'hnmgepis')
		));
		$hnmgbox->add_field(array(
			'id'    => 'is_adult',
			'type'  => 'switcher',
			'name' => __('Adult content (18+)', 'hnmgepis')
		));
		$hnmgbox->add_field(array(
			'id'    => 'haun_original_title',
			'type'  => 'text',
			'name' => __('Original Title', 'hnmgepis'),
			'desc' => __('Original Title', 'hnmgepis'),
		));
		$hnmgbox->add_field(array(
			'id'    => 'haun_trailer_url',
			'type'  => 'text',
			'name' => 'Trailer URL',
			'desc' => 'Trailer URL',
		));
		$hnmgbox->add_field(array(
			'id'    => 'haun_runtime',
			'type'  => 'text',
			'name' => __('Runtime', 'hnmgepis'),
			'desc' => __('Runtime (90 min)', 'hnmgepis'),
			'grid' => '2-of-8',
		));
		$hnmgbox->add_field(array(
			'id'    => 'haun_episode',
			'type'  => 'text',
			'name' => __('Episode', 'hnmgepis'),
			'grid' => '2-of-8',
			'desc' => __('Episode 20, Tập 20', 'hnmgepis'),
		));
		$hnmgbox->add_field(array(
			'name' => __('Total Episode', 'hnmgepis'),
			'id' => 'haun_total_episode',
			'type' => 'number',
			'grid' => '2-of-8',
			'options' => array(
				'unit' => __('Episode', 'hnmgepis')
			),
		));
		$hnmgbox->add_field(array(
			'id'    => 'haun_quality',
			'type'  => 'text',
			'name' => __('Quality', 'hnmgepis'),
			'desc' => 'HD, FULL HD, Vietsub, Thuyet Minh...',
			'grid' => '2-of-8',
		));
		$hnmgbox->add_field( array(
			'id' => 'haun_movie_notice',
			'name' => __('Notification / Note', 'hnmgepis'),
			'type' => 'wp_editor',
			'options' => array(
				'editor_height' => 100,
			),
		));
		$hnmgbox->add_field( array(
			'id' => 'haun_showtime_movies',
			'name' => __('Showtime movies', 'hnmgepis'),
			'type' => 'wp_editor',
			'options' => array(
				'editor_height' => 100,
			),
		));
	}

	public function hnmg_videos_metabox($hnmgbox){
		$hnmgbox->add_field(array(
			'id'       => 'video_type',
			'type'     => 'radio',
			'name'     => __('Type', 'hnmgepis'),
			'items'    => array(
				'video_url'    => __('Video URL', 'hnmgepis'),
				'video_embed'  => __('Embed', 'hnmgepis'),
			),
			'default'  => 'video_url',
		));

		$hnmgbox->add_field(array(
			'id'       => 'haun_video_url',
			'type'     => 'text',
			'name'     => __('Video URL', 'hnmgepis'),
			'desc'     => 'Youtube, Vimeo, Dailymotion URL',
			'options' => array(
				'show_if' => array('video_type', '==', 'video_url')
			),
		));

		$hnmgbox->add_field(array(
			'id'       => 'haun_video_embed_code',
			'type'     => 'text',
			'name'     => __('Embed / iframe', 'hnmgepis'),
			'desc'     => 'Youtube, Vimeo, Dailymotion...',
			'options' => array(
				'show_if' => array('video_type', '==', 'video_embed')
			),
		));

		$hnmgbox->add_field(array(
			'id'    => 'set_as_featured_image',
			'type'  => 'switcher',
			'name' => __('Set as featured image', 'hnmgepis'),
			'default' => 'on'
		));
		$hnmgbox->add_field(array(
			'id' => 'video_thumbnail_url',
			'name' => __('Thumbnail URL', 'hnmgepis'),
			'type' => 'file',
			'options' => array(
				'preview_size' => array( 'width' => '250px', 'height' => 'auto' ),
			),
		));
	}
	
	public function hnmg_news_metabox($hnmgbox){
		$hnmgbox->add_field(array(
			'id'    => 'save_all_img',
			'type'  => 'switcher',
			'name' => __('Auto save images', 'hnmgepis'),
			'desc' => __('Auto save images to server', 'hnmgepis'),
		));
	}
}
