<template>
	<view style="width: 100%;">
		<view class="pinglun" v-for="(item,index) in pinglunList" :key="index">
			<view class="heng">
				<image class="touxiang" :src="item.avatar"></image>
				<text class="li">{{item.user_nicename}}</text>
				<image class="delete" src="../../static/shouhuodizhi/icon-27-sc.png" mode="aspectFit" @click="delete_butt(item.bargain_id,item.id)"></image>
			</view>
			<view class="middle">
				<view style="display: flex;">
					<text class="time">{{item.create_time}}</text>
					<text class="spec">规格：{{item.bargain_id}}</text>
				</view>
				<text class="haokan">{{item.content}}</text>
				<view class="ping_tu">
					<view v-for="(imgs,index) in item.common_image" :key="index">
						<image class="tupian" :src="imgs" v-if="imgs !=''" mode="widthFix" ></image>
					</view>
				</view>
			</view>
			<view class="heng1">
				<image class="logo1" :src="item.image" v-if="item.image != ''" mode="widthFix"></image>
				<view>
					<view class="xiaomi">{{item.title}}</view>
					<text class="prise">￥{{item.price_selling}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kanjia: false,
				pinglunList: [],
				page: 1,
				size: 10,
				userInfo: ''
			}
		},
		onLoad() {
			this.getMyConmon(this.page, this.size)
		},
		methods: {
			getMyConmon(page, size) {
				this.request.getMyConmon({
					token: uni.getStorageSync('token'),
					page: page,
					size: size
				}).then(res => {
					if (res.code === 1) {
						this.pinglunList = res.data
					} else {
						this.pinglunList = res.data
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			deletecommon(bargain_id, common_id) {
				var that = this
				that.request.deleteMyCommon({
					token: uni.getStorageSync('token'),
					bargain_id: bargain_id,
					common_id: common_id
				}).then(res => {
					if (res.code === 1) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						that.getMyConmon(that.page, that.size)
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			delete_butt(bargain_id, common_id) {
				var that = this
				uni.showModal({
					title: '您确定要删除该条评论吗',
					confirmColor: '#ff0d2e',
					success: function(res) {
						if (res.confirm) {
							that.deletecommon(bargain_id, common_id)
						}
					}
				})
			},

		},
		// onReachBottom() {
		// 	this.getMyConmon(this.page + 1, this.size);
		// }

	}
</script>

<style>
	page {
		background-color: #F5F5F5;
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.heng1 {
		width: 100%;
		display: flex;
		padding: 20rpx 0;
		border-top: 2px solid #eee;
	}

	.back {
		height: 45rpx;
		width: 35rpx;

	}

	.xian {
		height: 10rpx;

	}

	.touxiang {
		height: 100rpx;
		width: 100rpx;
		margin-left: 29rpx;
		margin-top: 22rpx;
		border-radius: 10rpx;
	}

	.delete {
		height: 40rpx;
		width: 25rpx;
		margin-top: 28rpx;
		margin-right: 30rpx;
	}

	.pinglun {
		width: 100%;
		background: #fff;
		border-top: 10rpx solid #eee;
		padding-bottom: 20rpx;
	}

	.li {
		margin-left: 50rpx;
		margin-right: auto;
		font-size: 30rpx;
		margin-top: 57rpx;
		margin-left: 37rpx;
		font-weight: 800;
	}

	.tupian {
		height: 163rpx;
		width: 227rpx;
		margin: 23rpx 5rpx 5rpx 5rpx;
		border-radius: 10rpx;
	}

	.logo1 {
		height: 120rpx;
		width: 165rpx;
		margin-top: 20rpx;
		margin-left: 29rpx;
		margin-right: 25rpx;
		border-radius: 10rpx;
	}

	.middle {
		display: flex;
		flex-direction: column;
		padding-bottom: 40rpx;
	}

	.xiaomi {
		margin-top: 25rpx;
		font-size: 25rpx;
		margin-bottom: 20rpx;
	}

	.haokan {
		margin-left: 29rpx;
		font-size: 30rpx;
		color: #000000;
	}
	.spec{
		margin-left: 29rpx;
		line-height: 62rpx;
		font-size: 20rpx;
		color: #999999;
		width: 370rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.time {
		margin-left: 29rpx;
		line-height: 62rpx;
		font-size: 20rpx;
		color: #999999;
	}

	.pop {
		display: flex;
		border-top: 1px solid #eee;
	}

	.prise {
		color: red;
		font-size: 25rpx;
		margin-top: 40rpx;

	}

	.confirm {
		line-height: 170rpx;
		text-align: center;
		font-size: 30rpx;
	}

	.kanjia {
		height: 300rpx;
		width: 530rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
	}

	.dibu {
		height: 151rpx;
		width: 537rpx;
		background-size: cover;

	}

	.gongxi {
		position: absolute;
		margin-top: -20rpx;
		height: 174rpx;
		width: 290rpx;
		text-align: center;
		margin-left: 120rpx;
	}

	.bangkan {
		text-align: center;
		line-height: 140rpx;
		font-size: 32rpx;
		color: #ff212c;
	}

	.quxiao {
		width: 265rpx;
		text-align: center;
		line-height: 130rpx;
		font-size: 30rpx;
	}

	.queding {
		border-left: 1px solid #eee;
		color: red;
	}
	.sssssss{
		min-height: 10rpx;background: #007AFF;
	}
	.ping_tu {
		display: flex;
		margin-left: 29rpx;
		flex-wrap: wrap;
	}
</style>
