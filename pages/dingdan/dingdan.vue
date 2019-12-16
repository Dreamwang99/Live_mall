<template>
	<view>
		<view class="topTabBar" :style="{position:headerPosition,top:headerTop}">
			<view class="grid" v-for="(grid,tbIndex) in orderType" :key="tbIndex" @tap="showType(tbIndex)">
				<view class="text" :class="[tbIndex==tabbarIndex?'on':'']">{{grid}}</view>
			</view>
		</view>
		<view class="order-list">
			<view class="list">
				<view class="onorder" v-if="t.length==0">
					<view class="text">
						没有相关订单
					</view>
				</view>
				<view class="row" v-if="t.length>0" v-for="(row,index) in t" :key="index">
					<view class="type">
						<image class="level" src="../../static/dingdan/iocn-29-dp.png" mode=""></image>{{row.business_name}}
					</view>
					<view class="order-info" v-for="(list,idx) in row.goods_list" :key="idx" @tap="godetail(row)">
						<view class="left">
							<image :src="list.goods_logo"></image>
						</view>
						<view class="right">
							<view class="name">
								{{list.goods_title}}
							</view>
							<view class="spec">{{list.goods_spec}}</view>
							<view class="prices">
								￥{{list.price_real}}
							</view>
						</view>
						<view class="number">X{{list.number_goods}}</view>
					</view>
					<view class="btns">
						<block v-if="row.status*1 === 1">
							<view class="default" @tap="cancel(row.order_no)">取消</view>
							<view class="pay">付款</view>
						</block>
						<block v-if="row.status*1 === 2">
							<view class="default" @tap="chakanwuliu(row.business_order_no)">物流查询</view>
							<view class="pay" @tap="cuifa(row.business_order_no)">催发货</view>
						</block>
						<block v-if="row.status*1 === 3">
							<view class="default" @tap="chakanwuliu(row.business_order_no)">物流查询</view>
							<view class="pay" @tap="shouhuo(row.business_order_no)">确定</view>
						</block>
						<block v-if="row.status*1 === 4">
							<view class="default" @tap="chakanwuliu(row.business_order_no)">物流查询</view>
							<view class="pay" @tap="gopingjia(row.business_order_no)">去评价</view>
						</block>
						<block v-if="row.status*1 ===6||row.status*1 ===7">
							<view class="pay" @tap="seeDetil(row)">查看详情</view>
						</block>
						<block v-if="row.status*1 ===5">
							<view class="default" @tap="chakanwuliu(row.business_order_no)">物流查询</view>
							<view class="pay" @tap="again(row.business_order_no)">再来一单</view>
						</block>
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
				current: 0,
				t: [],
				receive: '',
				page: 1,
				size: 10,
				headerPosition: "fixed",
				headerTop: "0px",
				orderType: ['待付款', '待发货', '待收货', '待评论', '退款', '已完成'],
				//订单列表 演示数据
				list: [],
				tabbarIndex: 0,
				userId: "",
				state: ""
			}
		},
		onLoad(option) {

			this.tabbarIndex = option.tbIndex;
			this.request.getorder({
				token: uni.getStorageSync('token'),
				status: parseInt(this.tabbarIndex) + 1
			}).then(res => {
				console.log(res)
				this.t = res.data
				this.t.forEach((val) => {
					this.orderid = val.order_no
				})
			})
			// #ifdef H5
			let Timer = setInterval(() => {
				let uniHead = document.getElementsByTagName('uni-page-head');
				if (uniHead.length > 0) {
					this.headerTop = uniHead[0].offsetHeight + 'px';
					clearInterval(Timer); //清除定时器
				}
			}, 1);
			// #endif

		},
		onPageScroll(e) {
			return;
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
		},
		methods: {
			gopingjia(business_order_no) {
				uni.navigateTo({
					url: '../fapingjia/fapingjia?business_order_no=' + business_order_no
				})
			},
			godetail(row) {
				if (row.status == 1) {
					uni.navigateTo({
						url: '../daifu/daifu?order_no=' + row.order_no
					})
				} else if (row.status == 2) {
					uni.navigateTo({
						url: '../daifa/daifa?business_order_no=' + row.business_order_no
					})
				} else if (row.status == 3) {
					uni.navigateTo({
						url: '../daishou/daishou?business_order_no=' + row.business_order_no
					})
				} else if (row.status == 4) {
					uni.navigateTo({
						url: '../daiping/daiping?business_order_no=' + row.business_order_no
					})
				} else if (row.status == 6 || row.status == 7) {
					uni.navigateTo({
						url: '../tuikuan/tuikuan?business_order_no=' + row.business_order_no
					})
				} else if (row.status == 5) {
					uni.navigateTo({
						url: '../wancheng/wancheng?business_order_no=' + row.business_order_no
					})
				}
			},
			showType(tbIndex) {
				var tbIndex2 = tbIndex;
				var status = tbIndex + 1
				this.request.getorder({
					token: uni.getStorageSync('token'),
					status: status
				}).then(res => {
					console.log(res)
					this.t = res.data
					this.t.forEach((val) => {
						this.orderid = val.order_no
					})
				})
				if (tbIndex == 1) {
					tbIndex2 = 0;
				}
				if (tbIndex == 0) {
					tbIndex2 = "";
				}
				this.state = tbIndex2;
				this.tabbarIndex = tbIndex;
			},

			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			cuifa(business_order_no) {
				this.request.pushDelivery({
					token: uni.getStorageSync('token'),
					business_order_no: business_order_no
				}).then(res => {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				})
			},
			shouhuo(business_order_no) {
				this.request.confirmReceiving({
					token: uni.getStorageSync('token'),
					business_order_no: business_order_no
				}).then(res => {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.showType(this.tabbarIndex)
				})
			},
			cancel(order_no) {
				this.request.getcancel({
					token: uni.getStorageSync('token'),
					order_no: order_no
				}).then(res => {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.showType(this.tabbarIndex)
				})
			},
			again(business_order_no) {
				this.request.orderAgent({
					token: uni.getStorageSync('token'),
					business_order_no: business_order_no
				}).then(res => {
					if (res.code == 1) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						setTimeout(function(){
							uni.switchTab({
								url: '../gouwuche1/gouwuche1'
							})
						},1500);
					} else {

					}
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})

				})
			},
			seeDetil(row) {
				uni.navigateTo({
					url: '../tuikuan/tuikuan?business_order_no=' + row.business_order_no
				})
			},
			chakanwuliu(business_order_no) {
				uni.navigateTo({
					url: '../chakanwuliu/chakanwuliu?business_order_no=' + business_order_no
				})
			}
		},
	}
