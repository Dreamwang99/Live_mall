<template>
	<view>
		<image src="../../static/gerenshangjia/20_back.png" mode="" class="navback" @tap="navback()"></image>
		<view class="beijing1" :style="{ backgroundImage: 'url(' + '/static/shouye/bg-top.png' + ')' }">
			<view class="heng">
				<view class="heng sousuo" @tap="goSousuo">
					<image class="fangdajing" src="../../static/icon-fangdajing.png" mode=""></image>
					<input class="shuru" type="text" value="" placeholder="请输入搜索内容" />
				</view>
				<image class="xinxi" src="../../static/shouye/iocn-xx.png" mode="" @tap="xinxi"></image>
			</view>
		</view>
		<view class="beijing2" :style="{ backgroundImage: 'url(' + '/static/shouye/bg-84.png' + ')' }">
			<image class="chufang" src="../../static/shangcheng/banner-85.png" mode=""></image>
			<view class="lhd" :style="{ backgroundImage: 'url(' + '/static/shouye1/bg-lhd.png' + ')' }">
				<uni-notice-bar scrollable="true" single="true" :text="annunciate"></uni-notice-bar>
			</view>
			<view class="heng">
				<image class="tu" src="../../static/shangcheng/btn-85-mzhh.png" mode="" @click="mzhh"></image>
				<image class="tu" src="../../static/shangcheng/btn-85-xpss.png" mode="" @tap="xpss"></image>
				<image class="tu" src="../../static/shangcheng/btn-85-haiwai.png" mode="" @tap="haiwai"></image>
				<image class="tu" src="../../static/shangcheng/btn-85-sqzq_25.png" mode="" @tap="sqzq"></image>
			</view>
			<view class="heng">
				<view class="tuzi">秘制好货</view>
				<view class="tuzi">新品上市</view>
				<view class="tuzi">海外好货</view>
				<view class="tuzi">省钱专区</view>
			</view>
			<view class="heng di">
				<view>
					<view class="zzpp">自主品牌</view>
					<view class="ppth" :style="{ backgroundImage: 'url(' + '/static/shangcheng/bg-85-ppth.png' + ')' }">品牌特惠</view>
				</view>
				<view class="kuang" v-for="(item,index) in pinpai" :key="index">
					<image class="tu1" :src="item.brand_logo" mode="" @tap="gobusinss(item.businssid)"></image>
				</view>
			</view>
			<view class="baidi">
				<view class="heng">
					<image class="pazt" src="../../static/shangcheng/iocn-85-pazt.png" mode=""></image>
					<view class="pingtai">平台直推</view>
				</view>
				<view class="heng">
					<view v-for="(item,idx) in ptztlist" :key="idx" @tap="goDetail(item)">
						<image class="hezi" :src="item.image" mode=""></image>
						<view class="heng">
							<view class="rmb">￥{{item.price_selling}}</view>
							<view class="rmb1">￥{{item.price_market}}</view>
							<!-- <view class="xian"></view> -->
						</view>
					</view>
				</view>
			</view>
			<view class="goodsMs">
				<view class="gm-item" v-for="(item,index) in goods" :key='index' @click="goDetail(item)">
					<view class="gi-images">
						<image :src='item.logo'></image>
					</view>
					<view class="gi-desc">
						<view class="gd-name">{{item.title}}</view>
						<view class="gd-intro">
							{{item.introduction}}
						</view>
						<view class="gd-info">
							<view class="gi-price">￥{{item.price}}</view>
							<!-- <view class="gi-sales">{{item.number_sales}}人付款</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import io from '../../common/weapp.socket.io/dist/weapp.socket.io.js'
	export default {
		components: {
			uniNoticeBar
		},
		data() {
			return {
				goods: [],
				ptztlist: [],
				pinpai: [],
				id: "",
				pages: 1,
				num: 4,
				token: uni.getStorageSync('token'),
				annunciate: '', //通告栏的走马灯
			};
		},
		onReachBottom() {
			this.pages++
			this.geGoodList()
		},
		onLoad() {
			// 建立一个socket连接
			const socket = (this.socket = io('http://zhibo.a2w0m.cn:19967'));
			// 客户端socket.on()监听的事件：
			// 连接成功
			socket.on('connect', () => {
				console.log('连接成功');
				console.log(socket.connected); // true
				// 接受到新消息
				socket.on('broadcastingListen', d => {
					console.log(JSON.parse(d))
					console.log(JSON.parse(d).msg[0]._method_)
					if (JSON.parse(d).msg[0]._method_ == 'systemfireworks') {
						console.log(JSON.parse(d).msg[0].ct.content) //内容
						var arr = [];
						var str = JSON.parse(d).msg[0].ct.content;
						for (var i = 0; i <= 2; i++) {
							console.log(i)
							arr.push(str)
						}
						setInterval(() => {
							console.log('每隔4秒钟执行一次')
							if (arr.length > 0) {
								this.annunciate = arr.pop()
								console.log(this.annunciate)
								console.log('已重新赋值当前arr长度为:', arr.length)
							} else {
								this.annunciate = ''
								console.log('当前长度为0,轮播取消赋值')
							}
						}, 4000)
					}
				});
			});
			// 正在连接
			socket.on('connecting', d => {
				console.log('正在连接', d);
			});
			// 连接错误
			socket.on('connect_error', d => {
				console.log('连接失败', d);
			});
			// 连接超时
			socket.on('connect_timeout', d => {
				console.log('连接超时', d);
			});
			// 断开连接
			socket.on('disconnect', reason => {
				console.log('断开连接', reason);
			});
			// 重新连接
			socket.on('reconnect', attemptNumber => {
				console.log('成功重连', attemptNumber);
			});
			// 连接失败
			socket.on('reconnect_failed', () => {
				console.log('重连失败');
			});
			// 尝试重新连接
			socket.on('reconnect_attempt', () => {
				console.log('尝试重新重连');
			});
			// 错误发生，并且无法被其他事件类型所处理
			socket.on('error', err => {
				console.log('错误发生，并且无法被其他事件类型所处理', err);
			});
			socket.on('ping', (timeout) => {
				console.log('ping')
			});
			socket.on('pong', (timeout) => {
				console.log('pong', timeout)
			});
			this.geGoodList()
			this.getptztList()
			this.getpinpai()
		},
		methods: {
			navback() {
				uni.navigateBack({

				})
			},
			//获取自主品牌
			getpinpai() {
				this.request.getSelfBrand({
					token: this.token,
					page: this.pages,
					size: 4
				}).then(res => {
					console.log(res);
					this.pinpai = res.data
				})
			},
			goDetail(item) {
				uni.navigateTo({
					url: '../shangpinxiangqing/shangpinxiangqing?id=' + item.id
				})
			},
			goSousuo() {
				uni.navigateTo({
					url: '../sousuokuang/sousuokuang'
				})
			},
			xinxi() {
				uni.navigateTo({
					url: '../xinxitongzhi/xinxitongzhi'
				})
			},
			/* 获取商品列表 */
			geGoodList() {
				this.request.indexGoodsList({
					token: this.token,
					page: this.pages,
					num: this.num
				}).then(res => {
					if (this.pages == 1) {
						this.goods = []
					}
					if (res.data.length == 0) {
						if (this.pages > 1) {
							this.pages--
						}
						uni.showToast({
							title: "没有更多了",
							icon: "none",
						});
					}
					this.goods = this.goods.concat(res.data)
					console.log(res.data)
				})
			},
			getptztList() {
				this.request.getShopFourList({
					token: this.token,
					page: this.pages,
					size: 4,
					type: 1
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						this.ptztlist = res.data
						// this.goods=res.data
					}
				})
			},
			mzhh() {
				uni.navigateTo({
					url: '../mizhihaohuo/mizhihaohuo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			xpss() {
				uni.navigateTo({
					url: '../xinpinshangshi/xinpinshangshi',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			haiwai() {
				uni.navigateTo({
					url: '../guowaizhuanqu/guowaizhuanqu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			sqzq() {
				uni.navigateTo({
					url: '../shengqianzhuanqu/shengqianzhuanqu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			gobusinss(id) {
				uni.navigateTo({
					url: '../dianpu/dianpu?shopid=' + id
				})
			}



		}
	};
</script>

<style>
	.beijing1 {
		width: 750rpx;
		height: 425rpx;
		background-size: cover;
		/* padding-top: 32rpx; */
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.goodsheng {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.goodslist {
		/* height: 1000rpx; */
	}

	.sousuo {
		height: 62rpx;
		width: 542rpx;
		margin-left: 90rpx;
		margin-top: 60rpx;
		background-color: #ffffff;
		border-radius: 30rpx;
	}

	.fangdajing {
		width: 28rpx;
		height: 28rpx;
		margin-left: 28rpx;
		margin-top: 17rpx;
	}

	.shuru {
		font-size: 21rpx;
		margin-top: 18rpx;
		margin-left: 30rpx;
	}

	.xinxi {
		height: 35rpx;
		width: 40rpx;
		margin-top: 75rpx;
		margin-left: 22rpx;
	}

	.beijing2 {
		position: absolute;
		margin-top: -290rpx;
		height: 1800rpx;
		width: 750rpx;
		background-size: 100% 100%;
	}

	.chufang {
		height: 290rpx;
		width: 710rpx;
		margin-left: 20rpx;
	}

	.lhd {
		height: 45rpx;
		width: 750rpx;
		margin-top: 20rpx;
	}

	.lhdzi {
		line-height: 45rpx;
		text-align: center;
		font-size: 24rpx;
		color: #ffffff;
	}

	.tu {
		height: 100rpx;
		width: 100rpx;
		margin-left: 45rpx;
		margin-top: 20rpx;
		margin-right: 45rpx;
	}

	.tuzi {
		min-width: 100rpx;
		max-width: 100rpx;
		font-size: 20rpx;
		margin-left: 45rpx;
		margin-top: 22rpx;
		margin-right: 45rpx;
		text-align: center;
	}

	.di {
		height: 145rpx;
		width: 712rpx;
		margin-left: 18rpx;
		background-color: #ffffff;
		margin-top: 20rpx;
	}

	.ppth {
		height: 31rpx;
		width: 145rpx;
		font-size: 20rpx;
		color: #ffffff;
		background-size: 100% 100%;
		line-height: 31rpx;
		text-align: center;
		margin-left: 20rpx;
		margin-top: 14rpx;
	}

	.zzpp {
		font-size: 25rpx;
		margin-left: 20rpx;
		margin-top: 34rpx;
	}

	.kuang {
		border: solid;
		border-color: #f5f5f5;
		height: 103rpx;
		width: 103rpx;
		margin-left: 36rpx;
		margin-top: 19rpx;
	}

	.tu1 {
		height: 97rpx;
		width: 97rpx;
	}

	.pazt {
		height: 36rpx;
		width: 28rpx;
		margin-top: 18rpx;
		margin-left: 18rpx;
	}

	.baidi {
		margin-top: 10rpx;
		height: 325rpx;
		background-color: #ffffff;
	}

	.pingtai {
		font-size: 26rpx;
		margin-top: 22rpx;
		margin-left: 12rpx;
	}

	.hezi {
		height: 166rpx;
		width: 174rpx;
		margin-top: 28rpx;
		margin-left: 20rpx;
	}

	.rmb {
		font-size: 20rpx;
		margin-top: 28rpx;
		margin-left: 21rpx;
		color: #ff0d2e;
	}

	.rmb1 {
		font-size: 14rpx;
		margin-top: 32rpx;
		margin-left: 21rpx;
		color: #949494;
		text-decoration: line-through;
	}

	.xian {
		position: absolute;
		height: 2rpx;
		width: 58rpx;
		background-color: #949494;
		margin-top: 45rpx;
		margin-left: 85rpx;
	}

	.baidi1 {
		height: 155rpx;
		width: 350rpx;
		margin-left: 20rpx;

		background-color: #ffffff;
	}

	.shafa {
		height: 300rpx;
		width: 350rpx;
		margin-top: 30rpx;
		margin-left: 20rpx;
	}

	.baidi3 {
		/* position: absolute; */
		margin-top: -10rpx;
		height: 155rpx;
		width: 350rpx;
		background-color: #ffffff;
		margin-left: 20rpx;
	}

	.deng {
		font-size: 23rpx;
		margin-left: 20rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.ziwaixian {
		height: 40rpx;
		font-size: 17rpx;
		/* margin-top: 15rpx; */
		margin-left: 20rpx;
		color: #949494;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.rmb2 {
		font-size: 24rpx;
		/* margin-top: 28rpx; */
		margin-left: 21rpx;
		color: #ff0d2e;
	}

	.navback {
		position: absolute;
		left: 30rpx;
		top: 70rpx;
		width: 30rpx;
		height: 40rpx;
		z-index: 999;
	}
</style>
