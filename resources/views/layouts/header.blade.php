@php
    function get_current_page_slug() {
        return isset($_GET['page']) ? sanitize_title(wp_unslash($_GET['page'])) : '';
    }
    $curpage = get_current_page_slug();
    $tabs    = get_hnepis_tabs($curpage)
@endphp

<div class="flex justify-between items-center my-4 w-[98%]">
    <div class="hnytb__header-logo">
        <a href="{{ HNREMOTE_API_URL }}" target="_blank">
            <img class="hnytb__logo" src="{!! HNEPIS_LOGO !!}" alt="Logo"/>
        </a>
    </div>
    <div class="hnytb__header-social font-bold">
        <a href="{!! HNEPIS_TELE !!}" class="flex items-center text-blue-500 hover:text-blue-700 mx-1 my-2" target="_blank">
            <svg class="inline mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
            {{ __('Follow us', 'hnepis') }}
        </a>
    </div>
</div>

<div class="content-tabs w-[98%]" id="hncore">
    <ul class="flex flex-wrap tab-container" id="tabhncore-menu">
        @foreach ($tabs as $slug => $tab)
            <li class="mb-0">
                @if (is_array($tab) && isset($tab['external']) && $tab['external'])
                    <a href="{{ $tab['url'] }}" 
                       class="py-2 px-4 block focus:outline-none outline-none focus:ring-0 hover:text-blue-500 text-gray-500 hover:text-gray-700"
                       target="_blank">
                        {{ $tab['title'] }}
                    </a>
                @else
                    <a href="{{ admin_url('admin.php?page=' . $slug) }}" 
                       class="py-2 px-4 block focus:outline-none outline-none focus:ring-0 hover:text-blue-500 
                              {{ $curpage === $slug ? ' bg-white text-blue-700 font-bold rounded-t' : 'text-gray-500 hover:text-gray-700' }}">
                        {{ is_array($tab) ? $tab['title'] : $tab }}
                    </a>
                @endif
            </li>
        @endforeach
    </ul>
</div>

<div id="tab-content" class="bg-white {{ $curpage == 'hnepis-license' ? 'py-4 rounded-tl-0' : 'p-4 rounded-tl-lg' }} rounded-br-lg shadow-lg w-[98%] rounded-bl-lg rounded-tr-lg">
