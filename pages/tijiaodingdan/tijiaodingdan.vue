<template>
	<view>
		<!-- 收货地址 -->
		<view class="addr" @tap="selectAddress">
			<view class="icon">
				<image src="../../static/dingdan/icon-4-dw.png" mode=""></image>
			</view>
			<view class="right">
				<view class="tel-name">
					<view class="name">
						{{recinfo.name}}
					</view>
					<view class="tel">
						{{recinfo.tel}}
					</view>
				</view>
				<view class="addres">
					{{recinfo.address.region.label}}
					{{recinfo.address.detailed}}
				</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row,index) in buylist" :key="index">
				<view class="goods-info">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view class="info">
						<view class="title">{{row.name}}</view>
						<view class="spec">选择{{row.spec}} 数量:{{row.number}}</view>
						<view class="price-number">
							<view class="price">￥{{row.price*row.number}}</view>
							
							
						</view>
						
					</view>
					
				</view>
				<view class="heng">
						<view class="se" style="margin-top: 61rpx;">购买数量</view>
						<view class="jian">-</view>
						<view class="shu">{{row.number}}</view>
						<view class="jian jia1">+</view>
					</view>
					<view class="heng">
							<view class="se" style="margin-top: 40rpx;">发配时间</view>
							<view class="se time">{{time}}</view>
						</view>
						<view class="heng">
							<view class="se" style="margin-top: 43rpx;">配送费</view>
							<view class="se mianyou" >快递 免邮</view>
						</view>
						
			</view>
		</view>
		<view class="heng" style="background-color: #FFFFFF;width: 95%;margin-left: 20rpx;">
				<image class="zfb" src="../../static/zhibo/iocn-105-zfb.png" mode="aspectFit"></image>
				<view class="zi">支付宝</view>
				<image class="gou" style="margin-top: 35rpx;" @tap="dianji" :src="dian?'../../static/center/iocn-gou.png':'../../static/center/iocn-20-yuan.png'" mode="aspectFit"></image>
			</view>
			<view class="heng" style="background-color: #FFFFFF;width: 95%;margin-left: 20rpx;">
				<image class="zfb" style="margin-top: 35rpx;" src="../../static/zhibo/iocn-105-wx.png" mode="aspectFit"></image>
				<view class="zi" style="margin-top: 35rpx;">微信</view>
				<image class="gou" style="margin-top: 35rpx;" @tap="dianji" :src="dian?'../../static/center/iocn-gou.png':'../../static/center/iocn-20-yuan.png'" mode="aspectFit"></image>
		</view>
			
		<!-- 提示-备注 -->
	
		<!-- 明细 -->
		<!-- <view class="detail">
			<view class="row">
				<view class="nominal">
					商品金额
				</view>
				<view class="content">
					￥{{goodsPrice|toFixed}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					运费
				</view>
				<view class="content">
					￥+{{freight|toFixed}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					积分抵扣
				</view>
				<view class="content">
					￥-{{deduction|toFixed}}
				</view>
			</view>
		</view> -->
		<view class="blck">
			
		</view>
		
		<view class="footer">
			<view class="heng">
				<button class="pintuan" @tap="togglePopup('bottom', 'dibu')" type="primary">拼团购物</button>
				<button class="pintuan tijiao" type="primary" @tap="toPay">提交订单</button>
			</view>
		
		</view>
		<uni-popup :show="pintuanyaoqing"  type="bottom" >
			<view style="height: 315rpx;background-color: #FFFFFF;">
				<view style="display: flex;flex-direction: row;">
				<image class="xj" src="../../static/iocn-weixin.png" @tap="cancle('wxhy')" ></image>
				<view type="primary" @click="cancle('pyq')"><image class="xj" src="../../static/zhibo/icon-pyq.png" ></view>
				</view>
				<view style="display: flex;flex-direction: row;">
					<view class="xiangcexq">微信好友</view>
					<view class="xiangjips">朋友圈</view>
				</view>
				<view style="height: 1rpx;background-color: #F5F5F5;margin-top: 40rpx;margin-bottom: 40rpx;"></view>
				<view class="quxiao" @tap="cancel('quxiao')">取消</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				dian:false,
				pintuanyaoqing:false,
				buylist:[],		//订单列表
				goodsPrice:0.0,	//商品合计价格
				sumPrice:0.0,	//用户付款价格
				freight:12.00,	//运费
				note:'',		//备注
				int:1200,		//抵扣积分
				deduction:0,	//抵扣价格
				recinfo:{id:1,name:"李二狗",head:"大",tel:"12345678912",address:{region:{"label":"广东省-深圳市-福田区","value":[18,2,1],"cityCode":"440304"},detailed:'深南大道1111号无名摩登大厦6楼A2'},isDefault:true}

			};
		},
		onShow() {
			//页面显示时，加载订单信息
			uni.getStorage({
				key:'buylist',
				success: (ret) => {
					this.buylist = ret.data;
					this.goodsPrice=0;
					//合计
					let len = this.buylist.length;
					for(let i=0;i<len;i++){
						this.goodsPrice = this.goodsPrice + (this.buylist[i].number*this.buylist[i].price);
					}
					this.deduction = this.int/100;
					this.sumPrice = this.goodsPrice-this.deduction+this.freight;
				}
			});
			uni.getStorage({
				key:'selectAddress',
				success: (e) => {
					this.recinfo = e.data;
					uni.removeStorage({
						key:'selectAddress'
					})
				}
			})
		},
		onHide() {
			
		},
		onBackPress() {
			//页面后退时候，清除订单信息
			this.clearOrder();
		},
		filters: {
			toFixed:function(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		methods: {
			dianji(){
				this.dian=!this.dian
			},
			togglePopup(type, open) {
				this.type = type;
				if (open === 'dibu') {
					//头像
					this.pintuanyaoqing = true;
				}
			},
			cancel(type) {
				if (type === 'quxiao') {
					this.pintuanyaoqing = false;
					
				}},
			clearOrder(){
				uni.removeStorage({
					key: 'buylist',
					success: (res)=>{
						this.buylist = [];
						console.log('remove buylist success');
					}
				});
			},
			toPay(){
				//商品列表
				let paymentOrder = [];
				let goodsid=[];
				let len = this.buylist.length;
				for(let i=0;i<len;i++){
					paymentOrder.push(this.buylist[i]);
					goodsid.push(this.buylist[i].id);
				}
				if(paymentOrder.length==0){
					uni.showToast({title:'订单信息有误，请重新购买',icon:'none'});
					return ;
				}
				//本地模拟订单提交UI效果
				uni.showLoading({
					title:'正在提交订单...'
				})
				setTimeout(()=>{
					uni.setStorage({
						key:'paymentOrder',
						data:paymentOrder,
						success: () => {
							uni.hideLoading();
							uni.redirectTo({
								url:"../pay/payment/payment?amount="+this.sumPrice
							})
						}
					})
				},1000)
				
			},
			//选择收货地址
		
			selectAddress(){
				uni.navigateTo({
					url:'../user/address/address?type=select'
				})
			}
		}
	}
</script>

<style lang="scss">
.addr{
	width: 95%;
	padding: 20upx 3%;
	margin: 30upx auto 20upx auto;
	display: flex;
	background-color: #FFFFFF;
	.icon{
		width: 80upx;
		height: 80upx;
		display: flex;
		align-items: center;
		image{
			width: 60upx;
			height: 60upx;
		}
	}
	.tel-name{
		width: 100%;
		display: flex;
		font-size: 23upx;
		.tel{
			margin-left: 40upx;
			color: #c3c3c3;
				font-size: 17rpx;
		}
	}
	.addres{
		width: 100%;
		color: #999;
		font-size: 17rpx;
		margin-top: 5rpx;
	}
}
.buy-list{
	width: 95%;
	padding: 10upx 3%;
	margin: 10upx auto 20upx auto;
	background-color: #FFFFFF;
	.row{
		margin: 30upx 0;
		.goods-info{
			width: 100%;
			display: flex;
			.img{
				width: 22vw;
				height: 22vw;
				border-radius: 10upx;
				overflow: hidden;
				flex-shrink: 0;
				margin-right: 10upx;
				image{
					width: 22vw;
					height: 22vw;
				}
			}
			.info{
				width: 100%;
				height: 22vw;
				overflow: hidden;
				display: flex;
				flex-wrap: wrap;
				position: relative;
				.title{
					width: 100%;
					font-size: 28upx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					// text-align: justify;
					overflow: hidden;
				}
				.spec{
					font-size: 22upx;
					color: #a7a7a7;
					height: 40upx;
					display: flex;
					align-items: center;
					padding: 0 10upx;
					border-radius: 20upx;
					margin-bottom: 20vw;
					margin-top: 5rpx;
				}
				.price-number{
					position: absolute;
					width: 100%;
					bottom: 0upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					font-size: 28upx;
					height: 40upx;
					.price{
						color: #f06c7a;
					}
					.number{
						display: flex;
						justify-content: center;
						align-items: center;
						
					}
				}
			}
		}
	}
}
.order{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
background-color: #FFFFFF;
	border-radius: 20upx;
	.row{
		margin: 20upx 0;
		height: 40upx;
		display: flex;
		.left{
			font-size: 28upx;
		}
		.right{
			margin-left: 40upx;
			font-size: 26upx;
			color: #999;
			input{
				font-size: 26upx;
				color: #999;
			}
		}
	}
}
.blck{
	width: 100%;
	height: 100upx;
}
.footer{
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;
		
		.settlement{
			width: 80%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.sum{
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;
				.money{
					font-weight: 600;
				}
			}
			.btn{
				padding: 0 30upx;
				height: 60upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}
.detail{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	border-radius: 20upx;
	
	.row{
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nominal{
			font-size: 28upx;
		}
		.content{
			font-size: 26upx;
			color: #f06c7a;
		}
	}
}
.xj {
	height: 80rpx;
	width: 80rpx;
	margin-top: 55rpx;
	margin-left: 188rpx;
}
.quxiao{
	text-align: center;
	font-size: 25rpx;
	
}
.xiangcexq{
	margin-top: 22rpx;
	margin-left: 180rpx;
	font-size: 22rpx;
}
.xiangjips{
	margin-top: 22rpx;
	margin-left: 180rpx;
	font-size: 22rpx;
}
.pintuan{
	height: 68rpx;
	width: 240rpx;
	border-radius: 40rpx;
	margin-top: 28rpx;
	margin-bottom: 26rpx;
	font-size: 25rpx;
	line-height: 68rpx;
	background-color: #f14c25;
	margin-left: 70rpx;
}
.gou{
	height: 30rpx;
	width: 30rpx;
	margin-top:54rpx ;
	margin-left: auto;
	margin-right: 23rpx;
}
.tijiao{
	background-color:#f2ae3d;
	margin-left: 133rpx;
}
.heng{
	display: flex;
	flex-direction: row;
}
.se{
	margin-top:32rpx ;
	margin-left: 16rpx;
	font-size: 20rpx;
}
.yanse{
	margin-top:32rpx ;
	font-size: 20rpx;
}
.jia{
	color: #ff4446;
	font-size: 23rpx;
	margin-top: 32rpx;
	margin-left: 16rpx;
}
.jian{
	font-size: 21rpx;
	margin-left: 460rpx;
	margin-top:61rpx;
}
.shu{
	width:42rpx ;
	height: 42rpx;
	font-size: 21rpx;
	margin-left: 15rpx;
	margin-top:58rpx;
	background-color: #F5F5F5;
	line-height: 42rpx;
	text-align: center;
}
.jia1{
	margin-left: 15rpx;
	color: #000000;
}
.mianyou{
	
	
	margin-left: 450rpx;
	
}
.time{
	margin-left: 366rpx;
}
.zfb{
	height: 30rpx;
	width: 30rpx;
	margin-top:54rpx ;
	margin-left: 20rpx;
	
}
.gou{
	height: 30rpx;
	width: 30rpx;
	margin-top:54rpx ;
	margin-left: auto;
	margin-right: 23rpx;
}
.zi{
	font-size: 20rpx;
	margin-left:10rpx ;
	margin-top: 54rpx;
}
</style>
