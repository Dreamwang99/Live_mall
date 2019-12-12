<template>
	<view class="beijing">
		<view class="wuliu">
			<image class="feiji" src="/static/wuliu/logo.png" mode="aspectFit"></image>
			<view style="width: 85%;">
				<view class="heng">
					<view class="gongsi">物流公司：</view>
					<view class="kuaidi">{{detail.express_company_title}}</view>
				</view>
				<view class="heng2">
					<view class="heng">
						<view class="danhao">物流单号：</view>
						<view class="hao">{{detail.express_send_no}}</view>
					</view>
					<view class="fuzhi">复制</view>
				</view>
			</view>
		</view>
		<view class="baidi">
			<view class="example-body">
				<uni-steps :options="detail.logistics" direction="column" />
			</view>

		</view>
	</view>
</template>
<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				business_order_no:'',
				detail:[]
			}
		},
		onLoad(options) {
			this.business_order_no=options.business_order_no
			this.getDetails()
		},
		methods: {
			getDetails() {
				this.request.orderLogistics({
					token: uni.getStorageSync('token'),
					business_order_no: this.business_order_no
				}).then(res => {
					console.log(res)
					this.detail = res.data
				})
			},
		}
	}
</script>

<style>
	.beijing {
		background-color: #F5F5F5;
		width: 100%;
		height: 1200rpx;
	}

	.heng2 {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.heng {
		display: flex;
		flex-direction: row;
		font-size:30rpx;
	}

	.baidi {
		width: 100%;
		background-color: #FFFFFF;
	}

	.wuliu {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 30rpx;
		/* height: 145rpx; */
		background-color: #FFFFFF;
		border-bottom: 10rpx solid #eee;
		border-top: 10rpx solid #eee;
	}

	.xian {
		height: 13rpx;
	}

	.feiji {
		height: 110rpx;
		width: 110rpx;
		margin-top: 15rpx;
		margin-left: 29rpx;
	}

	.gongsi {
		margin-left: 20rpx;
		margin-top: 18rpx;
		color: #999999;
	}

	.danhao {
		margin-left: 20rpx;
		margin-top: 32rpx;
		color: #999999;
	}

	.hao {
		margin-top: 32rpx;
		color: #494949;
	}

	.kuaidi {
		margin-top: 18rpx;
		color: #494949;
	}

	.fuzhi {
		height: 52rpx;
		width: 105rpx;
		border-radius: 20rpx;
		font-size: 24rpx;
		margin-top: 15rpx;
		background-color: #f0f0f0;
		text-align: center;
		line-height: 52rpx;
		color: #494949;
	}

	.yuan {
		height: 12rpx;
		width: 12rpx;
		margin-top: 56rpx;
		margin-left: 40rpx;
		background-color: #ff212c;
		border-radius: 50%;
	}

	.shu {
		height: 143rpx;
		width: 2rpx;
		background-color: #ff212c;
		margin-left: 45rpx;
	}

	.yizhan {
		font-size: 23rpx;
		color: #FF212C;
		margin-top: 50rpx;
		margin-left: 18rpx;
		margin-right: 40rpx;
	}

	.shijian {
		font-size: 12rpx;
		color: #FF212C;
		margin-left: 18rpx;
		margin-top: 23rpx;
	}

	.yuan1 {
		height: 12rpx;
		width: 12rpx;
		margin-left: 40rpx;
		background-color: #999999;
		border-radius: 50%;
	}

	.shu1 {
		height: 143rpx;
		width: 2rpx;
		background-color: #999999;
		margin-left: 45rpx;
	}

	.yizhan1 {
		font-size: 23rpx;
		color: #999999;
		margin-left: 18rpx;
		margin-right: 40rpx;
	}

	.shijian1 {
		font-size: 12rpx;
		color: #999999;
		margin-left: 18rpx;
		margin-top: 23rpx;
	}
</style>
