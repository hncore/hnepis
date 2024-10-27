import Alpine from 'alpinejs';
import $ from "jquery";
const ajax_url = hnmgepis.ajax_url;
window.Alpine = Alpine
window.playerData = function(postID) {
    return {
        activeTab: 1,
        activeClasses: 'border-l border-t border-r rounded-t text-blue-700',
        inactiveClasses: 'text-blue-500 hover:text-blue-700',
        servers: [],
        init() {
            $.ajax({
                url: ajax_url,
                method: 'POST',
                data: {
                    action: 'hnajax_getlist_episodes',
                    post_id: postID  
                },
                success: (response) => {
                    if (response.success && Array.isArray(response.data) && response.data.length > 0) {
                        const oldData = response.data;
                        this.servers = oldData.map((server, index) => ({
                            name: server.haunmovies_server_name || `Server #${index + 1}`,
                            currentPage: 1,
                            episodesPerPage: 5,
                            episodes: Array.isArray(server.haunmovies_server_data)
                                ? server.haunmovies_server_data.map((episode, epIndex) => ({
                                    name: episode.haunmovies_ep_name || '',
                                    slug: episode.haunmovies_ep_slug || '',
                                    type: episode.haunmovies_ep_type || 'type1',
                                    link: episode.haunmovies_ep_link || '',
                                    servers: (episode.haunmovies_ep_listsv || []).map(sv => ({
                                        name: sv.haunmovies_ep_listsv_name || '',
                                        link: sv.haunmovies_ep_listsv_link || '',
                                        type: sv.haunmovies_ep_listsv_type || 'embed'
                                    })),
                                    subtitles: episode.haunmovies_ep_subs.map(sub => ({
                                        label: sub.haunmovies_ep_sub_label || '',
                                        file: sub.haunmovies_ep_sub_file || '',
                                        default: sub.haunmovies_ep_sub_default === 'true'
                                    }))
                            }))
                            : Object.values(server.haunmovies_server_data).map((episode, epIndex) => ({
                                name: episode.haunmovies_ep_name || '',
                                slug: episode.haunmovies_ep_slug || '',
                                type: episode.haunmovies_ep_type || 'type1',
                                link: episode.haunmovies_ep_link || '',
                                servers: (episode.haunmovies_ep_listsv || []).map(sv => ({
                                    name: sv.haunmovies_ep_listsv_name || '',
                                    link: sv.haunmovies_ep_listsv_link || '',
                                    type: sv.haunmovies_ep_listsv_type || 'embed'
                                })),
                                subtitles: episode.haunmovies_ep_subs.map(sub => ({
                                    label: sub.haunmovies_ep_sub_label || '',
                                    file: sub.haunmovies_ep_sub_file || '',
                                    default: sub.haunmovies_ep_sub_default === 'true' 
                                }))
                            }))
                        }));
                    } else {
                        this.addServer();
                    }
                },
                error: (error) => {
                    console.error('AJAX error:', error);
                }
            });
        },
		addServer() {
			const newServerIndex = this.servers.length;
			this.servers.push({
				name: `Server #${newServerIndex + 1}`,
				currentPage: 1,
				episodesPerPage: 5,  
				episodes: [{
					name: 'Episode 1',
					slug: 'episode-1',
					type: 'type1',
					link: '',
					servers: [],
					subtitles: []
				}]
			});
			this.activeTab = newServerIndex + 1;
		},
		removeServer(index) {
			this.servers.splice(index, 1); 
			if (this.activeTab > this.servers.length) {
				this.activeTab = this.servers.length;
			}
			if (this.servers.length === 0) {
				this.activeTab = 1;
			}
		},
        addEpisode(serverIndex) {
            this.servers[serverIndex].episodes.push({
                name: '',
                slug: '',
                type: 'type1',
                link: '',
                servers: [],
                subtitles: []
            });
        },
		removeEpisode(serverIndex, epIndex) {
            this.servers[serverIndex].episodes.splice(epIndex, 1);
        },
		addSubtitleToEpisode(serverIndex, epIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes[actualEpIndex].subtitles.push({
				label: '',
				file: '',
				default: false
			});
		},

		addServerToEpisode(serverIndex, epIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes[actualEpIndex].servers.push({
				name: '',
				type: 'type1',
				link: ''
			});
		},

        removeSubtitle(serverIndex, epIndex, subIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes[actualEpIndex].subtitles.splice(subIndex, 1);
		},
	
		removeSVbackup(serverIndex, epIndex, svIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes[actualEpIndex].servers.splice(svIndex, 1);
		},
		
		totalPages(serverIndex) {
			if (!this.servers[serverIndex]) return 0; 
			const episodesCount = this.servers[serverIndex].episodes.length;
			return Math.ceil(episodesCount / this.servers[serverIndex].episodesPerPage);
		},

		paginatedEpisodes(serverIndex) {
			if (!this.servers[serverIndex]) return []; 

			const start = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage;
			const end = start + this.servers[serverIndex].episodesPerPage;
			return this.servers[serverIndex].episodes.slice(start, end);
		},

		changePage(serverIndex, newPage) {
			if (this.servers[serverIndex]) { 
				this.servers[serverIndex].currentPage = newPage;
			}
		},

		pagesToShow(serverIndex) {
			if (!this.servers[serverIndex]) return []; 

			const total = this.totalPages(serverIndex);
			const current = this.servers[serverIndex].currentPage;
			const pages = [];
			let startPage = Math.max(2, current - 1);
			let endPage = Math.min(total - 1, current + 1);
			for (let i = startPage; i <= endPage; i++) {
				pages.push(i);
			}

			return pages;
		}

    };
};
window.hnepisode_type = hnmgepis.hnepisode_type;
window.HNLang = function(key) {
    if (hnmgepis.i18n && hnmgepis.i18n[key]) {
        return hnmgepis.i18n[key];
    } else {
        return key;
    }
}
window.HNExportEpi = function(post_id, server_id) {
	jQuery(function($) {
		$('#download-episode').show().html(HNLang('loading'));
		$.ajax({
			type: 'POST',
			url: ajax_url,
			data: {
				action: 'hnajax_export_episodes',
				post_id: post_id,
				server_id: server_id
			},
			success: function(data) {
				if(data.status == true) {
					$('#download-episode').show().html(data.msg)
				} else {
					$('#download-episode').show().html(HNLang('error'))
				}
			}
		});
	});
}
window.HNAddServer = function() {
	jQuery(function($) {
		var list_link = $('#hnlist-addnewsv').val().split(/\r?\n/);
		var post_id = $('#hnbtn-addnewsv').data('postid');
		var server = $("#hnserver-name").data("server");
		var server_name = $('input[name="hnserver_name"]').val();
		var redirect_options = $('input[name="hnredirect_options"]:checked').val();
		
		if (server_name == '') {
			alert(HNLang('please_server_name'));
		} else if (list_link == '') {
			alert(HNLang('please_episode_list'));
		} else {
			$('#status').show().html(HNLang('please_wait'));
			$.ajax({
				url: ajax_url,
				type: 'POST',
				data: {
					action: 'hnajax_addnewserver',
					post_id: post_id,
					server: server,
					list_link: list_link,
					server_name: server_name
				},
				success: function(result) {
					$('#hnstatus').show().html(HNLang('import_successfuly'));
					if (redirect_options == 'redirect') {
						setTimeout(function(){
							window.location = '?page=hnmg-episode&act=edit_ep&post_id='+post_id+'&server='+server;
						}, 1000);
					} else {
						location.reload();
					}
				}
			});
		}
	});
}
window.scrollToElement = function() {
	jQuery('html, body').animate({
		scrollTop: jQuery("#download-episode").offset().top
	}, 2000);
}
window.HNImporterTwo = function() {
	jQuery(function($) {
		var list_link = $('#import-multi-epitwo').val().split(/\\r?\\n/);
		var post_id = $('#importtwo').data('postid');
		var server = $("#serverListsTwo option:selected").val();
		var server_name = $('#serverListsTwo option:selected').text();
		if(list_link == '') {
			alert(HNLang('please_form_notice'));
		} else {
			$('#status').show().html(HNLang('please_wait'));
			$('#importtwo').html(HNLang('loading'));
			$.ajax({
				url: ajax_url,
				type: 'POST',
				data: {
					action: 'hnajax_two_importer',
					post_id: post_id,
					server: server,
					list_link: list_link,
					server_name: server_name
				},
				success: function(result) {
					$('#statustwo').show();
					$('#statustwo .hnnotice').html(HNLang('import_successfuly'));
					$('#importtwo').html(HNLang('import_episode'));
					setTimeout(function() {
						window.location.reload();
					}, 1000)
				}
			});
		}
	});
}	
window.HNImporterOne = function(importType){
    jQuery(function($) {
        const listLink = $('#list-multi-importone').val().split(/\r?\n/);
        const postId = $('#importone').data('postid');
        const server = $("#serverListsOne").val();
        const serverName = $('#serverListsOne option:selected').text();
        const episodeSlug = $('#listepisode-one').val();
        if (importType !== 'listepisode' && !episodeSlug) {
            alert(HNLang('notice_epi_to_import'));
            return;
        }
        if (!listLink.length || listLink[0] === '') {
            alert(HNLang('please_link_list'));
            return;
        }
        $('#statusone').show().html(HNLang('please_wait'));
        $.ajax({
            url: ajax_url,
            type: 'POST',
            data: {
                action: 'hnajax_one_importer',
                post_id: postId,
                server: server,
                list_link: listLink,
                server_name: serverName,
                import_type: importType,
                episode_slug: episodeSlug
            },
            success: function(result) {
                HNListEpByServerID(postId, server);
                $('#statusone').show().html(HNLang('import_successfuly'));
                setTimeout(function() {
                    window.location.reload();
                }, 1000);
            }
        })
    });
}
window.HNListEpByServerID = function(post_id, server) {
	jQuery(function($) {
		$.ajax({
			type: 'POST',
			url: ajax_url,
			data: {
				action: 'hnajax_list_serverid',
				post_id: post_id,
				server: server
			},
			success: function(data) {
				$('#listepisode-one').html(data);
				$('.loading').hide();
			}
		})
	});
}
window.ChangeToSlug = function(input) {
    let slugInput = jQuery(input).closest('.auto-slug').find('.auto-ep-slug');
    let title = input.value;
    let slug = title.toLowerCase();
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /gi, "-");
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    slugInput.val(slug);
}
window.hnmatch = function(input) {
    var data = $(value).attr('name');
    if (!data) return null;
    let matches = null;
    switch (level) {
        case 1:
            matches = data.match(/\d+/);
            break;
        case 2:
            matches = data.match(/\d+\]\[(\d+)/);
            break;
        case 3:
            matches = data.match(/\d+\]\[(\d+)\]\[(\d+)\]/);
            break;
        default:
            return null;
    }
    return matches ? matches[1] || matches[0] : null;
}

