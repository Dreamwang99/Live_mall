<template>
	<view class="beijing">
		<view class="ms" v-for="(g,g_idx) in getGoodsListInfo" :key="g_idx">
			<view class="xian"></view>
			<view class="baidi heng">
				<image class="gou" :src="g.show ? '../../static/center/iocn-gou.png':'../../static/center/iocn-20-yuan.png'" mode="" @click="xuanze(g_idx)"></image>
				<image class="tu" :src="g.logo" mode="aspectFit"></image>
			<view @tap="navToDetails(g.id)">
				<view class="zi1">{{g.title}}</view>
				<view class="zi2">{{g.title}}</view>
				<view class="rmb">￥{{g.price}}</view>
				<view class="heng">
					<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode="aspectFit"></image>
				<view class="dpzi">{{g.business_name}}</view>
				</view>
			</view>
			</view>
		</view>
		<view class="queding" @tap="makeSure()">确定</view>
		<view class="xian"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dianpuming:'某某店铺',
				getGoodsListInfo : [],
				choseGoodsId : 0
			}
		},
		onLoad() {
			this.getGoodsList();
		},
		methods: {
			getGoodsList(){
				this.request.getLiveBusinessShopList({
					token : uni.getStorageSync('token')
				}).then(res=>{
					console.log(res);
					if(res.code === 1){
						res.data.forEach((i,idx)=>{
							if(idx === 0){
								i.show = true
								this.choseGoodsId = i.id
							}else{
								i.show = false
							}
						})
						this.getGoodsListInfo = res.data
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			navToDetails(idx){
				uni.navigateTo({
					url:'/pages/shangpinxiangqing/shangpinxiangqing?id='+idx
				})
			},
			xuanze(idx){
				this.getGoodsListInfo.forEach((i,i_idx)=>{
					if(idx === i_idx){
						i.show = true
						this.choseGoodsId = i.id
					}else{
						i.show = false
					}
				})
			},
			makeSure(){
				uni.setStorageSync("choseGoodsId",this.choseGoodsId);
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
.beijing{
	background-color: #F5F5F5;
}
.xian{
	height: 10rpx;
}
.rmb{
	color: red;
	margin-top: 24rpx;
	margin-left:11rpx ;
	font-size: 25rpx;
}
.baidi{
	background-color: #FFFFFF;
	min-height: 200rpx;
	width: 710rpx;
	margin-left: 20rpx;
	
}
.zi1{
	margin-top: 20rpx;
	font-size:25rpx;
	margin-left: 11rpx;
}
.zi2{
	margin-top: 20rpx;
	font-size: 18rpx;
	margin-left: 11rpx;
	color: #949494;
}
.heng{
	display: flex;
	flex-direction: row;
}
.gou{
	height: 33rpx;
	width: 33rpx;
	margin-top: 82rpx;
	margin-left: 22rpx;
}
.tu{
	height: 163rpx;
	width: 175rpx;
	margin-left: 20rpx;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
}
.dp{
	height: 20rpx;
	width: 20rpx;
	margin-top: 20rpx;
	margin-left: 27rpx;
}
.dpzi{
	font-size: 18rpx;
	margin-left: 16rpx;
	margin-top:18rpx;
}
.queding{
	margin-top: 142rpx;
	margin-bottom: 140rpx;
	height: 74rpx;
	width: 602rpx;
	border-radius: 40rpx;
	color: #FFFFFF;
	background-color:#f13720 ;
	line-height: 74rpx;
	text-align: center;
	margin-left:77rpx ;
}
</style>
