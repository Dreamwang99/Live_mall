<template>
	<view class="content wrap">
		<!-- 顶部 -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- 头部 -->
		<view class="head">
			<image src="../../static/home_page/affirm/btn_enter.png" mode="" class="hdimg" @tap="back()"></image>
			<view class="hedtext">购物车</view>
			<view class="hdbtn" @tap="edit()" v-show="dianji==0">编辑</view>
			<view class="hdbtn" v-show="dianji==1" @tap="edit()">完成</view>
		</view>
		<!-- 购物车信息 -->
		<view class="middle">
			<view class="matter" v-for="(list,l_idx) in arr" :key='l_idx'>
				<view class="mdltop">
					<view class="notStoreChose" :class="{'isStoreChose' : list.storeChose}" @tap="choseStore(list)"></view>
					<view class="shop">{{list.business_name}}</view>
				</view>
				<view class="matters" v-for="(item,g_idx) in list.goods_list" :key='g_idx'>
					<view class="intro">
						<view class="notGoodsChose" :class="{'isGoodsChose' : item.goodsChose}" @tap="choseGoods(list,item)"></view>
						<image :src="item.goods_logo" mode="" class="intimg" @tap="product(item.goods_id)"></image>
						<view class="inttext">
							<view class="referral" @tap="product(item.goods_id)">{{item.goods_title}}</view>
							<view class="intbtn" v-if="item.goods_spec" @tap="product(item.goods_id)">
								{{item.goods_spec}};
								<!-- <view>{{item.list}}</view> -->
							</view>
							<view class="intnext">
								<view class="money">{{item.price_selling}}</view>
								<view class="case">
									<view class="block" @tap="changeCount(item,-1)">-</view>
									<view class="block">{{item.number_goods}}</view>
									<view class="block" @tap="changeCount(item,1)">+</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="base">
			<view class="base_left" @tap="checkAll()">
				<view class="notChoseAll" :class="{'isChoseAll' : isCheckAll}"></view>
				<view class="all">全选</view>
			</view>
			<view class="base_right">
				<view class="total" v-show="dianji==0"><text class="totaladd">合计: </text>￥{{allPrice}}</view>
				<view class="Clearing" @tap="Settlement()" v-show="dianji==0">结算({{allCount}})</view>
				<view class="Clearing" v-show="dianji==1" @tap="strike_out()">删除</view>
			</view>
		</view>
	</view>
</template>

