<template>
	<view class="ershou_content">
		<swiper :indicator-dots="true" :autoplay="false" indicator-color="rgba(0, 0, 0, .3)" indicator-active-color="#fff"
		 style="height: 450rpx;">
			<swiper-item class="top" v-for="(item, index) in bannerList" :key="index">
				<image :src="item" class="ershou_top">
				</image>
			</swiper-item>
		</swiper>
		<view class="details">
			<view class="backgroud">
				<view class="price">¥{{list.price}}</view>
				<view class="titler">{{list.title}}</view>
				<view class="flex_row">
					<view class="spacebox">
						<view class="old_price">入手价：¥{{list.starting_price}}</view>
						<view>{{list.mode}}</view>
					</view>
					<view class="delivery">{{list.content}}</view>
				</view>
			</view>
			<view class="backgroud">
				<view class="thedetail">
					{{list.detail}}
				</view>
			</view>
			<view class="backgroud">
				<view class="classify">所属类型：{{list.cate_id}}类</view>
				<view class="classify brands">所属品牌：{{list.brand}}类</view>
			</view>
			<view class="backgroud">
				<view class="classify">新旧程度：{{list.degree}}</view>
				<view class="classify ">联系方式：{{list.phone}}</view>
				<view class="classify brands">发布地址：{{list.province}}{{list.city}}{{list.area}}{{list.address}}</view>
			</view>
			<view class="backgroud">
				<view class="flex_row fix">
					<view style="display: flex;">
						<view class="Collection">
							<image class="service" src="../../static/second_hand/icon_kf.png" mode="aspectFit"></image>
							<view class="text">客服</view>
						</view>
						<!-- <view class="Collection" @tap="getinput()">
							<image :src="bool==true? require('../../static/second_hand/icon_sc2.png'):require('../../static/dingdan/iocn-36-xx_72.png')" mode="" class="collect"></image>
							<view class="text">{{isShouCang}}</view>
						</view> -->
					</view>
					<view class="buy" @tap="submit()">立即购买</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [],
				list: '',
				userToken: "",
				userid: "",
				goodid: "",
				bool: true,
				isShouCang: '收藏'
			}
		},
		onLoad(options) {
			this.goodid = options.id
			console.log(this.goodid)
			this.getlist()
		},
		methods: {
			/* 获取列表 */
			getlist() {
				this.request.getDetails({
					token: uni.getStorageSync('token'),
					id: this.goodid
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						this.list = res.data
						console.log(res.data)
						console.log(res.data.image)
						this.bannerList = res.data.image
					}
				})
			},
			//收藏商品
			getinput(){
				this.request.getCollect({
					token: uni.getStorageSync('token'),
					type: 3,
					content_id: this.goodid
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						this.list = res.data
						this.bannerList = res.data.image
					}
				})
				this.bool = !this.bool
				if (this.bool === true) {
					this.isShouCang = "收藏"
				} else {
					this.isShouCang = "已收藏"
				}
			},
			submit(){
				uni.navigateTo({
					url:`../dingdantijiao/dingdantijiao?ershouid=${this.goodid}&goods_type=6`
				})
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #fff;
	}
	.Collection{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 50rpx;
	}
	.ershou_content {
		width: 100%;
	}

	.flex_row {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.spacebox{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 400rpx;
		justify-content: space-between;
		color: #9c9c9c;
	}
	.backgroud {
		width: 100%;
		background-color: #fff;
		margin-bottom: 10rpx;
	}

	.price {
		line-height: 78rpx;
		color: #FF0D2E;
		font-size: 33rpx;
		margin-left: 25rpx;
	}

	.titler {
		font-size: 28rpx;
		margin-left: 25rpx;
	}

	.fix {
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 0rpx;
	}

	.top {
		height: 100%;
	}

	.ershou_top {
		width: 100%;
	}

	.old_price {
		color: #9c9c9c;
		font-size: 22rpx;
		margin-left: 25rpx;
		line-height: 78rpx;
	}

	.details {
		width: 100%;
	}

	.delivery {
		color: #9c9c9c;
		font-size: 22rpx;
		margin-left: 80rpx;
		line-height: 78rpx;
	}

	.thedetail {
		font-size: 22rpx;
		margin: auto 25rpx auto 25rpx;
		color: #9c9c9c;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}

	.classify {
		font-size: 22rpx;
		color: #9c9c9c;
		line-height: 50rpx;
		padding-top: 15rpx;
		margin-left: 25rpx;
	}

	.brands {
		padding-bottom: 15rpx;
	}

	.buy {
		line-height: 68rpx;
		height: 68rpx;
		width: 50%;
		background-color: #f2ad3c;
		border-radius: 1.5rem;
		text-align: center;
		color: #fff;
		font-size: 23rpx;
		margin: 15rpx 20rpx 15rpx 0;
	}

	.service {
		height: 40rpx;
		width: 38rpx;
	}

	.collect {
		height: 38rpx;
		width: 38rpx;
	}

	.text {
		margin-top: 10rpx;
		font-size: 17rpx;
		text-align: center;
	}
</style>
