<template>
	<view>

		<view class="beijing">
			<view class="tui" :style="{ backgroundImage: 'url(' + '/static/dingdan/bg-29.png' + ')' }">
				<view class="tui1">已完成</view>
				<view class="top">
					<view class="beijing2">
						<image class="dingwei" src="../../static/dingdan/iocn-28-dw.png" mode=""></image>
						<view class="dingwei3">
							<view class="dingwei1">
								<view class="ergou1">{{detail.express_name}}</view>
								<view class="phone1">{{detail.express_phone}}</view>
							</view>
							<view class="dingwei2">
								{{detail.express_province}}{{detail.express_city}}{{detail.express_area}}{{detail.express_address}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="detail">
			<view class="top_detail">
				<view class="dian">
					<image class="tu" src="../../static/dingdan/iocn-29-dp.png" mode=""></image>
					<text class="ergou">{{detail.business_name}}</text>
				</view>
				<view class="shangpin" v-for="(item,index) in arr" :key="index">
					<image class="biao" :src="item.goods_logo" mode=""></image>
					<view class="xiangqing">
						<view class="biaozi">{{item.goods_title}}</view>
						<view class="biaozi2">{{item.goods_spec}}</view>
						<view class="biaozi3">￥{{item.price_real}}</view>
					</view>
					<view class="biaozi1">X{{item.number_goods}}</view>
				</view>
			</view>
			<view class="xinxi">
				<view class="xinxi_title">
					<view class="xinxi1"></view>
					<view class="xinxi2">订单信息</view>
				</view>
				<view class="dingdan">
					<view class="xinxi3">订单编号:</view>
					<view>{{detail.order_no}}</view>
				</view>
				<view class="dingdan" style="margin-top: 29rpx;">
					<view class="xinxi3">订单时间:</view>
					<view>{{detail.create_at}}</view>
				</view>
			</view>
			<view class="kefu">
				<view style="display: flex;">
					<image class="kefu1" src="../../static/dingdan/iocn-29-lxkf_61.png" mode=""></image>
					<view class="kefu2">联系客服</view>
				</view>

				<image class="back" src="../../static/back.png" mode=""></image>
			</view>
			<view class="anniu">
				<view class="anniu1" @tap="chakanwuliu()">查看物流</view>
				<view class="anniu2" @tap="again()">再来一单</view>
			</view>
			<view class="xian2"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				business_order_no: '',
				detail: '',
				arr: [],
				refund_reason: ''

			}
		},
		onLoad(options) {
			this.business_order_no = options.business_order_no
			this.getDetails()
		},
		methods: {
			getDetails() {
				this.request.orderDetails({
					token: uni.getStorageSync('token'),
					business_order_no: this.business_order_no
				}).then(res => {
					this.detail = res.data
					this.arr = res.data.goods_list
				})
			},
			again(business_order_no) {
				this.request.orderAgent({
					token: uni.getStorageSync('token'),
					business_order_no:this.business_order_no
				}).then(res => {
					if(res.code==1){
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						uni.navigateTo({
							url: '../gouwuche/gouwuche'
						})
					}else{
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					
				})
			},
			chakanwuliu() {
				uni.navigateTo({
					url: '../chakanwuliu/chakanwuliu?business_order_no=' + this.business_order_no
				})
			}
		}
	}
</script>

