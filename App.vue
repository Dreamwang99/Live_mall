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
</style>
