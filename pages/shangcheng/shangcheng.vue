<template>
	<view>
		<view class="beijing1" :style="{ backgroundImage: 'url(' + '/static/shouye/bg-top.png' + ')' }">
			<view class="heng">
				<view class="heng sousuo" @tap="goSousuo">
					<image class="fangdajing" src="../../static/icon-fangdajing.png" mode=""></image>
					<input class="shuru" type="text" value="" placeholder="请输入搜索内容" />
				</view>
				<image class="xinxi" src="../../static/shouye/iocn-xx.png" mode="" @tap="xinxi"></image>
			</view>
		</view>
		<view class="beijing2" :style="{ backgroundImage: 'url(' + '/static/shouye/bg-84.png' + ')' }">
			<image class="chufang" src="../../static/shangcheng/banner-85.png" mode=""></image>
			<view class="lhd" :style="{ backgroundImage: 'url(' + '/static/dsp/bg-55-lhd.png' + ')' }"><view class="lhdzi">这是一个礼花弹！！！></view></view>
			<view class="heng">
				<image class="tu" src="../../static/shangcheng/btn-85-mzhh.png" mode="" @click="mzhh"></image>
				<image class="tu" src="../../static/shangcheng/btn-85-xpss.png" mode="" @tap="xpss"></image>
				<image class="tu" src="../../static/shangcheng/btn-85-haiwai.png" mode="" @tap="haiwai"></image>
				<image class="tu" src="../../static/shangcheng/btn-85-sqzq_25.png" mode="" @tap="sqzq"></image>
			</view>
			<view class="heng">
				<view class="tuzi">秘制好货</view>
				<view class="tuzi">新品上市</view>
				<view class="tuzi">海外好货</view>
				<view class="tuzi">省钱专区</view>
			</view>
			<view class="heng di">
				<view>
					<view class="zzpp">自主品牌</view>
					<view class="ppth" :style="{ backgroundImage: 'url(' + '/static/shangcheng/bg-85-ppth.png' + ')' }">品牌特惠</view>
				</view>
				<view class="kuang"><image class="tu1" src="../../static/shangcheng/iocn-85-pp.png" mode=""></image></view>
				<view class="kuang"><image class="tu1" src="../../static/shangcheng/iocn-85-pp2.png" mode=""></image></view>
				<view class="kuang"><image class="tu1" src="../../static/shangcheng/iocn-85-pp3.png" mode=""></image></view>
				<view class="kuang"><image class="tu1" src="../../static/shangcheng/iocno-85-pp4.png" mode=""></image></view>
			</view>
			<view class="baidi">
				<view class="heng">
					<image class="pazt" src="../../static/shangcheng/iocn-85-pazt.png" mode=""></image>
					<view class="pingtai">平台直推</view>
				</view>
				<view class="heng">
					<view v-for="(item,idx) in ptztlist" @tap="goDetail(item)">
						<image class="hezi" :src="item.image" mode=""></image>
						<view class="heng">
							<view class="rmb">￥{{item.price_selling}}</view>
							<view class="rmb1">￥{{item.price_market}}</view>
							<view class="xian"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="goodsheng">
				<view class="goodslist" v-for="(item,index) in goods" :key="index" @click="goDetail(item)">
					<image class="shafa" :src="item.logo" mode=""></image>
					<view class="baidi3" >
						<view style="height: 20rpx;"></view>
						<view class="deng">{{item.title}}</view>
						<view class="ziwaixian">{{item.introduction}}</view>
						<view class="rmb2">￥{{item.price}}</view>
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
			goods:[],
			ptztlist:[],
			id:"",
			pages: 1,
		};
	},
	onReachBottom(){
		// this.pages ++
		// this.geGoodList()
	},
	onLoad() {
		this.geGoodList()
		this.getptztList()
	},
	methods: {
		goDetail(item){
			uni.navigateTo({
				url:'../shangpinxiangqing/shangpinxiangqing?id='+item.id
			})
		},
		goSousuo() {
			uni.navigateTo({
				url: '../fenlei/sousuo'
			})
		},
		xinxi() {
			uni.navigateTo({
				url: '../xinxitongzhi/xinxitongzhi'
			})
		},
		/* 获取商品列表 */
		geGoodList(){
			this.request.indexGoodsList({
				
			}).then(res =>{
				console.log(res)
				if(res.code===1){
					this.goods=res.data
				}
			})
		},
		getptztList(){
			this.request.getShopFourList({
				token: uni.getStorageSync('token'),
				page: this.pages,
				size: 4,
				type: 1
			}).then(res =>{
				console.log(res)
				if(res.code===1){
					this.ptztlist = res.data
					// this.goods=res.data
				}
			})
		},
		mzhh(){
			uni.navigateTo({
				url: '../mizhihaohuo/mizhihaohuo',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		xpss(){
			uni.navigateTo({
				url: '../xinpinshangshi/xinpinshangshi',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		haiwai(){
			uni.navigateTo({
				url: '../guowaizhuanqu/guowaizhuanqu',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		sqzq(){
			uni.navigateTo({
				url: '../shengqianzhuanqu/shengqianzhuanqu',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		
		
		
		
	}
};
</script>

<style>
.beijing1 {
	width: 750rpx;
	height: 425rpx;
	background-size: cover;
}
.heng {
	display: flex;
	flex-direction: row;
}
.goodsheng {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.goodslist{
	/* height: 1000rpx; */
}

.sousuo {
	height: 62rpx;
	width: 542rpx;
	margin-left: 90rpx;
	margin-top: 60rpx;
	background-color: #ffffff;
	border-radius: 30rpx;
}
.fangdajing {
	width: 28rpx;
	height: 28rpx;
	margin-left: 28rpx;
	margin-top: 17rpx;
}
.shuru {
	font-size: 21rpx;
	margin-top: 18rpx;
	margin-left: 30rpx;
}
.xinxi {
	height: 35rpx;
	width: 40rpx;
	margin-top: 75rpx;
	margin-left: 22rpx;
}
.beijing2 {
	position: absolute;
	margin-top: -290rpx;
	height: 1800rpx;
	width: 750rpx;
	background-size: 100% 100%;
}

.chufang {
	height: 290rpx;
	width: 710rpx;
	margin-left: 20rpx;
}
.lhd {
	height: 45rpx;
	width: 750rpx;
	margin-top: 20rpx;
}
.lhdzi {
	line-height: 45rpx;
	text-align: center;
	font-size: 24rpx;
	color: #ffffff;
}
.tu {
	height: 100rpx;
	width: 100rpx;
	margin-left: 45rpx;
	margin-top: 20rpx;
	margin-right: 45rpx;
}
.tuzi {
	font-size: 20rpx;
	margin-left: 48rpx;
	margin-top: 22rpx;
	margin-right: 50rpx;
}
.di {
	height: 145rpx;
	width: 712rpx;
	margin-left: 18rpx;
	background-color: #ffffff;
	margin-top: 20rpx;
}
.ppth {
	height: 31rpx;
	width: 145rpx;
	font-size: 20rpx;
	color: #ffffff;
	background-size: 100% 100%;
	line-height: 31rpx;
	text-align: center;
	margin-left: 20rpx;
	margin-top: 14rpx;
}
.zzpp {
	font-size: 25rpx;
	margin-left: 20rpx;
	margin-top: 34rpx;
}
.kuang {
	border: solid;
	border-color: #f5f5f5;
	height: 103rpx;
	width: 103rpx;
	margin-left: 36rpx;
	margin-top: 19rpx;
}
.tu1 {
	height: 97rpx;
	width: 97rpx;
}
.pazt {
	height: 36rpx;
	width: 28rpx;
	margin-top: 18rpx;
	margin-left: 18rpx;
}
.baidi {
	margin-top: 10rpx;
	height: 325rpx;
	background-color: #ffffff;
}
.pingtai {
	font-size: 26rpx;
	margin-top: 22rpx;
	margin-left: 12rpx;
}
.hezi {
	height: 166rpx;
	width: 174rpx;
	margin-top: 28rpx;
	margin-left: 20rpx;
}
.rmb {
	font-size: 20rpx;
	margin-top: 28rpx;
	margin-left: 21rpx;
	color: #ff0d2e;
}
.rmb1 {
	font-size: 14rpx;
	margin-top: 32rpx;
	margin-left: 21rpx;
	color: #949494;
}
.xian {
	position: absolute;
	height: 2rpx;
	width: 58rpx;
	background-color: #949494;
	margin-top: 45rpx;
	margin-left: 85rpx;
}

.baidi1 {
	height: 155rpx;
	width: 350rpx;
	margin-left: 20rpx;

	background-color: #ffffff;
}
.shafa {
	height: 300rpx;
	width: 350rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
}
.baidi3 {
	/* position: absolute; */
	margin-top: -10rpx;
	height: 155rpx;
	width: 350rpx;
	background-color: #ffffff;
	margin-left: 20rpx;
}
.deng {
	font-size: 23rpx;
	
	margin-left: 20rpx;
}
.ziwaixian {
	font-size: 17rpx;
	margin-top: 15rpx;
	margin-left: 20rpx;
	color: #949494;
}
.rmb2 {
	font-size: 24rpx;
	margin-top: 28rpx;
	margin-left: 21rpx;
	color: #ff0d2e;
}
</style>
