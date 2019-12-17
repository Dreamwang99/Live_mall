<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="top" :style="{ backgroundImage: 'url(' + '/static/dianputuijian/bg-87-top.png' + ')' }">
			<view style="height: 28rpx;"></view>
			<view class="beijing" @tap="search">
				<image class="fangdajing" src="../../static/icon-fangdajing.png" mode=""></image>
				<input class="sousuo" type="text" value="" placeholder="请输入搜索内容" />
			</view>

			<scroll-view show-scrollbar="false" scroll-x="true" class="lunbo">
				<view class="di" v-for="(item,index) in goods" :key="index">
					<image class="tu" :src="item.business_logo" mode=""></image>
					<image class="logo" :src="item.logo" mode=""></image>
					<view class="zi">{{item.business_name}}</view>
					<view class="zi1">{{item.title}}</view>
					<view class="zi2">{{item.remark}}</view>
				</view>
			</scroll-view>
		</view>
		<view class="heng beijing1">
			<view v-for="( item, index ) in list" :key="index" @click="cancel(index)">
				<view :class="item.a ? 'hzi':'fenlei'">{{item.name}}</view>
			</view>
			<!-- <image class="sx" src="/static/dianputuijian/iocn-87-sx.png" mode=""></image> -->
		</view>
		<view class="shops" v-for="(item,index) in shops" :key="index">
			<view class="heng_dian">
				<view style="display: flex;">
					<image class="tx" :src="item.business_logo" mode="" />
					<view style="display: flex;flex-direction: column;">
						<view>
							<text class="xm">{{item.business_name}}</text>
							<image class="jian" src="/static/dianputuijian/iocn-87-tuijian.png" mode="aspectFit"></image>
						</view>
						<text class="xm1">{{item.distance}}km|{{item.brand_title}}|{{item.city}}|月销量{{item.month_sales}}</text>
					</view>
				</view>
				<view>
					<button class="jd" @tap="jindain(item)">进店</button>
				</view>
			</view>
			<view class="heng">
				<view class="img1" v-for="(item,index) in item.goods_list" :key="index">
					<image class="tu1" :src="item.logo"></image>
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
				a: true,
				goods: [],
				images: [],
				shops: [],

				list: [{
						name: '销量',
						order: 'sales',
						a: true
					},
					{
						name: '附近',
						order: 'distance',
						a: false
					}
				],
				order: 'sales',
				longitude: '',
				latitude: '',
			}
		},
		onNavigationBarButtonTap() {
			this.$refs.share.open()
		},
		onLoad() {
			this.location()
			this.getPersons()
			this.getlist(this.order)
			this.getMerchantsgoodlist()
		},
		methods: {
			//获取地址
			location() {
				uni.getLocation({
					type: 'wgs84',
					geocode: 'true',
					success: res => {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						console.log('当前国家：' + res.address);
						console.log('当前省份：' + res.address.city);
						this.longitude = res.longitude
						this.latitude = res.latitude
						this.city = res.address.city
						this.getlist(this.order)
					}
				});
			},
			getlist(order){
				console.log(56);
				this.request.getMerchantsList({
					page: 1,
					num: 4,
					longitude: 1,
					latitude: 0,
					order: order,
					is_index: 1,
				}).then(res => {
					console.log(res.data)
					this.shops = res.data
				})
			},
			getMerchantsgoodlist(){
				this.request.getMerchantsGoodsList({
					page: 1,
					num: 4,
				}).then(res => {
					console.log(res.data)
					this.goods = res.data
				})
			},
			getPersons(){
				this.request.getPerson({
					token: uni.getStorageSync('token'),
					page: 1,
					size: 4,
					type: 1
				}).then(res => {
					console.log(res)
					// this.qianggou = res.data
				})
			},
			cancel(index) {
				this.shops = ''
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.list[i].a = true;
						this.getlist(this.list[i].order)
					}else{
						this.list[i].a = false;
					}
				}
			},
			jindain(item){
				uni.navigateTo({
					url:'../dianpu/dianpu?shopid='+ item.id
				})
			},
			search(){
				console.log(123);
				uni.navigateTo({
					url:'../fenlei/sousuo'
				})
			},
			change(e){
				console.log(e.show);
			},
		}
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #F8F8F8;
	}
	
	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background:#fff;
		top: 0;
		z-index: 999;
	}
	.top {
		width: 100%;
		height: 550rpx;
		background-size: 100% 100%;
	}
	.heng{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.beijing {
		background-color: #fff;
		height: 60rpx;
		width: 70%;
		margin: 44rpx auto 0rpx;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
	}

	.heng_dian {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.fangdajing {
		height: 26rpx;
		width: 26rpx;
		margin-left: 35rpx;
	}

	.sousuo {
		font-size: 22rpx;
		margin-left: 30rpx;
	}

	.lunbo {
		width: 100%;
		display: flex;
		padding: 0 10rpx;
		white-space: nowrap;
		height: 420rpx;

	}

	.shops {
		width: 100%;
		background: #fff;
		border-bottom: 10rpx solid #eee;
		padding: 20rpx;
	}

	.tu {
		height: 275rpx;
		width: 100%;
	}

	.di {
		height: auto;
		width: 39%;
		padding-bottom: 17rpx;
		margin:40rpx 10rpx 0 10rpx;
		background-color: #FFFFFF;
		display: inline-block;
		border-radius: 20rpx;
	}

	.logo {
		position: absolute;
		height: 50rpx;
		width: 50rpx;
		margin-left: -35%;
		margin-top: 245rpx;
	}

	.zi {
		font-size: 29rpx;
		margin-left: 35%;
		margin-top: 0rpx;
	}

	.zi1 {
		width: 1005;
		font-size: 26rpx;
		margin-left: 15rpx;
		margin-top: 15rpx;
	}

	.zi2 {
		width: 100%;
		font-size: 23rpx;
		margin-left: 15rpx;
		margin-top: 15rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.beijing1 {
		height: 68rpx;
		background-color: #F5F5F5;
		width: 100%;
		line-height: 68rpx;
		display: flex;
		justify-content: flex-start;
	}

	.fenlei {
		font-size: 24rpx;
		width: 100rpx;
		text-align: center;
		margin-right: 40rpx;
	}

	.hzi {
		margin-right: 40rpx;
		font-size: 24rpx;
		width: 100rpx;
		text-align: center;
		color: #FF212C;
	}

	.sx {
		height: 25rpx;
		width: 22rpx;
		margin-right: 30rpx;
		position: relative;
		/* left: -40px; */
		margin-top: 21rpx;
	}

	.tx {
		height: 96rpx;
		width: 96rpx;
		margin-top: 18rpx;
	}

	.xm {
		margin-left: 15rpx;
		margin-top: 25rpx;
		font-size: 28rpx;
	}

	.xm1 {
		margin-left: 15rpx;
		margin-top: 20rpx;
		font-size: 27rpx;
		color: #797979;
	}

	.jd {
		height: 50rpx;
		color: red;
		margin-right: 10rpx;
		border: 3rpx solid red;
		border-color: #f43426;
		font-size: 27rpx;
		border-radius:1rem;
		margin-top: 35rpx;
		line-height: 50rpx;
		background-color: #FFFFFF;
	}

	.jian {
		height: 28rpx;
		width: 28rpx;
		margin-left: 20rpx;
		margin-top: 27rpx;
	}

	.tu1 {
		height: 212rpx;
		width: 229rpx;
		margin-top: 20rpx;
	}
	.img1{
		width: 229rpx;
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
