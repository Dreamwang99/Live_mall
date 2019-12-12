<template>
	<view style="width: 100%;">
		<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/jifen/bg-43-top.png' + ')' }">
			<view class="xian1"></view>
			<view class="fen1">22000</view>
			<view class="fen2">积分余额</view>
			<view class="xian"></view>
			<view class="score">
				<view class="tu" v-for="(item,index) in goods" :key="index">
					<image class="biao" :src="item.img" mode=""></image>
					<view style="display: flex;align-items: center;">
						<view class="zi">{{item.title}}</view>
						<view class="fen">+{{item.score}}</view>
					</view>
					
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods: [{
						img: '../../static/dingdan/img-29sptp.png',
						title: 'OliviaBurton女士手表小蜜蜂正品礼物石英腕表ob英...',
						score: 27
					},
					{
						img: '../../static/dingdan/img-29sptp.png',
						title: 'OliviaBurton女士手表小蜜蜂正品礼物石英腕表ob英...',
						score: 27
					}, {
						img: '../../static/dingdan/img-29sptp.png',
						title: 'OliviaBurton女士手表小蜜蜂正品礼物石英腕表ob英...',
						score: 27
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '../jfgz/jfgz'
			})
		},
		onLoad() {
			this.getjifen()
		},
		methods: {
			getjifen(){
				this.request.getMyIntegral({
					token: uni.getStorageSync('token')
				}).then(res =>{
					console.log(res);
				})
			}
		}
	}
</script>

<style>
	.xian {
		height: 20rpx;
		background-color: #f4f5fa;
	}

	.score {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background: #fff;
	}

	.tu {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 3px solid #eee;
	}

	.biao {
		margin-left: 20rpx;
		height: 155rpx;
		width:193rpx;
	}

	.zi {
		font-size: 24rpx;
		margin-left: 17rpx;
		width: 350rpx;
		margin-right: 51rpx;
	}

	.fen {
		color: red;
		font-size: 28rpx;
		margin-right: 69rpx;
	}

	.beijing {
		background-size: 100% 100%;
		height: 520rpx;
		width: 100%;
	}

	.xian1 {
		height: 75rpx;
	}

	.xian2 {
		height: 5rpx;
		background-color: #f4f5fa;
	}

	.xian3 {
		height: 330rpx;
		background-color: #f4f5fa;
	}

	.fen1 {
		color: #FFFFFF;
		font-size: 50rpx;
		margin-top: 72rpx;
		text-align: center;
	}

	.fen2 {
		color: #fff;
		font-size: 24rpx;
		margin-top: 40rpx;
		text-align: center;
		margin-bottom: 70rpx;
	}
</style>
