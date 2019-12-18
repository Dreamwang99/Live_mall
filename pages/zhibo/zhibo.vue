<template>
	<view class="top">
		<view class="beijing1" :style="{ backgroundImage: 'url(' + '../../static/gerenzhongxin/bg-92-fm.png' + ')' }">
			<view class="dianpu_top">
				<image src="../../static/gerenshangjia/20_back.png" @tap="fanhui"></image>
<<<<<<< HEAD
				<view class="top_right" @tap="uploadVideo()">
=======
				<view class="top_right" @tap="goscsp()">
>>>>>>> web
					<image src="../../static/gerenzhongxin/icon_ps.png"></image>
				</view>
			</view>
			<view class="top_shipin">
				<image :src="userinfo.avatar"></image>
				<view>
					<view class="dianpu_name">
						{{userinfo.user_nicename}}
					</view>
					<view class="dianpu_number">
						ID：{{userinfo.id}}
					</view>
				</view>
			</view>
			<view class="dianpu_bottom">
				<view class="shipin_bottom">
					{{fensi}}粉丝
				</view>
				<view style="padding-left: 20rpx;">
					{{guanzhu}}关注
				</view>
			</view>
		</view>
		<view style="height: 100%;">
			<view class="imageList">
				<view v-for="(item,index) in images" :key="index" class="image_">
					<image :src="item.thumb"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bridge from '@/common/unfile/unfile.js';
	export default {
		data() {
			return {
				userinfo: uni.getStorageSync('userInformation'),
				name: '铁柱',
				number: 1231567890,
				pages: 1,
				guanzhu: 0,
				fensi: 2,

				images: [],
			}
		},
		onReachBottom(){
			this.pages ++
			this.GetMyVideo()
		},
		onLoad() {
			console.log(this.userinfo);
			this.GetMyVideo()
		},
		methods: {
			goscsp(){
				uni.navigateTo({
					url:'/pages/zhibo/shangchuanshipin'
				})
			},
			choose(index) {
				for (let i = 0; i < this.titles.length; i++) {
					if (index == i) {
						this.titles[i].status = true;
						this.pages = i
					} else {
						this.titles[i].status = false;
					}
				}
			},
			dshipin(id){
				console.log(id)
				uni.navigateTo({
					url:'../dsp/duanshipin?id=' + id
				})
			},
			fanhui() {
				uni.navigateBack({
					delta: 1
				})
			},
			uploadVideo(){
				bridge.call('uploadVideo', "上传视频");
				bridge.register('uploadVideoCallback',function(res){
					console.log(res)
				});
			},
			GetMyVideo(){
				console.log(this.pages);
				this.request.GetMyVideo({
					token: this.userinfo.token,
					uid: this.userinfo.id,
					p: this.pages
				}).then(res => {
					if(res.data.info.length==0){
						if(this.page>1){
							this.pages--
						}
						uni.showToast({
							title: "没有更多了",
							icon: "none",
						});
					}
					this.images = this.images.concat(res.data.info)
					console.log(this.images)
				})
			}
		}
	}
</script>

<style scoped>
	.top {
		background: #fff;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		height: 100%;
	}

	.top_shipin {
		display: flex;
		width: 100%;
		padding: 0 30rpx;
		font-size: 24rpx;
	}

	.top_shipin image {
		width: 88rpx;
		height: 89rpx;
		margin-right: 20rpx;
	}

	.beijing1 {
		width: 100%;
		height: 354rpx;
		background-size: cover;
	}

	.beijing2 {
		width: 100%;
		height: 100%;
		background-size: cover;
	}

	.dianpu_top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		padding:80rpx 20rpx 20rpx 20rpx;
	}

	.dianpu_top image {
		width: 20rpx;
		height: 30rpx;
	}


	.dianpu_name {
		color: #fff;
		font-weight: bold;
		font-size: 34rpx;
	}

	.dianpu_number {
		color: #fff;
		font-size: 20rpx;
		margin-top: 15rpx;
	}

	.shipin_bottom {
		padding: 0 20rpx;
		border-right: 1px solid #fff;
	}

	.dianpu_bottom {
		color: #fff;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 40rpx 3%;
	}

	.chooose {
		border-bottom: 2px solid #fff;
		margin: 0 20rpx;
	}

	.nochoose {
		margin: 0 20rpx;
	}

	.tuijian {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 30rpx;
	}

	.tuijian image {
		width: 60rpx;
		height: 40rpx;
		padding: 10rpx;
	}

	.imageList {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 10rpx;
		flex-wrap: wrap;
	}

	.image_ {
		width:242rpx;
	}

	.image_ image {
		width:242rpx;
		height:346rpx;
		/* padding: 10rpx; */
		border-radius: 0.2rem;
	}

	.bottom {
		width: 100%;
		height: 100%;
	}

	.bottom image {
		width: 100%;
		height: 100%;
	}

	.all {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 10rpx;
		justify-content: space-around;
		/* height:100%; */
	}

	.all_goods {
		width: 48%;
		background: #fff;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 0.2rem;
	}

	.all_goods image {
		height: 40vw;
	}

	.name {
		width: 100%;
		padding: 10rpx;
	}

	.detail {
		color: #C1C1C1;
		font-size: 20rpx;
		padding: 10rpx;
	}

	.price {
		color: red;
		padding-left: 20rpx;
		font-size: 30rpx;
	}

	.top_right image{
		width: 43rpx;
		height: 28rpx;
	}
</style>
