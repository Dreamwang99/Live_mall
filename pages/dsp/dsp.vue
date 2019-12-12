<template>
	<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/dpshoucang/img-46-sp.png' + ')' }">
		<view style="height: 467rpx;"></view>
		<view class="tx" :style="{ backgroundImage: 'url(' + '../../static/dsp/iocn-14-tx.png' + ')' }"></view>
		<image class="jia" src="../../static/dsp/iocn-14-jia.png" mode="aspectFit"></image>
		<image class="zan" src="../../static/dsp/iocn-14-zan.png" mode="aspectFit"></image>
		<view class="zi">1.2w</view>
		<image class="pl" src="../../static/dsp/ionc-14-pl.png" mode="aspectFit" @tap="pinglun"></image>
		<view class="zi1">123</view>
		<image class="pl" @tap="togglePopup('bottom', 'dibu')" src="../../static/dsp/iocn-14-zf.png" mode=""></image>
		<view class="zi1">223</view>
		<view class="zi2">@小黑粉</view>
		<view class="zi3">给大家拍个美食来看看！！！</view>
		<uni-popup :show="ping" :custom="true" type="bottom" :mask-click="false">
			<view class="pinglun1">
				<image class="cha" src="../../static/dsp/iocn-15-cha.png" mode="aspectFit" @tap="cancel('quxiaoxiangce')"></image>
			<view class="heng" v-for="(item,index) in list" :key="index" >
				<image class="touxiang" :src="item.urlimg" mode="aspectFit" ></image>
				<view >
					<view class="zhanghu">{{item.zhanghu}}</view>
					<view class="pingjia">{{item.pingjia}}</view>
				</view>
			</view>
			<view class="heng shuodian">
				<input class="shuru1" type="text" placeholder="说点什么吧" placeholder-class="shuru" value="" />
				<view class="aite">@</view>
				<image class="xiao" src="../../static/dsp/iocn-15-xiaolan.png" mode="aspectFit"></image>
			</view>
			
			</view>
		</uni-popup>
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
	export default {
		components: {
			uniPopup
		},

		data() {
			return {
				list:[
					{
						urlimg:'../../static/gerenzhongxin/img-50-touxiang.png',
						zhanghu:'小黑粉',
						pingjia:'正品有保障，小米还是一如既往的好 价格优惠非常好！'
					}
				],
				
				fenxiang: false,
				ping:false
			}
		},
		methods: {
			pinglun(){
				this.ping=true
			},
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
					this.ping = false;
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
	}
</script>

<style>
.beijing{
	width: 750rpx;
	height: 1200rpx;
	background-size: 100% 100%;
}
.tx{
	height: 88rpx;
	width: 88rpx;
	margin-left: 590rpx;
    background-size: cover;
	
}
.heng{
	display: flex;
	flex-direction: row;
}
.touxiang{
	height: 75rpx;
	width: 75rpx;
	margin-left: 20rpx;
	margin-top: 15rpx;
}
.quxiao{
	text-align: center;
	font-size: 25rpx;
	
}
.jia{
	position: absolute;
	height: 27rpx;
	width: 27rpx;
	margin-left: 627rpx;
	margin-top: -10rpx;
	
}
.zan{
	height: 70rpx;
	width: 68rpx;
	margin-top: 65rpx;
	margin-left: 615rpx;
}
.pl{
	height: 68rpx;
	width: 70rpx;
	margin-top: 52rpx;
	margin-left: 615rpx;
}
.xj {
	height: 80rpx;
	width: 80rpx;
	margin-top: 55rpx;
	margin-left: 188rpx;
}
.zi{
	color: #FFFFFF;
	font-size: 21rpx;
	margin-left:620rpx ;
	
}
.zi1{
	color: #FFFFFF;
	font-size: 21rpx;
	margin-left:627rpx ;
}
.zi2{
	font-size: 30rpx;
	margin-left: 20rpx;
	color: #FFFFFF;
	margin-top: 50rpx;
}
.zi3{
	font-size: 23rpx;
	margin-left: 20rpx;
	color: #FFFFFF;
	
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
.pinglun1{
	height: 890rpx;
	width: 750rpx;
	background-color:rgba(243,229,229,0.76) ;
}
.cha{
	margin-top: 20rpx;
	height: 23rpx;
	width: 23rpx;
	margin-left:700rpx;
}
.zhanghu{
	font-size: 24rpx;
	margin-left: 20rpx;
	margin-top: 15rpx;
	color: #7b7b7b;
}
.pingjia{
	font-size: 24rpx;
	margin-left: 20rpx;
	margin-top: 23rpx;
	color: #7b7b7b;
}
.shuodian{
	background-color: #dedede;
	width: 750rpx;
	line-height: 82rpx;
	position: fixed;
	bottom: 0rpx;
	
}
.shuru1{
	margin-top: 28rpx;
	margin-left: 40rpx;
}
.shuru{
	font-size: 23rpx;
}
.aite{
	margin-top: 5rpx;
	margin-left: 400rpx;
	font-size: 24rpx;
	color: #949494;
}
.xiao{
	height: 40rpx;
	width:40rpx;
	margin-top: 25rpx;
	margin-left:30rpx;
}
</style>
