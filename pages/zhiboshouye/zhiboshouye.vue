<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="heng">
			<view class="top_nav">
				<view class="bor" :class="num===0? 'ac':''" @tap="sel_nav(0)">直播</view>
				<view :class="num===1? 'ac':''" @tap="sel_nav(1)">短视频</view>
				<view :class="num===2? 'ac':''" @tap="sel_nav(2)">关注</view>
			</view>
			<img class="fangdajing" src="/static/zhibo/iocn-60-ss.png" @tap="search"></img>
			<img class="xinxi" src="/static/zhibo/iocn-60-xx.png" @tap="message"></img>
		</view>
		<view class="xian">
		</view>

		<view v-show="num === 0" class="classify">
			<view class="optionA">
				<scroll-view class="option">
					<view class="list" v-for="(item,idx) in tabList" :key="idx" @tap="tabsChange(idx,item.id)" :class="{'active':current === idx}"><text
						 class="text">{{item.label}}</text></view>
				</scroll-view>
			</view>
			<view class="zhibo_result" v-for="(l,l_idx) in liveList" :key='l_idx'>
				<view class="beijing">
					<image :src="l.avatar_thumb" mode="" class="" @click="zhibo(l)"></image>
					<view class="fanaver">
						<view class="xh">{{l.user_nicename}}</view>
						<view class="lower">
							<view class="xh1">{{l.title}}</view>
							<image class="xh2" src="/static/dpshoucang/iocn-47-rs.png" mode=""></image>
							<view class="xh3">{{l.fans}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-show="num == 1" class="classify">
			<view class="zhibo_result" v-for="(list,index) in videoList" :key='index' @click="dshipin(list)">
				<view class="beijing">
					<image :src="list.thumb" mode="" class=""></image>
					<view class="fanaver">
						<!-- <view class="xh">{{list.userinfo.user_nicename}}</view> -->
						<view class="lower">
							<view class="xh1">{{list.title}}</view>
							<image class="xh2" src="/static/dpshoucang/iocn-47-rs.png" mode=""></image>
							<view class="xh3">{{list.watch_ok}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-show="num == 2" class="classify">
			<view class="zhibo_result" v-for="(list,index) in followList" :key='index' @click="dguanzhu(list.id)">
				<view class="beijing">
					<image :src="list.image" mode="" class=""></image>
					<view class="fanaver">
						<view class="xh">{{list.name}}</view>
						<view class="lower">
							<view class="xh1">给大家拍个视频来看看!</view>
							<image class="xh2" src="/static/dpshoucang/iocn-47-rs.png" mode=""></image>
							<view class="xh3">{{list.number}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>

</template>

<script>
	import bridge from '@/common/unfile/unfile.js';
	export default {
		components: {
			bridge
		},
		data() {
			return {
				b: 0,
				num: 0,
				liveList : [],
				videoList : [],
				followList : [],
				arr: [{
						image: '/static/dpshoucang/img-46-sp.png',
						name: '@小黑粉',
						number: '123'
					},
					{
						image: '/static/dpshoucang/img-46-sp.png',
						name: '@小黑粉'
					},
					{
						image: '/static/dpshoucang/img-46-sp.png',
						name: '@小黑粉',
						number: '123'
					}
				],
				tabList: [
					{
						id: 0,
						title: '音乐'
					},
					{
						id: 1,
						title: '舞蹈'
					},
					{
						id: 2,
						title: '户外'
					},
					{
						id: 3,
						title: '交友'
					},
					{
						id: 4,
						title: '其他'
					}
				],
				current:0
			}
		},
		onLoad() {
			// this.getInfo()
			this.getLiveKinds()
			// this.getLive()
		},
		methods: {
			search(){
				console.log('搜索');
				uni.navigateTo({
					url: '../sousuokuang/zhibosousuo'
				})
			},
			message(){
				console.log('信息');
				uni.navigateTo({
					url: '../xinxitongzhi/xinxitongzhi'
				})
			},
			// 获取直播分类
			getLiveKinds(){
				this.request.getgory({}).then(res=>{
					console.log(res);
					if(res.code === 1){
						this.tabList = res.data
						this.getEachKindsLive(res.data[0].id)
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			// 根据分类搜索直播
			getEachKindsLive(idx){
				this.request.getSearchLiveList({
					token : uni.getStorageSync('token'),
					cate_id : idx
				}).then(res=>{
					console.log(res);
					if(res.code === 1){
						this.liveList = res.data
					}else{
						this.liveList = []
						uni.showToast({
							title:res.msg,
							icon:'none',
							duration:1500
						})
					}
				})
			},
			// 获取视频列表
			getVideo(){
				this.request.getVideoList({
					uid: uni.getStorageSync('id'),
					p: 1
				}).then(res => {
					console.log(res)
					if(res.data.code === 0){
						this.videoList = res.data.info
					}else{
						this.videoList = []
						uni.showToast({
							title:res.msg,
							icon:'none',
							duration:1500
						})
					}
				})
			},
			// 关注直播列表
			getFollowInfo() {
				this.request.getFollow({
					uid: uni.getStorageSync('id'),
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res)
					if(res.data.code === 0){
						this.followList = res.data.info
					}else{
						this.followList = []
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			zhibo(info) {
				console.log(info);
				bridge.call('intoLiveRoom', info);
				bridge.register('intoLiveRoomCallback',function(res){
					console.log(res);
				});
			},
			dshipin(info){
				console.log(info);
				bridge.call('intoVideoPlay', info);
				bridge.register('intoVideoPlayCallback',function(res){
					console.log(res);
				});
			},
			// dguanzhu(idx){
			// 	bridge.call('intoMyFollow', idx);
			// 	bridge.register('intoMyFollowCallback',function(res){
			// 		console.log(res);
			// 	});
			// },
			sel_nav(i) {
				switch (i) {
					case 0:
						this.num = 0
						break;
					case 1:
						this.num = 1
						this.getVideo();
						break;
					case 2:
						this.num = 2
						this.getFollowInfo();
						break;
				}
			},
			tabsChange(idxA,idxB) {
				this.current = idxA
				this.getEachKindsLive(idxB);
			}
		}
	}
</script>

<style lang="scss">
	image {
		width: 100%;
		height: 100%;
		display: block;
	}

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

	.heng {
		display: flex;
		flex-direction: row;
		border-bottom: 2rpx #F5F5F5 solid;
		background-color: #FFFFFF;
	}

	.top_nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		width: 325rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		margin-left: 40rpx;

		.bor {
			margin-left: 10rpx;
		}

		.ac {
			color: #f23d3d;
			text-align: center;
			width: 115rpx;
			font-size: 32rpx;
		}
	}
	.classify {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		background-color: #F5F5F5;
		background-size: cover;
	}
	.optionA{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 750rpx;
		border-bottom: 2rpx solid #eeeeee;
		background-color: #FFFFFF;
	}
	.option{
		display: flex;
		justify-content: space-between;
		width: 668rpx;
		height: 83rpx;
	}
	.list{
		height: 80rpx;
		margin-left: 45rpx;
		margin-right: 45rpx;
		text-align: center;
		float: left;
		color: #131313;
		font-size: 22rpx;
		
	}
	.text{
		line-height: 80rpx;
	}
	.active {
		color: #007AFF;
	}
	.zhibo_result {
		margin-top: 10rpx;
		margin-left: 6rpx;
	}

	.fangdajing {
		height: 38rpx;
		width: 38rpx;
		margin-top: 26rpx;
		margin-left: 243rpx;
	}

	.xinxi {
		height: 34rpx;
		width: 40rpx;
		margin-top: 26rpx;
		margin-left: 40rpx;
	}

	.fl {
		font-size: 20rpx;
		line-height: 75rpx;
		margin-left: 40rpx;
		margin-right: 60rpx;
	}

	.beijing {
		height: 500rpx;
		width: 350rpx;
		position: relative;
		margin-left: 10rpx;
		margin-top: 5rpx;
		margin-bottom: 5rpx;
	}

	.fanaver {
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 0;
		left: 0;
		margin-left: 10rpx;
		margin-bottom: 10rpx;
	}

	.beijing1 {
		height: 500rpx;
		width: 350rpx;
		background-size: 100% 100%;
	}

	.xh {
		margin-left: 12rpx;
		font-size: 22rpx;
		color: #FFFFFF;
		margin-bottom: 8rpx;
	}

	.lower {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.xh1 {
		margin-left: 12rpx;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.xh2 {
		margin-left: 20rpx;
		margin-top: 8rpx;
		height: 18rpx;
		width: 18rpx;
	}

	.xh3 {
		font-size: 20rpx;
		color: #FFFFFF;
		margin-top: 5rpx;
		margin-left: 10rpx;
	}
</style>
