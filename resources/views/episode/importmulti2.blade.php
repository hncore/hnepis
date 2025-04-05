<div class="my-5 border border-gray-300 rounded-lg shadow-full w-[98%]">
    <div class="p-4 text-xs font-semibold text-gray-700 rounded-t-lg uppercase bg-gray-100">
            @hnepis('Import Episode To'):
            <a href="{{ get_permalink($postID) }}" target="_blank" class="text-blue-600 hover:underline"> {!! get_the_title($postID) !!}</a>
    </div>
	<div class="p-4 bg-white rounded-b-lg">
		<div class="import-multi-episode">
			<p style="font-weight: 700;color: #ff6a00;font-size: 17px;">@hnepis('Latest Episode'): {!! $hnepis_last_episode($postID, $metaPost) !!}</p>
			<div class="bg-slate-100 my-4 p-3">
				<div class="mb-1">@hnepis('Only main episode link')</div>
				<div class="bg-white text-red-600 p-2 mb-2">@hnepis('Episode') 13x|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link</div>
				
				<div class="mb-1">@hnepis('Only main episode link and subtitle, not alternate link fallback')</div>
				<div class="bg-white text-red-600 p-2 mb-2">@hnepis('Episode') 13|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link|subtitle=file1.srt*VN,file2.srt*EN,file3.vtt*ES</div>

				<div class="mb-1">@hnepis('Only main episode link and alternate link fallback, not subtitles')</div>
				<div class="bg-white text-red-600 p-2 mb-2">@hnepis('Episode') 13x|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link|subtitle=|server=sv1.mp4*#1*embed,sv2.mp4*SV2*link</div>
				
				<div class="mb-1">@hnepis('Full of parameters')</div>
				<div class="bg-white text-red-600 p-2 mb-2">@hnepis('Episode') 12x|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|embed|subtitle=file1.srt*VN,file2.srt*EN,file3.vtt*ES|server=sv1.mp4*#1*embed,sv2.mp4*SV2*link</div>
			</div>
			
			<div class="my-2">
				<div class="mr-2 font-semibold my-2 text-sm">@hnepis('Choose Server'):</div>
				<select name="serverListsTwo" id="serverListsTwo" @change="handleServerChange" class="rounded-full pl-4 pr-8  border border-slate-200 font-semibold text-xs" data-postid="{{ $postID }}">
					@foreach ($data as $key => $val)
						<option value="{{ $key }}">{{ $val['haunmovies_server_name'] }}</option>
					@endforeach
				</select>
			</div>
			<div class="my-5">
				<div class="border border-solid border-slate-200 p-2 mb-5">
					@hnepis('Episode Name') <span class="text-red-700 font-bold">|</span>
					@hnepis('Episode URL') <span class="text-red-700 font-bold">|</span>
					@hnepis('Type') (@hnepis('Episode Type Support List'): 
					<span style="color: #4d5bff; font-weight: bold; font-family: inherit;">{{ $getPlayerTypesAsText() }} link, mp4, embed</span>)
				</div>
				<textarea id="import-multi-epitwo" rows="15" class="rounded-none border-solid p-2 mb-5 w-full border-slate-200"></textarea>
			</div>

			<div @click="hnimportertwo({{ $postID }})" id="importtwo" class="relative inline-flex items-center px-4 hover:bg-sky-700 py-2 text-sm leading-5 rounded-full font-semibold text-white mb-5 cursor-pointer from-cyan-500 via-sky-500 to-blue-500 bg-gradient-to-r inline-block">
				@hnepis('Import Episode')
				<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">2</div>
			</div>
		</div>
		<div class="relative rounded-md border border-green-500 bg-white text-neutral-600 dark:bg-neutral-950 dark:text-neutral-300 mx-3 w-11/12 mb-2" role="alert" id="statustwo" style="display: none;">
			<div class="flex w-full items-center gap-2 bg-green-500/10 p-1">
				<div class="bg-green-500/15 text-green-500 rounded-full p-1" aria-hidden="true">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6" aria-hidden="true">
						<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd"></path>
					</svg>
				</div>
				<div class="ml-2">
					<p class="text-xs font-medium sm:text-sm hnnotice"></p>
				</div>
			</div>
		</div>
	</div>
</div>