<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; use function Roots\view; use HNMG\EP_Load\EP_Cache; use HNMG\EP_Load\EP_Getlink; use HNMG\EP_Load\EP_Helper; class EP_PLayer { public $cache; public $getlink; public function __construct() { goto Dq3WL; SEEZm: $this->getlink = new EP_Getlink(); goto tQEr1; xyL8k: add_action("\x68\x61\165\156\x5f\x70\x6c\141\x79\x65\162\x5f\144\145\146\x61\165\154\164", [$this, "\x68\141\165\156\x5f\x70\154\141\171\145\162\x5f\142\x6f\x78"], 10, 1); goto hubuH; Dq3WL: $this->cache = new EP_Cache(); goto SEEZm; hubuH: add_action("\167\160\137\146\157\157\x74\x65\162", [$this, "\150\156\x61\x64\144\x5f\x6c\151\x67\150\x74\157\165\164"], 100); goto xBigt; tQEr1: add_shortcode("\x68\141\165\x6e\120\154\141\x79\x65\162", [$this, "\150\x61\165\156\x42\165\151\x6c\144\x50\154\x61\171\145\162\x53\x68\x6f\x74\143\x6f\144\145"]); goto z3sXk; z3sXk: add_shortcode("\x68\x61\x75\x6e\137\x64\145\x74\145\143\164\x5f\x73\x65\x72\x76\145\162", [$this, "\x68\141\165\156\137\x64\x65\164\x65\143\x74\x5f\x73\145\162\166\x65\x72"], 10, 0); goto xyL8k; xBigt: } public function hnadd_lightout() { goto HpwgE; HpwgE: if (!is_single()) { goto qMt50; } goto GXJRZ; Xyu_1: qMt50: goto gBW1w; GXJRZ: echo "\x3c\x64\x69\166\40\151\x64\75\x22\150\x6e\55\154\x69\x67\x68\164\157\165\x74\x22\76\74\57\x64\x69\166\x3e"; goto Xyu_1; gBW1w: } public function haun_player_box($meta) { goto zNapG; Pu4e3: $player_options = hnmg_value("\x68\x61\x75\156\x5f\x6a\167\137\x70\154\141\171\x65\162\x5f\157\x70\164\x69\157\x6e\163"); goto UiOJ2; VZ0TR: $is_copyright = hnmg_value("\x69\163\137\143\x6f\160\171\x72\x69\x67\x68\164", HNMG_META); goto HQyB2; zNapG: global $post; goto VZ0TR; HQyB2: $is_adult = hnmg_value("\151\x73\137\x61\x64\165\154\x74", HNMG_META); goto Pu4e3; lmCb7: echo view("\110\x4e\115\107\72\72\154\x61\x79\x6f\165\x74\x73\56\154\157\141\x64\x70\154\141\171\x65\162", compact("\x70\157\x73\x74", "\x69\163\137\143\x6f\x70\171\162\151\147\150\x74", "\x69\x73\137\x61\x64\165\x6c\164", "\x63\x68\x65\x63\x6b")); goto BRrzf; GFNR0: ob_start(); goto lmCb7; bTBSj: echo $ajax_html; goto e00UC; GPdxE: $check = isset($meta["\150\141\x75\x6e\137\x6d\157\166\151\x65\x5f\x73\x74\x61\164\165\x73"]) ? $meta["\x68\141\x75\156\x5f\x6d\x6f\166\x69\145\x5f\x73\164\x61\x74\165\163"] : ''; goto GFNR0; UiOJ2: $player_autonext = isset($player_options["\x6a\x77\x5f\x70\x6c\x61\171\x65\162\x5f\141\x75\x74\x6f\x6e\x65\x78\164"]) ? $player_options["\152\167\137\160\154\x61\x79\145\162\x5f\141\x75\x74\x6f\x6e\x65\170\164"] : false; goto GPdxE; BRrzf: $ajax_html = ob_get_clean(); goto bTBSj; e00UC: } public function haun_detect_server($link, $post_id) { goto VPz14; fHTl2: WY3cS: goto Aa1wg; Emgd0: UsJAP: goto BQz5X; wAJOe: $this->cache->saveCache($link, json_encode($dataplayer)); goto qIPJd; Khx4s: if ($doccahe) { goto WY3cS; } goto PwiF7; Aa1wg: $dataplayer = json_decode($doccahe); goto hwERA; prqrX: goto GjCXx; goto Emgd0; qIPJd: goto rc3q0; goto fHTl2; dAjOI: return apply_filters("\150\141\x75\x6e\x5f\x70\x6c\x61\x79\x65\162\x5f\163\x6f\x75\162\143\x65\163", (object) ["\160\157\x73\x74\137\x69\144" => $post_id, "\x73\157\x75\162\x63\x65\163" => $dataplayer, "\154\x69\156\x6b" => $this->getlink->_url]); goto Xhgmd; PwiF7: $dataplayer = $this->getlink->host->get_link($this->getlink->_url); goto wAJOe; ddaPR: if (hnmg_value("\x70\x6c\141\171\x65\162\137\143\x61\143\x68\145")) { goto UsJAP; } goto M37TV; M37TV: $dataplayer = $this->getlink->host->get_link($this->getlink->_url); goto prqrX; l2aAf: GjCXx: goto dAjOI; BQz5X: $doccahe = $this->cache->readCache($link); goto Khx4s; VPz14: $this->cache->timeCache = hnmg_value("\160\x6c\x61\x79\145\x72\137\143\x61\x63\150\145\x5f\164\151\155\145"); goto p1xm3; p1xm3: $this->getlink->init($link); goto ddaPR; hwERA: rc3q0: goto l2aAf; Xhgmd: } public function haun_detect_embed($args) { goto ZMpmg; JMLlh: $linkembed = has_filter("\x68\141\x75\156\x5f\x65\155\142\145\x64\x5f\165\x72\154") ? $haun_embed_url : $haun_embed_url->link; goto NbK2j; Bnxx_: goto iz4JQ; goto JkXVH; x_sI7: Pnpre: goto TQkBw; Vr9hh: goto QAcKy; goto LiyHe; hYwtn: if (strpos($args["\154\x69\156\153"], "\144\141\x69\154\171\155\x6f\x74\151\157\156")) { goto zV8RA; } goto CC3I8; dCoHz: if (strpos($args["\x6c\x69\156\x6b"], "\x79\x6f\x75\164\165\x62\x65")) { goto st3EK; } goto jnVd7; u3LYH: $id = EP_Helper::getDailyMotionId($args["\154\x69\156\x6b"]); goto ecck4; jnVd7: if (strpos($args["\x6c\x69\x6e\153"], "\x2e\155\63\165\70") === FALSE) { goto Cp1uF; } goto jQxvN; pRraM: if (strpos($args["\x6c\x69\156\x6b"], "\157\153\56\x72\x75\57\166\151\x64\145\157\57")) { goto mW0eg; } goto FGJl3; jQxvN: if (strpos($args["\154\151\156\x6b"], "\144\162\151\x76\x65")) { goto KoKni; } goto hYwtn; NbK2j: echo apply_filters("\150\x61\x75\156\137\x65\155\x62\x65\x64\x5f\x70\x6c\x61\x79\x65\162", $this->load_embed($linkembed)); goto x37_w; P0q3b: cmX7m: goto Vr9hh; Q3B8h: goto Pnpre; goto krJ8L; CTzFL: $detectembed = str_replace("\166\151\x65\167", "\160\x72\145\x76\x69\x65\x77", $args["\154\x69\156\x6b"]); goto PWeeZ; bdE9K: Cp1uF: goto D1hkH; Neqlz: $detectembed = str_replace("\166\x69\x64\145\157", "\x76\151\144\145\x6f\145\x6d\x62\145\144", $args["\x6c\151\x6e\153"]); goto sieJW; Th_1b: goto IE8JL; goto Q9kXx; ZGZet: $id = EP_Helper::getVimeoId($args["\x6c\151\156\x6b"]); goto tWgNS; RdAKr: $haun_embed_url = apply_filters("\x68\x61\165\x6e\x5f\x65\x6d\142\145\x64\x5f\x75\162\x6c", (object) ["\x70\157\163\164\137\151\144" => $args["\160\x6f\163\x74\x5f\151\x64"], "\x6c\x69\x6e\153" => $detectembed, "\x73\x75\142\164\151\x74\x6c\145" => $args["\x73\x75\x62\x74\151\x74\154\145"], "\x73\165\142\x6c\x61\x62\145\x6c" => $args["\163\x75\x62\154\141\x62\145\154"], "\x63\x75\163\164\x6f\155\x5f\166\141\162" => @$args["\x63\165\163\164\157\155\137\166\x61\x72"]]); goto JMLlh; TQkBw: goto cmX7m; goto xtpje; ZMpmg: $detectembed = ''; goto dCoHz; JvtzQ: goto iz4JQ; goto bdE9K; D1hkH: $detectembed = $args["\x6c\x69\156\153"]; goto Wizur; xtpje: zV8RA: goto u3LYH; FGJl3: $detectembed = $args["\x6c\x69\x6e\x6b"]; goto Th_1b; udxon: $id = EP_Helper::getYoutubeId($args["\x6c\x69\x6e\x6b"]); goto lhgMP; sieJW: IE8JL: goto Q3B8h; JkXVH: st3EK: goto udxon; LiyHe: KoKni: goto CTzFL; PWeeZ: QAcKy: goto Bnxx_; Wizur: iz4JQ: goto RdAKr; CC3I8: if (strpos($args["\154\151\x6e\153"], "\x76\151\x6d\145\x6f")) { goto ueYCD; } goto pRraM; tWgNS: $detectembed = "\57\57\x70\154\141\171\x65\162\56\166\x69\x6d\145\x6f\x2e\143\x6f\x6d\x2f\x76\151\x64\145\157\x2f" . $id; goto x_sI7; Q9kXx: mW0eg: goto Neqlz; lhgMP: $detectembed = "\x2f\x2f\167\x77\x77\x2e\x79\x6f\x75\164\x75\x62\145\56\143\x6f\155\57\145\155\142\145\x64\57" . $id; goto JvtzQ; krJ8L: ueYCD: goto ZGZet; ecck4: $detectembed = "\x2f\x2f\x77\x77\167\x2e\x64\x61\151\154\171\155\157\164\151\x6f\156\56\x63\157\x6d\x2f\145\155\142\x65\x64\57\x76\151\144\x65\157\57" . $id; goto P0q3b; x37_w: } public function load_embed($linkembed) { goto Woy40; uj2of: eh7rZ: goto kHg8H; Woy40: if (hnmg_value("\x6a\x77\137\x70\x6c\141\171\x65\162\137\x73\150\157\x77\137\x61\x64") && hnmg_value("\152\x77\137\163\150\x6f\x77\137\145\155\142\145\x64\x5f\x61\x64\163")) { goto hmvAl; } goto FnNMF; Uk731: goto eh7rZ; goto uZEPx; kHg8H: return $haun_embed_player; goto ytrHM; VqYq4: $haun_embed_player = "\74\144\x69\x76\x20\x69\x64\x3d\42\x68\141\165\156\x2d\145\155\x62\145\144\x22\40\143\154\141\x73\x73\x3d\42\x72\x65\154\x61\x74\151\x76\145\x20\167\x2d\x66\165\x6c\154\40\x68\x2d\x30\40\160\x62\55\x5b\x35\x36\56\62\65\45\135\x22\40\x73\x74\x79\154\x65\75\42\x64\151\x73\160\154\x61\171\72\40\156\157\x6e\145\73\42\76\12\11\x9\11\x9\x3c\151\146\162\141\155\x65\x20\x63\154\141\163\163\x3d\x22\141\142\x73\157\x6c\165\164\x65\x20\164\x6f\x70\55\x30\x22\40\x73\143\x72\157\154\154\x69\x6e\x67\75\x22\156\x6f\42\40\146\x72\141\155\x65\142\x6f\162\x64\145\162\x3d\42\60\x22\40\167\x69\144\164\150\75\42\x31\60\x30\45\42\40\150\x65\x69\147\150\164\x3d\42\x31\x30\x30\45\x22\x20\141\154\x6c\x6f\167\x66\165\x6c\154\x73\143\x72\x65\x65\x6e\x3d\x22\164\x72\x75\x65\42\40\167\x65\x62\153\151\x74\x61\x6c\154\x6f\x77\146\165\154\x6c\x73\143\162\x65\145\x6e\x3d\x22\164\x72\x75\145\42\x20\x6d\x6f\172\x61\x6c\x6c\x6f\x77\x66\x75\x6c\154\x73\x63\x72\145\145\156\x3d\x22\164\162\x75\145\x22\x20\x73\162\143\75\42" . $linkembed . "\42\40\141\x6c\x6c\157\167\146\165\154\154\x73\x63\162\x65\x65\156\x3e\74\57\151\146\x72\x61\x6d\x65\x3e\12\x9\x9\11\74\x2f\144\151\166\x3e\xa\x9\11\x9\x3c\144\151\x76\40\151\x64\75\x22\150\x61\x75\156\x2d\160\x6c\141\171\145\162\42\76\x3c\x2f\x64\x69\166\76\x3c\x73\143\162\151\160\x74\x3e\x4c\x6f\141\x64\137\x45\155\142\x65\144\50\51\74\x2f\163\x63\162\x69\x70\x74\x3e"; goto uj2of; FnNMF: $haun_embed_player = "\x3c\x64\x69\166\x20\x63\x6c\x61\x73\x73\75\42\162\x65\154\141\x74\x69\166\145\x20\167\x2d\x66\x75\x6c\x6c\x20\150\x2d\60\x20\x70\x62\x2d\x5b\x35\66\56\x32\65\45\135\42\76\12\x9\11\11\11\x3c\x69\x66\x72\x61\155\145\40\x63\x6c\x61\163\x73\75\x22\141\142\163\x6f\154\x75\x74\x65\40\164\x6f\x70\x2d\60\x22\x20\163\162\x63\x3d\42" . $linkembed . "\42\40\163\143\162\157\x6c\x6c\x69\x6e\x67\x3d\x22\x6e\157\x22\40\146\162\141\x6d\x65\x62\157\162\144\x65\162\75\x22\60\x22\40\167\151\x64\164\x68\x3d\42\61\x30\x30\x25\42\x20\150\x65\x69\147\x68\x74\x3d\42\61\60\60\x25\42\x20\x61\x6c\154\x6f\167\x66\165\154\x6c\x73\x63\162\145\x65\x6e\x3d\42\164\x72\165\145\42\40\x77\x65\142\153\151\164\x61\154\x6c\157\x77\x66\165\x6c\154\163\x63\162\145\x65\x6e\75\x22\164\162\x75\x65\42\40\155\157\x7a\141\154\154\157\x77\146\x75\154\154\163\143\x72\145\x65\156\75\42\x74\x72\x75\145\x22\40\x61\x6c\x6c\157\167\x3d\42\x61\165\164\157\160\x6c\141\x79\x22\x3e\x3c\x2f\151\146\162\x61\x6d\x65\x3e\12\11\11\x9\x3c\57\x64\x69\166\76"; goto Uk731; uZEPx: hmvAl: goto VqYq4; ytrHM: } public function haunPlayer($post_id, $episode, $server, $sub_server = '', $custom_var = '') { goto Ylvod; hBQC6: foreach ($subtitle_listt as $key => $value) { goto M1wuY; Ud1t3: $subtitleb .= "\x7b\x66\x69\154\x65\72\x20\x22" . trim($value["\150\x61\165\156\155\x6f\166\x69\x65\163\137\x65\x70\137\163\165\142\137\146\151\154\x65"]) . "\42\54\x6c\141\142\145\x6c\x3a\x20\x22" . trim($value["\150\x61\165\156\155\x6f\x76\x69\x65\163\137\145\160\x5f\x73\x75\142\137\154\141\142\x65\x6c"]) . "\x22\x2c\x6b\151\x6e\144\x3a\40\42\143\141\x70\164\x69\157\x6e\163\x22\x2c\x64\145\x66\x61\x75\x6c\164\x3a\x20" . $default . "\x7d\54"; goto QcGVn; QcGVn: YnMKx: goto cfcWh; M1wuY: $default = $key == 0 ? "\164\x72\x75\x65" : "\146\141\154\163\x65"; goto Ud1t3; cfcWh: } goto dayjy; MkCt2: BqIK9: goto C2yA6; dayjy: xr6AA: goto yk7b3; C2yA6: goto niiVY; goto Eq7J8; bs1VS: dvPXk: goto f8X6U; mHrDb: goto KEOgq; goto wLiY8; BI066: if (!$subtitle_listt) { goto tlfHE; } goto n6kLE; f8X6U: $html = ob_get_clean(); goto TrO08; MzYzG: niiVY: goto vF6lM; Eq7J8: BWWnq: goto hBQC6; Cp1X6: $subtitle_listt = $subtitle_list ?: $data[0]["\x68\141\x75\x6e\155\157\166\x69\145\x73\137\163\x65\x72\166\x65\x72\x5f\x64\x61\164\141"][$episode]["\x68\x61\x75\x6e\x6d\157\166\x69\145\163\137\x65\x70\x5f\x73\x75\x62\x73"] ?? ''; goto CMnZb; CMnZb: $subtitleb = "\x5b"; goto nA_Hm; Pl8Of: $dataPlayer = $data[0]["\150\141\x75\x6e\x6d\x6f\x76\151\x65\x73\137\x73\x65\x72\x76\x65\162\137\144\x61\x74\141"][$episode]; goto eXRx1; b4Xoo: $subtitle_list = $dataPlayer["\x68\x61\x75\156\155\157\166\x69\145\x73\x5f\x65\x70\x5f\x73\165\x62\x73"] ?? ''; goto Cp1X6; SGgvL: $haunmovies_ep_sub_label = implode("\174", $haunmovies_ep_sub_label); goto K9QGf; eXRx1: KEOgq: goto b4Xoo; xk831: goto dvPXk; goto uhKMk; Z71yQ: $sublink = $haunmovies_listsv[$sub_server - 1]["\x68\x61\x75\x6e\155\x6f\166\x69\x65\x73\137\145\x70\137\x6c\x69\163\x74\x73\x76\x5f\154\x69\x6e\153"] ?? ''; goto J4pbN; EhoHg: $haunmovies_listsv = $dataPlayer["\150\x61\165\x6e\155\x6f\x76\151\x65\x73\137\145\x70\x5f\154\x69\x73\164\x73\x76"] ?? ''; goto ETH6Y; AGSP3: $data = json_decode(stripslashes($metaPost), true); goto Fk8td; nA_Hm: if (!empty($subtitle_listt)) { goto BWWnq; } goto iALeE; Nx_g6: $checksubtitle = isDomain($jw_player_default_subtitle) ? $jw_player_default_subtitle : home_url($jw_player_default_subtitle); goto tHDCf; ETH6Y: if (!$haunmovies_listsv) { goto UAReY; } goto Z71yQ; SS2al: goto KEOgq; goto rwLF2; K9QGf: tlfHE: goto QM4BC; AQDEA: $metaPost = get_haunmovies($post_id, HNMG_EPS, true); goto AGSP3; TqgdK: $this->haunPlayerInit($post_id, $sublink, $subtype, $subtitleb, $haunmovies_ep_sub_file, $haunmovies_ep_sub_label, $custom_var); goto OwQhP; wLiY8: azldi: goto Zm3rI; uhKMk: geueA: goto EhoHg; A_N23: wp_send_json($datasub); goto rtcZQ; K99aF: if (!$jw_player_default_subtitle) { goto BqIK9; } goto Nx_g6; J4pbN: $subtype = $haunmovies_listsv[$sub_server - 1]["\150\x61\165\x6e\155\157\166\x69\x65\163\x5f\145\160\137\x6c\x69\163\x74\x73\166\x5f\164\x79\160\145"] ?? ''; goto TqgdK; aVntZ: if ($data && isset($data[0]["\x68\141\165\156\x6d\157\x76\151\145\163\137\163\x65\162\166\145\162\x5f\x64\x61\164\141"][$episode])) { goto Nbf8S; } goto L14oz; rwLF2: Nbf8S: goto Pl8Of; ib2pZ: $haunmovies_ep_sub_file = $haunmovies_ep_sub_label = []; goto BI066; fhpoE: $this->haunPlayerInit($post_id, $dataPlayer["\x68\141\165\156\x6d\x6f\166\x69\145\x73\137\x65\160\x5f\x6c\151\156\x6b"], $dataPlayer["\150\141\165\156\x6d\x6f\x76\151\x65\163\137\x65\160\137\x74\x79\160\145"], $subtitleb, $haunmovies_ep_sub_file, $haunmovies_ep_sub_label, $custom_var); goto xk831; Zm3rI: $dataPlayer = $data[$server - 1]["\150\x61\165\156\x6d\x6f\166\x69\x65\x73\137\x73\x65\162\166\145\x72\137\144\141\x74\141"][$episode]; goto SS2al; Fk8td: if ($data && isset($data[$server - 1]["\150\141\165\x6e\x6d\x6f\166\151\145\163\x5f\163\145\x72\x76\145\x72\x5f\x64\141\x74\x61"][$episode])) { goto azldi; } goto aVntZ; gyYIE: DFpeG: goto FgO6M; OwQhP: UAReY: goto bs1VS; rtcZQ: return; goto mHrDb; tHDCf: $subtitleb .= "\173\x66\151\154\145\x3a\x20\42" . trim($checksubtitle) . "\42\x2c\154\141\x62\145\154\x3a\x20\x22\104\145\x66\x61\x75\154\164\x22\54\x6b\x69\x6e\x64\72\40\42\x63\x61\x70\x74\151\x6f\156\163\x22\54\x64\145\146\141\165\x6c\164\72\40\x74\162\165\145\175"; goto MkCt2; TrO08: wp_send_json_success(["\163\157\x75\x72\x63\x65\x73" => $html, "\162\145\x73\x75\x6d\x65\x49\144" => '', "\164\x72\141\x63\x6b\163" => '']); goto FsZUm; QM4BC: if ($sub_server) { goto geueA; } goto fhpoE; iALeE: $jw_player_default_subtitle = hnmg_value("\x6a\x77\x5f\x70\x6c\x61\x79\145\x72\x5f\x64\145\146\x61\165\154\164\137\x73\165\142\164\151\x74\x6c\x65") ?? ''; goto K99aF; L14oz: $datasub["\144\141\x74\141"] = ["\x73\164\141\164\165\163" => true, "\143\x6f\x64\145" => 403]; goto A_N23; n6kLE: foreach ($subtitle_listt as $value) { goto ahnSD; YvlCg: $haunmovies_ep_sub_label[] = $value["\x68\x61\x75\156\155\157\166\151\145\x73\x5f\x65\x70\137\163\x75\142\137\x6c\x61\x62\145\154"]; goto U3OsE; ahnSD: $haunmovies_ep_sub_file[] = $value["\x68\141\x75\x6e\x6d\157\166\x69\x65\163\x5f\145\x70\x5f\x73\165\x62\137\x66\x69\154\145"]; goto YvlCg; U3OsE: NXS5c: goto mMMgu; mMMgu: } goto gyYIE; yk7b3: $subtitleb = rtrim($subtitleb, "\x2c"); goto MzYzG; Ylvod: ob_start(); goto AQDEA; FgO6M: $haunmovies_ep_sub_file = implode("\x7c", $haunmovies_ep_sub_file); goto SGgvL; vF6lM: $subtitleb .= "\x5d"; goto ib2pZ; FsZUm: } public function haunPlayerInit($post_id, $episode_link, $episode_type, $tracks, $list_sub, $list_sub_label, $custom_var = '') { goto q_JYg; VfbXL: $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_custom_player_types->link); goto T6WwD; MoJ1H: $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_custom_player_types->link); goto AyP2h; QWBYq: $this->haun_detect_embed(["\160\x6f\x73\x74\x5f\x69\x64" => $post_id, "\154\x69\x6e\153" => $haun_type_filter->link, "\x73\165\142\164\151\x74\x6c\145" => $haun_type_filter->subtitle, "\x73\x75\x62\154\141\142\x65\x6c" => $haun_type_filter->sublabel]); goto fTWKA; GZlyA: if ($haun_custom_player_types->episode_type == "\145\x6d\x62\145\144") { goto qr_GV; } goto kcVHR; JCwTQ: goto bMrMz; goto tGY1p; hVLn4: if ($episode_type == "\x6c\151\156\153") { goto Xoqkr; } goto VL3fF; vcRJX: goto uv23Z; goto MFx25; AVkQb: $this->haun_detect_embed(["\x70\x6f\x73\x74\x5f\x69\144" => $post_id, "\154\151\156\153" => $haun_custom_player_types->link, "\163\165\142\164\x69\x74\x6c\x65" => $haun_custom_player_types->subtitle, "\163\165\x62\154\141\142\145\154" => $haun_custom_player_types->sublabel]); goto JyHJE; ARvxp: goto xaxDz; goto W9a8Y; UBLFq: if ($haun_type_filter->type == "\145\x6d\142\145\144") { goto wojvw; } goto xDhUY; tGY1p: Yt5y3: goto dNUvf; q_VSJ: goto ROcMy; goto T2vDX; uZ_Et: F0WEn: goto xidRK; hYy6G: goto VMPGY; goto XCF72; b_7e5: albUs: goto vcRJX; ooySk: goto v1onG; goto Z1S7_; dWK0k: $sources = $this->haun_detect_server($episode_link, $post_id)->sources; goto Y1R6v; wEhrl: $this->haunBuildPlayer($post_id, $sources, $tracks, $episode_link); goto berxJ; WQyTm: if ($haun_type_filter->type == "\x6a\167\160\154\x61\x79\145\162") { goto r4E1m; } goto LvNwF; fuCse: CzcXL: goto mMx2I; KD6E8: $array_filter = (object) ["\160\x6f\163\164\137\x69\x64" => $post_id, "\154\151\156\x6b" => $episode_link, "\x74\x79\160\145" => $episode_type, "\163\165\x62\164\151\x74\x6c\x65" => $list_sub, "\163\165\142\x6c\x61\x62\x65\154" => $list_sub_label, "\163\157\165\x72\143\145\x73" => '']; goto oCwyg; PRiNm: eOedj: goto L8dK5; AGTLr: $this->haun_detect_embed(["\x70\157\x73\164\x5f\x69\144" => $post_id, "\x6c\x69\156\x6b" => $episode_link, "\163\165\142\x74\151\164\154\145" => $list_sub, "\x73\x75\x62\154\x61\142\145\x6c" => $list_sub_label]); goto EG8y_; JymZ2: goto T9CaH; goto gsNM6; aOZk8: $result[] = ["\x66\151\154\x65" => $haun_custom_player_types->link, "\154\x61\142\145\x6c" => "\x48\104", "\164\171\x70\145" => "\x76\x69\144\145\x6f\x2f\155\160\64"]; goto w15TD; xCQOK: echo $haun_custom_player_types->sources; goto ZBBRS; gsNM6: r4E1m: goto l91Ns; dycjd: z8ehD: goto fxU10; cltmZ: if ($haun_custom_player_types->episode_type == "\x6c\151\x6e\153") { goto tX3hs; } goto xNdJF; foZi1: SYOlN: goto fuCse; uqVGG: if (has_filter("\150\x61\165\156\137\164\171\x70\x65\x5f\x66\151\x6c\x74\x65\162")) { goto Yt5y3; } goto dWK0k; JM826: $this->haun_detect_embed(["\160\x6f\163\164\x5f\151\144" => $post_id, "\154\151\x6e\153" => $haun_custom_player_types->link, "\163\x75\142\164\151\x74\154\145" => $haun_custom_player_types->subtitle, "\x73\165\x62\x6c\141\142\x65\x6c" => $haun_custom_player_types->sublabel]); goto Uh6HC; Z1S7_: tX3hs: goto o0HJW; hS8v6: VMPGY: goto t97OD; KPFv7: T9CaH: goto MfPxn; mMx2I: goto albUs; goto dycjd; fxU10: if ($haun_custom_player_types->sources) { goto T_7nP; } goto JM826; xb1dr: echo "\x3c\x64\151\166\x20\x63\x6c\141\x73\x73\x3d\42\141\x6c\145\x72\x74\40\141\154\x65\x72\164\x2d\144\x61\156\147\145\162\x20\164\145\x78\x74\55\143\x65\156\x74\x65\162\x22\40\162\x6f\154\x65\75\x22\x61\154\145\x72\164\42\x3e\105\x70\151\163\157\144\145\40\124\171\160\x65\x20\42\74\x73\x74\x72\x6f\x6e\147\76" . $episode_type . "\x3c\x2f\163\164\162\x6f\156\x67\76\42\x20\x6b\x68\303\xb4\156\147\x20\164\xe1\xbb\223\156\x20\x74\341\272\xa1\x69\56\x3c\x62\x72\76\x20\xc4\220\341\273\x83\40\164\341\272\241\x6f\x20\x65\x70\151\163\x6f\x64\x65\x20\164\x79\x70\145\x20\155\xe1\273\233\x69\54\x20\x76\165\151\x20\154\xc3\xb2\156\x67\x20\x74\x72\165\171\40\x63\xe1\272\255\160\x20\104\141\x73\x68\142\x6f\141\162\144\x20\x2d\x3e\40\x44\141\x6e\150\x20\x73\303\241\143\x68\x20\160\150\151\155\40\x2d\x3e\40\105\160\151\163\x6f\144\145\x20\124\171\160\145\x73\74\x2f\x64\151\x76\76"; goto ESajb; JyHJE: xaxDz: goto J9tcx; G8FJZ: $this->haun_detect_embed(["\160\x6f\163\x74\x5f\151\144" => $post_id, "\x6c\151\x6e\153" => $haun_type_filter->link, "\163\165\142\164\x69\164\x6c\x65" => $haun_type_filter->subtitle, "\163\165\x62\x6c\141\142\145\154" => $haun_type_filter->sublabel, "\x63\x75\163\x74\157\155\x5f\166\141\x72" => $custom_var]); goto b3u4J; HLchg: FrX7Q: goto AGTLr; D2C2H: $sources = $this->haun_detect_server($haun_custom_player_types->link, $post_id)->sources; goto YKq9R; eypif: bMrMz: goto SJlen; OPZZM: $sources = $haun_custom_player_types->sources; goto MoJ1H; Cyp97: goto mJYfI; goto pFcm9; fTWKA: aYTIE: goto eypif; l91Ns: $sources = $haun_type_filter->sources; goto bVwlj; EUNdK: T_7nP: goto xCQOK; xDhUY: if ($haun_type_filter->type == "\x6a\x77\160\x6c\x61\171\145\x72") { goto eOedj; } goto O5T2A; xNdJF: if ($haun_custom_player_types->episode_type == "\x6d\160\64") { goto hZI_O; } goto GZlyA; KbyLf: wojvw: goto G8FJZ; FbdsG: $haun_custom_player_types = apply_filters("\150\x61\165\156\137\x63\x75\x73\x74\x6f\x6d\137\160\x6c\x61\x79\x65\162\x5f\x74\171\160\x65\163", (object) ["\160\x6f\163\164\137\151\144" => $post_id, "\154\x69\x6e\x6b" => $episode_link, "\x65\160\151\163\x6f\144\x65\x5f\164\171\x70\x65" => $episode_type, "\160\x6c\x61\171\145\162\137\164\171\x70\145" => '', "\x73\x75\x62\164\151\x74\x6c\x65" => $list_sub, "\x73\165\142\154\141\142\145\x6c" => $list_sub_label, "\163\157\165\x72\143\145\x73" => '', "\143\165\163\x74\157\x6d\x5f\166\x61\162" => $custom_var]); goto gaNJU; q_JYg: if (has_filter("\x68\x61\165\156\x5f\x63\x75\163\x74\157\x6d\x5f\x70\154\x61\171\x65\162\137\164\171\160\x65\163")) { goto ko5xR; } goto hVLn4; SJlen: jDYgn: goto hYy6G; lepFA: goto CzcXL; goto q3sVQ; x6MG2: $haun_type_filter = apply_filters("\x68\141\165\156\137\x74\171\160\x65\137\x66\x69\154\x74\x65\162", $array_filter); goto pRs7O; fhG5x: v1onG: goto lepFA; Uh6HC: goto BhpeI; goto EUNdK; J9tcx: goto UupL0; goto WvU89; yiRHy: if ($haun_custom_player_types->player_type == "\x63\x75\163\164\157\155\x5f\x70\x6c\141\x79\x65\x72") { goto sCDJW; } goto cltmZ; MFx25: yhlkN: goto OPZZM; T6WwD: UupL0: goto ooySk; bVwlj: $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_type_filter->link); goto KPFv7; o0HJW: $array_filter = (object) ["\160\157\x73\164\137\151\x64" => $post_id, "\154\x69\156\x6b" => $episode_link, "\164\x79\160\x65" => $episode_type, "\x73\165\x62\x74\151\x74\154\x65" => $list_sub, "\163\x75\x62\154\x61\x62\145\154" => $list_sub_label, "\163\x6f\x75\162\x63\145\163" => '', "\x63\x75\x73\164\x6f\x6d\137\166\x61\x72" => $custom_var]; goto x6MG2; kcVHR: echo "\x3c\x64\x69\x76\x20\143\x6c\x61\163\163\x3d\x22\141\154\x65\x72\164\x20\x61\x6c\x65\162\164\x2d\144\x61\x6e\147\x65\162\40\164\145\x78\x74\x2d\143\x65\156\x74\x65\x72\x22\x20\x72\x6f\x6c\x65\75\42\x61\x6c\145\x72\x74\x22\76\x42\151\341\272\277\x6e\40\x3c\x63\x6f\x64\145\x3e\173\44\144\141\x74\141\55\76\x70\154\x61\x79\145\x72\137\164\x79\x70\145\175\74\57\143\x6f\144\145\76\40\143\x68\xc6\260\x61\x20\304\221\306\260\xe1\xbb\243\x63\40\153\x68\141\x69\x20\142\xc3\xa1\157\40\x68\x6f\341\xba\xb7\x63\x20\105\x70\x69\163\x6f\144\x65\40\x54\x79\160\x65\40\x3c\163\x74\162\x6f\156\147\x3e" . $haun_custom_player_types->episode_type . "\74\57\x73\x74\x72\157\x6e\147\x3e\40\143\x68\306\260\141\40\xc4\221\306\260\341\xbb\243\143\x20\x68\341\273\x97\x20\x74\162\xe1\273\243\41\74\142\x72\76\x20\304\x90\341\xbb\x83\40\164\xe1\272\241\157\x20\145\x70\151\x73\x6f\144\x65\40\164\x79\160\145\x20\155\xe1\xbb\x9b\x69\x2c\x20\166\x75\151\x20\x6c\xc3\262\x6e\147\x20\164\162\165\171\40\143\341\272\255\160\40\x44\x61\163\x68\142\157\141\162\144\40\x2d\x3e\x20\104\x61\x6e\150\x20\x73\xc3\241\x63\x68\40\x70\150\151\155\40\x2d\76\40\x45\160\151\163\157\x64\x65\40\x54\x79\160\145\x73\x3c\x2f\x64\151\x76\x3e"; goto ARvxp; XCF72: ko5xR: goto FbdsG; CjOqV: Xoqkr: goto KD6E8; MfPxn: goto aYTIE; goto Owzii; WZHvn: goto F0WEn; goto PRiNm; i8XCG: $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_type_filter->link); goto uZ_Et; LvNwF: do_action("\150\x61\x75\156\137\x63\x75\x73\x74\x6f\155\137\x74\171\x70\145\137\x66\151\x6c\x74\145\x72\x5f\x73\x6f\165\162\x63\145\163", $array_filter); goto JymZ2; dNUvf: if ($haun_type_filter->type == "\145\155\x62\145\144") { goto KA0V_; } goto WQyTm; VL3fF: if ($episode_type == "\155\160\x34") { goto c6iQy; } goto vZ36p; ofqei: $result[] = ["\x66\151\154\x65" => $episode_link, "\154\x61\x62\x65\x6c" => "\110\x44", "\164\x79\160\x65" => "\166\151\144\145\157\x2f\x6d\160\x34"]; goto ICbnz; gaNJU: if ($haun_custom_player_types->player_type == "\x63\x75\163\x74\157\x6d\137\x61\160\x69") { goto yhlkN; } goto OYo77; w15TD: $sources = json_encode($result); goto VfbXL; Qukd6: goto jDYgn; goto CjOqV; EG8y_: WyFYM: goto q_VSJ; q3sVQ: sCDJW: goto QmvjS; L8dK5: $sources = $haun_type_filter->sources; goto i8XCG; oCwyg: $haun_type_filter = apply_filters("\x68\x61\165\156\x5f\164\x79\160\x65\x5f\146\x69\x6c\x74\145\x72", $array_filter); goto uqVGG; Owzii: KA0V_: goto QWBYq; xidRK: goto Mi2Ay; goto KbyLf; thpZh: echo $haun_custom_player_types->sources; goto foZi1; YKq9R: $this->haunBuildPlayer($post_id, $sources, $tracks, $haun_custom_player_types->link); goto Cyp97; Y1R6v: $this->haunBuildPlayer($post_id, $sources, $tracks, $episode_link); goto JCwTQ; pFcm9: QWj7b: goto UBLFq; b3u4J: Mi2Ay: goto qMCr8; ZBBRS: BhpeI: goto b_7e5; AyP2h: uv23Z: goto hS8v6; W9a8Y: qr_GV: goto AVkQb; berxJ: ROcMy: goto Qukd6; OYo77: if ($haun_custom_player_types->player_type == "\143\165\163\164\x6f\155\137\151\146\x72\141\155\x65") { goto z8ehD; } goto yiRHy; ESajb: goto WyFYM; goto HLchg; pRs7O: if (has_filter("\x68\x61\x75\x6e\x5f\164\171\x70\145\x5f\146\151\154\164\145\x72")) { goto QWj7b; } goto D2C2H; WvU89: hZI_O: goto aOZk8; qMCr8: mJYfI: goto fhG5x; QmvjS: if (!$haun_custom_player_types->sources) { goto SYOlN; } goto thpZh; O5T2A: do_action("\x68\x61\165\156\x5f\143\165\163\x74\x6f\155\137\x74\x79\160\145\x5f\146\x69\x6c\164\x65\162\x5f\163\157\165\162\143\x65\163", $array_filter); goto WZHvn; T2vDX: c6iQy: goto ofqei; vZ36p: if ($episode_type == "\x65\x6d\142\145\x64") { goto FrX7Q; } goto xb1dr; ICbnz: $sources = json_encode($result); goto wEhrl; t97OD: } public function encryptData($data) { goto gA877; gA877: $key = substr(hash("\x73\x68\141\62\x35\x36", "\x54\x68\x65\121\165\x69\x63\153\102\162\x6f\x77\x6e\x46\157\170\x57\141\163\112\165\x6d\160\151\156\147"), 0, 32); goto NMpEp; NMpEp: $iv = substr(hash("\x73\150\141\62\x35\x36", "\x34\146\60\61\x62\145\144\x65\71\62\x32\x31\x35\x38\x36\x63"), 0, 16); goto dtU83; dtU83: $encrypted = openssl_encrypt($data, "\141\x65\163\x2d\62\65\66\x2d\143\142\x63", $key, 0, $iv); goto r2o5Z; r2o5Z: return $encrypted; goto Ebdy_; Ebdy_: } public function haunBuildPlayer($post_id, $sources = null, $tracks = array(), $link = '') { goto bFWZH; iJaOH: wp_send_json_success(["\x65\x6e\143\x72\x79\x70\x74\x65\144\123\157\165\x72\143\x65\163" => $this->encryptData($sources), "\x72\145\x73\165\155\145\111\x64" => md5($sources), "\164\x72\141\143\x6b\x73" => $tracks]); goto bDtTQ; bFWZH: $sources = $sources == "\133\135" || $sources == '' || $sources == "\156\165\154\154" || !json_decode($sources)[0]->file ? "\x5b\173\40\146\151\x6c\145\x3a\x20\42\57\57\143\157\156\164\x65\x6e\164\x2e\x6a\x77\160\154\141\164\x66\157\x72\x6d\56\143\157\155\x2f\166\151\144\145\x6f\x73\57\x6e\x6f\x74\55\141\x2d\162\145\141\x6c\55\x76\x69\x64\x65\x6f\55\x66\x69\154\x65\x2e\x6d\160\x34\x22\54\x20\x6c\141\x62\145\x6c\72\40\42\67\62\x30\160\x22\x2c\40\164\171\160\x65\x3a\40\42\x76\x69\144\x65\x6f\57\155\x70\x34\x22\175\135" : $sources; goto S0GnD; S0GnD: do_action("\x68\x61\x75\156\x5f\x70\154\141\x79\145\162\137\x69\156\x73\x74\141\156\143\x65", (object) ["\x70\x6f\x73\x74\137\x69\x64" => $post_id, "\154\x69\156\x6b" => $link]); goto iJaOH; bDtTQ: } public function haunBuildPlayerShotcode($attr) { $args = shortcode_atts(array("\x6c\151\x6e\x6b" => "\x23", "\160\157\x73\x74\137\151\x64" => get_the_ID(), "\x73\157\165\162\143\145\163" => '', "\164\162\141\x63\153\163" => "\x5b\135"), $attr); $this->haunBuildPlayer($args["\160\157\163\x74\x5f\151\144"], HauNCrypt::decrypt($args["\x73\157\165\x72\143\x65\163"]), $args["\x74\x72\141\x63\x6b\x73"], $args["\x6c\151\156\153"]); } }
