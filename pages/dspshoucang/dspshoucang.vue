<template>
	<view>
		<view class="dingbu">
			<view class="shou_top">
				<view v-for="(item, index) in list" :key="index" @click="cancel(index)">
					<view :class="item.a ? 'zi1' : 'zi'">{{ item.name }}</view>
					<view :class="item.a ? 'hxian' : 'xian'"></view>
				</view>
			</view>
			<view>
				<view v-if="type ===1" class="zhibo">
					<view class="shipin" v-for="(item,index) in goodsList" :key="index">
						<view class="beijing" :style="{ backgroundImage: 'url(' + item.content.thumb + ')' }">
							<view>
								<view class="xh">@{{item.content.user_nicename}}</view>
								<view class="botttom_t">
									<view class="xh1">{{item.content.title}}!</view>
									<view class="bofang">
										<image class="xh2" src="/static/dpshoucang/iocn-89-bf.png" mode=""></image>
										<view class="xh3">{{item.content.views}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="type === 2" class="zhibo">
					<view class="shipin" v-for="(item,index) in goodsList" :key="index">
						<view class="beijing" :style="{ backgroundImage: 'url(' + item.content.image + ')' }">
							<view>
								<view class="xh">@{{item.content.user_nicename}}</view>
								<view class="botttom_t">
									<view class="xh1">{{item.content.title}}!</view>
									<view class="bofang">
										<image class="xh2" src="/static/dpshoucang/iocn-89-bf.png" mode=""></image>
										<view class="xh3">{{item.content.views}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="type=== 3" class="shou_top1">
					<view class="goods_box" v-for="(item,index) in goodsList" :key="index" @tap="godetails(item.content.id)">
						<view class="goods">
							<image class="tu" :src="item.content.logo" mode=""></image>
							<view class="goods_right">
								<view class="xm3">{{item.content.title}}</view>
								<!-- <view class="xm4">颜色：{{item.color}}尺码：{{item.size}}</view> -->
								<view class="xm5">￥{{item.content.price_selling}}</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="type==4" class="dianpu_box">
					<view class="shops" v-for="(item,index) in goodsList" :key="index">
						<view class="heng_dian">
							<view style="display: flex;">
								<image class="tx1" :src="item.content.business_logo" mode=""></image>
								<view style="display: flex;flex-direction: column;">
									<view>
										<text class="dianpuname">{{item.content.business_name}}</text>
										<image class="jian" src="/static/dianputuijian/iocn-87-tuijian.png" mode="aspectFit"></image>
									</view>
									<text class="xm1">{{item.content.distance}}km|{{item.title}}|{{item.adress}}|{{item.number}}月销量</text>
								</view>
							</view>
							<view>
								<button class="jd" @tap="jindain(item)">进店</button>
							</view>
						</view>
						<view class="heng">
							<view class="img1" v-for="(itemm,index) in item.content.goods_list" :key="index">
								<image class="tu1" :src="itemm.logo"></image>
							</view>
						</view>
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
				dsp: '',
				zhibojian: '',
				shangpin: '',
				dianpu: '',
				page: 1,
				size: 10,
				type: 1,
				goodsList: [],
				list: [{
						name: '短视频收藏',
						a: true
					},
					{
						name: '直播间收藏',
						a: false
					},
					{
						name: '商品收藏',
						a: false
					},
					{
						name: '店铺收藏',
						a: false
					}
				],
				longitude: 1,
				latitude: 1,
			};
		},
		onLoad() {
			this.getcollectList(this.page, this.size, this.type)
			this.location()
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
						// this.city = res.address.city
						// this.getlist(this.order)
					}
				});
			},
			getcollectList(page, size, type) {
				this.request.getcollectList({
					token: uni.getStorageSync('token'),
					type: type,
					page: page,
					num: size,
					longitude: this.longitude,
					latitude: this.latitude
				}).then(res => {
					if (res.code === 1) {
						this.goodsList = res.data
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			cancel(index) {
				console.log(index);
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.list[i].a = true;
						this.type = i + 1;
						this.getcollectList(this.page, this.size, this.type)
					} else {
						this.list[i].a = false;
					}
				}
			},
			jindain(item) {
				uni.navigateTo({
					url: '../dianpu/dianpu?shopid='+item.content.id
				})
			},
			godetails(id) {
				uni.navigateTo({
					url: '../shangpinxiangqing/shangpinxiangqing?id='+id
				})
			}
		}
	};
