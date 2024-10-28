import $ from "jquery";
$(document).ready(function () {
	var report_enable = player_epis.report_enable;
	if(report_enable == 1){
		var checkbox_list = '';
		$.each(haunrp_cfg, function(i, item) {
			var issues_name = item.replace('(', '<br><span class="text-sm">').replace(')', '</span>')
			checkbox_list += `<li class="list-group-item">
								<input type="checkbox" name="issues[]" class="report-checkbox" id="item_`+i+`" value="`+item+`">
								<label class="custom-control-label" for="item_`+i+`">`+issues_name+`</label>
							</li>`;
		});
		var clickedButton;
		var currentForm;
		$('.haun-submit').prop("disabled", false);
		$('.haun-switch').on('click', function () {
			jQuery('body').append(`<div class="modal fade" id="ajax-reportModal" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title text-success"><i class="hl-attention"></i>`+haun_cfg.report_lng.report_btn+`</h4>
						</div>
						<div class="modal-body">
							<div class="haun-content col-xs-12 report-modal">
								<div class="haun-message"></div>
								<ul class="list-group list-group-flush issues-list">
									`+checkbox_list+`
								</ul>
								<div class="haun-form" style="display:none;">
									<ul class="list-group list-group-flush">
										<li class="list-group-item" style="overflow:hidden; border:none">
											<input type="text" class="form-control input-name" id="input-name" placeholder="`+haun_cfg.report_lng.name_or_email+`">
										</li>
										<li class="list-group-item" style="overflow:hidden;border:none">
											<textarea rows="5" class="form-control input-content col-md-12" id="input-content" placeholder="`+haun_cfg.report_lng.msg+`"></textarea>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="modal-footer modal-footer-report" style="display:none;">
							<button type="button" class="btn btn-default btn-block btn-close hidden" data-dismiss="modal">`+haun_cfg.report_lng.close+`</button>
							<button type="button" class="btn btn-primary btn-block haun-submit"><img class="loading-img" style="display:none;" src="`+haun_cfg.report_lng.loading_img+`"> `+haun_cfg.report_lng.report_btn+`</button>
						</div>
					</div>
				</div>
			</div>
			<style>
				span.text-sm {
					font-weight: normal;
				}
				.report-modal ul {
					list-style: none;
					padding-left: 15px;
				}
				.report-modal ul li {
					border-bottom: 1px solid #efefef;
					padding: 5px 0;
				}
				.report-modal ul li:last-child {
					border:none
				}
				.report-modal ul li input {
					float: left;
					margin-right: 10px;
				}
				.report-modal ul li label {
					font-weight: 600;
					font-size: 16px;
					color: #5e89b5;
					cursor: pointer;
					margin: 0;
				}
				.report-modal ul li label:hover{
					color: #fff;
				}
				.report-modal ul li label span {
					font-weight: normal;
					font-size: 12px;
					color: #8e8e8e;
				}
				.modal-content {
				  border-radius: 0;
				  border: none;
				  box-shadow: none;
				}
				.modal-header {
					background-color: #fafafa;
					border-bottom: 1px solid #e5e5e5;
					color: #444;
					border-top-left-radius: 10px;
					border-top-right-radius: 10px;
					font-family: inherit;
				}
				.modal-title {
				  margin: 0;
				  padding: 15px;
				}
				.close {
					font-size: 15px;
					font-weight: bold;
					color: #ff0000;
					float: right;
					margin: 11px;
					opacity: 0.8;
					border-radius: 100%;
				}

				.close:hover,
				.close:focus {
				  color: #444;
				  opacity: 0.5;
				}

				.report-checkbox {
					float: left;
					margin-right: 10px;
					margin-top: 5px;
				}

				.form-control {
				  border-radius: 0;
				  border: 1px solid #ccc;
				  box-shadow: none;
				}
				.input-name {
				  width: 98%;
				}
				.input-content {
				  width: 98%;
				}

				.haun-submit {
				  background-color: #007bff;
				  border-color: #007bff;
				  border-radius: 0;
				  box-shadow: none;
				  border-radius: 15px;
				  margin: 10px;
				}

				.haun-submit:hover,
				.haun-submit:focus {
				  background-color: #0069d9;
				  border-color: #0062cc;
				  box-shadow: none;
				  border-radius: 15px;
				  margin: 10px;
				}

				.loading-img {
				  width: 20px;
				  height: 20px;
				  vertical-align: middle;
				  margin-right: 5px;
				}
			</style>`);
			jQuery('#ajax-reportModal').modal('show');
		});

		$(document).on('change', '.report-checkbox', function(){
			if($(".report-checkbox:checked").length){
				$('.haun-form, .modal-footer-report').show()
			} else {
				$('.haun-form, .modal-footer-report').hide()
			}
		})
		
		$('body').on('click', '.haun-submit', function () {
			clickedButton = $(this);
			currentForm = $('#ajax-reportModal');

			var issues = [];
			$('input[name="issues[]"]:checked').each(function(i){
				issues[i] = $(this).val();
			});
			issues = issues.join('@');
			var _content = currentForm.find('.input-content').val();
			var _name = currentForm.find('.input-name').val();
			if(_name == ''){
				_name = 'Anonymous';
			}
			if(!issues) {
				 currentForm.find('.haun-message').html('<div class="alert alert-danger" role="alert">'+ haun_cfg.report_lng.alert +'</div>');
				 return false;
			}

			clickedButton.prop("disabled", true);
			currentForm.find('.loading-img').show();
			$.ajax({
				type: 'POST',
				url: player_epis.ajax_url,
				data: {
					action: 'haun_report',
					id_post: haun_cfg.post_id,
					server: haun_cfg.server,
					episode: haun_cfg.episode,
					post_name: $('h1.entry-title').text() + ' (server ' + haun_cfg.server + ')',
					haun_error_url: encodeURI(window.location),
					content: _content + '|'+ issues,
					name: _name,
					issues: issues
				},
				success: function (data) {
					currentForm.find('.haun-message').html('<div class="alert alert-success" role="alert">'+ haun_cfg.report_lng.msg_success +'</div>');
					currentForm.find('.haun-form, .loading-img, .issues-list').hide();
					currentForm.find('.btn-close').removeClass('hidden');
					currentForm.find('.haun-submit').hide();
				},
				error: function (e) {
					alert('Error!');
				}
			});
		});
		$('.haun-switch').on('click', function () {
			$('#ajax-reportModal').modal('show');
		});
		$('#ajax-reportModal .close').on('click', function () {
			$('#ajax-reportModal').modal('hide');
		});
		$(document).on('click', function (e) {
			if ($(e.target).is('#ajax-reportModal')) {
			  $('#ajax-reportModal').modal('hide');
			}
		});
	}
});
