<div class="my-5 border border-gray-300 bg-white rounded-lg shadow-full w-[98%]">
    <div class="p-4 text-xs font-semibold text-gray-700 rounded-t-lg uppercase bg-gray-100">
            @hnepis('Edit Post Info'):
            <a href="{{ get_permalink($postID) }}" target="_blank" class="text-blue-600 hover:underline">{!! get_the_title($postID) !!}</a>
    </div>
	<div class="p-4">
		<form id="hnupdate-postmeta" data-postid="{{ $postID }}">
			@php
				$fields = [
					'haun_quality' 		    => __('Quality', 'hnmgepis'),
					'haun_rating' 		    => __('IMBD Rating', 'hnmgepis'),
					'haun_votes' 		    => __('IMBD Vote', 'hnmgepis'),
					'haun_runtime' 		    => __('Runtime', 'hnmgepis'),
					'haun_original_title' 	=> __('Original Title', 'hnmgepis'),
					'haun_trailer_url' 		=> __('Trailer URL', 'hnmgepis'),
					'haun_episode' 		    => __('Episode', 'hnmgepis'),
					'haun_total_episode' 	=> __('Total Episode', 'hnmgepis'),
				];
			@endphp
			<div class="grid grid-cols-3 gap-4">
				@foreach ($fields as $field => $label)
					<div class="flex flex-col m-2">
						<div class="flex">
							<span class="inline-flex w-30 items-center px-3 text-xs text-gray-900 font-semibold bg-gray-200 border border-gray-200 border-e-0">
								{{ $label }}
							</span>
							<input type="text" id="{{ $field }}" name="{{ $field }}" value="{!! isset($metaPost[$field]) ? $metaPost[$field] : '' !!}" class="rounded-none border text-gray-900 focus:ring-0 focus:outline-none block flex-1 min-w-0 w-full text-xs border-slate-200 px-2" placeholder="{{ $label }}">
						</div>
					</div>
				@endforeach
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col m-2">
					<label class="mb-2 font-semibold" for="haun_movie_notice">@hnepis('Notification/Note')</label>
					<textarea name="haun_movie_notice" rows="5" class="rounded-none border-slate-200 border border-solid p-2" id="haun_movie_notice" placeholder="@hnepis('Notification/Note')">{{ isset($metaPost['haun_movie_notice']) ? $metaPost['haun_movie_notice'] : '' }}</textarea>
				</div>
				
				<div class="flex flex-col m-2">
					<label class="mb-2 font-semibold" for="haun_showtime_movies">@hnepis('Showtime Movies')</label>
					<textarea name="haun_showtime_movies" rows="5" class="rounded-none border-slate-200 border border-solid p-2" id="haun_showtime_movies" placeholder="@hnepis('Showtime Movies')">{{ isset($metaPost['haun_showtime_movies']) ? $metaPost['haun_showtime_movies'] : '' }}</textarea>
				</div>
			</div>
			
			
			<div class="flex flex-wrap my-4">
				<div class="flex items-center w-32 mr-4">
					<span class="font-semibold">@hnepis('Status'):</span>
				</div>
				<div class="flex items-center me-4">
					<input id="ongoing" type="radio" value="ongoing" name="haun_movie_status" class="w-4 h-4 mt-0.5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2" {{ isset($metaPost['haun_movie_status']) ? checked($metaPost['haun_movie_status'], 'ongoing', false) : '' }}>
					<label for="ongoing" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Ongoing')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="completed" type="radio" value="completed" name="haun_movie_status" class="w-4 h-4 mt-0.5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 focus:ring-2" {{ isset($metaPost['haun_movie_status']) ? checked($metaPost['haun_movie_status'], 'completed', false) : '' }}>
					<label for="completed" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Completed')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="is_trailer" type="radio" value="is_trailer" name="haun_movie_status" class="w-4 h-4 mt-0.5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2" {{ isset($metaPost['haun_movie_status']) ? checked($metaPost['haun_movie_status'], 'is_trailer', false) : '' }}>
					<label for="is_trailer" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Trailer')</label>
				</div>
			</div>

			<div class="flex flex-wrap my-4">
				<div class="flex items-center w-32 mr-4">
					<span class="font-semibold">@hnepis('Formality'):</span>
				</div>
				<div class="flex items-center me-4">
					<input id="single_movies" type="radio" value="single_movies" name="haun_movie_formality" class="w-4 h-4 mt-0.5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2" {{ isset($metaPost['haun_movie_formality']) ? checked($metaPost['haun_movie_formality'], 'single_movies', false) : '' }}>
					<label for="single_movies" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Movies')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="tv_series" type="radio" value="tv_series" name="haun_movie_formality" class="w-4 h-4 mt-0.5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 focus:ring-2" {{ isset($metaPost['haun_movie_formality']) ? checked($metaPost['haun_movie_formality'], 'tv_series', false) : '' }}>
					<label for="tv_series" class="mr-2 text-sm font-medium text-gray-900">@hnepis('TV Series')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="tv_shows" type="radio" value="tv_shows" name="haun_movie_formality" class="w-4 h-4 mt-0.5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2" {{ isset($metaPost['haun_movie_formality']) ? checked($metaPost['haun_movie_formality'], 'tv_shows', false) : '' }}>
					<label for="tv_shows" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Trailer')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="theater_movie" type="radio" value="theater_movie" name="haun_movie_formality" class="w-4 h-4 mt-0.5 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 focus:ring-2" {{ isset($metaPost['haun_movie_formality']) ? checked($metaPost['haun_movie_formality'], 'theater_movie', false) : '' }}>
					<label for="theater_movie" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Theater Movie')</label>
				</div>
			</div>
			
			<div class="flex flex-wrap my-4">
				<div class="flex items-center w-32 mr-4">
					<span class="font-semibold">@hnepis('Options'):</span>
				</div>
				<div class="flex items-center me-4">
					<input id="is_adult" type="checkbox" name="is_adult" value="1" class="w-4 h-4 mt-0.5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2" {{ isset($metaPost['is_adult']) ? checked($metaPost['is_adult'], 1, false) : '' }}>
					<label for="is_adult" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Adult content (18+)')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="is_copyright" name="is_copyright" type="checkbox" value="1" class="w-4 h-4 mt-0.5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" {{ isset($metaPost['is_copyright']) ? checked($metaPost['is_copyright'], 1, false) : '' }}>
					<label for="is_copyright" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Copyright')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="is_one_slide" name="haun_add_to_widget[]" type="checkbox" value="is_one_slide" class="w-4 h-4 mt-0.5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2" {{ isset($metaPost['haun_add_to_widget']) && is_array($metaPost['haun_add_to_widget']) && in_array('is_one_slide', $metaPost['haun_add_to_widget']) ? 'checked' : '' }}>
					<label for="is_one_slide" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Add to One Slide (Slider one by one)')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="is_carousel_slide" name="haun_add_to_widget[]" type="checkbox" value="is_carousel_slide" class="w-4 h-4 mt-0.5 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2" {{ isset($metaPost['haun_add_to_widget']) && is_array($metaPost['haun_add_to_widget']) && in_array('is_carousel_slide', $metaPost['haun_add_to_widget']) ? 'checked' : '' }}>
					<label for="is_carousel_slide" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Add to Carousel Slider')</label>
				</div>
				<div class="flex items-center me-4">
					<input id="paging_episode" name="haun_add_to_widget[]" type="checkbox" value="paging_episode" class="w-4 h-4 mt-0.5 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2" {{ isset($metaPost['haun_add_to_widget']) && is_array($metaPost['haun_add_to_widget']) && in_array('paging_episode', $metaPost['haun_add_to_widget']) ? 'checked' : '' }}>
					<label for="paging_episode" class="mr-2 text-sm font-medium text-gray-900">@hnepis('Paging the episode list')</label>
				</div>
			</div>

			<input type="submit" name="hnsubmit-postmeta" value="@hnepis('Update Post Info')" id="hnsubmit-postmeta" class="mt-3 bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
		</form>
	</div>
</div>