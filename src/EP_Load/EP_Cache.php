<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; class EP_Cache { public $timeCache; public $folderCache; public function __construct() { goto PwW8T; SwNZ7: if (is_dir($this->folderCache)) { goto hyfQ9; } goto He90R; HgC3b: if (!function_exists("\127\x50\137\106\x69\x6c\145\x73\171\x73\164\145\155")) { require_once ABSPATH . "\x77\160\x2d\141\144\x6d\x69\x6e\x2f\151\156\x63\x6c\x75\x64\x65\x73\57\x66\151\x6c\x65\56\x70\150\x70"; } goto NTrqc; NTrqc: global $wp_filesystem; goto CkI2q; CkI2q: WP_Filesystem(); goto DDXIC; X6UHV: hyfQ9: goto I2VfC; He90R: wp_mkdir_p($this->folderCache); goto X6UHV; I2VfC: $this->timeCache = 3600; goto HgC3b; PwW8T: $this->folderCache = HNMG_CACHE; goto SwNZ7; DDXIC: $this->wp_filesystem = $wp_filesystem; goto OzX1K; OzX1K: } public function register() { goto sLV2h; QwW_2: CwyDd: goto NS4FJ; sLV2h: if (!(HNCORE()->get_product_status() == "\x63\x6f\156\156\x65\x63\164\145\144")) { goto CwyDd; } goto kXD3E; kXD3E: add_action("\167\160\x5f\141\x6a\x61\170\x5f\162\x65\163\x65\164\137\160\x6c\141\x79\145\162\x5f\143\x61\x63\x68\145", [$this, "\162\x65\x73\x65\164\137\160\x6c\141\171\x65\x72\x5f\x63\141\143\150\145"]); goto pGf_t; O28Zx: add_filter("\x48\x4e\115\107\55\160\x61\147\145\x73", [$this, "\x68\156\x61\x70\x69\x73\x6f\144\145\x5f\143\x61\x63\x68\145\x5f\155\145\156\x75"]); goto CmV5V; RBf2v: add_filter("\x48\x4e\x4d\x47\x2d\x74\x61\142\163", [$this, "\150\156\141\160\x69\x73\157\x64\145\x5f\143\x61\143\x68\x65\x5f\155\145\x6e\x75"]); goto O28Zx; pGf_t: add_action("\x77\160\137\141\x6a\141\170\137\x6e\x6f\160\162\151\x76\x5f\162\145\163\145\164\x5f\x70\154\x61\171\x65\162\137\143\x61\x63\x68\145", [$this, "\x72\x65\163\145\164\x5f\160\x6c\141\171\x65\162\x5f\x63\141\x63\x68\x65"]); goto RBf2v; zmZBI: add_action("\167\x70\x5f\141\x6a\141\x78\x5f\156\x6f\x70\x72\151\166\137\x64\x65\154\145\x74\145\137\141\154\154\x5f\143\141\143\x68\x65", [$this, "\144\145\x6c\x65\164\x65\137\x61\x6c\x6c\x5f\x63\x61\143\150\x65"]); goto QwW_2; CmV5V: add_action("\x77\160\137\141\x6a\141\170\137\x64\x65\154\145\164\x65\x5f\141\x6c\x6c\137\143\x61\x63\150\x65", [$this, "\x64\x65\154\x65\164\x65\137\x61\x6c\154\x5f\x63\x61\x63\150\x65"]); goto zmZBI; NS4FJ: } public function hnapisode_cache_menu($nav) { $nav["\61\x32\x30"] = array("\x73\x6c\165\147" => "\x68\156\x6d\x67\55\x63\x61\143\x68\145\x2d\155\141\156\141\147\x65\x72", "\x63\141\154\x6c\142\x61\143\153" => array($this, "\150\156\x6d\147\x5f\x63\141\143\150\x65\137\x6d\x61\156\141\x67\145\x5f\x70\141\147\145"), "\x74\151\x74\x6c\145" => __("\x48\116\115\107\x20\103\141\143\x68\145", "\150\156\x6d\147\x65\x70\151\x73"), "\x69\x63\x6f\156" => "\146\141\x2d\x70\154\x61\x79\55\x63\151\162\x63\x6c\145"); return $nav; } public function hnmg_cache_manage_page() { goto CIOfL; CIOfL: $cache_count = json_decode($this->cacheCount()); goto liWGr; gMD_B: echo view("\110\116\x4d\107\72\72\x6c\141\x79\x6f\x75\x74\x73\x2e\x63\x61\143\150\145", compact("\143\141\x63\x68\x65\137\x63\157\x75\x6e\164", "\x67\x65\164\137\143\141\143\150\x65")); goto S3J2F; liWGr: $get_cache = json_decode($this->getCache()); goto gMD_B; S3J2F: } public function delete_all_cache() { goto BgIM4; yJB5R: wp_send_json_success(["\x73\164\141\x74\165\163" => $status, "\x74\x6f\164\x61\154\137\x63\141\143\x68\x65" => $total_cache, "\x74\151\x6d\x65\x5f\x6c\x69\155\151\x74" => $time_limit, "\143\x61\x63\150\x65\x5f\x64\145\x6c\x65\x74\x65\144" => $cache_deleted]); goto ybsJU; t9zVL: $cache_deleted = $result["\x63\141\143\150\x65\137\144\x65\x6c\145\x74\x65\144"] ?? 0; goto yJB5R; DuJe_: $status = "\x53\165\x63\143\145\163\163\x66\x75\x6c\x6c\171"; goto Q7JU8; ybsJU: wp_die(); goto U65cf; oWQFa: $time_limit = $result["\164\151\x6d\x65\137\154\x69\x6d\151\164"] ?? 0; goto t9zVL; BgIM4: $result = json_decode($this->delAllCache(0), true); goto DuJe_; Q7JU8: $total_cache = $result["\164\157\164\x61\154\137\x63\141\x63\x68\x65"] ?? 0; goto oWQFa; U65cf: } public function delAllCache($timeCache) { goto NpIvI; NpIvI: $result = array("\x73\x74\x61\164\x75\x73" => 0, "\x74\x6f\x74\x61\x6c\x5f\143\x61\x63\150\x65" => 0, "\x74\x69\x6d\145\x5f\154\151\x6d\x69\x74" => $timeCache, "\x63\141\143\150\145\137\x64\x65\x6c\x65\x74\x65\x64" => 0, "\x63\141\143\x68\x65\x5f\143\x6f\165\156\164" => 0); goto bDoJf; Ty22N: $result["\143\x61\x63\x68\145\137\x64\145\x6c\x65\x74\x65\144"] = $j; goto y_6CQ; CJrh0: $result["\x74\157\x74\x61\x6c\137\x63\x61\143\x68\x65"] = $i; goto Ty22N; bDoJf: $getDirContents = $this->getDirContents($this->folderCache); goto yhGLl; y_6CQ: $result["\143\141\x63\150\x65\137\143\157\165\156\x74"] = $i - $j; goto irfyZ; s0zRv: $this->removeEmptySubFolders($this->folderCache); goto ZMUDJ; irfyZ: Sp1Wj: goto s0zRv; yhGLl: if (!$getDirContents) { goto Sp1Wj; } goto w9q0z; nO8cI: foreach ($getDirContents as $key => $value) { goto Cn4lC; JSWHH: ARHy0: goto DMwYZ; A4aYA: if (!unlink($value)) { goto kFktm; } goto QfM1w; zJ_u2: if (!($timeCache <= time() - filemtime($value))) { goto ARHy0; } goto TBHWV; TBHWV: $j++; goto A4aYA; VhDVv: nUo5e: goto eA3Mv; LVp7v: $i++; goto zJ_u2; Cn4lC: if (!(strpos($value, "\56\164\170\164") !== false)) { goto OpOse; } goto LVp7v; QfM1w: $result["\163\x74\x61\164\165\x73"] = 1; goto Em2KK; Em2KK: kFktm: goto JSWHH; DMwYZ: OpOse: goto VhDVv; eA3Mv: } goto NzNkg; w9q0z: $i = $j = 0; goto nO8cI; ZMUDJ: return json_encode($result); goto aV80t; NzNkg: ky5yA: goto CJrh0; aV80t: } public function reset_player_cache() { goto N87jH; szipU: $episode_slug = isset($_POST["\x65\160\151\163\x6f\x64\x65\x5f\x73\x6c\165\x67"]) ? str_replace("\x2d", "\137", wp_strip_all_tags($_POST["\145\x70\x69\x73\157\x64\145\137\163\154\x75\147"])) : ''; goto uDKj1; uDKj1: $film_meta = get_haunmovies($post_id, HNMG_EPS, true); goto IYGef; IYGef: $data = json_decode($film_meta, true); goto q6Q9K; WANps: wp_send_json($cacheData); goto EtBif; N87jH: $server = isset($_POST["\163\x65\x72\x76\145\162\x5f\x69\x64"]) ? (int) $_POST["\x73\145\162\166\145\x72\x5f\151\x64"] : ''; goto pKlvy; q6Q9K: $link = $data[$server - 1]["\x68\141\165\x6e\155\157\166\x69\x65\x73\x5f\x73\145\162\166\x65\x72\137\144\x61\164\x61"][$episode_slug]["\150\141\x75\156\x6d\x6f\x76\151\145\163\137\x65\x70\137\154\151\x6e\x6b"]; goto B21yV; pKlvy: $post_id = isset($_POST["\160\x6f\x73\x74\x5f\x69\144"]) ? (int) $_POST["\160\157\x73\164\137\151\144"] : ''; goto szipU; B21yV: $cacheData = $this->delCache($link); goto WANps; EtBif: } public function readCache($name) { goto dVC5O; CN49R: if ($this->timeCache != '') { goto V6WGK; } goto lq2tR; tDiX_: $result = ''; goto SbfKH; lq2tR: $result = file_get_contents($file); goto kL484; I0QdP: if (!($this->timeCache > time() - filemtime($file))) { goto XoRGJ; } goto iwq5E; ptcK9: if (!file_exists($file)) { goto w0pP_; } goto CN49R; kL484: goto sZDqA; goto DWPVL; QGBAU: $file = $this->folderCache . "\57" . $createFolderCache . "\x2f" . $name . "\56\x74\170\x74"; goto ptcK9; dVC5O: $name = md5(md5($name)); goto tDiX_; DWPVL: V6WGK: goto I0QdP; KFQc0: w0pP_: goto RK2h6; NhYcT: XoRGJ: goto NTN89; NTN89: sZDqA: goto KFQc0; SbfKH: $createFolderCache = $this->createFolderCache($name); goto QGBAU; RK2h6: return $result; goto EdqKH; iwq5E: $result = file_get_contents($file); goto NhYcT; EdqKH: } public function getCache() { goto tLCKM; tLCKM: $result = array(); goto yvw59; wE3tV: return json_encode($result); goto j3pkx; PPsUr: if (!$getDirContents) { goto XYdrs; } goto dipn0; HNKjx: SIPGn: goto wE3tV; yvw59: $getDirContents = $this->getDirContents($this->folderCache); goto O9mTm; O9mTm: $i = 0; goto PPsUr; dipn0: foreach ($getDirContents as $key => $value) { goto pNjcs; mcgFK: $result[] = array("\146\x69\x6c\145" => $value); goto sxzKn; pNjcs: if (!strpos($value, "\56\x74\x78\164")) { goto skzg1; } goto mcgFK; sxzKn: skzg1: goto NHbo7; NHbo7: xTZpO: goto QhgPW; QhgPW: } goto HNKjx; j3pkx: XYdrs: goto qgZ5c; qgZ5c: } public function saveCache($name, $data) { goto Fx048; Fx048: $name = md5(md5($name)); goto tHkrG; Q9tW4: $this->wp_filesystem->put_contents($index_file, "\74\77\x70\150\x70\40\x2f\x2f\40\123\x69\154\x65\156\x63\145\40\x69\163\40\147\x6f\154\144\145\x6e\56", FS_CHMOD_FILE); goto PPI33; ztoD3: if (is_dir($dir)) { goto kKm7Z; } goto XwlY2; XwlY2: mkdir($dir, 0777, true); goto ZSY0f; D0JVQ: if (is_dir($this->folderCache)) { goto jw60g; } goto nB2gc; CG7Dx: $this->wp_filesystem->put_contents($file, $data, FS_CHMOD_FILE); goto y9wOF; sMA8y: $file = $dir . "\57" . $name . "\x2e\164\x78\164"; goto ztoD3; tHkrG: $createFolderCache = $this->createFolderCache($name); goto D0JVQ; nB2gc: mkdir($this->folderCache, 0777, true); goto zh4CI; vkGVt: chmod($this->folderCache, 0777); goto cczTJ; ZSY0f: kKm7Z: goto CG7Dx; zh4CI: jw60g: goto NmUq4; y9wOF: $index_file = WP_CONTENT_DIR . "\57\x69\156\144\145\170\x2e\x70\150\x70"; goto Q9tW4; cczTJ: s61gd: goto xtxv7; xtxv7: $dir = $this->folderCache . "\x2f" . $createFolderCache; goto sMA8y; NmUq4: if (chmod($this->folderCache, 0777)) { goto s61gd; } goto vkGVt; PPI33: } public function delCache($name) { goto rNtwj; vosoF: uoGak: goto qjG93; dM2Ch: AWzzM: goto ROnew; VQ5zt: $createFolderCache = $this->createFolderCache($name); goto NoQFz; NoQFz: $file = $this->folderCache . "\x2f" . $createFolderCache . "\x2f" . $name . "\x2e\164\x78\x74"; goto KjXNU; KjXNU: if (file_exists($file)) { goto ijL4q; } goto BPEke; vl7K1: goto AWzzM; goto vosoF; BPEke: $result = array("\x73\164\141\x74\x75\x73" => 0, "\162\145\163\x75\154\164" => "\114\x69\x6e\x6b\x20\156\157\x74\40\145\170\151\x73\x74\163"); goto Ejggz; GtKRr: return $result; goto jUyfi; csRTg: if (unlink($file)) { goto uoGak; } goto fyWhY; Ejggz: goto BLa_R; goto ZiZSi; ZiZSi: ijL4q: goto csRTg; ROnew: BLa_R: goto GtKRr; rNtwj: $result = ''; goto GT2Dw; qjG93: $result = array("\x73\164\x61\164\165\163" => 1, "\162\145\x73\165\154\164" => "\104\145\x6c\145\164\x65\x64"); goto dM2Ch; fyWhY: $result = array("\163\164\141\x74\x75\x73" => 0, "\162\145\163\165\x6c\164" => "\x44\x65\x6c\x65\164\x65\40\x65\x72\x72\157\162"); goto vl7K1; GT2Dw: $name = md5(md5($name)); goto VQ5zt; jUyfi: } public function cacheCount() { goto ZaBto; fE2Ft: $getDirContents = $this->getDirContents($this->folderCache); goto To9my; CX6Xs: jMubZ: goto eVu6o; j18U7: m8mW3: goto CX6Xs; ZaBto: $result = array(); goto fE2Ft; Ha5si: foreach ($getDirContents as $key => $value) { goto bERtL; Gv3hj: vBhFC: goto mkeng; V9hVg: $result["\x74\x6f\164\141\x6c\137\x63\x61\x63\x68\x65"] = $i; goto ohS9X; q2Ov4: zzbry: goto Gv3hj; bERtL: if (!strpos($value, "\56\x74\x78\164")) { goto zzbry; } goto LvnE7; LvnE7: $result["\x72\x65\x73\x75\x6c\x74"] = 1; goto V9hVg; ohS9X: $i++; goto q2Ov4; mkeng: } goto j18U7; To9my: $i = 1; goto NNy9L; NNy9L: if (!$getDirContents) { goto jMubZ; } goto Ha5si; eVu6o: return json_encode($result); goto HyHbE; HyHbE: } private function createFolderCache($name) { goto DOuSY; CX5nr: return $folder1 . "\x2f" . $folder2; goto ryGOq; DOuSY: $folder1 = substr($name, 0, 2); goto ee7_l; ee7_l: $folder2 = substr($name, 2, 2); goto CX5nr; ryGOq: } private function getDirContents($dir, &$results = array()) { goto U3mmj; U3mmj: $files = scandir($dir); goto wR7mD; DlD_j: return $results; goto gCzci; wR7mD: foreach ($files as $key => $value) { goto qENjv; mzH9A: if (!is_dir($path)) { goto RqqXf; } goto FD2rB; Jr1h1: goto ng1D_; goto pRKfi; pRKfi: RqqXf: goto fMEoa; FD2rB: if (!($value != "\x2e" && $value != "\56\56")) { goto DKBeg; } goto geO5q; wTS25: N5A4a: goto pLVVf; RABml: $results[] = $path; goto nsejW; Qrsdn: ng1D_: goto wTS25; geO5q: $this->getDirContents($path, $results); goto RABml; fMEoa: $results[] = $path; goto Qrsdn; qENjv: $path = realpath($dir . DIRECTORY_SEPARATOR . $value); goto mzH9A; nsejW: DKBeg: goto Jr1h1; pLVVf: } goto bNATJ; bNATJ: vtuED: goto DlD_j; gCzci: } private function removeEmptySubFolders($path) { goto JeGfB; vc5R4: foreach (glob($path . DIRECTORY_SEPARATOR . "\52") as $file) { $empty &= is_dir($file) && $this->removeEmptySubFolders($file); GANmb: } goto tRATR; JeGfB: $empty = true; goto vc5R4; tRATR: APLn8: goto qczB1; qczB1: return $empty && @rmdir($path); goto Fw2CS; Fw2CS: } }
