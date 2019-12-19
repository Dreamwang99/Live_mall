<template>
	<view>
		<view class="beijing1">
			<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/bg-97-top.png' + ')' }">
				<view class="baidi">
					<view class="heng">
						<view class="xinpin">新品推荐</view>
						<image class="hyp1" src="../../static/meiribimiao/iocn-98-hxp.png" mode="" @tap="changegoods"></image>
						<view class="hyp" @tap="changegoods">换一批</view>
					</view>
					<view class="heng">
						<view v-for="(item,idx) in topnewgoods" :key="idx" @tap="goDetail(item)">
							<image class="hezi" :src="item.image" mode=""></image>
							<view class="rmb">￥{{item.price_selling || '价格'}}</view>
							<view class="yimai">{{item.number_sales}}人已购买</view>
						</view>
					</view>
				</view>
				<view class="heng">
					<view class="baidi2">
						<view class="chaozhi">超值新品</view>
						<view class="tiao heng" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/btn-98-sp.png' + ')' }">
							<view class="yishou">已售{{Super.number_sales || '0'}}件</view>
							<image class="jr" src="../../static/mizhihaohuo/icon-98-jr.png" mode=""></image>
						</view>
						<image class="hezi1" :src="Super.logo" mode=""></image>
					</view>
					<view class="baidi2">
						<view class="chaozhi">特价新品</view>
						<view class="tiao heng" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/btn-98-sp2.png' + ')' }">
							<view class="yishou">已售{{Special.number_sales || '0'}}件</view>
							<image class="jr" src="../../static/mizhihaohuo/icon-98-jr.png" mode=""></image>
						</view>
						<image class="hezi1" :src="Special.logo" mode=""></image>
					</view>
					<view class="baidi2">
						<view class="chaozhi">拼团新品</view>
						<view class="tiao heng" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/btn-98-sp3.png' + ')' }">
							<view class="yishou">已售{{Assemble.number_sales || '0'}}件</view>
							<image class="jr" src="../../static/mizhihaohuo/icon-98-jr.png" mode=""></image>
						</view>
						<image class="hezi1" :src="Assemble.logo" mode=""></image>
					</view>
				</view>
				<view class="heng">
					<image class="yuan" src="../../static/mizhihaohuo/iocn-97-yuan.png" mode=""></image>
					<view class="jingpin">精品好货</view>
					<image class="yuan" style="margin-left: 20rpx;" src="../../static/mizhihaohuo/iocn-97-yuan.png" mode=""></image>
				</view>
				<view class="heng">
					<view v-for="(item,idx) in newgoodslist" :key="idx" @tap="goDetail(item)">
						<image class="shafa" :src="item.image" mode=""></image>
						<view class="baidi3">
							<view class="deng">{{item.title}}</view>
							<view class="ziwaixian">{{item.introduction}}</view>
								<view class="rmb2">￥{{item.price_selling || '价格'}}</view>
							</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="share" type="bottom" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="image" />
						</view>
						<view class="uni-share-content-text">{{ item.text}}</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('share')">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components:{
		uniPopup,
	},
	data() {
		return {
			bottomData: [{
					icon: '/static/zhuye/icon_wx.png',
					text: '微信好友'
				},
				{
					icon: '/static/zhuye/icon-pyq.png',
					text: '朋友圈'
				}
			],
			pages: 1,
			p: 1,
			newgoodslist: [],
			topnewgoods: [],
			Super:'',
			Special:'',
			Assemble:''
		};
	},
	onReachBottom(){
		this.pages ++
		this.getnewList()
	},
	onNavigationBarButtonTap() {
		this.$refs.share.open()
	},
	onLoad() {
		this.getSelfband()
		this.getnewList()
		this.gettopnewList(this.p)
	},
	methods: {
		getSelfband(){
			this.request.getShopNew({
				token: uni.getStorageSync('token')
			}).then(res =>{
				console.log(res,'11111111111111111')
				this.Super = res.data.bargain_goods
				this.Special = res.data.group_goods
				this.Assemble = res.data.seckill_goods
			})
		},
		goDetail(item){
			uni.navigateTo({
				url:'../shangpinxiangqing/shangpinxiangqing?id='+item.id
			})
		},
		change(e){
			console.log(e.show);
		},
		cancel(type) {
			this.$refs[type].close()
		},
		getnewList(){
			this.request.getShopFourList({
				token: uni.getStorageSync('token'),
				page: this.pages,
				size: 4,
				type: 3
			}).then(res =>{
				console.log(res)
				if(res.data.length==0){
					if(this.page>1){
						this.pages--
					}
					uni.showToast({
						title: "没有更多了",
						icon: "none",
					});
				}else{
					this.newgoodslist = this.newgoodslist.concat(res.data)
				}
			})
		},
		changegoods(){
			this.p==1?this.p=2:this.p=1
			this.gettopnewList(this.p)
		},
		gettopnewList(p){
			this.request.getShopFourList({
				token: uni.getStorageSync('token'),
				page: p,
				size: 4,
				type: 4
			}).then(res =>{
				console.log(res)
				this.topnewgoods = res.data
			})
		},
	}
};
</script>

