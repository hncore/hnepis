@include('HNMG::layouts.header')
	<div id="download-episode" class="w-[98%] my-8 border-2 border-sky-500 border-dashed" style="display: none"></div>
	<div x-data="{ checkAll : false }" class="w-full md:w-[98%] relative my-6 shadow-lg rounded-md sm:rounded-lg bg-white">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="p-4">
						<label for="checkAll" class="flex items-center cursor-pointer text-neutral-600 dark:text-neutral-300 ">
							<div class="relative flex items-center">
								<input type="checkbox" x-model="checkAll" id="checkAll" class="size-4 cursor-pointer appearance-none overflow-hidden rounded border border-neutral-300 bg-white focus:outline-none focus:ring-0 active:outline-offset-0" />
							</div>
						</label>
					</th>
					<th scope="col" class="py-3 px-6">@hnlang('Post Name')</th>
					<th scope="col" class="py-3 px-6 text-center">@hnlang('Show/Hide Server')</th>
					<th scope="col" class="py-3 px-6 text-center">@hnlang('Post Status')</th>
					<th scope="col" class="py-3 px-6 text-center">@hnlang('Latest Episode')</th>
					<th scope="col" class="py-3 px-6 text-center">@hnlang('Status')</th>
					<th scope="col" class="py-3 px-6 text-center">@hnlang('Post Type')</th>
					<th scope="col" class="py-3 px-6 text-center">@hnlang('Export Episodes')</th>
					<th scope="col" class="py-3 px-6 text-center">@hnlang('Actions')</th>
				</tr>
			</thead>
			<tbody>
				@query([
					'post_type'      => 'post',
					'posts_per_page' => 10, 
					'orderby'        => 'modified',
					'order'          => 'DESC',
				])
				@posts
					@php
						global $post;
						$post_meta 			= get_post_meta($post->ID, HNMG_EPS, true);
						$meta 				= get_post_meta($post->ID, HNMG_META, true);
						$data 				= json_decode(stripslashes($post_meta), true);
						$dataPlayer = $data && !empty($data[0]['haunmovies_server_data']) ? key($data[0]['haunmovies_server_data']) : NULL;
						$link = $dataPlayer != NULL ? ($data[0]['haunmovies_server_data'][$dataPlayer]['haunmovies_ep_link'] ?? '') : '';
					@endphp
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="p-4">
								<label for="{{ $post->ID }}" class="flex items-center cursor-pointer text-neutral-600 dark:text-neutral-300 ">
									<div class="relative flex items-center">
										<input type="checkbox" id="{{ $post->ID }}" class="size-4 cursor-pointer appearance-none overflow-hidden rounded border border-neutral-300 bg-white focus:outline-none focus:ring-0 active:outline-offset-0" :checked="checkAll" />
									</div>
								</label>
							</td>
							<td class="py-2 px-6">
								<a href="{!! get_permalink($post->ID) !!}" target="_blank" class="text-pink-500 font-semibold text-xs hover:text-fuchsia-300 hover:no-underline">
									{{ Str::limit($post->post_title, 60, '...') }}
								</a>
								<a class="edit-post-link" href="{!! get_edit_post_link($post->ID) !!}" target="_blank">
									@hnsvg('plus-circle')
								</a>

							</td>
							<td class="py-2 px-6 text-center">{!! $load->hnserver_hide($post->ID) !!}</td>
							<td class="py-2 px-6 text-center">{!! $load->hnupdate_publish($post->ID) !!}</td>
							<td class="py-2 px-6 text-center">{!! $load->hnmg_last_episode($post->ID, $meta); !!}</td>
							<td class="py-2 px-6 text-center">{!! $load->hnshow_status($meta['haun_movie_status'] ?? '') !!}</td>
							<td class="py-2 px-6 text-center">{!! $load->hnshow_formality($meta['haun_movie_formality'] ?? '') !!}</td>
							<td class="py-2 px-6 text-center">{!! $load->list_episode_servers($post->ID, $data) !!}</td>
							<td class="py-2 px-6 text-center">
								<a class='{{ $link != '' ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600' }} font-bold text-xs text-white py-1 px-4 rounded-full no-underline' href='?page=hnmg-episode&act=edit_ep&post_id={{ $post->ID }}'>
									{{ $link != '' ? __('Edit', 'hnmanager') : __('Add Server', 'hnmanager') }}
								</a>
							</td>
						</tr>
				@endposts
			</tbody>
		</table>
	</div>
	@if(isset($_GET['act']) && $_GET['act'] == 'edit_ep')
		@include('HNMG::episode.epi-page', compact('post'))
	@endif
@include('HNMG::layouts.footer')