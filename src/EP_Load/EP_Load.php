<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; use HNMG\EP_Load\EP_Helper as LoadHelper; use HNMG\Episodes\EP_Helper as EPHelper; class EP_Load { private $ephelper; private $loadhelper; public function __construct() { $this->ephelper = new EPHelper(); $this->loadhelper = new LoadHelper(); } public function register() { add_action("\x61\144\155\x69\156\137\145\156\161\165\145\165\145\x5f\163\143\162\151\160\164\x73", [$this, "\150\156\155\x67\x5f\145\160\151\163"]); add_action("\x77\x70\137\145\156\x71\165\x65\x75\x65\137\163\x63\162\x69\x70\164\163", [$this, "\x68\x6e\155\147\x5f\154\157\141\144"]); } public function hnmg_load() { goto mgRoV; qanvv: $post_meta = get_haunmovies($post_id, HNMG_EPS, true); goto D4A4U; jL1U_: remove_action("\167\x70\137\x68\x65\141\144", "\x77\160\x5f\147\145\156\145\162\141\x74\157\x72"); goto PU_p7; RlgSQ: $ep_slug = get_query_var("\145\x70\151\x73\157\144\x65\137\x73\x6c\x75\147") ?? "\61"; goto NdTpt; mgRoV: wp_enqueue_style("\150\x6e\155\147\55\x66\157\156\164", get_template_directory_uri() . "\x2f\166\145\156\x64\157\162\57\x68\156\x63\x6f\x72\x65\x2f\x68\156\x6d\x67\x65\x70\x69\163\x2f\166\145\156\x64\157\x72\57\146\x6f\x72\x74\x61\167\145\163\157\155\145\57\146\157\x6e\x74\55\x61\167\x65\x73\157\155\145\x2f\x63\x73\x73\57\146\157\156\164\x2d\141\167\x65\163\157\155\x65\56\155\151\156\56\x63\163\x73", [], '', ''); goto hGulu; S2rjI: S1fjG: goto u7JOA; MugAc: $meta["\150\x61\165\x6e\x5f\164\x68\x75\x6d\142\137\x75\162\x6c"] = $meta["\150\141\x75\156\x5f\x74\150\165\155\x62\137\165\162\154"]; goto INO8J; eNyOW: wp_localize_script("\x68\156\x6d\x67\x2d\x6c\157\x61\144\152\x73", "\160\x6c\x61\171\x65\x72\x5f\145\x70\151\x73", ["\141\x6a\x61\x78\137\165\162\x6c" => admin_url("\141\x64\x6d\x69\x6e\55\x61\x6a\141\x78\x2e\160\x68\160"), "\x6e\x6f\156\x63\145" => wp_create_nonce("\x77\x70\x61\x6a\x61\170\137\156\x6f\x6e\x63\x65"), "\152\x77\x70\x6c\141\171\x65\162\137\165\x72\x6c" => HNMG_EPIURL . "\x2f\x6a\x77\160\x6c\x61\x79\x65\162\x2f", "\160\154\x61\171\145\x72\x5f\x75\162\x6c" => get_template_directory_uri() . "\57\x76\x65\156\x64\157\x72\x2f\x68\x6e\143\157\162\145\x2f\x68\156\155\147\x65\160\x69\x73\x2f\162\x65\163\x6f\165\x72\143\145\x73\57\x6c\157\x61\x64\56\x70\x68\x70", "\162\145\x70\157\x72\164\137\x65\156\141\142\x6c\x65" => hnmg_value("\x68\141\x75\x6e\x5f\x72\145\160\x6f\x72\x74\137\x65\156\x61\142\x6c\145"), "\x61\143\164" => get_query_var("\150\141\x75\x6e\137\141\143\164\x69\x6f\156"), "\154\x6f\141\x64\x69\x6e\147\137\151\x6d\x67" => \Roots\asset("\151\x6d\141\147\145\163\57\154\157\x61\x64\151\156\147\x2e\x67\x69\x66")->uri(), "\164\x79\x70\145\x5f\163\154\x75\147" => hnmg_value("\150\141\165\x6e\137\165\x72\x6c\137\164\x79\x70\x65"), "\x61\x75\x74\x6f\137\162\x65\163\145\x74\137\143\141\143\150\x65" => hnmg_value("\x61\165\x74\157\137\x72\145\x73\x65\164\137\143\x61\143\x68\145"), "\162\x65\163\x75\155\x65\x5f\x70\154\141\171\142\x61\x63\153" => hnmg_value("\162\145\163\x75\155\145\x5f\160\x6c\x61\x79\x62\141\143\153"), "\151\163\137\x61\x64\165\154\x74" => !empty($meta["\151\163\137\x61\x64\165\x6c\164"]) && $meta["\151\163\137\141\144\165\154\x74"] == "\157\156" ? true : false, "\160\x6f\x73\164\x65\x72" => !empty($meta["\150\141\165\x6e\x5f\x70\157\x73\x74\145\162\x5f\165\x72\x6c"]) ? $meta["\x68\141\165\156\137\x70\157\163\x74\145\162\137\x75\x72\x6c"] : '', "\x61\144\x75\x6c\x74\137\x74\x69\x74\154\145" => hnmg_value("\141\144\x75\x6c\x74\137\143\157\156\164\x65\x6e\x74\137\x74\151\164\154\x65"), "\141\144\165\154\x74\x5f\x63\x6f\x6e\x74\145\156\x74" => hnmg_value("\x61\144\x75\154\x74\x5f\143\x6f\156\x74\x65\156\x74\x5f\151\156\x66\157\137\164\x65\x78\164"), "\x70\x6f\163\164\137\x74\x69\164\x6c\145" => get_the_title($post_id), "\x70\157\163\x74\137\x69\x64" => $post_id, "\x65\160\151\163\157\144\x65\x5f\x73\154\165\x67" => $ep_slug ? $ep_slug : str_replace("\137", "\x2d", $first_episode), "\x73\x65\x72\x76\145\162" => $server ? $server : 1, "\160\x6c\141\171\145\162\x5f\145\x72\x72\x6f\162\x5f\144\x65\x74\x65\143\x74" => hnmg_value("\x70\x6c\x61\x79\x65\x72\x5f\145\x72\x72\x6f\162\x5f\x64\x65\164\145\x63\164") ? hnmg_value("\x70\154\x61\x79\x65\x72\x5f\145\162\162\157\x72\x5f\x64\145\x74\145\x63\164") : "\x64\x69\x73\160\x6c\x61\x79\137\x6d\x6f\144\x61\x6c", "\x65\x70\151\163\157\x64\145\137\x64\151\163\160\x6c\x61\x79" => hnmg_value("\x68\141\165\156\137\x65\160\151\163\157\x64\145\137\x64\151\163\x70\x6c\x61\x79") != '' ? hnmg_value("\150\141\x75\x6e\137\145\x70\151\163\157\x64\x65\x5f\x64\x69\163\160\x6c\x61\x79") : "\156\157\x6e\145", "\x69\x31\70\x6e" => $this->hnmgepis_localize(), "\150\x6e\143\x6f\x6c\157\162" => $this->hnmgepis_color(), "\x6a\x77\137\141\144\x63\157\144\145" => hnmg_value("\x6a\x77\137\x70\154\141\x79\x65\162\x5f\143\165\163\164\x6f\x6d\137\x61\144\x73\x5f\x63\x6f\x64\145") ?: '', "\143\141\143\150\x65\x5f\x74\x69\x6d\x65" => hnmg_value("\160\154\x61\x79\x65\x72\x5f\143\x61\143\x68\145\137\164\x69\155\145") ?: "\x31\x38\x30\x30", "\152\167\x70\154\x61\x79\x65\162\x5f\x73\150\x6f\x77\x61\x64" => hnmg_value("\x6a\167\x5f\x70\154\141\171\x65\x72\x5f\163\150\x6f\167\137\x61\x64"), "\x61\165\164\157\160\154\x61\x79" => hnmg_value("\x6a\x77\x5f\x70\154\141\171\145\x72\x5f\141\x75\164\x6f\160\x6c\x61\x79"), "\141\x75\164\x6f\160\x61\165\x73\145" => hnmg_value("\152\167\x5f\x70\x6c\x61\x79\x65\x72\137\141\165\x74\157\160\x61\x75\163\x65"), "\160\x6c\141\x79\x65\162\x5f\154\157\x67\x6f\x5f\x68\x69\x64\x65" => hnmg_value("\152\167\x5f\x70\x6c\x61\171\x65\162\x5f\154\x6f\x67\157\x5f\x68\151\144\145"), "\160\154\141\x79\x65\162\x5f\163\150\x61\x72\151\x6e\x67" => hnmg_value("\152\x77\x5f\x70\154\141\171\x65\x72\137\x73\150\x61\162\x65"), "\146\154\157\141\x74\x69\x6e\147" => hnmg_value("\146\154\x6f\x61\x74\x69\156\x67\137\160\x6c\x61\x79\145\x72"), "\x70\x6c\x61\x79\x65\x72\x5f\154\157\x67\x6f" => hnmg_value("\x6a\x77\x5f\160\154\141\x79\145\x72\137\x6c\157\147\157") ?: '', "\x6c\157\147\x6f\x5f\160\x6f\x73\x69\164\151\157\156" => hnmg_value("\x6a\x77\x5f\160\x6c\x61\x79\x65\162\x5f\154\x6f\x67\157\137\x70\157\163\151\x74\x69\x6f\156") ?: '', "\x70\x6c\141\171\x65\x72\137\x6c\x6f\147\157\137\154\151\x6e\x6b" => hnmg_value("\x6a\x77\x5f\x70\154\141\171\145\x72\137\x6c\x6f\x67\x6f\x5f\154\151\156\153") ?: "\150\x74\164\x70\163\x3a\x2f\57\150\x61\165\x6e\171\x74\x62\x2e\143\x6f\155", "\x63\x61\160\164\151\157\x6e\163\137\143\x6f\x6c\x6f\x72" => hnmg_value("\152\x77\137\164\162\x61\143\x6b\x73\137\143\x6f\x6c\x6f\x72") ?: "\43\145\145\x65\x65\x32\x32", "\143\141\x70\x74\151\157\x6e\163\137\146\x6f\156\164\163\151\x7a\145" => hnmg_value("\x6a\x77\x5f\164\162\141\x63\x6b\163\137\146\x6f\156\x74\x5f\163\x69\172\145") ?: 12, "\152\167\160\x6c\x61\171\145\162\x5f\x6b\x65\171" => hnmg_value("\152\x77\x5f\x70\x6c\x61\171\145\x72\x5f\154\151\x63\x65\x6e\x73\145\x5f\x6b\145\171") ?: "\115\x42\x76\x72\151\145\x71\116\x64\x6d\x56\x4c\64\x6a\x56\x30\170\66\114\120\112\60\167\113\102\57\116\x62\x7a\x32\121\x71\x2f\x6c\x71\x6d\63\x67\75\75", "\141\144\142\154\x6f\x63\x6b" => hnmg_value("\144\145\164\145\x63\x74\137\x61\x64\142\x6c\x6f\x63\153"), "\141\x64\x62\x6c\x6f\x63\x6b\x5f\155\163\147" => $this->adblock_msg()]); goto FkD57; EYurz: wp_enqueue_script("\x68\156\155\x67\55\x6c\x6f\141\x64\x6a\163", HNMG_EPIURL . "\x2f\152\163\x2f\x68\156\155\147\160\154\141\171\x65\162\56\x6a\163", array(), "\x30\56\61\56\60", false); goto eNyOW; u7JOA: m9s2I: goto uR4OE; SWNc1: if (!hnmg_value("\x68\x61\x75\x6e\x5f\164\x68\x75\x6d\142\x5f\165\x72\154", HNMG_META)) { goto m9s2I; } goto xImk9; TiFxS: $meta = get_haunmovies($post_id, HNMG_META, true); goto P_33b; MeZOV: wp_localize_script("\150\x6e\155\x67\55\x74\150\x65\x6d\145\x73", "\x68\x6e\144\145\142\x75\x67", ["\144\x69\163\141\x62\x6c\145\x5f\x64\145\x62\x75\x67" => hnmg_value("\x68\141\165\156\x5f\144\151\x73\x61\x62\154\145\137\144\x65\142\x75\x67"), "\144\x62\x5f\162\145\144\x69\162\145\143\x74\x5f\165\x72\x6c" => hnmg_value("\150\141\x75\x6e\x5f\x64\145\x62\x75\x67\137\162\145\x64\x69\162\145\x63\x74\137\165\x72\154"), "\151\163\x5f\163\x69\156\147\x6c\145" => is_single(), "\x73\x65\154\145\143\x74\x5f\143\157\x6d\155\x65\x6e\x74\163" => !empty(hnmg_value("\163\x65\x6c\x65\x63\164\137\x63\157\155\x6d\145\156\x74\163")) && hnmg_value("\x73\x65\x6c\x65\143\164\137\143\x6f\155\x6d\x65\156\x74\x73") == "\x66\142\x5f\x63\157\155\155\x65\156\x74\163" ? true : false, "\x66\x62\137\x61\160\160\163\137\x69\144" => hnmg_value("\x68\x61\165\156\137\x66\142\137\141\160\x70\x73\x5f\151\144") ?: "\x31\x33\70\64\70\71\x34\71\64\70\x34\63\x37\x36\63\67"]); goto Aw7gt; KsETk: $episode = get_query_var("\150\x61\165\156\x5f\x65\160\x69\163\x6f\x64\x65"); goto ThDeB; uRJId: $post_id = get_queried_object_id(); goto KsETk; xImk9: if (!(strpos($meta["\x68\141\x75\x6e\x5f\164\x68\165\x6d\x62\x5f\x75\x72\x6c"], home_url()) !== false)) { goto S1fjG; } goto EZw7z; INO8J: update_haunmovies($post_id, HNMG_META, $meta); goto S2rjI; RsAlY: $first_episode = isset($data) && isset($data[0]["\x68\x61\x75\156\155\x6f\166\x69\145\163\x5f\163\x65\x72\x76\x65\x72\x5f\x64\141\x74\x61"]) ? key($data[0]["\150\x61\x75\156\155\x6f\166\x69\x65\163\137\163\x65\x72\x76\x65\x72\137\x64\x61\x74\141"]) : ''; goto SWNc1; D4A4U: $data = json_decode(stripslashes($post_meta), true); goto RsAlY; EZw7z: $meta["\150\141\165\156\x5f\164\x68\165\155\142\x5f\165\162\154"] = $this->haun_make_url_relative($meta["\150\141\165\156\x5f\x74\150\x75\155\x62\137\x75\162\x6c"]); goto MugAc; ThDeB: $server = get_query_var("\x68\141\165\x6e\x5f\163\145\x72\166\x65\x72"); goto RlgSQ; P_33b: $post_slug = basename(get_permalink($post_id)); goto qanvv; hGulu: wp_enqueue_script("\150\156\x6d\147\x2d\x74\150\x65\155\145\163", HNMG_EPIURL . "\57\x6a\163\x2f\154\157\x61\x64\x63\x6f\x72\145\x2e\152\163", [], null, true); goto MeZOV; NdTpt: $episode_display = hnmg_value("\x68\141\165\156\137\145\160\151\163\x6f\144\145\137\144\151\x73\160\x6c\x61\x79"); goto TiFxS; FkD57: SKDPD: goto jL1U_; Aw7gt: if (!is_single()) { goto SKDPD; } goto uRJId; uR4OE: wp_enqueue_style("\x68\156\x6d\147\x6c\157\141\x64\x63\163\x73", HNMG_EPIURL . "\57\x63\x73\163\x2f\x68\156\x6d\x67\x70\x6c\141\171\145\x72\56\143\163\163", [], "\60\x2e\61\x2e\60", "\x61\x6c\154"); goto EYurz; PU_p7: } public function haun_make_url_relative($url) { $relativeurl = wp_make_link_relative($url); return $relativeurl; } public function hnmgepis_localize() { goto MbAAT; iu7nK: $localize = (include_once $localize_file); goto Vx3Be; DGQri: return $localize; goto cUMFC; UpC8R: if (!file_exists($localize_file)) { goto d8JfY; } goto iu7nK; MbAAT: $localize = array(); goto wcjra; Vx3Be: d8JfY: goto DGQri; wcjra: $localize_file = wp_normalize_path(HNMG_EPDIR . "\x6c\157\x63\x61\154\x69\x7a\x65\x2e\x70\x68\x70"); goto UpC8R; cUMFC: } public function hnmgepis_color() { goto qIpT8; E2QjA: return $localize; goto L7PgC; wMMye: ezO5O: goto E2QjA; tdxK7: $localize = (include_once $localize_file); goto wMMye; qIpT8: $localize = array(); goto BlGMQ; Aship: if (!file_exists($localize_file)) { goto ezO5O; } goto tdxK7; BlGMQ: $localize_file = wp_normalize_path(HNMG_EPDIR . "\143\x6f\154\x6f\162\x2e\160\150\x70"); goto Aship; L7PgC: } public function adblock_msg() { goto x1JBP; b_MNq: goto WHkzr; goto GqGDG; ITUEd: return $adblock; goto OR6QK; rBZEB: $adblock .= __("\x50\154\x65\x61\x73\x65\x20\144\151\163\141\142\154\145\40\x41\x64\102\154\x6f\x63\153\40\164\157\40\x63\157\156\164\151\156\x75\x65\x20\167\141\164\143\150\151\x6e\x67\x2e", "\x68\x6e\x6d\x67\x65\x70\x69\163"); goto b_MNq; x1JBP: $adblock = "\74\x64\151\x76\40\143\154\141\163\163\x3d\x22\160\171\x2d\63\40\x70\170\x2d\x35\x20\142\147\55\x72\145\x64\55\x35\60\60\x20\164\145\x78\x74\55\167\150\151\x74\145\40\164\145\x78\x74\x2d\170\154\40\162\157\x75\156\144\145\144\x2d\62\170\x6c\x22\x3e\xa\x9\11\x9\74\160\x20\x63\154\x61\163\x73\x3d\42\164\145\170\164\x2d\143\x65\x6e\164\145\162\x20\x6d\x62\x2d\x34\40\146\x6f\156\x74\x2d\x62\157\154\x64\42\x3e\x3c\151\155\147\x20\x63\x6c\x61\x73\163\x3d\42\x69\x6e\x6c\x69\x6e\x65\40\164\x65\170\164\x2d\x77\150\x69\164\x65\42\40\x73\162\x63\75\42" . HNMG_EPIURL . "\57\x69\155\141\147\x65\163\57\141\144\x62\154\157\x63\x6b\x65\x72\x2e\160\156\x67\x22\x20\57\76\40" . __("\101\144\102\154\x6f\143\153\40\104\x65\x74\x65\143\164\x65\x64\x21", "\x68\x6e\155\x67\145\x70\x69\x73") . "\x3c\x2f\160\76"; goto LZtqA; XAHAA: $adblock .= $this->loadhelper::compress_htmlcode(hnmg_value("\x61\x64\142\154\x6f\x63\x6b\x5f\x6d\163\147")); goto kopHD; fhCIn: $adblock .= "\x3c\57\x64\x69\166\x3e"; goto ITUEd; LZtqA: if (hnmg_value("\141\x64\x62\x6c\157\143\x6b\137\x6d\x73\x67")) { goto PJpTc; } goto rBZEB; kopHD: WHkzr: goto fhCIn; GqGDG: PJpTc: goto XAHAA; OR6QK: } public function hnmg_epis() { goto ezcmM; HIO8r: return; goto coC9_; pvSVR: if ($pagenow == "\141\144\x6d\x69\x6e\x2e\160\150\160" && (isset($_GET["\x70\141\147\x65"]) && ($_GET["\160\x61\147\145"] == "\150\156\155\x67\55\x65\x70\151\x73\157\x64\x65" || $_GET["\160\x61\147\145"] == "\150\x6e\155\147\55\x6d\157\x76\x69\145\x2d\x72\145\x70\157\162\164" || $_GET["\160\141\x67\x65"] == "\150\156\x6d\x67\x2d\143\x61\x63\x68\x65\x2d\x6d\x61\x6e\x61\x67\x65\162")) || ($pagenow == "\x70\x6f\163\x74\55\x6e\x65\167\x2e\x70\150\x70" || $pagenow == "\x70\x6f\163\164\x2e\x70\x68\x70")) { goto rlqC0; } goto HIO8r; Lwy43: wp_enqueue_script("\150\156\x6d\147\55\x6d\157\x76\x69\x65\x73\x6a\x73", HNMG_EPIURL . "\x2f\x6a\x73\x2f\x68\x6e\155\x67\145\160\x69\x73\x2e\x6a\x73", [], null, true); goto TUCUT; coC9_: goto siOZ3; goto Dfwea; ezcmM: global $pagenow; goto pvSVR; TUCUT: wp_localize_script("\150\156\x6d\x67\x2d\x6d\157\x76\151\x65\x73\152\163", "\x68\x6e\x6d\147\x65\x70\x69\163", ["\141\x6a\141\x78\x5f\x75\162\x6c" => admin_url("\x61\144\155\x69\156\55\x61\x6a\141\x78\x2e\x70\x68\160"), "\x65\x70\x69\163\x6f\x64\145\137\164\171\160\x65" => $this->ephelper->getPlayerTypesJs(), "\x68\156\x65\x70\151\x73\157\144\145\x5f\164\171\160\145" => $this->ephelper->HNPlayerTypesJs(), "\156\157\156\143\x65" => wp_create_nonce("\141\152\141\x78\55\156\157\156\x63\x65"), "\x69\x31\x38\156" => $this->hnmgepis_localize(), "\145\160\x73\x6c\165\147\137\144\x65\146\x61\x75\x6c\x74" => "\x74\x61\160"]); goto KjbuB; Dfwea: rlqC0: goto Lwy43; KjbuB: siOZ3: goto VufFF; VufFF: } }
