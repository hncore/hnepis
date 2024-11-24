@php 
	$curpage = HNCORE()->get_current_page_slug();
@endphp
<div class="flex justify-between items-center my-4 w-[98%]">
	<div class="hnytb__header-logo">
		<a href="{{ HNMG_SHOP_URL }}" target="_blank">
			<img class="hnytb__logo" src="{!! HNMG_LOGO !!}" alt="Logo"/>
		</a>
	</div>
	<div class="hnytb__header-social font-bold">
		<a href="{!! HNMG_TELE !!}" class="flex items-center text-blue-500 hover:text-blue-700 mx-1 my-2" target="_blank">
			<svg class="inline mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
			</svg>
			{{ __('Follow us', 'hnmanager') }}
		</a>
	</div>
</div>
<div class="content-tabs" id="hncore" x-data="{ activeTab: '{{ $curpage }}',activeClasses: 'border-l border-t border-r rounded-t text-blue-700', inactiveClasses: 'text-blue-500 hover:text-blue-700'}">
	{!! HNCORE()->display_tabs() !!}
	<div x-show="activeTab === '{{ $curpage }}'" :class="{ 'rounded-tl-none': activeTab === 'hnmg-dashboard' }" class="bg-white {{ $curpage == 'hnmg-options' ? 'py-4' : 'p-4' }} rounded-tl-lg rounded-br-lg shadow-lg w-[98%] rounded-bl-lg rounded-tr-lg">