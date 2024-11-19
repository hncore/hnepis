<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\Providers; use Illuminate\Support\Facades\View; use Illuminate\Support\Facades\Blade; use Illuminate\Support\ServiceProvider; use HNMG\LoadCore\HN_Core; use HNMG\Episodes\EP_Actions; use HNMG\Episodes\EP_Episode; use HNMG\Episodes\EP_Helper; use HNMG\Episodes\EP_Post; use HNMG\Episodes\EP_Options; class EpisServiceProvider extends ServiceProvider { public function register() { } public function boot() { goto dbJ7M; ZXvAU: $this->app->make(EP_Episode::class)->register(); goto VsALh; lUBz6: $this->registerEPLang(); goto axPHe; zQwRc: View::composer("\52", \HNMG\Episodes\EP_Helper::class); goto y8zYY; axPHe: $this->load = $this->app->make(EP_Helper::class); goto ZXvAU; y8zYY: $this->loadViewsFrom(__DIR__ . "\x2f\x2e\x2e\57\56\x2e\57\x72\x65\163\x6f\x75\162\143\145\163\57\166\x69\x65\167\163", "\x48\x4e\x4d\107"); goto k26Tv; lgkce: $this->app->make(EP_Options::class)->register(); goto Z_kK0; aMjH5: PNtU5: goto fn5H2; k26Tv: add_action("\x61\x64\x6d\x69\x6e\x5f\x65\x6e\161\165\x65\165\x65\x5f\163\143\162\x69\x70\x74\x73", [$this, "\x48\x4e\115\107\137\x4d\x4f\126\111\105\x53"]); goto fzKDh; MHNDj: $this->app->make(EP_Post::class)->register(); goto lgkce; dbJ7M: if (is_plugin_active("\x68\156\x63\157\x72\x65\x2f\x68\x6e\143\x6f\162\145\x2e\x70\150\x70")) { goto PNtU5; } goto h78vZ; Z_kK0: View::composer("\52", \HNMG\EP_Load\EP_List::class); goto zQwRc; fzKDh: add_action("\167\x70\137\x65\156\x71\x75\x65\165\x65\137\x73\143\162\151\x70\x74\x73", [$this, "\x68\156\155\147\x5f\154\157\141\144"], 10, 1); goto n9wab; h78vZ: return false; goto aMjH5; TWwPm: $this->eplocalization(); goto lUBz6; VsALh: $this->app->make(EP_Actions::class)->register(); goto MHNDj; AwHQC: $this->ep_load(); goto TWwPm; fn5H2: $this->ep_constants(); goto AwHQC; n9wab: } public function hnmg_load() { goto rxINa; eSfPf: $post_meta = get_post_meta($post_id, HNMG_EPS, true); goto YOjin; GpJ8q: $post_slug = basename(get_permalink($post_id)); goto eSfPf; rxINa: wp_enqueue_style("\x68\x6e\155\x67\x2d\146\x6f\x6e\164", home_url("\57\146\x6f\x6e\x74\x2d\x61\167\x65\x73\157\155\x65\x2e\x6d\x69\x6e\56\x63\163\163"), [], '', ''); goto kVwzA; hXoO2: $first_episode = isset($data) && isset($data[0]["\150\141\165\x6e\x6d\x6f\x76\151\145\x73\137\x73\145\x72\x76\x65\162\137\144\x61\x74\141"]) ? key($data[0]["\150\141\x75\156\155\x6f\166\151\x65\x73\137\x73\145\162\166\145\162\x5f\x64\x61\164\x61"]) : ''; goto ZVdCk; njAqX: update_post_meta($post_id, HNMG_META, $meta); goto eO81N; uDtTG: $meta["\150\x61\165\x6e\137\x74\x68\x75\155\142\x5f\165\x72\x6c"] = $meta["\x68\141\165\156\137\x74\x68\x75\155\x62\x5f\x75\x72\x6c"]; goto njAqX; LYgMB: $ep_slug = get_query_var("\x65\160\x69\x73\157\144\145\137\x73\x6c\x75\x67") ?? "\61"; goto BU4PH; AtrtU: wp_enqueue_style("\x68\x6e\x6d\x67\x2d\154\x6f\141\144\x63\x73\x73", HNMG_EPIURL . "\x2f\143\x73\163\57\x68\156\155\x67\x70\154\x61\x79\145\162\x2e\x63\x73\x73", [], "\x30\x2e\61\x2e\60", "\141\154\x6c"); goto ZAip7; aEIws: $post_id = get_queried_object_id(); goto wBjZf; YOjin: $data = json_decode(stripslashes($post_meta), true); goto hXoO2; sF53R: $meta = get_post_meta($post_id, HNMG_META, true); goto GpJ8q; C6MjN: $server = get_query_var("\x68\141\x75\156\x5f\x73\x65\162\166\x65\162"); goto LYgMB; eO81N: RWw7I: goto kgtYh; ZFpYz: $meta["\150\x61\x75\x6e\137\164\x68\165\155\142\x5f\165\162\x6c"] = $this->haun_make_url_relative($meta["\150\x61\x75\x6e\137\164\x68\x75\155\142\137\165\x72\x6c"]); goto uDtTG; ZAip7: wp_enqueue_script("\x68\156\155\x67\x2d\154\x6f\141\x64\x6a\x73", HNMG_EPIURL . "\x2f\x6a\163\x2f\x68\x6e\x6d\147\x70\x6c\x61\171\x65\162\56\152\x73", [], null, true); goto glm_E; kVwzA: wp_enqueue_script("\x68\156\x6d\147\55\164\150\x65\x6d\x65\x73", HNMG_EPIURL . "\57\x6a\163\57\x6c\157\141\x64\55\143\x6f\162\145\x2e\x6a\x73", [], null, true); goto xFAtF; glm_E: wp_localize_script("\150\156\155\147\x2d\x6c\157\x61\144\152\x73", "\160\154\141\x79\x65\x72\137\x65\x70\151\163", ["\141\x6a\141\x78\x5f\165\162\x6c" => admin_url("\141\x64\155\151\156\55\141\152\x61\170\56\x70\x68\160"), "\x6a\167\160\x6c\x61\x79\x65\162\x5f\165\x72\154" => HNMG_EPIURL . "\57\152\x77\x70\154\x61\x79\145\162\57", "\160\x6c\141\x79\145\162\x5f\165\162\x6c" => home_url("\x2f\x6c\x6f\141\144\56\160\x68\160"), "\162\145\160\157\x72\x74\137\145\156\x61\142\154\145" => hnmg_value("\150\141\165\x6e\137\162\145\x70\157\x72\164\137\x65\x6e\141\142\x6c\x65"), "\x6a\167\160\x6c\x61\x79\x65\x72\x5f\163\x68\157\167\141\144" => hnmg_value("\152\167\137\160\x6c\x61\x79\145\x72\137\x73\150\x6f\167\137\141\144"), "\152\x77\x5f\141\x64\x63\x6f\x64\145" => hnmg_value("\152\x77\x5f\160\x6c\141\171\x65\162\137\x63\x75\x73\x74\x6f\155\x5f\x61\144\x73\137\x63\157\144\145"), "\160\154\x61\x79\145\162\137\163\x68\141\162\x69\156\147" => hnmg_value("\152\167\137\x70\x6c\141\x79\145\162\x5f\x73\150\x61\x72\145") ? "\164\162\165\x65" : "\146\x61\154\163\x65", "\152\x77\x70\154\x61\x79\145\162\137\x6b\x65\171" => hnmg_value("\152\167\x5f\x70\154\141\x79\x65\x72\x5f\154\151\x63\x65\x6e\x73\145\137\x6b\x65\x79") ? hnmg_value("\x6a\x77\137\160\154\141\x79\x65\x72\137\154\x69\x63\x65\156\x73\145\x5f\x6b\x65\x79") : "\115\x42\166\x72\151\145\161\x4e\144\155\126\x4c\x34\152\126\x30\x78\66\x4c\120\112\x30\167\113\102\57\116\x62\x7a\62\121\161\57\154\161\155\63\x67\x3d\x3d", "\x61\x63\164" => get_query_var("\x68\x61\x75\156\x5f\141\x63\x74\151\x6f\x6e"), "\154\157\141\x64\x69\156\147\137\151\x6d\x67" => \Roots\asset("\x69\155\x61\147\x65\163\x2f\154\157\141\144\x69\x6e\x67\x2e\x67\x69\146")->uri(), "\x74\x79\160\145\x5f\163\x6c\165\147" => hnmg_value("\150\x61\x75\156\x5f\165\x72\x6c\137\x74\x79\160\145"), "\141\x75\164\x6f\137\x72\145\163\x65\164\137\x63\x61\143\150\x65" => hnmg_value("\x61\x75\164\x6f\137\162\x65\163\145\x74\137\x63\x61\143\150\x65"), "\162\x65\x73\x75\x6d\x65\137\x70\x6c\141\171\142\141\x63\153" => hnmg_value("\x72\x65\163\x75\155\145\137\160\x6c\x61\x79\x62\141\x63\153"), "\x69\163\137\141\144\x75\x6c\164" => !empty($meta["\x69\x73\x5f\141\144\165\154\164"]) && $meta["\x69\x73\137\x61\x64\x75\154\x74"] == "\x6f\156" ? true : false, "\141\x64\165\x6c\164\x5f\x74\x69\x74\154\145" => hnmg_value("\x61\x64\x75\154\164\x5f\x63\x6f\156\x74\145\156\x74\137\164\151\x74\154\x65"), "\141\x64\x75\x6c\164\x5f\143\157\156\164\145\x6e\164" => hnmg_value("\141\x64\x75\x6c\164\x5f\143\x6f\x6e\164\x65\156\x74\137\x69\x6e\146\157\x5f\164\145\x78\x74"), "\160\157\163\x74\x5f\164\x69\x74\154\145" => get_the_title($post_id), "\x70\x6f\163\164\x5f\x69\144" => $post_id, "\x65\x70\x69\163\157\144\x65\x5f\163\x6c\165\147" => $ep_slug ? $ep_slug : str_replace("\x5f", "\55", $first_episode), "\163\145\162\x76\145\162" => $server ? $server : 1, "\160\154\141\171\145\x72\x5f\145\162\x72\157\x72\137\144\145\164\x65\143\x74" => hnmg_value("\x70\154\141\171\x65\x72\x5f\145\162\x72\157\x72\137\144\145\x74\x65\x63\164") ? hnmg_value("\160\154\x61\x79\x65\162\137\x65\x72\x72\x6f\x72\x5f\144\x65\x74\x65\x63\x74") : "\x64\x69\x73\x70\154\141\171\x5f\155\157\x64\141\x6c", "\145\x70\x69\x73\157\x64\x65\137\144\151\163\160\x6c\x61\x79" => hnmg_value("\x68\x61\165\156\137\145\160\151\163\x6f\144\x65\137\x64\151\x73\160\x6c\141\171") != '' ? hnmg_value("\x68\x61\165\156\x5f\x65\160\151\163\x6f\144\145\x5f\144\151\163\x70\154\141\x79") : "\156\x6f\x6e\x65", "\151\x31\70\156" => $this->hnmgepis_localize()]); goto FL7lD; kgtYh: GIu_p: goto AtrtU; wBjZf: $episode = get_query_var("\x68\141\165\x6e\137\x65\x70\151\163\x6f\144\145"); goto C6MjN; mdIL7: if (!is_single()) { goto hy7CQ; } goto aEIws; xFAtF: wp_localize_script("\x68\x6e\155\x67\x2d\164\x68\145\x6d\145\163", "\150\x6e\144\145\142\x75\x67", ["\x64\151\163\141\x62\x6c\x65\137\144\145\x62\x75\x67" => hnmg_value("\150\141\165\x6e\x5f\144\151\163\x61\142\x6c\145\x5f\144\145\142\165\x67"), "\144\x62\137\162\145\x64\151\x72\145\x63\x74\137\165\162\x6c" => hnmg_value("\x68\x61\165\x6e\x5f\144\145\x62\165\147\x5f\x72\x65\144\x69\x72\x65\143\164\x5f\165\162\x6c")]); goto mdIL7; FL7lD: hy7CQ: goto u00vi; u00vi: remove_action("\167\160\x5f\150\x65\141\x64", "\167\x70\137\147\145\156\145\162\x61\164\x6f\162"); goto lTaS4; BU4PH: $episode_display = hnmg_value("\150\x61\165\156\x5f\x65\x70\151\x73\157\144\145\x5f\144\x69\163\160\x6c\141\171"); goto sF53R; ZVdCk: if (!hnmg_value("\150\141\x75\156\x5f\x74\150\165\x6d\142\x5f\165\162\x6c", HNMG_META)) { goto GIu_p; } goto nEnHu; nEnHu: if (!(strpos($meta["\150\x61\165\156\137\x74\150\165\155\x62\137\165\162\154"], home_url()) !== false)) { goto RWw7I; } goto ZFpYz; lTaS4: } public function haun_make_url_relative($url) { $relativeurl = wp_make_link_relative($url); return $relativeurl; } public function registerEPLang() { Blade::directive("\150\156\145\x70\151\x73", function ($expression) { return "\74\x3f\160\x68\160\40\145\x63\150\157\x20\137\x5f\x28{$expression}\54\40\x27\150\156\x6d\147\x65\x70\x69\x73\47\51\73\x20\77\x3e"; }); } public function ep_load() { goto JN5vb; tWK_S: $this->app->make(\HNMG\EP_Core\EP_AutoIMG::class); goto vPbiK; MSenM: $this->app->make(\HNMG\EP_Core\EP_Taxonomy::class)->register(); goto spWcB; zPPR3: $this->app->make(\HNMG\EP_Core\EP_Core::class)->register(); goto MSenM; spWcB: $this->app->make(\HNMG\EP_Load\EP_Cache::class)->register(); goto nnjZi; nnjZi: $this->app->make(\HNMG\EP_Load\EP_Reporter::class)->register(); goto lIq1Z; JN5vb: $this->app->make(\HNMG\EP_Load\EP_Rewrite::class)->register(); goto zPPR3; vPbiK: $this->app->make(\HNMG\EP_Load\EP_PLayer::class); goto LZ3o6; l7TPz: $this->app->make(\HNMG\EP_Core\EP_Meta::class); goto tWK_S; lIq1Z: $this->app->make(\HNMG\EP_Core\EP_SEO::class)->register(); goto l7TPz; LZ3o6: } public function ep_constants() { goto Q7JG1; MgSss: define("\x48\116\x4d\x47\137\105\120\x49\125\x52\x4c", home_url("\57\154\157\x61\144\x65\x70\x69\x73")); goto n9CRL; ZauPZ: define("\x48\116\x4d\x47\137\x45\120\123", "\x5f\150\141\x75\156\155\157\x76\x69\x65\x73"); goto alZ3t; Q7JG1: define("\110\116\x4d\x47\137\115\x45\124\101", "\137\x68\141\165\x6e\x5f\155\145\164\141\142\157\x78\137\157\160\164\x69\x6f\x6e\x73"); goto OZ2fn; v6D79: define("\110\x4e\x4d\x47\137\x53\x48\x4f\120\x5f\125\122\114", "\150\x74\164\x70\x73\x3a\x2f\57\150\x61\165\x6e\x79\164\142\x2e\143\157\155"); goto z20JZ; alZ3t: define("\x48\116\115\107\137\x50\101\x52\x54", wp_normalize_path(WP_CONTENT_DIR) . "\57\146\x69\154\155\x2d\145\170\x70\x6f\x72\164"); goto MgSss; z20JZ: define("\x48\116\x4d\107\x5f\113\105\131\115\101\116\101\107\x45\x52", "\x48\116\103\x4f\122\105\137\x6f\160\164\x69\x6f\156\x73"); goto ZauPZ; n9CRL: define("\110\116\x4d\x47\x5f\105\x50\x44\111\x52", trailingslashit(str_replace("\x73\x72\x63\x2f\120\x72\x6f\166\x69\x64\145\x72\163", "\x72\x65\163\157\x75\162\143\145\163", wp_normalize_path(dirname(__FILE__))))); goto YgYmL; FuOhn: define("\x48\116\x4d\107\137\x4d\x45\x54\x41\116\105\x57\x53", "\x5f\x6e\145\x77\x73\x5f\x6d\x65\164\141\142\157\170\137\157\x70\164\151\x6f\x6e\163"); goto v6D79; OZ2fn: define("\x48\x4e\x4d\107\137\117\x50\124\x49\x4f\x4e", "\150\x6e\x6d\147\55\157\160\x74\x69\157\156\163"); goto Ix5n1; Ix5n1: define("\x48\116\x4d\x47\x5f\126\x49\x44\105\117", "\137\x76\x69\144\x65\x6f\163\137\x6d\145\x74\141\x62\157\170\x5f\157\160\164\x69\157\x6e\x73"); goto FuOhn; YgYmL: } public function eplocalization() { load_textdomain("\x68\x6e\155\x67\x65\x70\151\x73", HNMG_EPDIR . "\x6c\x61\x6e\147\x2f\x68\x6e\155\147\x65\x70\151\x73\55" . get_locale() . "\x2e\x6d\157"); } public function hnmgepis_localize() { goto On1_5; nKRyS: $localize_file = wp_normalize_path(HNMG_EPDIR . "\x6c\157\x63\x61\x6c\x69\172\145\56\x70\x68\x70"); goto GIgaj; OkM4t: $localize = (include_once $localize_file); goto FjCXQ; On1_5: $localize = array(); goto nKRyS; GIgaj: if (!file_exists($localize_file)) { goto EIL5I; } goto OkM4t; wUidE: return $localize; goto QTcFm; FjCXQ: EIL5I: goto wUidE; QTcFm: } public function HNMG_MOVIES() { goto e6exa; vWEG2: sen8Q: goto DgGGm; Slhn2: ur57U: goto U7ypL; U7ypL: wp_enqueue_script("\150\x6e\155\x67\x2d\x6d\157\x76\x69\145\163\152\x73", HNMG_EPIURL . "\57\152\163\x2f\x68\156\155\147\x65\x70\x69\x73\x2e\x6a\163", [], null, true); goto aALLW; llxmv: if ($pagenow == "\141\144\155\151\156\x2e\x70\x68\x70" && (isset($_GET["\160\x61\x67\x65"]) && ($_GET["\x70\141\147\145"] == "\x68\156\x6d\147\55\145\160\x69\x73\157\x64\145" || $_GET["\x70\x61\x67\x65"] == "\150\156\x6d\147\x2d\x6d\x6f\166\151\x65\55\162\x65\x70\x6f\162\164" || $_GET["\x70\141\147\145"] == "\x68\156\x6d\x67\x2d\143\141\143\x68\x65\55\x6d\x61\156\141\x67\x65\162")) || ($pagenow == "\160\157\x73\x74\x2d\156\x65\x77\x2e\160\150\160" || $pagenow == "\160\157\x73\x74\x2e\x70\x68\160")) { goto ur57U; } goto S27YF; tB2kE: goto sen8Q; goto Slhn2; S27YF: return; goto tB2kE; aALLW: wp_localize_script("\150\156\155\147\x2d\x6d\x6f\166\151\145\163\152\x73", "\x68\156\155\x67\145\160\151\163", ["\x61\x6a\141\170\137\x75\162\154" => admin_url("\x61\x64\155\151\x6e\55\141\x6a\141\x78\x2e\160\x68\x70"), "\x65\160\151\163\157\144\145\137\164\x79\x70\145" => $this->load->getPlayerTypesJs(), "\150\x6e\145\x70\x69\x73\x6f\144\x65\x5f\164\x79\160\x65" => $this->load->HNPlayerTypesJs(), "\x6e\x6f\x6e\143\145" => wp_create_nonce("\x61\x6a\141\x78\55\x6e\157\156\143\145"), "\x69\61\70\x6e" => $this->hnmgepis_localize(), "\145\160\x73\x6c\165\147\x5f\144\145\x66\141\x75\x6c\164" => "\164\141\x70"]); goto vWEG2; e6exa: global $pagenow; goto llxmv; DgGGm: } }