</script>

<style>
	.dingbu {
		background-color: #f5f5f5;
	}

	.heng_dian {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.jian {
		height: 28rpx;
		width: 28rpx;
		margin-left: 20rpx;
		margin-top: 27rpx;
	}

	.dianpu_box {
		margin-top: 22rpx;
	}

	.dianpuname {
		margin-left: 15rpx;
		margin-top: 25rpx;
		font-size: 28rpx;
	}

	.tx1 {
		height: 96rpx;
		width: 96rpx;
		margin-top: 18rpx;
	}

	.shou_top {
		display: flex;
		text-align: center;
		justify-content: space-between;
		height: 80rpx;
		padding: 33rpx 43rpx 0 43rpx;
	}

	.tu1 {
		height: 212rpx;
		width: 229rpx;
		margin-top: 20rpx;
	}

	.img1 {
		width: 229rpx;
	}

	.bofang {
		display: flex;
		align-items: center;
	}

	.zi {
		font-size: 25rpx;
		margin-right: 15rpx;
	}

	.heng {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.shops {
		width: 100%;
		background: #fff;
		border-bottom: 8rpx solid #eee;
		padding: 0 20rpx 20rpx 20rpx;
	}

	.tup {
		height: 210rpx;
		width: 230rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.tup1 {
		height: 210rpx;
		width: 230rpx;
		margin-left: 15rpx;
		margin-top: 20rpx;
	}

	.jd {
		height: 50rpx;
		color: red;
		margin-right: 10rpx;
		border: 3rpx solid red;
		border-color: #f43426;
		font-size: 27rpx;
		border-radius: 1rem;
		margin-top: 35rpx;
		line-height: 50rpx;
		background-color: #FFFFFF;
	}

	.zi1 {
		font-size: 26rpx;
		color: #ff6f84;
		padding-bottom: 20rpx;
	}

	.sc {
		width: 750rpx;
	}

	.zhjsc {
		width: 750rpx;
	}

	.dpsc {
		width: 750rpx;
	}

	.spsc {
		width: 750rpx;
	}

	.hxian {
		height: 4rpx;
		background-color: red;
		width: 150rpx;
		margin-bottom: 14rpx;
	}

	.shipin {
		width: 349rpx;
		margin-top: 10rpx;
	}

	.goods {
		width: 100%;
		display: flex;
		align-items: stretch;
		padding: 0 22rpx;
	}

	.goods_box {
		border-bottom: 5rpx solid #eee;
	}

	.beijing1 {
		height: 500rpx;
		width: 350rpx;

		background-size: 100% 100%;
	}

	.botttom_t {
		width: 349rpx;
		display: flex;
		padding-bottom: 10rpx;
		padding-right: 10rpx;
		justify-content: space-between;
	}

	.beijing {
		display: flex;
		align-items: flex-end;
		height: 499rpx;
		width: 349rpx;
		background-size: 100% 100%;
	}

	.xian {}

	.xh {
		margin-left: 12rpx;
		font-size: 27rpx;
		color: #FFFFFF;
		width: 100%;
	}

	.xh1 {
		margin-left: 12rpx;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.xh2 {
		margin-left: 20rpx;
		height: 18rpx;
		width: 18rpx;
	}


	.xh3 {
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.tx {
		height: 96rpx;
		width: 96rpx;
		margin-top: 18rpx;
		margin-left: 31rpx;
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

	.xm3 {
		font-size: 22rpx;
		padding: 10rpx 0;
		overflow: hidden;
	}

	.xm4 {
		font-size: 22rpx;
		color: #797979;
		padding: 10rpx 0;
	}

	.goods_right {
		display: flex;
		flex-direction: column;
		padding-left: 23rpx;
		align-items: stretch;
	}

	.xm5 {
		width: 100%;
		font-size: 32rpx;
		color: red;
		padding: 10rpx 0;
	}

	.tu {
		height: 192rpx;
		width: 254rpx;
	}

	.zhibo {
		margin: 20rpx 21rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.shou_top1 {
		width: 100%;
		background: #fff;
		display: flex;
		flex-direction: row;
		margin-top: 23rpx;
		flex-direction: column;
	}
</style>
