<?php
namespace HNMG\Episodes;

use HNMG\Episodes\EP_Helper;

class EP_Taxonomy {
	
	public function __construct() {
		$this->load = new EP_Helper(); 
	}
	
	public function register() {
		add_action('init', [$this, 'hntype_taxonomy'], 0);
		add_action('init', [$this, 'hnactors_taxonomy'], 0);
		add_action('init', [$this, 'hndirectors_taxonomy'], 0);
		add_action('init', [$this, 'hnrelease_taxonomy'], 0);
		add_action('init', [$this, 'hncountry_taxonomy'], 0);
	}
	
	public function hntype_taxonomy() {
        $labels = array(
            'name'                       => _x( 'Episode Types', 'Episode type', 'haunthemes' ),
            'singular_name'              => _x( 'Episode Type', 'Episode type', 'haunthemes' ),
            'menu_name'                  => __( 'Episode Types', 'haunthemes' ),
            'all_items'                  => __( 'All Items', 'haunthemes' ),
            'parent_item'                => __( 'Parent Item', 'haunthemes' ),
            'parent_item_colon'          => __( 'Parent Item:', 'haunthemes' ),
            'new_item_name'              => __( 'New Item Name', 'haunthemes' ),
            'add_new_item'               => __( 'Add New Item', 'haunthemes' ),
            'edit_item'                  => __( 'Edit Item', 'haunthemes' ),
            'update_item'                => __( 'Update Item', 'haunthemes' ),
            'view_item'                  => __( 'View Item', 'haunthemes' ),
            'separate_items_with_commas' => __( 'Separate items with commas', 'haunthemes' ),
            'add_or_remove_items'        => __( 'Add or remove items', 'haunthemes' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'haunthemes' ),
            'popular_items'              => __( 'Popular Items', 'haunthemes' ),
            'search_items'               => __( 'Search Items', 'haunthemes' ),
            'not_found'                  => __( 'Not Found', 'haunthemes' ),
            'no_terms'                   => __( 'No items', 'haunthemes' ),
            'items_list'                 => __( 'Items list', 'haunthemes' ),
            'items_list_navigation'      => __( 'Items list navigation', 'haunthemes' ),
        );
        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => false,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => false,
            'show_in_nav_menus'          => false,
            'show_tagcloud'              => false,
            'show_in_rest'               => true,
        );
        register_taxonomy( 'episode-types', array( 'post' ), $args );
    }

	public function hnactors_taxonomy() {
		$args = array(
				'labels'            => array(
					'name'          => __('Actors', 'haunthemes'),
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
					'name'          => __('Directors', 'haunthemes'),
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
					'name'          => __('Release', 'haunthemes'),
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
					'name'          => __('Country', 'haunthemes'),
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
}

?>