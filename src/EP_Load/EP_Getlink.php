<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; use HNMG\EP_Load\EP_GetHost; class EP_Getlink { public function init($url = null) { $this->set_url($url); $this->load_host(); } public function set_url($url) { $this->_url = $url; } public function get_url() { return $this->_url; } public function load_host() { goto otF8m; zKXC0: caCtf: goto TFUK5; iXDkb: $this->host = new $class_name(); goto teZki; otF8m: if (!isset($this->_url)) { goto caCtf; } goto p4lFT; uUtKL: goto T0__h; goto TXfRA; XwtvS: $host = isset($info["\x68\x6f\163\x74"]) ? $info["\150\157\163\164"] : "\x64\145\146\141\x75\x6c\x74"; goto cOpEz; kxSQz: include_once get_template_directory() . "\141\160\160\x2f\x50\x6c\x61\171\145\162\57\x68\141\165\156\x2d" . $host . "\x2e\x70\150\160"; goto GoBs3; Ns82Q: if (file_exists(get_template_directory() . "\x61\x70\160\x2f\120\154\x61\x79\145\162\57\x68\x61\x75\156\55" . $host . "\x2e\x70\x68\160")) { goto uu0ig; } goto aj9Sz; cOpEz: $host = str_replace("\167\167\x77\x2e", '', $host); goto Ns82Q; TXfRA: uu0ig: goto kxSQz; teZki: T0__h: goto zKXC0; p4lFT: $info = parse_url($this->_url); goto XwtvS; GoBs3: $class_name = "\150\x61\165\x6e\x5f" . str_replace(array("\x2d", "\56"), "\137", $host); goto iXDkb; aj9Sz: $this->host = new EP_GetHost(); goto uUtKL; TFUK5: } public function get_content($url) { goto oHYnt; PlEsD: TNjgs: goto rIDha; rIDha: return wp_remote_retrieve_body($response); goto GL1D2; MsNvs: $response = wp_safe_remote_get($url, $args); goto Vd_r9; xx0UP: return ''; goto PlEsD; oHYnt: $args = array("\150\145\x61\x64\x65\162\x73" => array("\103\157\x6e\x6e\x65\x63\164\x69\157\156" => "\x6b\x65\145\x70\55\x61\154\151\166\145", "\113\x65\145\160\55\101\154\151\166\x65" => "\63\x30\x30", "\101\x63\x63\x65\x70\164\55\x43\x68\141\x72\x73\145\x74" => "\x49\123\117\x2d\x38\70\65\x39\x2d\61\54\165\164\146\x2d\x38\73\161\75\60\x2e\x37\54\52\73\161\75\60\56\67", "\101\143\x63\145\x70\x74\55\114\x61\x6e\x67\165\x61\x67\145" => "\145\156\55\165\163\x2c\145\156\73\161\75\60\56\x35", "\x55\x73\x65\x72\x2d\x41\147\x65\x6e\164" => "\115\x6f\x7a\151\x6c\154\141\57\x35\56\x30\40\50\x57\151\156\144\x6f\x77\x73\x20\x4e\x54\40\x36\56\61\x3b\40\x57\117\x57\66\64\51\40\x41\160\160\154\x65\x57\145\x62\113\x69\164\x2f\x35\63\x37\56\63\x36\x20\50\113\x48\x54\115\x4c\54\40\154\x69\x6b\x65\x20\x47\145\143\153\x6f\x29\40\x43\150\162\157\x6d\x65\x2f\x33\67\x2e\x30\x2e\x32\60\66\x32\56\61\62\x34\x20\123\x61\146\x61\x72\x69\57\x35\63\67\56\x33\x36", "\122\x65\x66\145\x72\x65\162" => "\150\x74\164\x70\x73\72\x2f\57\x67\x6f\x6f\147\x6c\145\56\143\157\155"), "\x74\151\x6d\145\x6f\x75\x74" => 60, "\x73\163\x6c\166\145\162\x69\x66\171" => false, "\162\x65\x64\151\162\145\143\164\151\157\x6e" => 5); goto MsNvs; Vd_r9: if (!is_wp_error($response)) { goto TNjgs; } goto xx0UP; GL1D2: } }
