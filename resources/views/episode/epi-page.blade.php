@php
	$metaPost 	= get_post_meta($post->ID, HNMG_META, true);
	$loaddata 	= get_post_meta($post->ID, HNMG_EPS, true);
	$data 		= json_decode(stripslashes($loaddata), true);
@endphp

<div x-data="{ showImport1: false, showImport2: false, showAddServer: false, showEditDetails: false }">
	<div class="flex flex-wrap justify-center items-center w-auto md:w-full space-x-2 md:space-x-4">
		@if($data)
			<button @click="showImport1 = !showImport1; showImport2 = false; showAddServer = false; showEditDetails = false"
				class="relative inline-flex items-center py-2 px-4 text-sm font-bold text-center text-white rounded-full hover:bg-blue-800 from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r mb-2 md:mb-0">
				@hnsvg('plus-circle') @hnlang('Mass Import Episode')
				<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
					1
				</div>
			</button>
			<button @click="showImport2 = !showImport2; showImport1 = false; showAddServer = false; showEditDetails = false"
				class="relative inline-flex items-center py-2 px-4 text-sm font-bold text-center text-white rounded-full hover:bg-blue-800 from-cyan-500 via-sky-500 to-blue-500 bg-gradient-to-r mb-2 md:mb-0">
				@hnsvg('squares-plus') @hnlang('Mass Import Episode')
				<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
					2
				</div>
			</button>
		@endif
		<button @click="showAddServer = !showAddServer; showImport1 = false; showImport2 = false; showEditDetails = false"
			class="m-1 p-1 rounded-full bg-gradient-to-r from-rose-600 via-purple-500 to-violet-700">
			<span class="block text-white text-sx px-4 py-1 font-semibold rounded-full hover:bg-transparent hover:text-white transition">
				@hnsvg('add-server') @hnlang('Add Episode Server')
			</span>
		</button>
		<button @click="showEditDetails = !showEditDetails; showImport1 = false; showImport2 = false; showAddServer = false"
			class="m-1 p-1 rounded-full bg-gradient-to-r from-sky-400 via-emerald-500 to-teal-600">
			<span class="block text-white text-sx px-4 py-1 font-semibold rounded-full hover:bg-transparent hover:text-white transition">
				@hnsvg('edit-post') @hnlang('Edit Movie Details')
			</span>
		</button>
	</div>
	@if($data)
		<div x-show="showImport1" x-transition>
			@include('HNMG::episode.importmulti', compact('data', 'metaPost', 'paged', 'cat_id', 'postID'))
		</div>
		<div x-show="showImport2" x-transition>
			@include('HNMG::episode.importmulti2', compact('data', 'metaPost', 'paged', 'cat_id', 'postID'))
		</div>
	@endif
	<div x-show="showAddServer" x-transition>
		@include('HNMG::episode.addserver', compact('data', 'metaPost', 'paged', 'cat_id', 'postID'))
	</div>
	<div x-show="showEditDetails" x-transition>
		@include('HNMG::episode.postedit', compact('data', 'metaPost', 'paged', 'cat_id', 'postID'))
	</div>
</div>
<div class="my-5 border border-gray-300 bg-white rounded-lg shadow-full w-[98%]">
	<div class="px-4 py-2 text-xs font-semibold text-gray-700 rounded-t-lg uppercase bg-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
		<div class="mb-4 md:mb-0">
			@hnlang('Import Episode To'): 
			<a href="{{ get_permalink($postID) }}" target="_blank" class="text-blue-600 hover:underline">
				{!! Str::limit(get_the_title($postID), 110, '...') !!}
			</a>
		</div>
		<div class="flex md:flex-row md:space-y-0 md:space-x-4 w-full md:w-auto">
			<button data-post-id="{{ $postID }}" class="hnepisode-saving">@hnlang('Update Episodes')</button>
			<button data-server="{{ $server }}" data-post-id="{{ $postID }}" onclick="scrollToElement()" class="hnexport-episodes ">@hnlang('Export Episodes')</button>
		</div>
	</div>
	
	<div class="p-0 md:p-4 rounded-b-lg">
		@include('HNMG::episode.epi-list', compact('postID'))
	</div>
</div>
