<template>
	<view style="width: 100%;">
		<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/shangchenggrzx/bg-50-top.png' + ')' }">
			<view class="heng">
				<view style="display: flex;margin-top: 40rpx;">
					<image class="tx" :src="userinfo.avatar || '../../static/img-50-touxiang.png'" mode="aspectFit"></image>
					<view class="ergou">{{userinfo.user_nicename}}</view>
				</view>
				<image class="shezhi" src="../../static/gerenzhongxin/iocn-50-shezhi.png" @tap="shezhi" mode="aspectFit"></image>
			</view>
			<view class="all">
				<view class="baidi">
					<view class="bottom_title">
						<view class="xian"></view>
						<view class="quan">全部订单</view>
					</view>
					<view style="display: flex;" @tap="tiaozhuan(0)">
						<view class="chakan">查看全部</view>
						<image class="jr" src="../../static/center/iocn-jinru.png" mode="aspectFit"></image>
					</view>

				</view>
				<view class="baidi1">
					<view v-for="(item, index) in list" :key="index" @tap="tiaozhuan(index)" class="dingdan_bottom">
						<view class="hong">
							<image class="tup" v-bind:src="item.urlimage" mode="aspectFit"></image>
						</view>
						<view class="tuzi1">{{ item.name }}</view>
					</view>
				</view>
			</view>
			<view class="baidi2">
				<view class="bottom_title">
					<view class="xian"></view>
					<view class="quan">更多工具</view>
				</view>
				<view class="heng1">
					<view v-for="(item, index) in list1" :key="index" @tap="gengduo(index)" class="icont">
						<image class="tu" :src="item.urlimage" mode="aspectFit"></image>
						<view class="tuzi">{{ item.name }}</view>
					</view>
				</view>
			</view>
			<view class="tijiao" @tap="exit">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: '',
				nicheng: '李二狗',

				list: [{
						urlimage: '../../static/gerenzhongxin/iocn_dfk.png',
						name: '待付款'
					},
					{
						urlimage: '/static/gerenzhongxin/icon_dfh.png',
						name: '待发货'
					},
					{
						urlimage: '/static/gerenzhongxin/icon_dsh.png',
						name: '待收货'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn_dpj.png',
						name: '待评价'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn_shtk.png',
						name: '退款/售后'
					}
				],
				list1: [{
						urlimage: '/static/gerenzhongxin/iocn-50-wodeshoucang.png',
						name: '我的收藏'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn-50-jifen.png',
						name: '我的积分'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn-50-pingjia.png',
						name: '我的评价'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn-50-sqrz.png',
						name: '申请入住'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn-50-zb.png',
						name: '我的视频'
					},
					{
						urlimage: '/static/gerenzhongxin/icon-zfaq.png',
						name: '账户与安全'
					},
					{
						urlimage: '/static/gerenzhongxin/icon-50-kf.png',
						name: '联系客服'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn-50-kb.png',
						name: '我要开播'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn-50-fb.png',
						name: '我的发布'
					},
					{
						urlimage: '/static/gerenzhongxin/iocn-50-shdz.png',
						name: '收货地址'
					},
					{
						urlimage: '/static/gerenzhongxin/icon_sc.png',
						name: '我的售出'
					},
				]
			};
		},
		onLoad() {
			this.getBaseInfo()
		},
		onShow() {
			this.getBaseInfo()
			console.log(this.userinfo);
		},
		methods: {
			getBaseInfo() {
				this.request.getBaseInfo({
					uid: uni.getStorageSync('id'),
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res)
					console.log(res.data.info)
					this.userinfo = res.data.info[0]
				})
			},
			gengduo(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '../dspshoucang/dspshoucang'
						});
						break;
					case 1:
						uni.navigateTo({
							url: '../jifen/jifen'
						});
						break;
					case 2:
						uni.navigateTo({
							url: '../pinglun/pinglun'
						});
						break;
					case 3:
						uni.navigateTo({
							url: '../ruzhu/ruzhu'
						});
						break;
					case 4:
						uni.navigateTo({
							url: '../zhibo/zhibo'
						});
						break;
					case 5:
						uni.navigateTo({
							url: '../anquan/anquan'
						});
						break;
					case 6:
						uni.navigateTo({
							url: '../kefu1/kefu1'
						});
						break;
					case 7:
						uni.navigateTo({
							url: '../zhiboshezhi/zhiboshezhi'
						});
						break;
					case 8:
						uni.navigateTo({
							url: '../fabu/fabu'
						});
						break;
					case 9:
						uni.navigateTo({
							url: '../shouhuodizhi/shouhuodizhi'
						});
						break;
					case 10:
						uni.navigateTo({
							url: '../goToSell/goToSell'
						});
						break;
					default:
						break;
				}


			},
			shezhi() {
				uni.navigateTo({
					url: '../center/center'
				})
			},
			exit() {
				uni.clearStorageSync();
				uni.reLaunch({
					url: '../register/register'
				})
			},
			tiaozhuan(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '../dingdan/dingdan?tbIndex=0',

						});
						break;
					case 1:
						uni.navigateTo({
							url: '../dingdan/dingdan?tbIndex=1'

						});
						break;
					case 2:
						uni.navigateTo({
							url: '../dingdan/dingdan?tbIndex=2'
						});
						break;
					case 3:
						uni.navigateTo({
							url: '../dingdan/dingdan?tbIndex=3'
						});
						break;
					case 4:
						uni.navigateTo({
							url: '../dingdan/dingdan?tbIndex=4'
						});
						break;
					default:
						break;
				}
			}
		}
	};
