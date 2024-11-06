<?php
/*   __________________________________________________
    |  		Code By HauN - HauNYTB.COM  2.0.14    	  |
    |          Telegram: https://t.me/haunytb         |
    |    	   Url : https://haunytb.com    		  |
    |_________________________________________________|
*/
 namespace HNMG\EP_Load; use HNMG\EP_Load\EP_Getlink; class EP_GetHost extends EP_Getlink { public function get_link($link) { $json[] = array("\146\151\x6c\145" => $link, "\164\171\160\x65" => "\x68\154\163"); return json_encode($json); } }