Alpine.start()

jQuery(function($) { 
	$('.hnexport-episodes').on('click', function(){
		const post_id = $(this).data('post-id');
		const server_id = $(this).data('server');
		HNExportEpi(post_id, server_id)
	});
	
	$('.hnserver-to-export').on('change', function () {
		const server_id  = $(this).val();
		const post_id   = $(this).data('post-id');
		HNExportEpi(post_id, server_id)
	});
		
	$('.save-option').on('click', function() {
		const post_id 	= $(this).data('post-id')
		const divid 	= $(this).data('divid')
		let val 		= $('#' + divid + ' input[name="episode_server_hidden"]:checked').map(function() {
			return $(this).val();
		}).get()
		this.saveMessage = hnglang('saving'); 
		
		$.ajax({
			type: 'POST',
			url: ajax_url,
			data: {
				action: 'hnsave_server_hidden',
				post_id: post_id,
				value: val 
			},
			success: function(res) {
				this.saveMessage = HNLang('done');
				setTimeout(() => {
					this.saveMessage = HNLang('save'); 
				}, 1000);
			}.bind(this)
		});
	});

	$("form#hnupdate-postmeta" ).on('submit', function( event ) {
		const post_id = $('#hnupdate-postmeta').data('postid');
		$('#hnsubmit-postmeta').val(HNLang('please_wait'));
		$.ajax({
			url: ajax_url,
			type: 'POST',
			data: {
				action: 'hnajax_update_postmeta',
				post_id: post_id,
				post_meta: $(this).serializeArray()
			},
			success: function(result) {
				$('#hnsubmit-postmeta').val(HNLang('successfully'));
				setTimeout(function(){
					$('#hnsubmit-postmeta').val(HNLang('update_post_info'));
				}, 800);
			}
		});
		event.preventDefault();
	});
	
	$('#serverListsOne, #serverListsTwo').on('change', function () {
		const post_id = $(this).data('postid');
		const server = $(this).val();
		$('.loading').show();
		$('#choose-ep').text(HNLang('loading'));
		HNListEpByServerID(post_id, server);
		return false;
	});
	
	$('#listepisode-one').on('change', function () {
		$('.loading').show();
		setTimeout(function(){
			$('.loading').hide();
		}, 300)
		return false;
	});
	
	$(".hndel-server").on('click', function() {
        const server = $(this).data('server');
        const postid = $(this).data('postid');
        const button = this;
        
        if (confirm(HNLang('are_delete_server'))) {
            $.ajax({
                type: 'POST',
                url: ajax_url,
                data: {
                    action: 'hnajax_remove_server',
                    post_id: postid,
                    server: server
                },
                success: function(response) {
                    $(button).closest('.hnsvitem').addClass('fadeout-tomato').fadeOut(800, function() {
                        $(this).remove();
                    });
                    setTimeout(function() {
                        location.reload();
                    }, 1000);
                }
            });
        }
    });

	$('#category_select, #country_select, #release_select, #status_select, #formality_select, #orderby_select').on('change', function() {
        let selectedValue = $(this).val();
        if (selectedValue) {
            window.location = selectedValue;
        }
        return false;
    });
	
	$('.hnpublish').on('click', function() {
        let button = this;
        const postId = $(button).data('post-id');
        $(button).find('.loadpublish').addClass('animate-spin');
        $.ajax({
            type: 'POST',
            url: ajax_url,
            data: {
                action: 'hnajax_publish_post',
                post_id: postId
            },
            success: function(response) {
                if (response.status === 1) {
                    $(button).find('.loadpublish').removeClass('animate-spin');
                    $(button).parent().removeClass('bg-red-400').addClass('bg-green-600');
                    $(button).parent().html(HNLang('publish'));
                } else {
                    $(button).parent().html(HNLang('error'));
                }
            }
        });
    });
	
	$(document).on('click', '.hnepisode-saving', function (e) {
		e.preventDefault();
		const post_id = $(this).data('post-id');
		let formData = new FormData();
		let valid = true;
		let button = this;
		formData.append('action', 'hnajax_update_episode');
		formData.append('post_id', post_id);

		$('input[name^="haunmovies_server_name"]').each(function (index, element) {
			let serverIndex = $(element).attr('name').match(/\d+/)[0];
			formData.append('haunmovies_server_name[' + serverIndex + ']', $(element).val());

			$('input[name^="haunmovies_ep_name[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				formData.append('haunmovies_ep_name[' + serverIndex + '][' + episodeIndex + ']', $(epElement).val());
			});

			$('input[name^="haunmovies_ep_slug[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				formData.append('haunmovies_ep_slug[' + serverIndex + '][' + episodeIndex + ']', $(epElement).val());
			});

			$('input[name^="haunmovies_ep_link[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				formData.append('haunmovies_ep_link[' + serverIndex + '][' + episodeIndex + ']', $(epElement).val());
			});

			$('select[name^="haunmovies_ep_type[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				formData.append('haunmovies_ep_type[' + serverIndex + '][' + episodeIndex + ']', $(epElement).val());
			});

			$('input[name^="haunmovies_ep_sub_label[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				let subtitleIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)\]\[(\d+)\]/)[2];
				const labelValue = $(epElement).val().trim();
				if (labelValue === '') {
					$(epElement).addClass('border-red-500');
					valid = false;
				} else {
					$(epElement).removeClass('border-red-500');
					formData.append('sub_label[' + serverIndex + '][' + episodeIndex + '][' + subtitleIndex + ']', labelValue);
				}
			});

			$('input[name^="haunmovies_ep_sub_file[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				let subtitleIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)\]\[(\d+)\]/)[2];
				const subFile = $(epElement).val().trim();
				if (subFile === '') {
					$(epElement).addClass('border-red-500');
					valid = false;
				} else {
					$(epElement).removeClass('border-red-500');
					formData.append('sub_file[' + serverIndex + '][' + episodeIndex + '][' + subtitleIndex + ']', subFile);
				}
			});

			$('input[type="file"][name^="haunmovies_ep_sub_upload[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				let subtitleIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)\]\[(\d+)\]/)[2];
				if (epElement.files.length > 0) {
					formData.append('sub_file_upload[' + serverIndex + '][' + episodeIndex + '][' + subtitleIndex + ']', epElement.files[0]); // Tải lên tệp
				}
			});

			$('input[type="radio"][name^="haunmovies_ep_sub_default[' + serverIndex + ']"]').each(function (epIndex, epElement) {
				let episodeIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				let subtitleIndex = $(epElement).attr('name').match(/\d+\]\[(\d+)\]\[(\d+)\]/)[2];
				if ($(epElement).is(':checked')) {
					formData.append('sub_default[' + serverIndex + '][' + episodeIndex + '][' + subtitleIndex + ']', '1');
				} else {
					formData.append('sub_default[' + serverIndex + '][' + episodeIndex + '][' + subtitleIndex + ']', '0');
				}
			});
			$('input[name^="haunmovies_ep_listsv_name[' + serverIndex + ']"]').each(function (epIndex, svElement) {
				let episodeIndex = $(svElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				let svIndex = $(svElement).attr('name').match(/\d+\]\[(\d+)\]\[(\d+)\]/)[2];
				formData.append('listsv_name[' + serverIndex + '][' + episodeIndex + '][' + svIndex + ']', $(svElement).val().trim());
			});

			$('input[name^="haunmovies_ep_listsv_link[' + serverIndex + ']"]').each(function (epIndex, svElement) {
				let episodeIndex = $(svElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				let svIndex = $(svElement).attr('name').match(/\d+\]\[(\d+)\]\[(\d+)\]/)[2];
				formData.append('listsv_link[' + serverIndex + '][' + episodeIndex + '][' + svIndex + ']', $(svElement).val().trim());
			});
			$('select[name^="haunmovies_ep_listsv_type[' + serverIndex + ']"]').each(function (epIndex, svElement) {
				let episodeIndex = $(svElement).attr('name').match(/\d+\]\[(\d+)/)[1];
				let svIndex = $(svElement).attr('name').match(/\d+\]\[(\d+)\]\[(\d+)\]/)[2];
				formData.append('listsv_type[' + serverIndex + '][' + episodeIndex + '][' + svIndex + ']', $(svElement).val());
			});
			
		});

		if (valid) {
			$(button).html('<span class="dashicons dashicons-image-rotate loading mr-2"></span> ' + HNLang('updating'));

			$.ajax({
				url: ajax_url,
				type: 'POST',
				data: formData,
				processData: false,
				contentType: false,
				success: function (response) {
					$(button).html(HNLang('done'));
				},
				error: function (xhr, status, error) {
					$(button).html("Error! Try again.");
				}
			});
		}
	});


});