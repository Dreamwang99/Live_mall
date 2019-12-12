<template>
	<view>
		<view class="beijing1">
			<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/bg-99-top.png' + ')' }">
				<view style="height: 140rpx;"></view>
				<view class="kuang">
					<view class="guowai">省钱专区</view>
					<view class="xianhuo">精 品 商 品 等 你 来 拿</view>
				</view>
				<view class="heng baidi" v-for="(item,idx) in goodslist" :key="idx" @tap="goDetail(item)">
					<image class="shafa" :src="item.image" mode=""></image>
					<view >
						<view class="deng">{{item.title}}</view>
						<view class="ziwaixian">{{item.introduction}}</view>
						<view class="rmb2">优惠￥{{item.price_selling}}</view>
						<view class="heng">
							<view class="yuanjia">原价￥{{item.price_market}}</view>
							<button class="liji" type="primary" @tap="goDetail(item)">立即抢购</button>
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
			goodslist: []
		};
	},
	onNavigationBarButtonTap() {
		this.$refs.share.open()
	},
	onReachBottom(){
		this.pages ++
		this.getshengList()
	},
	onLoad() {
		this.getshengList()
	},
	methods: {
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
		getshengList(){
			this.request.getShopFourList({
				token: uni.getStorageSync('token'),
				page: this.pages,
				size: 4,
				type: 6
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
					this.goodslist = this.goodslist.concat(res.data)
				}
			})
		},
	}
};
</script>

<style>
.beijing {
	background-size: 100% 100%;
	height: 500rpx;
	width: 750rpx;
}
.beijing1 {
	background-color: #f5f5f5;
	height: 1500rpx;
	width: 750rpx;
}

.kuang{
	border: solid;
	border-color: #fab4ae;
	height: 190rpx;
	width: 560rpx;
	border-radius: 5rpx;
	margin-left: 94rpx;
	
}

.heng {
	display: flex;
	flex-direction: row;
}


.hezi1{
	height: 140rpx;
	width: 162rpx;
	margin-top: 16rpx;
	margin-left: 30rpx;
}

.jingpin{
	font-size: 30rpx;
	margin-top: 26rpx;
	margin-left: 20rpx;
}
.shafa{
	height: 217rpx;
	width: 187rpx;
	margin-top: 10rpx;
	margin-left: 10rpx;
}
.baidi{
	height: 238rpx;
	width: 710rpx;
	background-color: #FFFFFF;
	margin-left: 20rpx;
	margin-top: 26rpx;
}
.deng{
	font-size: 28rpx;
	margin-top: 28rpx;
	margin-left: 10rpx;
}
.ziwaixian{
	font-size: 20rpx;
	margin-top: 25rpx;
	margin-left: 10rpx;
	color: #949494;
}
.rmb2{
	font-size: 28rpx;
	margin-top: 28rpx;
	margin-left: 10rpx;
	color: #FF0D2E;
}
.guowai{
	font-size: 66rpx;
	color: #FFFFFF;
	text-align: center;
}
.xianhuo{
	margin-top: 32rpx;
	font-size: 30rpx;
	color: #FFFFFF;
	text-align: center;
}
.yuanjia{
	margin-top: 28rpx;
	font-size: 22rpx;
	color: #949494;
	margin-left: 10rpx;
}
.liji{
	height:38rpx ;
	width: 145rpx;
	margin-top: 22rpx;
	margin-left: 225rpx;
	background-color: #F13320;
	border-radius: 30rpx;
	font-size: 20rpx;
	line-height: 38rpx;
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
