@include('HNEPIS::layouts.header')
<div x-data="MCache()" class="wrap haun-wrap">
    <h1 class="text-2xl font-bold mb-4">@hnepis('Cache Manager')</h1>
    <div class="haun-cache-box">
        @if(!empty($cache_count->result) && $cache_count->result == 1)
            <span class="text-red-500 font-semibold block mb-2">
                @hnepis('Total Cache'): {{ $cache_count->total_cache }}
            </span>
        @endif
        <ul class="list-cache max-h-[200px] overflow-x-hidden border border-gray-300 p-4! rounded-md">
            @if($get_cache)
                @foreach($get_cache as $key => $value)
                    <li class="text-sm text-gray-700">{{ $value->file }}</li>
                @endforeach
            @else
                <li class="text-sm text-gray-500">@hnepis('Cache Empty!')</li>
            @endif
        </ul>
        <button @click="DeleteAllCache()" class="bg-sky-500 hover:bg-sky-700 text-white px-5 py-2 text-sm leading-5 rounded-full font-semibold mt-4">
            @hnepis('Delete All Cache')
        </button>
        <div id="result" class="mt-2"></div>
    </div>
</div>
@include('HNEPIS::layouts.footer')
