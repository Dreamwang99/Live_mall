<template>
	<view style="width: 100%;">
		<view class="content">
			<view v-for="(item,index) in mySell" :key="index">
				<view class="sells">
					<image :src="item.url" class="image_" mode=""></image>
					<view class="sell_right">
						<view class="titles">{{item.title}}</view>
						<view class="cost">¥{{item.price}}</view>
						<view class="flex_row">
							<image class="iocn" src="../../static/mysell/icon_ddfh.png" mode=""></image>
							<view class="wait">等待买家收货中</view>
						</view>
					</view>
				</view>
				<view class="sell_bottom">
					<view class="contact">联系买家</view>
					<view @click="sell" class="contact delivery">我要发货</view>
				</view>
			</view>
		</view>

		<uni-popup ref="kanjia" :show="kanjia" type="center" :mask-click="true" :custom="true">
			<view class="kanjia">
				<view class="flex_row">
					<view class="order">订单编号</view>
					<image @click="close()" class="cancel" src="../../static/mysell/icon_cha.png" mode=""></image>
				</view>
				<view class="flex_row">
					<image class="form" src="../../static/mysell/icon_ddbh.png" mode=""></image>
					<input class="fill_in" type="text" value="" placeholder="请填写订单编号" placeholder-class="number" />
				</view>
				<view style="height: 1rpx; background-color: #C4C4C4;"></view>
				<view class="confirm">确定</view>
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
				mySell: [{
					url: '../../static/mysell/img_sp.png',
					title: "【小米】新鲜水果特价榨汁机",
					price: "128",
				}, {
					url: '../../static/mysell/img_sp.png',
					title: "【小米】新鲜水果特价榨汁机",
					price: "128",
				}]
			}
		},
		onLoad() {
			this.getUser()
		},
		methods: {
			getUser(){
				this.request.getUserGoods({
					id: uni.getStorageSync('id'),
					token: uni.getStorageSync('token'),
					is_success: 1
				}).then(res => {
					if(res.data.length > 0){
						
					}else{
						uni.showToast({
							title: "您还没有售出商品",
							icon: "none",
						});
					}
				})
			},
			sell() {
				this.$refs.kanjia.open()
			},
			close() {
				this.$refs.kanjia.close()
			},
		}
	}
</script>

<style>
	page {
		background-color: #F5F5F5;
	}

	.content {
		background: #fff;
		width: 96%;
		margin: auto;
	}

	.image_ {
		width: 147rpx;
		height: 143rpx;
	}

	.kanjia {
		height: 350rpx;
		width: 530rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
	}

	.sells {
		width: 100%;
		display: flex;
		padding: 61rpx 31rpx 30rpx 31rpx;
		border-top: 15rpx solid #eee;
	}

	.flex_row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.background {
		background-color: #fff;
		margin: 10rpx 20rpx -5rpx 20rpx;
	}

	.image {
		height: 180rpx;
		width: 25%;
	}

	.sell_right {
		padding-left: 23rpx;
	}

	.iocn {
		height: 25rpx;
		width: 25rpx;
		margin-right: 10rpx;
	}

	.wait {
		font-size: 22rpx;
	}

	.titles {
		font-size: 28rpx;

	}

	.cost {
		line-height: 75rpx;
		font-size: 31rpx;
		color: #ff0d2e;

	}

	.sell_bottom {
		border-top: 1px solid #eee;
		padding: 30rpx 0;
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.contact {
		border-radius: 30rpx;
		border: 1rpx solid #c4c4c4;
		color: #C4C4C4;
		font-size: 24rpx;
		text-align: center;
		line-height: 47rpx;
		width:156rpx;
		height: 47rpx;
		margin-right: 31rpx;
	}

	.delivery {
		background-color: #f13320;
		color: #fff;
		border: 1rpx solid #f13320;
	}

	.order {
		font-size: 32rpx;
		line-height: 91rpx;
		margin-left: 200rpx;
	}

	.cancel {
		height: 22rpx;
		width: 22rpx;
		margin: 30rpx 30rpx auto auto;
	}

	.form {
		height: 40rpx;
		width: 32rpx;
		margin: 30rpx 34rpx 22rpx 25rpx;
	}

	.fill_in {
		margin-top: 30rpx;
	}

	.number {
		font-size: 30rpx;
		color: #C4C4C4;
	}

	.confirm {
		margin: 59rpx auto auto auto;
		line-height: 65rpx;
		text-align: center;
		background-color: #F13620;
		color: #fff;
		width: 300rpx;
		border-radius: 35rpx;
	}
</style>
