<template>
	<view style="height: 1200rpx;background-color: #f5f5f5;">
	<view  style="height: 10rpx;"></view>
		<view class="heng baidi">
			<image class="gou" src="../../static/shouhuodizhi/iocn-27-gou.png" mode=""></image>
			<image class="tu" src="../../static/shangcheng/img-85-sp_31.png" mode=""></image>
			<view>
				<view class="zhedie">Snoppa折叠手机三轴稳定器</view>
				<view class="ziwaixian">紫外线光精准诱蚊，紫外线光精准诱蚊...</view>
				<view class="qian">￥128</view>
				<view class="heng">
					<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode=""></image>
					<view class="moumou">某某店铺</view>
				</view>
			</view>
		</view>
		<button class="queding" type="primary">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.baidi{
	height: 200rpx;
	widows: 710rpx;
	margin-left: 20rpx;
	background-color: #FFFFFF;
	margin-right:20rpx;
}
.heng{
	display: flex;
	flex-direction: row;
}
.gou{
	height: 35rpx;
	width: 35rpx;
	margin-left: 20rpx;
	margin-top: 85rpx;
}
.tu{
	height: 161rpx;
	width: 172rpx;
	margin-left: 20rpx;
	margin-top: 20rpx;
}
.zhedie{
	font-size: 23rpx;
	margin-top: 21rpx;
	margin-left: 12rpx;
}
.ziwaixian{
	font-size: 20rpx;
	margin-top: 21rpx;
	margin-left: 12rpx;
	color: #adadad;
}
.qian{
	color:#FF0D2E;
	font-size: 25rpx;
	margin-top: 24rpx;
	margin-left: 12rpx;
}
.dp{
	margin-left: 12rpx;
	height: 20rpx;
	width: 18rpx;
	margin-top: 21rpx;
}
.moumou{
	font-size: 20rpx;
	margin-top: 18rpx;
	margin-left: 12rpx;
	color: #494949;
}
.queding{
	height: 74rpx;
	width: 600rpx;
	border-radius: 40rpx;
	line-height: 74rpx;
	background-color:#f14724 ;
	margin-top: 138rpx;
	font-size: 38rpx;
}
</style>
