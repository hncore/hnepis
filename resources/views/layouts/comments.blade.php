<div class="block mt-3 shadow-md bg-commentsbg p-2">
	<div class="pl-1.5 m-0 text-[14px] text-[#adb5bd] font-medium uppercase relative inline-block border-l-2 border-l-[#bd941b]">@hnepis('Comments')</div>
	<div class="-mx-[5px] p-0 list-none lg:-mx-[5px] mb-2">
		@if(hnmg_value('select_comments') == 'disqus_comment')
			<div class="w-full mx-1.5">
				<div id="disqus_thread"></div>
				@php
					$disqusShortname = hnmg_value('disqus_shortname') != '' ? hnmg_value('disqus_shortname') : 'haunytb';
				@endphp
				<script>
					var disqus_shortname = '{{ $disqusShortname }}';
					(function() {
						var dsq = document.createElement('script'); 
						dsq.async = true;
						dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
						(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
					})();
				</script>
			</div>
		@elseif(hnmg_value('select_comments') == 'fb_comments')
			<div class="fb-comments" data-href="@php(the_permalink())" data-width="100%" data-mobile="true" data-lazy="true" data-colorscheme="light" data-numposts="@php(hnmg_value('fb_comment_display'))" data-order-by="@php(hnmg_value( 'fb_comment_order_by'))" data-lazy="true"></div>
		@elseif(hnmg_value('select_comments') == 'system_comments') 
			<div x-data="HNComment()" class="my-5 mx-1.5">
				<div id="new-comment" class="w-full mx-auto mb-4 flex items-start space-x-4">
					<div>
						@svg('avatar.svg', 'h-12 w-12 avatar rounded-full shadow-lg shadow-[2px_2px_16px_0_rgba(17,18,20,0.8)]')
					</div>
					<form class="w-full mr-6" id="commentform" action="/" method="post">
						<div class="form-group m-0 p-0 rounded-md relative transition-all duration-200 ease-in-out">
							<span @click="isEmoji = !isEmoji" class="absolute top-0 bottom-0 right-0 w-10 rounded-l-none rounded-r-md cursor-pointer">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile absolute" style="top: calc(50% - 9px); left: calc(50% - 9px);"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
							</span>
							<div x-show.important="isEmoji" @click.outside="isEmoji = false" class="absolute top-20 right-0 z-50 p-0.5 mt-0.5 text-center text-base text-gray-800 bg-white border border-black/15 rounded-md animate duration-200 w-48">
								<span @click="addEmoji('😍')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😍</span>
								<span @click="addEmoji('😭')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😭</span>
								<span @click="addEmoji('😘')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😘</span>
								<span @click="addEmoji('😜')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😜</span>
								<span @click="addEmoji('😅')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😅</span>
								<span @click="addEmoji('😇')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😇</span>
								<span @click="addEmoji('🥺')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">🥺</span>
								<span @click="addEmoji('🤗')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">🤗</span>
								<span @click="addEmoji('🤩')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">🤩</span>
								<span @click="addEmoji('😱')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😱</span>
								<span @click="addEmoji('😢')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😢</span>
								<span @click="addEmoji('😡')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😡</span>
								<span @click="addEmoji('💀')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">💀</span>
								<span @click="addEmoji('👀')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">👀</span>
								<span @click="addEmoji('😤')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😤</span>
								<span @click="addEmoji('👏')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">👏</span>
								<span @click="addEmoji('🙌')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">🙌</span>
								<span @click="addEmoji('💪')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">💪</span>
								<span @click="addEmoji('✨')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">✨</span>
								<span @click="addEmoji('🥰')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">🥰</span>
								<span @click="addEmoji('🤪')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">🤪</span>
								<span @click="addEmoji('💯')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">💯</span>
								<span @click="addEmoji('😈')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">😈</span>
								<span @click="addEmoji('💥')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">💥</span>
								<span @click="addEmoji('🍀')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">🍀</span>
								@if(!empty(hnmg_value('emojis_comments')))
									@php($emoijs = array_slice(explode('|', htmlspecialchars(hnmg_value('emojis_comments'))), 0, 20))
									@foreach($emoijs as $emoij)
										<span @click="addEmoji('{{ $emoij }}')" class="emoji w-[18px] h-[18px] m-1 cursor-pointer align-middle">{{ $emoij }}</span>
									@endforeach
								@endif
							</div>
							<input type="hidden" name="action" value="add_comment">
							<input type="hidden" name="video_id" value="{{ $post->ID }}">
							<input type="text" id="name_comment" x-model="name" placeholder="@hnepis('Your Name')..." 
								   class="text-white w-full h-10 px-4 border-none outline-none text-sm font-light bg-[#1d1d1f] rounded-md mb-2">
							<input type="text" id="comment_content" @keyup.enter="HNSubComment($event)" x-model="content" placeholder="@hnepis('Enter Content')..."
								   class="text-white w-full h-20 px-4 border-none outline-none text-sm font-light bg-[#1d1d1f] rounded-md mb-2">
						</div>
					</form>
				</div>
				@php($comments = get_comments(array('post_id' => $post->ID,'status' => 'approve','number' => '5','parent' => 0)))
				@if($comments)
					<h6 class="text-[14px] font-medium mb-5 mr-1.5">@hnepis('List Comments') ({{ get_comments_number($post->ID) }})</h6>
				@endif
				<div id="comment-data" class="w-full h-auto px-3 py-2 flex flex-col space-y-2">
					@if($comments)
						@foreach ($comments as $comment)
							@php($replies = get_comments(array('parent' => $comment->comment_ID,'status' => 'approve')))
							<div class="list-comment flex items-start space-x-3 w-full">
								<div class="flex-shrink-0">
									{!! get_avatar($comment->comment_author_email, '32') !!}
								</div>
								<div class="flex-grow">
									<div class="bg-[#2a2c2d] shadow-md rounded-md px-3 py-1.5 w-full">
										<div class="font-medium text-white">
											<a href="#" class="hover:underline text-md font-bold">{!! esc_html($comment->comment_author) !!}</a>
										</div>
										<div class="text-xs text-gray-300 mt-1 break-all">{!! esc_html($comment->comment_content) !!}</div>
									</div>
									@if($comment->comment_parent == 0)
										<div class="flex space-x-2 text-xs text-gray-400 mt-1 ml-2">
											<div class="hover:underline cursor-pointer" data-postid="{{ $post->ID }}" data-commentid="{{ $comment->comment_ID }}" @click="addLike($event)">
												@hnepis('Like') <span id="likeCount-{{ $comment->comment_ID }}">{!! get_comment_meta($comment->comment_ID, 'like_count', true) !!}</span>
											</div>
											<span>·</span>
											<div class="hover:underline cursor-pointer" @click="moveReplyForm($event, '{{ $comment->comment_ID }}')">
												@hnepis('Reply')
											</div>
											<span>·</span>
											<div class="font-bold italic">{!! $time_ago(strtotime($comment->comment_date_gmt)) !!}</div>
										</div>
									@endif
									<div id="replies-{{ $comment->comment_ID }}" class="ml-8 mt-2">
										@if($replies)
											@foreach($replies as $reply)
												<div class="flex items-start space-x-3">
													<div class="flex-shrink-0">
														{!! get_avatar($reply->comment_author_email, '24') !!}
													</div>
													<div class="flex-grow">
														<div class="bg-[#3a3c3d] rounded-md px-3 py-1.5">
															<div class="font-medium text-white">
																<a href="#" class="hover:underline text-md font-bold">{{ esc_html($reply->comment_author) }}</a>
															</div>
															<div class="text-xs text-gray-300 mt-1 break-all">{{ esc_html($reply->comment_content) }}</div>
														</div>
														<div class="font-bold italic text-xs text-gray-400 mt-1 ml-2">
															{!! $time_ago(strtotime($reply->comment_date_gmt)) !!}
														</div>
													</div>
												</div>
											@endforeach
										@endif
									</div>
								</div>
							</div>  
						@endforeach
					@endif
				</div>
				@if($comments)
					<div class="load-more-comment text-center mt-4" data-total="{!! get_comments_number() !!}" data-postid="{{ $post->ID }}">
						<button @click="loadMore($event)" class="bg-[#2a2c2d] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-0">
							@hnepis('See more')
						</button>
					</div>
				@endif
			</div>
		@endif
	</div>
</div>