<?php

namespace HNMG\EP_Load;

use HNMG\EP_Load\EP_Getlink;

class EP_GetHost extends EP_Getlink {
	public function get_link($link)
	{
		$json[] = array(
			'file' => $link,
			'type' => 'hls'
		);
		return json_encode($json);
	}
}
