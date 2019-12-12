<template>
	<view class="changeName">
		<view class="list">
			<input v-model="userinfo.user_nicename" placeholder="请输入名字"/>
		</view>
		<view>
			<image class="logo1" src="/static/changename/img-19-xian.png"></image>
		</view>
		<view class="list1">
			<text class="name1">取个好名字可以让你的朋友更容易记住你！</text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userinfo: uni.getStorageSync('userInformation'),
				title: 'Hello'
			}
		},
		onNavigationBarButtonTap() {
			uni.setStorageSync('changename',1)
			uni.setStorageSync('userInformation',this.userinfo)
			uni.navigateBack({
				
			})
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.changeName {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
	}

	.bianji {
		height: 30rpx;
		width: 20rpx;
		margin-left: 275rpx;
		margin-right: auto;
		margin-bottom: 10rpx;
	}

	.logo {
		transform: rotate(180deg);
		height: 30rpx;
		width: 20rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: auto;

	}

	.logo1 {
		height: 2rpx;
		width: 95%;
		margin: 20rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.baocun {
		height: 30rpx;
		width: 20rpx;
		margin-left: 200rpx;
		margin-right: auto;
		margin-bottom: 10rpx;
		font-size: 30rpx;
	}

	.list {
		height: 50rpx;
		width: 700rpx;
		margin-top: 50rpx;
		margin-left: 20rpx;

	}

	.name {
		font-size: 40rpx;
		color: #8f8f94;
		height: 50rpx;
		width: 700rpx;
		margin-left: 50rpx;
		margin-right: auto;
		margin-top: 300rpx;
		margin-bottom: 10rpx;
	}

	.list1 {
		height: 25rpx;
		width: 100%;
		margin-top: 10rpx;

	}

	.name1 {
		font-size: 25rpx;
		color: #999999;
		height: 25rpx;
		width: 700rpx;
		margin-left: 50rpx;
		margin-right: auto;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
