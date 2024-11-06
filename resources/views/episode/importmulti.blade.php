<div class="my-5 border border-gray-300 rounded-lg shadow-full w-[98%]">
    <div class="p-4 text-xs font-semibold text-gray-700 rounded-t-lg uppercase bg-gray-100">
            @hnepis('Import Episode To'):
            <a href="{{ get_permalink($postID) }}" target="_blank" class="text-blue-600 hover:underline"> {!! get_the_title($postID) !!}</a>
    </div>
	<div class="p-4 bg-white">
		<div class="font-bold text-lg mb-4">
			@hnepis('Latest Episode:')<b class="text-orange-500"> {!! $load->hnmg_last_episode($postID, $meta) !!} </b>
		</div>
		
		<div x-data="{ selectedTab: 'episode', importType: 'listepisode' }" class="w-full">
			<div @keydown.right.prevent="$focus.wrap().next()" @keydown.left.prevent="$focus.wrap().previous()" class="flex gap-2 overflow-x-auto border-b border-neutral-300 dark:border-neutral-700" role="tablist" aria-label="tab options">
				<button @click="selectedTab = 'episode'; importType = 'listepisode'" :aria-selected="selectedTab === 'episode'" :tabindex="selectedTab === 'episode' ? '0' : '-1'" :class="selectedTab === 'episode' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-neutral-600 hover:border-b-2 hover:border-b-neutral-800 hover:text-neutral-900'" class="flex h-min items-center gap-2 px-4 py-2 text-xs font-bold" type="button" role="tab" aria-controls="tabpanelEpisode" >
					@hnepis('Episode')
				</button>
				<button @click="selectedTab = 'alternate'; importType = 'listserver'" :aria-selected="selectedTab === 'alternate'" :tabindex="selectedTab === 'alternate' ? '0' : '-1'" :class="selectedTab === 'alternate' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-neutral-600 hover:border-b-2 hover:border-b-neutral-800 hover:text-neutral-900'" class="flex h-min items-center gap-2 px-4 py-2 text-xs font-bold" type="button" role="tab" aria-controls="tabpanelAlternate" >
					@hnepis('Alternate Server')
				</button>
				<button @click="selectedTab = 'subtitle'; importType = 'subtitle'" :aria-selected="selectedTab === 'subtitle'" :tabindex="selectedTab === 'subtitle' ? '0' : '-1'" :class="selectedTab === 'subtitle' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-neutral-600 hover:border-b-2 hover:border-b-neutral-800 hover:text-neutral-900'" class="flex h-min items-center gap-2 px-4 py-2 text-xs font-bold" type="button" role="tab" aria-controls="tabpanelSubtitle" >
					@hnepis('Subtitle')
				</button>
			</div>
			<div class="px-2 py-4 text-neutral-600 dark:text-neutral-300">
				<div x-show="selectedTab === 'episode'" id="tabpanelEpisode" role="tabpanel" aria-label="episode">
					<select name="serverListsOne" id="serverListsOne" data-postid="{{ $postID }}" class="w-44 rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1 mb-4 text-xs font-bold">
						@if (!$data)
							<option value="0">Server HD</option>
						@endif
						@foreach ($data as $key => $val)
							<option value="{{ $key }}" {{ $key == $server ? 'selected' : '' }}>{{ $val['haunmovies_server_name'] }}</option>
						@endforeach
					</select>
					<div class="bg-white border border-neutral-300 py-1 italic font-normal">
						<div class="px-2">EP 10|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link</div>
						<div class="px-2">EP 11|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|embed</div>
						<div class="px-2">EP 12|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link</div>
					</div>
				</div>
				<div x-show="selectedTab === 'alternate'" id="tabpanelAlternate" role="tabpanel" aria-label="alternate">
					<select name="serverListsOne" id="serverListsOne" data-postid="{{ $postID }}" class="w-44 rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1 mb-4 text-xs font-bold">
						@if (!$data)
							<option value="0">Server HD</option>
						@endif
						@foreach ($data as $key => $val)
							<option value="{{ $key }}" {{ $key == $server ? 'selected' : '' }}>{{ $val['haunmovies_server_name'] }}</option>
						@endforeach
					</select>
					<select name="listepisode" id="listepisode-one" class="w-44 rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1 mb-4 text-xs font-bold">
						<option value="" id="choose-ep">@hnepis('Choose Episode')</option>
						@foreach ($data[$server]['haunmovies_server_data'] as $key => $val)
							<option value="{{ $key }}">{{ $val['haunmovies_ep_name'] }}</option>
						@endforeach
					</select>
					
					<div class="bg-white border border-neutral-300 py-1 font-normal italic">
						<div class="px-2">#1|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link</div>
						<div class="px-2">#2|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|embed</div>
						<div class="px-2">Server Drive|https://drive.google.com/file/d/1ATilCtX62rLXwpo7Gm7h2ba6wiGjbL3I/view?usp=sharing|link</div>
					</div>
				</div>
				<div x-show="selectedTab === 'subtitle'" id="tabpanelSubtitle" role="tabpanel" aria-label="subtitle">
					<select name="serverListsOne" id="serverListsOne" data-postid="{{ $postID }}" class="w-44 rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1 mb-4 text-xs font-bold">
						@if (!$data)
							<option value="0">Server HD</option>
						@endif
						@foreach ($data as $key => $val)
							<option value="{{ $key }}" {{ $key == $server ? 'selected' : '' }}>{{ $val['haunmovies_server_name'] }}</option>
						@endforeach
					</select>
					<select name="listepisode" id="listepisode-one" class="w-44 rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1 mb-4 text-xs font-bold">
						<option value="" id="choose-ep">@hnepis('Choose Episode')</option>
						@foreach ($data[$server]['haunmovies_server_data'] as $key => $val)
							<option value="{{ $key }}">{{ $val['haunmovies_ep_name'] }}</option>
						@endforeach
					</select>
					
					<div class="bg-white border border-neutral-300 py-1 font-normal italic">
						<div class="px-2">Vietnamese|https://yourdomain.com/files/subtitles/the-movie-title-Vietnamese.srt</div>
						<div class="px-2">English|https://yourdomain.com/files/subtitles/the-movie-title-English.vtt</div>
						<div class="px-2">French|https://yourdomain.com/files/subtitles/the-movie-title-French.vtt</div>
					</div>
				</div>
				
				<div class="my-5">
					<div class="border border-solid border-slate-200 p-2 mb-5">
						@hnepis('Episode name') <span class="text-red-700 font-bold">|</span>
						@hnepis('Episode URL') <span class="text-red-700 font-bold">|</span>
						@hnepis('Type')(@hnepis('Episode Type support list:')
						<span style="color: #4d5bff; font-weight: bold; font-family: inherit;">{{ $load->getPlayerTypesAsText() }} link, mp4, embed</span>)
					</div>
					<textarea id="list-multi-importone" rows="15" class="rounded-none border-solid p-2 mb-5 w-full border-slate-200"></textarea>
				</div>
				<div @click="HNImporterOne(importType)" id="importone" data-postid="{{ $postID }}" class="relative inline-flex items-center px-4 hover:bg-sky-700 py-2 text-sm leading-5 rounded-full font-semibold text-white mb-5 cursor-pointer from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r inline-block w-auto">
					@hnepis('Import Episode')
					<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">1</div>
				</div>
			</div>
		</div>
		<div class="relative rounded-md border border-green-500 bg-white text-green-500 mx-3 w-11/12 mb-2 p-2" role="alert" id="statusone" style="display: none;"></div>
    </div>
</div>