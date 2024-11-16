<?php 
namespace HNMG\EP_Load;

class EP_Rewrite {

    public function register() {
        add_action('init', [$this, 'add_custom_rewrite_rules']);
		add_action('init', [$this, 'hn_rewrite_rule'], 10, 0);
		add_filter('query_vars', [$this, 'hn_register_query_vars']);
		//add_action('after_setup_theme', [$this, 'haun_remove_categories_prefix']);
    }
	
	public function hn_rewrite_rule(){
		if (is_plugin_active('hncore/hncore.php')) {
			$urltype 	= hnmg_value('hncore_url_type');
			$filter 	= hnmg_value('haun_filter_select');
			$patterns = [
				'{home_url}' 	=> '', 
				'{title}' 		=> '([^/]*)',
				'{episode}' 	=> '([^/]*)',
				'{server}' 		=> '([0-9]+)',
				'{org_title}' 	=> '([^/]*)',
				'{country}' 	=> '([^/]*)',
				'{year}' 		=> '([0-9]{4})',
				'{html}' 		=> '.html?'
			];
			$watchPattern 	= str_replace(array_keys($patterns), array_values($patterns), $urltype);
			$watch 			= (substr($watchPattern, 0, 1) === '/') ? ltrim($watchPattern, '/') : $watchPattern;
			add_rewrite_rule('^' . $watch . '$', 'index.php?name=$matches[1]&episode_slug=$matches[2]&haun_server=$matches[3]&haun_action=watch','top');
			
			add_rewrite_rule('^code/([^/]*)/?', 'index.php?pagename=haun-code&haun_code=$matches[1]', 'top');
			add_rewrite_rule('^az-list/([^/]*)?','index.php?pagename=az-list&letter=$matches[1]','top');
			add_rewrite_rule('^az-list/([^/]*)/([^/]*)/([^/]*)?','index.php?pagename=az-list&letter=$matches[1]&page=$matches[2]&page1=$matches[3]','top');
			
			$path_pattern = '^filter-movies/' . str_repeat('([^/]*)/', count($filter));
			$query_string = 'index.php?pagename=filter-movies';
			foreach ($filter as $index => $param) {
				$query_string .= "&$param=\$matches[" . ($index + 1) . "]";
			}
			$path_pattern_with_pagination = $path_pattern . '([^/]*)/([^/]*)/?';
			$with_pagination = $query_string . '&page=$matches[' . (count($filter) + 1) . ']&page1=$matches[' . (count($filter) + 2) . ']';
			add_rewrite_rule(rtrim($path_pattern_with_pagination, '/?') . '/?$', $with_pagination, 'top');
			add_rewrite_rule(rtrim($path_pattern, '/?') . '/?$', $query_string, 'top');
			
			add_rewrite_rule('^filter-movies/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/?','index.php?pagename=filter-movies&sort=$matches[1]&formality=$matches[2]&status=$matches[3]&country=$matches[4]&release=$matches[5]&category=$matches[6]&page=$matches[7]&page1=$matches[8]','top');
			add_rewrite_rule('^filter-movies/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/?','index.php?pagename=filter-movies&sort=$matches[1]&formality=$matches[2]&status=$matches[3]&country=$matches[4]&release=$matches[5]&category=$matches[6]','top');
			flush_rewrite_rules();
		}
	}

	public function hn_register_query_vars( $vars ) {
		$new_vars = [
			'haun_action', 'haun_info', 'haun_server', 'episode_slug', 'haun_episode',
			'formality', 'status', 'country', 'release', 'category', 'page', 'page1', 
			'letter', 'haun_code', 'filter_page', 'sort', 'type', 'year', 'genre', 'keyword', 'paged'
		];
		return array_merge($vars, $new_vars);
	}
	
	public function add_custom_rewrite_rules() {
		$base_path 		= strpos(get_template_directory(), 'app/themes') !== false ? 'app/themes' : 'wp-content/themes';
		$urlpath		= $base_path . '/' . get_template() . '/vendor/hncore/hnmgepis/resources/assets';
		$urlfont		= $base_path . '/' . get_template() . '/vendor/hncore/hnmgepis/vendor/fortawesome/font-awesome';
		add_rewrite_rule('^hnmgplayer\.css$', "$urlpath/css/hnmgplayer.css", 'top');
		add_rewrite_rule('^hnmgplayer\.js$', "$urlpath/js/hnmgplayer.js", 'top');
		add_rewrite_rule('^jwplayer/vast\.js$', "$urlpath/jwplayer/vast.js", 'top');
		add_rewrite_rule('^jwplayer/jwpsrv\.js$', "$urlpath/jwplayer/jwpsrv.js", 'top');
		add_rewrite_rule('^font-awesome\.min\.css$', "$urlfont/css/font-awesome.min.css", 'top');
		add_rewrite_rule('^jwplayer/provider\.hlsjs\.js$', "$urlpath/jwplayer/provider.hlsjs.js", 'top');
		add_rewrite_rule('^jwplayer/provider\.html5\.js$', "$urlpath/jwplayer/provider.html5.js", 'top');
		add_rewrite_rule('^jwplayer/translations/vi\.json$', "$urlpath/jwplayer/translations/vi.json", 'top');
		add_rewrite_rule('^jwplayer/jwplayer\.core\.controls\.js$', "$urlpath/jwplayer/jwplayer.core.controls.js", 'top');
		add_rewrite_rule('^jwplayer/jwplayer\.core\.controls\.html5\.js$', "$urlpath/jwplayer/jwplayer.core.controls.html5.js", 'top');
		add_rewrite_rule('^fonts/fontawesome-webfont\.(woff2?|ttf|svg|eot)(\?.*)?$', "$urlfont/fonts/fontawesome-webfont.$1$2",'top');
		flush_rewrite_rules();
	}

}
