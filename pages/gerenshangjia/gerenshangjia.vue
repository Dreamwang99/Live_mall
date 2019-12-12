<template>
	<view>
		<view class="beijing1" :style="{ backgroundImage: 'url(' + '/static/shouye/bg-top.png' + ')' }">
			<view class="heng">
				<image class="mi" src="../../static/shouye/logo-84-wz.png" mode=""></image>
				<view class="heng sousuo">
					<image class="fangdajing" src="../../static/icon-fangdajing.png" mode=""></image>
					<input class="shuru" type="text" value="" placeholder="请输入搜索内容" />
				</view>
				<image class="xinxi" src="../../static/shouye/iocn-xx.png" mode=""></image>
			</view>
			<view class="heng">
				<view class="tj">推荐</view>
				<view class="tj sp">个人商家</view>
				<view class="tj ">视频</view>
				<view class="tj">免费拿</view>
			</view>
		</view>
		<view class="beijing2" :style="{ backgroundImage: 'url(' + '/static/shouye/bg-84.png' + ')' }">
			<image class="chufang" src="../../static/shouye/banner-82-.png" mode=""></image>
			<view>
				<view style="display: flex;flex-direction: row;">
					<image class="tx" src="../../static/dpshoucang/img-49-tx.png" mode=""></image>
					<view style="display: flex;flex-direction: column;">
						<text class="xm">小米官方旗舰店</text>
						<text class="xm1">1.2km|小米|徐州|1234月销量</text>
					</view>
					<button class="jd" >进店</button>
				</view>
				<view style="display: flex;flex-direction: row;">
					<image class="tup" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
					<image class="tup1" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
					<image class="tup1" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
				</view>
				<view style="background-color: #F5F5F5;height: 5rpx;"></view>
				<view style="display: flex;flex-direction: row;">
					<image class="tx" src="../../static/dpshoucang/img-49-tx.png" mode=""></image>
					<view style="display: flex;flex-direction: column;">
						<text class="xm">小米官方旗舰店</text>
						<text class="xm1">1.2km|小米|徐州|1234月销量</text>
					</view>
					<button class="jd" >进店</button>
				</view>
				<view style="display: flex;flex-direction: row;">
					<image class="tup" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
					<image class="tup1" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
					<image class="tup1" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
				</view>
				<view style="background-color: #F5F5F5;height: 5rpx;"></view>
				<view style="display: flex;flex-direction: row;">
					<image class="tx" src="../../static/dpshoucang/img-49-tx.png" mode=""></image>
					<view style="display: flex;flex-direction: column;">
						<text class="xm">小米官方旗舰店</text>
						<text class="xm1">1.2km|小米|徐州|1234月销量</text>
					</view>
					<button class="jd" >进店</button>
				</view>
				<view style="display: flex;flex-direction: row;">
					<image class="tup" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
					<image class="tup1" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
					<image class="tup1" src="../../static/dpshoucang/img-49-sp.png" mode=""></image>
				</view>
				</view>
					</view>
					</view>
			</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.beijing1 {
	width: 750rpx;
	height: 425rpx;
	background-size: cover;
}
.heng {
	display: flex;
	flex-direction: row;
}
.mi {
	height: 63rpx;
	width: 63rpx;
	margin-left: 21rpx;
	margin-top: 48rpx;
}
.sousuo {
	height: 62rpx;
	width: 542rpx;
	margin-left: 20rpx;
	margin-top: 48rpx;
	background-color: #ffffff;
	border-radius: 30rpx;
}
.fangdajing {
	width: 28rpx;
	height: 28rpx;
	margin-left: 28rpx;
	margin-top: 17rpx;
}
.shuru {
	font-size: 21rpx;
	margin-top: 18rpx;
	margin-left: 30rpx;
}
.xinxi {
	height: 35rpx;
	width: 40rpx;
	margin-top: 65rpx;
	margin-left: 22rpx;
}
.beijing2{
	position: absolute;
	margin-top: -250rpx;
	height: 1200rpx;
	width: 750rpx;
	background-size: 100% 100%;
}
.tj{
	font-size: 23rpx;
	line-height: 57rpx;
	margin-left: 60rpx;
	color: #FFFFFF;
	margin-right: 55rpx;
}
.sp{
	font-size: 30rpx;
}
.chufang{
	height: 220rpx;
	width: 710rpx;
	margin-left: 20rpx;
}
.zhibo1 {
		height: 40rpx;
		
		margin-left: 10rpx;
		font-size: 15rpx;
		color: #FFFFFF;
		margin-top: 5rpx;
	}
.bf{
	margin-top: 10rpx;
	height: 18rpx;
	width: 15rpx;
	margin-left: 48rpx;
}
	.shipin {
		background-size: 100% 100%;
		height: 500rpx;
		width: 345rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	

	.zi {
		height: 20rpx;
		width: 350rpx;
		display: inline-block;
		margin-top: 430rpx;
		font-size: 22rpx;
		color: #FFFFFF;
	}
	.tx{
		height: 96rpx;
		width: 96rpx;
		margin-top: 18rpx;
		margin-left: 31rpx;
	}
	.xm{
		margin-left: 15rpx;
		margin-top: 25rpx;
		font-size: 28rpx;
	}
	.xm1{
		margin-left: 15rpx;
		margin-top: 30rpx;
		font-size: 20rpx;
		color: #797979;
		
	}
	.jd{
		height: 45rpx;
		width: 120rpx;
		color: red;
		border-style: solid;
		border-color: #f43426 ;
		font-size: 25rpx;
		border-radius: 20rpx;
		margin-top: 45rpx;
		line-height: 35rpx;
		margin-left: 143rpx;
		background-color: #FFFFFF;
	}
	.tup{
		height: 210rpx;
		width : 230rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.tup1{
		height: 210rpx;
		width : 230rpx;
		margin-left: 15rpx;
		margin-top: 20rpx;
	}
</style>