</script>
<style lang="scss">
	view {
		background: transparent
	}

	page {
		background-color: #f3f3f3;
	}

	.topTabBar {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #f8f8f8;
		height: 80rpx;
		display: flex;
		background: #fff;
		border-top: 1px solid #eee;
		justify-content: space-around;

		.grid {
			width: 20%;
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #444;
			font-size: 28rpx;

			.text {
				height: 76rpx;
				display: flex;
				align-items: center;

				&.on {
					color: red;
					border-bottom: solid 4upx red;
				}
			}

		}
	}

	.order-list {
		margin-top: 80rpx;
		padding-top: 20rpx;
		width: 100%;

		.list {
			width: 100%;
			margin: 0 auto;

			.onorder {
				width: 100%;
				height: 50vw;
				display: flex;
				justify-content: center;
				align-content: center;
				flex-wrap: wrap;

				image {
					width: 20vw;
					height: 20vw;
					border-radius: 100%;
				}

				.text {
					width: 100%;
					height: 60rpx;
					font-size: 28rpx;
					color: #444;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.row {
				width: 96%;
				margin: auto;
				padding: 10upx 20rpx;
				border-radius: 10rpx;
				background-color: #fff;
				margin-bottom: 20rpx;

				.type {
					font-size: 23rpx;
					color: #ADADAD;
					height: 70rpx;
					display: flex;
					padding-bottom: 10rpx;
					align-items: center;
				}

				.order-info {
					width: 100%;
					display: flex;
					padding-bottom: 10rpx;

					.left {
						flex-shrink: 0;
						width: 193rpx;
						height: 193rpx;

						image {
							width: 193rpx;
							height: 193rpx;
							border-radius: 10rpx;
						}
					}

					.right {
						width: 100%;
						margin-left: 10rpx;
						position: relative;

						.name {
							width: 100%;
							font-size: 28rpx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							padding-bottom: 30rpx;
						}

						.spec {
							color: #a7a7a7;
							font-size: 22rpx;

						}

						.price-number {
							width: 100%;
							display: flex;
							font-size: 22rpx;
							color: #333;
							display: flex;
							align-items: center;

							.price {
								font-size: 24rpx;
								margin-right: 5rpx;
							}

						}
					}
				}

				.detail {
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;
					height: 60rpx;
					font-size: 26rpx;

					.sum {
						padding: 0 8rpx;
						display: flex;
						align-items: flex-end;

						.price {
							font-size: 30rpx;
						}
					}

				}

				.btns {
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					view {
						min-width: 120rpx;
						height: 50rpx;
						padding: 0 20rpx;
						border-radius: 50rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 25rpx;
						margin-left: 20rpx;
					}

					.default {
						border: solid 1upx #ccc;
						color: #CCCCCC;
						width: 150rpx;
						height: 50rpx;
					}

					.pay {
						color: #fff;
						width: 150rpx;
						height: 50rpx;
						background: red;
					}
				}
			}
		}
	}

	.level {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}

	.prices {
		padding-top: 20rpx;
		color: red;
		font-size: 29rpx;
	}

	.number {
		display: flex;
		align-items: center;
	}
</style>
