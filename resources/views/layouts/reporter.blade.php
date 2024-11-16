<div x-data="Reporter()">
	<h2 class="p-4 text-xl font-semibold text-gray-800">@hnepis('List Broken Movie')</h2>
	<div class="flex items-center justify-between p-4 bg-gray-100 rounded-md mb-4">
		<span class="text-gray-700">@hnepis('Broken Movie'): <strong class="text-red-500">{{ $count }}</strong></span>
		<button class="justify-start bg-red-500 hover:bg-red-700 px-3 py-1 text-sm leading-5 rounded-full font-semibold text-white" @click="Remove_All()">@hnepis('Delete All')</button>
		<div class="flex space-x-2">
			@if($page > 1)
				<a class="text-blue-600 hover:underline" href="{{ admin_url('admin.php?page=haun-movie-report&haun_page=' . ($page - 1)) }}">‹ @hnepis('Prev')</a>
			@endif
			@if($count / $show > $page)
				<a class="text-blue-600 hover:underline" href="{{ admin_url('admin.php?page=haun-movie-report&haun_page=' . ($page + 1)) }}">@hnepis('Next') ›</a>
			@endif
		</div>
	</div>
	<table class="w-[98%] bg-white shadow-md rounded-lg overflow-hidden mb-4">
		<thead>
			<tr class="bg-gray-200 text-gray-700 text-left text-md uppercase tracking-wider">
				<th class="px-4 py-2">@hnepis('Reporter')</th>
				<th class="px-4 py-2">@hnepis('Issues')</th>
				<th class="px-4 py-2 text-center">@hnepis('Status')</th>
				<th class="px-4 py-2" colspan="3">@hnepis('Details')</th>
				<th class="px-4 py-2">@hnepis('Time')</th>
				<th class="px-4 py-2 text-center">@hnepis('Action')</th>
			</tr>
		</thead>
		<tbody>
			@if(count($data) == 0)
				<tr>
					<td colspan="8" class="p-4 text-center text-gray-500">@hnepis('Empty!')</td>
				</tr>
			@else
				@foreach($data as $item)
					<tr class="border-b last:border-b-0 item_{{ $item->id }}">
						<td class="p-4">{!! ($item->name == 'BOT') ? '<span class="text-red-600">'.$item->name.'</span>' : '<span class="text-blue-600">'.$item->name.'</span>' !!}</td>
						<td class="p-4">
							@php
								$details = explode('|', $item->content);
								$issues = isset($details[1]) ? explode('@', $details[1]) : [];
							@endphp
							@foreach($issues as $val)
								<div class="text-sm text-gray-600">{!! preg_replace('/(.*?)\s*(\(.*?)\)/is', '$1', $val) !!}</div>
							@endforeach
						</td>
						<td class="p-4 text-center">
							<span class="{{ $item->seen == 0 ? 'text-green-500' : 'text-gray-500' }}">●</span>
						</td>
						<td class="p-4" colspan="3">
							<p class="text-sm {{ $details[0] == 'Auto report' ? 'text-orange-500' : '' }}">{{ $details[0] }}</p>
							<strong class="text-red-500">{{ $item->post_name }}</strong><br>
							<a href="{{ $item->url }}" target="_blank" class="text-blue-500 hover:underline">{{ $item->url }}</a>
						</td>
						<td class="p-4">{{ date("g:i m/d/Y", strtotime($item->date_time)) }}</td>
						<td class="p-4 text-center">
							@if($item->seen == 0)
								<span class="text-blue-500 cursor-pointer" @click="Markas_Resolved({{ $item->id }})">@hnepis('Mark as resolved')</span> |
							@endif
							<a href="{{ admin_url('admin.php?page=hncore-episode&act=edit_ep&post_id='.$item->post.'&server='.$item->server.'&episode='.$item->episode) }}" target="_blank" class="text-blue-500 hover:underline">@hnepis('Edit')</a> |
							<span class="text-red-500 cursor-pointer" @click="Remove_Item({{ $item->id }})">@hnepis('Remove')</span>
						</td>
					</tr>
				@endforeach
			@endif
		</tbody>
	</table>

	<div class="w-[98%] bg-white shadow-md rounded-lg overflow-hidden mb-4">
		<h2 class="px-4 py-2 text-md font-semibold text-gray-800 bg-gray-200">@hnepis('Settings')</h2>
		<form method="post" action="options.php" class="bg-gray-50 p-4 shadow-md">
			@php
				settings_fields('haun-report-settings');
				do_settings_sections('haun-report-settings');
				$issues = get_option('haun_report_issues') ?: __("Labeling problem (Wrong title or summary, or episode out of order)\nVideo Problem (Blurry, cuts out, or looks strange in some way)\nSound Problem (Hard to hear, not matched with video, or missing in some parts)\nSubtitles or captions problem (Missing, hard to read, not matched with sound, misspellings, or poor translations)\nBuffering or connection problem (Frequent rebuffering, playback won't start, or other problem)");
			@endphp
			<div class="mb-4">
				<label class="block text-sm font-medium text-gray-700">@hnepis('Issues')</label>
				<textarea rows="8" class="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="haun_report_issues" placeholder="@hnepis('Add one entry per line....')">{{ $issues }}</textarea>
				<p class="text-xs text-gray-500 mt-2">@hnepis('Add one entry per line. These issues will appear in the form of a checkbox.')</p>
			</div>
			{!! submit_button(null, 'primary', 'submit', false, ['class' => 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600']) !!}
		</form>
	</div>
</div>
