<template>
	<view>
		<web-view v-if="kefu==true" src="https://chat-new.mqimg.com/widget/standalone.html?eid=179049&agentid=79532d519e083eb18c0924d5542fcb07"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				kefu: false,
			}
		},
		onLoad() {
			this.kefu = true
		},
		onUnload() {
			this.kefu = false
		},
		methods: {}
	}
</script>
<style>
	.logo {
		transform: rotate(180deg);
		height: 30rpx;
		width: 20rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: auto;
	}

	.di {
		height: 100rpx;
		background-color: #f2f2f2;
		display: flex;
		flex-direction: row;
	}

	.bianji {
		height: 80rpx;
		margin-left: 275rpx;
		margin-right: auto;
		margin-bottom: 10rpx;
	}
.di1{
	margin-left: 20rpx;
	margin-top: 10rpx;
	width: 560rpx;
	height: 60rpx;
	background-color: #FFFFFF;
	background-size: 100% 100%;
	border-radius: 25rpx;
}
	.beijing {
		height: 1000rpx;
		width: 750rpx;
		background-color: #F5F5F5;
	}

	.time {
		display: flex;
		flex-direction: row;
		margin-left: 300rpx;
		height: 50rpx;
		width: 115rpx;
		background-color: #cdcdcd;
		border-radius: 2rpx;
	}
	.time1 {
		height: 30rpx;
		background-color: #F5F5F5;
	}
	.ye {
		height: 120rpx;
		width: 120rpx;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}
	.ye1 {
		height: 120rpx;
		width: 120rpx;
		margin-right: 20rpx;
		margin-left: auto;
		margin-top: 10rpx;
	}
	.duihua {
		background-size: 100% 100%;
		height: 75rpx;
		width: 180rpx;
		margin-left: 50rpx;
		margin-top: 60rpx;
		margin-bottom: auto;
	}
	.duihua1 {
		background-size: 100% 100%;
		height: 75rpx;
		width: 180rpx;
		margin-right: auto;
		margin-left: 400rpx;
		margin-top: 60rpx;
		margin-bottom: 40rpx;
	}
	.list {
		display: flex;
		flex-direction: row;
	}
	.zi3 {
		line-height: 75rpx;
		font-size: 32rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}

	.zi4 {
		font-size: 18rpx;
		line-height: 34rpx;
		margin-top: 8rpx;

		color: white;
		margin-left: 10rpx;
	}

	.zi5 {
		line-height: 75rpx;
		font-size: 30rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;

	}
	.di2{
		margin-top: 30rpx;
		margin-left: 20rpx;
		width: 40rpx;
		height: 40rpx;
		margin-top: ;
	}
</style>
