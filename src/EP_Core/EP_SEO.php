<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Core; class EP_SEO { public function register() { add_action("\141\x64\155\151\156\x5f\151\156\151\x74", [$this, "\x68\141\x75\156\137\141\x75\x74\157\137\x63\157\x6e\146\x69\147\137\x79\157\x61\x73\164\137\x73\x65\x6f"]); add_action("\141\144\155\151\156\137\x69\x6e\x69\164", [$this, "\x68\x61\165\x6e\137\141\165\x74\157\137\143\157\156\146\x69\147\137\162\x61\156\153\137\155\x61\164\x68"]); } public function haun_auto_config_yoast_seo() { goto cLPtl; cLPtl: if (!(!hnmg_value("\141\x75\x74\157\x5f\x63\157\x6e\146\151\147\137\x79\157\141\163\164\x5f\x73\x65\x6f") || !class_exists("\x57\120\123\105\117\x5f\117\x70\164\x69\157\156\163"))) { goto yo3VS; } goto t1vCz; vEbO8: foreach ($custom_taxonomies as $taxonomy) { goto X03_i; X03_i: $taxonomy_key = "\164\151\x74\x6c\145\x2d\164\x61\170\x2d" . $taxonomy; goto i27VL; v4vcp: lV6lc: goto Hs9oE; i27VL: $options[$taxonomy_key] = "\x25\45\x74\145\x72\155\137\x74\151\x74\x6c\145\x25\x25\x20\45\x25\163\145\160\x25\x25\x20\45\x25\x73\151\164\145\x6e\x61\155\x65\x25\45"; goto v4vcp; Hs9oE: } goto vTCdD; Fmdfq: fkWKk: goto L0IXv; YRarK: yo3VS: goto qxOuy; l35of: foreach ($options as $key => $value) { WPSEO_Options::save_option("\167\160\163\x65\157\137\164\x69\x74\154\145\163", $key, $value); sOCd3: } goto Fmdfq; qxOuy: $options = ["\x74\x69\x74\154\145\x2d\160\x6f\163\x74" => "\45\x25\x74\151\x74\154\145\x25\45", "\x74\x69\164\x6c\145\55\x70\x61\x67\145" => "\x25\45\x74\151\164\x6c\145\45\45", "\164\151\164\x6c\145\x2d\x61\x74\x74\141\143\150\155\145\156\x74" => "\x25\45\164\x69\164\x6c\x65\x25\x25", "\x74\151\164\x6c\145\x2d\150\157\x6d\145\x2d\167\160\x73\145\157" => "\x25\45\163\151\x74\145\156\141\155\145\45\45", "\x70\x6f\163\164\x5f\x74\x79\160\x65\x73\x2d\160\x6f\x73\164\55\155\x61\151\x6e\164\141\170" => "\x63\x61\x74\145\147\x6f\x72\171", "\164\x69\x74\x6c\x65\x2d\164\x61\170\55\x70\x6f\x73\x74\137\x74\x61\x67" => "\x25\x25\164\145\x72\x6d\x5f\164\x69\x74\154\145\45\45\40\x25\45\x73\x65\160\45\45\x20\x25\x25\163\x69\164\145\156\x61\x6d\x65\45\45", "\x74\x69\164\154\x65\55\164\x61\170\55\x63\141\164\x65\x67\157\162\171" => "\45\x25\164\x65\x72\155\137\x74\x69\164\154\x65\45\45\40\45\45\x73\x65\x70\45\x25\x20\x25\x25\163\151\x74\145\156\x61\155\145\45\x25", "\x62\x72\145\x61\144\x63\162\165\x6d\142\163\55\x65\156\x61\x62\154\145" => true, "\163\164\162\x69\160\143\x61\x74\x65\x67\157\x72\x79\x62\141\163\x65" => true]; goto zm30M; zm30M: $custom_taxonomies = $this->get_custom_taxonomies(); goto vEbO8; t1vCz: return; goto YRarK; vTCdD: wtfZ1: goto l35of; L0IXv: } public function haun_auto_config_rank_math() { goto b2l9Y; ij3Vt: zWxBK: goto k5yG3; NefCh: $options = ["\164\x69\x74\x6c\145\x73\x2e\x68\x6f\x6d\x65\x70\x61\147\x65\x5f\164\151\164\x6c\145" => "\x25\x25\163\x69\164\145\x6e\141\x6d\x65\45\45", "\x74\151\x74\x6c\145\163\x2e\160\x6f\x73\164\137\164\x69\164\x6c\x65" => "\45\45\x74\x69\164\154\x65\x25\x25", "\x74\x69\164\154\x65\163\56\160\141\147\x65\137\164\151\164\154\x65" => "\x25\45\164\151\164\x6c\x65\45\x25", "\164\x69\164\154\x65\163\56\x61\x74\x74\x61\143\x68\155\x65\156\x74\137\x74\x69\x74\x6c\145" => "\x25\x25\x74\151\x74\x6c\145\45\45", "\164\x69\x74\154\145\x73\x2e\143\141\164\145\x67\x6f\162\171\x5f\x74\151\164\x6c\145" => "\45\45\x74\x65\162\x6d\137\164\x69\x74\x6c\145\x25\45\40\x25\45\163\x65\160\x25\45\x20\45\45\163\151\164\x65\156\141\x6d\x65\x25\45", "\x74\x69\x74\x6c\x65\x73\x2e\164\141\x67\137\164\x69\164\154\x65" => "\x25\45\164\x65\x72\155\137\x74\151\164\x6c\x65\45\45\40\x25\45\x73\x65\160\45\45\x20\x25\x25\x73\151\164\145\156\141\x6d\x65\45\x25", "\x74\x69\x74\x6c\145\163\56\x61\x75\x74\x68\x6f\x72\x5f\164\151\164\154\145" => "\45\45\x6e\x61\x6d\x65\45\x25\x2c\40\x41\x75\164\150\157\x72\x20\x61\164\40\x25\x25\163\151\x74\x65\x6e\141\x6d\145\x25\x25", "\x74\x69\x74\154\145\163\56\x62\x72\x65\x61\x64\x63\x72\165\155\x62\x73\137\x65\x6e\x61\x62\154\x65" => true, "\x74\151\x74\154\x65\163\56\x73\164\x72\x69\x70\x5f\x63\141\164\145\x67\157\162\x79\x5f\142\141\163\145" => true, "\x74\151\164\x6c\x65\x73\56\x6e\157\x69\156\x64\x65\x78\x5f\141\x75\x74\150\157\162\137\x61\162\143\150\x69\x76\x65\x73" => false, "\164\x69\x74\x6c\145\163\x2e\x6e\x6f\151\x6e\144\145\170\137\143\141\x74\145\147\157\162\x79\137\x61\x72\143\150\x69\166\x65\x73" => false, "\x74\151\x74\154\145\x73\x2e\x6e\x6f\x69\156\x64\x65\170\137\164\x61\x67\x5f\141\162\143\x68\x69\166\145\163" => false]; goto Kaf0B; FG5TK: return; goto p6sIp; k5yG3: flush_rewrite_rules(); goto Da8e3; LM1EA: foreach ($options as $key => $value) { RankMath\Helper::update_settings("\147\145\x6e\x65\162\141\x6c", [$key => $value]); Bnuuw: } goto ij3Vt; CSgFN: FVqme: goto LM1EA; Mzv6g: foreach ($custom_taxonomies as $taxonomy) { goto pCBf9; kWKeK: KU9CE: goto uU1uI; pCBf9: $taxonomy_key = "\x74\x69\x74\154\145\163\x2e" . $taxonomy . "\137\x74\151\x74\x6c\x65"; goto IjQBs; IjQBs: $options[$taxonomy_key] = "\x25\45\x74\145\162\155\137\164\x69\164\154\145\45\x25\x20\45\x25\163\145\160\x25\x25\x20\45\x25\163\x69\164\145\156\x61\x6d\x65\45\x25"; goto dWXws; dWXws: $options["\x74\151\x74\x6c\x65\x73\x2e\156\x6f\151\x6e\144\145\170\137\x74\x61\x78\x2d" . $taxonomy] = false; goto kWKeK; uU1uI: } goto CSgFN; Kaf0B: $custom_taxonomies = $this->get_custom_taxonomies(); goto Mzv6g; p6sIp: h_n1U: goto NefCh; b2l9Y: if (!(!hnmg_value("\x61\165\x74\x6f\137\143\x6f\156\x66\151\147\x5f\162\x61\x6e\x6b\137\155\141\x74\x68") || !class_exists("\x52\141\x6e\x6b\x4d\x61\x74\150\134\110\x65\x6c\x70\145\162"))) { goto h_n1U; } goto FG5TK; Da8e3: } private function get_custom_taxonomies() { $custom_taxonomies = ["\x61\143\x74\x6f\x72", "\144\151\x72\145\143\164\x6f\x72", "\162\145\x6c\x65\141\163\x65", "\x63\157\165\x6e\x74\162\171", "\x6e\145\x77\x73\x5f\143\x61\164", "\156\x65\x77\x73\x5f\x74\x61\147", "\166\151\x64\145\x6f\137\x63\x61\164", "\x76\151\144\145\x6f\137\x74\141\x67"]; return $custom_taxonomies; } }
