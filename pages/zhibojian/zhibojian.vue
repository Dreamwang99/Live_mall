<template>
	<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/dpshoucang/img-46-sp.png' + ')' }">
		<view class="heng">
			<view class="beijing1 heng">
				<image class="tx" src="../../static/dsp/iocn-14-tx.png" mode=""></image>
				<view>
					<view class="xiaohei">小黑粉</view>
					<view class="fensi">粉丝1.2万</view>
				</view>
				<image class="jia" src="../../static/dsp/iocn-14-jia.png" mode=""></image>
			</view>
			<view class="yuan "><view class="renqi">人气2.8万</view></view>
			<view @tap="quit"><image class="cha" src="../../static/dsp/icon-55-cha.png" mode=""></image></view>
		</view>
		<view class="tiao" :style="{ backgroundImage: 'url(' + '/static/dsp/bg-55-lhd.png' + ')' }"><view class="lihua">xxx在xx房间送了礼花弹</view></view>
		<view style="height: 800rpx;"></view>
		<view class="jrzhibojian"></view>
		<view class="xxx">xxx</view>
		<view class="jrzbj">进入直播间</view>
		<view class="pingjia"></view>
		<view class="xhf">小黑粉：</view>
		<view class="fchao">相机非常好</view>
		<view class="jrzhibojian"></view>
		<view class="xxx">xxx</view>
		<view class="jrzbj">进入直播间</view>
		<view class="jrzhibojian"></view>
		<view class="xxx">xxx</view>
		<view class="jrzbj">进入直播间</view>
		<view class="jrzhibojian"></view>
		<view class="xxx">xxx</view>
		<view class="jrzbj">进入直播间</view>
		<view class="jrzhibojian"></view>
		<view class="xxx">xxx</view>
		<view class="jrzbj">进入直播间</view>
		<view class="jrzhibojian"></view>
		<image class="shc" src="../../static/dsp/iocn-55-shc.png" mode=""></image>
		<view class="jrzbj kxxj" >酷炫相机</view>
		<view class="heng">
			<view class="kuang heng">
				<input class="shuru" type="text" placeholder="说点什么吧" value="" />
				<view class="aite">@</view>
				<image class="xiaolian" src="../../static/dsp/iocn-15-xiaolan.png" mode=""></image>
				</view>
				<image class="lihua1" src="../../static/dsp/iocn-55fx.png" @tap="togglePopup('bottom', 'dibu')"></image>
				<image class="lihua1" src="../../static/dsp/iocn-55-liwu.png" @tap="togglePopup1('bottom', 'dibu')" mode="aspectFit"></image>
				<image class="lihua1" src="../../static/dsp/iocn-55-lihua.png" mode="aspectFit"></image>
			</view>
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
			<uni-popup  :show="lihua" :custom="true" :type="type" >
				<view class="lihua2">
					<view class="lihua3">
						<view class="hezi" v-for="(item,index) in lh" :key="index">
		<image class="lipin"  :src="item.urlimage" mode="aspectFit"></image>
		<view class="lipin1">{{item.name1}}</view>
		<view class="lipin2">{{item.name2}}</view>
		</view>
					</view>
					<view class="xian"></view>
					<view class="heng">
						<view class="heng" @tap="chongzhi()">
							<view class="chongzhi" >充值：300钻石</view>
							<image class="jr" src="../../static/pintuanxiangqingye/iocn-76-jinru.png" mode="aspectFit"></image>
						</view>
						
						<button class="zengs" type="primary">赠送</button>
					</view>
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
				
				fenxiang: false,
				lihua:false,
				lh:[
					{
						urlimage:'/static/zhibo/img_64-mg.png',
						name1:'玫瑰',
						name2:'1钻石'
					},
					{
						urlimage:'/static/zhibo/img_64-mfs.png',
						name1:'魔法棒',
						name2:'199钻石'
					},
					{
						urlimage:'/static/zhibo/img_64-zc.png',
						name1:'嘴唇',
						name2:'666钻石'
					},
					{
						urlimage:'/static/zhibo/img_64-zs.png',
						name1:'钻石',
						name2:'2000钻石'
					},
					{
						urlimage:'/static/zhibo/img-64-hj.png',
						name1:'火箭',
						name2:'6000钻石'
					},
					{
						urlimage:'/static/zhibo/img-64-z.png',
						name1:'赞',
						name2:'4钻石'
					},
					{
						urlimage:'/static/zhibo/img_64-hz.png',
						name1:'猴子',
						name2:'2钻石'
					},
					{
						urlimage:'/static/zhibo/img_64-hc.png',
						name1:'豪华跑车',
						name2:'4000钻石'
					},
					{
						urlimage:'/static/zhibo/img_64-fj.png',
						name1:'豪华飞机',
						name2:'5000钻石'
					},
					{
						urlimage:'/static/zhibo/img_64-hg.png',
						name1:'豪华皇冠',
						name2:'8888钻石'
					}
				]
			}
		},
		methods: {
			quit(){
				uni.navigateBack({
					
				})
			},
			chongzhi(){
				uni.navigateTo({
					url: '../chongzhi/chongzhi',
					
				});
			},
			togglePopup(type, open) {
				this.type = type;
				if (open === 'dibu') {
					//头像
					this.fenxiang = true;
				}
			},
			togglePopup1(type, open) {
				this.type = type;
				if (open === 'dibu') {
					//头像
					this.lihua = true;
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
	}
</script>
<style>
.beijing {
	width: 750rpx;
	height: 1600rpx;
	background-size: 100% 100%;
}
.heng {
	display: flex;
	flex-direction: row;
}
.beijing1 {
	height: 61rpx;
	width: 232rpx;
	border-radius: 30rpx;
	background-color: #61605d;
	margin-left: 20rpx;
	margin-top: 68rpx;
}
.tx {
	height: 57rpx;
	width: 57rpx;
	margin-top: 2rpx;
}
.xiaohei {
	font-size: 24rpx;
	color: #ffffff;
	margin-top: 7rpx;
	margin-left: 17rpx;
}
.fensi {
	font-size: 15rpx;
	color: #ffffff;
	margin-top: 6rpx;
	margin-left: 20rpx;
}
.jia {
	height: 57rpx;
	width: 57rpx;
	margin-top: 2rpx;
	margin-right: 0rpx;
	margin-left: auto;
}
.yuan {
	background-color: #61605d;
	border-radius: 50%;
	height: 55rpx;
	width: 55rpx;
	margin-top: 68rpx;
	margin-left: 338rpx;
}
.renqi {
	position: absolute;
	margin-left: 10rpx;
	margin-top: 5rpx;
	width: 50rpx;
	font-size: 16rpx;
	color: #ffffff;
}
.cha {
	height: 55rpx;
	width: 55rpx;
	margin-top: 71rpx;
	margin-left: 22rpx;
}
.tiao {
	height: 52rpx;
	background-size: cover;
	margin-top: 10rpx;
}
.lihua {
	text-align: center;
	line-height: 52rpx;
	color: #ffffff;
	font-size: 24rpx;
}
.jrzhibojian {
	background: rgba(26, 22, 22, 0.49);
	border-radius: 20rpx;
	height: 45rpx;
	width: 200rpx;
	opacity: 0.5;
	margin-left: 20rpx;
	margin-bottom: 10rpx;
}
.pingjia {
	background: rgba(26, 22, 22, 0.49);
	border-radius: 20rpx;
	height: 45rpx;
	width: 375rpx;
	opacity: 0.5;
	margin-left: 20rpx;
	margin-bottom: 10rpx;
}
.xxx {
	position: absolute;
	margin-top: -45rpx;
	margin-left: 37rpx;
	font-size: 23rpx;
	color: #ffffff;
}
.jrzbj {
	position: absolute;
	margin-top: -45rpx;
	margin-left: 80rpx;
	font-size: 23rpx;
	color: red;
}
.xhf {
	position: absolute;
	margin-top: -45rpx;
	margin-left: 37rpx;
	font-size: 23rpx;
	color: red;
}
.fchao {
	position: absolute;
	margin-top: -45rpx;
	margin-left: 120rpx;
	font-size: 23rpx;
	color: #ffffff;
}
.shc{
	position: absolute;
	margin-top: -45rpx;
	margin-left: 37rpx;
	height: 29rpx;
	width: 33rpx;
}
.kxxj{
	color: #FFFFFF;
}
.kuang{
	margin-top: 50rpx;
	margin-left: 20rpx;
	background: rgba(26,22,22,0.38);
	height:55rpx;
	width: 470rpx;
	border-radius: 30rpx;
}
.shuru{
	margin-left: 30rpx;
	margin-top: 10rpx;
	font-size: 25rpx;
	width: 300rpx;
	
}
.aite{
	color: #d2d2d2;
	margin-left: 20rpx;
	font-size: 25rpx;
	margin-top: 10rpx;
}
.xiaolian{
	height: 25rpx;
	width: 25rpx;
	margin-left: 30rpx;
	margin-top: 15rpx;
}
.lihua1{
	height: 55rpx;
	width: 55rpx;
	margin-top: 43rpx;
	margin-left: 22rpx;
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
.lihua2{
	height: 560rpx;
	width: 750rpx;
	background-color: #FFFFFF;
}
.lihua3{
	display: flex;
	flex-wrap: wrap;
	margin-left: 20rpx;
	margin-right: 20rpx;
}
.hezi{
	height: 175rpx;
	width: 135rpx;
	text-align: center;
	margin-top:40rpx ;
}
.lipin1{
	line-height: 50rpx;
	text-align: center;
	font-size: 24rpx;
}
.lipin2{
	font-size: 17rpx;
	line-height: 36rpx;
}
.lipin{
	text-align: center;
	height: 90rpx;
	width: 86rpx;
}
.xian{
	margin-top: 38rpx;
	height: 2rpx;
	background-color: #FF212C;
}
.chongzhi{
	line-height: 82rpx;
	color:  #FF212C;
	font-size: 25rpx;
	margin-left: 45rpx;
}
.jr{
	margin-top: 23rpx;
	height: 34rpx;
	width: 20rpx;
	margin-left: 14rpx;
}
.zengs{
	margin-top:15rpx;
	height: 55rpx;
	width: 135rpx;
	border-radius: 30rpx;
	margin-left: 14rpx;
	background-color:#f14924 ;
	font-size: 24rpx;
	text-align: center;
	line-height: 55rpx;
	margin-left: 322rpx;
}
</style>
