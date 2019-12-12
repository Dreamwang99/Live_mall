<template>
	<view class="beijing">
		<view class="xian"></view>
		<view class="baidi heng">
			<image class="gou" :src="show ? '../../static/center/iocn-20-yuan.png':'../../static/center/iocn-gou.png'" mode="" @click="xuanze"></image>
			<image class="tu" src="../../static/gouwuche/img-22-sp.png" mode="aspectFit"></image>
		<view >
			<view class="zi1">Snoppa折叠手机三轴稳定器 黑色</view>
			<view class="zi2">紫外线光精准诱蚊，高灭杀杀毒...</view>
			<view class="rmb">￥128</view>
			<view class="heng">
				<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode="aspectFit"></image>
			<view class="dpzi">{{dianpuming}}</view>
			</view>
		</view>
		</view>
		<view class="xian"></view>
		<view class="baidi heng">
			<image class="gou" :src="show ? '../../static/center/iocn-20-yuan.png':'../../static/center/iocn-gou.png'" mode="" @click="xuanze"></image>
			<image class="tu" src="../../static/gouwuche/img-22-sp.png" mode="aspectFit"></image>
		<view >
			<view class="zi1">Snoppa折叠手机三轴稳定器 黑色</view>
			<view class="zi2">紫外线光精准诱蚊，高灭杀杀毒...</view>
			<view class="rmb">￥128</view>
			<view class="heng">
				<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode="aspectFit"></image>
			<view class="dpzi">{{dianpuming}}</view>
			</view>
		</view>
		</view>
		<view class="queding">确定</view>
		<view class="xian"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				dianpuming:'某某店铺'
			}
		},
		methods: {
			xuanze(){
				this.show=!this.show
			},
		}
	}
</script>

<style>
.beijing{
	background-color: #F5F5F5;
}
.xian{
	height: 10rpx;
}
.rmb{
	color: red;
	margin-top: 24rpx;
	margin-left:11rpx ;
	font-size: 25rpx;
}
.baidi{
	background-color: #FFFFFF;
	height: 200rpx;
	width: 710rpx;
	margin-left: 20rpx;
	
}
.zi1{
	margin-top: 20rpx;
	font-size:25rpx;
	margin-left: 11rpx;
}
.zi2{
	margin-top: 20rpx;
	font-size: 18rpx;
	margin-left: 11rpx;
	color: #949494;
}
.heng{
	display: flex;
	flex-direction: row;
}
.gou{
	height: 33rpx;
	width: 33rpx;
	margin-top: 82rpx;
	margin-left: 22rpx;
}
.tu{
	height: 163rpx;
	width: 175rpx;
	margin-left: 20rpx;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
}
.dp{
	height: 20rpx;
	width: 20rpx;
	margin-top: 20rpx;
	margin-left: 27rpx;
}
.dpzi{
	font-size: 18rpx;
	margin-left: 16rpx;
	margin-top:18rpx;
}
.queding{
	margin-top: 142rpx;
	margin-bottom: 140rpx;
	height: 74rpx;
	width: 602rpx;
	border-radius: 40rpx;
	color: #FFFFFF;
	background-color:#f13720 ;
	line-height: 74rpx;
	text-align: center;
	margin-left:77rpx ;
}
</style>
