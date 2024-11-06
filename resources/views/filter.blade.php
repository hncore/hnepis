<div class="flex flex-wrap space-x-4 items-center">
	<select id="category_select" class="w-36 rounded-full border border-gray-300 px-4">
		<option value="?page=hnmg-episode" selected>@hnepis('All categories')</option>
		@foreach (get_categories() as $category)
			<option value="?page=hnmg-episode&cat={{ $category->term_id }}" {!! $cat_id == $category->term_id ? 'selected' : '' !!}>
				{{ $category->name }}
			</option>
		@endforeach
	</select>
	<select id="country_select" class="w-36 rounded-full border border-gray-300 px-4">
		<option value="?page=hnmg-episode" selected>@hnepis('All countries')</option>
		@foreach (get_terms('country') as $country)
			<option value="?page=hnmg-episode&country_id={{ $country->term_id }}" {{ $countries == $country->term_id ? 'selected' : '' }}>
				{{ $country->name }}
			</option>
		@endforeach
	</select>

	<select id="release_select" class="w-36 rounded-full border border-gray-300 px-4">
		<option value="?page=hnmg-episode" selected>@hnepis('All release')</option>
		@foreach (get_terms('release') as $release)
			<option value="?page=hnmg-episode&released={{ $release->term_id }}" {{ $released == $release->term_id ? 'selected' : '' }}>
				{{ $release->name }}
			</option>
		@endforeach
	</select>

	<select id="formality_select" class="w-36 rounded-full border border-gray-300 px-4">
		<option value="">@hnepis('Formality')</option>
		<option value="?page=hnmg-episode&formality=single_movies" {!! $load->selected('single_movies', $formality) !!}>
			@hnepis('Movies')
		</option>
		<option value="?page=hnmg-episode&formality=theater_movie" {!! $load->selected('theater_movie', $formality) !!}>
			@hnepis('Theater movie')
		</option>
		<option value="?page=hnmg-episode&formality=tv_series" {{ $load->selected('tv_series', $formality) }}>
			@hnepis('TV Series')
		</option>
		<option value="?page=hnmg-episode&formality=tv_shows" {{ $load->selected('tv_shows', $formality) }}>
			@hnepis('TV Shows')
		</option>
	</select>

	<select id="status_select" class="w-36 rounded-full border border-gray-300 px-4">
		<option value="">@hnepis('Status')</option>
		<option value="?page=hnmg-episode&status=is_trailer" {{ $load->selected('is_trailer', $status) }}>
			@hnepis('Trailer')
		</option>
		<option value="?page=hnmg-episode&status=ongoing" {{ $load->selected('ongoing', $status) }}>
			@hnepis('Ongoing')
		</option>
		<option value="?page=hnmg-episode&status=completed" {{ $load->selected('completed', $status) }}>
			@hnepis('Completed')
		</option>
	</select>

	<select id="orderby_select" class="w-36 rounded-full border border-gray-300 px-4">
		<option value="">@hnepis('Orderby')</option>
		<option value="?page=hnmg-episode&orderby=ASC" {{ $load->selected('ASC', $orderby) }}>
			@hnepis('ASC')
		</option>
		<option value="?page=hnmg-episode&orderby=DESC" {{ $load->selected('DESC', $orderby) }}>
			@hnepis('DESC')
		</option>
		<option value="?page=hnmg-episode&orderby=date" {{ $load->selected('date', $orderby) }}>
			@hnepis('Date')
		</option>
		<option value="?page=hnmg-episode&orderby=modified" {{ $load->selected('modified', $orderby) }}>
			@hnepis('Modified')
		</option>
	</select>

		<form action="{{ admin_url('admin.php') }}" class="post_query search-box flex items-center space-x-2">
			<input type="hidden" name="page" value="hnmg-episode">
			<input type="search" name="s" placeholder="@hnepis('Search Post')" required class="border border-gray-300 rounded-full">
			<input type="submit" value="@hnepis('Search')" class="button bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4">
		</form>
</div>

