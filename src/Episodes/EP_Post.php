<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\Episodes; use HNMG\Episodes\EP_Helper; class EP_Post { public function __construct() { $this->load = new EP_Helper(); } public function register() { goto RozNJ; FrxJs: add_action("\x6d\x61\x6e\141\147\145\x5f\x70\x6f\x73\164\137\x70\x6f\163\164\x73\137\x63\157\154\165\155\x6e\163", [$this, "\150\x6e\x73\x65\x74\137\160\157\x73\x74\137\143\157\x6c\x75\x6d\x6e\163"]); goto UeIJ5; RozNJ: add_action("\x73\x61\x76\145\x5f\160\157\163\x74", [$this, "\x68\x6e\x73\141\166\145\137\x63\165\x73\x74\x6f\155\137\160\157\163\x74\155\145\164\x61"]); goto FrxJs; UeIJ5: add_action("\x6d\141\x6e\141\x67\145\x5f\160\157\x73\164\x5f\x70\x6f\x73\164\x73\x5f\x63\165\163\x74\157\x6d\137\143\157\x6c\x75\155\156", [$this, "\x68\156\x63\157\x6c\x75\x6d\x6e\x73\x5f\x63\x6f\x6e\164\145\x6e\x74"], 10, 2); goto OxGP_; OxGP_: } public function hnset_post_columns($columns) { return array("\x63\x62" => "\x3c\151\x6e\160\x75\164\x20\164\x79\x70\x65\x3d\x22\x63\x68\145\143\153\x62\x6f\x78\42\40\57\x3e", "\150\x6e\x6d\157\x76\x69\x65\163\x2d\x74\x69\x74\x6c\x65" => __("\x54\x69\x74\x6c\x65", "\150\x6e\x6d\x67\x65\x70\151\163"), "\150\x6e\x6d\157\x76\x69\145\163\137\151\x6d\141\147\145\163" => __("\124\x68\165\155\x62\x73", "\150\156\x6d\147\x65\x70\151\x73"), "\x68\156\155\157\166\151\x65\163\137\144\145\x74\141\x69\x6c\x73" => __("\x44\x65\x74\x61\151\154\163", "\x68\x6e\155\147\x65\x70\151\163"), "\143\141\164\145\147\157\162\151\145\163" => __("\103\141\164\145\147\x6f\162\151\145\163", "\x68\x6e\155\147\x65\x70\151\x73"), "\x74\141\170\157\x6e\157\x6d\171\x2d\141\143\x74\x6f\x72" => __("\x41\143\x74\157\x72\163", "\150\156\155\x67\145\x70\x69\x73"), "\164\141\170\157\x6e\157\x6d\x79\x2d\144\x69\162\x65\x63\164\x6f\x72" => __("\x44\151\162\x65\143\164\x6f\162\163", "\150\x6e\x6d\x67\x65\160\151\x73"), "\x74\141\x78\x6f\x6e\x6f\155\x79\x2d" . get_taxonomy("\x72\x65\154\145\141\x73\145")->name => __("\122\x65\x6c\145\141\x73\x65", "\x68\156\x6d\x67\145\x70\151\x73"), "\x74\141\170\x6f\156\x6f\x6d\171\55" . get_taxonomy("\x63\157\x75\156\164\162\x79")->name => __("\103\157\165\156\x74\162\x79", "\150\156\155\147\x65\x70\x69\163"), "\164\x61\x67\x73" => __("\124\141\147\x73", "\150\156\155\x67\x65\160\151\x73"), "\150\156\155\x6f\x76\151\145\x73\x5f\165\160\144\x61\164\x65\x64" => __("\x4c\141\163\164\x20\x55\x70\144\x61\164\145", "\x68\x6e\x6d\147\x65\160\x69\x73"), "\150\x6e\155\x6f\x76\151\x65\x73\137\x61\x63\164\151\157\156" => __("\x45\160\151\163\157\x64\145\x73", "\150\x6e\x6d\x67\x65\x70\x69\x73")); } public function hncolumns_content($column_name, $post_id) { goto STIXg; OwhQU: $formality = !empty($meta["\150\x61\x75\x6e\137\155\x6f\166\x69\x65\x5f\146\x6f\x72\155\x61\154\x69\x74\x79"]) ? $this->load->hnshow_formality($meta["\x68\141\x75\x6e\x5f\155\157\x76\151\x65\x5f\x66\157\162\x6d\x61\154\151\164\171"]) : ''; goto tXeGp; pCBrP: UT160: goto DGX91; A51_M: echo "\74\141\40\x63\x6c\x61\163\163\75\x22\x65\x64\151\x74\105\120\123\x22\x20\x68\162\x65\146\75\x22" . admin_url("\x61\x64\x6d\x69\156\56\160\150\x70\77\x70\x61\147\145\x3d\x68\x6e\x6d\147\x2d\145\160\x69\x73\x6f\x64\x65\x26\141\x63\164\x3d\x65\x64\x69\x74\137\145\160\x26\x70\157\x73\x74\x5f\151\x64\75" . $post_id) . "\42\40\164\141\162\x67\x65\x74\x3d\x22\x5f\142\x6c\x61\156\x6b\x22\x20\143\154\141\163\163\75\x22\164\x65\170\x74\x2d\x63\x65\x6e\164\145\x72\x22\x3e\12\x9\11\11\11\74\x62\165\x74\164\157\x6e\40\x61\162\151\141\55\154\x61\142\145\154\x3d\42\143\x72\x65\x61\x74\x65\40\x73\157\155\145\x74\150\151\x6e\147\x20\x65\160\x69\x63\x22\40\x74\171\160\145\x3d\42\x62\x75\164\x74\x6f\156\x22\40\x63\154\141\163\163\x3d\42\x63\165\x72\x73\157\x72\55\160\x6f\x69\156\164\x65\x72\40\x69\156\x6c\x69\156\145\x2d\x66\154\x65\170\x20\152\165\163\164\x69\146\x79\x2d\x63\x65\156\x74\145\x72\40\151\164\x65\x6d\163\x2d\143\x65\x6e\x74\145\x72\x20\x61\x73\160\145\x63\164\x2d\163\161\x75\x61\162\x65\40\x77\x68\x69\164\x65\163\x70\x61\x63\x65\55\x6e\157\x77\x72\x61\160\x20\x72\x6f\x75\156\x64\145\144\55\x66\x75\154\x6c\40\142\x67\55\x73\153\x79\55\65\x30\60\40\160\x2d\x32\x20\x74\145\170\x74\x2d\170\x73\x20\x66\157\156\164\55\155\145\x64\151\165\x6d\x20\x74\162\x61\143\153\x69\x6e\147\x2d\167\x69\144\x65\40\x74\145\x78\164\x2d\x77\150\151\x74\x65\40\x74\162\x61\156\x73\151\x74\x69\157\156\40\150\x6f\166\145\162\x3a\157\160\x61\143\x69\164\x79\x2d\67\65\x20\x74\x65\170\164\55\x63\x65\x6e\x74\145\162\x20\x66\157\x63\165\x73\55\166\x69\163\151\x62\x6c\x65\72\157\165\164\154\x69\156\x65\40\x66\x6f\143\165\163\55\x76\151\163\x69\142\154\x65\x3a\157\165\164\154\151\156\x65\55\62\40\x66\x6f\143\165\x73\55\x76\151\x73\151\142\154\145\x3a\157\x75\164\154\151\156\x65\x2d\x6f\146\146\163\145\x74\55\62\40\146\157\143\x75\163\x2d\166\x69\163\151\142\154\x65\x3a\x6f\x75\164\154\x69\156\145\x2d\163\153\x79\x2d\65\x30\x30\40\141\143\x74\151\x76\x65\72\157\160\x61\143\x69\x74\x79\55\x31\60\x30\40\141\143\x74\x69\x76\x65\x3a\157\165\164\x6c\151\x6e\145\x2d\157\146\146\x73\x65\164\x2d\60\40\x64\151\163\141\142\x6c\x65\x64\72\x6f\x70\141\143\151\164\171\x2d\67\65\40\x64\x69\x73\141\142\154\x65\x64\x3a\143\165\x72\x73\157\x72\x2d\x6e\157\x74\x2d\x61\x6c\x6c\157\x77\145\144\x20\144\141\x72\153\x3a\x62\147\x2d\x73\x6b\171\x2d\x35\x30\x30\40\144\x61\162\153\72\x74\x65\170\164\55\x77\150\x69\164\x65\40\144\141\x72\153\72\146\x6f\143\165\163\x2d\x76\x69\163\151\x62\x6c\145\x3a\x6f\165\x74\x6c\151\x6e\145\55\x73\153\171\55\x35\60\x30\x22\x3e\12\11\11\11\11\x9\x3c\x73\166\x67\40\x78\x6d\x6c\156\x73\x3d\42\x68\164\x74\160\x3a\x2f\57\167\x77\167\x2e\167\x33\x2e\157\162\147\x2f\62\x30\60\x30\57\163\166\147\x22\40\x76\151\145\x77\102\157\x78\x3d\x22\x30\40\60\x20\x31\66\40\61\66\x22\40\x66\151\x6c\154\x3d\x22\x63\x75\x72\x72\145\156\164\103\x6f\154\157\162\x22\x20\x63\154\x61\163\163\75\x22\163\151\172\x65\55\64\42\x3e\xa\x9\11\11\x9\x9\x9\74\x70\x61\x74\150\x20\144\x3d\x22\x4d\61\x33\56\x34\x38\70\x20\x32\56\65\61\x33\x61\x31\56\67\65\x20\x31\56\67\65\40\60\40\60\x20\x30\55\62\x2e\64\x37\x35\x20\x30\x4c\x36\56\x37\65\x20\x36\56\x37\67\x34\141\x32\x2e\67\65\x20\x32\56\67\x35\x20\x30\x20\x30\40\60\55\x2e\x35\x39\66\56\70\71\62\154\x2d\x2e\x38\64\x38\x20\62\56\x30\64\x37\x61\56\x37\65\56\67\x35\40\60\40\60\x20\x30\40\x2e\x39\x38\x2e\x39\70\x6c\62\x2e\x30\64\x37\55\x2e\70\x34\70\x61\62\56\x37\x35\40\62\56\67\65\x20\60\x20\x30\40\x30\x20\56\x38\71\x32\55\56\65\71\x36\154\x34\x2e\62\66\61\x2d\64\56\62\x36\x32\x61\61\x2e\67\65\x20\61\56\x37\65\x20\60\40\x30\x20\x30\40\60\x2d\x32\x2e\64\67\64\132\x22\x20\x2f\76\12\x9\x9\x9\x9\11\11\74\160\141\x74\x68\40\x64\x3d\x22\115\64\x2e\67\x35\x20\x33\x2e\65\143\55\56\66\71\x20\x30\55\61\56\62\x35\x2e\x35\66\x2d\61\x2e\x32\x35\x20\61\x2e\x32\65\166\x36\56\x35\143\60\40\x2e\66\71\56\x35\x36\x20\61\x2e\x32\x35\x20\x31\56\62\x35\x20\61\x2e\62\x35\x68\66\x2e\x35\143\56\x36\71\40\x30\x20\61\56\x32\x35\55\56\x35\66\40\x31\x2e\x32\65\x2d\61\56\x32\x35\126\71\x41\x2e\x37\65\56\67\65\x20\x30\x20\x30\x20\61\x20\x31\64\x20\x39\166\x32\x2e\x32\65\101\x32\56\67\x35\x20\x32\56\67\65\40\60\40\x30\x20\x31\x20\x31\61\x2e\x32\65\x20\x31\64\150\x2d\66\56\x35\x41\62\56\x37\x35\x20\x32\x2e\x37\x35\40\x30\40\x30\40\61\x20\x32\40\61\61\x2e\62\x35\166\x2d\x36\x2e\x35\x41\62\x2e\x37\x35\x20\x32\56\x37\65\40\x30\x20\x30\40\x31\40\x34\56\67\x35\x20\62\110\x37\x61\56\x37\65\56\67\x35\x20\x30\x20\60\x20\x31\40\60\x20\61\x2e\x35\110\x34\x2e\x37\x35\132\42\x20\57\x3e\xa\11\11\11\x9\x9\74\57\163\166\147\x3e\12\11\11\x9\11\x3c\57\x62\x75\x74\164\157\156\76\12\11\11\11\x3c\x2f\x61\x3e"; goto PQGom; RUg97: if (!($column_name == "\x68\x6e\x6d\x6f\x76\151\145\163\137\141\x63\164\151\x6f\x6e")) { goto QxsRE; } goto A51_M; ZvMDp: echo "\74\144\151\166\x20\x63\x6c\141\x73\163\x3d\x22\x74\145\170\x74\55\x63\145\x6e\x74\145\162\x22\76" . get_the_modified_date(get_option("\x64\x61\x74\145\x5f\146\x6f\162\155\141\x74"), $post_id) . "\x3c\x2f\x64\x69\166\76"; goto pCBrP; tXeGp: $check = !empty($meta["\x68\x61\x75\156\137\x6d\157\x76\x69\x65\137\163\x74\141\164\x75\x73"]) ? $this->load->hnshow_status($meta["\x68\141\x75\x6e\137\155\157\166\151\x65\x5f\x73\164\x61\x74\165\163"]) : ''; goto LS43b; tC562: $episode = !empty($meta["\x68\x61\165\x6e\x5f\x65\160\x69\163\x6f\144\145"]) ? "\74\x62\x75\x74\164\x6f\x6e\x20\x74\x79\x70\145\75\x22\142\x75\164\x74\x6f\156\42\x20\143\154\x61\163\x73\75\42\160\171\55\x31\40\x70\170\x2d\63\x20\x6d\171\x2d\x30\56\x35\40\x62\147\x2d\x61\x6d\142\145\162\x2d\65\x30\x30\40\164\x65\x78\x74\55\x77\x68\x69\164\145\x20\164\x65\x78\x74\x2d\170\x73\40\x66\157\x6e\164\x2d\x73\145\155\x69\x62\x6f\x6c\x64\x20\x72\157\165\156\144\145\x64\x2d\x66\x75\x6c\154\40\163\150\x61\x64\x6f\x77\x2d\141\155\142\145\162\x2d\65\x30\60\x2f\x35\60\x20\146\x6f\x63\x75\x73\x3a\x6f\x75\x74\154\x69\x6e\x65\x2d\156\157\156\x65\42\76" . $meta["\x68\141\165\x6e\137\145\160\151\x73\x6f\144\x65"] . "\x3c\x2f\x62\165\164\x74\157\x6e\x3e" : ''; goto KjX78; C2kLK: $org_title = isset($meta["\x68\141\x75\x6e\137\157\162\x69\147\151\x6e\x61\x6c\137\x74\151\x74\x6c\x65"]) && $meta["\150\x61\165\x6e\137\157\x72\151\147\151\x6e\141\x6c\x5f\x74\x69\164\154\145"] != '' ? "\74\x73\160\141\156\x20\143\x6c\141\163\x73\75\42\157\162\x67\137\x74\151\164\x6c\x65\42\76\x28" . $meta["\x68\141\x75\156\x5f\x6f\162\x69\x67\151\156\x61\x6c\x5f\164\151\x74\154\145"] . "\x29\x3c\57\163\x70\141\x6e\x3e" : ''; goto DpmW1; IPL0o: if (!($column_name == "\x68\156\155\157\x76\151\145\163\137\x64\145\x74\x61\x69\x6c\x73")) { goto vasgX; } goto iJfEe; cMwcK: echo "\x3c\x64\x69\x76\x20\143\x6c\x61\x73\163\x3d\x22\x72\x65\x6c\x61\164\151\166\145\x20\x6d\x61\170\55\x77\x2d\x5b\61\65\x30\x70\x78\135\x20\164\145\x78\x74\x2d\x63\145\156\x74\145\x72\x20\40\x6d\x61\x78\55\x68\55\62\x38\x20\x72\x6f\165\156\x64\x65\x64\x2d\154\x67\x20\163\x68\x61\x64\x6f\x77\55\154\x67\x22\x3e\12\11\x9\11\11\x9\74\151\x6d\147\x20\163\162\x63\x3d\42" . $this->load->hnimage_display("\x6d\x6f\166\151\x65\x2d\164\150\165\x6d\142") . "\x22\x20\x63\154\141\x73\163\75\x22\x77\55\x66\165\x6c\154\40\x68\55\x66\x75\x6c\x6c\40\162\157\x75\x6e\144\145\144\x2d\x6c\x67\42\57\76\xa\x9\x9\11\11\11\74\144\151\166\x20\x63\x6c\141\x73\x73\x3d\x22\141\142\163\157\154\x75\164\x65\40\x74\145\x78\164\x2d\x5b\61\x31\160\170\x5d\x20\x66\157\x6e\164\55\x62\157\x6c\x64\x20\x74\145\x78\164\x2d\x77\x68\x69\164\x65\x20\x62\147\x2d\x72\x65\x64\55\65\60\x30\40\x70\170\x2d\62\x20\x72\x6f\165\x6e\144\145\x64\55\142\154\x2d\154\147\x20\x72\157\x75\x6e\144\x65\x64\x2d\164\x72\55\154\147\40\x74\x6f\x70\x2d\60\40\x65\x6e\144\x2d\x30\x22\x3e\12\11\x9\x9\11\x9\11" . $this->load->hnshow_views($post_id) . "\40" . __("\x76\151\145\167", "\x68\x6e\x6d\x67\145\160\x69\x73") . "\12\11\x9\11\x9\x9\74\57\x64\151\166\x3e\12\x9\x9\11\x9\74\57\144\151\166\76\xa\x9\11\x9"; goto VV0Xg; STIXg: $meta = get_post_meta($post_id, HNMG_META, true); goto FnKIG; WkxJ5: vasgX: goto mjjPv; PQGom: QxsRE: goto oi8no; LS43b: echo "\x3c\144\x69\166\x20\x63\x6c\x61\x73\x73\x3d\x22\162\x65\x6c\141\164\151\x76\145\x20\146\x6c\x65\170\40\146\154\x65\x78\x2d\167\x72\141\x70\40\x67\141\x70\x2d\160\170\x22\x3e" . $episode . $quality . $formality . $check . "\x3c\57\144\x69\x76\x3e"; goto WkxJ5; DpmW1: echo "\x3c\x61\x20\143\x6c\141\163\x73\x3d\42\x65\x64\151\x74\55\x70\x6f\163\164\55\x6c\151\156\x6b\42\40\x68\162\x65\146\x3d\x22" . get_edit_post_link($post_id) . "\42\76" . get_the_title() . "\40\74\57\x61\x3e\x20" . $org_title; goto hlxBF; hlxBF: ip6pF: goto RUg97; iJfEe: $quality = !empty($meta["\150\141\x75\156\137\161\165\x61\x6c\151\x74\x79"]) ? "\74\x62\165\164\x74\157\156\x20\164\x79\x70\x65\x3d\x22\x62\165\164\164\x6f\x6e\42\40\143\x6c\x61\163\x73\x3d\x22\x70\171\55\61\x20\160\x78\55\63\40\x6d\171\55\x30\56\65\x20\x62\147\55\162\x6f\163\x65\x2d\x38\x30\x30\40\164\x65\170\x74\55\x77\150\x69\164\145\40\164\x65\x78\164\55\170\x73\40\x66\157\156\164\55\x73\x65\155\151\142\x6f\x6c\144\40\162\157\x75\x6e\x64\x65\x64\x2d\146\x75\154\154\40\x73\150\141\144\x6f\x77\55\162\157\x73\145\x2d\x35\60\x30\x2f\65\x30\x20\146\x6f\x63\165\163\x3a\x6f\x75\x74\x6c\151\x6e\x65\55\156\157\156\145\x22\x3e" . $meta["\x68\141\x75\156\x5f\x71\165\x61\x6c\x69\164\171"] . "\x3c\x2f\142\165\x74\164\x6f\156\x3e" : ''; goto tC562; mjjPv: if (!($column_name == "\150\x6e\x6d\157\166\x69\x65\x73\137\x75\160\x64\x61\x74\x65\x64")) { goto UT160; } goto ZvMDp; DGX91: if (!($column_name == "\x68\x6e\155\157\166\151\145\163\x2d\x74\x69\x74\x6c\x65")) { goto ip6pF; } goto C2kLK; VV0Xg: CI8L3: goto IPL0o; KjX78: $total = !empty($meta["\x68\x61\165\x6e\137\x74\x6f\164\x61\154\x5f\145\160\151\163\157\144\x65"]) ? $meta["\150\141\x75\x6e\x5f\x74\x6f\x74\x61\x6c\x5f\145\x70\x69\x73\x6f\x64\x65"] : "\60"; goto OwhQU; FnKIG: if (!($column_name == "\150\x6e\155\157\x76\x69\x65\163\x5f\151\155\x61\x67\145\163")) { goto CI8L3; } goto cMwcK; oi8no: } public function hnsave_custom_postmeta($post_id) { goto KQYN2; vbppY: yFcR8: goto BFcOS; XXRh0: if (!isset($options["\150\x61\165\156\x5f\x6d\157\166\151\x65\x5f\163\143\150\145\x64\x75\x6c\145"])) { goto A96wv; } goto RXQ3a; mu4o6: if (!isset($options["\x68\x61\165\x6e\x5f\x6d\157\166\151\x65\x5f\x66\157\x72\x6d\141\x6c\x69\164\171"])) { goto yFcR8; } goto bW6dn; W3lqq: wp_set_object_terms($post_id, $options["\x68\141\x75\x6e\x5f\141\x64\x64\137\x74\x6f\x5f\167\151\x64\147\145\164"], "\160\157\x73\164\x5f\x6f\x70\164\x69\x6f\x6e\x73", false); goto dOleR; dOleR: XZdEv: goto XXRh0; MLdQ0: set_post_format($post_id, $post_format); goto vbppY; oBolO: if (!isset($options["\150\x61\x75\x6e\137\x6d\x6f\x76\151\x65\x5f\163\164\141\x74\165\163"])) { goto oJENq; } goto JQyxT; CC3IG: if (!isset($options["\150\x61\165\156\x5f\141\144\x64\x5f\164\157\137\x77\151\144\x67\145\164"])) { goto XZdEv; } goto W3lqq; mddi1: if (!(@$currentScreen->id == "\160\x6f\x73\164")) { goto R4RLw; } goto zAZaS; JQyxT: wp_set_object_terms($post_id, $options["\x68\141\x75\x6e\x5f\155\x6f\166\x69\x65\137\x73\164\x61\x74\x75\x73"], "\x73\164\x61\x74\x75\x73", false); goto VbY75; I1aln: A96wv: goto mu4o6; bW6dn: $post_format = $this->load->get_post_format($options["\x68\141\x75\156\137\x6d\157\166\151\x65\137\x66\157\x72\x6d\x61\x6c\x69\x74\x79"]); goto MLdQ0; KQYN2: $currentScreen = get_current_screen(); goto mddi1; zAZaS: $options = isset($_POST[HNMG_META]) ? $_POST[HNMG_META] : ''; goto oBolO; BFcOS: R4RLw: goto OFZmO; VbY75: oJENq: goto CC3IG; RXQ3a: wp_set_object_terms($post_id, $options["\150\141\165\x6e\x5f\x6d\x6f\166\x69\x65\x5f\x73\x63\150\145\x64\x75\154\x65"], "\160\157\x73\x74\137\150\141\x75\x6e", false); goto I1aln; OFZmO: } }