<script>
	let car_id;
	export default {
		data() {
			return {
				current: 0,
				arr: [{
						storeName: '莫丽尔旗舰店',
						storeChose: false,
						checkedCount: 0,
						goodsList: []
					},
					{
						storeName: '莫丽尔旗舰店',
						storeChose: false,
						checkedCount: 0,
						goodsList: []
					}
				],
				// 全选
				isCheckAll: false,
				// 店铺数量
				allShops: 0,
				// 总价格
				allPrice: 0,
				//被选中的产品数量
				allCount: 0,
				getimgaddress: '',
				dianji: 0,
				goods_id: [],
				switch1: true,
				page: 1,
				carid: '',
				buyGnum: '',
				goods_spec:[]
			}
		},
		watch: { //深度监听所有数据，每次改变重新计算总价和总数
			arr: {
				deep: true,
				handler(val, oldval) {
					this._totalPrice()
					this._totalCount()
				}
			}
		},
		onLoad() {
			console.log(222223)
			// this.getimgaddress = this.request.BASE_URL1
			// console.log(this.getimgaddress)
			// this.getcart()
		},
		onShow() {
			this.getcart()
			this.goods_id = []
			this.goods_spec = []
		},
		methods: {
			fixNum(e, id) {
				console.log(e)
				console.log(id)
				this.grtcarnumber(e,id)
				// this.fixCost()
			},
			getcart() {
				this.request.lookshopcar({
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res);
					if (res.code == 1) {
						res.data.forEach((i) => {
							i.storeChose = false
							i.checkedCount = 0
							i.goods_list.forEach((j) => {
								j.goodsChose = false
							})
						})
						this.arr = res.data
					} else {
						this.switch1 = false
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none'
						})
					}
				})
			},
			//批量创建订单
			Settlement() {
				console.log(this.arr)
				this.id= []	
				this.arr.forEach((val, idx) => {
					console.log(val)
					val.goods_list.forEach((val2, idx2) => {
						console.log(val2.id)
						if (val2.goodsChose) {
							this.id[this.id.length] = val2.id
						}
					})
				})
				uni.setStorageSync("id", this.id)
				console.log(this.id)
				if(this.id != ''){
					uni.navigateTo({
						url: `../dingdantijiao/dingdantijiao?id=${this.id}&goods_type=5`
					})
				}
			},
			//查看商品详情
			product(goods_id) {
				console.log(goods_id)
				uni.navigateTo({
					url: '../dingdantijiao/dingdantijiao?goods_id=' + goods_id
				})
			},
			//编辑购物车
			edit() {
				if (this.dianji == 0) {
					this.dianji = 1
				} else {
					this.dianji = 0
				}
			},
			//删除购物车
			strike_out() {
				console.log(this.arr)
				this.goods_spec=[]
				this.goods_id=[]
				this.arr.forEach((val, idx) => {
					console.log(val)
					val.goods_list.forEach((val2, idx2) => {
						console.log(val2.goods_id)
						if (val2.goodsChose) {
							this.goods_id[this.goods_id.length] = val2.goods_id
						}
						console.log(val2.goods_spec)
						if (val2.goodsChose) {
							this.goods_spec[this.goods_spec.length] = val2.goods_spec
						}
					})
				})
				this.request.delshopcar({
					token: uni.getStorageSync('token'),
					goodsid:this.goods_id,
					spec:this.goods_spec
				}).then(res=>{
					console.log(res)
					this.getcart()
				})
			},
			back() {
				uni.navigateBack({

				})
			},
			//购物车数量加减
			changeCount(item, way) { //判断way的值为1还是-1
				console.log(item)
				if (way > 0) {
					item.number_goods++
				} else {
					item.number_goods--
					if (item.number_goods < 1) {
						item.number_goods = 1
					}
				}
				
				this.request.changeshopcar({
					token: uni.getStorageSync('token'),
					goodsid:item.goods_id,
					spec:item.goods_spec,
					number:item.number_goods
				}).then(res=>{
					console.log(res)
				})
				// uni.request({
				// 	url: this.baseUrl + '/tpapi/cart/ex',
				// 	method: "POST",
				// 	data: {
				// 		cart_id:item.car_id,
				// 		num:item.num
				// 	},
				// 	header: {
				// 		'content-type': 'application/x-www-form-urlencoded',
				// 		'token': uni.getStorageSync('token') //自定义请求头信息
				// 	},
				// 	success: (res) => {
				// 		console.log(res);
				// 		if (res.data.code == 200) {

				// 		} else {

				// 		}
				// 	}
				// });
			},

			//选择整个商店的商品
			choseStore(list) { //与单选商品类似
				!list.storeChose ? this._shopTrue(list) : this._shopFalse(list)
			},
			_shopTrue(list) { //遍历商店每一个商品，状态为false的改变为true，又在_checkTrue()方法中将商店状态改为true
				list.goods_list.forEach((pro) => {
					pro.goodsChose === false ? this._checkTrue(list, pro) : ''
				})
			},
			_shopFalse(list) {
				list.goods_list.forEach((pro) => { //同上
					pro.goodsChose === true ? this._checkFalse(list, pro) : ''
				})
			},

			//选择单个商品
			choseGoods(list, item) { //为未选中的时候改变为true，反之为true
				!item.goodsChose ? this._checkTrue(list, item) : this._checkFalse(list, item)
			},
			_checkTrue(list, item) {
				item.goodsChose = true //改变状态为true
					++list.checkedCount == list.goods_list.length ? list.storeChose = true : ''
				//每选中一个商品，被选中的商品数加一，如果数值等于商品数，商店的全选状态为true
				list.storeChose ? ++this.allShops === this.arr.length ? this.isCheckAll = true : this.isCheckAll = false : ''
				//当商店全选状态，每全选一个商店，被选中商店数加一，数值等于所有商店数，全选状态为true
			},
			_checkFalse(list, item) {
				item.goodsChose = false //改变状态为false
					--list.checkedCount //被选中的商品数减一
				if (list.storeChose) {
					list.storeChose = false //当商店状态为选中时改变false
						--this.allShops //商店数减一
				}
				this.isCheckAll = false //全选状态为false
			},
			//选择全部商店的商品，已经计算总价和总数量的函数
			checkAll() { //方法内调用方法
				this.isCheckAll = !this.isCheckAll
				this.isCheckAll ?
					this.arr.forEach((list) => {
						this._shopTrue(list)
					}) :
					this.arr.forEach((list) => {
						this._shopFalse(list)
					})
			},
			_totalPrice() { //每次调用此方法，将初始值为0，遍历价格并累加
				this.allPrice = 0
				this.arr.forEach((list) => {
					let products = list.goods_list
					products.forEach((item) => {
						if (item.goodsChose) {
							this.allPrice += item.price_selling * item.number_goods
						}
					})
				})
			},
			_totalCount() { //同上
				this.allCount = 0
				this.arr.forEach((list) => {
					this.allCount += list.checkedCount
				})
			}
		}
	}
