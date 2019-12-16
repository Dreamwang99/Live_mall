<template>
	<view>
		<view class="beijing">
			<view class="zi">致力为您提供专业，高效，高品质的服务欢迎您提供宝贵的意见和建议</view>
			<view class="fankui">
				反馈类型
			</view>
			<view class="heng">
				<view class="kuang" :class="[current === index ? 'ac' : '']" v-for="(item,index) in pj" :key="index" @tap="chose(index,item.name)">{{item.name}}</view>
			</view>
		</view>
		<view class="middle">
			<textarea class="yijian" v-model="content" type="text" placeholder="说说您的意见吧!" value=""></textarea>
			<image class="zhaopian" :src="imagesUrl" @tap="choseImages()" mode=""></image>
		</view>
		<view class="beijing2">
			<button class="tijiao" type="primary" @tap="submit()">提交</button>
		</view>

	</view>
</template>

<script>
	import bridge from '@/common/unfile/unfile.js';
	export default {
		data() {
			return {
				pj: [{
						name: '服务态度'
					},
					{
						name: '物流速度'
					},
					{
						name: '付款流程'
					},
					{
						name: '发货售后'
					},
					{
						name: '功能问题'
					},
					{
						name: '其他'
					},
				],
				current : 0,
				choseType : "",
				content : "",
				imagesUrl : '../../static/fabu/img_12-tianjia.png'
			}
		},
		methods: {
			chose(idx,types){
				this.current = idx
				this.choseType = types
			},
			choseImages(){
				bridge.call('uploadImages', "上传投诉照片");
				bridge.register('uploadImagesCallback',(res)=>{
					console.log(res);
					this.imagesUrl = JSON.parse(res)
				});
			},
			submit(){
				this.request.getUserComplain({
					token : uni.getStorageSync('token'),
					title : this.choseType,
					content : this.content,
					image : this.imagesUrl
				}).then(res=>{
					console.log(res);
					if(res.code === 1){
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
						setTimeout(()=>{
							uni.reLaunch({
								url:'/pages/shouye/shouye'
							})
						},2000)
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			}
		}
	}
</script>

<style>
	.beijing {
		width: 100%;
	}

	.beijing2 {
		background-color: #eeeeee;
		height: 455rpx;
		width: 90%;
		margin: auto;
		margin-top: 10%;
	}

	.heng {
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20rpx 10rpx 20rpx 40rpx;
		justify-content: flex-start;
	}

	.middle {
		background: #fff;
		padding: 30rpx;
	}

	.zi {
		font-size: 27rpx;
		text-align: center;
		width: 80%;
		margin: auto;
		padding: 30rpx 0;
		color: #818181;
	}

	.fankui {
		margin-top: 18rpx;
		font-size: 30rpx;
		margin-left: 28rpx;
		border-bottom: 1px solid #CCCCCC;
		padding-bottom: 20rpx;
	}
	

	.kuang {
		margin-top: 20rpx;
		height: 50rpx;
		width: 153rpx;
		border: 1px solid #D9D9D9;
		border-radius: 30rpx;
		font-size: 22rpx;
		line-height: 50rpx;
		color: #7e7e7e;
		text-align: center;
		margin-left: 40rpx;
	}
	.ac{
		border: 1rpx solid #FF0000;
		color: #FF0000;
	}

	.zhaopian {
		height: 145rpx;
		width: 145rpx;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
	}

	.yijian {
		width: 100%;
		color: #666666;
		font-size: 30rpx;
		padding-bottom: 30rpx;
	}

	.tijiao {
		background-color: #f13821;
		height: 81rpx;
		width:100%;
		border-radius: 40rpx;
		font-size: 30rpx;
	}
</style>