<style>
.beijing {
	background-size: 100% 100%;
	height: 430rpx;
	width: 750rpx;
}
.beijing1 {
	background-color: #f5f5f5;
	height: 1500srpx;
	width: 750rpx;
}
.baidi {
	position: absolute;
	height: 325rpx;
	width: 710rpx;
	background-color: #ffffff;
	margin-top: 120rpx;
	margin-left: 20rpx;
}
.baidi2 {
	height: 250rpx;
	width: 220rpx;
	margin-left: 18rpx;
	margin-top: 470rpx;
	background-color: #ffffff;
}
.heng {
	display: flex;
	flex-direction: row;
}
.xinpin {
	font-size: 28rpx;
	margin-top: 21rpx;
	margin-left: 12rpx;
}
.hyp1 {
	margin-left: 470rpx;
	height: 14rpx;
	width: 14rpx;
	margin-top: 45rpx;
}
.hyp {
	font-size: 14rpx;
	color: #ff212c;
	margin-left: 12rpx;
	margin-top: 34rpx;
}
.hezi {
	height: 159rpx;
	width: 166rpx;
	margin-top: 34rpx;
	margin-left: 10rpx;
}
.rmb {
	font-size: 20rpx;
	color: #ff212c;
	width: 180rpx;
	text-align: center;
	margin-top: 10 rpx;
}
.yimai {
	font-size: 17rpx;
	color: #9c9c9c;
	width: 180rpx;
	text-align: center;
	margin-top: 10rpx;
}
.chaozhi {
	font-size: 20rpx;
	margin-top: 15rpx;
	text-align: center;
}
.tiao {
	height: 30rpx;
	width: 155rpx;
	background-size: cover;
	margin-top: 10rpx;
	margin-left: 34rpx;
}
.yishou {
	font-size: 18rpx;
	line-height: 30rpx;
	margin-left: 10rpx;
	color: #ffffff;
}
.jr {
	margin-top: 8rpx;
	height: 17rpx;
	width: 17rpx;
	margin-left: 17rpx;
}
.hezi1{
	height: 140rpx;
	width: 162rpx;
	margin-top: 16rpx;
	margin-left: 30rpx;
}
.yuan{
	height: 12rpx;
	width: 12rpx;
	margin-left: 280rpx;
	margin-top: 40rpx;
}
.jingpin{
	font-size: 30rpx;
	margin-top: 26rpx;
	margin-left: 20rpx;
}
.shafa{
	height: 300rpx;
	width: 350rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
}
.baidi3{
	height: 155rpx;
	width: 350rpx;
	background-color: #FFFFFF;
	margin-left: 20rpx;
}
.deng{
	font-size: 23rpx;
	margin-top: 20rpx;
	margin-left: 20rpx;
}
.ziwaixian{
	font-size: 17rpx;
	margin-top: 15rpx;
	margin-left: 20rpx;
	color: #949494;
}
.rmb2{
	font-size: 24rpx;
	margin-top: 28rpx;
	margin-left: 21rpx;
	color: #FF0D2E;
}
/* 底部分享 */
	.uni-share {
		background: #fff;
	}

	.uni-share-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
		text-align: center;
	}

	.uni-share-content {
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
		width: 100%;
		justify-content: space-around;
	}

	.uni-share-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
		box-sizing: border-box;
	}

	.uni-share-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60upx;
		height: 60upx;
		overflow: hidden;
		border-radius: 10upx;
	}

	.uni-share-content-image .image {
		width: 100%;
		height: 100%;
	}

	.uni-share-content-text {
		font-size: 26upx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}
	.uni-share-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
		text-align: center;
		color: #666;
	}
</style>