</script>

<style scoped>
	page {
		background-color: #F5F5F5;
	}

	.all {
		background-color: #ffffff;
		width: 95%;
		margin: auto;
		height: 248rpx;
	}

	.beijing {
		background-size: 100% 100%;
		height: 390rpx;
		width: 100%;
	}

	.dingdan_bottom {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.beijing1 {
		position: absolute;
		background-color: #f5f5f5;
		margin-top: -73rpx;
		height: 1090rpx;
		width: 750rpx;
	}

	.heng {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 8% 20rpx;
		flex-direction: row;
	}

	.shezhi {
		height: 45rpx;
		width: 45rpx;

	}

	.heng1 {
		width: 100%;
		justify-content: flex-start;
		display: flex;
		flex-wrap: wrap;
	}

	.tup {
		height: 36rpx;
		width: 43rpx;
		margin-top: 20rpx;
	}

	.tx {
		height: 116rpx;
		width: 116rpx;
		border-radius: 50%;
	}

	.ergou {
		font-size: 32rpx;
		color: #ffffff;
		margin-left: 30rpx;
		margin-top: 30rpx;
	}

	.hong {
		height: 75rpx;
		width: 75rpx;
		border-radius: 100%;
		text-align: center;
		line-height: 75rpx;
		background-color: #ec1f25;
		margin: auto;
	}

	.baidi {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 15rpx 20rpx 9rpx;
		border-radius: 6px;
	}

	.baidi1 {
		background-color: #ffffff;
		width: 100%;
		display: flex;
		padding: 10rpx 20rpx 33rpx 20rpx;
		justify-content: space-between;
		border-radius: 6px;
	}

	.baidi2 {
		width: 95%;
		height: 569rpx;
		padding: 31rpx 12rpx 40rpx 9rpx;
		margin: auto;
		border-top: 30rpx solid #eee;
		background-color: #ffffff;
	}

	.xian {
		background-color: #ff6f84;
		height: 29rpx;
		width: 10rpx;
		border-radius: 10rpx;
	}

	.icont {
		width: 25%;
		height: 115rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 30rpx;
	}

	.quan {
		font-size: 30rpx;
		margin-left: 13rpx;
	}

	.bottom_title {
		display: flex;
		align-items: center;
	}

	.chakan {
		font-size: 26rpx;
		color: #949494;
	}

	.jr {
		margin-left: 18rpx;
		height: 28rpx;
		width: 16rpx;
		margin-top: 5rpx;
	}

	.tu {
		height: 50rpx;
		width: 45rpx;
		margin: auto;
		/* margin-left: 15%; */
	}

	.tuzi {
		font-size: 27rpx;
		margin: auto;
	}

	.tuzi1 {
		font-size: 27rpx;
		text-align: center;
		margin-top: 17rpx;
	}

	.tijiao {
		background-color: #f13821;
		height: 75rpx;
		width: 707rpx;
		line-height: 75rpx;
		border-radius: 38px;
		font-size: 34rpx;
		text-align: center;
		color: #fff;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-bottom: 300rpx;
		/* margin: 142rpx auto; */
	}
</style>
