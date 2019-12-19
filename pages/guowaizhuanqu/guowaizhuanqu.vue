<template>
	<view>
		<view class="topNav">
			<view class="topNavSpace"></view>
			<view class="topNavMain">
				<view class="tn-left" @tap="navBack()">
					<image src="/static/icon/fanhui.png" mode=""></image>
				</view>
				<view class="tn-name">
					国外专区
				</view>
				<view class="tn-right" @tap="shareWeChat()">
					<view class="tr-icon">
						<image src="/static/dianputuijian/iocn-87-fx.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="topNavSpace"></view>
		<view class="beijing1">
			<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/mizhihaohuo/bg-99-top.png' + ')' }">
				<view style="height: 140rpx;"></view>
				<view class="kuang">
					<view class="guowai">国外专区</view>
					<view class="xianhuo">现 货 疯 抢 精 品 盛 惠</view>
				</view>
				
				<view class="heng">
					<view v-for="(item,idx) in goodslist" :key="idx" @tap="goDetail(item)">
						<image class="shafa" :src="item.image" mode=""></image>
						<view class="baidi3">
							<view class="deng">{{item.title}}</view>
							<view class="ziwaixian">{{item.introduction}}</view>
							<view class="rmb2">￥{{item.price_selling}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="share" type="bottom" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box" @tap="shareTypes(item.text)">
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
	import bridge from '@/common/unfile/unfile.js';
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
		onReachBottom(){
			this.pages ++
			this.getguowaiList()
		},
		onLoad() {
			this.getguowaiList()
		},
		methods: {
			shareWeChat() {
				this.$refs.share.open()
			},
			goDetail(item){
				uni.navigateTo({
					url:'../shangpinxiangqing/shangpinxiangqing?id='+item.id
				})
			},
			shareTypes(types){
				var shareInfo = new Object();
				shareInfo.title = "直播分享";
				shareInfo.describe = "快来观看我的直播";
				shareInfo.linkUrl = "https://www.baidu.com/"
				if(types === "微信好友"){
					bridge.call('shareWeChatFriends', shareInfo);
					bridge.register('shareWeChatFriendsCallback',(res)=>{
						console.log(res);
					});
				}else{
					bridge.call('shareWeChatCircle', shareInfo);
					bridge.register('shareWeChatCircleCallback',(res)=>{
						console.log(res);
					});
				}
			},
			change(e){
				console.log(e.show);
			},
			cancel(type) {
				this.$refs[type].close()
			},
			getguowaiList(){
				this.request.getShopFourList({
					token: uni.getStorageSync('token'),
					page: this.pages,
					size: 4,
					type: 5
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
	flex-wrap: wrap
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
