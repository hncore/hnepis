<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; class EP_Cache { public $timeCache; public $folderCache; public function __construct() { goto iv2MV; L56Bb: if (!function_exists("\127\120\x5f\x46\x69\x6c\x65\163\x79\x73\x74\x65\155")) { require_once ABSPATH . "\x77\160\x2d\x61\144\x6d\151\156\57\151\x6e\143\x6c\165\144\x65\x73\57\x66\x69\x6c\145\x2e\160\150\160"; } goto G5nUA; z1rXX: aq4R9: goto HpxXn; lqii8: wp_mkdir_p($this->folderCache); goto z1rXX; s76Gt: WP_Filesystem(); goto DTYMe; fgW8N: if (is_dir($this->folderCache)) { goto aq4R9; } goto lqii8; G5nUA: global $wp_filesystem; goto s76Gt; HpxXn: $this->timeCache = 3600; goto L56Bb; DTYMe: $this->wp_filesystem = $wp_filesystem; goto M675S; iv2MV: $this->folderCache = HNMG_CACHE; goto fgW8N; M675S: } public function register() { goto IQEm8; Q4u0G: add_filter("\x48\116\115\x47\x2d\164\141\x62\163", [$this, "\x68\156\141\160\151\163\x6f\144\x65\x5f\143\141\x63\150\x65\x5f\155\x65\x6e\x75"]); goto m57yM; IQEm8: add_action("\x77\x70\x5f\x61\152\x61\x78\x5f\x72\145\163\145\x74\x5f\160\x6c\141\171\x65\x72\x5f\x63\x61\x63\x68\145", [$this, "\162\145\x73\x65\164\x5f\x70\x6c\x61\x79\145\x72\137\143\141\143\x68\x65"]); goto IFeY5; mTz4p: add_action("\x77\160\x5f\x61\152\x61\x78\x5f\x6e\x6f\x70\162\151\166\x5f\x64\x65\x6c\x65\x74\x65\x5f\141\154\x6c\x5f\143\x61\143\150\145", [$this, "\x64\145\154\145\x74\x65\137\141\154\154\137\x63\x61\x63\x68\x65"]); goto Py3ed; m57yM: add_filter("\110\x4e\x4d\107\55\x70\141\x67\x65\x73", [$this, "\x68\x6e\141\x70\x69\x73\157\144\x65\x5f\143\x61\x63\x68\x65\x5f\x6d\145\156\x75"]); goto N9Gfv; IFeY5: add_action("\167\x70\137\x61\x6a\x61\x78\x5f\x6e\157\160\x72\x69\166\x5f\x72\x65\163\x65\x74\137\160\154\x61\171\x65\162\137\143\141\x63\150\145", [$this, "\x72\145\x73\x65\x74\x5f\160\154\x61\x79\145\x72\137\x63\x61\143\150\145"]); goto Q4u0G; N9Gfv: add_action("\x77\x70\137\141\152\x61\x78\x5f\x64\x65\154\x65\164\145\137\x61\x6c\154\x5f\x63\141\143\150\145", [$this, "\144\145\154\145\x74\x65\x5f\141\154\154\x5f\143\141\x63\x68\x65"]); goto mTz4p; Py3ed: } public function hnapisode_cache_menu($nav) { $nav["\61\x32\x30"] = array("\x73\x6c\x75\x67" => "\150\156\155\147\55\143\x61\x63\x68\145\x2d\155\141\156\x61\147\x65\x72", "\x63\x61\x6c\154\x62\x61\143\153" => array($this, "\150\156\x6d\147\x5f\143\x61\x63\150\145\137\x6d\141\x6e\141\x67\145\x5f\x70\141\x67\x65"), "\164\151\164\x6c\145" => __("\110\116\x4d\107\x20\103\141\x63\x68\145", "\150\156\x6d\x67\145\160\151\163"), "\151\x63\157\156" => "\x66\x61\55\160\x6c\x61\171\55\x63\151\x72\143\x6c\145"); return $nav; } public function hnmg_cache_manage_page() { goto m19Pt; Ri0xT: $get_cache = json_decode($this->getCache()); goto sAq8h; m19Pt: $cache_count = json_decode($this->cacheCount()); goto Ri0xT; sAq8h: echo view("\110\x4e\115\x47\x3a\72\154\x61\171\x6f\165\164\163\56\x63\141\x63\x68\x65", compact("\x63\141\143\x68\x65\137\143\x6f\165\x6e\x74", "\x67\x65\x74\x5f\x63\141\143\x68\145")); goto f06O5; f06O5: } public function delete_all_cache() { goto COPgM; zAaOx: $time_limit = $result["\164\151\155\145\137\x6c\151\155\x69\164"] ?? 0; goto fULIa; pN06F: $status = "\123\x75\143\x63\145\x73\163\x66\x75\154\x6c\171"; goto z_3kg; COPgM: $result = json_decode($this->delAllCache(0), true); goto pN06F; fULIa: $cache_deleted = $result["\143\141\x63\x68\x65\137\144\x65\x6c\x65\x74\x65\144"] ?? 0; goto mLY7B; j6j0K: wp_die(); goto gcd1U; z_3kg: $total_cache = $result["\x74\157\x74\x61\x6c\137\143\141\143\x68\145"] ?? 0; goto zAaOx; mLY7B: wp_send_json_success(["\x73\164\141\x74\x75\163" => $status, "\164\157\164\141\154\137\143\x61\x63\x68\145" => $total_cache, "\164\151\155\145\137\154\151\155\x69\x74" => $time_limit, "\x63\141\143\x68\145\137\x64\x65\154\x65\164\x65\144" => $cache_deleted]); goto j6j0K; gcd1U: } public function delAllCache($timeCache) { goto JZpCL; r8BhE: $this->removeEmptySubFolders($this->folderCache); goto C4z3n; Hcb6Z: $i = $j = 0; goto myJWc; PdBW7: $result["\143\x61\x63\150\145\x5f\144\145\x6c\145\x74\x65\144"] = $j; goto ZX1EA; XBIAH: if (!$getDirContents) { goto aCj4q; } goto Hcb6Z; C4z3n: return json_encode($result); goto XarU3; yi3n1: $result["\x74\x6f\164\x61\x6c\137\x63\141\143\150\x65"] = $i; goto PdBW7; z8B0a: YuZFH: goto yi3n1; JZpCL: $result = array("\163\164\141\164\165\163" => 0, "\164\157\164\141\x6c\137\x63\141\x63\x68\x65" => 0, "\164\151\155\145\137\154\x69\155\x69\x74" => $timeCache, "\143\x61\x63\x68\x65\x5f\144\x65\154\145\164\x65\144" => 0, "\143\x61\143\150\145\137\x63\x6f\165\156\164" => 0); goto Qr7s0; ZX1EA: $result["\x63\141\143\150\145\x5f\143\157\x75\x6e\164"] = $i - $j; goto LXmYq; LXmYq: aCj4q: goto r8BhE; myJWc: foreach ($getDirContents as $key => $value) { goto lqa3c; sLb3X: $result["\163\x74\141\164\165\x73"] = 1; goto rT1W0; rT1W0: OvWq2: goto Xp4NB; lqa3c: if (!(strpos($value, "\56\164\x78\164") !== false)) { goto ObR8h; } goto qzvC_; KY11d: if (!($timeCache <= time() - filemtime($value))) { goto nq2bY; } goto L1GAH; qzvC_: $i++; goto KY11d; S0Zxt: ObR8h: goto mOOW3; L1GAH: $j++; goto x5SJS; Xp4NB: nq2bY: goto S0Zxt; mOOW3: BiYPy: goto Jbhye; x5SJS: if (!unlink($value)) { goto OvWq2; } goto sLb3X; Jbhye: } goto z8B0a; Qr7s0: $getDirContents = $this->getDirContents($this->folderCache); goto XBIAH; XarU3: } public function reset_player_cache() { goto Ep42j; Ep42j: $server = isset($_POST["\x73\x65\x72\x76\145\x72\x5f\151\144"]) ? (int) $_POST["\x73\145\x72\x76\x65\x72\137\x69\144"] : ''; goto B3e11; rjRaI: $link = $data[$server - 1]["\x68\141\x75\156\155\x6f\x76\x69\x65\x73\137\x73\x65\x72\x76\145\162\x5f\144\141\x74\141"][$episode_slug]["\150\x61\x75\156\155\157\166\151\145\163\x5f\x65\x70\137\x6c\x69\x6e\153"]; goto cjhpA; i_3_S: wp_send_json($cacheData); goto lsdAF; B3e11: $post_id = isset($_POST["\160\x6f\x73\164\x5f\151\144"]) ? (int) $_POST["\160\157\x73\164\137\151\144"] : ''; goto F4_Af; F4_Af: $episode_slug = isset($_POST["\145\160\x69\163\x6f\144\x65\x5f\163\x6c\x75\147"]) ? str_replace("\x2d", "\137", wp_strip_all_tags($_POST["\x65\x70\151\163\157\144\145\x5f\163\x6c\165\x67"])) : ''; goto UAgY_; UAgY_: $film_meta = get_post_meta($post_id, HNMG_EPS, true); goto LHOZI; LHOZI: $data = json_decode($film_meta, true); goto rjRaI; cjhpA: $cacheData = $this->delCache($link); goto i_3_S; lsdAF: } public function readCache($name) { goto DhQIy; yGP6z: $result = ''; goto YOB3y; tpZWk: if (!file_exists($file)) { goto o2MjO; } goto ZkCrI; DhQIy: $name = md5(md5($name)); goto yGP6z; ZkCrI: if ($this->timeCache != '') { goto NWdyb; } goto Ep7qB; YOB3y: $createFolderCache = $this->createFolderCache($name); goto sIP78; Xa3UF: epKrM: goto zXnhZ; Ep7qB: $result = file_get_contents($file); goto ACFac; sIP78: $file = $this->folderCache . "\57" . $createFolderCache . "\57" . $name . "\56\x74\170\x74"; goto tpZWk; GtlXn: WLNzJ: goto Xa3UF; ACFac: goto epKrM; goto TucOp; fXCXC: return $result; goto SUiNe; zXnhZ: o2MjO: goto fXCXC; TucOp: NWdyb: goto ft3q2; ft3q2: if (!($this->timeCache > time() - filemtime($file))) { goto WLNzJ; } goto bP1WI; bP1WI: $result = file_get_contents($file); goto GtlXn; SUiNe: } public function getCache() { goto v2jcW; v2jcW: $result = array(); goto HFdqg; ik0iU: foreach ($getDirContents as $key => $value) { goto YB4b9; YGfxz: BCWrJ: goto U8LF5; YB4b9: if (!strpos($value, "\56\x74\170\164")) { goto BCWrJ; } goto RMhTf; RMhTf: $result[] = array("\x66\151\x6c\145" => $value); goto YGfxz; U8LF5: V7Xh1: goto Bim33; Bim33: } goto IOn0B; lwfVC: pNDH3: goto L4VC8; UrGHs: return json_encode($result); goto lwfVC; ZiRLO: $i = 0; goto E7rma; IOn0B: f64EC: goto UrGHs; HFdqg: $getDirContents = $this->getDirContents($this->folderCache); goto ZiRLO; E7rma: if (!$getDirContents) { goto pNDH3; } goto ik0iU; L4VC8: } public function saveCache($name, $data) { goto c2SiL; F6dSw: $index_file = WP_CONTENT_DIR . "\x2f\x69\x6e\x64\x65\170\56\x70\150\x70"; goto P8jG_; dEOlq: $createFolderCache = $this->createFolderCache($name); goto e1ZOX; e1ZOX: if (is_dir($this->folderCache)) { goto YuKc9; } goto McAU9; B2U3x: FE7lo: goto aRi86; aRi86: $this->wp_filesystem->put_contents($file, $data, FS_CHMOD_FILE); goto F6dSw; h3WAJ: $file = $dir . "\x2f" . $name . "\56\164\x78\x74"; goto zv046; R2JEj: $dir = $this->folderCache . "\x2f" . $createFolderCache; goto h3WAJ; c2SiL: $name = md5(md5($name)); goto dEOlq; zv046: if (is_dir($dir)) { goto FE7lo; } goto kEIL5; RbzcM: if (chmod($this->folderCache, 0777)) { goto gSTgm; } goto AMlFY; kEIL5: mkdir($dir, 0777, true); goto B2U3x; AMlFY: chmod($this->folderCache, 0777); goto gvJ5n; gvJ5n: gSTgm: goto R2JEj; Q15QJ: YuKc9: goto RbzcM; McAU9: mkdir($this->folderCache, 0777, true); goto Q15QJ; P8jG_: $this->wp_filesystem->put_contents($index_file, "\74\77\x70\150\x70\40\57\57\40\123\151\154\145\x6e\x63\x65\40\x69\x73\x20\147\157\x6c\144\x65\156\x2e", FS_CHMOD_FILE); goto dxKmR; dxKmR: } public function delCache($name) { goto jS8Te; nmJ3M: return $result; goto VkAWa; XZM_7: XY82K: goto a_wFC; rb5EP: if (unlink($file)) { goto XY82K; } goto Mb09H; eMDzL: $file = $this->folderCache . "\57" . $createFolderCache . "\x2f" . $name . "\56\164\x78\164"; goto s3x99; Mb09H: $result = array("\163\164\141\164\165\163" => 0, "\162\145\x73\x75\154\x74" => "\104\145\x6c\x65\164\145\40\x65\162\162\157\162"); goto C9eMo; pYabP: $name = md5(md5($name)); goto WbK4G; s3x99: if (file_exists($file)) { goto IBZYJ; } goto ljeHJ; ljeHJ: $result = array("\x73\164\141\164\165\x73" => 0, "\x72\145\163\x75\154\164" => "\x4c\151\156\153\x20\156\x6f\164\40\x65\170\151\163\164\x73"); goto uQZMd; q5B6B: q3dbq: goto P3ep3; WbK4G: $createFolderCache = $this->createFolderCache($name); goto eMDzL; uQZMd: goto EvcNz; goto M1A2D; a_wFC: $result = array("\x73\164\x61\x74\x75\x73" => 1, "\x72\x65\163\165\154\164" => "\x44\145\154\145\164\145\x64"); goto q5B6B; jS8Te: $result = ''; goto pYabP; C9eMo: goto q3dbq; goto XZM_7; P3ep3: EvcNz: goto nmJ3M; M1A2D: IBZYJ: goto rb5EP; VkAWa: } public function cacheCount() { goto ISa2Y; Q1BVo: if (!$getDirContents) { goto OPjrB; } goto NJSxZ; HbKpa: $getDirContents = $this->getDirContents($this->folderCache); goto UhRvQ; HFVGb: return json_encode($result); goto jHqRe; UhRvQ: $i = 1; goto Q1BVo; M2k2w: OPjrB: goto HFVGb; znWbs: AKPNS: goto M2k2w; ISa2Y: $result = array(); goto HbKpa; NJSxZ: foreach ($getDirContents as $key => $value) { goto rkY8i; Mgxb8: $result["\162\x65\x73\165\154\164"] = 1; goto Xbg5N; Xbg5N: $result["\x74\x6f\x74\x61\x6c\137\143\141\143\150\x65"] = $i; goto EH8dR; rkY8i: if (!strpos($value, "\x2e\x74\170\164")) { goto LK7dC; } goto Mgxb8; blJbk: CT7T2: goto wf2yJ; EH8dR: $i++; goto hLPrh; hLPrh: LK7dC: goto blJbk; wf2yJ: } goto znWbs; jHqRe: } private function createFolderCache($name) { goto rq_On; jIRHt: return $folder1 . "\57" . $folder2; goto HLb8J; yaMbF: $folder2 = substr($name, 2, 2); goto jIRHt; rq_On: $folder1 = substr($name, 0, 2); goto yaMbF; HLb8J: } private function getDirContents($dir, &$results = array()) { goto GDlBn; CFd7K: foreach ($files as $key => $value) { goto wNSef; FHHNM: j9zBF: goto X1a91; TKCBR: $results[] = $path; goto FHHNM; W1AKX: dXITj: goto SscqN; xwema: vyyt6: goto TKCBR; SscqN: goto j9zBF; goto xwema; rIxRa: $this->getDirContents($path, $results); goto aut2f; NAqpR: if (!is_dir($path)) { goto vyyt6; } goto KHFz8; KHFz8: if (!($value != "\x2e" && $value != "\x2e\x2e")) { goto dXITj; } goto rIxRa; aut2f: $results[] = $path; goto W1AKX; wNSef: $path = realpath($dir . DIRECTORY_SEPARATOR . $value); goto NAqpR; X1a91: zubo2: goto VWIMz; VWIMz: } goto X0XB9; X0XB9: GQPtS: goto LBIny; LBIny: return $results; goto dfAkR; GDlBn: $files = scandir($dir); goto CFd7K; dfAkR: } private function removeEmptySubFolders($path) { goto MPy9F; t86tf: foreach (glob($path . DIRECTORY_SEPARATOR . "\52") as $file) { $empty &= is_dir($file) && $this->removeEmptySubFolders($file); aqlce: } goto nK49z; nK49z: vTPeZ: goto CXuRw; CXuRw: return $empty && @rmdir($path); goto sprQb; MPy9F: $empty = true; goto t86tf; sprQb: } }
