@if(!csoptionepis('custom_ads_postion'))
	<div class="flex justify-center items-center h-auto mb-4 clear-both">
		{!! $show_ads('top_player_ad_desktop') !!}
	</div>
@endif
@php
    if(csoptionepis('aspect_ratio') == '4_3') {
        $aspectratio = 'hn-aspect-4by3';
    } elseif(csoptionepis('aspect_ratio') == '21_9') {
        $aspectratio = 'hn-aspect-21by9';
    } elseif(csoptionepis('aspect_ratio') == '16_9') {
        $aspectratio = 'hn-aspect-16by9';
    } else {
        $aspectratio = 'hn-aspect-16by9';
    }
@endphp
@if($is_copyright)
	<div id="is_copyright" class="{{ $aspectratio }} relative">
		<div class="flex items-center justify-center bg-black absolute inset-0 font-bold text-xl text-red-500">
			<i class="fa fa-exclamation-circle mr-2"></i> @hnepis('Copyright infringement!')
		</div>
	</div>
@else
	<div x-data="Load_Player()" x-init="loadPlayer()" id="hn-player-wrapper" class="ajax-player-loading relative {{ $aspectratio }} bg-black overflow-hidden" data-adult-content="{{ $is_adult }}">
		@if(!post_password_required($post))
			<div id="hn-player-loader" class="flex items-center justify-center absolute inset-0"></div>
			<div class="absolute top-0 left-0 w-full h-auto">
				<div id="ajax-player"></div>
			</div>
			@if($check == 'is_trailer')
				<div class="{{ $aspectratio }} relative">
					<div class="flex items-center justify-center bg-black absolute inset-0 font-bold text-xl text-red-500">
						<i class="fa fa-exclamation-circle mr-2"></i> @hnepis('Trailer')
					</div>
				</div>
			@endif
		@else
			{!! get_the_password_form() !!}
		@endif
	</div>
@endif
<div class="clear-both"></div>
@if(!csoptionepis('custom_ads_postion'))
	<div class="flex justify-center items-center h-auto mb-4 clear-both">
		{!! $show_ads('under_player_ad_desktop') !!}
	</div>
@endif