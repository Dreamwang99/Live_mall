<template>
	<view class="logo" :style="{ backgroundImage: 'url(' + '/static/bg.png' + ')' }">
		<view class="zi"></view>
		<view class="text-area">
			<text class="title">手机号</text>
			<input v-model="phoneNumber" class="title2" maxlength="11" type="number" placeholder="请输入手机号"></input>
		</view>
		<view class="text-area">
			<view style="display: flex;width: 70%;">
				<view class="yanzhengma">验证码</view>
				<input class="sr" v-model="verCode" maxlength="6" type="number" placeholder="请输入验证码" ref="runCode" @click="onSubmit"
				 value="" />
			</view>
			<view class="huoqu" v-show="show" @tap="yanzhengma()">获取</view>
			<view class="huoqu" v-show="!show">{{count}}s</view>
		</view>
		<view class="text-area">
			<text class="title">输入新密码</text>
			<input class="title3" type="password" v-model="passwd" placeholder="请输入新密码"></input>
		</view>
		<view>
			<view class="text-area">
				<text class="title">确认新密码</text>
				<input type="password" v-model="passwd1" class="title3" placeholder="请输入新密码"></input>
			</view>
			<button class="denglu" @tap="zhuce()">确定</button>

		</view>


	</view>
</template>

<script>
	import md5 from "@/common/SDK/md5.min.js";
	export default {
		data() {
			return {
				show: true,
				count: '',
				getCodeText: '获取',
				phone: '',
				passdate: '',
				verCode: "",
				phoneNumber: "",
				passwd: "",
				passwd1: "",
			}
		},
		onLoad() {

		},
		methods: {
			//获取验证码
			yanzhengma() {
				const TIME_COUNT = 60;
				if (this.phoneNumber === '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return
				} else if (!(/^1[3456789]\d{9}$/.test(this.phoneNumber))) {
					uni.showToast({
						title: '您输入的手机号格式不正确，请确认',
						icon: 'none'
					})
					return
				}
				this.request.getCode({
					phone: this.phoneNumber
				}).then(res => {
					console.log(res)
					if(res.code*1 === 1){
						uni.showToast({
							title:'发送成功',
							icon:'none'
						})
						this.getCode()
					}else{
						uni.showToast({
							title:'发送失败',
							icon:'none'
						})
					}
				})
			},
			getCode() {
				const TIME_COUNT = 60;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			},
			/* 注册 */
			zhuce() {
				this.request.getforget({
					phone: this.phoneNumber,
					code: this.verCode,
					newpass: this.passwd,
					newspass: this.passwd1
				}).then(res => {
					console.log(res)
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功',
							icon: "none"
						});
						setTimeout(function() {
							uni.navigateBack({
								
							})
						}, 1000)
					} else {
						uni.showToast({
							title:res.msg,
							icon: "none"
						});
					}
				})
			}

		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.denglu {
		background-color: red;
		width: 95%;
		margin: auto;
		height: 80rpx;
		border-radius: 40rpx;
		color: white;
		line-height: 80rpx;
		font-size: 35rpx;
		margin-top: 90rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.zi {
		height: 500rpx;
	}

	.logo {
		height: 1250rpx;
		width: 100%;
		background-size: 100% 100%;
	}

	.logo1 {
		height: 2rpx;
		margin-top: 38rpx;
		margin-bottom: 25rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		background-color: #BBBBBB;
	}

	.logo2 {
		height: 90rpx;
		width: 700rpx;
		margin-top: 0rpx;
		margin-left: 20rpx;
		margin-right: auto;
		margin-bottom: 20rpx;
	}

	.logo3 {
		height: 2rpx;
		width: 250rpx;
		margin-left: 0rpx;
		margin-right: 75rpx;
		margin-top: 45rpx;
		margin-bottom: 20rpx;
	}

	.logo4 {
		height: 2rpx;
		width: 250rpx;
		margin-left: 75rpx;
		margin-top: 45rpx;
		margin-bottom: 20rpx;
	}

	.logo5 {
		height: 75rpx;
		width: 75rpx;
		margin-left: 337rpx;
		margin-top: 52rpx;
		margin-bottom: 145rpx;
	}

	.title2 {
		margin-left: 135rpx;
		margin-right: auto;
		font-size: 28rpx;
		margin-top: 17rpx;
	}

	.title3 {
		margin-left: 81rpx;
		margin-right: auto;
		font-size: 28rpx;
		margin-top: 17rpx;
	}

	.title4 {
		display: flex;
		flex-direction: row;
		font-size: 21rpx;
		color: red;
		margin-top: 30rpx;
		margin-left: 20rpx;
	}

	.register {
		margin-left: 485rpx;
	}

	.text-area {
		display: flex;
		width: 100%;
		justify-content: space-between;
		margin-bottom: 20rpx;
		padding-left: 50rpx;
		border-bottom: 1px solid #eee;
		padding: 20rpx 10rpx 40rpx 20rpx;
	}

	.title {
		margin-top: 17rpx;
		font-size: 30rpx;
		color: #7a7a7a;
	}

	.yanzhengma {
		margin-top: 17rpx;
		/* width:30%; */
		width: 120rpx;
		font-size: 30rpx;
		color: #7a7a7a;
	}

	.sr {
		margin-left: 100rpx;
		width: 275rpx;
		font-size: 28rpx;
		margin-top: 17rpx;
	}

	.huoqu {
		margin-top: 5rpx;
		background-color: red;
		border-radius: 30rpx;
		height: 60rpx;
		margin-left: 0rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		text-align: center;
		padding: 0 40rpx;
		color: #fff;
		margin-right: 30rpx;
	}
</style>
