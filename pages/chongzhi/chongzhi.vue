<template>
	<view>
		<!-- 导航头 -->
		<view class="topNav">
			<view class="t-left" @tap="navBack()">
				<image src="../../static/back.png" mode=""></image>
			</view>
			<view class="t-main">
				充值
			</view>
			<view class="t-right"></view>
		</view>
		<view class="space_nav"></view>
		<view style="height: 10rpx;background-color: #F5F5F5;"></view>
		<view class="xuanze">选择数量</view>
		<view class="heng">
			<view class="kuang" :class="[current === i_idx ? 'ac' : '']" v-for="(i,i_idx) in list" :key="i_idx" @tap="chose(i_idx,i)">
				<view class="heng">
					<view class="shu">{{i.coin}}</view>
					<image class="zs" src="../../static/zhibo/iocn-105-zs.png" mode=""></image>
				</view>
				<view class="yuan">{{i.money}}元</view>
			</view>
		</view>
		<view style="height: 10rpx;background-color: #F5F5F5;"></view>
		<view class="xuanze">支付方式</view>
		<view class="heng" v-for="(p,p_idx) in payWays" :key="p_idx">
			<image class="zfb" :src="p.icon" mode=""></image>
			<view class="zi">{{p.name}}</view>
			<image class="gou" @tap="chosePay(p_idx)" :src="p.isChose ? '../../static/shouhuodizhi/iocn-27-gou.png' : '../../static/zhibo/iocn-105-wx2.png'"
			 mode=""></image>
		</view>
		<!-- <view class="heng">
			<image class="wx" src="../../static/zhibo/iocn-105-wx.png" mode=""></image>
			<view class="zi">微信</view>
			
		</view> -->
		<view style="height: 264rpx;background-color: #F5F5F5;"></view>
		<view style="height: 555rpx;background-color: #F5F5F5;">
			<button class="queren" @tap="sure()" type="primary">确认</button>
		</view>
	</view>
</template>

<script>
	import bridge from '@/common/unfile/unfile.js';
	export default {
		data() {
			return {
				list: [],
				current: 0,
				payWays: [{
						icon: '../../static/zhibo/iocn-105-zfb.png',
						name: '支付宝',
						isChose: true
					},
					{
						icon: '../../static/zhibo/iocn-105-wx.png',
						name: '微信',
						isChose: false
					}
				],
				payTypes: "支付宝",
				buyTypes: ""
			};
		},
		onLoad() {
			this.getList();
		},
		methods: {
			navBack(){
				console.log('back')
				bridge.call('navBack', "页面返回");
				return true;
			},
			getList() {
				this.request.getBalance({
					uid: uni.getStorageSync('id'),
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res);
					if (res.data.code === 0) {
						this.list = res.data.info[0].rules
					}
				})
			},
			sure() {
				console.log(this.payTypes);
				if (this.payTypes === "支付宝") {
					this.request.rechargeJiFenOrder({
						uid: uni.getStorageSync('id'),
						changeid: this.buyTypes.id,
						coin: this.buyTypes.coin,
						money: this.buyTypes.money
					}).then(res => {
						console.log(res);
						if (res.data.code === 0) {
							// 支付宝
							bridge.call('alipay', res.data.info[0].orderid)
							bridge.register('alipaycallback', function(result) {
								console.log(result)
								if (result * 1 === 0) {
									uni.showToast({
										title: '支付失败',
										icon: 'none'
									})
								} else if (result * 1 === 1) {
									uni.showToast({
										title: '支付成功',
										icon: 'none'
									})
									setTimeout(function() {
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									}, 1500)
								}
							})
						}
					})
				} else {
					this.request.getWxOrder({
						uid: uni.getStorageSync('id'),
						changeid: this.buyTypes.id,
						coin: this.buyTypes.coin,
						money: this.buyTypes.money
					}).then(res => {
						console.log(res);
						if (res.data.code === 0) {
							// 支付宝
							bridge.call('wxpay', res.data.info[0])
							bridge.register('wxpaycallback', function(result) {
								console.log(result)
								if (result * 1 === 0) {
									uni.showToast({
										title: '支付失败',
										icon: 'none'
									})
								} else if (result * 1 === 1) {
									uni.showToast({
										title: '支付成功',
										icon: 'none'
									})
									setTimeout(function() {
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									}, 1500)
								}
							})
						}
					})
				}
			},
			chose(idx, info) {
				this.current = idx
				this.buyTypes = info
			},
			chosePay(idx) {
				this.payWays.forEach((i, i_idx) => {
					if (i_idx === idx) {
						i.isChose = true
						this.payTypes = i.name
					} else {
						i.isChose = false
					}
				})
			}
		}
	};
</script>

<style lang="scss">
	.topNav {
		width: 100%;
		height: 120rpx;
		background-color: #FFFFFF;
		display: flex;
		padding-top: 10rpx;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 9999;

		.t-left {
			width: 10%;
			height: 30rpx;
			margin-top: 10rpx;
			text-align: center;
			z-index: 999;
			image {
				width: 20rpx;
				height: 30rpx;
			}
		}

		.t-main {
			height: 30rpx;
			font-size: 35rpx;
			text-align: center;
			line-height: 40rpx;
		}

		.t-right {
			width: 10%;
		}
	}

	.space_nav {
		height: 130rpx;
	}

	.xuanze {
		font-size: 23rpx;
		margin-top: 23rpx;
		margin-left: 40rpx;
		color: #d5d5d5;
	}

	.heng {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.kuang {
		min-height: 102rpx;
		width: 162rpx;
		border: solid;
		border-color: #d5d5d5;
		margin-left: 40rpx;
		margin-top: 22rpx;
		margin-bottom: 25rpx;
	}

	.ac {
		border-color: #ff212c;
	}

	.zs {
		height: 20rpx;
		width: 15rpx;
		margin-left: 10rpx;
		margin-top: 26rpx;
	}

	.shu {
		margin-left: 39rpx;
		margin-top: 21rpx;
		font-size: 18rpx;
	}

	.yuan {
		margin-left: 56rpx;
		margin-top: 18rpx;
		font-size: 18rpx;
		color: #d5d5d5;
	}

	.zfb {
		height: 32rpx;
		width: 32rpx;
		margin-top: 30rpx;
		margin-left: 35rpx;
	}

	.wx {
		height: 27rpx;
		width: 30rpx;
		margin-top: 28rpx;
		margin-left: 35rpx;
		margin-bottom: 40rpx;
	}

	.zi {
		font-size: 23rpx;
		margin-top: 32rpx;
		margin-left: 10rpx;

		color: #494949;
	}

	.gou {
		height: 30rpx;
		width: 30rpx;
		margin-top: 35rpx;
		margin-left: auto;
		margin-right: 45rpx;
	}

	.queren {
		background-color: #f13720;
		height: 75rpx;
		width: 710rpx;
		font-size: 33rpx;
		border-radius: 40rpx;
	}
</style>
