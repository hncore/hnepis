<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\Providers; use Illuminate\Support\Facades\View; use Illuminate\Support\Facades\Blade; use Roots\Acorn\Sage\SageServiceProvider; use HNMG\LoadCore\HN_Core; use HNMG\Episodes\EP_Actions; use HNMG\Episodes\EP_Episode; use HNMG\Episodes\EP_Helper; use HNMG\Episodes\EP_Post; use HNMG\Episodes\EP_Options; use HNMG\EP_Load\EP_PLayer; use HNMG\EP_Load\EP_MCache; use HNMG\EP_Load\EP_Rewrite; use HNMG\EP_Core\EP_Core; use HNMG\EP_Core\EP_AutoIMG; use HNMG\EP_Core\EP_Taxonomy; use HNMG\EP_Core\EP_Meta; class EpisServiceProvider extends SageServiceProvider { private $load; public function register() { } public function boot() { goto MjStw; Q9sDy: $this->app->make(EP_Episode::class)->register(); goto Nyf32; MjStw: $this->ep_constants(); goto s8CeO; c9dRV: $this->loadViewsFrom(__DIR__ . "\57\56\56\x2f\x2e\56\x2f\162\145\163\157\x75\162\x63\145\x73\57\x76\x69\145\167\163", "\x48\x4e\x4d\107"); goto ZaGb0; RHXWo: $this->app->make(EP_Options::class)->register(); goto Sb5Zu; kLr1i: add_action("\x77\x70\x5f\145\156\x71\165\x65\x75\x65\137\x73\143\x72\151\160\164\x73", [$this, "\x48\x4e\x4d\x47\137\x4c\117\101\x44"]); goto nJK1V; m1XXk: $this->eplocalization(); goto WFZlb; Zfy0B: $this->load = $this->app->make(EP_Helper::class); goto tIPgO; Nyf32: $this->app->make(EP_Actions::class)->register(); goto j03GL; ZaGb0: add_action("\x61\144\x6d\151\156\x5f\x65\156\161\x75\x65\x75\145\137\x73\143\162\x69\160\x74\x73", [$this, "\x48\x4e\x4d\x47\137\115\117\x56\x49\x45\123"]); goto kLr1i; Sb5Zu: View::composer("\x2a", function ($view) { $view->with("\154\x6f\x61\x64", $this->load); }); goto c9dRV; WFZlb: $this->registerEPLang(); goto Zfy0B; s8CeO: $this->ep_load(); goto m1XXk; j03GL: $this->app->make(EP_Post::class)->register(); goto RHXWo; tIPgO: $this->load = $this->app->make(EP_Helper::class); goto Q9sDy; nJK1V: } public function haun_make_url_relative($url) { $relativeurl = wp_make_link_relative($url); return $relativeurl; } public function registerEPLang() : void { Blade::directive("\150\x6e\145\160\151\163", function ($expression) { return "\74\77\160\150\160\x20\145\x63\150\x6f\40\x5f\x5f\x28{$expression}\x2c\x20\47\x68\x6e\x6d\147\145\x70\x69\x73\47\x29\x3b\x20\x3f\x3e"; }); } public function ep_load() { goto QcbEE; RK3KH: $this->app->make(EP_Meta::class); goto C0qbU; tYvJe: $this->app->make(EP_MCache::class)->register(); goto RK3KH; ka6Kz: $this->app->make(EP_Taxonomy::class)->register(); goto tYvJe; C0qbU: $this->app->make(EP_AutoIMG::class); goto Qj_AY; Qj_AY: $this->app->make(EP_PLayer::class); goto LQhm0; LQhm0: $this->app->make(EP_Rewrite::class); goto jmcPz; QcbEE: $this->app->make(EP_Core::class)->register(); goto ka6Kz; jmcPz: } public function ep_constants() { goto qpGeF; p93Uh: define("\110\116\115\107\137\117\x50\x54\111\x4f\x4e", "\x68\x6e\155\x67\55\x6f\160\164\x69\157\x6e\163"); goto lGWMs; Tt7yX: define("\110\116\115\x47\x5f\x45\120\111\125\x52\x4c", get_template_directory_uri() . "\x2f\x76\x65\156\144\x6f\x72\x2f\x68\156\143\157\x72\145\x2f\x68\156\x6d\147\145\x70\x69\163\57\x72\x65\x73\157\x75\x72\x63\x65\x73"); goto pRXEa; CYLLM: define("\x48\116\115\x47\137\x53\x48\117\x50\x5f\x55\122\x4c", "\150\164\164\160\163\72\57\57\x68\141\x75\x6e\x79\164\142\x2e\143\157\155"); goto gBXhb; gBXhb: define("\110\x4e\x4d\107\137\105\120\x53", "\x5f\x68\141\x75\x6e\155\x6f\x76\151\x65\163"); goto YqkbF; pRXEa: define("\x48\x4e\x4d\107\x5f\x45\120\104\111\x52", trailingslashit(str_replace("\163\x72\x63\x2f\x50\x72\x6f\x76\x69\144\x65\x72\x73", "\x72\x65\163\157\165\x72\143\x65\163", wp_normalize_path(dirname(__FILE__))))); goto ziJaq; gcFMO: define("\110\x4e\115\107\137\115\105\x54\101\x4e\105\x57\x53", "\x5f\156\145\x77\x73\x5f\x6d\x65\164\x61\142\x6f\170\x5f\157\x70\164\x69\157\156\163"); goto CYLLM; qpGeF: define("\110\x4e\115\107\x5f\115\x45\124\101", "\137\x68\x61\165\156\137\x6d\145\x74\x61\142\157\170\x5f\x6f\x70\164\x69\x6f\156\x73"); goto p93Uh; YqkbF: define("\x48\x4e\x4d\x47\137\120\x41\x52\x54", wp_normalize_path(WP_CONTENT_DIR) . "\x2f\146\x69\x6c\155\x2d\145\170\160\x6f\x72\164"); goto Tt7yX; lGWMs: define("\110\x4e\115\107\137\126\x49\x44\105\x4f", "\137\166\151\144\145\157\163\x5f\155\145\x74\x61\x62\157\170\137\x6f\160\x74\151\157\x6e\163"); goto gcFMO; ziJaq: } public function hnmg_load() { goto kBnm9; hfJIK: BTsTW: goto hBtDx; M7K3s: $meta = get_post_meta($post->ID, HNMG_META, true); goto I6eJU; weezC: wp_enqueue_script("\x68\x6e\x6d\x67\55\154\x6f\x61\144\x6a\x73", home_url("\x2f\150\156\155\x67\160\154\141\171\x65\162\56\152\x73"), [], null, true); goto UAIP0; NSv4h: wp_enqueue_style("\x68\x6e\155\x67\x2d\146\157\156\164", home_url("\x2f\x66\x6f\x6e\x74\x2d\x61\x77\145\x73\x6f\155\145\56\155\151\156\56\143\163\163"), [], '', ''); goto wp49y; vhdq9: global $post; goto tYpTG; UAIP0: wp_localize_script("\150\156\155\x67\55\154\157\141\x64\x6a\x73", "\x70\x6c\x61\x79\145\x72\x5f\x65\160\151\x73", ["\x61\x6a\x61\x78\x5f\165\x72\x6c" => admin_url("\x61\144\x6d\151\x6e\x2d\x61\152\141\170\56\x70\150\x70"), "\152\167\x70\x6c\141\x79\x65\162\137\x75\162\154" => home_url("\57\152\x77\x70\x6c\141\171\x65\x72\x2f"), "\x70\x6c\141\171\x65\x72\x5f\165\162\x6c" => get_template_directory_uri() . "\57\x61\160\x70\57\x6c\x6f\x61\144\56\160\150\x70", "\162\145\160\157\x72\164\137\x65\x6e\141\x62\x6c\145" => hnmg_value("\x68\141\x75\x6e\x5f\162\145\160\x6f\x72\x74\x5f\x65\x6e\x61\142\x6c\x65"), "\152\x77\160\x6c\x61\171\x65\x72\x5f\163\x68\157\167\141\144" => hnmg_value("\x6a\x77\x5f\160\154\x61\x79\145\162\137\163\x68\x6f\x77\x5f\141\x64"), "\x6a\167\137\141\x64\143\157\x64\145" => hnmg_value("\x6a\167\137\160\x6c\x61\171\145\162\x5f\x63\x75\x73\164\x6f\155\137\x61\144\163\137\143\157\144\x65"), "\160\x6c\x61\171\x65\162\137\163\150\141\x72\x69\x6e\x67" => hnmg_value("\x6a\x77\x5f\160\154\141\171\145\x72\x5f\163\x68\141\162\145") ? "\x74\162\x75\x65" : "\x66\141\154\163\145", "\152\167\160\154\141\x79\145\162\x5f\x6b\145\x79" => hnmg_value("\152\167\x5f\160\154\x61\x79\x65\162\137\154\x69\143\x65\x6e\163\145\x5f\x6b\x65\171") ? hnmg_value("\152\x77\x5f\x70\154\x61\x79\145\x72\x5f\x6c\x69\143\145\156\163\x65\137\153\x65\x79") : "\x4d\102\166\162\x69\145\x71\116\x64\x6d\x56\x4c\x34\152\x56\x30\x78\66\x4c\x50\x4a\60\167\x4b\102\57\x4e\x62\x7a\x32\121\161\57\154\x71\155\63\x67\75\x3d", "\141\x63\164" => get_query_var("\150\141\x75\x6e\137\x61\143\164\151\157\x6e"), "\x70\x6f\x73\164\x5f\x75\x72\x6c" => home_url("\57" . $watch_slug . "\57" . $post_slug), "\154\x6f\141\144\151\x6e\x67\x5f\x69\155\147" => \Roots\asset("\151\x6d\x61\147\x65\163\x2f\x6c\x6f\x61\144\151\x6e\147\56\147\151\x66")->uri(), "\145\160\x73\137\163\x6c\x75\147" => hnmg_value("\x68\141\x75\156\x5f\x65\160\x69\x73\157\x64\x65\137\x75\x72\154"), "\163\145\x72\166\145\x72\137\163\x6c\165\147" => hnmg_value("\150\x61\x75\156\137\163\x65\162\166\145\162\137\165\x72\154"), "\x74\x79\x70\145\x5f\163\154\165\147" => hnmg_value("\150\x61\x75\156\137\165\x72\x6c\137\x74\171\x70\145"), "\x61\x75\x74\157\137\x72\145\163\145\x74\137\143\141\x63\150\145" => hnmg_value("\141\x75\x74\157\137\162\145\x73\x65\164\137\x63\141\143\150\145"), "\x72\x65\163\x75\155\145\137\x70\154\x61\171\142\x61\143\153" => hnmg_value("\x72\x65\163\x75\155\x65\x5f\x70\154\141\x79\x62\x61\x63\153"), "\151\163\x5f\x61\x64\165\x6c\164" => hnmg_value("\151\163\137\x61\144\165\x6c\164", HNMG_META), "\x61\x64\x75\154\x74\137\x74\151\164\154\x65" => hnmg_value("\x61\x64\165\x6c\x74\x5f\143\157\x6e\x74\x65\156\x74\137\x74\x69\164\154\145"), "\x61\x64\x75\154\x74\x5f\x63\157\156\164\x65\156\x74" => hnmg_value("\141\144\165\x6c\164\x5f\143\157\156\164\145\x6e\x74\x5f\x69\156\x66\x6f\x5f\x74\x65\170\164"), "\160\157\163\x74\x5f\164\151\164\x6c\x65" => $post->post_title, "\x70\x6f\163\x74\x5f\x69\144" => $post->ID, "\x65\160\x69\x73\157\x64\x65\137\163\x6c\x75\147" => $ep_slug ? $ep_slug : str_replace("\x5f", "\55", $first_episode), "\x73\145\162\166\145\x72" => $server ? $server : 1, "\160\x6c\141\x79\145\x72\x5f\x65\x72\x72\x6f\x72\137\x64\145\164\145\x63\x74" => hnmg_value("\x70\154\141\171\x65\162\x5f\145\162\x72\157\x72\137\144\145\x74\x65\143\164") ? hnmg_value("\x70\x6c\141\171\145\162\x5f\145\162\162\x6f\162\x5f\x64\x65\164\145\x63\x74") : "\144\151\x73\160\154\x61\171\x5f\x6d\157\144\141\x6c", "\145\160\x69\x73\x6f\144\x65\137\x64\x69\163\x70\154\x61\x79" => hnmg_value("\x68\x61\165\156\x5f\x65\160\151\163\157\144\145\137\x64\151\163\160\x6c\x61\171") != '' ? hnmg_value("\150\141\x75\x6e\137\x65\160\151\163\x6f\x64\x65\x5f\144\x69\x73\x70\154\141\171") : "\156\x6f\156\x65", "\151\61\x38\156" => ["\160\154\141\x79\x65\x72\137\x6c\157\141\144\151\x6e\x67" => __("\114\x6f\141\144\x69\x6e\147\x20\x70\x6c\x61\171\145\x72\54\40\160\x6c\x65\141\163\145\x20\167\x61\151\x74\56\56\x2e", "\150\x6e\155\147\x65\160\151\x73"), "\x6a\x77\137\x65\x72\x72\157\x72\137\x6d\x73\x67\137\x30" => __("\x57\145\40\141\162\x65\x20\x75\x6e\141\x62\154\x65\x20\x74\x6f\x20\146\x69\156\x64\40\164\x68\145\40\x76\151\x64\x65\157\x20\171\x6f\x75\40\x61\x72\145\40\154\x6f\157\153\x69\156\147\40\146\157\162\x2e\40\124\150\x65\x72\145\40\143\157\165\x6c\x64\x20\x62\x65\40\x73\x65\x76\145\162\141\x6c\x20\x72\x65\141\x73\157\x6e\x73\40\x66\157\x72\40\x74\x68\151\163\x2c\40\146\x6f\x72\x20\x65\x78\x61\155\160\154\145\40\x69\164\x20\147\x6f\164\40\162\145\155\157\x76\145\144\40\x62\171\40\x74\150\145\40\157\167\x6e\x65\162\x21", "\150\x6e\x6d\147\x65\x70\x69\163"), "\x6a\x77\x5f\145\x72\x72\x6f\162\x5f\x6d\x73\147\x5f\x31" => __("\124\150\151\163\x20\166\151\x64\x65\157\x20\x66\151\154\145\40\143\141\156\x6e\x6f\x74\40\x62\x65\40\160\x6c\141\171\145\144\x2e", "\150\x6e\155\x67\145\x70\x69\x73"), "\152\167\137\145\162\x72\157\x72\137\155\163\x67\x5f\x32" => __("\x54\x6f\40\x63\x6f\x6e\x74\x69\156\x75\145\40\x77\141\164\x63\x68\151\x6e\147\54\40\160\154\145\141\x73\145\40\x63\154\x69\143\x6b\x20\x6f\x6e\x20\164\x68\145\40\x22\122\145\154\x6f\x61\x64\x20\x50\154\x61\171\x65\162\42\40\142\x75\x74\164\x6f\x6e", "\x68\156\x6d\147\145\160\x69\x73"), "\152\x77\x5f\x65\162\162\157\x72\137\155\x73\x67\137\x33" => __("\157\x72\40\x63\154\x69\143\153\40\157\156\40\164\x68\145\40\142\165\x74\x74\x6f\x6e\163\40\x62\145\154\x6f\167", "\x68\x6e\155\x67\x65\x70\x69\163"), "\160\154\x61\171\x65\162\x5f\x72\x65\154\x6f\x61\x64" => __("\122\145\154\x6f\x61\144\x20\x50\x6c\x61\x79\x65\162", "\x68\x6e\x6d\x67\145\160\151\163"), "\x70\154\x61\x79\x65\162\x5f\141\x75\164\157\156\145\x78\x74" => __("\101\x75\164\x6f\x70\154\x61\171\40\156\145\x78\164\x20\x65\x70\x69\163\157\x64\145\54\x20\160\x6c\x65\x61\x73\145\x20\167\x61\x69\164\56\x2e\56", "\x68\156\x6d\147\145\160\x69\x73"), "\162\145\163\x75\155\x65\x5f\x74\x65\x78\164" => __("\101\x75\x74\x6f\155\141\164\151\143\x61\x6c\154\x79\x20\162\x65\x73\165\155\x65\163\x20\x79\x6f\x75\162\40\166\x69\144\x65\x6f\163\40\146\162\157\155\40\167\150\x65\162\x65\x20\171\x6f\x75\x20\x70\x6c\141\x79\x65\144\x20\164\x68\145\155\x20\154\141\x73\164\x20\141\164", "\x68\x6e\x6d\x67\145\x70\151\x73"), "\162\x65\x73\165\155\145\x5f\x74\x65\170\x74\x5f\62" => __("\x50\x6c\x61\x79\142\141\143\x6b\x20\x66\162\x6f\155\x20\x74\150\x65\40\x62\x65\147\151\156\x6e\151\x6e\x67\77", "\150\x6e\155\147\x65\160\x69\x73"), "\x70\154\x61\171\142\x61\x63\153" => __("\x50\154\x61\171\x62\141\x63\x6b", "\x68\x6e\x6d\x67\145\160\151\x73"), "\x63\x6f\156\x74\151\x6e\165\x65\137\x77\x61\164\x63\x68\x69\x6e\x67" => __("\103\x6f\x6e\x74\x69\156\x75\x65\x20\167\141\164\x63\150\x69\156\x67", "\x68\x6e\x6d\x67\x65\160\x69\163"), "\x6c\x69\x67\150\164\137\157\156" => __("\x4c\x69\x67\x68\x74\x20\x4f\x6e", "\x68\x6e\155\147\145\160\x69\x73"), "\154\151\x67\150\164\x5f\x6f\146\146" => __("\x4c\151\x67\150\164\40\x4f\x66\146", "\150\156\155\x67\x65\160\151\x73"), "\145\x78\160\141\x6e\144" => __("\x45\170\160\141\156\x64", "\x68\x6e\x6d\x67\145\x70\151\x73"), "\x63\157\x6c\154\141\x70\x73\145" => __("\103\x6f\154\154\141\x70\x73\145", "\150\156\x6d\x67\145\160\x69\163"), "\163\x68\157\x77\x5f\x6f\156\x6c\171\137\157\x6e\143\x65" => __("\x44\x6f\156\x27\164\40\163\x68\157\x77\40\x61\x67\x61\x69\156", "\x68\x6e\x6d\x67\x65\x70\151\163"), "\x65\x78\151\164\137\x62\x74\x6e" => __("\105\x58\111\124", "\x68\156\x6d\x67\x65\160\x69\163"), "\151\x73\137\x31\70\160\x6c\x75\163" => __("\x31\x38\53\40\x45\116\x54\105\x52", "\150\156\x6d\147\145\x70\x69\163"), "\x74\151\x74\154\x65" => get_the_title($post->ID), "\x61\x6c\145\x72\x74" => __("\x59\x6f\165\x72\40\156\x61\155\x65\40\x61\x6e\x64\x20\155\145\x73\163\x61\147\x65\x20\151\163\x20\162\145\x71\165\151\162\145\144\x20\x28\52\51", "\x68\156\x6d\147\145\x70\x69\x73"), "\x6d\163\147" => __("\131\157\165\x72\x20\x6d\x65\x73\163\141\147\145", "\x68\x6e\155\x67\x65\160\x69\163"), "\x6d\163\147\x5f\163\165\143\143\145\163\163" => __("\124\150\141\156\x6b\40\171\x6f\165\x20\x66\157\x72\x20\x73\x65\156\144\x69\x6e\147\x20\145\162\x72\x6f\162\x20\155\x65\163\x73\x61\147\x65\x73\56\40\127\145\40\x77\151\x6c\x6c\x20\146\151\170\x20\x74\x68\x65\x20\x70\x72\157\x62\154\x65\155\x20\x69\156\40\x74\x68\x65\40\x73\x68\x6f\x72\x74\145\163\164\x20\x74\x69\155\x65\x20\x70\x6f\x73\x73\x69\x62\x6c\x65\x2e", "\150\156\x6d\x67\145\160\x69\163"), "\x6c\x6f\x61\144\151\x6e\x67\x5f\151\155\147" => \Roots\asset("\x69\155\x61\147\145\x73\x2f\x6c\157\x61\144\x69\x6e\147\56\x67\x69\146")->uri(), "\162\145\160\x6f\162\x74\x5f\x62\x74\156" => __("\x52\145\x70\157\162\164", "\x68\156\155\147\145\x70\x69\163"), "\x6e\141\x6d\x65\x5f\x6f\162\x5f\x65\155\141\x69\154" => __("\x4e\x61\x6d\x65\40\x6f\162\40\105\155\x61\151\x6c", "\x68\156\155\147\x65\160\151\163"), "\x63\x6c\157\163\145" => __("\103\x6c\157\x73\145", "\150\156\155\147\145\160\151\x73")]]); goto xzN5n; wp49y: if (!is_single()) { goto h0BH_; } goto vhdq9; FCWaX: $meta["\150\x61\165\x6e\137\x74\x68\165\155\x62\137\x75\x72\154"] = $meta["\150\x61\165\x6e\137\164\x68\165\155\142\137\165\162\154"]; goto UCg43; uLN4m: $post_meta = get_post_meta($post->ID, "\x5f\x68\141\x75\x6e\x6d\157\x76\151\x65\163", true); goto xPcqE; CspsK: $ep_slug = get_query_var("\x65\160\151\163\157\144\145\137\x73\154\x75\147") ?? "\x31"; goto BkJfn; BkJfn: if (!hnmg_value("\150\x61\x75\156\x5f\x74\x68\165\155\142\x5f\x75\162\154", HNMG_META)) { goto K_5Cw; } goto nHoa9; hBtDx: K_5Cw: goto ZvD6B; tHiQ0: $server = get_query_var("\x68\x61\165\x6e\137\x73\145\x72\x76\x65\162"); goto M7K3s; ir7YH: $episode_display = hnmg_value("\150\x61\x75\156\137\x65\160\x69\163\x6f\x64\145\x5f\144\151\x73\160\154\141\171"); goto uLN4m; xzN5n: h0BH_: goto kDC8u; xPcqE: $data = json_decode(stripslashes($post_meta), true); goto nmGFl; ZvD6B: wp_enqueue_style("\x68\156\x6d\147\55\154\x6f\141\x64\x63\163\x73", home_url("\x2f\x68\156\155\147\x70\x6c\x61\x79\x65\162\56\x63\x73\163"), [], "\x30\x2e\61\56\x30", "\x61\154\154"); goto weezC; kBnm9: $fontAwesomeCssPath = get_template_directory_uri() . "\57\x76\145\156\x64\157\x72\57\150\x6e\x63\x6f\x72\145\x2f\x68\x6e\155\x67\x65\x70\x69\x73\x2f\x76\x65\156\144\x6f\162\x2f\x66\x6f\162\x74\141\167\145\x73\157\155\145\57\x66\157\x6e\x74\x2d\141\x77\x65\x73\157\155\x65\57\143\x73\x73\57\146\157\156\x74\x2d\x61\x77\x65\x73\x6f\x6d\145\x2e\x6d\151\x6e\x2e\143\163\163"; goto NSv4h; nmGFl: $first_episode = isset($data) && isset($data[0]["\x68\141\x75\156\155\157\166\151\x65\163\x5f\x73\x65\162\166\x65\x72\137\x64\x61\164\x61"]) ? key($data[0]["\x68\141\165\x6e\x6d\157\x76\151\145\x73\137\163\145\162\x76\x65\x72\x5f\x64\141\x74\x61"]) : ''; goto CspsK; nHoa9: if (!(strpos($meta["\x68\141\165\x6e\137\x74\x68\x75\x6d\142\x5f\x75\162\154"], home_url()) !== false)) { goto BTsTW; } goto GCJ6S; UCg43: update_post_meta($post->ID, HNMG_META, $meta); goto hfJIK; GCJ6S: $meta["\x68\141\x75\156\137\x74\x68\x75\155\x62\x5f\x75\x72\x6c"] = $this->haun_make_url_relative($meta["\x68\x61\165\x6e\x5f\x74\x68\165\x6d\x62\137\x75\x72\x6c"]); goto FCWaX; syYw1: $watch_slug = hnmg_value("\x68\x61\165\156\x5f\167\x61\x74\143\x68\x5f\x75\x72\x6c"); goto ir7YH; tYpTG: $episode = get_query_var("\150\x61\x75\x6e\137\145\160\151\x73\157\x64\x65"); goto tHiQ0; I6eJU: $post_slug = basename(get_permalink($post->ID)); goto syYw1; kDC8u: } public function eplocalization() { load_textdomain("\x68\156\155\x67\145\x70\151\163", HNMG_EPDIR . "\x6c\141\156\147\57\x68\x6e\x6d\x67\x65\160\x69\x73\x2d" . get_locale() . "\56\155\157"); } public function hnmgepis_localize() { goto l17i1; KHpaq: $localize_file = wp_normalize_path(HNMG_EPDIR . "\145\x70\137\154\157\x63\141\154\x69\x7a\145\x2e\x70\150\160"); goto Dmqie; MWFCX: return $localize; goto jPeMs; l17i1: $localize = array(); goto KHpaq; Dmqie: if (!file_exists($localize_file)) { goto EUGOo; } goto D2Wpv; j3Qee: EUGOo: goto MWFCX; D2Wpv: $localize = (include_once $localize_file); goto j3Qee; jPeMs: } public function HNMG_MOVIES() { goto DbrUf; v22pH: return; goto rKvjU; JCHd8: wp_localize_script("\x68\x6e\155\x67\x2d\x6d\x6f\x76\151\x65\163\152\163", "\150\156\x6d\147\145\160\151\x73", ["\141\x6a\141\x78\x5f\x75\162\154" => admin_url("\x61\144\x6d\151\x6e\x2d\141\x6a\141\170\56\x70\150\160"), "\145\x70\x69\163\157\144\145\x5f\x74\x79\x70\145" => $this->load->getPlayerTypesJs(), "\x68\156\x65\x70\x69\163\157\x64\145\137\x74\x79\160\x65" => $this->load->HNPlayerTypesJs(), "\156\x6f\x6e\x63\x65" => wp_create_nonce("\x61\152\x61\170\x2d\156\157\x6e\143\x65"), "\151\61\70\156" => $this->hnmgepis_localize(), "\145\160\x73\154\x75\147\x5f\144\145\146\141\165\x6c\x74" => "\x74\141\x70"]); goto sRdCC; rKvjU: goto zZ3yV; goto o6LSI; sRdCC: zZ3yV: goto ZTEWt; DbrUf: global $pagenow; goto Itwfk; Itwfk: if ($pagenow == "\141\144\x6d\x69\156\x2e\x70\150\160" && (isset($_GET["\160\x61\147\145"]) && ($_GET["\x70\141\x67\145"] == "\x68\x6e\155\147\55\x65\160\151\163\x6f\x64\x65" || $_GET["\160\x61\x67\x65"] == "\x63\162\x61\167\x6c\55\164\157\x6f\x6c\x73")) || ($pagenow == "\x70\157\163\x74\x2d\x6e\145\x77\56\160\x68\160" || $pagenow == "\x70\x6f\x73\x74\56\x70\x68\160")) { goto MywoJ; } goto v22pH; o6LSI: MywoJ: goto M7gah; M7gah: wp_enqueue_script("\150\x6e\155\147\55\x6d\x6f\x76\x69\145\x73\152\x73", HNMG_EPIURL . "\x2f\x61\x73\x73\x65\164\163\57\152\163\57\150\156\x6d\x67\x65\x70\x69\x73\x2e\x6a\163", [], null, true); goto JCHd8; ZTEWt: } }
