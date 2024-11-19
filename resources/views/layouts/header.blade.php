@php 
	$curpage = $core->get_current_page_slug();
@endphp
<div class="flex justify-between items-center my-4 w-[98%]">
	<div class="hnytb__header-logo">
		<a href="{{ HNMG_SHOP_URL }}" target="_blank">
			<img class="hnytb__logo" src="{!! HNMG_LOGO !!}" alt="Logo"/>
		</a>
	</div>
	<div class="hnytb__header-social font-bold">
		<a href="{!! HNMG_TELE !!}" class="flex items-center text-blue-500 hover:text-blue-700 mx-1 my-2" target="_blank">
			@hnsvg('telegram', 'inline mr-2')
			@hnlang('Follow us')
		</a>
	</div>
</div>
<div class="content-tabs" id="hncore" x-data="{ activeTab: '{{ $curpage }}', activeClasses: 'border-l border-t border-r rounded-t text-blue-700', inactiveClasses: 'text-blue-500 hover:text-blue-700'}">
	{!! $core->display_tabs() !!}
	<div x-show="activeTab === '{{ $curpage }}'" :class="{ 'rounded-tl-none': activeTab === 'hnmg-dashboard' }" class="bg-white {{ $curpage == 'hnmg-options' ? 'py-4' : 'p-4' }} rounded-tl-lg rounded-br-lg shadow-lg w-[98%] rounded-bl-lg rounded-tr-lg">