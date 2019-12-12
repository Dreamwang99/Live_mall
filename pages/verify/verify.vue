<template>
	<view class="concent">
		<!-- 审核中 -->
		<view v-if="a===0">
			<view class="logo" :style="{ backgroundImage: 'url(' + '/static/verify/bg_shz.png' + ')' }">
				<view class="flex_con">
					<image class="picture" src="../../static/verify/icon_shz.png" mode="aspectFit"></image>
					<view class="success">提交成功，请等待审核!</view>
				</view>
			</view>
		</view>
		<!-- 审核成功-->
		<view v-if="a===1">
			<view class="logo" :style="{ backgroundImage: 'url(' + '/static/verify/bg_shcg.png' + ')' }">
				<view class="flex_con">
					<image class="picture" src="../../static/verify/icon_shcg.png" mode="aspectFit"></image>
					<view class="success">恭喜您，审核成功！</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: 0
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #fff !important;
	}
	.concent{
		width: 100%;
		background: #fff;
		position: absolute;
		top: 0;
		bottom: 0;
	}
	.logo {
		height: 850rpx;
		width: 100%;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
	}

	.picture {
		height: 219rpx;
		width: 219rpx;
		display: block;
		margin: auto;
		margin-top: 144rpx;
		margin-bottom:182rpx;
	}

	.success {
		font-size: 36rpx;
		text-align: center;
	}
</style>
