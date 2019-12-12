<template>
	<view>
		<view class="xian" v-for="(item,index) in list" :key="index">
			<view class="heng">
				<view class="yuan">
					<image class="daohuo" v-if="item.check==1" src="../../static/tongzhi/icon-65-tx.png" mode=""></image>
					<image class="daohuo" v-if="item.check==2" src="../../static/tongzhi/iocn-65-zt.png" mode=""></image>
					<image class="daohuo" v-if="item.check==3" src="../../static/tongzhi/iocn-65-xx.png" mode=""></image>
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
				list: [{
						urlimg: '../../static/tongzhi/icon-65-tx.png',
						name1: '到货提醒',
						name2: '您关注的宝贝已到货!'
					},
					{
						urlimg: '../../static/tongzhi/iocn-65-zt.png',
						name1: '状态变更',
						name2: '您的订单已发货'
					},
					{
						urlimg: '../../static/tongzhi/iocn-65-xx.png',
						name1: '系统通知',
						name2: '您的搬运工将于2019年8月15日飞韩国，需要...'
					}
				]
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
			}
		}
	}
</script>

<style>
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
