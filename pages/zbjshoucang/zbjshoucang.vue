<template>
	<view>
		<view class="dingbu">
			<view style="display: flex;flex-direction: row;">
				<text class="zi">短视频收藏</text>
				<text class="zi1">直播间收藏</text>
				<text class="zi2">商品收藏</text>
				<text class="zi3">店铺收藏</text>
			</view>
			<view class="hxian"></view>
			<view style="display: flex;flex-direction: row;">
				<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/dpshoucang/img-46-sp.png' + ')' }">
					<view style="display: flex;flex-direction:column;">
						<view style="height: 423rpx;"></view>
						<view class="xh">@小黑粉</view>
						<view style="display: flex;flex-direction: row;">
							<text class="xh1">给大家拍个视频来看看!</text>
							<image class="xh2" src="/static/dpshoucang/iocn-47-rs.png" mode=""></image>
							<text class="xh3">123</text>
						</view>
					</view>

				</view>
				<view class="beijing1" :style="{ backgroundImage: 'url(' + '/static/dpshoucang/img-46-sp.png' + ')' }">
					<view style="display: flex;flex-direction:column;">
						<view style="height: 423rpx;"></view>
						<view class="xh">@小黑粉</view>
						<view style="display: flex;flex-direction: row;">
							<text class="xh1">给大家拍个视频来看看!</text>
							<image class="xh2" src="/static/dpshoucang/iocn-47-rs.png" mode=""></image>
							<text class="xh3">123</text>
						</view>
					</view>

				</view>
			</view>
			<view style="height: 12rpx;"></view>
<view style="display: flex;flex-direction: row;">
				<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/dpshoucang/img-46-sp.png' + ')' }">
					<view style="display: flex;flex-direction:column;">
						<view style="height: 423rpx;"></view>
						<view class="xh">@小黑粉</view>
						<view style="display: flex;flex-direction: row;">
							<text class="xh1">给大家拍个视频来看看!</text>
							<image class="xh2" src="/static/dpshoucang/iocn-47-rs.png" mode=""></image>
							<text class="xh3">123</text>
						</view>
					</view>

				</view>
				<view class="beijing1" :style="{ backgroundImage: 'url(' + '/static/dpshoucang/img-46-sp.png' + ')' }">
					<view style="display: flex;flex-direction:column;">
						<view style="height: 423rpx;"></view>
						<view class="xh">@小黑粉</view>
						<view style="display: flex;flex-direction: row;">
							<text class="xh1">给大家拍个视频来看看!</text>
							<image class="xh2" src="/static/dpshoucang/iocn-47-rs.png" mode=""></image>
							<text class="xh3">123</text>
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
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.dingbu {

		background-color: #F5F5F5;
		height: 1300rpx;
	}

	.zi {
		font-size: 25rpx;
		margin-top: 32rpx;
		margin-left: 40rpx;
		margin-right: 15rpx;
	}

	.zi1 {
		font-size: 25rpx;
		margin-top: 32rpx;
		margin-left: 40rpx;
		margin-right: 15rpx;
		color: red;
	}

	.zi2 {
		font-size: 25rpx;
		margin-top: 32rpx;
		margin-left: 45rpx;
		margin-right: 15rpx;
	}

	.zi3 {
		font-size: 25rpx;
		margin-top: 32rpx;
		margin-left: 65rpx;

	}

	.hxian {
		height: 4rpx;
		background-color: red;
		width: 150rpx;
		margin-left: 205rpx;
		margin-top: 18rpx;
		margin-bottom: 12rpx;

	}

	.beijing {
		height: 500rpx;
		width: 350rpx;
		margin-left: 20rpx;
		background-size: 100% 100%;
		margin-right: 12rpx;
	}
.beijing1 {
		height: 500rpx;
		width: 350rpx;
		
		background-size: 100% 100%;
		
	}

	.xh {
		margin-left: 12rpx;
		font-size: 22rpx;
		color: #FFFFFF;

	}

	.xh1 {
		margin-left: 12rpx;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.xh2 {
		margin-left: 20rpx;
		margin-top: 8rpx;
		height: 18rpx;
		width: 18rpx;
	}

	.xh3 {
		font-size: 20rpx;
		color: #FFFFFF;
	}
</style>