</script>

<style >
	page {
		background-color: #F5F5F5;
	}

	.content {}

	/* 顶部 */
	.status_bar {
	  height: var(--status-bar-height);
	  width: 100%;
	  background-color: #FFFFFF;
	 }
	
	 .top_view {
	  height: var(--status-bar-height);
	  width: 100%;
	  position: fixed;
	  background: -webkit-gradient(linear, 0 0, 100% 100%, from(#fff), to(#fff));
	  top: 0;
	  z-index: 999;
	 }

	/* 头部 */
	.head {
		display: flex;
		flex-direction: row;
		width: 750rpx;
		height: 88rpx;
		line-height: 88rpx;
		background-color: #FFFFFF;
		justify-content: space-between;
		/* // position: fixed;
		// top: 0rpx; */
		z-index: 999999999;
	}

	.hdimg {
		margin-top: 30rpx;
		margin-left: 20rpx;
		width: 20rpx;
		height: 36rpx;
	}

	.hedtext {
		font-size: 36rpx;
		color: #232323;
	}

	.hdbtn {
		color: #818181;
		font-size: 30rpx;
		margin-right: 25rpx;
	}

	/* 购物车信息 */
	.middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 100rpx;
		margin-top: 85rpx;
	}

	.mdltop {
		display: flex;
		flex-direction: row;
	}

	.notChoseAll {
		width: 28rpx;
		height: 28rpx;
		margin: 35rpx 0 0 30rpx;
		background-image: url(../../static/baycar/iocn-22-wxz.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.isChoseAll {
		width: 28rpx;
		height: 28rpx;
		margin: 35rpx 0 0 30rpx;
		background-image: url(../../static/baycar/iocn--22-gou.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.notStoreChose {
		width: 28rpx;
		height: 28rpx;
		margin: 20rpx 0 0 40rpx;
		background-image: url(../../static/baycar/iocn-22-wxz.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.isStoreChose {
		width: 28rpx;
		height: 28rpx;
		margin: 20rpx 0 0 40rpx;
		background-image: url(../../static/baycar/iocn--22-gou.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.notGoodsChose {
		width: 28rpx;
		height: 28rpx;
		margin-top: 20rpx;
		margin-right: 35rpx;
		background-image: url(../../static/baycar/iocn-22-wxz.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.isGoodsChose {
		width: 28rpx;
		height: 28rpx;
		margin-top: 20rpx;
		margin-right: 35rpx;
		background-image: url(../../static/baycar/iocn--22-gou.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.matter {
		margin-top: 5rpx;
		width: 710rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin-top: 20rpx;
	}

	.shop {
		color: #232323;
		font-size: 26rpx;
		margin-top: 20rpx;
		margin-left: 35rpx;
	}

	.intro {
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
		margin-left: 45rpx;
		position: relative;
	}

	.intimg {
		width: 193rpx;
		height: 193rpx;
		margin-bottom: 10rpx;
	}

	.inttext {
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.referral {
		width: 318rpx;
		font-size: 26rpx;
		color: #232323;
	}

	.intbtn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 180rpx;
		height: 40rpx;
		font-size: 20rpx;
		margin-top: 15rpx;
		color: #797979;
		background-color: #f5f5f5;
		border-radius: 10rpx;
	}

	.intnext {
		display: flex;
		justify-content: space-between;
		width: 400rpx;
		line-height: 45rpx;
		margin-top: 15rpx;
	}

	.money {
		color: #f23d3d;
		font-size: 28rpx;
	}



	.all {
		color: #686868;
		font-size: 24rpx;
		margin-left: 15rpx;
	}

	.total {
		font-size: 30rpx;
		color: #f23d3d;
		margin-right: 18rpx;
	}

	.totaladd {
		color: #000000;
	}

	.Clearing {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 180rpx;
		height: 60rpx;
		font-size: 30rpx;
		color: #ffffff;
		background-color: #f23d3d;
		margin-top: 20rpx;
		margin-right: 20rpx;
		border-radius: 50rpx;
	}

	.case {
		display: flex;
		flex-direction: row;
		/* position: absolute; */
		right: 20rpx;
		bottom: 20rpx;
		/* z-index: 999; */
		width: 136rpx;
		height: 42rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* 底部 */
	.base {
		display: flex;
		justify-content: space-between;
		width: 750rpx;
		height: 98rpx;
		line-height: 98rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 100rpx;
		z-index: 99999999999;
	}

	.base_left {
		display: flex;
		flex-direction: row;
	}

	.base_right {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.block {
		width: 30%;
		height: 100%;
		font-size: 22rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
