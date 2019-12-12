<template>
	<view>
		<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/jifen/bg-43-top.png' + ')' }">
			<view class="xian1">
				<view class="fen1">{{coin}}</view>
				<view class="fen2">余额</view>
				<view class="flex_ti" @click="money()">
					<view style="display: flex;">
						<image class="purse" src="../../static/jifen/icon_qb.png" mode="aspectFit"></image>
						<view class="withdraw">提现</view>
					</view>
					<image class="enter" src="/static/center/iocn-jinru.png" mode=""></image>
				</view>
			</view>
		</view>
		<uni-popup ref="kanjia" :show="kanjia" type="center" :mask-click="true" :custom="true">
			<view class="kanjia">
				<view class="flex_row">
					<view class="order">提现</view>
					<image @click="close" class="cancel" src="../../static/mysell/icon_cha.png" mode=""></image>
				</view>
				<view class="flex_row">
					<view class="form">¥</view>
					<input class="fill_in" type="number" value="" placeholder="请输入提现金额" placeholder-class="number" v-model="sum" />
				</view>
				<view style="height: 1rpx; background-color: #C4C4C4;"></view>
				<view class="confirm" @click="withdraw_money()">立即提现</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				kanjia: false,
				sum: '',
				type: '',
				show: false,
				//余额
				coin: null,
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '../jfgz/jfgz'
			})
		},
		onLoad() {
			this.getcoin()
		},
		methods: {
			getcoin(){
				this.request.GetCoin({
					uid: uni.getStorageSync('id'),
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res.data.info[0].coin)
					this.coin = res.data.info[0].coin
				})
			},
			money() {
				this.$refs.kanjia.open()
			},
			close() {
				this.$refs.kanjia.close()
			},
			withdraw_money() {
				this.$refs.kanjia.close()
				uni.navigateTo({
					url: '../bankcard/bankcard?sum=' + this.sum
				})
			}
		}
	}
</script>

<style>
	.flex_row {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;
		margin: 62rpx 26rpx 0 26rpx;
	}
	.flex_ti {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		margin: 62rpx 0 0 0;
	}
	.kanjia {
		height: 353rpx;
		width: 558rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
	}

	.order {
		font-size: 34rpx;
		line-height: 91rpx;
		margin-left: 45%;
	}

	.cancel {
		height: 22rpx;
		width: 22rpx;
		margin: 30rpx 30rpx auto auto;
	}

	.beijing {
		background-size: 100% 100%;
		height: 570rpx;
		width: 100%;
	}

	.enter {
		height: 25rpx;
		width: 13rpx;
		margin-right: 20rpx;
	}

	.fen1 {
		color: #FFFFFF;
		font-size: 50rpx;

		text-align: center;
	}

	.xian1 {
		position: relative;
		top: 30%;
	}

	.fen2 {
		color: #fff;
		font-size: 24rpx;
		margin-top: 33rpx;
		text-align: center;
		margin-bottom: 70rpx;
	}

	.purse {
		height: 41rpx;
		width: 48rpx;
		margin: 20rpx;
	}

	.withdraw {
		font-size: 30rpx;
		line-height: 82rpx;
	}

	.form {
		font-size: 40rpx;
		font-weight: 400;
		padding-right: 39rpx;
	}

	.fill_in {
	}

	.number {
		font-size: 30rpx;
		color: #C4C4C4;
	}

	.confirm {
		margin: 59rpx auto auto auto;
		line-height: 68rpx;
		text-align: center;
		background-color: #f1301f;
		color: #fff;
		width: 305rpx;
		height: 68rpx;
		font-size: 26rpx;
		border-radius: 8px;
	}
</style>
