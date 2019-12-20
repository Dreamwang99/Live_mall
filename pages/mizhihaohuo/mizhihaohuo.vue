<template>
	<view>
		<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/bg-97-top.png' + ')' }">
			<!-- //背景 -->
			<view style="height:80rpx;"></view>
			<!-- //轮播图 -->
			<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="false" :circular="true"
			 :autoplay="true" interval="5000" duration="500" @change="cardSwiper">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''" @tap="goDetail(item)">
					<view class="swiper-item">
						<view class="gi-images">
							<image class="tu" :src="item.image" mode="aspectFill"></image>
						</view>
						<view class="back_ground">
							<view class="zi">{{item.title}}</view>
							<view class="heng">
								<image class="tx" :src="item.logo" mode="aspectFit"></image>
								<view class="zi1">{{item.introduction || '店铺名称'}}</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<!-- //精品好货 -->
			<view class="heng">
				<view class="yuan"></view>
				<view class="jingpin">精品好货</view>
				<view class="yuan circle"></view>
			</view>
			<view class="goodsMs">
				<view class="gm-item" v-for="(goods,ind_x) in list" :key="ind_x" @tap="goDetail(goods)">
					<view class="gi-images">
						<image :src='goods.image'></image>
					</view>
					<!-- <image class="shafa" :src="goods.image || goods.img" mode=""></image> -->
					<view class="gi-desc">
						<view class="gd-name">{{goods.title}}</view>
						<view class="gd-intro">{{goods.introduction}}</view>
						<view class="gd-info">
							<view class="gi-price">￥{{goods.price_selling || '价格'}}</view>
							<!-- <view class="gi-sales">{{item.number_sales}}人付款</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="share" type="bottom" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="image" />
						</view>
						<view class="uni-share-content-text">{{ item.text}}</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('share')">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	//import bwSwiper from '@/wxcomponents/bw-swiper/bw-swiper.vue'

	export default {
		components: {
			uniPopup,
			//   bwSwiper
		},
		data() {
			return {
				cardCur: 0,
				bottomData: [{
						icon: '/static/zhuye/icon_wx.png',
						text: '微信好友'
					},
					{
						icon: '/static/zhuye/icon-pyq.png',
						text: '朋友圈'
					}
				],
				list: [],
				swiperList: [],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				pages: 1
			}
		},
		// onNavigationBarButtonTap() {
		// 	this.$refs.share.open()
		// },
		onReachBottom() {
			this.pages++
			this.getmizhiList()
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			this.getmizhiList();
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			goDetail(item) {
				uni.navigateTo({
					url: '../shangpinxiangqing/shangpinxiangqing?id=' + item.id
				})
			},
			change(e) {
				console.log(e.show);
			},
			cancel(type) {
				this.$refs[type].close()
			},
			getmizhiList() {
				this.request.getShopFourList({
					token: uni.getStorageSync('token'),
					page: this.pages,
					size: 4,
					type: 3
				}).then(res => {
					console.log(res)
					if (res.data.length == 0) {
						if (this.page > 1) {
							this.pages--
						}
						uni.showToast({
							title: "没有更多了",
							icon: "none",
						});
					} else {
						this.list = this.list.concat(res.data)
						this.swiperList = res.data
					}
				})
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	.beijing {
		background-size: 100% 100%;
		height: 480rpx;
		width: 750rpx;
	}
	
	.swiper-item{
		background-color: #FFF;
		/* height: 200rpx; */
	}
	
	.tu {
		height: 250rpx;
	}

	.back_ground{
		/* background-color: #FFF; */
		/* height: 200rpx; */
	}
	
	.tu1 {
		margin-top: 35rpx;
	}

	.ziwaixian {
		font-size: 26rpx;
		margin-left: 10rpx;
		color: #000000;
		background-color: #FFFFFF;
	}

	.tx {
		z-index: 100;
		height: 30rpx;
		width: 30rpx;
		margin-top: 20rpx;
		margin-left: 10rpx;

	}

	.lunbo {
		/* 	height: 380rpx;
	width: 490rpx; */
		/* background-color: #FFFFFF; */
	}

	.yuan {
		height: 12rpx;
		width: 12rpx;
		margin-left: 280rpx;
		margin-top: 40rpx;
		background-color: #000;
	}

	.circle {
		margin-left: 20rpx;
	}

	.jingpin {
		font-size: 30rpx;
		margin-top: 26rpx;
		margin-left: 20rpx;
	}

	.shafa {
		height: 300rpx;
		width: 350rpx;
		margin-top: 30rpx;
		margin-left: 20rpx;
	}

	.heng {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.baidi3 {
		height: 195rpx;
		width: 350rpx;
		background-color: #FFFFFF;
		margin-left: 20rpx;
	}

	.deng {
		font-size: 23rpx;
		padding-top: 20rpx;
		margin-left: 20rpx;
	}

	.ziwaixian {
		font-size: 17rpx;
		margin-top: 15rpx;
		margin-left: 20rpx;
		color: #949494;
	}

	.rmb2 {
		font-size: 24rpx;
		margin-top: 28rpx;
		margin-left: 21rpx;
		color: #FF0D2E;
	}

	.zi {
		z-index: 100;
		font-size: 28rpx;
		margin-top: 10rpx;
		margin-left: 10rpx;
		display: block;

	}

	.zi1 {
		font-size: 26rpx;
		color: #989898;
		margin-top: 25rpx;
		margin-left: 8rpx;
	}

	/* 底部分享 */
	.uni-share {
		background: #fff;
	}

	.uni-share-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
		text-align: center;
	}

	.uni-share-content {
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
		width: 100%;
		justify-content: space-around;
	}

	.uni-share-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
		box-sizing: border-box;
	}

	.uni-share-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60upx;
		height: 60upx;
		overflow: hidden;
		border-radius: 10upx;
	}

	.uni-share-content-image .image {
		width: 100%;
		height: 100%;
	}

	.uni-share-content-text {
		font-size: 26upx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}

	.uni-share-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
		text-align: center;
		color: #666;
	}
</style>
