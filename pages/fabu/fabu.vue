<template>
	<view style="width: 100%;border-top: 10rpx solid #eee;">
		<view class="list" v-for="(item,index) in goodsList" :key="index">
			<view class="list1">
				<image class="logo1" :src="item.image[0]"></image>
			</view>
			<view class="bottom">
				<view class="xiaomi">{{item.keyword}}</view>
				<view class="xiangqing">{{item.title}}</view>
				<view class="prise">￥{{item.price}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [],
			}
		},
		onLoad() {
			this.getUser()
		},
		methods: {
			getUser(){
				this.request.getUserGoods({
					// id: uni.getStorageSync('id'),
					token: uni.getStorageSync('token'),
					is_success: 0
				}).then(res => {
					if(res.code==1){
						this.goodsList = res.data
					}else{
						uni.showToast({
							title: res.msg,
							icon: "none",
						});
					}
				})
			}
		}
	}
</script>

<style>
	.xiangqing {
		color: #C0C0C0;
		font-size: 22rpx;
		width: 500rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}

	.logo1 {
		height: 172rpx;
		width:198rpx;
	}

	.list {
		width: 100%;
		border-top: 2rpx solid #eee;
		display: flex;
		flex-direction: row;
		background: #fff;
		height: 213rpx;
		align-items: center;
		padding-left: 20rpx;
	}

	.list1 {
		width:198rpx;
		height: 172rpx;
	}

	.xiaomi {
		font-size: 24rpx;
		width: 300rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.bottom{
		height: 150rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 10rpx;
	}
	.prise {
		color: #ff0d2e;
		font-size: 32rpx;
	}
</style>
