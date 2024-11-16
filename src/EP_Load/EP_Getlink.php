<?php
namespace HNMG\EP_Load;

use HNMG\EP_Load\EP_GetHost;

class EP_Getlink {
	
	public function init($url = null){
        $this->set_url($url);
        $this->load_host();
    }
	
    public function set_url($url){
        $this->_url = $url;
    }
	
    public function get_url(){
        return $this->_url;
    }

    public function load_host(){
		if(isset($this->_url)){
            $info = parse_url($this->_url);
            $host = isset($info['host']) ? $info['host'] : 'default';
            $host = str_replace('www.', '', $host);
            if(file_exists(get_template_directory() . 'app/Player/haun-' . $host . '.php')){
                include_once get_template_directory() . 'app/Player/haun-' . $host . '.php';
                $class_name =  'haun_' . str_replace(array('-', '.'), '_', $host);
                $this->host = new $class_name;
            } else {
                $this->host = new EP_GetHost();
            }
        }
    }

    public function get_content($url) {
		$args = array(
			'headers' => array(
				'Connection' => 'keep-alive',
				'Keep-Alive' => '300',
				'Accept-Charset' => 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
				'Accept-Language' => 'en-us,en;q=0.5',
				'User-Agent' => 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36',
				'Referer' => 'https://google.com',
			),
			'timeout' => 60,
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