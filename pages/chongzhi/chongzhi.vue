<template>
	<view>
		<view style="height: 10rpx;background-color: #F5F5F5;"></view>
		<view class="xuanze">选择数量</view>
		<view class="heng">
			<view class="kuang">
				<view class="heng">
					<view class="shu">3000</view>
					<image class="zs" src="../../static/zhibo/iocn-105-zs.png" mode=""></image>
				</view>
				<view class="yuan">30元</view>
			</view>
			<view class="kuang" style="border-color: #d5d5d5 ; margin-left: 90rpx;">
				<view class="heng">
					<view class="shu">3000</view>
					<image class="zs" src="../../static/zhibo/iocn-105-zs.png" mode=""></image>
				</view>
				<view class="yuan">30元</view>
			</view>
			<view class="kuang" style="border-color: #d5d5d5 ; margin-left: 90rpx;">
				<view class="heng">
					<view class="shu">3000</view>
					<image class="zs" src="../../static/zhibo/iocn-105-zs.png" mode=""></image>
				</view>
				<view class="yuan">30元</view>
			</view>
			</view>
			<view style="height: 10rpx;background-color: #F5F5F5;"></view>
			<view class="xuanze">支付方式</view>
			<view class="heng">
				<image class="zfb" src="../../static/zhibo/iocn-105-zfb.png" mode=""></image>
				<view class="zi">支付宝</view>
				<image class="gou" src="../../static/shouhuodizhi/iocn-27-gou.png" mode=""></image>
			</view>
			<view class="heng">
				<image class="wx" src="../../static/zhibo/iocn-105-wx.png" mode=""></image>
				<view class="zi">微信</view>
				<image class="gou" src="../../static/zhibo/iocn-105-wx2.png" mode=""></image>
			</view>
		<view style="height: 264rpx;background-color: #F5F5F5;"></view>
		<view style="height: 555rpx;background-color: #F5F5F5;">
			<button class="queren" type="primary">确认</button>
			</view>
	</view>
</template>

<script>
	import bridge from '@/common/unfile/unfile.js';
	export default {
		data() {
			return {};
		},
		onBackPress() {
			bridge.call('navBack', "页面返回");
			return true;
		},
		methods: {}
	};
</script>

<style>
.xuanze {
	font-size: 23rpx;
	margin-top: 23rpx;
	margin-left: 40rpx;
	color: #d5d5d5;
}
.heng {
	display: flex;
	flex-direction: row;
}
.kuang {
	height: 102rpx;
	width: 162rpx;
	border: solid;
	border-color: #ff212c;
	margin-left: 40rpx;
	margin-top: 22rpx;
	margin-bottom: 25rpx;
}
.zs {
	height: 20rpx;
	width: 15rpx;
	margin-left: 10rpx;
	margin-top: 26rpx;
}
.shu {
	margin-left: 39rpx;
	margin-top: 21rpx;
	font-size: 18rpx;
}
.yuan {
	margin-left: 56rpx;
	margin-top: 18rpx;
	font-size: 18rpx;
	color: #d5d5d5;
}
.zfb{
	height: 32rpx;
	width: 32rpx;
	margin-top: 30rpx;
	margin-left: 35rpx;
}
.wx{
	height: 27rpx;
	width: 30rpx;
	margin-top: 28rpx;
	margin-left: 35rpx;
	margin-bottom: 40rpx;
}
.zi{
	font-size: 23rpx;
	margin-top: 32rpx;
	margin-left: 10rpx;
	
	color: #494949;
}
.gou{
	height: 30rpx;
	width: 30rpx;
	margin-top: 35rpx;
	margin-left: auto;
	margin-right: 45rpx;
}
.queren{
	background-color: #f13720;
	height: 75rpx;
	width: 710rpx;
	font-size: 33rpx;
	border-radius: 40rpx;
}
</style>
