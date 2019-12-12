<template>
	<view>
		<view class="beijing">
			<view class="zi">致力为您提供专业，高效，高品质的服务欢迎您提供宝贵的意见和建议</view>
			<view class="fankui">
				反馈类型
			</view>
			<view class="heng">

				<view class="kuang" v-for="( item,index) in pj" :key="index">{{item.name}}</view>
			</view>
		</view>
		<view class="middle">
			<textarea class="yijian" type="text" placeholder="说说您的意见吧!" value=""></textarea>
			<image class="zhaopian" src="../../static/fabu/img_12-tianjia.png" mode=""></image>
		</view>
		<view class="beijing2">
			<button class="tijiao" type="primary">提交</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				pj: [{
						name: '服务态度'
					},
					{
						name: '物流速度'
					},
					{
						name: '付款流程'
					},
					{
						name: '发货售后'
					},
					{
						name: '功能问题'
					},
					{
						name: '其他'
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.beijing {
		width: 100%;
	}

	.beijing2 {
		background-color: #eeeeee;
		height: 455rpx;
		width: 90%;
		margin: auto;
		margin-top: 10%;
	}

	.heng {
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20rpx 10rpx 20rpx 40rpx;
		justify-content: flex-start;
	}

	.middle {
		background: #fff;
		padding: 30rpx;
	}

	.zi {
		font-size: 27rpx;
		text-align: center;
		width: 80%;
		margin: auto;
		padding: 30rpx 0;
		color: #818181;
	}

	.fankui {
		margin-top: 18rpx;
		font-size: 30rpx;
		margin-left: 28rpx;
		border-bottom: 1px solid #CCCCCC;
		padding-bottom: 20rpx;
	}

	.kuang {
		margin-top: 20rpx;
		height: 50rpx;
		width: 153rpx;
		border: 1px solid #D9D9D9;
		border-radius: 30rpx;
		font-size: 22rpx;
		line-height: 50rpx;
		color: #7e7e7e;
		text-align: center;
		margin-left: 40rpx;
	}

	.zhaopian {
		height: 145rpx;
		width: 145rpx;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
	}

	.yijian {
		width: 100%;
		color: #666666;
		font-size: 30rpx;
		padding-bottom: 30rpx;
	}

	.tijiao {
		background-color: #f13821;
		height: 81rpx;
		width:100%;
		border-radius: 40rpx;
		font-size: 30rpx;
	}
</style>
