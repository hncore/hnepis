@include('HNEPIS::layouts.header')
	<div id="download-episode" class="w-[98%] my-8 border-2 border-sky-500 border-dashed" style="display: none"></div>
	<div x-data="HNEpis()" x-init="loadPostsData()" class="w-full md:w-[98%] relative my-6 shadow-lg rounded-md sm:rounded-lg bg-white">
		<table id="epis-datatable" class="w-full pp-2 text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 border-slate-200 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="p-4 border-none">
						<label for="checkAll" class="flex items-center cursor-pointer text-neutral-600 dark:text-neutral-300 ">
							<div class="relative flex items-center">
								<input type="checkbox" x-model="checkAll" @click="toggleCheckAll" class="size-4 cursor-pointer appearance-none overflow-hidden rounded border border-neutral-300 bg-white focus:outline-none focus:ring-0 active:outline-offset-0" />
							</div>
						</label>
					</th>
					<th scope="col" class="py-3 px-6 hover:outline-none border-none">@hnepis('ID')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none border-none">@hnepis('Post Name')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none text-center border-none">@hnepis('Show/Hide Server')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none text-center border-none">@hnepis('Post Status')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none text-center border-none">@hnepis('Latest Episode')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none text-center border-none">@hnepis('Status')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none text-center border-none">@hnepis('Post Type')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none text-center border-none">@hnepis('Export Episodes')</th>
					<th scope="col" class="py-3 px-6 hover:outline-none text-center border-none">@hnepis('Actions')</th>
				</tr>
			</thead>
		</table>

		@if(!empty($_GET['act']) && $_GET['act'] == 'edit_ep')
			@include('HNEPIS::episode.epi-page')
		@endif
	</div>
@include('HNEPIS::layouts.footer')