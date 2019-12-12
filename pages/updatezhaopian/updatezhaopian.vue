<template>
	<view>
	<!-- 	<view class="li">
			
			<view class="uni-flex uni-row">
				<text class="touxiang">头像</text>
				<image class="logo1" src="/static/center/btn-touxiang.png"></image>
				<image class="logo2" src="/static/center/iocn-jinru.png"></image>
			</view>
			<view>
				<text class="xiaohei">昵称</text>
				<text class="xiaoheif">小黑粉</text>
				<image class="logo3" src="/static/center/iocn-jinru.png"></image>
			</view>
			<view>
				<text class="xiaohei">性别</text>
				<text class="sex">男</text>
				<image class="logo3" src="/static/center/iocn-jinru.png"></image>
			</view>
			<view>
				<text class="xiaohei">用户所在地</text>
				<text class="diqu">江苏徐州</text>
				<image class="logo3" src="/static/center/iocn-jinru.png"></image>
			</view>
			<view><button class="denglu">登录</button></view>
		</view>
		<view class="li1">
			<image class="tu1" src="../../static/updatezhaopian/iocn-25-xc.png" mode=""></image>
			<image class="tu1" src="../../static/updatezhaopian/iocn-25-xj.png" mode=""></image>
		</view>
		<view class="li1">
			<text class="zi1">相册上传</text>
			<text class="zi2">相机拍摄</text>
		</view>
		<view class="quxiao"><text>取消</text></view> -->
		
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		/* import uniPopup from "@/classify/pages/ziliao.vue"
		export default {
		    components: {uniPopup}
		} */
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.li {
		background-color: #808080;

	}

	.logo {
		transform: rotate(180deg);
		height: 30rpx;
		width: 20rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: auto;

	}
.quxiao{
	margin-top: 30rpx;
	margin-left: 350rpx;
	margin-right: auto;
}
	.denglu {
		background-color: red;
		height: 100rpx;
		width: 700rpx;
		margin-top: 300rpx;
		margin-bottom: 100rpx;
		border-radius: 50rpx;
	}

	.bianji {
		margin-left: 275rpx;
		margin-right: auto;
		margin-bottom: 10rpx;
	}
.tu1{
	height: 100rpx;
	width: 100rpx;
	margin-left: 150rpx;
	margin-right: 100rpx;
}
.tu2{
	height: 100rpx;
	width: 100rpx;
	margin-left:200rpx;
	margin-right:50rpx;
}
.zi1{
height: 50rpx;
	width: 50rpx;
	margin-left: 120rpx;
	margin-right: 100rpx;
}
.zi2{
height: 50rpx;
	width: 50rpx;
	margin-left:100rpx;
	margin-right:50rpx;
}
	.xiaohei {
		height: 50rpx;
		width: 50rpx;
		margin-top: 200rpx;

	}

	.diqu {
		height: 50rpx;
		width: 50rpx;
		margin-top: 200rpx;
		margin-left: 350rpx;
		margin-right: auto;
	}

	.xiaoheif {
		height: 50rpx;
		width: 50rpx;
		margin-top: 200rpx;
		margin-left: 500rpx;
		margin-right: auto;
	}

	.sex {
		height: 50rpx;
		width: 50rpx;
		margin-top: 200rpx;
		margin-left: 550rpx;
		margin-right: auto;
	}

	.touxiang {
		top: 10rpx;
		margin-bottom: 200rpx;
	}

	.logo1 {
		margin-top: 50rpx;
		height: 100rpx;
		width: 100rpx;
		margin-left: 500rpx;
		margin-bottom: 20rpx;
	}

	.logo2 {
		height: 50rpx;
		width: 30rpx;
		margin-left: 10rpx;
		margin-top: 0rpx;
		margin-bottom: 20rpx;
	}

	.logo3 {
		height: 50rpx;
		width: 30rpx;
		margin-left: 20rpx;
		margin-right: auto;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.text-area {
		margin-left: 200rpx;
		margin-right: auto;
		margin-bottom: 50rpx;
		font-size: 36rpx;
		color: #8f8f94;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
