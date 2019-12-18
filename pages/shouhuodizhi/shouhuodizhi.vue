<template>
	<view class="content">
		<view v-for="(item,index) in adressList" :key="index" class="A_ress">
			<view class="navbackchoose" @tap="navbackchooses(item,item.id)">
				<view class="address" >
					<view class="name">{{item.name}}</view>
					<view class="phone">{{item.phone}}</view>
				</view>
				<view>
					<view class="dizhi">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</view>
				</view>
			</view>
			<view class="moren">
				<view class="dizhi1" @tap="setdefault(item)">
				<image class="gou" :src=" item.is_default===0 ?'../../static/center/iocn-20-yuan.png':'../../static/center/iocn-gou.png' " mode=""></image>默认地址</view>
				<view class="laji" @click="deleteAdre(item)">
					<image class="delete" src="../../static/shouhuodizhi/icon-27-sc.png" mode=""></image>
					<view class="dizhi1">删除</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adressList: [],
				userToken: "",
				status:0
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../bianji/bianji'
			})
		},
		onLoad(options) {
			this.status = options.status
			this.myAdress()
		},
		onShow() {
			this.myAdress()
		},
		methods: {
			navbackchooses(item,address_id){
				console.log(item)
				console.log(address_id)
				if(this.status == 1){
					
					uni.setStorageSync('getaddress',item)
					uni.setStorageSync('getaddress_id',address_id)
					this.status = 0
					uni.navigateBack({
						
					})
				}
			},
			/* 地址列表 */
			myAdress() {
				this.request.getAddressList({
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res)
					console.log(res.data)
					this.adressList = res.data
				})
			},

			/* 删除地址 */
			deleteAdre(item) {
				this.request.getdelAddress({
					token: uni.getStorageSync('token'),
					address_id: item.id
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						uni.showToast({
							title: "删除地址成功",
							icon: "none",
						})
					
						console.log("成功")
						this.myAdress()
					} else {
						uni.showToast({
							title: "删除地址失败",
							icon: "none",
						})
						console.log("失败")
					}
				})
			},
			// 设置默认地址
			setdefault(item) {
				console.log(item);
				if(item.is_default*1 === 0){
					uni.request({
						url: 'http://zsybshop.yanggod.com/api/order/setDefaultAddress',
						method: "POST",
						header: {
							'content-type': 'application/x-www-form-urlencoded',
						},
						data: {
							token: uni.getStorageSync('token'),
							address_id: item.id
						},
								
						success: (res) => {
							console.log(res)
								
							if (res.data.code === 1) {
								uni.showToast({
									title: res.data.msg,
									icon: "none",
								})
								
								console.log("成功")
								this.myAdress()
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: "none",
								})
								console.log("失败")
							}
						}
					})
				}else{
					uni.showToast({
						title:'改地址已为默认',
						icon:'none'
					})
				}
				
			}
		}
	}
</script>

<style>
	page {
		background-color: #f5f5f5;
	}
	.A_ress{
		width: 750rpx;
		background-color: #FFFFFF;
		height: 210rpx;
		margin-bottom: 15rpx;
	}
	.back {
		height: 55rpx;
		width: 35rpx;

	}

	.address {
		display: flex;
		/* min-width: 400rpx; */
		height: 90rpx;
		flex-direction: row;
		align-items: center;
	}

	.beijing {
		height: 5px;
		width: 100%;
		background-color: #F1F1F1;
	}

	.shouhuo {
		height: 40rpx;
		width: 200rpx;
		margin-left: 200rpx;
	}

	.shouhuo1 {
		height: 40rpx;
		width: 200rpx;
		margin-top: 30rpx;
		font-size: 30rpx;
		float: right;
	}

	.name {
		margin: auto 40rpx auto 20rpx;
		max-height: 90rpx;
		min-width: 100rpx;
		font-size: 32rpx;
	}

	.phone {
		width: 100rpx;
		font-size: 30rpx;
	}

	.dizhi {
		line-height: 70rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
	}

	.dizhi1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 15rpx;
		font-size: 20rpx;
		color: #C8C7CC;
	}

	.delete {
		height: 35rpx;
		width: 28rpx;
	}

	.gou {
		height: 35rpx;
		width: 35rpx;
		margin-left: 20rpx;
		margin-right: 15rpx;
	}
	.moren{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	.laji {
		display: flex;
		align-items: center;
		margin-right: 20rpx;
	}
</style>
