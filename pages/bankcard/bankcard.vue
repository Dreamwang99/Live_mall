<template>
	<view>
		<view class="safe">为了保障您的资金安全，请提现到本人账户里！</view>
		<view class="flex_row">
			<image class="bank" src="../../static/bank/icon_yhk.png" mode=""></image>
			<input class="account" type="text" v-model="cardno" placeholder="请输入银行卡/支付宝账号"/>
		</view>
		<view class="flex_row">
			<image class="bank" src="../../static/bank/iocn_khh.png" mode=""></image>
			<input class="account" type="text" v-model="bank" placeholder="请输入开户行" />
		</view>
		<view class="confirm" @tap="confirm()">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sum:'',
				bank: '',
				cardno: '',
			}
		},
		onLoad(a) {
			this.sum=a.sum
			console.log(this.sum)
		},
		methods: {
			confirm(){
				if(this.cardno){
					if(!(/\d$/.test(this.cardno))){
						uni.showToast({
							title: '请填写正确银行卡号',
							icon: "none"
						});
						return false;
					}
					if(this.bank){
						
					}else{
						uni.showToast({
							title: '请填写开户银行',
							icon: "none"
						});
						return false;
					}
				}else{
					uni.showToast({
						title: '请填写银行卡号',
						icon: "none"
					});
					return false;
				}
				
				this.request.getApplyWithdrawal({
					token: uni.getStorageSync('token'),
					money: this.sum,
					bank: this.bank,
					account: this.cardno
				}).then(res =>{
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					if(res.code==1){
						setTimeout(function(){
							uni.navigateBack({
								
							})
						},1500)
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
	.flex_row{
		height: 86rpx;
		display: flex;
		flex-direction: row;
		background-color: #fff;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.bank{
		height: 21rpx;
		width: 30rpx;
		margin:0 30rpx;
	}
.safe{
	line-height: 70rpx;
	font-size: 20rpx;
	margin-left: 30rpx;
	color: #C4C4C4;
}
.account{
	font-size: 27rpx;
	width: 70%;
}
.confirm{
	height:69rpx ;
	width:690rpx;
	background-color: #f1301f;
	border-radius: 35rpx;
	color: #FFFFFF;
	line-height: 69rpx;
	text-align: center;
	font-size: 30rpx;
	margin:132rpx auto;
}
</style>
