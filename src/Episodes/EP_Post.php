<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\Episodes; use HNMG\Episodes\EP_Helper; use HNMG\EP_Load\EP_List; class EP_Post { public function __construct() { $this->helper = new EP_Helper(); $this->list = new EP_List(); } public function register() { goto bMpIg; onOL_: add_action("\x6d\x61\x6e\141\147\x65\137\x70\x6f\x73\x74\x5f\160\157\163\164\x73\x5f\143\157\154\165\155\x6e\163", [$this, "\x68\156\163\x65\164\137\160\x6f\163\x74\137\x63\x6f\x6c\x75\x6d\x6e\x73"]); goto oEXKa; WU9Ba: add_filter("\160\x61\162\x73\145\137\x71\x75\x65\x72\x79", [$this, "\150\156\143\x6f\162\x65\x5f\161\165\145\x72\x79\137\146\x69\x6c\164\145\162\x5f\160\157\163\x74\163\x5f\142\171\x5f\x70\x61\x72\164\x6e\145\x72\137\x69\144"], 10); goto Ct9gn; oEXKa: add_action("\x6d\141\156\x61\x67\x65\137\160\157\x73\164\x5f\160\157\163\164\x73\137\143\x75\x73\164\157\x6d\x5f\x63\157\154\x75\x6d\156", [$this, "\x68\156\x63\x6f\x6c\165\x6d\x6e\163\137\143\157\156\x74\145\x6e\x74"], 10, 2); goto WU9Ba; Ct9gn: add_action("\x72\145\x73\164\162\151\143\164\x5f\x6d\141\156\141\x67\x65\x5f\x70\x6f\x73\x74\163", [$this, "\x68\156\x63\x6f\x72\145\x5f\x61\x64\155\151\156\x5f\x70\157\163\164\137\146\x69\x6c\164\145\x72\151\x6e\147\x5f\142\x79\x5f\160\141\x72\164\x6e\145\x72\137\x69\x64"], 10); goto P6Mkp; bMpIg: add_action("\163\141\x76\x65\137\160\157\163\164", [$this, "\x68\x6e\163\x61\x76\145\137\x63\x75\163\x74\157\155\137\x70\x6f\163\x74\155\145\x74\141"]); goto onOL_; P6Mkp: } public function hncore_admin_post_filtering_by_partner_id() { goto I7QqR; WgqZw: echo "\74\163\x65\154\x65\x63\164\x20\151\x64\75\x22\160\x61\162\164\156\x65\x72\x22\40\x6e\x61\155\145\x3d\42\160\x61\x72\164\156\x65\162\x22\x3e"; goto fQxyz; vpcvw: $request_partner = isset($_REQUEST["\x70\141\x72\x74\x6e\x65\x72"]) ? sanitize_meta("\160\141\x72\164\x6e\x65\162", wp_unslash($_REQUEST["\x70\141\x72\164\x6e\145\x72"]), "\x70\157\x73\164") : "\x30"; goto WgqZw; nilBc: if (!empty($partners)) { goto OxCGQ; } goto lib9H; F98gx: if (is_array($partners)) { goto DUd9_; } goto nBuwt; tG35n: wp_verify_nonce("\x5f\x77\x70\156\x6f\156\x63\x65"); goto vpcvw; fQxyz: echo "\74\x6f\x70\164\x69\157\x6e\40\166\141\x6c\x75\x65\75\42\60\x22\40" . ("\x30" === $request_partner ? "\x73\145\x6c\x65\143\164\x65\x64" : '') . "\x3e" . esc_html__("\101\x6c\x6c\x20\x50\x61\162\164\x6e\x65\x72\163", "\x68\156\155\147\x65\160\x69\163") . "\x20\74\57\157\x70\164\x69\157\x6e\x3e"; goto JJDYt; nBuwt: return; goto naZNR; naZNR: DUd9_: goto X6e2q; ROsQW: OxCGQ: goto tG35n; lib9H: return; goto ROsQW; BfP9f: echo "\x3c\57\163\x65\154\145\x63\164\x3e"; goto sALAv; JJDYt: foreach ($partners as $partner) { goto Bm2X5; o91YI: echo "\74\x6f\160\x74\151\157\156\40\166\x61\x6c\x75\145\75\x22" . esc_attr($partner["\151\x64"]) . "\42" . esc_attr($selected) . "\76" . esc_html($partner["\x6e\x61\x6d\145"]) . "\x20\74\x2f\157\160\164\151\x6f\x6e\76"; goto eTpVO; eTpVO: Cv3j7: goto WmeGr; Bm2X5: $selected = $request_partner === $partner["\151\x64"] ? "\x20\x73\x65\x6c\x65\143\x74\x65\x64\75\x22\x73\x65\154\145\x63\x74\145\144\42" : ''; goto o91YI; WmeGr: } goto EF2Cg; EF2Cg: PLBg5: goto BfP9f; X6e2q: $partners = array_filter($partners, function ($partner) { return is_array($partner) && isset($partner["\x69\144"]) && isset($partner["\x6e\141\x6d\145"]); }); goto nilBc; I7QqR: $partners = apply_filters("\150\x6e\x63\157\x72\145\x5f\x61\x64\x6d\151\156\137\x70\157\x73\164\x5f\x66\151\154\164\145\x72\x69\x6e\x67\x5f\x70\141\x72\x74\x6e\x65\162\163", array()); goto F98gx; sALAv: } public function hncore_query_filter_posts_by_partner_id($query) { goto f4zMA; w6iQz: return $query; goto cgena; F5uWH: return $query; goto dxA_M; i32zs: return $query; goto L3HMk; G0qU6: $query->query_vars["\x6d\145\x74\141\137\153\x65\171"] = "\160\141\x72\x74\x6e\145\x72"; goto Hmu8P; Hmu8P: $query->query_vars["\155\145\164\141\x5f\166\x61\x6c\x75\145"] = $partner_id; goto rMAy6; Y3plg: if (isset($_REQUEST["\x70\x61\162\164\x6e\x65\162"])) { goto JjQF0; } goto w6iQz; cgena: JjQF0: goto vfxNu; dxA_M: kwjlE: goto OUcce; f4zMA: if (is_admin() && $query->is_main_query()) { goto kwjlE; } goto F5uWH; ikNem: if (!("\60" === $partner_id)) { goto Q0GV0; } goto i32zs; vfxNu: $partner_id = sanitize_meta("\160\141\x72\164\x6e\145\162", wp_unslash($_REQUEST["\160\x61\x72\164\x6e\145\162"]), "\160\157\x73\x74"); goto ikNem; rMAy6: return $query; goto hzIM3; OUcce: wp_verify_nonce("\137\x77\x70\156\x6f\156\x63\145"); goto Y3plg; L3HMk: Q0GV0: goto G0qU6; hzIM3: } public function hnset_post_columns($columns) { return array("\143\x62" => "\x3c\151\156\160\165\x74\40\x74\x79\160\x65\x3d\x22\143\x68\x65\143\153\142\157\x78\x22\x20\x2f\x3e", "\x68\x6e\155\x6f\x76\x69\x65\163\x2d\164\151\164\154\145" => __("\124\x69\x74\x6c\x65", "\150\x6e\x6d\147\x65\160\151\x73"), "\150\x6e\155\x6f\166\x69\x65\x73\x5f\x69\x6d\x61\x67\x65\163" => __("\124\150\165\x6d\x62\163", "\x68\156\x6d\x67\145\x70\151\163"), "\150\156\155\x6f\166\x69\x65\x73\137\x64\x65\164\141\x69\x6c\x73" => __("\104\x65\x74\x61\x69\154\x73", "\x68\x6e\155\147\145\x70\151\x73"), "\143\141\164\x65\147\157\x72\x69\x65\x73" => __("\x43\141\164\145\147\157\x72\x69\145\x73", "\x68\156\x6d\147\145\x70\x69\x73"), "\x74\x61\170\157\x6e\157\x6d\171\x2d\141\x63\164\157\x72" => __("\101\x63\x74\x6f\162\x73", "\150\156\155\x67\145\160\x69\163"), "\x74\x61\x78\157\x6e\157\x6d\171\x2d\x64\151\x72\145\x63\x74\x6f\x72" => __("\x44\151\x72\x65\x63\x74\x6f\x72\163", "\150\156\155\147\145\x70\x69\163"), "\164\141\170\157\x6e\x6f\x6d\171\55" . get_taxonomy("\x72\145\x6c\x65\141\163\x65")->name => __("\x52\x65\x6c\145\x61\163\145", "\150\x6e\155\147\145\160\151\163"), "\x74\x61\x78\157\x6e\x6f\x6d\171\x2d" . get_taxonomy("\143\x6f\x75\156\164\162\171")->name => __("\103\x6f\165\156\x74\x72\171", "\150\x6e\155\x67\x65\x70\151\x73"), "\x74\141\147\x73" => __("\124\141\x67\x73", "\150\x6e\x6d\x67\145\160\151\x73"), "\x68\x6e\x6d\157\x76\x69\x65\x73\137\165\160\x64\x61\164\145\144" => __("\114\x61\163\164\x20\x55\160\x64\x61\164\x65", "\x68\156\155\x67\x65\160\151\163"), "\x68\156\155\x6f\166\151\145\x73\137\141\x63\x74\x69\x6f\156" => __("\x45\160\151\163\x6f\x64\145\163", "\150\x6e\x6d\x67\145\x70\x69\163")); } public function display_movie_image($post_id) { goto MFnMJ; XOi0h: $partner = get_haunmovies($post_id, "\x5f\x70\141\x72\x74\x6e\x65\x72", true); goto SpuS0; h5xY0: $height = $image_size[1] ?? 0; goto V_pnC; E06NK: VreKD: goto fPyJ9; CSi_A: m5Izi: goto sWjpV; NhMRx: $image_class = "\x77\55\x5b\61\x30\60\x70\x78\135\40\x68\55\x5b\x31\x33\60\x70\x78\x5d"; goto fQXn2; UNmcW: $partner_class = $width > $height ? "\x66\x6c\145\170\x20\x6a\x75\163\164\x69\146\x79\x2d\143\145\156\x74\x65\x72\x20\x69\x74\x65\155\163\55\x63\145\156\164\x65\x72" : "\164\x65\x78\x74\55\143\145\156\x74\x65\162"; goto CSi_A; SpuS0: $urlpartner = get_template_directory_uri() . "\57\166\x65\x6e\x64\157\x72\x2f\x68\x6e\143\157\x72\145\57\150\x6e\x6d\x67\145\x70\x69\x73\x2f\162\145\163\157\x75\x72\x63\x65\x73\57\x61\163\163\145\x74\163\57\151\x6d\141\x67\145\163\x2f\160\141\162\x74\156\145\x72\x73"; goto ffiWm; ffiWm: $partner_imgurl = $partner !== '' ? apply_filters("\x68\x6e\x63\x6f\162\145\x5f\160\x61\162\x74\x6e\145\162\137\151\155\x67\137\165\x72\154", $urlpartner . "\x2f" . $partner . "\x2e\x6a\160\x67", $partner) : $urlpartner . "\x2f\x75\x6e\x6b\x6e\157\167\x6e\56\152\160\x67"; goto M7Cki; M7Cki: if ($this->is_image_exists($image_url)) { goto VreKD; } goto NhMRx; V_pnC: $image_class = $width > $height ? "\x77\x2d\x5b\61\x32\x30\160\x78\x5d\x20\150\x2d\x5b\70\x30\x70\170\x5d" : "\167\x2d\133\x31\x30\x30\x70\x78\135\x20\150\55\x5b\x31\63\60\160\x78\135"; goto UNmcW; GT_SU: $width = $image_size[0] ?? 0; goto h5xY0; X9qoI: echo "\x3c\144\151\166\40\x63\x6c\x61\163\x73\75\42" . $partner_class . "\42\x3e\12\11\11\x9\x3c\x69\x6d\147\x20\163\162\x63\75\x22" . $partner_imgurl . "\x22\x20\x61\154\x74\75\42" . $partner . "\42\x20\167\x69\x64\164\150\x3d\42\x39\65\x22\x20\x68\x65\151\x67\150\164\75\42\x33\61\42\x20\x73\x74\x79\154\x65\75\42\x77\x69\x64\164\x68\72\x20\61\60\x30\x25\x3b\x20\x68\x65\151\x67\150\164\x3a\x20\x61\x75\x74\157\x3b\x20\x6d\x61\x78\55\x77\151\x64\x74\150\x3a\x20\71\x35\x70\170\x3b\x22\40\x2f\x3e\xa\11\x9\74\57\x64\x69\x76\76"; goto g_Oth; fKqzc: goto m5Izi; goto E06NK; fQXn2: $partner_class = "\164\145\x78\x74\x2d\x63\145\156\x74\x65\x72"; goto fKqzc; sWjpV: echo "\74\144\x69\x76\40\143\154\x61\163\163\75\x22\162\145\x6c\141\164\151\166\145\40" . $image_class . "\40\164\x65\x78\x74\55\x63\x65\156\x74\145\x72\40\x72\157\x75\156\x64\x65\x64\55\x6c\x67\x20\163\150\141\x64\157\x77\x2d\x6c\147\42\x3e\12\x9\x9\x9\x3c\x69\x6d\147\40\163\x72\x63\75\x22" . esc_url($image_url) . "\42\x20\143\154\x61\163\163\75\42\x77\55\146\x75\154\154\x20\x68\x2d\x66\165\x6c\x6c\40\162\157\165\156\144\x65\x64\55\154\x67\x22\40\x2f\x3e\12\x9\x9\11\74\x64\x69\166\x20\143\154\x61\x73\163\x3d\42\x61\x62\x73\157\x6c\x75\x74\x65\40\x74\145\x78\x74\x2d\x5b\61\61\160\x78\x5d\x20\x66\157\x6e\x74\55\x62\157\x6c\x64\40\164\145\x78\x74\x2d\x77\x68\151\x74\145\x20\x62\147\55\x72\145\144\55\x35\60\x30\x20\160\170\x2d\x32\40\162\157\x75\x6e\144\145\x64\55\142\154\55\154\x67\40\x72\x6f\165\156\x64\145\144\55\x74\162\x2d\x6c\147\40\x74\x6f\160\55\60\x20\x65\156\x64\x2d\x30\x22\76\xa\x9\11\x9\11" . $this->list->hnshow_views($post_id) . "\x20" . __("\166\151\145\x77", "\150\x6e\155\147\x65\x70\x69\163") . "\12\x9\x9\x9\74\x2f\x64\x69\x76\x3e\74\x2f\x64\151\x76\x3e"; goto X9qoI; MFnMJ: $image_url = $this->list->hnimage_display("\155\157\x76\151\145\55\164\150\x75\155\x62"); goto XOi0h; fPyJ9: $image_size = getimagesize($image_url); goto GT_SU; g_Oth: } public function is_image_exists($url) { $headers = @get_headers($url); return is_array($headers) && strpos($headers[0], "\62\60\x30") !== false; } public function hncolumns_content($column_name, $post_id) { goto aFJv_; wwjNa: $check = !empty($meta["\x68\141\x75\156\x5f\x6d\x6f\166\x69\x65\137\x73\x74\x61\164\165\x73"]) ? $this->helper->hnshow_status($meta["\x68\x61\165\156\x5f\x6d\x6f\x76\x69\145\137\163\x74\x61\x74\165\x73"]) : ''; goto ZqJkX; ZqJkX: echo "\x3c\x64\x69\166\40\143\x6c\x61\x73\x73\75\x22\x72\x65\154\x61\x74\151\166\145\x20\146\x6c\145\170\40\146\154\145\170\55\167\162\x61\160\40\x67\141\160\x2d\x70\x78\42\x3e" . $episode . $quality . $formality . $check . "\x3c\57\144\x69\166\x3e"; goto Utp63; RruVS: YYWy4: goto pgx1C; e1T5v: $this->display_movie_image($post_id); goto wxabw; lyhlk: echo "\x3c\x64\151\x76\x20\143\154\x61\163\x73\75\42\164\145\x78\164\x2d\x63\x65\156\x74\x65\x72\x22\76" . get_the_modified_date(get_option("\x64\x61\164\145\x5f\146\x6f\162\x6d\141\164"), $post_id) . "\x3c\57\x64\151\166\76"; goto FDi9C; J_T2u: if (!($column_name == "\x68\156\155\157\x76\x69\145\163\x2d\x74\151\x74\154\x65")) { goto KRloN; } goto cTUQS; uhCt0: if (!($column_name == "\150\x6e\155\157\x76\x69\x65\x73\137\165\x70\144\x61\164\145\x64")) { goto s3khA; } goto lyhlk; aFJv_: $meta = get_haunmovies($post_id, HNMG_META, true); goto T35iB; ZSiU2: echo "\x3c\x61\x20\143\154\141\x73\163\75\42\145\x64\151\164\x2d\x70\x6f\x73\164\x2d\154\x69\x6e\153\42\40\150\162\145\146\x3d\x22" . get_edit_post_link($post_id) . "\x22\x3e" . get_the_title() . "\x20\x3c\x2f\x61\x3e\x20" . $org_title; goto N_EeZ; heqPQ: if (!($column_name == "\x68\156\x6d\x6f\166\x69\x65\163\137\141\x63\x74\x69\157\x6e")) { goto YYWy4; } goto rtMap; FDi9C: s3khA: goto J_T2u; wxabw: pzLHI: goto UqBU3; b3Yro: $episode = !empty($meta["\150\141\x75\x6e\137\x65\x70\x69\163\157\144\x65"]) ? "\x3c\142\165\x74\x74\157\x6e\x20\x74\171\160\145\x3d\42\x62\165\164\164\157\x6e\42\40\143\154\x61\163\163\x3d\42\x70\x79\x2d\61\40\x70\x78\55\63\40\155\171\x2d\60\56\65\40\x62\x67\55\141\155\x62\x65\x72\55\65\x30\x30\40\164\x65\x78\x74\55\x77\x68\x69\164\x65\40\164\145\170\164\55\x78\163\x20\x66\157\x6e\x74\x2d\163\x65\155\151\142\157\x6c\144\x20\x72\x6f\x75\156\x64\145\144\55\146\165\154\x6c\x20\163\150\x61\144\x6f\x77\55\x61\155\142\x65\x72\55\x35\60\60\x2f\x35\60\40\x66\x6f\x63\165\163\x3a\x6f\165\164\x6c\x69\156\145\55\156\x6f\x6e\145\x22\76" . $meta["\x68\x61\x75\x6e\137\145\160\151\163\157\x64\145"] . "\74\57\142\165\x74\164\x6f\156\x3e" : ''; goto gEXg6; UqBU3: if (!($column_name == "\x68\156\155\x6f\x76\x69\x65\x73\137\x64\x65\164\141\x69\154\x73")) { goto WejQX; } goto aEeo4; cTUQS: $org_title = isset($meta["\x68\x61\x75\x6e\x5f\157\x72\x69\147\x69\156\x61\x6c\x5f\164\x69\x74\154\x65"]) && $meta["\x68\141\165\156\x5f\x6f\x72\151\147\x69\x6e\x61\x6c\137\164\151\164\x6c\145"] != '' ? "\x3c\163\x70\141\x6e\x20\x63\154\x61\163\x73\75\x22\157\x72\x67\137\164\151\x74\154\145\42\x3e\x28" . $meta["\x68\x61\x75\156\137\x6f\162\151\147\151\x6e\141\154\x5f\164\151\164\154\x65"] . "\x29\74\x2f\163\x70\x61\156\x3e" : ''; goto ZSiU2; T35iB: if (!($column_name == "\150\x6e\155\x6f\166\x69\x65\163\x5f\151\155\141\147\x65\x73")) { goto pzLHI; } goto e1T5v; aEeo4: $quality = !empty($meta["\150\x61\165\x6e\137\161\x75\x61\154\x69\164\171"]) ? "\74\x62\x75\x74\164\x6f\156\40\164\x79\160\x65\x3d\x22\x62\x75\164\164\157\x6e\42\40\143\154\141\x73\x73\x3d\x22\x70\171\x2d\61\x20\x70\x78\x2d\63\40\x6d\171\x2d\60\56\65\x20\142\147\x2d\x72\157\163\x65\55\70\60\60\40\x74\x65\170\164\55\x77\x68\151\x74\145\40\x74\x65\x78\164\55\x78\163\40\146\x6f\156\164\x2d\x73\145\x6d\x69\x62\157\154\x64\x20\x72\x6f\x75\156\144\x65\x64\x2d\x66\165\x6c\154\40\x73\150\x61\x64\157\167\x2d\162\x6f\163\x65\55\x35\x30\x30\x2f\65\60\x20\x66\x6f\x63\165\163\72\x6f\165\x74\x6c\151\x6e\x65\x2d\x6e\157\156\145\x22\x3e" . $meta["\150\x61\165\156\x5f\161\x75\141\x6c\151\x74\171"] . "\74\x2f\x62\x75\164\164\x6f\x6e\x3e" : ''; goto b3Yro; gEXg6: $total = !empty($meta["\150\x61\x75\156\x5f\x74\157\164\141\154\137\145\160\x69\163\x6f\144\x65"]) ? $meta["\x68\141\165\156\137\x74\157\164\x61\154\137\x65\160\x69\163\157\144\x65"] : "\60"; goto iuJAi; Utp63: WejQX: goto uhCt0; N_EeZ: KRloN: goto heqPQ; rtMap: echo "\x3c\141\x20\143\x6c\141\x73\x73\x3d\x22\x65\x64\151\164\105\x50\x53\42\x20\150\162\x65\x66\x3d\x22" . admin_url("\141\x64\x6d\x69\156\56\160\150\160\77\160\141\147\x65\x3d\x68\x6e\x6d\147\55\145\x70\x69\163\x6f\144\145\x26\x61\143\164\x3d\x65\x64\x69\164\137\x65\160\46\x70\157\x73\x74\137\151\x64\75" . $post_id) . "\x22\40\164\x61\x72\x67\x65\x74\75\42\137\x62\x6c\141\156\153\42\40\x63\x6c\141\x73\163\x3d\42\164\145\x78\164\x2d\x63\145\x6e\164\x65\162\42\x3e\12\11\x9\x9\x9\74\x62\165\164\x74\157\156\40\x61\162\x69\141\55\x6c\141\x62\145\154\75\42\143\x72\145\141\x74\145\40\163\x6f\155\x65\164\x68\151\x6e\x67\x20\145\160\151\143\x22\40\x74\171\x70\145\75\x22\142\x75\x74\x74\x6f\x6e\42\40\143\154\x61\163\163\75\42\x63\165\x72\163\157\x72\x2d\x70\x6f\151\156\x74\x65\x72\40\x69\x6e\x6c\x69\156\x65\55\146\x6c\145\x78\40\x6a\x75\163\x74\151\146\171\55\143\x65\x6e\164\x65\162\x20\x69\x74\145\155\x73\x2d\x63\x65\x6e\164\145\x72\x20\x61\x73\x70\145\143\164\x2d\163\x71\x75\141\162\x65\40\167\x68\x69\x74\145\x73\x70\x61\143\145\55\156\x6f\167\162\141\160\40\x72\x6f\165\156\144\145\x64\x2d\146\165\154\x6c\x20\142\147\x2d\163\153\x79\x2d\65\x30\60\x20\x70\x2d\x32\40\x74\145\170\x74\55\170\x73\40\146\157\x6e\164\55\155\145\x64\151\165\155\40\164\x72\141\143\153\151\x6e\147\x2d\167\151\x64\x65\40\x74\145\x78\x74\x2d\167\x68\151\x74\145\40\164\162\x61\x6e\x73\x69\x74\151\x6f\156\x20\x68\x6f\166\145\162\72\x6f\x70\x61\143\151\x74\171\55\x37\x35\x20\164\145\170\164\55\143\x65\156\164\x65\162\40\x66\x6f\143\165\163\x2d\x76\151\163\151\142\x6c\145\x3a\x6f\165\x74\x6c\151\156\145\x20\x66\157\143\165\163\x2d\166\x69\163\x69\x62\x6c\x65\72\157\x75\164\154\x69\x6e\x65\x2d\x32\40\x66\157\x63\x75\163\55\x76\151\163\x69\x62\x6c\145\x3a\x6f\165\x74\154\x69\x6e\x65\55\x6f\146\146\163\145\x74\55\62\x20\146\157\143\165\163\55\166\x69\163\x69\142\x6c\x65\x3a\157\x75\164\154\151\x6e\145\x2d\x73\153\x79\x2d\65\x30\60\40\141\x63\x74\x69\166\x65\72\157\x70\141\x63\151\x74\171\x2d\61\x30\60\40\141\143\x74\x69\166\145\72\157\165\x74\x6c\x69\x6e\x65\x2d\157\x66\x66\163\x65\x74\55\x30\40\x64\151\x73\141\x62\x6c\145\144\72\157\x70\x61\143\x69\x74\171\55\67\65\x20\x64\x69\163\x61\142\x6c\145\144\72\143\165\162\x73\157\162\55\156\x6f\164\55\141\154\x6c\x6f\x77\145\x64\40\144\141\x72\x6b\x3a\x62\x67\55\x73\x6b\171\55\x35\x30\x30\40\144\x61\x72\153\x3a\x74\x65\170\x74\x2d\x77\x68\x69\164\145\x20\x64\141\x72\x6b\72\146\x6f\143\165\x73\x2d\166\x69\x73\x69\x62\x6c\x65\x3a\x6f\165\x74\x6c\x69\x6e\145\x2d\163\153\x79\55\65\60\x30\x22\76\xa\11\x9\x9\11\11\x3c\x73\x76\x67\40\170\155\154\156\x73\75\42\150\164\x74\160\72\57\x2f\167\167\x77\56\167\63\56\x6f\x72\147\x2f\62\60\x30\x30\57\x73\166\147\x22\40\166\x69\x65\167\102\157\170\75\42\x30\x20\60\x20\61\66\40\x31\66\x22\x20\146\151\154\x6c\75\x22\143\165\x72\162\145\x6e\164\x43\x6f\x6c\157\x72\42\x20\143\x6c\x61\163\x73\x3d\x22\163\x69\x7a\x65\x2d\x34\42\x3e\12\x9\11\11\11\11\x9\x3c\160\x61\164\x68\x20\144\x3d\x22\115\61\x33\56\x34\70\x38\x20\x32\56\65\61\x33\141\61\56\x37\x35\40\61\56\67\65\40\60\40\60\40\x30\55\x32\56\x34\x37\65\40\60\x4c\66\56\x37\65\x20\x36\56\x37\67\x34\141\x32\56\x37\x35\x20\x32\56\x37\65\40\x30\40\x30\40\x30\x2d\x2e\65\71\66\x2e\70\71\62\154\x2d\x2e\70\x34\x38\40\x32\x2e\x30\64\x37\141\x2e\67\65\x2e\67\65\x20\x30\40\60\40\x30\x20\x2e\x39\x38\x2e\71\70\x6c\x32\56\x30\64\x37\55\56\70\64\x38\141\62\56\67\65\x20\x32\56\x37\65\40\x30\40\60\40\60\x20\56\70\71\x32\55\56\65\x39\66\x6c\x34\56\x32\x36\61\55\x34\x2e\62\x36\x32\x61\x31\56\67\x35\x20\x31\x2e\67\x35\40\x30\40\60\40\60\x20\60\55\x32\x2e\x34\67\x34\132\x22\40\57\76\12\x9\x9\x9\11\x9\x9\74\x70\x61\164\150\40\144\x3d\x22\115\x34\56\67\x35\x20\63\x2e\x35\x63\55\x2e\66\71\40\60\x2d\61\x2e\x32\x35\x2e\65\66\55\x31\x2e\x32\65\x20\x31\56\62\x35\x76\x36\56\x35\143\x30\x20\56\x36\x39\x2e\x35\x36\40\61\56\62\65\40\x31\56\x32\65\40\61\56\62\x35\x68\x36\56\x35\143\x2e\x36\x39\x20\60\40\x31\56\x32\x35\x2d\x2e\x35\x36\40\x31\56\62\65\x2d\61\x2e\x32\x35\x56\x39\x41\56\x37\65\x2e\x37\x35\x20\x30\x20\x30\40\61\40\x31\x34\40\x39\x76\62\x2e\62\x35\x41\x32\56\67\x35\x20\x32\x2e\x37\x35\40\x30\x20\60\x20\x31\x20\x31\61\56\62\65\x20\61\x34\150\55\x36\x2e\65\x41\62\x2e\x37\65\x20\x32\x2e\67\65\40\x30\x20\x30\40\61\40\62\40\x31\61\x2e\62\x35\x76\55\66\56\x35\101\x32\56\x37\x35\40\62\x2e\x37\x35\40\x30\x20\x30\x20\61\40\64\56\67\x35\40\x32\110\x37\141\x2e\67\x35\x2e\x37\x35\40\60\x20\60\x20\61\x20\x30\x20\61\x2e\65\x48\64\56\x37\x35\x5a\x22\x20\x2f\x3e\xa\x9\11\11\11\11\74\x2f\163\166\147\x3e\12\11\x9\x9\x9\74\57\x62\x75\x74\x74\x6f\156\76\12\x9\x9\x9\x3c\57\x61\76"; goto RruVS; iuJAi: $formality = !empty($meta["\150\141\165\x6e\137\x6d\x6f\x76\x69\x65\x5f\x66\x6f\x72\x6d\x61\x6c\x69\164\x79"]) ? $this->helper->hnshow_formality($meta["\150\x61\x75\x6e\x5f\155\x6f\x76\x69\145\137\146\157\x72\x6d\x61\x6c\x69\x74\x79"]) : ''; goto wwjNa; pgx1C: } public function hnsave_custom_postmeta($post_id) { goto S8bZo; lktBD: if (!isset($options["\150\141\x75\156\137\155\157\x76\151\x65\137\x73\164\x61\x74\165\163"])) { goto NXyDr; } goto kKa6n; QOzDI: pB9ig: goto adb_c; xbI94: hZU0n: goto fVHzW; wQ9kD: if (!isset($options["\150\x61\x75\156\137\141\144\x64\x5f\164\x6f\x5f\167\x69\144\x67\x65\x74"])) { goto hZU0n; } goto XbUGY; kKa6n: wp_set_object_terms($post_id, $options["\150\x61\165\156\137\x6d\157\x76\x69\145\x5f\163\x74\x61\164\x75\163"], "\x73\x74\x61\x74\165\163", false); goto DSvxL; KQY9W: set_post_format($post_id, $post_format); goto QOzDI; jkB31: tn2ox: goto I9elk; S8bZo: $currentScreen = get_current_screen(); goto zwNzG; zwNzG: if (!(@$currentScreen->id == "\x70\x6f\163\164")) { goto C7NNp; } goto tGExk; PqALX: $post_format = $this->list->get_post_format($options["\150\x61\165\x6e\137\x6d\157\x76\151\145\137\146\x6f\x72\155\141\154\151\164\x79"]); goto KQY9W; XbUGY: wp_set_object_terms($post_id, $options["\150\141\165\x6e\x5f\x61\144\x64\137\x74\157\137\167\151\x64\147\145\x74"], "\x70\157\163\164\137\157\160\x74\151\x6f\156\163", false); goto xbI94; fVHzW: if (!isset($options["\150\x61\165\156\137\155\x6f\166\x69\145\137\163\143\x68\145\x64\165\x6c\145"])) { goto tn2ox; } goto iKmuF; iKmuF: wp_set_object_terms($post_id, $options["\150\141\x75\156\x5f\x6d\157\x76\151\x65\137\x73\x63\150\145\144\x75\154\x65"], "\160\157\x73\x74\x5f\150\141\165\x6e", false); goto jkB31; I9elk: if (!isset($options["\x68\x61\165\156\x5f\155\157\x76\151\145\x5f\x66\x6f\162\x6d\141\x6c\151\164\x79"])) { goto pB9ig; } goto PqALX; tGExk: $options = isset($_POST[HNMG_META]) ? $_POST[HNMG_META] : ''; goto lktBD; adb_c: C7NNp: goto B0UEk; DSvxL: NXyDr: goto wQ9kD; B0UEk: } }
