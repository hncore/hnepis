<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; use HNMG\EP_Load\EP_GetHost; class EP_Getlink { public function init($url = null) { $this->set_url($url); $this->load_host(); } public function set_url($url) { $this->_url = $url; } public function get_url() { return $this->_url; } public function load_host() { goto pruCa; QmFMc: $host = isset($info["\150\157\x73\164"]) ? $info["\150\157\x73\164"] : "\x64\x65\x66\x61\165\x6c\164"; goto yCw4K; IKLX_: lQ3rL: goto zpvIA; cT8rY: $class_name = "\150\x61\x75\x6e\x5f" . str_replace(array("\55", "\56"), "\137", $host); goto Y62lS; pruCa: if (!isset($this->_url)) { goto Xo7aG; } goto j3vkE; VDVcZ: goto CMqyl; goto IKLX_; JfQAx: $this->host = new EP_GetHost(); goto VDVcZ; DcTSN: Xo7aG: goto fGyIv; Y62lS: $this->host = new $class_name(); goto Qbx0p; yCw4K: $host = str_replace("\x77\167\x77\x2e", '', $host); goto K5J5l; j3vkE: $info = parse_url($this->_url); goto QmFMc; zpvIA: include_once get_template_directory() . "\141\x70\x70\x2f\120\154\x61\x79\x65\x72\57\x68\x61\165\156\x2d" . $host . "\x2e\160\150\x70"; goto cT8rY; Qbx0p: CMqyl: goto DcTSN; K5J5l: if (file_exists(get_template_directory() . "\x61\x70\160\57\x50\154\141\x79\x65\162\x2f\150\141\165\156\x2d" . $host . "\x2e\x70\x68\160")) { goto lQ3rL; } goto JfQAx; fGyIv: } public function get_content($url) { goto b13h2; Uv3qJ: return wp_remote_retrieve_body($response); goto utx_t; ai16C: $response = wp_safe_remote_get($url, $args); goto jkXyT; m9rXM: return ''; goto SSx6g; b13h2: $args = array("\150\x65\x61\144\x65\x72\x73" => array("\x43\157\x6e\x6e\x65\143\x74\x69\x6f\x6e" => "\x6b\x65\145\x70\x2d\141\x6c\x69\x76\145", "\x4b\145\x65\160\x2d\101\x6c\x69\166\x65" => "\x33\x30\60", "\101\143\143\145\160\x74\55\103\x68\141\162\163\x65\x74" => "\x49\123\117\55\x38\70\65\71\x2d\x31\x2c\165\x74\146\55\70\73\x71\75\x30\56\x37\54\x2a\x3b\161\x3d\60\x2e\x37", "\101\x63\143\x65\x70\x74\x2d\x4c\141\x6e\x67\165\141\x67\x65" => "\x65\156\55\165\163\x2c\x65\156\73\161\x3d\x30\56\x35", "\125\x73\x65\162\x2d\101\x67\x65\156\164" => "\115\x6f\172\x69\x6c\x6c\141\57\65\x2e\60\x20\50\127\151\x6e\144\x6f\x77\x73\40\116\124\40\66\x2e\x31\x3b\x20\x57\x4f\x57\66\64\51\40\x41\160\160\x6c\x65\x57\145\142\x4b\x69\x74\x2f\65\63\x37\56\x33\x36\x20\50\113\110\124\x4d\x4c\x2c\40\154\x69\x6b\x65\x20\x47\x65\143\x6b\157\51\40\x43\x68\x72\157\155\145\x2f\x33\67\x2e\60\x2e\x32\60\66\x32\56\61\x32\x34\x20\123\x61\146\x61\x72\151\57\65\x33\x37\x2e\63\x36", "\122\145\146\x65\x72\x65\162" => "\x68\x74\164\x70\x73\x3a\57\57\x67\x6f\157\147\x6c\145\x2e\143\x6f\155"), "\x74\x69\x6d\145\x6f\x75\164" => 60, "\x73\x73\x6c\x76\145\162\x69\x66\171" => false, "\162\145\x64\151\162\x65\x63\164\x69\157\156" => 5); goto ai16C; jkXyT: if (!is_wp_error($response)) { goto dOzus; } goto m9rXM; SSx6g: dOzus: goto Uv3qJ; utx_t: } }
