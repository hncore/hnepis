<?php
namespace HNMG\Episodes;

use HNMG\Episodes\EP_Helper;

class EP_Post {
	
	public function __construct() {
		$this->load = new EP_Helper(); 
	}
	
	public function register() {
		add_action('save_post', [$this, 'hnsave_custom_postmeta']);
		add_action('manage_post_posts_columns', [$this, 'hnset_post_columns']);
		add_action('manage_post_posts_custom_column', [$this,'hncolumns_content'], 10, 2);
	}
	
	public function hnset_post_columns($columns) {
        return array(
			'cb' => '<input type="checkbox" />', 
				'hnmovies-title' 	=> __('Title', 'hnmgepis'), 
				'hnmovies_images' 	=> __('Thumbs', 'hnmgepis'), 
				'hnmovies_details' 	=> __('Details', 'hnmgepis'), 
				'categories' 		=> __('Categories', 'hnmgepis'), 
				'taxonomy-actor' 	=> __('Actors', 'hnmgepis'),
				'taxonomy-director' => __('Directors', 'hnmgepis'),
				'taxonomy-' . get_taxonomy('release')->name => __('Release', 'hnmgepis'),
				'taxonomy-' . get_taxonomy('country')->name => __('Country', 'hnmgepis'),
				'tags' => __('Tags', 'hnmgepis'), 
				'hnmovies_updated' => __('Last Update', 'hnmgepis'),
				'hnmovies_action' 	=> __('Episodes', 'hnmgepis'));
    }
	
	public function hncolumns_content($column_name, $post_id) {
        $meta = get_post_meta($post_id, HNMG_META, true);
		
        if ($column_name == 'hnmovies_images') {
            echo '<div class="relative max-w-[150px] text-center  max-h-28 rounded-lg shadow-lg">
					<img src="'. $this->load->hnimage_display('movie-thumb') . '" class="w-full h-full rounded-lg"/>
					<div class="absolute text-[11px] font-bold text-white bg-red-500 px-2 rounded-bl-lg rounded-tr-lg top-0 end-0">
						' . $this->load->hnshow_views($post_id) . ' ' . __('view', 'hnmgepis') . '
					</div>
				</div>
			';
        }
		
        if ($column_name == 'hnmovies_details') {
            $quality 	= !empty($meta['haun_quality']) ? '<button type="button" class="py-1 px-3 my-0.5 bg-rose-800 text-white text-xs font-semibold rounded-full shadow-rose-500/50 focus:outline-none">' . $meta['haun_quality'] . '</button>' : '';
            $episode 	= !empty($meta['haun_episode']) ? '<button type="button" class="py-1 px-3 my-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-amber-500/50 focus:outline-none">' . $meta['haun_episode'] . '</button>' : '';
            $total 		= !empty($meta['haun_total_episode']) ? $meta['haun_total_episode'] : '0';
            $formality 	= !empty($meta['haun_movie_formality']) ? $this->load->hnshow_formality($meta['haun_movie_formality']) : '';
            $check 		= !empty($meta['haun_movie_status']) ? $this->load->hnshow_status($meta['haun_movie_status']) : '';
            echo '<div class="relative flex flex-wrap gap-px">'.$episode . $quality . $formality . $check .'</div>';
        }
		
        if ($column_name == 'hnmovies_updated') {
            echo '<div class="text-center">' . get_the_modified_date(get_option('date_format'), $post_id). '</div>';
        }
		
        if ($column_name == 'hnmovies-title') {
            $org_title = isset($meta['haun_original_title']) && $meta['haun_original_title'] != '' ? '<span class="org_title">(' . $meta["haun_original_title"] . ')</span>' : '';
            echo '<a class="edit-post-link" href="' . get_edit_post_link($post_id) . '">' . get_the_title() . ' </a> ' . $org_title;
        }
		
		if ($column_name == 'hnmovies_action') {
			echo '<a class="editEPS" href="' . admin_url('admin.php?page=hnmg-episode&act=edit_ep&post_id=' . $post_id) . '" target="_blank" class="text-center">
				<button aria-label="create something epic" type="button" class="cursor-pointer inline-flex justify-center items-center aspect-square whitespace-nowrap rounded-full bg-sky-500 p-2 text-xs font-medium tracking-wide text-white transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-sky-500 dark:text-white dark:focus-visible:outline-sky-500">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
						<path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
						<path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
					</svg>
				</button>
			</a>';
		}
    }

	
	public function hnsave_custom_postmeta( $post_id ){
		$currentScreen = get_current_screen();
		if(@$currentScreen->id == 'post'){
			$options = isset($_POST[HNMG_META]) ? $_POST[HNMG_META] : '';
			if(isset($options['haun_movie_status'])) {
				wp_set_object_terms($post_id, $options['haun_movie_status'], 'status', false);
			}
			if(isset($options['haun_add_to_widget'])){
				wp_set_object_terms($post_id, $options['haun_add_to_widget'], 'post_options', false);
			}
			if(isset($options['haun_movie_schedule'])){
				wp_set_object_terms($post_id, $options['haun_movie_schedule'], 'post_haun', false);
			}
			if(isset($options['haun_movie_formality'])){
				$post_format = $this->load->get_post_format($options['haun_movie_formality']);
				set_post_format($post_id, $post_format);
			}
		}
	}

	
}

?>