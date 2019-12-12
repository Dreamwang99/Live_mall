<template>
	<view>
		<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/gerenzhongxin/bg-61-dingfu.png' + ')' }">
			<view class="heng">
				<image class="tx" src="../../static/dsp/iocn-14-tx.png" mode=""></image>
				<button class="guanzhu" type="primary">取消关注</button>
			</view>
			<view class="tiezhu">铁柱</view>
			<view class="heng">
				<view class="id">ID:123456789</view>
				<view class="fensi">2粉丝</view>
				<view class="fensi" style="margin-left: 35rpx;">|</view>
				<view class="fensi" style="margin-left: 35rpx;">0关注</view>
			</view>
		</view>
		<view class="heng">
			<view class="shipin">视频</view>
			<view class="shipin" style="color: #ff212c;">直播</view>
		</view>
		<view class="hongxian"></view>
	
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
.beijing {
	height: 380rpx;
	background-size: 100% 100%;
}
.heng {
	display: flex;
	flex-direction: row;
}
.tx {
	height: 112rpx;
	width: 112rpx;
	margin-left: 70rpx;
	margin-top: 162rpx;
}
.guanzhu {
	margin-top: 190rpx;
	height: 55rpx;
	font-size: 27rpx;
	line-height: 55rpx;
	text-align: center;
	width: 370rpx;
	background-color: #a5a5a5;
	border-radius: 40rpx;
}
.tiezhu {
	font-size: 26rpx;
	line-height: 53rpx;
	margin-left: 100rpx;
	color: #ffffff;
}
.id {
	margin-left: 100rpx;
	color: #ffffff;
	font-size: 17rpx;
	margin-top: 3rpx;
}
.fensi {
	margin-left: 130rpx;
	color: #ffffff;
	font-size: 25rpx;
}
.shipin {
	font-size: 28rpx;
	line-height: 50rpx;
	color: black;
	margin-left: 206rpx;
}
.hongxian {
	height: 4rpx;
	width: 75rpx;
	margin-left: 460rpx;
	background-color: #ff212c;
}
.tu {
	height: 345rpx;
	width: 240rpx;
	margin-left: 8rpx;
	margin-top: 12rpx;
	background-size: 100% 100%;
}
.xiaohei {
	margin-top: 280rpx;
	font-size: 17rpx;
	color: #ffffff;
	margin-left: 6rpx;
}
.paimeishi {
	margin-top: 8rpx;
	font-size: 12rpx;
	color: #ffffff;
	margin-left: 6rpx;
}
.bf {
	height: 15rpx;
	width: 12rpx;
	margin-top: 10rpx;
	margin-left: 30rpx;
}
.shu2 {
	margin-top: 5rpx;
	font-size: 12rpx;
	color: #ffffff;
	margin-left: 12rpx;
}
</style>
