<div class="my-5 border border-gray-300 rounded-lg shadow-full w-[98%]">
    <div class="px-4 py-2 text-xs font-semibold text-gray-700 rounded-t-lg uppercase bg-gray-100">
        @hnlang('New Server Name'):
        <input type="text" name="hnserver_name" id="hnserver-name" value="Server #{{ $data ? array_key_last($data) + 2 : '0' }}" 
            data-server="{{ $data ? array_key_last($data) + 1 : 0 }}" 
            data-post-id="{{ $postID }}" class="rounded-none border border-solid border-slate-200">
    </div>
    <div class="p-4 bg-white rounded-b-lg">
        @if($data)
            <div class="my-4">
                <div class="font-bold mb-4">@hnlang('Current Servers:')</div>
                @foreach ($data as $key => $value)
                    @php
                        $active = $server == $key ? " active" : "";
                        $last_sv[] = $key;
                    @endphp
					<a class="py-1 px-2 bg-red-700 text-white ml-2 rounded-l-sm text-xs font-bold no-underline hover:bg-sky-700 focus:outline-none active:outline-none focus:ring-0 active:ring-0 {{ $server == $key ? ' bg-sky-700' : '' }}" 
					   href="?page=hnmg-episode&act=edit_ep&post_id={{ $postID }}&server={{ $key }}&paged={{ $paged }}&cat={{ $cat_id }}">
						{{ $value['haunmovies_server_name'] }}
					</a>
					<span class="py-1 px-2 bg-red-500 text-white rounded-r-sm text-xs hndel-server" data-index="{{ $key }}" data-reload="">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3 inline font-bold">
							<path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z" />
							<path fill-rule="evenodd" d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM5.72 7.47a.75.75 0 0 1 1.06 0L8 8.69l1.22-1.22a.75.75 0 1 1 1.06 1.06L9.06 9.75l1.22 1.22a.75.75 0 1 1-1.06 1.06L8 10.81l-1.22 1.22a.75.75 0 0 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
						</svg>
					</span>
                @endforeach
            </div>
        @endif
       
        <div class="border border-solid border-slate-200 p-2 mb-5">
            @hnlang('Episode name')<span class="text-red-700 font-bold">|</span>
            @hnlang('Episode URL')<span class="text-red-700 font-bold">|</span>
            @hnlang('Type') (@hnlang('Episode Type support list:')
            <span style="color: #4d5bff; font-weight: bold; font-family: inherit;">{{ $load->getPlayerTypesAsText() }} link, mp4, embed</span>)
        </div>
        <div class="bg-white border border-slate-200 mb-4 p-2">
            <div class="mb-2 font-bold text-red-700">@hnlang('Example'):</div>
            <div class="px-2 font-semibold">EP 10|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link</div>
            <div class="px-2 font-semibold">EP 11|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|embed</div>
            <div class="px-2 font-semibold">EP 12|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link</div>
        </div>
        <div>
            <textarea id="hnlist-addnewsv" class="rounded-none border-solid p-2 mb-5 w-full border-slate-200" rows="15"></textarea>
        </div>
		<div id="hnstatus" style="display: none;"></div>
        <div class="w-40 bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white mb-5 cursor-pointer" onClick="javascript:HNAddServer();" data-postid="{{ $postID }}" id="hnbtn-addnewsv">
           @hnlang('Add new server')
        </div>
        <p>
            <input type="radio" name="hnredirect_options" value="redirect" id="redirect" checked>
            <label for="redirect" style="margin-right: 10px;">
                {{ $data ? __('Redirect to Server', 'hnmanager') . ' #' . (array_key_last($data) + 2) : __('Redirect to Edit', 'hnmanager') }}
            </label>

            <input type="radio" name="hnredirect_options" value="reload" id="reload">
            <label for="reload">@hnlang('Reload this page')</label>
        </p>
    </div>
</div>
