<template>
	<view>
		<view style="background-color: #F5F5F5;height: 1020rpx;">
			<view style="height: 10rpx;"></view>
			<view style="height: 285rpx;width: 715rpx;margin-left: 20rpx;background-color: #FFFFFF;">
			<view class="heng">
				<image class="gou" :src="show ? '../../static/center/iocn-20-yuan.png':'../../static/center/iocn-gou.png'" mode="" @tap="xuanze"></image>
			<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode=""></image>	
			<view class="dpzi">某某旗舰店</view>
			</view>
			<view class="heng">
			<image class="gou" :src="show1 ? '../../static/center/iocn-20-yuan.png':'../../static/center/iocn-gou.png'" mode="" @tap="xuanze1"></image>
				<image class="dptu" src="../../static/gouwuche/img-22-sp.png" mode="aspectFit"></image>
				<view >
					<view class="zi1">Snoppa折叠手机三轴稳定器 黑色</view>
					<view class="zi2">紫外线光精准诱蚊，高灭杀杀毒...</view>
					<view class="heng">
						<view class="rmb">￥128</view>
						<view class="jian">-</view>
						<view class="shu">1</view>
						<view class="jia">+</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 10rpx;"></view>
			<view style="height: 285rpx;width: 715rpx;margin-left: 20rpx;background-color: #FFFFFF;">
			<view class="heng">
				<image class="gou" :src="show2 ? '../../static/center/iocn-20-yuan.png':'../../static/center/iocn-gou.png'" mode="" @tap="xuanze2"></image>
			<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode=""></image>	
			<view class="dpzi">某某旗舰店</view>
			</view>
			<view class="heng">
				<image class="gou" :src="show3 ? '../../static/center/iocn-20-yuan.png':'../../static/center/iocn-gou.png'" mode="" @tap="xuanze3"></image>
				<image class="dptu" src="../../static/gouwuche/img-22-sp.png" mode=""></image>
				<view >
					<view class="zi1">Snoppa折叠手机三轴稳定器 黑色</view>
					<view class="zi2">紫外线光精准诱蚊，高灭杀杀毒...</view>
					<view class="heng">
						<view class="rmb">￥128</view>
						<view class="jian">-</view>
						<view class="shu">1</view>
						<view class="jia">+</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 439rpx;"></view>
		<view class="heng" >
			<image class="quan" src="../../static/gouwuche/iocn-22-wxz.png" mode=""></image>
			<view class="qx">全选</view>
			<view class="hj">合计</view>
			<view class="rmb1">￥666</view>
			<button class="js" type="primary">删除</button>
		</view>
		<view style="height:14rpx;"></view>
		<view style="background-color: #F5F5F5;height:2rpx;">
			<view class="heng">
				<view v-for="( item, index) in list" :key="index">
					<image class="ditu" :src="item.urlimage" mode=""></image>
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
				show:true,
				show1:true,
				show2:true,
				show3:true,
			
			}
		},
		onNavigationBarButtonTap(e){
			uni.switchTab({
				url:'../gouwuche/gouwuche'
			})
		},
		methods: {
			xuanze(){
				this.show=!this.show
			},
			xuanze1(){
				this.show1=!this.show1
			},
			xuanze2(){
				this.show2=!this.show2
			},
			xuanze3(){
				this.show3=!this.show3
			}
		}
	}
</script>

<style>
.heng{
	display: flex;
	flex-direction: row;
}
.dp{
	height: 33rpx;
	width: 33rpx;
	margin-top: 25rpx;
	margin-left: 27rpx;
}
.gou{
	height: 33rpx;
	width: 33rpx;
	margin-top: 25rpx;
	margin-left: 22rpx;
}
.gou1{
	height: 33rpx;
	width: 33rpx;
	margin-top: 95rpx;
	margin-left: 22rpx;
}
.dpzi{
	font-size: 22rpx;
	margin-left: 16rpx;
	margin-top: 26rpx;
}
.dptu{
	height: 162rpx;
	width: 173rpx;
	margin-top: 35rpx;
	margin-left: 27rpx;
}
.zi1{
	margin-top: 50rpx;
	font-size: 22rpx;
	margin-left: 11rpx;
}
.zi2{
	margin-top: 20rpx;
	font-size: 18rpx;
	margin-left: 11rpx;
	color: #949494;
}
.rmb{
	color: red;
	margin-top: 31rpx;
	margin-left:11rpx ;
	font-size: 25rpx;
}
.jian{
	margin-left: 107rpx;
	margin-top: 22rpx;
}
.shu{
	margin-top: 30rpx;
	background-color: #F5F5F5;
	height: 38rpx;
	width: 38rpx;
	font-size: 16rpx;
	text-align: center;
	margin-left: 17rpx;
	margin-right: 17rpx;
}
.jia{
	
	margin-top: 22rpx;
}
.quan{
	height: 32rpx;
	width: 32rpx;
	margin-left: 27rpx;
	margin-top: 27rpx;
}
.qx{
	font-size: 23rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
}
.hj{
	margin-left: 278rpx;
	margin-top: 30rpx;
	font-size: 23rpx;
}
.rmb1{
	color: red;
	font-size: 19rpx;
	margin-left: 17rpx;
	margin-top: 30rpx;
}
.js{
	height: 50rpx;
	width: 125rpx;
	background-color: red;
	color: #FFFFFF;
	margin-top: 14rpx;
	line-height: 50rpx;
	text-align: center;
	font-size: 25rpx;
	border-radius: 21rpx;
}
.dizi{
	margin-left: 30rpx;
	margin-right: 50rpx;
	font-size: 21rpx;
	color: #b2b2b2;
	width: 95rpx;
}
.ditu{
	
	height: 44rpx;
	width: 44rpx;
	margin-left: 50rpx;
	margin-right: 50rpx;
}
</style>
