<template>
	<view>
		<view class="ms">
			<view class="main">
				<view class="mLeft" @tap="uploadVideo">
					<image v-if="show" :src="getInfo.thumb" mode=""></image>
				</view>
				<view class="mRight">
					<textarea placeholder="添加视频描述~" v-model="getDescs" @input="getNums" maxlength="50" />
				</view>
			</view>
			<view class="mNums">
				{{getFontsNums}}/50
			</view>
		</view>
		<view class="sendBtn" @tap="sureSend()">
			确认发布
		</view>
	</view>
</template>

<script>
	import bridge from '@/common/unfile/unfile.js';
	export default {
		data() {
			return {
				getFontsNums : 0,
				getInfo : {
					thumb : "",
					videoUrl : ""
				},
				show : true,
				longitude : "",
				latitude : "",
				city : "",
				getDescs : ""
			}
		},
		methods: {
			getLocation(){
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
					}
				})
			},
			getNums(e){
				this.getFontsNums = e.detail.cursor
				if(e.detail.cursor >= 50){
					uni.showToast({
						title:"最多输入50个字哦",
						icon:'none'
					})
				}
			},
			uploadVideo(){
				bridge.call('uploadVideo', "0");
				bridge.register('uploadVideoCallback',(res)=>{
					console.log(res);
					this.getInfo.thumb = JSON.parse(res).thumb
					this.getInfo.videoUrl = JSON.parse(res).videoUrl
					this.show = false
					this.show = true
				});
			},
			sureSend(){
				this.request.setVideo({
					uid : uni.getStorageSync('id'),
					token : uni.getStorageSync('token'),
					title : this.getDescs,
					thumb : this.getInfo.thumb,
					href : this.getInfo.videoUrl,
					lat : this.latitude,
					lng : this.longitude,
					city : this.city
				}).then(res=>{
					console.log(res);
					if(res.data.code === 0){
						uni.showToast({
							title:"上传成功",
							icon:'none'
						})
						setTimeout(()=>{
							uni.redirectTo({
								url:'/pages/zhibo/zhibo'
							})
						},2000)
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		overflow: hidden;
	}
	.ms{
		height: 360rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		.main{
			width: 92%;
			height: 300rpx;
			display: flex;
			.mLeft{
				width: 34%;
				height: 300rpx;
				background-color: #F0F0F0;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.mRight{
				width: 60%;
				height: 300rpx;
				margin-left: 20rpx;
				textarea{
					width: 100%;
					height: 100%;
					font-size: 28rpx;
				}
			}
		}
		.mNums{
			width: 100rpx;
			height: 50rpx;
			position: absolute;
			bottom: 10rpx;
			right: 20rpx;
			font-size: 26rpx;
			color: #666666;
			line-height: 50rpx;
			text-align: center;
		}
	}
	.sendBtn{
		width: 700rpx;
		height: 90rpx;
		border-radius: 45rpx;
		background-color: #F15226;
		font-size: 30rpx;
		text-align: center;
		line-height: 90rpx;
		color: #FFFFFF;
		margin: 200rpx auto 0;
	}
</style>
