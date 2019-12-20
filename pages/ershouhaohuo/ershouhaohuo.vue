<template>
	<view>
		<view class="sousuo_top" @tap="sousuo()">
			<view class="heng beijing2">
				<image class="fangdajing" src="../../static/icon-fangdajing.png" mode=""></image>
				<input class="sousuo" type="text" value="" placeholder="请输入搜索内容" />
			</view>
			<view class="sousuo_">搜索</view>
		</view>
		<view class="title1">
			<!-- <view style="display: flex;">
				<view v-for="(item, index) in Title" :key="index" @click="cancel(index)">
					<view :class="item.status ? 'sp' : 'tj'">{{ item.name }}</view>
				</view>
			</view> -->
			<!-- <view class="ershou_right">
				<view class="shai">筛选</view>
				<image class="sxtu" src="../../static/ershou/iocn-63-sx.png" mode=""></image>
			</view> -->
		</view>
		<view class="goodsMs" v-if="b==0">
			<view class="gm-item" v-for="(item,index) in list" :key="index" @click="shop(item)">
				<view class="gi-images">
					<image :src="item.image[0]" mode=""></image>
				</view>
				<view class="gi-desc">
					<view class="gd-name">{{item.title}}</view>
					<view class="gd-intro">{{item.keyword}}</view>
					<view class="gd-info">
						<view class="gi-price">￥{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="flex_wrap" v-if="b==1">
			<view class="ershou_img" v-for="(item,index) in list" :key="index" @click="shop(item)">
				<image class="shafa" :src="item.img" mode=""></image>
				<view class="miewen">
					<view class="miewendeng">{{item.name}}</view>
					<view class="ziwaixian">{{item.reamrk}}</view>
					<view class="rmb">￥{{item.price}}</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 1,
				latitude: 1,
				userToken: "",
				list: [],
				b: 0,
				Title: [{
						name: '距离',
						status: true
					}
					// {
					// 	name: '销量',
					// 	status: false
					// }
				]
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '../fabuershou/fabuershou'
			})
		},
		onLoad() {
			this.getplace()
			this.getlist()
		},
		methods: {
			sousuo(){
				uni.navigateTo({
					url:'ershousousuo'
				})
			},
			cancel(index) {
				for (let i = 0; i < this.Title.length; i++) {
					if (index == i) {
						this.Title[i].status = true;
						this.b = i;
					} else {
						this.Title[i].status = false;
					}
				}
			},
			/* 获取位置 */
			getplace() {
				uni.getLocation({
					type: 'wgs84',
					geocode: 'true',
					success: res => {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						console.log('当前国家：' + res.address);
						console.log('当前省份：' + res.address.city);
						this.longitude = res.longitude,
						this.latitude = res.latitude,
						this.city = res.address.city
						this.getlist(res)
					}
				});
			},
			/* 跳转 */
			shop(item) {
				uni.navigateTo({
					url: '../second_hand/second_hand?id=' + item.id
				})
			},
			/* 获取列表 */
			getlist(res) {
				this.request.getSecond({
					token: uni.getStorageSync('token'),
					longitude: this.longitude,
					latitude: this.latitude
				}).then(res => {
					console.log(res)
					this.list = res.data
				})
			}
		}
	}
</script>

<style scoped>
	.heng {
		display: flex;
		flex-direction: row;
	}

	.ershou_img {
		width: 353rpx;
		margin: 5rpx;
	}

	.sousuo_top {
		background-color: #FFFFFF;
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 30rpx 10rpx;
		align-items: center;
	}

	.beijing {
		background-color: #FFFFFF;
		height: 70rpx;
	}

	.beijing2 {
		background-color: #F1F1F1;
		height: 57rpx;
		width: 609rpx;
		margin-left: 20rpx;
		border-radius: 50rpx;

	}

	.fangdajing {
		height: 26rpx;
		width: 26rpx;
		margin-left: 35rpx;
		margin-top: 16rpx;
	}

	.sousuo {
		font-size: 24rpx;
		height: 100%;
		/* padding-top: 30rpx; */
	}

	.jl {
		margin-top: 22rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
		color: #ff212c;
	}

	.xl {
		margin-left: 40rpx;
		color: black;
	}

	.sx {
		margin-left: 70rpx;
		color: black;
	}

	.sxtu {
		height: 24rpx;
		width: 24rpx;
		margin-left: 20rpx;
		margin-right: 21rpx;

	}

	.shai {
		font-size: 26rpx;
	}

	.shafa {
		height: 300rpx;
		width: 353rpx;
	}

	.miewen {
		height: auto;
		width: 100%;
		background-color: #FFFFFF;
		padding-bottom: 10rpx;
	}

	.miewendeng {
		font-size: 29rpx;
		margin-left: 20rpx;
		padding-top: 20rpx;
	}

	.ziwaixian {
		font-size: 21rpx;
		margin-top: 10rpx;
		margin-left: 20rpx;
		color: #949494;
	}

	.rmb {
		color: #ff0d2e;
		font-size: 32rpx;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.flex_wrap {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin: 10rpx 15rpx;
	}

	.ershou_right {
		display: flex;
		align-items: center;
	}

	.title1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 79rpx;
		line-height: 79rpx;
		background: #fff;
		justify-content: space-between;
		padding: 0 10rpx;
		border-top: 10rpx solid #eee;
	}

	.sp {
		margin-left: 20rpx;
		color: red;
		font-size: 26rpx;
	}

	.tj {
		margin-left: 20rpx;
		font-size: 26rpx;
		/* font-size: 23rpx;
		line-height: 57rpx;
		margin-left: 60rpx;
		margin-top: 12rpx; */
	}

	.sousuo_ {
		font-size: 30rpx;
		margin-left: 30rpx;
	}
</style>
