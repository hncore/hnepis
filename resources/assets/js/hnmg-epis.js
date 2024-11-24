import Alpine from 'alpinejs';
import axios from 'axios';
import $ from "jquery";
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ajax_url = hnmgepis.ajax_url;
window.Alpine = Alpine
window.hnepisode_type = hnmgepis.hnepisode_type;
window.___ = function(key) {
    return hnmgepis.i18n[key] || key;
}

window.showToast = (function () {
    let currentToast = null;
    return function (message, type = "success") {
        if (currentToast) {
            currentToast.hideToast();
        }
        let backgroundColor;
        switch (type) {
            case "success":
                backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)";
                break;
            case "error":
                backgroundColor = "linear-gradient(to right, #e52d27, #b31217)";
                break;
            case "info":
                backgroundColor = "linear-gradient(to right, #2196F3, #21CBF3)";
                break;
            default:
                backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)";
                break;
        }
        currentToast = Toastify({
            text: message,
            duration: type === "info" ? -1 : 3000,
            gravity: "top",
            position: "center",
            backgroundColor: backgroundColor,
            stopOnFocus: true,
        });
        currentToast.showToast();
    };
})();

window.HNEpis = function() {
	return {
		importepisTab: 'episode',
		importType: 'listepisode',
		selectedServer: null,
		selectedEpisode: null,
		loading: false,
		showImport1: false,
		showImport2: false,
		showAddServer: false,
		showEditDetails: false,
		checkAll: false,
		activeTab: 1,
        activeClasses: 'border-l border-t border-r rounded-t text-blue-700',
        inactiveClasses: 'text-blue-500 hover:text-blue-700',
		selectedItems: [],
		posts: [],
		servers: [],
		openHidden: {},
		saveMessage: {},
		isLoading: false,
		buttonText: ___('Update Episodes'),

		init(postID) {
            if (!postID) {
                return;
            }
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
                            episodesPerPage: 10,
                            episodes: Array.isArray(server.haunmovies_server_data)
                                ? server.haunmovies_server_data.map((episode, epIndex) => ({
                                    name: episode.haunmovies_ep_name || '',
                                    slug: episode.haunmovies_ep_slug || '',
                                    type: episode.haunmovies_ep_type || 'link',
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
                                type: episode.haunmovies_ep_type || 'link',
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
		handleFileUpload(event, serverIndex, epIndex, subIndex) {
			const file = event.target.files[0];
			if (file) {
				this.servers[serverIndex].episodes[epIndex].subtitles[subIndex].file = file;
				this.servers[serverIndex].episodes[epIndex].subtitles[subIndex].fileType = 'file';
			}
		},
		async updateEpisodes(postID) {
			this.isLoading = true;
			this.buttonText = ___('Updating...');
	
			const formData = new FormData();
			formData.append('action', 'hnajax_update_episode');
			formData.append('post_id', postID);
	
			this.servers.forEach((server, serverIndex) => {
				formData.append(`haunmovies_server_name[${serverIndex}]`, server.name);
	
				server.episodes.forEach((episode, epIndex) => {
					formData.append(`haunmovies_ep_name[${serverIndex}][${epIndex}]`, episode.name);
					formData.append(`haunmovies_ep_slug[${serverIndex}][${epIndex}]`, episode.slug);
					formData.append(`haunmovies_ep_link[${serverIndex}][${epIndex}]`, episode.link);
					formData.append(`haunmovies_ep_type[${serverIndex}][${epIndex}]`, episode.type);
	
					episode.servers.forEach((sv, svIndex) => {
						formData.append(`haunmovies_ep_listsv_name[${serverIndex}][${epIndex}][${svIndex}]`, sv.name);
						formData.append(`haunmovies_ep_listsv_link[${serverIndex}][${epIndex}][${svIndex}]`, sv.link);
						formData.append(`haunmovies_ep_listsv_type[${serverIndex}][${epIndex}][${svIndex}]`, sv.type);
					});
	
					episode.subtitles.forEach((sub, subIndex) => {
						formData.append(`haunmovies_ep_sub_label[${serverIndex}][${epIndex}][${subIndex}]`, sub.label);
						formData.append(`haunmovies_ep_sub_default[${serverIndex}][${epIndex}][${subIndex}]`, sub.default ? 'true' : 'false');
	
						if (sub.file instanceof File) {
							formData.append(`haunmovies_ep_sub_upload[${serverIndex}][${epIndex}][${subIndex}]`, sub.file);
						} else {
							formData.append(`haunmovies_ep_sub_file[${serverIndex}][${epIndex}][${subIndex}]`, sub.file);
						}
					});
				});
			});
	
			try {
				const response = await axios.post(ajax_url, formData, {
					headers: { 'Content-Type': 'multipart/form-data' }
				});
	
				if (response.data.success) {
					this.buttonText = ___('done'); 
				} else {
					this.buttonText = ___('error'); 
				}
			} catch (error) {
				this.buttonText = ___('error');
			} finally {
				this.isLoading = false;
				setTimeout(() => {
					this.buttonText = ___('Update Episodes');
				}, 2000);
			}
		},	
		async HNListEpByServerID(postId, server) {
			this.loading = true;
			try {
				const data = new URLSearchParams();
				data.append('action', 'hnajax_list_serverid');
				data.append('post_id', postId);
				data.append('server', server);
		
				const response = await axios.post(ajax_url, data, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				});
		
				if (response.data.success) {
					document.getElementById('listepisode-one').innerHTML = response.data.data;
					document.getElementById('choose-ep').textContent = ___('choose_episode');
				} else {
					console.error("Error loading episodes:", response.data);
				}
			} catch (error) {
				console.error("AJAX error:", error);
			} finally {
				this.loading = false;
			}
		},
		hnimporterone(postId, importType) {
			const list_link = $('#list-multi-importone').val().trim().split(/\r?\n/).filter(Boolean);
			const server = $('#serverListsOne').val();
			const server_name = $('#serverListsOne option:selected').text();
			const episodeSlug = $('#listepisode-one').val();
		
			if (!server_name) {
				showToast(___('please_server_name'), 'error');
				return;
			} else if (!list_link.length) {
				showToast(___('please_form_notice'), 'error');
				return;
			} else {
				showToast(___('please_wait'), 'info');
				const data = new FormData();
				data.append('action', 'hnajax_one_importer');
				data.append('post_id', postId);
				data.append('server', server);
				data.append('list_link', JSON.stringify(list_link));
				data.append('server_name', server_name);
				data.append('import_type', importType);
				data.append('episode_slug', episodeSlug);
				axios.post(ajax_url, data, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				})
				.then(response => {
					if (response.data.success) {
						this.HNListEpByServerID(postId, server);
						showToast(___('import_successfuly'), 'success');
						setTimeout(() => window.location.reload(), 1000);
					} else {
						showToast(___('error'), 'error');
					}
				})
				.catch(error => {
					showToast(___('error'), 'error');
				});
			}
		},
		hnimportertwo(postId) {
			const list_link = $('#import-multi-epitwo').val().trim().split(/\r?\n/).filter(Boolean);
			const server = $("#serverListsTwo option:selected").val();
			const server_name = $('#serverListsTwo option:selected').text();
			if (!server_name) {
				showToast(___('please_server_name'), 'error');
				return;
			} else if (!list_link.length) {
				showToast(___('please_form_notice'), 'error');
				return;
			} else {
				showToast(___('please_wait'), 'info');
				$('#importtwo').html(___('loading'));
				const data = new FormData();
				data.append('action', 'hnajax_two_importer');
				data.append('post_id', postId);
				data.append('server', server);
				data.append('list_link', JSON.stringify(list_link));
				data.append('server_name', server_name);
				axios.post(ajax_url, data, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				})
				.then(response => {
					if (response.data.success) {
						showToast(___('import_successfuly'), 'success');
						$('#importtwo').html(___('import_episode'));
						setTimeout(function() {
							window.location.reload();
						}, 1000)
					} else {
						showToast(___('error'), 'error');
					}
				})
				.catch(error => {
					showToast(___('error'), 'error');
				});
			}
		},
		hnpostmeta(event, postID) {
			event.preventDefault(); 
			const submitButton = document.querySelector('#hnsubmit-postmeta');
			submitButton.value = ___('please_wait');
			const formData = new FormData();
			formData.append('action', 'hnajax_update_postmeta');
			formData.append('post_id', postID);
			const postMetaArray = $(event.target).serializeArray();
			formData.append('post_meta', JSON.stringify(postMetaArray)); 
			axios.post(ajax_url, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			})
			.then(response => {
				if (response.data.success) {
					submitButton.value = ___('successfully');
					setTimeout(() => {
						submitButton.value = ___('update_post_info');
					}, 800);
				} else {
					submitButton.value = ___('error');
				}
			})
			.catch(error => {
				submitButton.value = ___('error');
			});
		},
		hnpublish(postId, event) {
			let buttonElement = event.target.closest('button'); 
			buttonElement.querySelector('.loadpublish').classList.add('animate-spin');
			const data = new FormData();
			data.append('action', 'hnajax_publish_post');
			data.append('post_id', postId);
			axios.post(ajax_url, data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				}
			})
			.then(response => {
				buttonElement.querySelector('.loadpublish').classList.remove('animate-spin');
				if (response.data.success) {
					buttonElement.classList.remove('bg-red-400');
					buttonElement.classList.add('bg-green-600');
					buttonElement.innerHTML = ___('publish');
				} else {
					buttonElement.innerHTML = ___('error');
				}
			})
			.catch(error => {
				buttonElement.innerHTML = ___('error');
			});
		},
		hnaddserver(postId) {
			const list_link = $('#hnlist-addnewsv').val().trim().split(/\r?\n/).filter(Boolean);
			const server = $("#hnserver-name").data("server");
			const server_name = $('input[name="hnserver_name"]').val();
			const redirect_options = $('input[name="hnredirect_options"]:checked').val();
			if (!server_name) {
				showToast(___('please_server_name'), 'error');
				return;
			} else if (!list_link.length) {
				showToast(___('please_form_notice'), 'error');
				return;
			}
			for (const link of list_link) {
				const data = link.split('|');
				if (data.length !== 3) {
					showToast(___('error_structure') + ': ' + link, 'error');
					return;
				}
			}
			showToast(___('please_wait'), 'info');
			const data = new FormData();
			data.append('action', 'hnajax_addnewserver');
			data.append('post_id', postId);
			data.append('server', server);
			data.append('list_link', JSON.stringify(list_link));
			data.append('server_name', server_name);
			axios.post(ajax_url, data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				}
			})
			.then(response => {
				if (response.data.success) {
					showToast(___('import_successfuly'), 'success');
					if (redirect_options === 'redirect') {
						setTimeout(() => {
							window.location = `?page=hnmg-episode&act=edit_ep&post_id=${postId}&server=${server}`;
						}, 1000);
					} else {
						location.reload();
					}
				} else {
					showToast(___('error'), 'error');
				}
			})
			.catch(error => {
				showToast(___('error'), 'error');
			});
		},
		exportEpisodes(postId, serverId) {
			const $exportEpisodes = $('#download-episode');
			$exportEpisodes.show().html(___('loading'));
			const data = new FormData();
			data.append('action', 'hnajax_export_episodes');
			data.append('post_id', postId);
			data.append('server_id', serverId);
			axios.post(ajax_url, data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				}
			})
			.then(response => {
				if (response.data.status) {
					$exportEpisodes.html(response.data.msg);
					$('html, body').animate({
						scrollTop: $exportEpisodes.offset().top - 100 
					}, 500);
				} else {
					$exportEpisodes.html(___('error'));
				}
			})
			.catch(error => {
				console.error('Error exporting episodes:', error);
				$exportEpisodes.html(___('error'));
			});
		},		
		saveHiddenServer(postId) {
			const divid = `episode_server_hidden-${postId}`;
			const val = $('#' + divid + ' input[name="episode_server_hidden"]:checked').map(function() {
				return $(this).val();
			}).get();
			const data = new FormData();
			data.append('action', 'hnsave_server_hidden');
			data.append('post_id', postId);
			val.forEach(value => data.append('value[]', value)); 
			this.saveMessage[postId] = ___('Saving...');
			axios.post(ajax_url, data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				}
			})
			.then((res) => {
				this.saveMessage[postId] = ___('Done');
				setTimeout(() => {
					this.saveMessage[postId] = ___('Save');
				}, 1000);
			}).catch(error => {
				console.error('Error saving hidden server:', error);
				this.saveMessage[postId] = 'Error';
			});
		},
		loadPostsData() {
			const data = new URLSearchParams();
			data.append('action', 'load_posts_data');
			axios.post(ajax_url, data, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				})
				.then(response => {
					if (response.data.success) {
						this.posts = response.data.data;
						this.initDataTable();
					}
				})
				.catch(error => console.error('Error:', error));
		},
		initDataTable() {
			$.fn.dataTable.ext.classes.paging.active = 'text-red-600';
			$.fn.dataTable.ext.classes.length.select = 'px-4 py-0 rounded-lg focus:outline-none border-slate-300 focus:ring-0 w-24 text-[12px]';
			$.fn.dataTable.ext.classes.search.input = 'px-4 py-0 rounded-lg focus:outline-none border-slate-300 focus:ring-0 w-48 text-[12px]';
			$.fn.dataTable.ext.classes.paging.button = 'mt-1.5 border border-solid border-slate-300 text-slate-300 min-w-[35px] leading-[35px] mr-1.5 rounded-full hover:bg-red-600  inline-block';
			
			$('#epis-datatable').DataTable({
				data: this.posts,
				order: [[1, 'desc']],
				columnDefs: [{ orderable: false, targets: 0 }],
				columns: [
					{ data: 'checkbox', className: 'px-2 text-center last:border-none' },
					{ data: 'ID',  className: 'px-2 text-center last:border-none'},
					{ data: 'title',  className: 'px-6 last:border-none' },
					{ data: 'show',  className: 'px-6 text-center last:border-none' },
					{ data: 'publish',  className: 'px-6 text-center last:border-none' },
					{ data: 'episode',  className: 'px-6 text-center last:border-none' },
					{ data: 'status',  className: 'px-6 text-center last:border-none' },
					{ data: 'formality',  className: 'px-6 text-center last:border-none' },
					{ data: 'export',  className: 'px-6 text-center last:border-none' },
					{ data: 'actions_link',  className: 'px-6 text-center last:border-none' }
				],
				pagingType: "simple_numbers",
				lengthMenu: [10, 25, 50, 75, 100],
				pageLength: 10,
				numbers_length: 5,
				processing: true,	
				createdRow: function(row, data, dataIndex) {
					$(row).addClass('bg-white border-b border-slate-200 py-2');
				}
			}).tables().containers().to$().addClass('p-4');
		},
		toggleImport1() {
			this.showImport1 = !this.showImport1;
			this.showImport2 = false;
			this.showAddServer = false;
			this.showEditDetails = false;
		},
		toggleImport2() {
			this.showImport2 = !this.showImport2;
			this.showImport1 = false;
			this.showAddServer = false;
			this.showEditDetails = false;
		},
		toggleAddServer() {
			this.showAddServer = !this.showAddServer;
			this.showImport1 = false;
			this.showImport2 = false;
			this.showEditDetails = false;
		},
		toggleEditDetails() {
			this.showEditDetails = !this.showEditDetails;
			this.showImport1 = false;
			this.showImport2 = false;
			this.showAddServer = false;
		},
		deleteServer(server, postID) {
			if (confirm(___('are_delete_server'))) {
				const data = new URLSearchParams();
				data.append('action', 'hnajax_remove_server');
				data.append('post_id', postID);
				data.append('server', server);
				axios.post(ajax_url, data, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				})
				.then(response => {
					if (response.data.success) {
						const serverElement = document.querySelector(`.hnserver-${server}`);
						if (serverElement) {
							const parentItem = serverElement.closest('.hnsvitem');
							if (parentItem) {
								parentItem.remove(); 
							}
						}
					}
				})
				.catch(error => console.error('Error:', error));
			}
		},
		deleteSelectedPosts() {
			if (this.selectedItems.length === 0) {
				showToast(___('No posts selected'), 'error');
				return;
			}
			if (confirm(___('Are you sure you want to delete the selected posts?'))) {
				axios.post(ajax_url, {
					action: 'hn_delete_selected_posts',
					post_ids: this.selectedItems,
				}, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				})
				.then(response => {
					if (response.data.success) {
						showToast(response.data.data.message, 'success');
						location.reload();
					} else {
						showToast(response.data.data.message, 'error');
					}
				})
				.catch(error => console.error('Error:', error));
			}
		},
		toggleCheckAll() {
			this.checkAll = !this.checkAll;
			const checkboxes = document.querySelectorAll('input[type="checkbox"][name="episode_ids"]');
			this.selectedItems = [];
			checkboxes.forEach(checkbox => {
				checkbox.checked = this.checkAll;
				if (this.checkAll) {
					this.selectedItems.push(parseInt(checkbox.value)); 
				}
			});
		},
		toggleSelection(postID) {
			if (this.selectedItems.includes(postID)) {
				this.selectedItems = this.selectedItems.filter(id => id !== postID);
			} else {
				this.selectedItems.push(postID);
			}
		},
		changetoslug(input) {
			let slugInput = $(input).closest('.auto-slug').find('.auto-ep-slug');
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
		},
		toggleHiddenMenu(postId) {
            if (!(postId in this.openHidden)) {
                this.openHidden[postId] = false;
            }
            this.openHidden[postId] = !this.openHidden[postId];
        },
		selectImportTab(tab, type) {
			this.importepisTab = tab;
			this.importType = type;
		},
		handleExportChange(event) {
			const serverId = event.target.value;
			const postId = event.target.dataset.postId;
			if (serverId) {
				this.exportEpisodes(postId, serverId);
			}
		},
		handleServerChange(event) {
			const post_id = event.target.dataset.postid;
			const server = event.target.value;
			document.getElementById('choose-ep').textContent = ___('loading');
			this.HNListEpByServerID(post_id, server);
		},
		handleEpisodeChange() {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 300);
		},
		addServer() {
			const newServerIndex = this.servers.length;
			this.servers.push({
				name: `Server #${newServerIndex + 1}`,
				currentPage: 1,
				episodesPerPage: 10,  
				episodes: [{
					name: 'Episode 1',
					slug: 'episode-1',
					type: 'link',
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
                type: 'link',
                link: '',
                servers: [],
                subtitles: []
            });
        },
		removeEpisode(serverIndex, epIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes.splice(actualEpIndex, 1);
		},		
		addSubtitleToEpisode(serverIndex, epIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes[actualEpIndex].subtitles.push({
				label: '',
				file: '',
				default: false
			});
		},
		setDefaultSubtitle(serverIndex, epIndex, subIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes[actualEpIndex].subtitles.forEach((sub, index) => {
				sub.default = (index === subIndex);
			});
		},
		addServerToEpisode(serverIndex, epIndex) {
			const actualEpIndex = (this.servers[serverIndex].currentPage - 1) * this.servers[serverIndex].episodesPerPage + epIndex;
			this.servers[serverIndex].episodes[actualEpIndex].servers.push({
				name: '',
				type: 'link',
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
	}
}
window.Reporter = function() {
    return {
        async Remove_All() {
            try {
                const response = await axios.post(ajax_url, {
                    action: 'hnreport_ajax_removeall',
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (response.data.success) {
                    $('table.rp tbody').html('<tr><td colspan="8" class="text-center text-gray-500">' + ___('Empty!') + '</td></tr>');
                    Toastify({
                        text: response.data.data.message ||  ___('All items removed successfully!'),
                        duration: 3000,
                        close: true,
                        gravity: "bottom", 
                        position: "right",
                        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    }).showToast();
                } else {
                    Toastify({
                        text: response.data.data.message || ___('Failed to remove items!'),
                        duration: 3000,
                        close: true,
                        gravity: "bottom",
                        position: "right",
                        backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
                    }).showToast();
                }
            } catch (error) {
                console.error('Error:', error);
                Toastify({
                    text: ___('An error occurred while removing all items.'),
                    duration: 3000,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
                }).showToast();
            }
        },
        async Markas_Resolved(postID) {
			try {
				const response = await axios.post(ajax_url, {
					action: 'hnreport_ajax_update_status',
					id: postID,
				}, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				});
		
				if (response.data.success) {
					$('.status_' + postID + ' span')
						.removeClass('text-green-500')
						.addClass('text-gray-500');
					$('.mark-as-resolved-' + postID).hide();
					Toastify({
						text: response.data.data.message || ___('Marked as resolved successfully!'),
						duration: 3000,
						close: true,
						gravity: "bottom",
						position: "right",
						backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
					}).showToast();
				} else {
					Toastify({
						text: response.data.data.message || ___('Failed to mark as resolved!'),
						duration: 3000,
						close: true,
						gravity: "bottom",
						position: "right",
						backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
					}).showToast();
				}
			} catch (error) {
				console.error('Error:', error);
				Toastify({
					text: ___('An error occurred while updating the status.'),
					duration: 3000,
					close: true,
					gravity: "bottom",
					position: "right",
					backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
				}).showToast();
			}
		},	
		async Remove_Item(postID) {
			try {
				const response = await axios.post(ajax_url, {
					action: 'hnreport_ajax_remove_item',
					id: postID,
				}, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				});
				if (response.data.success) {
					const item = $('.item_' + postID);
					item.addClass('opacity-0 transition-opacity duration-500');
					setTimeout(() => {
						item.remove();
					}, 500);
					Toastify({
						text: response.data.data.message || ___('Item removed successfully!'),
						duration: 3000,
						close: true,
						gravity: "bottom",
						position: "right",
						backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
					}).showToast();
				} else {
					Toastify({
						text: response.data.data.message || ___('Failed to remove item!'),
						duration: 3000,
						close: true,
						gravity: "bottom",
						position: "right",
						backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
					}).showToast();
				}
			} catch (error) {
				Toastify({
					text: ___('An error occurred while removing the item.'),
					duration: 3000,
					close: true,
					gravity: "bottom",
					position: "right",
					backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
				}).showToast();
			}
		},		
    };
};
window.MCache = function() {
    return {
        DeleteAllCache() {
            if (confirm(___("Are you sure you want to remove all cache?"))) {
                showToast(___('Please wait...'), 'info');
                const data = new FormData();
                data.append('action', 'delete_all_cache');
                axios.post(ajax_url, data)
                    .then(response => {
                        if (response.data.success) {
                            const result = response.data.data || {};
                            showToast(___('Delete All Success'), 'success');
                            $('#result').html(`
                                <ul class="delete-cache text-sm">
                                    <li><span class="font-bold">Status:</span> ${result.status || 'N/A'}</li>
                                    <li><span class="font-bold">Total cache:</span> ${result.total_cache || 0}</li>
                                    <li><span class="font-bold">Cache time:</span> ${result.time_limit || 0}</li>
                                    <li><span class="font-bold">Cache deleted:</span> ${result.cache_deleted || 0}</li>
                                </ul>
                            `);
                            $('.list-cache').html('<li>Cache empty!</li>');
                            $('.cache-count').text('Total cache: 0');
                        } else {
                            showToast(___('Error while deleting cache'), 'error');
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        showToast(___('An unexpected error occurred'), 'error');
                    });
            }
        }
    };
};


Alpine.start()