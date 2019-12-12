<template>
	<view>
		
		<view class="beijing">
			<view class="tui" :style="{ backgroundImage: 'url(' + '/static/dingdan/bg-29.png' + ')' }">
				<view class="tui1">退款成功</view>
				<view class="beijing2">
					<image class="dingwei" src="../../static/dingdan/iocn-28-dw.png" mode=""></image>
					<view class="dingwei3">
						<view class="dingwei1">
							<view class="ergou1">李二狗</view>
							<view class="phone1">12345678910</view>
						</view>
						<view class="">
							<view class="dingwei2">江苏省徐州市铜山区铜山万达5号楼18层1802室</view>
						</view>
					</view>
				</view>
			</view>

		</view>

		<view class="dian">
			<image class="tu" src="../../static/dingdan/iocn-29-dp.png" mode=""></image>
			<text class="ergou">李二狗的店铺</text>
		</view>
		<view class="shangpin">
			<image class="biao" src="../../static/dingdan/img-28-sp.png" mode=""></image>
			<view class="">
				<view class="xiangqing">
					<view class="biaozi">OliviaBurton女士手表小蜜蜂正品礼物石英腕表ob英...</view>
					<view class="biaozi1">X1</view>
					<view class="biaozi2">颜色：绿豆沙</view>
					<view class="biaozi3">￥2080.00</view>
				</view>
			</view>

		</view>
		<view class="xian"></view>
		<view class="xinxi">
			<view class="xinxi1"></view>
			<view class="xinxi2">订单信息</view>
			
		</view>
		<view class="bianhao"><view class="xinxi3">订单编号</view><view class="xinxi3">123456789101234567</view></view>
		
		<view class="bianhao"><view class="xinxi3">订单时间</view><view class="xinxi3">2019-08-30 12：46：33</view></view>
		<view class="xian1"></view>
		<view class="kefu">
			<image class="kefu1" src="../../static/dingdan/iocn-29-lxkf_61.png" mode=""></image>
			<view class="kefu2">联系客服</view>
			<image class="back" src="../../static/back.png" mode=""></image>
		</view>
		<view class="xian1"></view>
		
		<view class="anniu">
			
			<button class="anniu2" type="primary">确定</button>
		</view>
		<view class="xian2"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {


			}
		},
		methods: {

		}
	}
</script>

<style>
	.logo {
		transform: rotate(180deg);
		height: 30rpx;
		width: 20rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: auto;

	}

	.anniu {
		margin-top: 50rpx;
		display: flex;
		flex-direction: row;
		margin-bottom: 32rpx;
	}
.xian2{
	height: 270rpx;
	background-color: #f5f5f5;
}
	.anniu1 {
		font-size: 23rpx;
		border-radius: 30rpx;
		color: #949494;
		height: 50rpx;
		width: 160rpx;
		background-color: #F8F8F8;
		line-height: 50rpx;
		margin-left: 300rpx;
	}
.xian{
	height: 8rpx;
	background-color: #f5f5f5;
	margin-top: 25rpx;
}
.xian1{
	height: 3rpx;
	background-color: #f5f5f5;
	margin-top: 25rpx;
}
	.anniu2 {
		font-size: 23rpx;
		border-radius: 30rpx;

		height: 50rpx;
		width: 160rpx;
		background-color: red;
		line-height: 50rpx;
		margin-left: 550rpx;
	}

	.dingwei {

		width: 60rpx;
		height: 60rpx;
		margin-top: 43rpx;
		margin-left: 30rpx;
	}

	.tui {

		height: 165rpx;
		width: 750rpx;
	}
.xinxi{
	margin-top: 18rpx;
	display: flex;
	flex-direction: row;
}
.kefu{
	margin-top: 16rpx;
	display: flex;
	flex-direction: row;
}
.kefu1{
	height: 35rpx;
	width: 35rpx;
	margin-left: 23rpx;
	margin-right: 23rpx;
}
.kefu2{
	font-size: 23rpx;
	color: #000000;
	margin-right: 540rpx;
}
.back{
	transform:rotate(180deg);
	height: 30rpx;
	width: 16rpx;
}
.xinxi3{
	color: #949494;
	margin-left: 35rpx;
	margin-top: 27rpx;
	font-size: 18rpx;
}
.bianhao{
	margin-top: 28rpx;
	display: flex;
	flex-direction: row;
}
.xinxi1{
	height: 26rpx;
	width: 4rpx;
	margin-left: 20rpx;
	background-color: red;
}
.xinxi2{
	font-size: 26rpx;
	margin-left: 12rpx;
	line-height: 26rpx;
}
	.beijing2 {
		display: flex;
		flex-direction: row;
		height: 145rpx;
		width: 710rpx;
		
		background-color: #F8F8F8;
		margin-left: 23rpx;
		border-radius: 5rpx;
	}

	.dingwei2 {
		margin-left: 38rpx;
		font-size: 23rpx;
		margin-top: 33rpx;
	}

	.dingwei1 {
		display: flex;
		flex-direction: row;
	}

	.dingwei3 {
		display: flex;
		flex-direction: column;
	}

	.tui1 {
		
		margin-left: 20rpx;
		font-size:35rpx ;
		line-height: 105rpx;
		color: #F8F8F8;
	}

	.bianji {
		height: 80rpx;
		margin-left: 275rpx;
		margin-right: auto;
		margin-bottom: 10rpx;
	}

	.dian {
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
	}

	.zi {


		font-size: 20rpx;
		margin-left: 30rpx;
		margin-right: auto;
	}

	.biaozi {
		font-size: 23rpx;
		width: 330rpx;

	}

	.biaozi1 {
		font-size: 23rpx;

		margin-right: 10rpx;
		margin-left: auto;
	}

	.biaozi2 {
		font-size: 23rpx;
		color: #797979;

	}

	.biaozi3 {
		font-size: 23rpx;
		color: red;
		margin-top: 34rpx;
	}

	.xiangqing {
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		width: 500rpx;
	}

	.zi1 {
		display: flex;
		flex-direction: row;
		margin-top: 10rpx;
	}

	.tu {
		height: 23rpx;
		width: 23rpx;
		margin-left: 38rpx;
		margin-right: 10rpx;
	}

	.beijing {
		
		height: 250rpx;
	}

	.ergou {
		font-size: 16rpx;
		margin-left: 20rpx;
		color: #7F7F7F;
	}

	.ergou1 {
		font-size: 30rpx;
		margin-left: 40rpx;
		margin-top: 30rpx;
	}

	.phone1 {
		margin-top: 38rpx;
		font-size: 16rpx;
		margin-left: 20rpx;
		color: #7F7F7F;
	}

	.shangpin {
		display: flex;
		flex-direction: row;
		height: 195rpx;
		margin-top: 10rpx;
	}

	.biao {
		height: 195rpx;
		width: 195rpx;
	}
</style>
