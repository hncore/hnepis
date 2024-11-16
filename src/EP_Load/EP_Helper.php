<?php
namespace HNMG\EP_Load;

class EP_Helper {
	public static function compress_htmlcode($codedata) {
		$searchdata = array('/\>[^\S ]+/s','/[^\S ]+\</s','/(\s)+/s');
		$replacedata = array('>','<','\\1');
		$codedata = preg_replace($searchdata, $replacedata, $codedata);
		return $codedata;
	}
	public static function getDriveId($url) {
		preg_match('/[-\w]{25,}/is', $url, $id);
		return $id[0];
	}
    public static function getDailyMotionId($url) {
        preg_match('/dailymotion\.com\/(.*?)video\/(.*)/is', $url, $matches);
        return $matches[2];
	}
    public static function getVimeoId($url) {
		$regex = '~
			# Match Vimeo link and embed code
			(?:<iframe [^>]*src=")?         # If iframe match up to first quote of src
			(?:                             # Group vimeo url
					https?:\/\/             # Either http or https
					(?:[\w]+\.)*            # Optional subdomains
					vimeo\.com              # Match vimeo.com
					(?:[\/\w]*\/videos?)?   # Optional video sub directory this handles groups links also
					\/                      # Slash before Id
					([0-9]+)                # $1: VIDEO_ID is numeric
					[^\s]*                  # Not a space
			)                               # End group
			"?                              # Match end quote if part of src
			(?:[^>]*></iframe>)?            # Match the end of the iframe
			(?:<p>.*</p>)?                  # Match any title information stuff
			~ix';

		preg_match( $regex, $url, $matches );

		return $matches[1];
	}
    public static function getYoutubeId($url) {
		$regex = '~
		# Match Youtube link and embed code
		(?:				 # Group to match embed codes
		   (?:<iframe [^>]*src=")?	 # If iframe match up to first quote of src
		   |(?:				 # Group to match if older embed
		      (?:<object .*>)?		 # Match opening Object tag
		      (?:<param .*</param>)*     # Match all param tags
		      (?:<embed [^>]*src=")?     # Match embed tag to the first quote of src
		   )?				 # End older embed code group
		)?				 # End embed code groups
		(?:				 # Group youtube url
		   https?:\/\/		         # Either http or https
		   (?:[\w]+\.)*		         # Optional subdomains
		   (?:               	         # Group host alternatives.
		       youtu\.be/      	         # Either youtu.be,
		       | youtube\.com		 # or youtube.com
		       | youtube-nocookie\.com	 # or youtube-nocookie.com
		   )				 # End Host Group
		   (?:\S*[^\w\-\s])?       	 # Extra stuff up to VIDEO_ID
		   ([\w\-]{11})		         # $1: VIDEO_ID is numeric
		   [^\s]*			 # Not a space
		)				 # End group
		"?				 # Match end quote if part of src
		(?:[^>]*>)?			 # Match any extra stuff up to close brace
		(?:				 # Group to match last embed code
		   </iframe>		         # Match the end of the iframe
		   |</embed></object>	         # or Match the end of the older embed
		)?				 # End Group of last bit of embed code
		~ix';

		preg_match( $regex, $url, $matches );

		return $matches[1];
	}
    public static function getVideoThumbnailByUrl($url, $format = 'small'){
		if(strpos($url, 'youtube')){
			$id = EP_Helper::getYoutubeId($url);
	        if ('medium' === $format) {
	            return 'https://img.youtube.com/vi/' . $id . '/hqdefault.jpg';
	        }
	        return 'https://img.youtube.com/vi/' . $id . '/default.jpg';

		}elseif(strpos($url, 'vimeo')){
			$id = EP_Helper::getVimeoId($url);
	        $hash = unserialize(EP_Helper::cURL("http://vimeo.com/api/v2/video/$id.php"));
	        return $hash[0]['thumbnail_large'];

		}elseif(strpos($url, 'dailymotion')){
			$url = str_replace('?autoPlay=1', '/', $url);
			return 'https:'.str_replace('embed', 'thumbnail', $url);
		}
	    return false;
	}
	
    public static function getVideoLocation($url) {
		if(strpos($url, 'youtube')) {
			$id = EP_Helper::getYoutubeId($url);
			return 'https://www.youtube.com/embed/' . $id;
		} elseif(strpos($url, 'vimeo')) {
			$id = EP_Helper::getVimeoId($url);
			return 'https://player.vimeo.com/video/' . $id;
		} elseif(strpos($url, 'dailymotion')) {
			$id = EP_Helper::getDailyMotionId($url);
			return 'https://www.dailymotion.com/embed/video/' . $id;
		}
	    return false;
	}
	public static function cURL($url) {
		$args = array(
			'headers' => array(
				'Connection' => 'keep-alive',
				'Keep-Alive' => '300',
				'Accept-Charset' => 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
				'Accept-Language' => 'en-us,en;q=0.5',
				'User-Agent' => 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
			),
			'timeout' => 30,
			'sslverify' => false,
			'redirection' => 5,
		);
		$response = wp_safe_remote_get($url, $args);
		if (is_wp_error($response)) {
			return ''; 
		}
		return wp_remote_retrieve_body($response);
	}
}

?>