<?php
namespace HNMG\EP_Core;

class EP_Taxonomy {

	public function register() {
		add_action('init', [$this, 'hntype_taxonomy'], 0);
		add_action('init', [$this, 'hnactors_taxonomy'], 0);
		add_action('init', [$this, 'hndirectors_taxonomy'], 0);
		add_action('init', [$this, 'hnrelease_taxonomy'], 0);
		add_action('init', [$this, 'hncountry_taxonomy'], 0);
		add_action('init', [$this, 'custom_post_formats_taxonomies'], 0);
		add_action('init', [$this, 'haun_register_taxonomy_post_options'], 0);
		add_action('init', [$this, 'haun_cusom_wp_insert_term'], 0);
		add_action('init', [$this, 'hnnews_taxonomy'], 0);
		add_action('init', [$this, 'hnnews_posttype'], 0);
		add_action('init', [$this, 'hnnews_tag'], 0);
		add_action('init', [$this, 'hnvideo_posttype'], 1);
		add_action('init', [$this, 'hnvideo_taxonomy'], 1);
		add_action('init', [$this, 'hnvideo_tag'], 1);
	}
	
	public function hntype_taxonomy() {
        $labels = array(
            'name'                       => _x( 'Episode Types', 'Episode type', 'hnmgepis' ),
            'singular_name'              => _x( 'Episode Type', 'Episode type', 'hnmgepis' ),
            'menu_name'                  => __( 'Episode Types', 'hnmgepis' ),
            'all_items'                  => __( 'All Items', 'hnmgepis' ),
            'parent_item'                => __( 'Parent Item', 'hnmgepis' ),
            'parent_item_colon'          => __( 'Parent Item:', 'hnmgepis' ),
            'new_item_name'              => __( 'New Item Name', 'hnmgepis' ),
            'add_new_item'               => __( 'Add New Item', 'hnmgepis' ),
            'edit_item'                  => __( 'Edit Item', 'hnmgepis' ),
            'update_item'                => __( 'Update Item', 'hnmgepis' ),
            'view_item'                  => __( 'View Item', 'hnmgepis' ),
            'separate_items_with_commas' => __( 'Separate items with commas', 'hnmgepis' ),
            'add_or_remove_items'        => __( 'Add or remove items', 'hnmgepis' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'hnmgepis' ),
            'popular_items'              => __( 'Popular Items', 'hnmgepis' ),
            'search_items'               => __( 'Search Items', 'hnmgepis' ),
            'not_found'                  => __( 'Not Found', 'hnmgepis' ),
            'no_terms'                   => __( 'No items', 'hnmgepis' ),
            'items_list'                 => __( 'Items list', 'hnmgepis' ),
            'items_list_navigation'      => __( 'Items list navigation', 'hnmgepis' ),
        );
        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => false,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => false,
            'show_in_nav_menus'          => false,
            'show_tagcloud'              => true,
            'show_in_rest'               => false,
        );
        register_taxonomy( 'episode-types', array( 'post' ), $args );
    }

	public function hnactors_taxonomy() {
		$args = array(
				'labels'            => array(
					'name'          => __('Actors', 'hnmgepis'),
					'singular'      => 'Actors',
					'menu-name'     => 'Actors',
					'all_item'      => 'All actors',
					'add_new_item'  => 'Add new actor',
				),
				'hierarchical'      => false,
				'public'            => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'show_tagcloud'     => true,
				'show_in_nav_menus' => true,
				'show_in_rest'      => true,
			);
		register_taxonomy('actor', 'post', $args);
	}

	public function hndirectors_taxonomy() {
		$args = array(
				'labels' => array(
					'name'          => __('Directors', 'hnmgepis'),
					'singular'      => 'Directors',
					'menu-name'     => 'Directors',
					'all_item'      => 'All Directors',
					'add_new_item'  => 'Add new director',
				),
				'hierarchical'      => false,
				'public'            => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'show_tagcloud'     => true,
				'show_in_rest'      => true,
				'show_in_nav_menus' => true
			);
		register_taxonomy('director', 'post', $args);
	}

	public function hnrelease_taxonomy(){
		$args = array(
				'labels' => array(
					'name'          => __('Release', 'hnmgepis'),
					'singular'      => 'Release',
					'menu-name'     => 'Release',
					'all_item'      => 'View all',
					'add_new_item'  => 'Add new',
				),
				'hierarchical'      => false,
				'public'            => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'show_tagcloud'     => true,
				'show_in_rest'      => true,
				'show_in_nav_menus' => true
			);

		register_taxonomy('release', 'post', $args);
	}
	
	public function hncountry_taxonomy() {
		$args = array(
				'labels' => array(
					'name'          => __('Country', 'hnmgepis'),
					'singular'      => 'Country',
					'menu-name'     => 'Country',
					'all_item'      => 'View all',
					'add_new_item'  => 'Add new country',
				),
				'hierarchical'      => false,
				'public'            => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'show_in_rest'      => true,
				'show_tagcloud'     => true,
				'show_in_nav_menus' => true
			);

		register_taxonomy('country', 'post', $args);
	}

	// news
	public function hnnews_taxonomy() {
        $labels = array(
			'name' => __('News categories', 'hnmgepis'), 
			'singular_name' => __('News category', 'hnmgepis'), 
			'menu_name' => __('News categories', 'hnmgepis'), 
			'all_items' => __('All categories', 'hnmgepis')
		);
        $rewrite = array(
			'slug' => 'news-cat', 
			'with_front' => true, 
			'hierarchical' => true
		);
        $args = array(
			'labels' => $labels, 
			'has_archive' => true, 
			'hierarchical' => true, 
			'public' => true, 
			'show_ui' => true, 
			'show_admin_column' => true, 
			'show_in_nav_menus' => true, 
			'show_tagcloud' => false, 
			'query_var' => 'news-cat', 
			'rewrite' => $rewrite
		);
        register_taxonomy('news_cat', array( 'news' ), $args);
    }

	public function hnnews_posttype() {
        $labels = array(
			'name' => __('News', 'hnmgepis'), 
			'singular_name' => __('News', 'hnmgepis'), 
			'menu_name' => __('News', 'hnmgepis'), 
			'name_admin_bar' => __('Add news', 'hnmgepis')
		);
        $args = array(
			'label' => __('News', 'hnmgepis'), 
			'labels' => $labels, 
			'supports' => array(
				'title', 
				'editor', 
				'thumbnail', 
				'custom-fields'
			), 
			'hierarchical' => false, 
			'public' => true, 
			'show_ui' => true, 
			'show_in_menu' => true, 
			'menu_position' => 5, 
			'show_in_admin_bar' => true, 
			'show_in_nav_menus' => true, 
			'can_export' => true, 
			'has_archive' => true, 
			'exclude_from_search' => true, 
			'publicly_queryable' => true, 
			'capability_type' => 'post', 
			'menu_icon' => 'dashicons-id'
		);
        register_post_type('news', $args);
    }
	
	public function hnnews_tag() {
		$labels = array(
			'name'          => __( 'News tags', 'hnmgepis' ),
			'singular_name' => __( 'News tag', 'hnmgepis' ),
			'menu_name'     => __( 'News tags', 'hnmgepis' ),
		);
		$args = array(
			'labels'            => $labels,
			'hierarchical'      => false,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
			'query_var'         => 'news-tag',
		);
		register_taxonomy( 'news_tag', array( 'news' ), $args );
	}
	// videos
	public function hnvideo_posttype() {
		$labels = array(
			'name'           => __( 'Videos', 'hnmgepis' ),
			'singular_name'  => __( 'Video', 'hnmgepis' ),
			'menu_name'      => __( 'Videos', 'hnmgepis' ),
			'name_admin_bar' => __( 'Add new video', 'hnmgepis' ),
		);
		$args = array(
			'label'               => __( 'Video', 'hnmgepis' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'custom-fields'),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
			'menu_icon'           => 'dashicons-video-alt3',
		);
		register_post_type( 'video', $args );
	}
	
	public function hnvideo_taxonomy() {
		$labels = array(
			'name'          => __( 'Video Categories', 'hnmgepis' ),
			'singular_name' => __( 'Video Category', 'hnmgepis' ),
			'menu_name'     => __( 'Video Categories', 'hnmgepis' ),
			'all_items'     => __( 'All categories', 'hnmgepis' ),
		);
		$rewrite = array(
			'slug'         => 'video-cat',
			'with_front'   => true,
			'hierarchical' => true,
		);
		$args = array(
			'labels'            => $labels,
			'has_archive'       => true,
			'hierarchical'      => true,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => false,
			'query_var'         => 'video-cat',
			'rewrite'           => $rewrite,
		);
		register_taxonomy( 'video_cat', array( 'video' ), $args );
	}
	
	public function hnvideo_tag() {
		$labels = array(
			'name'          => __( 'Video tags', 'hnmgepis' ),
			'singular_name' => __( 'Video tag', 'hnmgepis' ),
			'menu_name'     => __( 'Video tags', 'hnmgepis' ),
		);
		$rewrite = array(
			'slug'         => 'video-tag',
			'with_front'   => true,
			'hierarchical' => true,
		);
		$args = array(
			'labels'            => $labels,
			'hierarchical'      => false,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
			'rewrite'           => $rewrite,
		);
		register_taxonomy( 'video_tag', array( 'video' ), $args );
	}
	
	// Status & Options
	public function custom_post_formats_taxonomies() {
		$labels = array(
			'name'              => _x( 'Status', 'taxonomy general name', 'textdomain' ),
			'singular_name'     => _x( 'Status', 'taxonomy singular name', 'textdomain' ),
			'search_items'      => __( 'Search Status', 'textdomain' ),
			'all_items'         => __( 'All Status', 'textdomain' ),
			'parent_item'       => __( 'Parent Status', 'textdomain' ),
			'parent_item_colon' => __( 'Parent Status:', 'textdomain' ),
			'edit_item'         => __( 'Edit Status', 'textdomain' ),
			'update_item'       => __( 'Update Status', 'textdomain' ),
			'add_new_item'      => __( 'Add New Status', 'textdomain' ),
			'new_item_name'     => __( 'New Status Name', 'textdomain' ),
			'menu_name'         => __( 'Status', 'textdomain' ),
		);
		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'status' ),
			'capabilities' => array(
				'manage_terms' => '',
				'edit_terms' => '',
				'delete_terms' => '',
				'assign_terms' => 'edit_posts'
			),
			'public' => true,
			'show_in_nav_menus' => false,
			'show_tagcloud' => false,
		);
		register_taxonomy( 'status', array( 'post' ), $args );
	}

	public function haun_register_taxonomy_post_options() {
		$labels = array(
			'name' => _x('Post options', 'taxonomy general name', 'textdomain'),
			'singular_name' => _x('Post options', 'taxonomy singular name', 'textdomain'),
			'search_items' => __('Search option', 'textdomain'),
			'all_items' => __('All options', 'textdomain'),
			'parent_item' => __('Parent', 'textdomain'),
			'parent_item_colon' => __('Parent', 'textdomain'),
			'edit_item' => __('Edit', 'textdomain'),
			'update_item' => __('Update', 'textdomain'),
			'add_new_item' => __('Add New', 'textdomain'),
			'new_item_name' => __('New option name', 'textdomain'),
			'menu_name' => __('Options', 'textdomain')
		);
		$args = array(
			'hierarchical' => true, 
			'labels' => $labels, 
			'show_ui' => true, 
			'show_admin_column' => true, 
			'query_var' => true, 
			'rewrite' => array(
				'slug' => 'post_options'
			), 
			'capabilities' => array(
				'manage_terms' => '', 
				'edit_terms' => '', 
				'delete_terms' => '', 
				'assign_terms' => 'edit_posts'
			), 
			'public' => true, 
			'show_in_nav_menus' => false, 
			'show_tagcloud' => false
		);
		register_taxonomy('post_options', array('post'), $args);
	}

	public function haun_cusom_wp_insert_term() {
		if (!term_exists('completed', 'status')) {
			wp_insert_term(
				'Completed', 
				'status', 
				array(
					'description' => 'Completed', 
					'slug' => 'completed'
				)
			);
		}
		if (!term_exists('ongoing', 'status')) {
			wp_insert_term(
				'Ongoing', 
				'status', 
				array(
					'description' => 'Ongoing', 
					'slug' => 'ongoing'
				)
			);
		}
		if (!term_exists('is_trailer', 'status')) {
			wp_insert_term(
				'Trailer', 
				'status', 
				array(
					'description' => 'Trailer', 
					'slug' => 'is_trailer'
				)
			);
		}
		if (!term_exists('is_one_slide', 'post_options')) {
			wp_insert_term(
				'Add to widget "One Slide" (Slider one by one)', 
				'post_options', 
				array(
					'description' => 'Add to widget "One Slide" (Slider one by one)', 
					'slug' => 'is_one_slide'
				)
			);
		}
		if (!term_exists('is_carousel_slide', 'post_options')) {
			wp_insert_term(
				'Add to widget "Carousel Slider"', 
				'post_options', 
				array(
					'description' => 'Add to widget "Carousel Slider"', 
					'slug' => 'is_carousel_slide'
				)
			);
		}
		if (!term_exists('paging_episode', 'post_options')) {
			wp_insert_term(
				'Paging the episode list', 
				'post_options', 
				array(
					'description' => 'Paging the episode list', 
					'slug' => 'paging_episode'
				)
			);
		}
	}

}

?>