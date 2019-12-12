<template>
	<view class="concent">
		<view class="ming">
			<view class="zi">会员名</view>
			<view class="ming_right">
			<view class="zi1">{{list.user_nicename}}</view>
			<image class="jinru" src="" mode="aspectFit"></image>
			</view>
		</view>
		<view class="ming" @tap="gaihao()">
			<view class="zi">修改手机号</view>
			<view class="ming_right">
			<view class="zi1">{{list.mobile}}</view>
			<image class="jinru" src="../../static/center/iocn-jinru.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="xiugai" @tap="gaimima()">
			<view class="zi">修改登录密码</view>
			<image class="jinru1" src="../../static/center/iocn-jinru.png" mode="aspectFit"></image>
		</view>
		<view style="background-color: #F5F5F5;height: 970rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			this.getBaseInfo()
		},
		methods: {
			getBaseInfo() {
				this.request.getBaseInfo({
					uid: uni.getStorageSync('id'),
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res)
					console.log(res.data.info)
					this.list = res.data.info[0]
				})
			},
			gaihao() {
				uni.navigateTo({
					url: '../xiugaihao/xiugaihao'
				})
			},
			gaimima() {
				uni.navigateTo({
					url: '../xiugaimm/xiugaimm'
				})
			}
		}
	}
</script>

<style>
	.concent{
		border-top: 10rpx #F5F5F5 solid;
	}
	.ming {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-bottom: 3rpx #F5F5F5 solid;
		height: 70rpx;
	}
	.ming_right{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 24rpx;
	}
	.zi {
		line-height: 65rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
		width: 200rpx;
		color: #494949;
	}
	.xiugai{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-top: 10rpx #F5F5F5 solid;
		height: 70rpx;
	}
	.zi1 {
		display: flex;
		line-height: 65rpx;
		font-size: 26rpx;
		color: #949494;
		margin-right: 50rpx;
	}
	.jinru {
		height: 23rpx;
		width: 13rpx;
		
	}

	.jinru1 {
		height: 23rpx;
		width: 13rpx;
		margin-right: 24rpx;
	}
</style>
