<template>
	<view class="content">
		<view class="hao">
			<view class="phone">手机号</view>
			<input class="shuru" placeholder="请输入手机号" type="text" value="" v-model="model"/>
		</view>
		<view class="xian"></view>
		<view class="hao">
			<view class="phone">验证码</view>
			<input class="shuru" placeholder="请输入验证码" type="text" value="" v-model="code"/>
			<view class="huoqu" v-show="show" @tap="gain()">获取</view>
			<view class="huoqu" v-show="!show" >{{count}}s</view>
		</view>
		<view class="xian"></view>
		<view class="hao">
			<view class="phone">输入密码</view>
			<input class="shuru" placeholder="请输入密码" type="password" value="" v-model="passwd"/>
		</view>
		<view class="xian"></view>
		<view class="hao">
			<view class="phone">确认密码</view>
			<input class="shuru" placeholder="请确认密码" type="password" value="" v-model="pwd"/>
		</view>
		<view class="qd" @tap="next()">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model:'',
				code:'',
				passwd:'',
				pwd:'',
				show:true,
				count:''
			}
		},
		methods: {
			//获取验证码
			gain() {
				const TIME_COUNT = 60;
				if (this.model === '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return
				} else if (!(/^1[3456789]\d{9}$/.test(this.model))) {
					uni.showToast({
						title: '您输入的手机号格式不正确，请确认',
						icon: 'none'
					})
					return
				}
				this.request.getCode({
					phone: this.model
				}).then(res => {
					console.log(res)
					this.getCode()
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
			next(){
				this.request.getchangepwd({
					phone: this.model,
					code: this.code,
					token: uni.getStorageSync('token'),
					newpass: this.passwd,
					newspass: this.pwd
				}).then(res => {
					console.log(res)
					if(res.code == 1){
						uni.showToast({
							title: '修改成功',
							icon: "none",
						});
						setTimeout(function() {
							uni.navigateBack({
								
							})
						}, 1000)
					}else{
						uni.showToast({
							title: res.msg,
							icon: "none",
						});
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.content{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-top: 13rpx #F5F5F5 solid;
	}
	.hao {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #FFFFFF;
		width: 750rpx;
	}
	.phone{
		margin-left: 75rpx; 
		line-height: 99rpx;
		font-size: 30rpx;
		width: 200rpx;
	}
	.shuru{
		font-size: 30rpx;
		width: 300rpx;
	}
	.huoqu{
		text-align: center;
		background-color: red;
		border-radius:30rpx ;
		height: 55rpx;
		line-height: 55rpx;
		width: 150rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		margin-right: 25rpx;
		font-weight: 100;
	}
	.qd{
		font-size: 35rpx;
		border-radius: 40rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-color: red;
		color: #FFFFFF;
		width: 600rpx;
		text-align: center;
		margin-top: 140rpx;
	}
	.xian{
		width: 710rpx;
		height: 2rpx;
		background-color: #C4C4C4;
	}
</style>