<style>
	.logo {
		transform: rotate(180deg);
		height: 30rpx;
		width: 20rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: auto;

	}

	.top_detail {
		background: #fff;
		padding: 32rpx 40rpx 28rpx 40rpx;
		border-top: 9rpx solid #eee;
	}

	.anniu {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin-bottom: 32rpx;
		background: #fff;
		border-top: 1px solid #eee;
		height: 108rpx;
	}

	.xian2 {
		height: 270rpx;
		background-color: #f5f5f5;
	}

	.anniu1 {
		font-size: 24rpx;
		border-radius: 25px;
		color: #949494;
		height: 50rpx;
		text-align: center;
		width: 160rpx;
		background-color: #fff;
		line-height: 50rpx;
		border: 1px solid #eee;
		/* margin-left: 40%; */
	}

	.xian {
		height: 8rpx;
		background-color: #f5f5f5;
		margin-top: 25rpx;
	}

	.detail {
		position: relative;
		top: 97rpx;
	}

	.xian1 {
		height: 3rpx;
		background-color: #f5f5f5;
		margin-top: 25rpx;
	}

	.reason {
		width: 100%;
		height: 170rpx;
		background: #fff;
		padding: 25rpx 0 0 21rpx;
		border-top: 1px solid #eee;

	}

	.reason textarea {
		font-size: 24rpx;
		color: #949494;
	}

	.dingdan {
		display: flex;
		align-items: center;
		margin-top: 30rpx;
		font-size: 18rpx;
		color: #949494;
	}

	.anniu2 {
		font-size: 23rpx;
		border-radius: 25px;
		color: #fff;
		height: 50rpx;
		width: 160rpx;
		text-align: center;
		background-color: #f1301f;
		line-height: 50rpx;
		margin-left: 32rpx;
		margin-right: 21rpx;
	}

	.dingwei {
		width: 57rpx;
		height: 57rpx;
		margin-right: 34rpx;
		margin-left: 31rpx;
	}

	.top {
		position: relative;
		top: 38rpx;
	}

	.tui {
		width: 100%;
		height: 166rpx;
	}

	.xinxi {
		margin-top: 18rpx;
		background: #fff;
		width: 100%;
		padding: 30rpx 20rpx;
	}

	.xinxi_title {
		display: flex;
		align-items: center;
	}

	.kefu {
		display: flex;
		flex-direction: row;
		background: #fff;
		height: 66rpx;
		border-top: 1px solid #eee;
		align-items: center;
		justify-content: space-between;
	}

	.kefu1 {
		height: 28rpx;
		width: 34rpx;
		margin-left: 21rpx;
		margin-right: 20rpx;
	}

	.kefu2 {
		font-size: 24rpx;
		color: #000000;
	}

	.back {
		transform: rotate(180deg);
		height: 27rpx;
		width: 15rpx;
		margin-right: 21rpx;
	}

	.xinxi3 {
		margin-left: 35rpx;
		margin-right: 70rpx;

	}

	.bianhao {
		margin-top: 28rpx;
		display: flex;
		flex-direction: row;
	}

	.xinxi1 {
		height: 26rpx;
		width: 4rpx;
		margin-left: 20rpx;
		background-color: red;
	}

	.xinxi2 {
		font-size: 28rpx;
		margin-left: 12rpx;
	}

	.beijing2 {
		display: flex;
		flex-direction: row;
		width: 94%;
		height: 140rpx;
		margin: auto;
		align-items: center;
		background-color: #fff;
		border-radius: 5rpx;
	}

	.dingwei2 {
		font-size: 22rpx;
	}

	.dingwei1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-bottom: 28rpx;
	}

	.dingwei3 {
		display: flex;
		flex-direction: column;
	}

	.tui1 {

		margin-left: 19rpx;
		font-size: 32rpx;
		padding-top: 35rpx;
		color: #F8F8F8;
	}

	.bianji {
		height: 80rpx;
		margin-left: 275rpx;
		margin-right: auto;
		margin-bottom: 10rpx;
	}

	.dian {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.zi {


		font-size: 20rpx;
		margin-left: 30rpx;
		margin-right: auto;
	}

	.biaozi {
		font-size: 24rpx;
		width: 324rpx;
		height: 49rpx;

	}

	.biaozi1 {
		font-size: 23rpx;
		display: flex;
		align-items: center;
		margin-right: 10rpx;
		margin-left: auto;
	}

	.biaozi2 {
		font-size: 26rpx;
		color: #797979;
		padding-top: 34rpx;

	}

	.biaozi3 {
		font-size: 28rpx;
		color: red;
		padding-top: 35rpx;
	}

	.xiangqing {
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		width: 60%;
		padding-right: 10rpx;
	}

	.zi1 {
		display: flex;
		flex-direction: row;
		margin-top: 10rpx;
	}

	.tu {
		height: 23rpx;
		width: 23rpx;
	}

	.beijing {
		width: 100%;
	}

	.ergou {
		font-size: 18rpx;
		margin-left: 20rpx;
		color: #949494;
	}

	.ergou1 {
		font-size: 26rpx;
		margin-right: 30rpx;
	}

	.phone1 {
		font-size: 22rpx;
		color: #949494;
	}

	.shangpin {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 193rpx;
		margin-top: 20rpx;
	}

	.biao {
		width: 193rpx;
		height: 193rpx;
	}
</style>
