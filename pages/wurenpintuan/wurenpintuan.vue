<template>
	<view>
		<view style="background-color: #f5f5f5;height: 8rpx;"></view>
		<view style="display: flex;flex-direction: row;">
			<image class="dp" src="../../static/dingdan/iocn-29-dp.png" mode=""></image>
			<view class="zi">李二狗的店铺</view>
		</view>
		<view class="shangpin">
			<image class="biao" src="../../static/dingdan/img-28-sp.png" mode=""></image>
			<view>
				<view class="xiangqing">
					<view class="biaozi">OliviaBurton女士手表小蜜蜂正品礼物石英腕表ob英...</view>
					<view class="biaozi1">X1</view>
					<view class="biaozi2">颜色：绿豆沙</view>
					<view style="display: flex;flex-direction: row;">
						<view class="biaozi4">5人团</view>
						<view class="biaozi3">￥2080.00</view>
					</view>
				</view>
			</view>
		</view>
		<view style="margin-top: 50rpx; background-color: #f5f5f5;height: 8rpx;"></view>
		<view style="display: flex;flex-direction: row;">
			<view class="tuanzhang" :style="{ backgroundImage: 'url(' + '/static/pintuan/img-50-touxiang.png' + ')' }">
				<view style="display: flex;flex-direction: row;"><view class="hdi">团长</view></view>
			</view>
			<image class="ktx" src="../../static/pintuan/img-69-tx_42.png" mode=""></image>
			<image class="ktx" src="../../static/pintuan/img-69-tx_42.png" mode=""></image>
			<image class="ktx" src="../../static/pintuan/img-69-tx_42.png" mode=""></image>
			<image class="ktx" src="../../static/pintuan/img-69-tx_42.png" mode=""></image>
		</view>
		<view style="display: flex;flex-direction: row;margin-left: 165rpx;margin-top: 50rpx;">
			<view style="font-size: 25rpx;">还差</view>
			<view style="font-size: 25rpx;color: red;margin-left: 16rpx;margin-right: 16rpx;">2</view>
			<view style="font-size: 25rpx;">人成团，快来一起拼团吧~</view>
		</view>
		<view style="display: flex;flex-direction: row;margin-left: 20rpx;">
			<view style="height: 2rpx;width: 150rpx;background-color: #6e6e6e;margin-top: 75rpx;"></view>
			<view class="shengyu">剩余</view>
			<uni-countdown
			class="daojishi"
			background-color="#ff212c" 
			    border-color="#ff212c" 
				color="#ffffff"
			    :show-day="false" 
			    :hour="2" 
			    :minute="0" 
			    :second="0" :reset="true">
			</uni-countdown>
			<view style="height: 2rpx;width: 150rpx;background-color: #6e6e6e;margin-top: 75rpx;margin-left: 20rpx;"></view>
		</view>
		<view style="display: flex;flex-direction: row;margin-left: 20rpx;margin-top: 50rpx;">
			<image style="height: 90rpx;width: 90rpx;" src="../../static/img-50-touxiang.png" mode=""></image>
			<view style="display: flex;flex-direction: column ;margin-left: 13rpx;margin-top: 16rpx;">
				<view class="lier">李二狗</view>
				<view class="time1">2019-09-20 02-31-25</view>
			</view>
		</view>
		<button class="yaoqing" @tap="togglePopup('bottom', 'dibu')" >邀请好友拼团</button>
		<uni-popup :show="fenxiang" :custom="true" :type="type" :mask-click="false">
			<view style="height: 315rpx;background-color: #FFFFFF;">
				<view style="display: flex;flex-direction: row;"><view >
				<image class="xj" src="../../static/iocn-weixin.png" @tap="cancle('wxhy')" ></image>
				</view>
				<view type="primary" @click="cancle('pyq')"><image class="xj" src="../../static/zhibo/icon-pyq.png" ></view></view>
				<view style="display: flex;flex-direction: row;">
					<view class="xiangcexq">微信好友</view>
					<view class="xiangjips">朋友圈</view>
				</view>
				<view style="height: 1rpx;background-color: #F5F5F5;margin-top: 40rpx;margin-bottom: 40rpx;"></view>
				<view class="quxiao" @tap="cancel('quxiaoxiangce')">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import uniCountdown from '../../components/linnian-CountDown/uni-countdown.vue';
		export default {
			components: {
				uniPopup,
				uniCountdown
			},
	data() {
		return {
			hour:2,
			second:0,
			minute: 0,
			reset: false,
			fenxiang: false,
		};
	},
	onload(){
	//我的项目中只赋值一次, 所以直接设为true了
	    this.reset = !this.reset;
	    //如果还要设置天, 时, 秒, 在上面声明绑定后, 在这里赋值即可
	    this.minute = 30;
		
	},
	methods: {
		togglePopup(type, open) {
			this.type = type;
			if (open === 'dibu') {
				//头像
				this.fenxiang = true;
			}
		},
		cancel(type) {
			if (type === 'quxiaoxiangce') {
				this.fenxiang = false;
				
			}
			if (type === 'pyq') {
				this.fenxiang = false;
				this.pengyouquan=true;
				uni.share({
					provider:"weixin"
				})
			}
			if (type === 'wxhy') {
				uni.share({
					provider:"weixin",
					scene:"WXSceneSession",
					type:5,
					summary:"快来体验一下吧"
				})
				
			}}
	}
};
</script>

