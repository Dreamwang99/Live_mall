<template>
	<view class="content">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="tax_control">
		</view>
		<view class="classify">
			<view class="search_result" v-for="(list,index) in childKindsInfo" :key='index' @tap="cart(list.id)">
				<image :src="list.logo" mode="" class="search_resultimg"></image>
				<view class="searchtext">{{list.title}}</view>
				<view class="searchcity">{{list.introduction}}</view>
				<view class="searchmoney">￥{{list.price_selling}}</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	let goods_id, shopid;
	export default {
		data() {
			return {
				num: 0,
				grabble: true,
				searchs: '',
				arr: [],
				getimgaddress: '',
				hisSearchInfo: [],
				remenSearchInfo: [],
				arrs: [],
				page: 1,
				switch1: true,
				goodslist: [],
				id: '',
				goods_id: '',
				childKindsInfo:'',
			}
		},
		onLoad(options) {
			this.values = uni.getStorageSync('token');
			this.goods_id = options.goods_id
			this.search()
		},
		onReachBottom() {
			this.page++
			if (this.switch1) {
				this.search()
				this.hSearch(this.title)
			}
		},
		methods: {
			//搜索
			search() {
				this.request.getcommodities({
					token: uni.getStorageSync('token'),
					category_id: this.goods_id,
					page: 1,
					size:4
				}).then(res => {
					console.log(res)
					this.childKindsInfo = res.data
				})
			},
			backtrack() {
				uni.navigateBack({

				})
			},
			cart(idx) {
				console.log(idx)
				uni.navigateTo({
					url: '../shangpinxiangqing/shangpinxiangqing?id=' + idx
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fcfcfc;
	}

	.content {}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #F8F8F8;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background: -webkit-gradient(linear, 0 0, 100% 100%, from(#00abf9), to(#01cefd));
		top: 0;
		z-index: 999;
	}

	/* 顶部 */
	.top {
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 750rpx;
		height: 95rpx;
		line-height: 95rpx;
		background-color: #FFFFFF;
		border-bottom: 1rpx #F5F5F5 solid;
	}

	.topimg {
		width: 22rpx;
		height: 40rpx;
		margin-right: 30rpx;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.top_c {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 500rpx;
		height: 65rpx;
		margin-left: 40rpx;
		background-color: #eeeeed;
		border-radius: 50px;
		margin-top: 10rpx;
	}

	.hunt {
		width: 35rpx;
		height: 30rpx;
		margin-left: 20rpx;
	}

	.search_string {
		margin-left: 20rpx;
		font-weight: 100;
		font-size: 30rpx;
		color: #b5b5b5;
	}

	.toptext {
		color: #f23d3d;
		margin-left: 30rpx;
		font-size: 34rpx;
	}

	/* 历史搜索 */
	.hiskuang {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.go_back {
		width: 19rpx;
		height: 30rpx;
	}

	.history {
		margin-top: 30rpx;
		font-size: 30rpx;
		margin-left: 28rpx;
	}

	.hisdelet {
		width: 26rpx;
		height: 29rpx;
		margin-top: 10rpx;
		margin-right: 42rpx;
	}

	.hSearch {
		display: flex;
		flex-wrap: wrap;
	}

	.hs-item {
		min-width: 110rpx;
		height: 46rpx;
		line-height: 46rpx;
		text-align: center;
		font-size: 26rpx;
		color: #626262;
		background-color: #FFFFFF;
		border: 1rpx #f43426 solid;
		border-radius: 23rpx;
		margin-top: 40rpx;
		margin-left: 30rpx;
	}

	/* 选项卡 */
	.tax_control {
		background-color: #FFFFFF;
		margin-top: 20rpx;
	}

	.top_nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		width: 670rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32upx;
		margin-left: 20rpx;
		padding: 0rpx 10px 0px 10px;

		.bor {
			width: 140rpx;
			height: 100%;
		}

		.ac {
			color: #f23d3d;
			text-align: center;
			border-bottom: 3upx solid #f23d3d;
			width: 140rpx;
			height: 100%;
		}
	}

	.classify {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 750rpx;
	}

	.clashop {
		width: 750rpx;
		min-height: 1150rpx;
		background-color: #F5F5F5;
	}

	.search_result {
		width: 342rpx;
		height: 532rpx;
		margin-top: 15rpx;
		margin-left: 20rpx;
		border-radius: 20rpx;
		box-shadow: 0 0 5rpx 5rpx #f4f4f4;
		background-color: #FFFFFF;
	}

	.aaaaaaaa {
		height: 20rpx;
	}

	.search_shop {
		margin-bottom: 20rpx;
	}

	.shopbor {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		width: 710rpx;
		height: 165rpx;
		margin-left: 20rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
	}

	.shopheng {
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 165rpx;
		margin-left: 15rpx;
	}

	.shopimg {
		width: 115rpx;
		height: 115rpx;
		border-radius: 50%;
	}

	.shopname {
		margin-left: 15rpx;
		font-size: 32rpx;
	}

	.shopbtn {
		text-align: center;
		width: 127rpx;
		height: 50rpx;
		background-color: #FFFFFF;
		border: 1rpx #F23D3D solid;
		font-size: 24rpx;
		border-radius: 25rpx;
		line-height: 50rpx;
		margin-right: 40rpx;
	}

	.search_resultimg {
		width: 342rpx;
		height: 344rpx;
		border-radius: 5px;
	}

	.searchtext {
		margin-top: 15rpx;
		margin-left: 10rpx;
		font-size: 28rpx;
		font-weight: 600;
	}

	.searchmoney {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		width: 315rpx;
		font-size: 40rpx;
		color: #f23d3d;
		margin-top: 10rpx;
		margin-left: 8rpx;
	}

	.searchcity {
		min-height: 50rpx;
		font-size: 24rpx;
		color: #232323;
		margin-left: 10rpx;
		margin-top: 15rpx;
	}

	.med {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		width: 313rpx;
		font-size: 22rpx;
		color: #b2b2b2;
		margin-left: 8rpx;
	}

	.mediumsimg {
		font-size: 30rpx;
	}
</style>
