<template>
	<view>
		<!-- 顶部 -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="xian" v-for="(item,index) in list" :key="index" @tap="gogogo(item)">
			<view class="heng">
				<view class="yuan">
					<!-- <image class="daohuo" v-if="item.check==1" src="../../static/tongzhi/icon-65-tx.png" mode=""></image>
					<image class="daohuo" v-if="item.check==2" src="../../static/tongzhi/iocn-65-zt.png" mode=""></image>
					<image class="daohuo" v-if="item.check==3" src="../../static/tongzhi/iocn-65-xx.png" mode=""></image> -->
					<image class="daohuo" v-if="item.type==1" src="../../static/tongzhi/iocn-65-xx.png" mode=""></image>
					<image class="daohuo" v-if="item.type==2" src="../../static/tongzhi/icon-65-tx.png" mode=""></image>
					<image class="daohuo" v-if="item.type==3" src="../../static/tongzhi/iocn-65-zt.png" mode=""></image>
					<image class="daohuo" v-if="item.type==4" src="../../static/tongzhi/iocn-65-zt.png" mode=""></image>
					<image class="daohuo" v-if="item.type==5" src="../../static/tongzhi/iocn-65-zt.png" mode=""></image>
					<!-- <image class="daohuo" v-bind:src="item.urlimg" mode=""></image> -->
				</view>
				<view>
					<view class="name1">{{item.title}}</view>
					<view class="name2">{{item.introduce}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: uni.getStorageSync('token'),
				list: []
			}
		},
		onLoad() {
			this.getmsglist()
		},
		methods: {
			getmsglist(){
				this.request.getMessageList({
					token: this.token
				}).then(res =>{
					this.list = res.data
					console.log(res);
				})
			},
			gogogo(e){
				console.log(e);
				switch(e.type){
					case 5:
						uni.navigateTo({
							url: '../kanjia/kanjia?activid='+e.other_id+'&openid='+uni.getStorageSync('id')
						})
						break;
				}
			}
		}
	}
</script>

<style>
	/* 顶部 */
	.status_bar {
	  height: var(--status-bar-height);
	  width: 100%;
	  background-color: #FFFFFF;
	 }
	
	 .top_view {
	  height: var(--status-bar-height);
	  width: 100%;
	  position: fixed;
	  background: -webkit-gradient(linear, 0 0, 100% 100%, from(#fff), to(#fff));
	  top: 0;
	  z-index: 999;
	 }
	
	.heng {
		width: 100%;
		display: flex;
		flex-direction: row;
		background: #fff;
	}

	.xian {
		width: 100%;
		border-top: 16rpx solid #eee;
	}

	.daohuo {
		height: 40rpx;
		width: 37rpx;
		margin-top: 30rpx;
	}

	.yuan {
		background-color: #ff212c;
		height: 100rpx;
		width: 100rpx;
		border-radius: 50%;
		margin-top: 35rpx;
		margin-left: 20rpx;
		text-align: center;
		line-height: 100rpx;
	}

	.name1 {
		font-size: 29rpx;
		margin-left: 27rpx;
		margin-top: 45rpx;
	}

	.name2 {
		font-size: 26rpx;
		margin-left: 27rpx;
		color: #a0a0a0;
		margin-top: 20rpx;
		margin-bottom: 33rpx;
	}
</style>
