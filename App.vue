<script>
	import jQuery from 'api/jquery.js'
	function set_screen(wrap) {
		var s_height = document.body.clientHeight;
		var s_width = document.body.clientWidth;
		var proportion = s_height / s_width;
		if (proportion < 1.55) {
			var max_warp = document.querySelector(wrap);
			max_warp.style.height = "37.55" + "rpx";
			document.ontouchmove = function(e) {}
		}
	
	}
	export default {
		globalData: {
			userInfo: '',
			index: '',
			name: [
				'付款', '付款', '付款', '付款', '付款',
			]
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			set_screen(".wrap");
		},
		onHide: function() {
			console.log('App Hide')
		},
		
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	
	.spname {
		font-size: 22rpx;
		margin-left: 10rpx;
		width: 100%;
		height: 50rpx;
		padding-top: 10rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.JGandXL {
		display: flex;
		align-items: center;
		padding: 10rpx 10rpx 20rpx 10rpx;
		height: 70rpx;
	}
</style>
