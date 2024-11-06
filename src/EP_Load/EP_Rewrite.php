<?php 
namespace HNMG\EP_Load;

class EP_Rewrite {

    public function __construct() {
        add_action('init', [$this, 'add_custom_rewrite_rules']);
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
		add_rewrite_rule('^jwplayer/translations/vi\.json$', "$urlpath/jwplayer/translations/vi.json", 'top');
		add_rewrite_rule('^jwplayer/jwplayer\.core\.controls\.js$', "$urlpath/jwplayer/jwplayer.core.controls.js", 'top');
		add_rewrite_rule('^jwplayer/jwplayer\.core\.controls\.html5\.js$', "$urlpath/jwplayer/jwplayer.core.controls.html5.js", 'top');
		add_rewrite_rule('^fonts/fontawesome-webfont\.(woff2?|ttf|svg|eot)(\?.*)?$', "$urlfont/fonts/fontawesome-webfont.$1$2",'top');
		flush_rewrite_rules();
	}

}
