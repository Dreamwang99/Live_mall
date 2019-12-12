<template>
	<view class="box">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="tophead">
			<view class="beijing">
				<image class="fangdajing" src="../../static/icon-fangdajing.png" mode="aspectFit"></image>
				<input class="shuru" type="text" value="" placeholder="请输入搜索内容" @tap="goSousuo()" />
			</view>
		</view>
		<view class=" history">
			<view class="heng1">
				<view class="lishiss">历史搜索</view>
				<image class="sc" src="../../static/sousuo/iocn-58-sc.png" mode=""></image>
			</view>
			<view class=" heng">
				<view v-for=" (item,index) in history" :key="index">
					<view class="lankou">{{item.name}}</view>
				</view>
			</view>
			<view style="margin-top: 25rpx;background-color: #F1F1F1;height: 12rpx;"></view>
			<view class="lishiss" style="margin-top: 31rpx;">热门搜索</view>
			<view class="heng">
				<view v-for=" (item,index) in hot" :key="index">
					<view class="lankou">{{item.name}}</view>
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
				history: [{
						name: '兰蔻'
					},
					{
						name: '阿玛尼'
					},
					{
						name: '123456'
					}
				],
				hot: [{
						name: '雅诗兰黛小棕瓶'
					},
					{
						name: '狮王牙膏'
					},
					{
						name: '爱马仕'
					},
					{
						name: '无硅油洗发水'
					},
					{
						name: '行李箱'
					},
					{
						name: '洗发水'
					},
				]
			}
		},
		methods: {

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

	.lankou {
		font-size: 28rpx;
		margin-left: 50rpx;
		margin-top: 41rpx;
		background-color: #F1F1F1;
		color: #9a9a9a;
		line-height: 50rpx;
		border-radius: 40rpx;
		text-align: center;
		padding: 4rpx 22rpx;
	}
	.lankou:hover{
		color:#f43426;
		border: 1px solid red;
	}
	/* 	.amani {
		margin-left: 33rpx;
		width: 125rpx;
	}

	.shu {
		margin-left: 33rpx;
		width: 140rpx;
	} */

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
		color: #b7b7b7;
	}
</style>