<style>
.dp {
	height: 25rpx;
	width: 25rpx;
	margin-left: 40rpx;
	margin-top: 25rpx;
}
.zi {
	color: #a5a5a5;
	font-size: 17rpx;
	margin-left: 12rpx;
	margin-top: 22rpx;
}
.biao {
	height: 192rpx;
	width: 192rpx;
	margin-top: 35rpx;
	margin-left: 40rpx;
}
.zi1 {
	font-size: 20rpx;
	margin-left: 18rpx;
	margin-top: 45rpx;
	margin-right: auto;
}
.xiangqing {
	margin-left: 20rpx;
	display: flex;
	flex-direction: column;
	width: 500rpx;
}
.daojishi{
	margin-top:30rpx
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
.biaozi {
	font-size: 23rpx;
	width: 330rpx;
	margin-top: 30rpx;
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
.biaozi4 {
	font-size: 23rpx;
	color: #797979;
	margin-top: 34rpx;
}
.biaozi3 {
	font-size: 23rpx;
	color: red;
	margin-top: 34rpx;
	margin-left: 45rpx;
}
.tuanzhang {
	
	height: 120rpx;
	width: 120rpx;
	background-size: 100% 100%;
	margin-left: 40rpx;
	margin-top: 50rpx;
}
.hdi {
	position: absolute;
	height: 27rpx;
	width: 52rpx;
	font-size: 10rpx;
	color: #ffffff;
	text-align: center;
	background-color: red;
	border-radius: 12rpx;
	line-height: 27rpx;
	margin-left: 80rpx;
	margin-right: auto;
}
.ktx {
	height: 120rpx;
	width: 120rpx;
	margin-top: 50rpx;
	margin-left: 22rpx;
}
.time {
	background-color: red;
	height: 48rpx;
	width: 60rpx;
	margin-top: 52rpx;
	color: #ffffff;
	text-align: center;
}
.shengyu {
	color: #8b8b8b;
	margin-left: 23rpx;
	margin-top: 52rpx;
	margin-right: 12rpx;
}
.maohao {
	margin-top: 52rpx;
	margin-left: 7rpx;
	margin-right: 7rpx;
	text-align: center;
	font-size: 36rpx;
}
.lier {
	font-size: 27rpx;
}
.time1 {
	font-size: 16rpx;
	color: #818181;
}
 .yaoqing{
	height:68rpx ;
	width: 275rpx;
	background-color: red;
	color:#ffffff;
	line-height: 68rpx;
	text-align: center;
	border-radius: 30rpx;
	margin-top: 72rpx;
	font-size: 25rpx;
}
.quxiao{
	text-align: center;
	font-size: 25rpx;
	
}
.xj {
	height: 80rpx;
	width: 80rpx;
	margin-top: 55rpx;
	margin-left: 188rpx;
}
.xiangcexq{
	margin-top: 22rpx;
	margin-left: 180rpx;
	font-size: 22rpx;
}
.xiangjips{
	margin-top: 22rpx;
	margin-left: 180rpx;
	font-size: 22rpx;
}
</style>
