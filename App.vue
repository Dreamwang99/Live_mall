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

<style lang="scss">
	/*每个页面公共css */
	@import "colorui/main.css";
	.spname {
		// font-size: 22rpx;
		// margin-left: 10rpx;
		// width: 96%;
		// height: 50rpx;
		// padding-top: 10rpx;
		// text-overflow: ellipsis;
		// white-space: nowrap;
		// overflow: hidden;
		width: 94%;
		height: 60rpx;
		margin: 0 auto;
		line-height: 60rpx;
		font-size: 28rpx;
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
	.topNav{
		width: 100%;
		height: 130rpx;
		position: fixed;
		top: 0;
		z-index: 999;
		.topNavSpace{
			height: 40rpx;
		}
		.topNavMain{
			width: 94%;
			height: 90rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.tn-left{
				height: 80rpx;
				width: 15%;
				image{
					width: 15rpx;
					height: 28rpx;
					margin-top: 26rpx;
				}
			}
			.tn-name{
				width: 70%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				color: #FFFFFF;
				font-size: 30rpx;
			}
			.tn-right{
				width: 15%;
				height: 50rpx;
				.tr-icon{
					width: 100%;
					text-align: center;
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
		}
	}
	.topNavSpace{
		// height: 130rpx;
	}
</style>
