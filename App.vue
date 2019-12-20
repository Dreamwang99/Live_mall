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
	// 导航头
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
	// 商品列表
	.goodsMs{
		width: 92%;
		margin: 20rpx auto 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		.gm-item{
			width: 49%;
			margin-bottom: 16rpx;
			background-color: #FFFFFF;
			border-radius: 6rpx;
			box-shadow: 5rpx 5rpx 10rpx #E0E0E0;
			overflow: hidden;
			.gi-images{
				width: 100%;
				height: 300rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.gi-desc{
				width: 94%;
				margin: 0 auto;
				.gd-name{
					height: 50rpx;
					font-size: 24rpx;
					line-height: 50rpx;
					overflow: hidden;
				}
				.gd-intro{
					height: 50rpx;
					font-size: 22rpx;
					color: #666666;
					line-height: 50rpx;
					overflow: hidden;
				}
				.gd-info{
					height: 50rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.gi-price{
						height: 50rpx;
						line-height: 50rpx;
						font-size: 26rpx;
						color: #F13420;
					}
					.gi-sales{
						height: 50rpx;
						line-height: 50rpx;
						font-size: 22rpx;
						color: #999999;
					}
				}
			}
		}
	}
</style>
