<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Core; class EP_AutoIMG { public function __construct() { goto qSPrf; A2jDO: $this->initialize_hooks(); goto ISLgt; ISLgt: R2Ish: goto IcuYJ; qSPrf: if (!$this->is_metabox_options_set()) { goto R2Ish; } goto A2jDO; IcuYJ: } private function is_metabox_options_set() { return isset($_POST["\137\150\x61\x75\x6e\137\x6d\145\164\x61\142\157\170\x5f\x6f\160\164\151\x6f\x6e\x73"]) || isset($_POST["\x5f\166\x69\144\x65\157\x73\137\x6d\x65\164\x61\142\x6f\170\x5f\157\160\164\x69\x6f\156\x73"]) || isset($_POST["\x5f\156\145\x77\163\137\x6d\145\x74\141\142\157\x78\137\x6f\160\x74\151\157\x6e\163"]); } private function initialize_hooks() { goto aQk0j; S1pch: if (!(!empty($meta_options["\163\141\166\x65\x5f\x61\154\x6c\x5f\151\155\147"]) || !empty($news_meta["\163\x61\x76\145\137\x61\154\x6c\x5f\x69\155\x67"]))) { goto Qh3u5; } goto vCHM_; SYmiE: if (!(!empty($meta_options["\163\x61\166\145\x5f\x70\x6f\163\164\145\162\137\x69\x6d\x61\147\145"]) || !empty($meta_options["\163\145\164\137\162\x65\x61\x74\165\x72\145\144\x5f\x69\155\x61\147\x65"]) || !empty($video_meta["\x73\x65\164\137\x61\x73\x5f\x66\145\x61\164\165\x72\145\x64\x5f\x69\x6d\x61\147\145"]))) { goto tx3yt; } goto ITM0r; vCHM_: add_filter("\x63\157\x6e\164\x65\156\x74\x5f\x73\x61\166\x65\137\x70\162\x65", [$this, "\150\141\165\x6e\x5f\160\x6f\x73\164\x5f\163\x61\x76\145\x5f\x69\155\x61\147\x65\163"]); goto c0JKH; aQk0j: $meta_options = $_POST["\137\150\141\x75\156\137\155\145\164\x61\x62\157\170\x5f\157\x70\x74\x69\157\156\x73"] ?? ''; goto SstdZ; aopVg: tx3yt: goto UfV6v; ITM0r: add_action("\163\x61\x76\145\137\x70\x6f\x73\164", [$this, "\x48\x4e\x47\145\x6e\x65\162\141\164\x65\137\120\x6f\x73\x74\x65\x72\137\111\155\x61\147\x65"]); goto aopVg; SstdZ: $news_meta = $_POST["\x5f\156\145\167\163\137\155\145\164\x61\x62\x6f\170\137\157\160\x74\x69\157\156\163"] ?? ''; goto WvKtI; c0JKH: Qh3u5: goto SYmiE; WvKtI: $video_meta = $_POST["\x5f\166\x69\x64\x65\157\163\137\155\x65\x74\141\142\x6f\170\137\157\x70\164\x69\157\x6e\x73"] ?? ''; goto S1pch; UfV6v: } public function HNGenerate_Poster_Image($post_id) { goto HgYTc; dRZOh: $this->process_post_thumbnail($post_id); goto Vv5RG; eN_z6: l5XDa: goto dRZOh; XUj3g: goto liw04; goto eN_z6; Vv5RG: liw04: goto wT93x; HgYTc: global $post; goto rTYDd; R1r9B: if ($post->post_type === "\x70\x6f\163\x74") { goto l5XDa; } goto vQCis; L_eY7: l3OyM: goto SCHgu; SCHgu: $this->process_video_thumbnail($post_id, $_POST["\137\166\x69\x64\x65\x6f\x73\137\155\145\x74\x61\142\x6f\170\x5f\157\160\x74\x69\157\x6e\x73"] ?? ''); goto XUj3g; vQCis: goto liw04; goto L_eY7; rTYDd: if ($post->post_type === "\x76\x69\x64\145\157") { goto l3OyM; } goto R1r9B; wT93x: } private function process_video_thumbnail($post_id, $video_meta) { goto v0itB; jBgzj: lOScy: goto s0Gbi; wU6Oy: $set_feature = $video_meta["\163\x65\164\137\x61\x73\x5f\146\145\x61\164\165\x72\x65\144\137\x69\x6d\141\147\x65"] ?? ''; goto NGDzx; NGDzx: if (!($set_feature && !has_post_thumbnail($post_id))) { goto lOScy; } goto vZTm9; v0itB: $image_url = $video_meta["\x76\151\144\145\157\137\164\x68\x75\x6d\x62\x6e\x61\x69\154\137\x75\x72\154"] ?? ''; goto wU6Oy; vZTm9: $this->haun_save_images($image_url, $post_id, $_POST["\x70\x6f\x73\x74\137\x74\151\164\154\x65"] ?? '', true); goto jBgzj; s0Gbi: } private function process_post_thumbnail($post_id) { goto L4xcw; v08sJ: $meta["\x68\141\x75\x6e\137\x74\x68\165\155\x62\137\165\162\x6c"] = get_the_post_thumbnail_url($post_id, "\155\157\166\x69\145\55\164\x68\x75\155\142") ?: $thumb_url; goto dklg_; dklg_: $meta["\150\141\165\x6e\x5f\160\x6f\163\164\145\x72\x5f\165\x72\154"] = $poster_image_url; goto yNWJ2; ITi2F: $check_meta = $_POST["\x5f\x68\x61\x75\156\137\155\145\x74\x61\x62\157\x78\137\x6f\x70\164\151\x6f\x6e\x73"] ?? ''; goto ylqQH; NrQO6: aDXoX: goto v08sJ; GQrP_: $poster_url = $check_meta["\x68\141\165\156\x5f\x70\x6f\163\x74\x65\x72\137\165\x72\154"] ?? $meta["\x68\141\165\x6e\x5f\160\x6f\x73\164\x65\162\137\x75\x72\x6c"] ?? ''; goto CfBQe; xchM9: MdiVP: goto A8MHv; qxzID: $meta["\x73\x65\x74\x5f\162\145\141\x74\165\162\x65\x64\137\151\155\141\147\145"] = ''; goto rC1uD; byAom: $poster_image_url = $this->haun_save_images($poster_url, $post_id, $_POST["\x70\x6f\x73\x74\x5f\164\151\164\x6c\x65"] ?? ''); goto NrQO6; gbUPC: $this->haun_save_images($thumb_url, $post_id, $_POST["\160\157\x73\x74\137\164\151\164\x6c\x65"] ?? '', true); goto xchM9; A8MHv: if ($save_poster && $poster_url) { goto pxaWm; } goto KeRUg; QLZgd: goto aDXoX; goto FIGah; ylqQH: $thumb_url = $check_meta["\150\x61\x75\156\137\x74\x68\165\155\142\x5f\x75\162\x6c"] ?? $meta["\150\x61\165\156\x5f\164\150\165\155\142\x5f\165\x72\x6c"] ?? ''; goto GQrP_; rC1uD: update_post_meta($post_id, HNMG_META, $meta); goto sq6hq; yLjUT: $save_poster = $meta["\x73\x61\166\145\137\160\x6f\163\x74\145\162\137\151\x6d\x61\147\x65"] ?? ''; goto vB9nu; FIGah: pxaWm: goto byAom; KeRUg: $poster_image_url = $poster_url; goto QLZgd; L4xcw: $meta = get_post_meta($post_id, HNMG_META, true); goto ITi2F; CfBQe: $set_feature = $meta["\163\145\x74\x5f\x72\145\141\x74\165\x72\x65\144\137\x69\x6d\x61\x67\x65"] ?? ''; goto yLjUT; vB9nu: if (!($set_feature && $thumb_url && !has_post_thumbnail($post_id))) { goto MdiVP; } goto gbUPC; yNWJ2: $meta["\x73\x61\166\x65\137\160\157\163\164\145\x72\137\151\x6d\141\147\145"] = ''; goto qxzID; sq6hq: } public function haun_post_save_images($content) { goto vanu5; mdQBl: set_time_limit(500); goto X3N8e; w85Oj: $post_title = $_POST["\x70\157\x73\164\x5f\164\x69\164\x6c\145"] ?? ''; goto z0n8P; X3N8e: $post_id = get_the_ID(); goto w85Oj; toIK0: remove_filter("\143\157\x6e\164\145\156\x74\137\x73\141\166\x65\137\160\x72\x65", [$this, "\x68\141\165\x6e\x5f\x70\157\163\164\137\x73\141\166\145\137\151\155\141\147\x65\163"]); goto hNINP; z0n8P: preg_match_all("\x2f\74\151\x6d\x67\56\x2a\77\x73\162\143\75\x22\x28\x2e\52\x3f\51\42\57", stripslashes($content), $matches); goto COFUZ; hNINP: return $content; goto Caywk; vanu5: if (!(isset($_POST["\x73\141\166\x65"]) || isset($_POST["\160\x75\142\154\x69\x73\150"]))) { goto v9AW0; } goto mdQBl; FcVgZ: ilnqj: goto Jl38S; COFUZ: foreach ($matches[1] as $image_url) { goto pumQr; sMXms: $content = str_replace($image_url, $res["\165\162\154"], $content); goto n6fK1; n6fK1: q4J7u: goto YUBLe; d6vWI: $res = $this->haun_save_images($image_url, $post_id, $post_title); goto sMXms; pumQr: if (!($image_url && strpos($image_url, $_SERVER["\110\x54\124\x50\x5f\x48\117\123\x54"]) === false)) { goto q4J7u; } goto d6vWI; YUBLe: jAnTO: goto Z9Kxt; Z9Kxt: } goto FcVgZ; Jl38S: v9AW0: goto toIK0; Caywk: } public function haun_save_images($image_url, $post_id, $post_title, $set_thumb = false) { goto MXDm_; amO2r: $res = wp_upload_bits($im_name, '', $file); goto iv1b3; ba1M2: JsCSF: goto qZFWF; YdWIL: $im_name = sanitize_title($post_title) . "\x2d{$post_id}\x2e\x6a\x70\x67"; goto amO2r; F4LnO: $this->haun_insert_attachment($res["\146\x69\154\145"], $post_id, $set_thumb); goto ba1M2; iv1b3: if ($res["\145\x72\x72\x6f\x72"]) { goto JsCSF; } goto F4LnO; qZFWF: return $res; goto sNUgI; MXDm_: $file = file_get_contents($image_url); goto YdWIL; sNUgI: } public function haun_insert_attachment($file, $post_id, $set_thumb) { goto JThkF; ZnpeO: if (!$set_thumb) { goto hqqGh; } goto zbnjm; AWaeB: hqqGh: goto vyvSh; JThkF: $filetype = wp_check_filetype($file); goto t8R8L; vGuS3: wp_update_attachment_metadata($attach_id, wp_generate_attachment_metadata($attach_id, $file)); goto ZnpeO; vyvSh: return $attach_id; goto C6TrT; QcYR6: $attach_id = wp_insert_attachment($attachment, $file, $post_id); goto vGuS3; zbnjm: set_post_thumbnail($post_id, $attach_id); goto AWaeB; t8R8L: $attachment = ["\147\165\x69\x64" => wp_get_upload_dir()["\x75\162\154"] . "\57" . _wp_relative_upload_path($file), "\x70\157\163\x74\x5f\155\x69\155\145\x5f\x74\x79\160\x65" => $filetype["\x74\171\x70\145"], "\x70\157\163\164\x5f\x74\x69\x74\x6c\145" => preg_replace("\57\x5c\56\x5b\136\56\x5d\x2b\44\57", '', basename($file)), "\x70\157\x73\x74\137\x63\157\x6e\x74\145\156\164" => '', "\x70\x6f\163\x74\137\163\x74\141\164\x75\163" => "\x69\x6e\x68\145\x72\151\x74"]; goto QcYR6; C6TrT: } }
