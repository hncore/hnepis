<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Core; class EP_Taxonomy { public function register() { goto pVbI7; lTG8x: add_action("\151\x6e\x69\x74", [$this, "\x68\156\156\x65\167\163\137\160\x6f\163\x74\164\171\x70\x65"], 0); goto Fkeks; pVbI7: add_action("\x69\x6e\x69\x74", [$this, "\150\x6e\x74\171\x70\x65\x5f\164\x61\x78\x6f\156\157\x6d\x79"], 0); goto tq8HY; Hvkgi: add_action("\x69\x6e\x69\164", [$this, "\x68\141\x75\156\137\143\165\163\157\x6d\137\167\160\x5f\151\156\x73\145\x72\x74\137\x74\145\162\155"], 0); goto aWOo5; tq8HY: add_action("\151\x6e\151\164", [$this, "\150\x6e\x61\143\x74\x6f\162\163\x5f\x74\141\x78\x6f\156\157\155\x79"], 0); goto f3Mur; I0EuX: add_action("\151\x6e\x69\164", [$this, "\150\141\165\156\137\162\x65\147\x69\x73\x74\145\x72\x5f\164\141\x78\157\156\157\x6d\x79\x5f\160\x6f\x73\x74\137\x6f\160\164\151\x6f\156\x73"], 0); goto Hvkgi; f3Mur: add_action("\x69\x6e\151\x74", [$this, "\x68\156\x64\151\162\145\143\x74\157\162\x73\x5f\x74\141\170\x6f\x6e\157\x6d\x79"], 0); goto vklLU; vklLU: add_action("\151\156\151\x74", [$this, "\150\156\162\x65\154\x65\x61\163\x65\137\164\141\x78\x6f\156\157\x6d\171"], 0); goto l5drS; aWOo5: add_action("\151\x6e\x69\x74", [$this, "\x68\156\156\x65\167\x73\x5f\164\x61\170\157\156\x6f\x6d\x79"], 0); goto lTG8x; l5drS: add_action("\151\156\151\164", [$this, "\x68\156\143\x6f\165\x6e\164\162\171\x5f\164\x61\170\x6f\x6e\x6f\x6d\171"], 0); goto FJNL5; Fkeks: add_action("\151\156\151\164", [$this, "\x68\156\x6e\x65\x77\163\137\x74\141\147"], 0); goto B2t7j; meBKB: add_action("\151\156\x69\164", [$this, "\x68\x6e\x76\x69\x64\x65\x6f\137\x74\x61\170\157\156\157\155\x79"], 1); goto zci47; B2t7j: add_action("\151\156\x69\164", [$this, "\x68\156\x76\x69\144\x65\157\137\160\x6f\x73\164\x74\171\x70\145"], 1); goto meBKB; zci47: add_action("\151\x6e\x69\x74", [$this, "\150\x6e\x76\x69\144\145\157\137\x74\x61\x67"], 1); goto elcj_; FJNL5: add_action("\x69\156\151\x74", [$this, "\x63\x75\x73\x74\157\155\137\160\157\163\164\x5f\x66\x6f\x72\x6d\141\x74\163\x5f\164\141\170\x6f\x6e\157\155\151\145\x73"], 0); goto I0EuX; elcj_: } public function hntype_taxonomy() { goto f3I_w; f3I_w: $labels = array("\x6e\141\155\x65" => _x("\x45\x70\151\163\157\144\x65\40\x54\x79\160\145\x73", "\x45\x70\151\163\157\144\145\40\164\x79\x70\145", "\x68\156\155\x67\145\x70\151\x73"), "\x73\x69\x6e\147\165\x6c\x61\x72\x5f\x6e\x61\x6d\145" => _x("\x45\x70\x69\163\x6f\144\145\x20\x54\x79\x70\x65", "\x45\x70\151\x73\x6f\x64\x65\40\164\x79\x70\145", "\150\x6e\155\147\x65\x70\151\x73"), "\x6d\145\156\x75\137\x6e\141\x6d\x65" => __("\x45\x70\151\x73\x6f\x64\145\40\x54\x79\x70\145\x73", "\x68\156\155\147\x65\x70\151\x73"), "\x61\154\x6c\137\151\x74\x65\155\x73" => __("\101\x6c\154\40\x49\x74\x65\155\163", "\x68\156\155\x67\x65\x70\151\163"), "\x70\141\162\145\x6e\x74\137\x69\x74\145\x6d" => __("\x50\x61\x72\x65\156\164\40\111\x74\145\x6d", "\150\156\155\x67\145\160\151\x73"), "\x70\x61\162\145\156\x74\x5f\151\164\145\155\x5f\x63\x6f\154\157\156" => __("\120\x61\x72\145\x6e\x74\x20\111\164\145\155\72", "\150\156\x6d\x67\x65\x70\151\163"), "\156\x65\x77\137\x69\164\x65\155\x5f\156\x61\x6d\145" => __("\116\145\167\40\x49\164\145\x6d\40\x4e\141\x6d\x65", "\150\156\x6d\147\x65\x70\151\x73"), "\141\x64\144\x5f\156\145\x77\137\x69\x74\145\155" => __("\x41\x64\x64\40\116\x65\167\40\x49\x74\145\155", "\x68\x6e\155\147\x65\160\x69\x73"), "\145\144\x69\x74\137\x69\164\x65\155" => __("\x45\144\x69\x74\x20\111\x74\x65\155", "\150\x6e\x6d\x67\145\160\151\x73"), "\x75\x70\144\141\164\145\137\x69\x74\145\x6d" => __("\125\160\x64\141\164\x65\x20\x49\164\145\x6d", "\150\x6e\155\x67\145\x70\151\x73"), "\166\151\x65\x77\137\x69\164\x65\x6d" => __("\126\x69\145\167\40\111\x74\145\155", "\x68\156\155\x67\x65\160\151\x73"), "\163\145\160\x61\162\141\164\145\137\x69\164\x65\155\x73\137\167\151\164\150\x5f\143\157\155\155\141\x73" => __("\x53\x65\x70\141\x72\x61\164\145\x20\151\164\x65\155\x73\40\167\x69\164\x68\40\143\157\155\155\141\163", "\x68\x6e\155\147\x65\160\x69\163"), "\x61\144\144\x5f\157\162\x5f\162\x65\x6d\x6f\x76\145\x5f\x69\x74\x65\x6d\x73" => __("\101\144\144\x20\157\x72\40\x72\x65\x6d\x6f\x76\145\40\x69\x74\145\155\163", "\x68\156\x6d\147\145\x70\x69\163"), "\x63\x68\157\157\x73\x65\137\x66\162\157\155\137\x6d\x6f\x73\164\137\x75\x73\145\144" => __("\x43\x68\157\x6f\163\x65\x20\x66\162\x6f\155\40\164\x68\145\40\x6d\157\x73\164\x20\x75\x73\x65\x64", "\150\156\155\x67\145\160\x69\163"), "\160\x6f\x70\165\154\141\162\137\151\164\145\x6d\x73" => __("\x50\x6f\160\x75\154\141\162\x20\x49\164\145\x6d\163", "\x68\156\155\147\x65\x70\x69\x73"), "\x73\145\x61\162\143\x68\x5f\x69\164\x65\x6d\163" => __("\x53\x65\x61\x72\x63\x68\40\111\x74\x65\x6d\x73", "\150\x6e\155\x67\x65\160\151\x73"), "\156\x6f\164\x5f\146\157\165\x6e\144" => __("\x4e\x6f\x74\x20\x46\x6f\x75\x6e\144", "\150\156\x6d\x67\145\x70\x69\x73"), "\156\157\x5f\164\x65\162\155\163" => __("\116\157\40\151\164\x65\155\163", "\x68\x6e\155\147\145\160\151\163"), "\151\x74\x65\x6d\x73\x5f\154\x69\x73\164" => __("\x49\x74\x65\155\x73\40\x6c\151\x73\x74", "\150\x6e\155\x67\x65\x70\151\163"), "\151\x74\145\x6d\163\137\154\x69\163\164\x5f\156\141\166\151\x67\141\164\x69\x6f\156" => __("\x49\x74\x65\155\x73\40\x6c\151\163\164\40\x6e\x61\x76\151\x67\141\164\151\x6f\156", "\150\x6e\x6d\x67\145\x70\x69\163")); goto bdSz6; gxqcW: register_taxonomy("\x65\160\151\x73\157\x64\145\x2d\x74\x79\160\x65\x73", array("\160\x6f\163\164"), $args); goto xXm3c; bdSz6: $args = array("\154\141\x62\x65\154\163" => $labels, "\150\x69\x65\162\141\x72\x63\x68\151\143\x61\x6c" => false, "\x70\165\142\154\x69\143" => true, "\x73\150\157\x77\137\165\151" => true, "\x73\x68\157\167\137\x61\144\x6d\151\x6e\137\x63\x6f\x6c\x75\155\x6e" => false, "\x73\x68\x6f\x77\137\x69\156\x5f\x6e\x61\166\137\155\145\156\165\163" => false, "\163\x68\x6f\x77\x5f\x74\141\x67\x63\x6c\157\165\x64" => true, "\x73\150\157\167\x5f\151\x6e\x5f\x72\x65\163\164" => false); goto gxqcW; xXm3c: } public function hnactors_taxonomy() { $args = array("\x6c\x61\142\x65\154\x73" => array("\x6e\x61\155\145" => __("\101\143\164\157\162\x73", "\150\156\155\x67\145\160\x69\x73"), "\163\151\x6e\x67\165\x6c\141\162" => "\101\x63\x74\157\162\x73", "\155\x65\156\x75\x2d\156\141\x6d\x65" => "\x41\x63\x74\157\x72\163", "\141\154\154\137\151\x74\145\155" => "\101\x6c\x6c\x20\141\x63\164\157\x72\x73", "\141\x64\x64\x5f\x6e\145\167\x5f\151\164\145\155" => "\101\144\144\40\x6e\x65\x77\x20\x61\x63\164\157\x72"), "\150\151\145\x72\141\x72\x63\x68\x69\143\141\x6c" => false, "\160\165\x62\x6c\151\143" => true, "\x73\150\157\x77\137\x75\151" => true, "\x73\x68\157\x77\x5f\x61\144\x6d\x69\x6e\x5f\x63\157\x6c\165\x6d\156" => true, "\163\150\x6f\167\x5f\164\x61\147\x63\154\x6f\x75\x64" => true, "\x73\150\157\167\137\x69\x6e\137\x6e\141\x76\x5f\x6d\145\x6e\x75\x73" => true, "\163\150\x6f\167\x5f\151\156\x5f\162\145\163\164" => true); register_taxonomy("\x61\143\x74\x6f\162", "\x70\157\163\x74", $args); } public function hndirectors_taxonomy() { $args = array("\x6c\x61\142\145\x6c\x73" => array("\x6e\x61\x6d\145" => __("\104\151\x72\x65\x63\164\x6f\162\163", "\150\x6e\x6d\147\145\x70\151\x73"), "\163\x69\156\147\x75\x6c\x61\162" => "\x44\x69\162\145\143\x74\157\162\163", "\155\x65\156\165\x2d\x6e\x61\155\145" => "\104\x69\162\x65\143\164\157\162\163", "\x61\x6c\154\x5f\x69\x74\145\155" => "\101\154\x6c\x20\x44\x69\x72\x65\x63\x74\x6f\x72\163", "\x61\144\144\x5f\x6e\x65\x77\137\x69\x74\145\155" => "\101\x64\144\40\x6e\x65\167\40\144\x69\x72\x65\143\164\157\162"), "\x68\x69\145\x72\141\162\143\x68\x69\143\141\154" => false, "\x70\165\x62\154\x69\x63" => true, "\x73\x68\157\167\x5f\x75\151" => true, "\163\x68\157\167\x5f\141\x64\155\151\x6e\x5f\x63\x6f\x6c\165\155\x6e" => true, "\x73\x68\x6f\x77\x5f\x74\x61\x67\143\x6c\x6f\x75\x64" => true, "\163\150\157\x77\137\x69\156\137\x72\x65\x73\x74" => true, "\163\x68\x6f\167\x5f\151\x6e\137\x6e\x61\x76\137\x6d\x65\156\x75\163" => true); register_taxonomy("\x64\151\162\x65\143\164\x6f\x72", "\160\157\163\164", $args); } public function hnrelease_taxonomy() { $args = array("\x6c\141\x62\145\154\163" => array("\x6e\141\155\x65" => __("\x52\145\x6c\x65\141\x73\145", "\150\x6e\155\x67\x65\160\x69\163"), "\x73\151\x6e\147\165\x6c\141\x72" => "\122\x65\154\x65\x61\x73\145", "\x6d\145\x6e\x75\55\x6e\141\x6d\x65" => "\x52\145\x6c\145\x61\x73\x65", "\x61\154\154\137\x69\x74\x65\x6d" => "\x56\151\145\x77\40\x61\x6c\154", "\141\144\144\137\x6e\145\167\x5f\x69\x74\145\155" => "\x41\x64\144\40\156\x65\167"), "\x68\x69\145\x72\141\x72\x63\x68\x69\143\x61\x6c" => false, "\160\165\x62\x6c\x69\x63" => true, "\x73\x68\157\x77\137\165\x69" => true, "\x73\x68\157\x77\x5f\x61\144\x6d\x69\156\137\x63\157\154\165\x6d\x6e" => true, "\x73\150\x6f\x77\137\x74\141\147\143\x6c\157\165\x64" => true, "\x73\x68\157\167\x5f\x69\x6e\x5f\162\x65\x73\x74" => true, "\x73\x68\x6f\x77\137\151\x6e\137\x6e\141\x76\137\x6d\145\x6e\165\163" => true); register_taxonomy("\162\x65\154\145\x61\x73\x65", "\160\157\x73\x74", $args); } public function hncountry_taxonomy() { $args = array("\154\x61\142\145\x6c\x73" => array("\156\141\155\x65" => __("\103\x6f\x75\x6e\164\x72\171", "\150\156\155\x67\x65\x70\151\x73"), "\x73\x69\x6e\147\165\154\141\x72" => "\103\x6f\x75\156\164\x72\x79", "\155\x65\156\x75\x2d\x6e\141\x6d\145" => "\x43\157\165\x6e\164\x72\x79", "\x61\x6c\154\137\x69\x74\145\155" => "\x56\x69\145\x77\40\x61\x6c\x6c", "\x61\144\x64\x5f\156\x65\167\x5f\x69\164\x65\155" => "\x41\x64\x64\40\x6e\145\x77\x20\x63\x6f\165\156\164\162\x79"), "\x68\151\145\x72\x61\x72\x63\x68\x69\143\141\x6c" => false, "\x70\x75\142\154\x69\x63" => true, "\163\150\157\167\137\165\x69" => true, "\x73\x68\157\x77\137\x61\x64\155\151\x6e\137\143\157\x6c\x75\x6d\156" => true, "\163\150\157\x77\x5f\151\156\137\x72\145\x73\164" => true, "\163\150\x6f\x77\137\x74\141\x67\x63\154\x6f\165\144" => true, "\x73\x68\157\167\x5f\x69\x6e\x5f\156\x61\166\137\155\145\156\x75\x73" => true); register_taxonomy("\x63\x6f\x75\156\x74\x72\x79", "\x70\157\x73\x74", $args); } public function hnnews_taxonomy() { goto VXjNk; wlzgr: $rewrite = array("\x73\154\165\x67" => "\156\145\167\x73\55\143\x61\x74", "\x77\151\x74\x68\137\146\x72\157\156\x74" => true, "\150\x69\145\162\x61\x72\x63\150\151\143\x61\154" => true); goto DShBA; nzAzk: register_taxonomy("\156\x65\x77\163\x5f\x63\x61\x74", array("\x6e\x65\167\x73"), $args); goto e6jYr; DShBA: $args = array("\154\x61\142\145\x6c\163" => $labels, "\150\141\x73\x5f\x61\162\143\x68\151\166\145" => true, "\x68\x69\x65\162\x61\x72\x63\x68\151\x63\x61\x6c" => true, "\160\165\x62\x6c\x69\143" => true, "\x73\x68\x6f\x77\x5f\165\x69" => true, "\x73\x68\x6f\167\137\141\x64\x6d\x69\x6e\137\x63\157\x6c\165\155\156" => true, "\x73\x68\157\167\137\151\156\x5f\156\x61\166\x5f\155\x65\156\165\163" => true, "\x73\x68\x6f\167\x5f\164\x61\147\143\154\157\x75\144" => false, "\x71\165\145\162\x79\137\166\141\162" => "\x6e\145\x77\163\x2d\143\141\x74", "\162\x65\x77\162\x69\164\145" => $rewrite); goto nzAzk; VXjNk: $labels = array("\156\x61\155\145" => __("\x4e\x65\167\163\x20\143\141\x74\145\x67\157\162\x69\145\x73", "\x68\156\x6d\147\x65\160\151\x73"), "\163\x69\156\147\x75\154\141\x72\137\x6e\141\155\x65" => __("\116\145\167\163\40\143\x61\x74\x65\147\x6f\162\171", "\x68\156\155\147\x65\x70\x69\163"), "\155\145\156\x75\x5f\x6e\141\x6d\x65" => __("\116\x65\167\163\40\x63\141\164\x65\147\x6f\162\x69\145\x73", "\x68\156\x6d\x67\145\x70\151\163"), "\141\154\x6c\137\x69\164\145\155\x73" => __("\x41\154\x6c\x20\143\141\164\145\147\157\162\151\x65\x73", "\x68\x6e\x6d\147\145\x70\x69\x73")); goto wlzgr; e6jYr: } public function hnnews_posttype() { goto dBiEB; iIwCI: $args = array("\x6c\141\142\145\154" => __("\x4e\145\x77\163", "\150\156\x6d\147\x65\x70\151\163"), "\x6c\x61\x62\x65\x6c\x73" => $labels, "\163\x75\x70\x70\x6f\162\x74\163" => array("\164\151\164\x6c\145", "\145\144\x69\x74\x6f\162", "\164\150\x75\155\x62\x6e\x61\151\154", "\x63\165\163\164\x6f\x6d\x2d\146\151\145\x6c\144\x73"), "\150\x69\145\162\141\162\143\x68\x69\x63\141\x6c" => false, "\160\165\x62\x6c\151\143" => true, "\x73\x68\x6f\167\137\x75\151" => true, "\x73\150\x6f\x77\x5f\151\156\137\155\x65\x6e\165" => true, "\155\145\x6e\x75\137\x70\x6f\x73\151\x74\151\x6f\x6e" => 5, "\x73\x68\157\x77\137\x69\156\137\141\144\x6d\x69\156\137\142\141\x72" => true, "\163\150\157\x77\137\x69\156\x5f\156\141\166\x5f\x6d\x65\156\x75\163" => true, "\x63\141\x6e\137\145\x78\160\157\162\164" => true, "\150\141\x73\x5f\141\x72\x63\150\x69\166\x65" => true, "\x65\x78\x63\x6c\x75\144\145\x5f\146\162\x6f\155\137\163\145\x61\162\x63\150" => true, "\x70\165\x62\x6c\x69\x63\154\x79\x5f\161\165\x65\162\171\x61\x62\154\x65" => true, "\x63\x61\x70\x61\x62\x69\x6c\151\x74\171\137\x74\x79\160\145" => "\x70\x6f\163\x74", "\155\145\156\x75\x5f\x69\143\157\156" => "\144\x61\163\x68\x69\x63\x6f\156\x73\55\151\144"); goto ZNsFo; dBiEB: $labels = array("\x6e\x61\155\x65" => __("\x4e\x65\x77\163", "\x68\156\155\x67\x65\160\x69\x73"), "\163\151\156\x67\x75\x6c\141\162\137\x6e\x61\155\x65" => __("\x4e\145\x77\x73", "\150\x6e\155\x67\145\160\x69\x73"), "\155\x65\156\165\x5f\x6e\141\x6d\145" => __("\x4e\x65\x77\163", "\150\x6e\155\x67\x65\x70\x69\x73"), "\156\141\155\x65\137\141\x64\155\151\156\137\142\x61\x72" => __("\101\x64\144\x20\x6e\x65\x77\163", "\x68\x6e\x6d\x67\145\x70\x69\163")); goto iIwCI; ZNsFo: register_post_type("\156\145\167\x73", $args); goto CCzva; CCzva: } public function hnnews_tag() { goto BDE9l; BDE9l: $labels = array("\x6e\x61\x6d\145" => __("\x4e\145\x77\163\40\x74\x61\x67\163", "\150\156\x6d\x67\145\160\151\163"), "\x73\x69\156\147\165\x6c\x61\x72\137\156\x61\155\145" => __("\x4e\x65\x77\163\x20\164\x61\x67", "\x68\156\155\x67\145\x70\x69\163"), "\x6d\145\x6e\165\137\x6e\x61\x6d\x65" => __("\116\145\x77\x73\40\164\141\147\163", "\x68\156\x6d\147\145\160\x69\x73")); goto mfLqf; mfLqf: $args = array("\x6c\x61\142\x65\154\x73" => $labels, "\150\151\x65\x72\141\x72\143\150\151\x63\x61\154" => false, "\x70\165\142\x6c\151\143" => true, "\x73\150\x6f\x77\137\x75\151" => true, "\x73\150\157\x77\x5f\141\x64\x6d\x69\156\137\143\157\154\165\155\156" => true, "\163\150\157\x77\x5f\x69\156\137\x6e\141\x76\x5f\155\145\x6e\x75\163" => true, "\x73\150\x6f\167\x5f\x74\141\147\x63\x6c\x6f\x75\x64" => true, "\161\x75\145\x72\171\x5f\x76\141\x72" => "\x6e\145\x77\x73\55\164\141\147"); goto F0vtq; F0vtq: register_taxonomy("\x6e\145\x77\163\137\x74\141\147", array("\156\145\x77\163"), $args); goto YFVdd; YFVdd: } public function hnvideo_posttype() { goto Z2SA0; G8nvQ: register_post_type("\x76\x69\x64\145\x6f", $args); goto P0QdA; o5wJA: $args = array("\x6c\141\142\145\x6c" => __("\126\151\x64\145\157", "\x68\x6e\x6d\147\x65\160\151\163"), "\154\141\142\x65\x6c\x73" => $labels, "\x73\165\x70\160\157\162\164\163" => array("\164\x69\164\x6c\145", "\x65\144\x69\164\157\x72", "\164\x68\165\x6d\142\x6e\x61\151\154", "\143\x75\x73\x74\x6f\x6d\x2d\146\151\145\154\x64\x73"), "\150\151\x65\162\x61\x72\x63\150\x69\x63\x61\154" => false, "\x70\x75\x62\154\151\143" => true, "\x73\150\157\167\137\165\x69" => true, "\x73\150\x6f\167\137\151\156\x5f\x6d\145\156\x75" => true, "\x6d\145\156\x75\137\x70\x6f\163\x69\x74\x69\157\156" => 5, "\163\x68\x6f\167\x5f\151\x6e\x5f\141\x64\155\151\156\137\x62\x61\162" => true, "\163\150\157\167\x5f\x69\156\137\156\x61\166\137\x6d\x65\x6e\165\x73" => true, "\x63\x61\156\x5f\145\x78\x70\x6f\x72\164" => true, "\150\x61\163\x5f\141\x72\143\x68\x69\x76\145" => true, "\145\170\x63\x6c\x75\144\145\137\x66\x72\157\x6d\x5f\x73\x65\x61\162\143\150" => true, "\160\x75\142\154\x69\143\x6c\x79\137\x71\x75\145\x72\x79\141\x62\154\145" => true, "\143\x61\160\141\x62\151\x6c\x69\164\171\137\164\x79\x70\145" => "\160\157\163\x74", "\x6d\x65\x6e\165\x5f\x69\x63\x6f\x6e" => "\144\x61\163\150\151\143\157\x6e\163\55\x76\151\x64\145\157\x2d\x61\x6c\x74\63"); goto G8nvQ; Z2SA0: $labels = array("\156\x61\x6d\x65" => __("\126\x69\144\145\157\163", "\150\156\155\x67\145\x70\x69\163"), "\x73\x69\x6e\147\x75\x6c\x61\162\x5f\x6e\x61\155\145" => __("\x56\151\144\145\x6f", "\150\156\x6d\x67\145\x70\x69\x73"), "\155\145\156\165\137\156\x61\155\x65" => __("\126\151\x64\145\x6f\163", "\x68\x6e\x6d\x67\145\x70\151\x73"), "\x6e\x61\155\145\x5f\141\x64\155\x69\156\x5f\x62\x61\162" => __("\x41\144\x64\x20\x6e\145\167\x20\166\151\144\x65\157", "\x68\x6e\155\147\x65\x70\x69\x73")); goto o5wJA; P0QdA: } public function hnvideo_taxonomy() { goto qPRoY; qPRoY: $labels = array("\156\x61\x6d\145" => __("\126\x69\144\x65\x6f\x20\103\141\164\x65\147\157\162\x69\x65\163", "\150\156\x6d\x67\x65\x70\151\163"), "\x73\151\156\147\165\x6c\x61\x72\137\x6e\x61\x6d\145" => __("\126\151\x64\145\157\40\103\141\164\145\147\157\162\x79", "\x68\x6e\155\x67\145\x70\151\x73"), "\155\145\156\165\x5f\x6e\141\x6d\145" => __("\126\151\144\x65\x6f\x20\x43\141\x74\x65\x67\x6f\162\151\145\163", "\150\156\x6d\147\145\160\x69\163"), "\141\x6c\154\137\x69\x74\x65\x6d\x73" => __("\101\x6c\x6c\x20\x63\x61\164\x65\147\157\x72\x69\x65\163", "\150\156\155\x67\x65\160\x69\163")); goto tl6Oh; tl6Oh: $rewrite = array("\x73\x6c\165\147" => "\166\151\x64\x65\x6f\55\143\141\164", "\167\x69\x74\x68\137\146\162\x6f\x6e\164" => true, "\x68\151\x65\162\x61\x72\143\150\151\x63\x61\x6c" => true); goto p2wds; p2wds: $args = array("\x6c\141\142\x65\x6c\163" => $labels, "\150\141\163\137\141\x72\x63\x68\151\166\145" => true, "\150\x69\x65\x72\x61\x72\143\150\x69\143\141\154" => true, "\160\165\142\154\x69\x63" => true, "\163\x68\157\167\137\x75\x69" => true, "\x73\x68\x6f\x77\137\x61\x64\x6d\x69\x6e\x5f\143\x6f\x6c\x75\155\156" => true, "\163\x68\157\x77\137\151\156\137\156\x61\x76\x5f\155\x65\156\165\x73" => true, "\163\150\x6f\167\137\x74\141\147\x63\x6c\x6f\165\x64" => false, "\161\x75\x65\162\171\137\x76\x61\162" => "\166\x69\x64\145\157\55\143\141\x74", "\162\145\167\x72\x69\x74\x65" => $rewrite); goto Qu061; Qu061: register_taxonomy("\166\151\x64\145\x6f\137\x63\141\x74", array("\x76\151\144\x65\157"), $args); goto MNsqs; MNsqs: } public function hnvideo_tag() { goto y8RUp; YdfJm: register_taxonomy("\166\x69\144\x65\157\137\x74\x61\147", array("\166\x69\144\x65\x6f"), $args); goto fZmqy; k3i0u: $args = array("\154\x61\142\145\154\x73" => $labels, "\x68\x69\x65\x72\x61\x72\x63\150\151\x63\141\x6c" => false, "\x70\x75\142\x6c\x69\x63" => true, "\x73\x68\x6f\167\137\165\151" => true, "\x73\x68\157\167\137\141\x64\x6d\x69\156\137\x63\157\154\x75\155\x6e" => true, "\x73\150\157\167\137\151\x6e\x5f\x6e\x61\x76\x5f\x6d\145\156\165\163" => true, "\163\150\x6f\167\137\164\141\147\143\154\157\165\x64" => true, "\162\x65\167\162\x69\164\145" => $rewrite); goto YdfJm; uGhf1: $rewrite = array("\163\x6c\165\147" => "\166\x69\144\145\x6f\55\164\x61\x67", "\167\151\x74\150\137\x66\162\x6f\156\x74" => true, "\150\x69\x65\162\x61\162\x63\x68\x69\x63\141\154" => true); goto k3i0u; y8RUp: $labels = array("\x6e\141\x6d\145" => __("\126\x69\x64\x65\x6f\x20\164\x61\x67\x73", "\x68\156\155\x67\x65\x70\151\x73"), "\163\151\156\x67\165\x6c\x61\162\x5f\x6e\141\x6d\x65" => __("\x56\x69\x64\x65\157\x20\164\141\147", "\150\x6e\x6d\x67\145\x70\x69\x73"), "\x6d\x65\156\165\137\x6e\141\155\145" => __("\x56\151\x64\x65\157\x20\164\x61\x67\x73", "\x68\x6e\155\147\145\160\x69\163")); goto uGhf1; fZmqy: } public function custom_post_formats_taxonomies() { goto X201X; X201X: $labels = array("\x6e\x61\155\x65" => _x("\123\x74\141\x74\165\x73", "\164\141\x78\x6f\156\x6f\x6d\x79\40\x67\145\x6e\145\x72\x61\154\x20\x6e\141\155\x65", "\164\x65\x78\164\144\157\x6d\x61\151\156"), "\163\151\x6e\147\x75\154\141\x72\x5f\156\141\x6d\x65" => _x("\123\x74\141\x74\165\163", "\x74\x61\x78\157\156\x6f\x6d\171\40\x73\151\x6e\147\x75\154\x61\x72\40\x6e\141\x6d\145", "\x74\x65\x78\164\144\x6f\x6d\141\x69\156"), "\163\145\x61\162\x63\150\x5f\x69\x74\145\155\x73" => __("\123\145\x61\x72\143\150\40\123\x74\141\164\165\163", "\x74\145\170\x74\144\x6f\x6d\141\x69\156"), "\141\154\x6c\137\151\164\x65\x6d\163" => __("\x41\154\x6c\40\123\x74\141\x74\165\163", "\x74\x65\x78\x74\144\157\x6d\141\x69\156"), "\160\x61\162\x65\156\164\x5f\151\x74\145\155" => __("\x50\141\x72\145\156\x74\40\x53\164\141\x74\165\163", "\x74\x65\170\164\144\x6f\155\141\151\x6e"), "\x70\141\162\145\x6e\164\137\x69\164\145\155\x5f\143\157\x6c\x6f\x6e" => __("\120\141\162\x65\x6e\x74\40\x53\x74\141\x74\165\163\72", "\x74\x65\170\164\x64\157\x6d\141\x69\156"), "\x65\x64\151\164\137\x69\164\145\x6d" => __("\x45\x64\151\164\40\x53\x74\141\164\x75\x73", "\164\145\x78\x74\x64\x6f\155\x61\151\x6e"), "\x75\160\x64\141\164\x65\x5f\x69\x74\145\155" => __("\125\160\144\141\164\145\x20\x53\x74\x61\164\x75\163", "\164\x65\x78\164\144\157\155\x61\151\156"), "\x61\144\x64\x5f\x6e\145\x77\x5f\x69\164\145\155" => __("\x41\x64\144\x20\116\x65\x77\40\x53\x74\141\164\165\163", "\164\145\x78\164\144\157\155\x61\151\x6e"), "\x6e\145\167\x5f\x69\x74\x65\x6d\x5f\156\x61\155\145" => __("\x4e\x65\x77\x20\123\164\141\x74\165\x73\40\116\x61\x6d\x65", "\x74\x65\x78\164\x64\157\155\x61\x69\156"), "\155\145\156\x75\137\156\141\x6d\145" => __("\123\x74\141\164\x75\163", "\x74\145\170\x74\x64\x6f\155\x61\151\x6e")); goto rKsVD; rKsVD: $args = array("\150\151\x65\162\x61\x72\143\x68\151\x63\x61\x6c" => true, "\154\x61\x62\x65\x6c\163" => $labels, "\163\150\x6f\167\137\x75\x69" => true, "\x73\x68\157\x77\137\141\144\155\x69\x6e\x5f\143\x6f\154\x75\x6d\x6e" => true, "\161\x75\x65\x72\171\x5f\x76\x61\162" => true, "\x72\x65\x77\162\151\x74\x65" => array("\x73\154\x75\x67" => "\163\x74\141\x74\165\x73"), "\143\141\160\x61\142\x69\x6c\151\x74\x69\145\x73" => array("\x6d\141\x6e\x61\147\145\137\164\x65\x72\x6d\163" => '', "\x65\x64\151\x74\x5f\164\145\x72\155\x73" => '', "\x64\145\154\x65\x74\145\137\164\x65\162\155\163" => '', "\141\x73\x73\x69\x67\156\x5f\x74\x65\162\x6d\163" => "\x65\144\151\x74\x5f\160\157\x73\164\x73"), "\x70\x75\x62\154\x69\x63" => true, "\163\x68\157\x77\x5f\151\156\137\156\141\x76\137\155\145\x6e\165\163" => false, "\x73\x68\157\167\137\x74\x61\x67\x63\x6c\x6f\x75\x64" => false); goto xlYXJ; xlYXJ: register_taxonomy("\x73\x74\x61\x74\165\x73", array("\160\157\163\x74"), $args); goto Mt3WG; Mt3WG: } public function haun_register_taxonomy_post_options() { goto bM_w8; bM_w8: $labels = array("\156\141\155\x65" => _x("\120\157\163\164\x20\157\160\x74\151\x6f\x6e\x73", "\x74\141\x78\157\x6e\x6f\x6d\x79\x20\x67\145\156\145\162\141\154\40\x6e\141\x6d\145", "\164\x65\x78\164\x64\x6f\x6d\x61\151\x6e"), "\163\x69\156\x67\165\154\x61\x72\x5f\156\141\x6d\145" => _x("\x50\157\163\164\40\x6f\x70\164\151\157\x6e\163", "\x74\x61\x78\157\156\157\x6d\x79\40\163\151\156\x67\165\154\x61\x72\40\x6e\x61\x6d\x65", "\x74\x65\x78\164\x64\157\155\x61\x69\156"), "\163\x65\141\x72\143\x68\x5f\x69\164\x65\x6d\x73" => __("\x53\145\x61\x72\x63\150\x20\157\160\164\x69\157\x6e", "\164\x65\x78\x74\144\157\x6d\141\x69\156"), "\141\154\154\137\x69\x74\x65\155\163" => __("\101\x6c\154\40\157\x70\x74\x69\157\156\x73", "\x74\145\x78\x74\x64\157\x6d\141\151\156"), "\x70\141\162\x65\x6e\x74\x5f\x69\164\x65\x6d" => __("\120\x61\x72\x65\156\164", "\164\x65\170\164\144\157\x6d\x61\x69\x6e"), "\160\x61\162\x65\x6e\x74\x5f\x69\x74\x65\155\137\143\x6f\x6c\x6f\156" => __("\x50\x61\162\x65\x6e\x74", "\164\x65\170\164\x64\157\155\x61\151\156"), "\x65\x64\151\x74\137\151\164\x65\155" => __("\105\x64\151\164", "\164\145\170\164\144\x6f\x6d\x61\x69\156"), "\x75\160\144\141\x74\145\x5f\x69\164\x65\155" => __("\125\x70\144\x61\164\x65", "\164\145\x78\x74\x64\157\x6d\x61\151\x6e"), "\x61\144\x64\137\x6e\145\167\137\151\x74\x65\155" => __("\101\144\x64\x20\x4e\x65\x77", "\164\x65\170\164\x64\157\155\141\151\156"), "\156\x65\167\x5f\x69\164\x65\155\137\x6e\x61\155\x65" => __("\x4e\x65\167\x20\x6f\x70\164\151\x6f\156\40\x6e\141\x6d\x65", "\x74\x65\x78\164\144\157\x6d\141\x69\156"), "\x6d\x65\x6e\x75\137\156\141\155\145" => __("\x4f\x70\164\x69\157\x6e\x73", "\164\x65\170\164\x64\157\x6d\x61\151\x6e")); goto r27PL; r27PL: $args = array("\x68\x69\x65\162\141\162\143\x68\x69\x63\x61\154" => true, "\154\141\142\145\154\163" => $labels, "\163\150\x6f\167\137\x75\151" => true, "\x73\x68\157\167\137\x61\144\x6d\x69\156\137\x63\157\154\165\x6d\156" => true, "\x71\x75\x65\x72\171\x5f\x76\141\162" => true, "\x72\x65\x77\x72\x69\164\145" => array("\163\x6c\x75\x67" => "\160\x6f\163\164\x5f\x6f\x70\x74\x69\x6f\156\x73"), "\x63\x61\160\141\x62\151\154\151\x74\151\x65\x73" => array("\x6d\x61\156\x61\x67\145\137\164\x65\x72\x6d\x73" => '', "\x65\144\151\164\x5f\164\x65\x72\155\163" => '', "\x64\x65\x6c\145\x74\x65\x5f\164\145\162\155\163" => '', "\x61\x73\x73\151\x67\156\x5f\164\145\x72\x6d\163" => "\145\144\x69\x74\x5f\160\x6f\x73\x74\163"), "\x70\165\x62\x6c\151\143" => true, "\x73\x68\x6f\x77\x5f\151\x6e\137\156\141\x76\x5f\155\145\156\x75\163" => false, "\163\x68\157\167\x5f\x74\141\x67\143\x6c\x6f\x75\x64" => false); goto EJofl; EJofl: register_taxonomy("\x70\x6f\163\164\x5f\157\160\x74\x69\x6f\x6e\x73", array("\x70\x6f\163\x74"), $args); goto O2lSQ; O2lSQ: } public function haun_cusom_wp_insert_term() { goto F1zsZ; cv1X1: wp_insert_term("\101\144\x64\40\164\x6f\40\167\x69\x64\x67\x65\164\40\x22\117\x6e\x65\x20\123\x6c\151\x64\x65\x22\x20\x28\x53\154\151\x64\x65\162\40\x6f\x6e\x65\40\x62\171\40\157\156\x65\x29", "\160\157\x73\164\x5f\157\160\164\x69\x6f\x6e\163", array("\144\145\163\x63\x72\x69\x70\164\151\157\x6e" => "\x41\x64\144\40\164\x6f\x20\x77\x69\x64\x67\x65\x74\x20\x22\x4f\x6e\145\40\x53\x6c\151\144\x65\42\40\x28\123\154\x69\144\x65\x72\40\x6f\156\145\x20\x62\x79\40\157\156\x65\x29", "\163\x6c\165\147" => "\151\163\137\157\x6e\x65\137\x73\x6c\151\144\x65")); goto I7VKz; vRV7R: BnVVH: goto jVwSE; F0G1b: GQ6X_: goto psKl0; I7VKz: ovhB6: goto zvsp8; AxaCW: if (term_exists("\160\x61\x67\151\x6e\x67\137\x65\x70\x69\x73\x6f\144\145", "\160\157\163\x74\x5f\x6f\160\x74\x69\x6f\x6e\163")) { goto BnVVH; } goto TZLvM; vYi70: wp_insert_term("\x54\x72\141\151\154\145\162", "\x73\164\x61\x74\165\x73", array("\x64\145\163\x63\162\x69\160\x74\x69\157\156" => "\x54\162\141\151\x6c\145\162", "\x73\x6c\x75\147" => "\x69\163\x5f\164\x72\x61\151\154\145\162")); goto QYShA; PhDCL: if (term_exists("\x6f\156\x67\157\x69\156\x67", "\163\x74\x61\164\x75\x73")) { goto GQ6X_; } goto MmHQT; ZwjwQ: AOZG1: goto AxaCW; t7yeO: wp_insert_term("\x43\157\x6d\x70\x6c\145\164\145\144", "\x73\x74\x61\164\x75\163", array("\144\145\163\143\x72\x69\x70\164\x69\157\x6e" => "\103\157\x6d\160\154\145\x74\145\x64", "\163\x6c\165\x67" => "\143\x6f\155\160\x6c\x65\x74\x65\144")); goto q2cAz; MmHQT: wp_insert_term("\x4f\156\x67\157\x69\156\x67", "\163\x74\141\164\165\163", array("\x64\145\163\x63\162\151\x70\x74\x69\157\x6e" => "\x4f\156\x67\x6f\151\156\147", "\163\154\x75\147" => "\x6f\156\147\x6f\x69\x6e\x67")); goto F0G1b; TZLvM: wp_insert_term("\120\141\x67\151\x6e\x67\40\x74\150\145\40\145\x70\x69\163\x6f\x64\145\40\x6c\x69\163\164", "\160\157\x73\164\137\157\x70\164\x69\157\156\x73", array("\x64\145\x73\143\162\x69\x70\164\x69\157\156" => "\x50\x61\x67\x69\156\x67\40\x74\x68\x65\x20\x65\x70\x69\x73\157\144\x65\x20\154\151\163\x74", "\163\154\165\147" => "\160\x61\147\151\156\147\137\145\160\x69\163\157\x64\145")); goto vRV7R; q2cAz: bVB8t: goto PhDCL; psKl0: if (term_exists("\151\x73\137\164\162\141\151\x6c\x65\x72", "\x73\x74\141\164\x75\163")) { goto XZm3P; } goto vYi70; QYShA: XZm3P: goto AfeXE; AfeXE: if (term_exists("\151\163\x5f\157\x6e\x65\x5f\x73\154\x69\x64\145", "\x70\157\163\x74\137\157\160\x74\x69\x6f\x6e\163")) { goto ovhB6; } goto cv1X1; jFIgA: wp_insert_term("\101\x64\x64\x20\164\x6f\40\x77\151\x64\147\145\164\x20\42\x43\x61\x72\157\165\x73\x65\154\x20\123\154\x69\144\x65\x72\x22", "\x70\157\163\164\137\x6f\160\164\x69\157\x6e\x73", array("\x64\145\163\143\162\151\160\164\151\x6f\156" => "\101\144\x64\x20\164\157\x20\167\151\144\x67\x65\x74\40\x22\103\141\162\157\165\163\x65\x6c\40\123\154\151\x64\x65\162\42", "\163\154\165\x67" => "\151\163\137\143\141\x72\x6f\165\163\x65\154\x5f\163\x6c\151\144\x65")); goto ZwjwQ; F1zsZ: if (term_exists("\x63\x6f\155\x70\x6c\145\x74\x65\144", "\x73\164\x61\164\165\163")) { goto bVB8t; } goto t7yeO; zvsp8: if (term_exists("\151\163\x5f\143\x61\162\157\x75\163\145\154\137\163\154\x69\x64\x65", "\x70\x6f\163\164\x5f\x6f\x70\x74\x69\x6f\156\163")) { goto AOZG1; } goto jFIgA; jVwSE: } }
