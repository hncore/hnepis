<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; use HNMG\EP_Load\EP_GetHost; class EP_Getlink { public function init($url = null) { $this->set_url($url); $this->load_host(); } public function set_url($url) { $this->_url = $url; } public function get_url() { return $this->_url; } public function load_host() { goto jdirb; BAV3p: goto hdeQG; goto Tu53t; n5v3A: $host = isset($info["\x68\157\x73\164"]) ? $info["\150\x6f\163\164"] : "\144\x65\146\141\165\154\x74"; goto zG1V_; iisiS: cuLdf: goto QQnp_; WmJIt: $class_name = "\x68\141\165\156\137" . str_replace(array("\x2d", "\56"), "\137", $host); goto YSPvp; s5hvN: hdeQG: goto iisiS; BO8zB: $this->host = new EP_GetHost(); goto BAV3p; mmSdA: if (file_exists(get_template_directory() . "\141\x70\x70\57\x50\x6c\141\171\x65\x72\x2f\x68\x61\x75\x6e\55" . $host . "\56\x70\150\160")) { goto xZeKY; } goto BO8zB; gJcK3: include_once get_template_directory() . "\141\160\160\57\x50\154\x61\171\145\x72\x2f\150\141\x75\156\x2d" . $host . "\56\x70\150\160"; goto WmJIt; krYfT: $info = parse_url($this->_url); goto n5v3A; YSPvp: $this->host = new $class_name(); goto s5hvN; Tu53t: xZeKY: goto gJcK3; jdirb: if (!isset($this->_url)) { goto cuLdf; } goto krYfT; zG1V_: $host = str_replace("\167\x77\x77\x2e", '', $host); goto mmSdA; QQnp_: } public function get_content($url) { goto Xfa6V; bK8ye: return wp_remote_retrieve_body($response); goto RUdlQ; HoQVu: IRhPw: goto bK8ye; Xfa6V: $args = array("\150\145\141\144\145\x72\163" => array("\103\157\156\156\x65\x63\164\x69\x6f\x6e" => "\153\145\145\160\x2d\x61\154\151\x76\x65", "\x4b\x65\145\x70\55\x41\x6c\151\166\x65" => "\63\x30\x30", "\101\x63\143\x65\x70\x74\55\103\150\x61\162\163\x65\x74" => "\111\123\x4f\x2d\x38\70\65\x39\x2d\61\x2c\x75\164\x66\55\70\73\161\x3d\x30\x2e\67\x2c\52\73\161\x3d\x30\56\67", "\x41\143\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\147\x65" => "\145\x6e\x2d\x75\163\54\145\x6e\73\x71\x3d\x30\x2e\x35", "\x55\x73\x65\x72\55\x41\147\x65\156\164" => "\115\157\172\151\154\x6c\141\57\65\x2e\60\40\50\x57\151\x6e\x64\x6f\x77\163\x20\116\124\40\66\56\x31\x3b\40\127\117\127\66\x34\51\x20\x41\x70\160\x6c\x65\x57\145\142\x4b\x69\164\x2f\65\63\x37\x2e\x33\66\x20\50\x4b\110\x54\x4d\114\54\40\x6c\x69\153\145\x20\x47\x65\143\x6b\x6f\51\x20\103\x68\x72\x6f\155\145\x2f\63\x37\x2e\x30\56\x32\x30\x36\x32\56\x31\62\x34\x20\123\141\146\141\x72\151\x2f\65\x33\x37\x2e\63\x36", "\122\x65\x66\x65\162\145\162" => "\150\164\164\160\x73\x3a\57\x2f\x67\157\x6f\147\x6c\x65\56\x63\x6f\155"), "\x74\x69\x6d\145\x6f\x75\164" => 60, "\x73\163\x6c\166\145\x72\x69\146\171" => false, "\162\x65\x64\151\x72\145\x63\164\151\157\156" => 5); goto AOhkJ; AOhkJ: $response = wp_safe_remote_get($url, $args); goto o0I8O; Ewt7O: return ''; goto HoQVu; o0I8O: if (!is_wp_error($response)) { goto IRhPw; } goto Ewt7O; RUdlQ: } }
