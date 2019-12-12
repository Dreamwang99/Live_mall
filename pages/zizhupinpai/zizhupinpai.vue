<template>
	<view>
		<view style="height: 10rpx;background-color: #F5F5F5;"></view>
		<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/img-101-pp.png' + ')' }">
			<image class="lining" src="../../static/mizhihaohuo/icon-101-zzpp.png" mode=""></image>
			<view class="lnzi">李宁</view>
			<view class="yunji">大牌云集韦德之道仅需299元</view>
		</view>
		<view class="heng">
			<view class="">
				<image class="hezi" src="../../static/shangcheng/img-85-sp.png" mode=""></image>
				<view class="heng">
					<view class="yuan">￥128</view>
					<view class="yuan1">￥200</view>
					<view class="xian"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:''
			});
		},
		methods: {
			
		}
	}
</script>

<style>
.beijing{
	margin-top: 9rpx;
	height: 312rpx;
	margin-left: 20rpx;
	width: 710rpx;
	background-size: cover;
}
.lining{
	height: 66rpx;
	width: 66rpx;
	margin-top: 80rpx;
	margin-left: 322rpx;
}
.heng{
	display: flex;
	flex-direction: row;
}
.lnzi{
	font-size: 28rpx;
	margin-top: 10rpx;
	text-align: center;
	color: #FFFFFF;
}
.yunji{
	font-size: 21rpx;
	margin-top: 10rpx;
	text-align: center;
	color: #FFFFFF;
}
.hezi{
	height: 165rpx;
	width: 176rpx;
	margin-left: 20rpx;
	margin-top: 10rpx;
}
	
.yuan{
	font-size:21rpx ;
	color: #FF0D2E;
	margin-left: 20rpx;
	margin-top: 26rpx;
	
}
.yuan1{
	font-size:14rpx ;
	color: #ADADAD;
	margin-left: 8rpx;
	margin-top: 35rpx;
}
.xian{
	position: absolute;
	height: 1rpx;
	width: 56rpx;
	background-color:#ADADAD ;
	margin-top: 44rpx;
	margin-left:75rpx;
}
</style>
