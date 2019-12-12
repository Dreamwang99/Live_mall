<template>
	<view >
		<view style="font-size: 23rpx;margin-left: 18rpx;line-height: 63rpx;">积分获取方式：</view>
		<view style="font-size: 23rpx;margin-left: 40rpx;margin-top: 10rpx;">1.购物</view>
		<view style="font-size: 23rpx;margin-left: 40rpx;margin-top: 30rpx;">2.发布视频获得积分进行购物</view>
		<view style="font-size: 23rpx;margin-left: 40rpx;margin-top: 30rpx;">3.用户充值可获取积分，积分购买</view>
		<view style="font-size: 23rpx;margin-left: 40rpx;margin-top: 30rpx;">{{rule}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rule:'',
			}
		},
		onLoad() {
			this.getrule()
		},
		methods: {
			getrule(){
				this.request.getIntegralRule({
					token: uni.getStorageSync('token')
				}).then(res =>{
					console.log(res);
					this.rule = res.data.post_content
				})
			}
		}
	}
</script>

<style>
page{
	background-color: #F5F5F5;
}
</style>
