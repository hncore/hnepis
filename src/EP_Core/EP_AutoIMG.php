<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Core; class EP_AutoIMG { public function __construct() { goto rC2me; aLMIh: SwH95: goto wJtfT; rC2me: if (!$this->is_metabox_options_set()) { goto SwH95; } goto KOyHe; KOyHe: $this->initialize_hooks(); goto aLMIh; wJtfT: } private function is_metabox_options_set() { return isset($_POST["\x5f\150\141\165\156\137\x6d\145\164\141\142\x6f\170\137\x6f\x70\164\151\x6f\156\x73"]) || isset($_POST["\x5f\x76\151\144\145\157\x73\137\x6d\x65\x74\141\x62\157\x78\137\157\x70\x74\x69\x6f\x6e\x73"]) || isset($_POST["\x5f\x6e\145\167\x73\137\155\x65\x74\x61\x62\x6f\x78\x5f\157\160\164\151\x6f\x6e\163"]); } private function initialize_hooks() { goto x2cLf; UeXby: if (!(!empty($meta_options["\163\141\x76\x65\x5f\141\154\x6c\x5f\151\155\x67"]) || !empty($news_meta["\163\141\166\145\137\x61\x6c\154\x5f\x69\155\x67"]))) { goto KaZgZ; } goto M6nXG; M6nXG: add_filter("\x63\157\x6e\164\x65\x6e\x74\137\x73\141\166\145\x5f\160\x72\x65", [$this, "\150\x61\x75\x6e\137\x70\x6f\x73\164\137\x73\x61\x76\145\137\x69\x6d\141\147\145\163"]); goto EV1Vb; xHHFU: add_action("\x73\x61\166\145\x5f\x70\157\163\164", [$this, "\110\x4e\x47\145\x6e\145\x72\141\164\145\x5f\120\x6f\163\x74\x65\162\x5f\111\155\x61\147\x65"]); goto mQdVx; dnyn0: if (!(!empty($meta_options["\163\141\166\145\137\x70\x6f\163\x74\x65\x72\x5f\x69\x6d\x61\147\x65"]) || !empty($meta_options["\163\145\164\137\x72\145\x61\x74\x75\162\145\x64\x5f\x69\155\x61\147\x65"]) || !empty($video_meta["\x73\x65\x74\x5f\x61\x73\137\x66\145\141\x74\x75\162\x65\144\137\x69\x6d\x61\x67\x65"]))) { goto xsuSf; } goto xHHFU; mQdVx: xsuSf: goto Gt5fJ; tISAi: $video_meta = $_POST["\x5f\166\x69\x64\145\x6f\163\x5f\155\145\x74\141\x62\157\x78\x5f\x6f\x70\164\x69\157\x6e\x73"] ?? ''; goto UeXby; Y28wl: $news_meta = $_POST["\137\x6e\x65\167\163\137\x6d\x65\164\141\142\157\x78\137\x6f\160\164\x69\157\156\163"] ?? ''; goto tISAi; x2cLf: $meta_options = $_POST["\x5f\150\x61\165\156\x5f\x6d\x65\x74\141\x62\x6f\x78\137\157\x70\164\x69\x6f\156\163"] ?? ''; goto Y28wl; EV1Vb: KaZgZ: goto dnyn0; Gt5fJ: } public function HNGenerate_Poster_Image($post_id) { goto FQkOh; hwVfU: $this->process_post_thumbnail($post_id); goto S1TOF; ARSk7: X4pyp: goto hwVfU; cnoVw: if ($post->post_type === "\x76\x69\x64\x65\157") { goto MYYgk; } goto T15SU; FQkOh: global $post; goto cnoVw; mVEMB: MYYgk: goto aWnRs; aWnRs: $this->process_video_thumbnail($post_id, $_POST["\137\166\151\x64\145\157\x73\137\x6d\x65\x74\141\142\x6f\170\137\157\x70\164\151\x6f\x6e\x73"] ?? ''); goto goTzb; T15SU: if ($post->post_type === "\160\x6f\163\x74") { goto X4pyp; } goto xg4th; xg4th: goto Q6sXQ; goto mVEMB; S1TOF: Q6sXQ: goto O0uKa; goTzb: goto Q6sXQ; goto ARSk7; O0uKa: } private function process_video_thumbnail($post_id, $video_meta) { goto gnsFf; GTQnK: $this->haun_save_images($image_url, $post_id, $_POST["\160\x6f\x73\x74\137\164\x69\164\x6c\x65"] ?? '', true); goto EjBJ1; DbP5M: $set_feature = $video_meta["\x73\x65\x74\x5f\x61\163\137\146\x65\141\164\x75\162\145\144\137\x69\155\x61\147\x65"] ?? ''; goto e0w13; gnsFf: $image_url = $video_meta["\166\x69\144\145\x6f\x5f\164\150\165\155\x62\156\x61\x69\x6c\x5f\165\162\x6c"] ?? ''; goto DbP5M; e0w13: if (!($set_feature && !has_post_thumbnail($post_id))) { goto ACPza; } goto GTQnK; EjBJ1: ACPza: goto Uf_jL; Uf_jL: } private function process_post_thumbnail($post_id) { goto T3okc; ynF8i: $this->haun_save_images($thumb_url, $post_id, $_POST["\160\x6f\163\x74\x5f\164\151\164\154\x65"] ?? '', true); goto JGH3y; s4SMs: if (!($set_feature && $thumb_url && !has_post_thumbnail($post_id))) { goto wBb8C; } goto ynF8i; ZE4g_: $check_meta = $_POST["\137\150\x61\x75\156\137\x6d\145\x74\x61\142\x6f\170\x5f\x6f\x70\164\151\157\x6e\x73"] ?? ''; goto WfJoI; WfJoI: $thumb_url = $check_meta["\150\141\165\x6e\x5f\164\x68\165\155\142\137\x75\162\154"] ?? $meta["\x68\x61\165\x6e\137\164\150\x75\155\x62\137\x75\162\x6c"] ?? ''; goto YO9aQ; nB4SY: $meta["\x68\141\165\156\137\x70\157\x73\164\145\162\x5f\x75\162\154"] = $poster_image_url; goto mTs3u; T3okc: $meta = get_post_meta($post_id, HNMG_META, true); goto ZE4g_; EXmCf: ud54v: goto QYDg1; TX5TW: $poster_image_url = $this->haun_save_images($poster_url, $post_id, $_POST["\x70\157\x73\x74\137\164\x69\164\154\145"] ?? ''); goto EXmCf; mTs3u: $meta["\163\141\x76\145\137\160\x6f\x73\164\145\162\x5f\x69\x6d\x61\147\145"] = ''; goto vkKiT; aJhos: $set_feature = $meta["\163\x65\x74\x5f\162\145\x61\164\x75\162\145\144\x5f\151\x6d\141\x67\x65"] ?? ''; goto R2IM8; tduK9: $poster_image_url = $poster_url; goto NMI8Q; FoJH2: update_post_meta($post_id, HNMG_META, $meta); goto utfxr; NMI8Q: goto ud54v; goto eir8i; QYDg1: $meta["\x68\141\165\156\137\164\x68\x75\x6d\142\137\x75\x72\x6c"] = get_the_post_thumbnail_url($post_id, "\155\157\x76\151\145\55\164\x68\x75\155\142") ?: $thumb_url; goto nB4SY; JGH3y: wBb8C: goto uNYnA; vkKiT: $meta["\163\x65\x74\137\162\x65\141\164\x75\162\145\x64\137\x69\155\141\x67\145"] = ''; goto FoJH2; R2IM8: $save_poster = $meta["\163\x61\x76\145\137\x70\x6f\163\x74\x65\x72\137\x69\155\x61\147\x65"] ?? ''; goto s4SMs; uNYnA: if ($save_poster && $poster_url) { goto AiPMN; } goto tduK9; eir8i: AiPMN: goto TX5TW; YO9aQ: $poster_url = $check_meta["\150\x61\165\156\x5f\x70\157\163\x74\145\x72\x5f\x75\162\154"] ?? $meta["\x68\x61\x75\156\x5f\x70\x6f\x73\x74\145\x72\x5f\165\x72\x6c"] ?? ''; goto aJhos; utfxr: } public function haun_post_save_images($content) { goto yUjGO; cK33l: xRusu: goto a347C; e1oBb: foreach ($matches[1] as $image_url) { goto fG0JA; qHNLE: $res = $this->haun_save_images($image_url, $post_id, $post_title); goto JXhtm; l29Yi: aH5y9: goto ixEvI; fmHX6: LHIMl: goto l29Yi; JXhtm: $content = str_replace($image_url, $res["\x75\x72\154"], $content); goto fmHX6; fG0JA: if (!($image_url && strpos($image_url, $_SERVER["\x48\124\124\120\x5f\110\117\x53\x54"]) === false)) { goto LHIMl; } goto qHNLE; ixEvI: } goto cK33l; yUjGO: if (!(isset($_POST["\163\141\x76\145"]) || isset($_POST["\x70\x75\142\154\151\x73\150"]))) { goto c7uPI; } goto Yf9KG; GtDNm: preg_match_all("\57\74\151\x6d\x67\56\52\77\x73\x72\x63\75\x22\50\x2e\52\x3f\x29\42\x2f", stripslashes($content), $matches); goto e1oBb; a347C: c7uPI: goto sYwPt; eX8Wt: $post_id = get_the_ID(); goto Xb0c6; Yf9KG: set_time_limit(500); goto eX8Wt; sYwPt: remove_filter("\x63\x6f\156\164\145\x6e\164\137\163\x61\166\145\x5f\x70\162\145", [$this, "\150\x61\165\x6e\x5f\x70\x6f\163\164\x5f\163\x61\x76\145\137\151\x6d\141\147\145\x73"]); goto ByYPP; Xb0c6: $post_title = $_POST["\x70\157\x73\164\x5f\164\151\x74\x6c\145"] ?? ''; goto GtDNm; ByYPP: return $content; goto Aj8Ii; Aj8Ii: } public function haun_save_images($image_url, $post_id, $post_title, $set_thumb = false) { goto O72gS; EEtqA: U5awU: goto G7o5m; nsEJs: if ($res["\x65\162\162\x6f\x72"]) { goto U5awU; } goto d4q_m; rZhMw: $im_name = sanitize_title($post_title) . "\x2d{$post_id}\56\x6a\160\147"; goto h3sLz; G7o5m: return $res; goto liBDK; h3sLz: $res = wp_upload_bits($im_name, '', $file); goto nsEJs; d4q_m: $this->haun_insert_attachment($res["\146\151\x6c\145"], $post_id, $set_thumb); goto EEtqA; O72gS: $file = file_get_contents($image_url); goto rZhMw; liBDK: } public function haun_insert_attachment($file, $post_id, $set_thumb) { goto wYgzn; EEd2L: pxMvu: goto vv21O; wYgzn: $filetype = wp_check_filetype($file); goto ZO22V; dhCzZ: if (!$set_thumb) { goto pxMvu; } goto vqQBT; vv21O: return $attach_id; goto hGqIy; Q3DBp: $attach_id = wp_insert_attachment($attachment, $file, $post_id); goto Ht7PT; Ht7PT: wp_update_attachment_metadata($attach_id, wp_generate_attachment_metadata($attach_id, $file)); goto dhCzZ; ZO22V: $attachment = ["\x67\x75\151\144" => wp_get_upload_dir()["\x75\x72\154"] . "\x2f" . _wp_relative_upload_path($file), "\x70\157\163\x74\137\155\151\155\145\x5f\x74\171\x70\x65" => $filetype["\164\x79\160\x65"], "\x70\x6f\x73\x74\x5f\164\151\164\154\x65" => preg_replace("\57\134\56\x5b\x5e\56\x5d\53\x24\57", '', basename($file)), "\x70\157\x73\x74\137\x63\x6f\156\164\x65\x6e\x74" => '', "\160\x6f\x73\x74\137\163\x74\x61\164\x75\x73" => "\x69\156\150\145\x72\151\x74"]; goto Q3DBp; vqQBT: set_post_thumbnail($post_id, $attach_id); goto EEd2L; hGqIy: } }
