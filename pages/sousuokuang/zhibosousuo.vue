<template>
	<view class="box">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="tophead">
			<view class="beijing">
				<image class="fangdajing" src="../../static/icon-fangdajing.png" mode="aspectFit" @tap="goSousuo"></image>
				<input class="shuru" type="text" v-model="sousuo" placeholder="请输入搜索内容" @confirm="goSousuo" />
			</view>
			<view class="quit" @tap="quit">
				取消
			</view>
		</view>
		<view class="history">
			<view class="heng1">
				<view class="lishiss">搜索结果</view>
			</view>
			<view class=" heng">
				<view class="liveitem" v-for="(item,index) in livelist" :key="index">
					<view class="imgdiv">
						<image class="headimg" :src="item.avatar" mode=""></image>
						<view class="nowlive" v-if="item.islive==1">
							直播中
						</view>
					</view>
					<view class="itemtext">
						<view class="livename">用户名:{{item.user_nicename}}</view>
						<view class="livemsg">ID:{{item.uid}}</view>
						<view class="livemsg">粉丝:{{item.fans}}</view>
					</view>
					<view class="attention">
						<text class="attentiontext" v-if="item.thumb==0" @tap="attent(item.uid,index)">+关注</text>
						<text class="attentiontext" v-if="item.thumb==1" @tap="attent(item.uid,index)">已关注</text>
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
				sousuo:'',
				livelist: [],
			}
		},
		methods: {
			goSousuo(){
				console.log(123);
				this.request.getTitleLiveList({
					token: uni.getStorageSync('token'),
					title: this.sousuo
				}).then(res =>{
					console.log(res);
					this.livelist = res.data
					console.log(this.livelist);
					for (let i = 0; i < res.data.length; i++) {
						this.request.IsAttent({
							uid: uni.getStorageSync('id'),
							touid:res.data[i].uid
						}).then(arr =>{
							console.log(arr.data.info[0].isattent);
							this.livelist[i].thumb = arr.data.info[0].isattent
						})
						console.log(this.livelist[i].thumb);
					}
				})
			},
			
			quit(){
				uni.navigateBack({
					
				})
			},
			attent(uid,idx){
				this.request.SetAttent({
					uid: uni.getStorageSync('id'),
					touid: uid
				}).then(res =>{
					this.livelist[idx].thumb = res.data.info[0].isattent
					console.log(res);
					if(res.data.info[0].isattent==1){
						uni.showToast({
							title: '关注成功',
							icon: "none"
						});
					}else{
						uni.showToast({
							title: '取关成功',
							icon: "none"
						});
					}
				})
			}
		}
	}
</script>

<style scoped>
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
		width: 100%;
		flex-wrap: wrap;
		display: flex;
		flex-direction: row;
	}
	.box{
		position: absolute;
		top:0;
		bottom: 0;
		width: 100%;
		background: #fcfcfc;
	}
	.heng1{
		display: flex;
		justify-content: space-between;
		padding-right: 42rpx;
	}
	.beijing {
		background-color: #F1F1F1;
		height: 61rpx;
		width:72%;
		display: flex;
		align-items: center;
		border-radius: 31px;

	}

	.fangdajing {
		height: 27rpx;
		width: 27rpx;
		margin-left: 35rpx;
	}

	.sousuo {
		font-size: 24rpx;
		margin-left: 30rpx;
		width: 340rpx;
		height: 50rpx;
	}
	.sousuok{
		height: 61rpx;
		width: 72%;
		display: flex;
		align-items: center;
		/* margin-left: 20rpx; */
		background-color: #ffffff;
		border-radius: 30rpx;
	}
	.lishiss {
		font-size: 33rpx;
		margin-left: 50rpx;
		margin-top: 50rpx;
		color: #737373;
	}

	.sc {
		height: 29rpx;
		width: 26rpx;
		margin-top: 52rpx;
	}

	.xiaozongping {
		border: solid;
		border-color: red;
		width: 234rpx;
		background-color: #FFFFFF;
	}

	.shiwang {
		border: solid;
		border-color: red;
		width: 153rpx;
		background-color: #FFFFFF;
	}

	.xifashui {
		width: 205rpx;
	}

	.tophead {
		width: 100%;
		height:128rpx;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shuru {
		padding-left: 26rpx;
		font-size: 24rpx;
	}
	.quit{
		margin-left: 30rpx;
	}
	.liveitem{
		height: 200rpx;
		width: 100%;
		margin-left: 20rpx;
		border-bottom: 1px solid #ccc;
		display: flex;
	}
	.headimg{
		margin-top: 40rpx;
		height: 140rpx;
		width: 140rpx;
		border-radius: 100%;
	}
	.itemtext{
		margin: 60rpx 0 0 20rpx;
		height: 180rpx;
		width: 55%;
		lighting-color: red;
	}
	.livename{
		font-size: 38rpx;
	}
	.livemsg{
		color: #ccc;
		font-size: 30rpx;
	}
	.attention{
		display: flex;
		align-items: center;
	}
	.attentiontext{
		font-size: 30rpx;
		padding: 8rpx;
		width: 120rpx;
		border-radius: 40rpx;
		text-align: center;
		color: #fff;
		background-color: red;
	}
	.nowlive{
		position: relative;
		top: -40rpx;
		left: 10rpx;
		width: 120rpx;
		line-height: 40rpx;
		padding-left: 20rpx;
		height: 40rpx;
		border-radius: 20rpx;
		font-size: 24rpx;
		color: #fff;
		background-color: red;
	}
</style>
