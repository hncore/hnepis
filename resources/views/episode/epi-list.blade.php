<div id="haunmovies-player-data">
	<ul class="flex border-b border-slate-200" role="tablist">
		<template x-if="servers.length > 0">
			<template x-for="(server, index) in servers" :key="index">
				<li @click="activeTab = index + 1" class="relative -mb-px mr-1">
					<button type="button" :class="activeTab === (index + 1) ? activeClasses : inactiveClasses" class="bg-white inline-block py-2 px-4 font-semibold focus:ring-0 focus:outline-none">
						<span x-text="server.name"></span>
					</button>
					<template x-if="index > 0">
						<div class="absolute text-center size-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1">
							<svg @click.stop="removeServer(index)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 cursor-pointer">
								<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
							</svg>
						</div>
					</template>
				</li>
			</template>
		</template>
		<template x-if="servers.length === 0">
			<li @click="activeTab = 1" class="relative -mb-px mr-1">
				<button type="button" :class="activeTab === 1 ? activeClasses : inactiveClasses" class="bg-white inline-block py-2 px-4 font-semibold focus:ring-0 focus:outline-none">
					@hnepis('Server #1')
				</button>
			</li>
		</template>
		<li class="relative -mb-px mr-1 focus:ring-0 focus:outline-none">
			<button @click="addServer" type="button" class="block text-red-500 cursor-pointer py-2 px-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
					  <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
				</svg>
			</button>
		</li>
	</ul>

	<div class="tab-content mt-4 px-2 md:px-0">
		<template x-for="(server, index) in servers" :key="index">
			<div x-show="activeTab === (index + 1)" class="tab-pane server-container" :id="'server_' + (index + 1)">
				<div class="w-full max-w-sm min-w-[200px] relative mt-4">
					<div class="relative">
						<input type="text" :name="'haunmovies_server_name[' + (index + 1) + ']'" x-model="server.name" placeholder="{{ __('Server Name', 'hnepis') }}" class="w-full rounded-none md:w-64 bg-transparent placeholder:text-slate-400 text-slate-700 text-xs md:text-sm border border-slate-200 pr-3 pl-[90px]! mb-5" />
						<div class="absolute left-0 top-0 bg-slate-800 py-1 px-2.5 border border-transparent text-center text-xs font-semibold py-1.5 text-white transition-all shadow-sm">
							@hnepis('Server Name')
						</div>
					</div>
				</div>
				<ul class="w-full text-sm mt-2 text-left text-gray-500 border border-solid border-slate-100 rounded-md">
					<li class="flex w-full border-b border-slate-100 p-2 uppercase text-gray-500 bg-gray-50 font-bold">
						<div class="w-1/6 flex items-center">@hnepis('Name')
							<button @click="addEpisode(index)" type="button" class="relative inline text-blue-500 ml-2 hover:text-blue-600 font-semibold rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
									  <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
								</svg>
							</button>
						</div>
						<div class="hidden md:block w-1/6">@hnepis('Slug')</div>
						<div class="hidden md:block w-1/6">@hnepis('Type')</div>
						<div class="hidden md:block w-5/6">@hnepis('Link')</div>
						<div class="hidden md:block w-1/6">@hnepis('Action')</div>
					</li>

					<template x-for="(episode, epIndex) in paginatedEpisodes(index)" :key="epIndex">
						<li class="w-full bg-white border-b border-slate-100 last:border-b-0 px-2 episode-list">
							<div class="flex flex-wrap md:flex-nowrap gap-2 md:gap-4">
								<div class="flex w-full md:w-1/3 gap-2 md:gap-4 auto-slug">
									<div class="w-1/2 flex items-center md:py-2">
										<input type="text" x-model="episode.name" @input="changetoslug($event.target)" class="hn-input w-full" :name="'haunmovies_ep_name[' + (index + 1) + '][' + epIndex + ']'" placeholder="{{ __('Episode Name', 'hnepis') }}">
									</div>
									<div class="w-1/2 flex items-center md:py-2">
										<input type="text" x-model="episode.slug" class="auto-ep-slug hn-input w-full" :name="'haunmovies_ep_slug[' + (index + 1) + '][' + epIndex + ']'" placeholder="{{ __('Episode Slug', 'hnepis') }}">
									</div>
								</div>
								<div class="md:w-1/6 w-full flex items-center md:py-2">
									<select x-model="episode.type" :name="'haunmovies_ep_type[' + (index + 1) + '][' + epIndex + ']'" class="hn-input w-full">
										<template x-for="(typeName, typeKey) in window.hnepisode_type" :key="typeKey">
											<option :value="typeKey" :selected="typeKey === episode.type" x-text="typeName"></option>
										</template>
									</select>
								</div>

								<div class="md:w-5/6 w-full flex items-center md:py-2">
									<input x-model="episode.link" class="hn-input w-full" :name="'haunmovies_ep_link[' + (index + 1) + '][' + epIndex + ']'" type="text" placeholder="{{ __('Episode Link', 'hnepis') }}">
								</div>
								<div class="md:w-1/6 w-full flex md:items-center md:py-2">
									<button type="button" @click="episode.svlist = !episode.svlist; if (episode.svlist) episode.cclist = false" 
										class="relative text-blue-500 hover:text-blue-600 font-semibold rounded-full mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5">
											<path d="M5.354 2a2 2 0 0 0-1.857 1.257l-.338.845C3.43 4.035 3.71 4 4 4h8c.29 0 .571.035.84.102l-.337-.845A2 2 0 0 0 10.646 2H5.354Z" />
											<path fill-rule="evenodd" d="M2 13a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm10.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 13.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 5.5a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4H4Zm8 2.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.75 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
										</svg>

									</button>
									
									<button type="button" @click="episode.cclist = !episode.cclist; if (episode.cclist) episode.svlist = false" 
										class="relative text-red-500 hover:text-red-600 font-semibold rounded-full mr-2">
										<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10.5 4a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m7 0a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5" /></svg>
									</button>
									
									<button type="button" @click="removeEpisode(index, epIndex)" class="relative text-red-500 hover:text-red-600 font-semibold rounded-full mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5 peer">
											<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
										</svg>

									</button>
									
									<button type="button" id="sortable" class="text-teal-500 hover:text-teal-600 font-semibold rounded-full mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5">
											<path fill-rule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 2.75ZM2 6.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 2 9.75ZM14.78 11.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V6.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
										</svg>
									</button>
								</div>
							</div>
							
							<div x-show="episode.svlist" class="w-full bg-slate-200 my-4 py-2">
								<div class="flex">
									<div class="w-full hnlist-server">
										<div class="px-2 mb-3">
											<template x-for="(sv, svIndex) in episode.servers" :key="svIndex">
												<div class="mb-0.5 px-4 py-2 border border-gray-300 shadow-sm bg-white flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
													<div class="flex-wrap w-full md:w-auto">
														<input type="text" :name="'haunmovies_ep_listsv_name[' + (index + 1) + '][' + epIndex + '][' + svIndex + ']'" x-model="sv.name" class="hn-input w-full p-1 border border-gray-300" placeholder="@hnepis('Server Name')" />
													</div>
													<div class="flex-wrap w-full md:w-40">
														<select :name="'haunmovies_ep_listsv_type[' + (index + 1) + '][' + epIndex + '][' + svIndex + ']'" x-model="sv.type" class="hn-input w-full py-1 px-3">
															<template x-for="(typeName, typeKey) in window.hnepisode_type" :key="typeKey">
																<option :value="typeKey" :selected="typeKey === sv.type" x-text="typeName"></option>
															</template>
														</select>
													</div>
													<div class="flex-wrap w-full md:w-full">
														<input type="text" :name="'haunmovies_ep_listsv_link[' + (index + 1) + '][' + epIndex + '][' + svIndex + ']'" x-model="sv.link" class="hn-input w-full p-1 border border-gray-300" placeholder="@hnepis('Alternative Link')" />
													</div>
													<div class="flex-wrap w-full md:w-auto items-center space-x-2">
														<button type="button" @click="removeSVbackup(index, epIndex, svIndex)" class="text-red-500 hover:text-red-600 font-semibold rounded-full">
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
																<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
															</svg>
														</button>
													</div>
												</div>
											</template>
										</div>
										<button type="button" @click="addServerToEpisode(index, epIndex)" class="bg-gradient-to-r from-rose-600 via-purple-500 to-violet-700 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">@hnepis('Add Server')</button>
									</div>
								</div>
							</div>
							<div x-show="episode.cclist" class="w-full bg-slate-200 my-4 py-2">
								<div class="flex flex-col w-full">
									<div class="relative w-full hnsub-group">
										<div class="hnlistsub px-2 mb-3">
											<template x-for="(sub, subIndex) in episode.subtitles" :key="subIndex">
												<div class="hnmovies_subs mb-0.5 px-4 py-2 border border-gray-300 shadow-sm bg-white flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 md:space-x-4" x-data="{ fileType: sub.file ? 'url' : 'file' }">
													<div class="flex-wrap w-full md:w-auto md:max-w-40">
														<input type="text" :name="'haunmovies_ep_sub_label[' + (index + 1) + '][' + epIndex + '][' + subIndex + ']'" x-model="sub.label" class="hn-input w-full py-1 px-2 border border-gray-300" placeholder="@hnepis('Subtitle Label')" />
													</div>
													<div class="flex-wrap w-full md:w-auto md:max-w-40">
														<div class="flex space-x-2">
															<select @change="fileType = $event.target.value" class="px-4 py-1 hn-input w-40">
																<option value="url" :selected="fileType === 'url'">@hnepis('URL')</option>
																<option value="file" :selected="fileType === 'file'">@hnepis('Upload')</option>
															</select>
														</div>
													</div>
													<div class="flex-grow w-full md:w-auto" x-show="fileType === 'url'">
														<input type="text" :name="'haunmovies_ep_sub_file[' + (index + 1) + '][' + epIndex + '][' + subIndex + ']'" x-model="sub.file" class="hn-input w-full py-1 px-2 border border-gray-300" placeholder="http://example.com/files/subtitle.srt" />
													</div>
													<div class="flex-grow w-full md:w-auto" x-show="fileType === 'file'">
														<input type="file" :name="'haunmovies_ep_sub_upload[' + (index + 1) + '][' + epIndex + '][' + subIndex + ']'" 
														@change="handleFileUpload($event, index, epIndex, subIndex)"
														class="w-full overflow-clip border border-neutral-300 bg-neutral-50/50 text-xs text-neutral-600 file:mr-4 file:cursor-pointer file:border-none file:bg-neutral-50 px-4 py-0 h-[30px] file:font-semibold file:text-neutral-900" />

													</div>
													<div class="flex flex-row w-full md:w-auto md:max-w-40 items-center space-x-4">
														<div class="flex flex-row items-center space-x-2">
														<input type="radio" :name="'haunmovies_ep_sub_default[' + (index + 1) + '][' + epIndex + '][' + subIndex + ']'" 
																:value="subIndex" class="ml-2 my-0" 
																x-bind:checked="sub.default" 
																@click="setDefaultSubtitle(index, epIndex, subIndex)" />
															<label class="w-fit pl-0.5 mb-0 text-xs text-neutral-600 dark:text-neutral-300">@hnepis('Default')</label>
														</div>
														<div class="flex items-center space-x-2">
															<button type="button" @click="removeSubtitle(index, epIndex, subIndex)" class="text-red-500 hover:text-red-600 cursor-pointer p-1">
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
																	<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
																</svg>
															</button>
															<button class="sortable cursor-move text-gray-500 p-2">
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="size-4">
																	<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>
																</svg>
															</button>	
														</div>
													</div>
												</div>
											</template>
										</div>
										<div class="flex flex-nowrap md:flex-wrap justify-center md:justify-end gap-4 w-full px-2">
											<button type="button" @click="addSubtitleToEpisode(index, epIndex)" class="bg-gradient-to-r from-rose-600 via-purple-500 to-violet-700 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">@hnepis('Add Subtitle')</button>
										</div>
									</div>
								</div>
							</div>
						</li>
					</template>
				</ul>
				<div x-show="totalPages(index) > 1">
					<nav class="flex justify-center items-center -space-x-px my-5" aria-label="Pagination">
						<button @click="changePage(index, Math.max(1, servers[index].currentPage - 1))" 
							:disabled="servers[index] && servers[index].currentPage === 1" 
							type="button" class="pg-left" aria-label="Previous"> 
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
									  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75h4.69Z" clip-rule="evenodd" />
								</svg>
							<span class="sr-only">@hnepis('Previous')</span>
						</button>
						<button @click="changePage(index, 1)" 
							:class="{ 'bg-gray-200': servers[index] && servers[index].currentPage === 1 }" 
							type="button" 
							class="min-h-[32px] min-w-8 flex justify-center items-center text-gray-800 border border-gray-200 py-1.5 px-2.5 text-sm first:rounded-s-full last:rounded-e-full" 
							aria-current="page">1</button>
						<template x-for="page in pagesToShow(index)" :key="page">
							<button @click="changePage(index, page)" :class="{ 'bg-gray-200': servers[index] && servers[index].currentPage === page }" type="button" 
								class="min-h-[32px] min-w-8 flex justify-center items-center text-gray-800 border border-gray-200 py-1.5 px-2.5 text-sm first:rounded-s-full last:rounded-e-full" 
								x-text="page"></button>
						</template>

						<input type="number" min="1" :max="totalPages(index)" @keyup.enter="changePage(index, +$event.target.value);" class="border border-gray-200 min-h-[32px] ouline-none focus:outline-none rounded-none focus:ring-0 min-w-8 w-16 text-center" placeholder="Go"/>
						<button @click="changePage(index, totalPages(index))" 
							:class="{ 'bg-gray-200': servers[index] && servers[index].currentPage === totalPages(index) }" type="button" class="pg-last py-1.5" 
							x-text="totalPages(index)"></button>

						<button @click="changePage(index, Math.min(totalPages(index), servers[index].currentPage + 1))" 
							:disabled="servers[index] && servers[index].currentPage === totalPages(index)" type="button" class="pg-right" aria-label="Next">
							<span class="sr-only">@hnepis('Next')</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
								<path fill-rule="evenodd" d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z" clip-rule="evenodd" />
							</svg>
						</button>
					</nav>
				</div>
			</div>
		</template>
	</div>
</div>