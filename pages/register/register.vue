<template>
	<view class="logo" :style="{ backgroundImage: 'url(' + '/static/bg.png' + ')' }">
		<view class="zi"></view>
		<view class="text-area">
			<text class="title">手机号</text>
			<input name="phonenumber" type="number" maxlength="11" v-model="phoneNumber" class="title2" placeholder="请输入手机号"></input>
		</view>
		<view class="logo1"></view>
		<view class="text-area">
			<text class="title">密码</text>
			<input v-model="passwd" password="true" type="text" class="title3" placeholder="请输入密码"></input>
		</view>
		<view>
			<view class="logo1"></view>
			<view class="denglu" @tap="denglu1">登录</view>
			<view class="title4">
				<text @tap="zhuce">注册新用户</text>
				<text @tap="mima">忘记大密码</text>
			</view>
		</view>
		<view class="bottom">
			<view class="logo3"></view>
			<text class="kuaijie">快捷登录</text>
			<view class="logo3"></view>
		</view>
		<view>
			<image class="logo5" @click="wxLogin()" src="/static/register/iocn-weixin.png"></image>
		</view>
	</view>
</template>

<script>
	// import bridge from '@/common/unfile/unfile.js';
	export default {
		components: {
			// bridge
		},
		data() {
			return {
				phoneNumber: '19666666666',
				passwd: '123456',
				weixinId: ""
			}
		},
		onLoad() {
			console.log(this.test.openId);
			if(uni.getStorageSync('token')==''){
				
			}else{
				uni.switchTab({
					url:'../shouye/shouye'
				})
			}
		},
		methods: {
			denglu1() {
				uni.hideKeyboard();
				// 验证手机号码
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) {
					uni.showToast({
						title: '请填写正确手机号码',
						icon: "none"
					});
					return false;
				}


				//模板示例比对本地储存的用户信息，实际使用中请替换为上传服务器比对。
				setTimeout(() => {
					uni.request({
						url: 'http://zhibo.a2w0m.cn/api/public/?service=Login.UserLogin',
						method: "POST",
						header: {
							'content-type': 'application/x-www-form-urlencoded',
				
							/* 	"content-type":"application/json;charset=UTF-8", */
						},
						data: {
							user_login: this.phoneNumber,
							user_pass: this.passwd,
						},
						success: (res) => {
							console.log(res)
							if (res.data.data.code === 0) {
								uni.showToast({
									title: '登录成功',
									icon: "none"
								});
								uni.setStorageSync('token',res.data.data.info[0].token)
								uni.setStorageSync('id',res.data.data.info[0].id)
								var userInfor = res.data.data.info[0]
								// bridge.call('login', userInfor);	
								uni.setStorageSync('userInformation', userInfor)
								const value = uni.getStorageSync('userInformation');
								uni.switchTab({
									url: '../shouye/shouye'
								})
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: "none"
								});
							}
						}
					})
				}, 1000)
			},
			/* 微信登录 */
			wxLogin() {
				bridge.call('weChatLogin', "微信登录");
				bridge.register('weChatLoginCallback',(r)=>{
					var getInfo = JSON.parse(r);
					this.request.getwxlogin({
						openid : getInfo.openid,
						type : 'wechat',
						nicename : getInfo.nickname,
						avatar : getInfo.avatar,
						sign : '',
						source : '',
						pushid : ''
					}).then(res=>{
						console.log(res);
						if(res.data.code === 0){
							uni.setStorageSync('token',res.data.info[0].token)
							uni.setStorageSync('id',res.data.info[0].id)
							var userInfor = res.data.info[0]
							bridge.call('weChatLoginSuccess', userInfor);
							uni.setStorageSync('userInformation', userInfor)
							const value = uni.getStorageSync('userInformation');
							uni.showToast({
								title:"登录成功",
								icon:'none'
							})
							setTimeout(()=> {
								uni.switchTab({
									url: '../shouye/shouye'
								})
							}, 2000)
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							});
						}
					})
				});
				// var $this = this
				// uni.login({
				// 	provider: 'weixin',
				// 	success: (infoRes) => {
				// 		console.log(infoRes);
				// 		uni.getUserInfo({
				// 			provider: 'weixin',
				// 			success: (infoRes) => {
				// 				console.log(infoRes);
				// 				console.log(infoRes.userInfo.gender)
				// 				console.log(infoRes.userInfo.nickName)
				// 				console.log(infoRes.userInfo.avatarUrl)
				// 				console.log(infoRes.userInfo.openId)
				// 				$this.getwechat(infoRes.userInfo.gender,infoRes.userInfo.nickName,infoRes.userInfo.avatarUrl,infoRes.userInfo.openId)
				// 			}
				// 		});
				// 	},
				// 	fail: error => {
				// 		uni.showModal({
				// 			title: '提示',
				// 			content: '微信登陆发生了错误',
				// 			success: (data) => {
				// 				console.log(data);
				// 			}
				// 		})
				// 	}
				// })
			},
			getwechat(gender,nickName,avatarUrl,openid){
				console.log(openid)
				this.request.getwxlogin({
					nickname: nickName,
					gender: gender,
					avatar: avatarUrl,
					openid: openid,
					type: "wechat",
					source: "app"
				}).then(res => {
					console.log(res)
					console.log(this.weixinId);
					if (res.data.code == 0) {
						setTimeout(function() {
							uni.switchTab({
								url: '../shouye/shouye'
							})
						}, 1000)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						});
						console.log('登录失败');
					}
				})
			},
			zhuce() {
				uni.hideKeyboard()
				uni.navigateTo({
					url: '../../pages/register2/register2'
				})
			},
			mima() {
				uni.hideKeyboard()
				uni.navigateTo({
					url: '../../pages/password/password'
				})
			},
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.denglu {
		background-color: red;
		width: 93%;
		height: 80rpx;
		border-radius: 40rpx;
		color: white;
		line-height: 80rpx;
		font-size: 35rpx;
		margin: 90rpx auto;
		text-align: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.zi {
		height: 520rpx;
	}

	.logo {
		height: 100%;
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
		margin-top: 45rpx;
		margin-bottom: 20rpx;
		background-color: #BBBBBB;
		width: 30%;
	}

	.logo4 {
		height: 2rpx;
		margin-left: 75rpx;
		margin-right: 0rpx;
		margin-top: 45rpx;
		margin-bottom: 20rpx;
		background-color: #BBBBBB;
		width: 255rpx;
	}

	.bottom {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.logo5 {
		height: 71rpx;
		width: 71rpx;
		display: block;
		margin: auto;
		margin-top: 52rpx;
		margin-bottom: 145rpx;
	}

	.title2 {
		width: 80%;
		font-size: 30rpx;
		margin-top: 17rpx;
	}

	.title {
		width: 20%;
		margin-top: 17rpx;
		font-size: 30rpx;
		color: #494949;
	}

	.title3 {
		width: 80%;
		font-size: 28rpx;
		margin-top: 17rpx;
	}

	.title4 {
		display: flex;
		flex-direction: row;
		font-size: 24rpx;
		color: red;
		margin-top: 30rpx;
		margin-left: 20rpx;
		justify-content: space-between;
		margin-right: 20rpx;
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
	}

	.kuaijie {
		margin-top: 28rpx;
		font-size: 26rpx;
		color: #949494;
		width:30%;
		text-align: center;
	}
</style>
