@if($count >= 150)
    <div class="inside">
        <div class="wp-die-message" style="text-align: center;margin-top: 30px;font-size: 15px;color: #ff4f4f;">
            <strong>@hnlang('This episode list is too large, please use the')
            <a href="{!! admin_url('admin.php?page=hnmg-episode&act=edit_ep&post_id='.$postID) !!}" target="_blank">@hnlang('Episode Manager')</a></strong>
        </div>
    </div>
@else
    @include('HNMG::episode.epi-list', compact('postID'))
@endif