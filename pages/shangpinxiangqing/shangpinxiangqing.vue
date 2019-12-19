<template>
	<view class="content">
		<view class="swiperbox">
			<image :src="bool == true?require('../../static/iocn-sc.png'):require('../../static/iocn-2-wsc.png')" mode="" @tap="choosecollect()"
			 class="collectimage"></image>
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular='true' class="swiperbox">
				<swiper-item v-for="(list,index) in lunboimg" :key='index'>
					<image :src="list" mode="" class="swiperimg"></image>
				</swiper-item>
			</swiper>
		</view>
		<image src="../../static/back.png" mode="" class="icon1" @tap="backnext()"></image>
		<view class="contentbox">
			<view class="shopmsgbox">
				<view class="shopprice">￥{{goodsdata.shop_price}}</view>
				<view class="shopname">{{goodsdata.title}}</view>
				<view class="shopmsg">
					<view class="sales">月销:{{goodsdata.number_sales}}</view>
					<view class="inventory">库存:{{goodsdata.number_stock-goodsdata.number_sales}}</view>
					<view class="freight">运费:{{postage}}元</view>
				</view>
			</view>
			<view class="parameter" @tap="lookshopdetial()">
				<view class="pMs">
					<view class="p-left">
						商品参数: <text v-for="(sac,index) in goodsdata.specs" :key='index' class="commercialbox">{{sac.name}}</text>
					</view>
					<view class="p-right">
						<image src="../../static/iocn-2-jr.png" mode="" class="nextimg"></image>
					</view>
				</view>
			</view>
			<view class="pepershow">
				<view class="showbox">
					<view class="showtilte" v-if="buylist.count == undefined">买家秀（0}）</view>
					<view class="showtilte" v-else>买家秀（{{buylist.count}}）</view>
					<view class="backbox">
						<view class="showtowtilte" @tap="quanbusolo">查看全部</view>
						<image src="../../static/iocn-2-jr.png" mode="" class="nextimg"></image>
					</view>
				</view>
				<view class="showimgbox">
					<image :src="item.image" mode="" v-for="(item,idx) in buylist.buy" class="showimgsize" :key='idx'></image>
				</view>
			</view>
			<view class="evaluatebox">
				<view class="evaluatetitlebox">
					<view class="evaluatetitleone">宝贝评价（{{shopcommon.count}}）</view>
					<view class="evaluatetitletwobox" @tap="quanbupingjia">
						<view class="valuatetitletwo">查看全部</view>
						<image src="../../static/iocn-2-jr.png" mode="" class="nextimg"></image>
					</view>
				</view>
				<view class="evaluatehumanbox" v-if="shopcommon.count!=0">
					<view class="photobox">
						<image :src="shopcommon.common.avatar || ''" mode="" class="humanimg"></image>
						<view class="humanname">{{shopcommon.common.user_nicename}}</view>
					</view>
					<view class="humanmsg">{{shopcommon.common.content}}</view>
				</view>
			</view>
			<view class="shopdetial">
				<view>————————</view>
				<view>商品详情</view>
				<view>————————</view>
			</view>
			<view class="bigimgbox">
				<rich-text :nodes="shopdetialimg"></rich-text>
			</view>
		</view>
		<!-- 商品参数的弹框 -->
		<view class="blackbox" v-show="showdetial" @tap="closeshopdetial()"></view>
		<view class="whitebox" v-show="showdetial">
			<view class="whiteboxtitle">商品参数</view>
			<view class="whitenamebox" v-for="(item,idx) in colorbox" :key='idx'>
				<view class="whiteboxname">{{item.name}}</view>
				<view class="whiteboxcontent"><text v-for="(itemm,idxx) in item.list" :key='idxx'>{{itemm.name}}/</text></view>
			</view>
			<view class="redbutton" @tap="closeshopdetial()">完成</view>
		</view>
		<!-- 弹框 -->
		<view class="blackbox" v-show="showmsgdetial" @tap="closeshopdetial()"></view>
		<view class="shopdetialmsgbox" v-show="showmsgdetial">
			<view class="shopmsg1">
				<image src="../../static/11.png" mode="" class="shopmsg1img"></image>
				<view class="shoppircebox">
					<view class="pricetitle">￥{{getInfos.price_selling}}</view>
					<view class="repertory">库存{{getInfos.number_stock}}件</view>
				</view>
			</view>
			<view class="shopmsg2">{{goodsdata.title}}</view>
			<view class="shopmsg3" v-for="(color,index) in colorbox" :key='index'>
				<view class="forname">{{color.name}}</view>
				<view class="forcontent">
					<view class="colorbox" :class="{'ac' : col.isChose}" v-for="(col,index1) in color.list" :key='index1' @tap="choseEachKinds(index,index1)">{{col.name}}</view>
				</view>
			</view>
			<view class="shopmsg3" v-if="btnTypes === 4">
				<view class="forname">拼团人数</view>
				<view class="forcontent">
					<view class="colorbox" :class="{'ac' : item.isChose}" v-for="(item,index) in dumpling" :key='index' @tap="choseEachTNms(index)">{{item.name}}</view>
				</view>
			</view>
			<view class="shopmsg4">
				<view class="buynumbername">购买数量</view>
				<add :num='1' @numChange='fixNum($event)'></add>
			</view>
			<view class="shopmsg5">
				<view class="postagename">配送费</view>
				<view class="postagecontent" v-if="postage == '0.00'">快递免邮</view>
				<view class="postagecontent" v-else>邮费:{{postage}}元</view>
			</view>
			<view class="center" v-if="btnTypes === 1" @tap="buyNow()">确定</view>
			<view class="center" v-if="btnTypes === 2" @tap="addMyCar()">确定</view>
			<view class="center" v-if="btnTypes === 3" @tap="cutPrice()">确定</view>
			<view class="center" v-if="btnTypes === 4" @tap="openTuan()">确定</view>
			<view class="center" v-if="btnTypes === 5" @tap="seckill()">确定</view>
		</view>
		<view class="fixedbox">
			<view class="store" @tap="store()">
				<image src="../../static/dingdan/iocn-29-dp.png" mode="" class="storeimg" v-if="showimg == 0"></image>
				<image src="../../static/shopdetial/iocn--2-dp.png" mode="" class="storeimg" v-if="showimg == 1"></image>
				<view class="storename" :class="showimg == 1?'red':''">店铺</view>
			</view>
			<view class="store" @tap="service()">
				<image src="../../static/shopdetial/iocn-2-kf.png" mode="" class="storeimg" v-if="showimg1 == 2"></image>
				<image src="../../static/dingdan/iocn-29-lxkf_61.png" mode="" class="storeimg" v-if="showimg1 == 3"></image>
				<view class="storename" :class="showimg1 == 3?'red':''">客服</view>
			</view>
			<view class="store" @tap="openHidden(4)">
				<image src="../../static/shopdetial/iocn-2-pt.png" mode="" class="storeimg" v-if="showimg2 == 4"></image>
				<image src="../../static/shopdetial/icon_pt.png" mode="" class="storeimg" v-if="showimg2 == 5"></image>
				<view class="storename" :class="showimg2 == 5?'red':''">拼团</view>
			</view>
			<view class="store" @tap="openHidden(3)">
				<image src="../../static/shopdetial/iocn-2-kj.png" mode="" class="storeimg" v-if="showimg3 == 6"></image>
				<image src="../../static/shopdetial/icon_kj.png" mode="" class="storeimg" v-if="showimg3 == 7"></image>
				<view class="storename" :class="showimg3 == 7?'red':''">砍价</view>
			</view>
			<view class="buttons">
				<view class="shoppingcart" @tap="openHidden(2)">加入购物车</view>
				<view class="buy" @tap="openHidden(1)">立即购买</view>
			</view>
		</view>
	</view>
</template>


<script>
	let a = []
	import add from '@/components/add.vue'
	import bridge from '../../common/unfile/unfile.js'
	export default {
		components: {
			add
		},
		data() {
			return {
				// 按钮类型
				btnTypes: -1,
				isChoseColor: "",
				isChoseSize: "",
				getInfos: {
					id: "",
					price_selling: "",
					number_stock: ""
				},
				tPersonNums: 0,
				ptTypes: "",
				showimg: 1,
				specs: "",
				showimg1: 2,
				showimg2: 4,
				showimg3: 6,
				shopid: '',
				lunboimg: [],
				showdetial: false,
				showmsgdetial: false,
				showmsgdetial1: false,
				showmsgdetial2: false,
				colorbox: [],
				current: "",
				goods_specs: '',
				detialname: '',
				shopmsg: '',
				number: 1,
				bool: false,
				shoppricess: '',
				status: '',
				specid: '',
				judges: '',
				goods_idss: '',
				bargain_id: '',
				bargainid: '',
				//买家秀列表
				buylist: [],
				//商品评论信息 1个
				shopcommon: '',
				//商品参数
				goodsparameter: '',
				goodsdata: '',
				choosetype: 0, //购物车的选择弹出
				shopdetialimg: '',
				postage: '', //邮费
				dumpling: [{
						name: '三人团',
						isChose: false
					},
					{
						name: '五人团',
						isChose: false
					}
				],
				currents: -1,
				pintuanid: '', //拼团id
				peoplenumbers: '', //拼团人数
				bargainshopid: '', //店铺id
			}
		},
		onLoad(options) {
			this.token = uni.getStorageSync('token')
			if (options.id == '') {
				this.getdetial()
			} else {
				this.shopid = options.id
			}
			console.log('qweqe')
			this.judges = options.judge
			console.log(options.judge)
			console.log(this.judges)
			if (this.judges * 1 === 2) {
				this.btnTypes = 5
				this.showmsgdetial = true
				this.goods_idss = options.goods_ids
			} else {
				this.judges = 0
			}
			console.log(this.judges)
			this.getshopmsg()
			this.getshopshow()
			this.getcollectList()
			this.getShopCommon()
		},
		methods: {
			// 立即购买
			buyNow() {
				if (this.showToasts()) {
					uni.navigateTo({
						url: "/pages/dingdantijiao/dingdantijiao?goods_type="+"0"+"&id="+this.shopid+"&goods_spec="+this.specs+"&specid="+this.getInfos.id+"&number="+this.number
					})
				}
			},
			// 加入购物车
			addMyCar() {
				if (this.showToasts()) {
					this.request.addshopcar({
						token : uni.getStorageSync('token'),
						goodsid : this.shopid,
						spec : this.specs,
						number : this.number
					}).then(res=>{
						console.log(res);
						if(res.code === 1){
							this.closeshopdetial();
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}else{
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}
					})
				}
			},
			// 砍价
			cutPrice() {
				if (this.showToasts()) {
					this.request.getStart({
						token : uni.getStorageSync('token'),
						goods_id : this.shopid,
						type : 1,
						bargain_id : this.getInfos.id,
						open_people : uni.getStorageSync('id')
					}).then(res=>{
						console.log(res);
						if(res.code === 1){
							this.closeshopdetial();
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:"/pages/kanjia/kanjia?activid="+res.data.activity_id+"&openid="+uni.getStorageSync('id')
								})
							},2000)
						}else{
							this.closeshopdetial();
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}
					})
				}
			},
			// 秒杀
			seckill(){
				if (this.showToasts()) {
					uni.navigateTo({
						url: "/pages/dingdantijiao/dingdantijiao?goods_type="+"2"+"&id="+this.shopid+"&goods_spec="+this.specs+"&specid="+this.getInfos.id+"&goodsid="+this.goods_idss
					})
				}
			},
			backnext() {
				bridge.call('navBack', "页面返回");
				uni.navigateBack({
				})
				console.log('back')
			},
			// 拼团
			openTuan() {
				if (this.showToasts()) {
					uni.navigateTo({
						url: "/pages/dingdantijiao/dingdantijiao?goods_type=" + "4" + "&goods_spec=" + this.specs + "&id=" + this.shopid +
							"&tPeopleNums=" + this.tPersonNums + "&activityid=" + this.getInfos.id + "&types=" + "开团"
					})
				}
			},
			showToasts() {
				if (this.btnTypes === 1 || this.btnTypes === 2 || this.btnTypes === 3) {
					if (!this.isChoseColor) {
						uni.showToast({
							title: "请选择颜色",
							icon: 'none'
						});
						return false;
					} else if (!this.isChoseSize) {
						uni.showToast({
							title: "请选择尺码",
							icon: 'none'
						})
						return false;
					} else {
						return true;
					}
				} else if (this.btnTypes === 4) {
					if (!this.isChoseColor) {
						uni.showToast({
							title: "请选择颜色",
							icon: 'none'
						});
						return false;
					} else if (!this.isChoseSize) {
						uni.showToast({
							title: "请选择尺码",
							icon: 'none'
						})
						return false;
					} else if (!this.tPersonNums === 0) {
						uni.showToast({
							title: "请选择拼团人数",
							icon: 'none'
						})
						return false;
					} else {
						return true;
					}
				}
			},
			openHidden(nums) {
				this.btnTypes = nums
				if (nums === 1 || nums === 2) {
					this.showmsgdetial = true
				} else if (nums === 3) {
					if (!this.bargain_id) {
						uni.showToast({
							title: "此商品不支持砍价",
							icon: 'none'
						})
					} else {
						this.showmsgdetial = true
					}
				} else if (nums === 4) {
					if (!this.pintuanid) {
						uni.showToast({
							title: "此商品不支持拼团",
							icon: 'none'
						})
					} else {
						this.showmsgdetial = true
					}
				}
			},
			choseEachTNms(idx) {
				this.dumpling.forEach((i, i_idx) => {
					if (idx === i_idx) {
						i.isChose = true
						this.ptTypes = i.name
					} else {
						i.isChose = false
					}
				});
				this.getNormalPrice();
			},
			// 普通商品规格
			getNormalPrice() {
				this.goodsdata.lists.forEach((i) => {
					if (this.isChoseColor === i[0].name && this.isChoseSize === i[1].name) {
						this.specs = i[0].key
					}
				})
				if (this.btnTypes === 1 || this.btnTypes === 2) {
					this.request.gitshopspecification({
						goods_id: this.shopid,
						goods_spec: this.specs
					}).then(res => {
						console.log(res);
						if (res.code === 1) {
							this.getInfos.id = res.data.id
							this.getInfos.price_selling = res.data.price_selling
							this.getInfos.number_stock = res.data.number_stock - res.data.number_sales
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
					});
				} else if (this.btnTypes === 3) {
					this.request.seckillchoose({
						goods_id: this.bargain_id,
						goods_spec: this.specs
					}).then(res => {
						console.log(res);
						if (res.code === 1) {
							this.getInfos.id = res.data.id
							this.getInfos.price_selling = res.data.bargain_price
							this.getInfos.number_stock = res.data.number_stock
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
					});
				} else if (this.btnTypes === 4) {
					this.request.seckillchoose({
						goods_id: this.pintuanid,
						goods_spec: this.specs
					}).then(res => {
						console.log(res);
						if (res.code === 1) {
							this.getInfos.id = res.data.id
							this.getInfos.number_stock = res.data.number_stock
							if (this.ptTypes === "三人团") {
								this.tPersonNums = 3
								this.getInfos.price_selling = res.data.group_price_three
							} else if (this.ptTypes === "五人团") {
								this.tPersonNums = 5
								this.getInfos.price_selling = res.data.group_price_five
							}
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
					});
				}else if(this.btnTypes === 5){
					this.request.seckillchoose({
						goods_id: this.pintuanid,
						goods_spec: this.specs
					}).then(res => {
						console.log(res);
						if (res.code === 1) {
							this.getInfos.id = res.data.id
							this.getInfos.number_stock = res.data.number_stock
							this.getInfos.price_selling = res.data.seckill_price
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
					});
				}
			},
			getdetial() {
				bridge.register('getShopDetialBack', function(result) {
					console.log(result)
					console.log(JSON.parse(result).goods_id)
					this.shopid = JSON.parse(result).goods_id
				})
			},
			//商品详情的请求
			getshopmsg() {
				this.request.gitshopdetial({
					goods_id: this.shopid
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						res.data.specs.forEach((i) => {
							i.list.forEach((j) => {
								j.isChose = false
							})
						})
						this.colorbox = res.data.specs
						this.goodsparameter = res.data.specs //商品参数
						this.goodsdata = res.data //商品所有数据
						this.lunboimg = res.data.image
						this.shopdetialimg = res.data.content
						this.postage = res.data.price_express //邮费
						this.pintuanid = res.data.group //拼团的商品活动id
						this.bargain_id = res.data.bargain //砍价的商品活动id
						this.bargainshopid = res.data.business_id //砍价的商品活动id
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			//加减计算
			fixNum(e, id) {
				this.number = e
			},
			//获取买家秀
			getshopshow() {
				this.request.shopshow({
					token: this.token,
					shop_id: this.shopid,
					page: 1,
					size: 5
				}).then(res => {
					console.log(res)
					this.buylist = res.data
				})
			},
			//获取商品评论
			getShopCommon() {
				this.request.getShopCommon({
					token: this.token,
					shop_id: this.shopid,
				}).then(res => {
					console.log(res);
					this.shopcommon = res.data
				})
			},
			getcollectList() {
				this.request.getcollectList({
					token: this.token,
					type: 3,
					page: 1,
					num: 99
				}).then(res => {
					console.log(res.data);
					for (var i = 0; i < res.data.length; i++) {
						if (this.shopid == res.data[i].content_id) {
							this.bool = true
						}
					}
				})
			},
			// 是否收藏
			choosecollect() {
				if (this.bool) {
					console.log("收藏")
					this.request.addcollect({
						token: this.token,
						content_id: this.shopid,
						type: 3
					}).then(res => {
						console.log(res)
						uni.showToast({
							title: res.msg,
							icon: "none"
						})
					})
				} else {
					console.log("取消收藏")
					this.request.addcollect({
						token: this.token,
						content_id: this.shopid,
						type: 3
					}).then(res => {
						console.log(res)
						uni.showToast({
							title: res.msg,
							icon: "none"
						})
					})
				}
				this.bool = !this.bool
			},
			choseEachKinds(index, index1) {
				this.colorbox.forEach((i, i_idx) => {
					if (index === i_idx) {
						i.list.forEach((j, j_idx) => {
							if (index1 === j_idx) {
								j.isChose = true
								if (index === 0) {
									this.isChoseColor = j.name
									if (!this.isChoseSize) {} else {
										this.getNormalPrice()
									}
								} else {
									this.isChoseSize = j.name
									if (!this.isChoseColor) {} else {
										this.getNormalPrice()
									}
								}
							} else {
								j.isChose = false
							}
						})
					}
				});
			},
			closeshopdetial() {
				this.showdetial = false
				this.showmsgdetial = false
				this.btnTypes = -1
				this.getGoodsPrice = ""
				this.isChoseColor = ""
				this.isChoseSize = ""
				this.specs = ""
				this.getInfos.id = ""
				this.getInfos.price_selling = ""
				this.getInfos.number_stock = ""
				this.colorbox.forEach((i) => {
					i.list.forEach((j) => {
						j.isChose = false
					})
				})
				this.dumpling.forEach((k) => {
					k.isChose = false
				})
				this.tPersonNums = 0
			},
			lookshopdetial() {
				this.showdetial = true
			},
			store() {
				uni.navigateTo({
					url: `../dianpu/dianpu?shopid=${this.bargainshopid}`
				})
			},
			service() {
				uni.navigateTo({
					url: '../kefu2/kefu2'
				})
			},
			quanbupingjia() {
				uni.navigateTo({
					url: '../quanbupinglun/quanbupinglun?id=' + this.shopid
				})
			},
			quanbusolo() {
				uni.navigateTo({
					url: '../maijiaxiu/maijiaxiu?id=' + this.shopid
				})
			}
		}
	}
</script>

<style>
	page,
	.content {
		width: 100%;
		min-height: 100%;
		background: #F5f5f5;
	}

	.icon1 {
		width: 30rpx;
		height: 38rpx;
		position: absolute;
		top: 60rpx;
		left: 25rpx;
	}

	.swiperbox {
		width: 750rpx;
		height: 554rpx;

	}

	.swiperimg {
		width: 750rpx;
		height: 554rpx;
	}

	.collectimage {
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		top: 60rpx;
		left: 650rpx;
		z-index: 9999;
	}

	.contentbox {
		width: 750rpx;
	}

	.shopmsgbox {
		width: 750rpx;
		height: 200rpx;
		/* display: flex;
		flex-direction: column; */
		/* padding-left: 25rpx; */
		background: #FFFFFF;
	}

	.shopprice {
		width: 94%;
		height: 70rpx;
		margin: 0 auto;
		line-height: 70rpx;
		color: red;
		font-size: 36rpx;
	}

	.shopname {
		width: 94%;
		height: 60rpx;
		margin: 0 auto;
		line-height: 60rpx;
		font-size: 28rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.shopmsg {
		width: 94%;
		height: 50rpx;
		margin: 0 auto;
		display: flex;
		font-size: 24rpx;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: #b4b4b4;
	}

	.parameter {
		height: 90rpx;
		background: #FFFFFF;
		margin-top: 10rpx;
	}

	.pMs {
		width: 94%;
		height: 90rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: #A5A5A5;
	}

	.parametermsg {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 600rpx;
	}

	.nextimg {
		width: 20rpx;
		height: 30rpx;
		margin-left: 10rpx;
	}

	.pepershow {
		background: #FFFFFF;
		margin-top: 10rpx;
		padding-bottom: 20rpx;
	}

	.showbox {
		width: 94%;
		height: 90rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		color: #000000;
		align-items: center;
		justify-content: space-between;
	}

	.backbox {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.showimgbox {
		width: 94%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}

	.showimgsize {
		width: 120rpx;
		height: 120rpx;
		margin-right: 10rpx;
		border-radius: 8rpx;
	}

	.evaluatetitlebox {
		width: 94%;
		height: 90rpx;
		background: #FFFFFF;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		color: #000000;
		align-items: center;
		justify-content: space-between;
	}

	.evaluatebox {
		width: 750rpx;
		height: 230rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		margin-top: 10rpx;
	}

	.evaluatetitletwobox {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.evaluatehumanbox {
		width: 94%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.photobox {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.humanimg {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}

	.humanname {
		font-size: 22rpx;
		color: #666666;
		margin-left: 16rpx;
	}

	.humanmsg {
		margin: 20rpx 0 20rpx 0;
		font-size: 24rpx;
	}

	.shopdetial {
		display: flex;
		flex-direction: row;
		width: 650rpx;
		height: 100rpx;
		align-items: center;
		justify-content: space-around;
		margin-left: 50rpx;
	}

	.bigimgbox {
		width: 750rpx;
		margin-bottom: 100rpx;
	}

	.bigimg {
		width: 750rpx;

	}

	.fixedbox {
		width: 750rpx;
		height: 100rpx;
		position: fixed;
		left: 0rpx;
		bottom: 0rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.buttons {
		width: 360rpx;
		display: flex;
		flex-direction: row;
		color: #FFFFFF;
	}

	.storeimg {
		width: 50rpx;
		height: 50rpx;
	}

	.shoppingcart {
		background: #f13e22;
		height: 68rpx;
		width: 184rpx;
		border-bottom-left-radius: 50rpx;
		border-top-left-radius: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.buy {
		background: #f3b13e;
		height: 68rpx;
		width: 184rpx;
		border-bottom-right-radius: 50rpx;
		border-top-right-radius: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.red {
		color: red;
	}

	.blackbox {
		width: 750rpx;
		height: 1334rpx;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
	}

	.whitebox {
		width: 750rpx;
		/* height: 680rpx; */
		padding-bottom: 20rpx;
		position: fixed;
		left: 0rpx;
		bottom: 0rpx;
		background: #FFFFFF;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		color: #949494;
		z-index: 9999;
	}

	.whiteboxtitle {
		margin: 0 auto;
		color: #161616;
		font-size: 30rpx;
	}

	.whitenamebox {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 700rpx;
		height: 90rpx;
		border-bottom: #949494 1rpx solid;
		margin: 0 auto;
		justify-content: space-between;
	}

	.redbutton {
		width: 700rpx;
		height: 80rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 30rpx;
		background: red;
		margin-top: 50rpx;
		margin-left: 20rpx;
		border-radius: 40rpx;
	}

	.shopdetialmsgbox {
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		width: 750rpx;
		padding: 20rpx 0 20rpx 20rpx;
		background: #f5f5f5;
		display: flex;
		flex-direction: column;
		z-index: 9999;
	}

	.shopmsg1 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.shopmsg1img {
		width: 220rpx;
		height: 220rpx;
	}

	.shoppircebox {
		display: flex;
		flex-direction: column;
	}

	.shopmsg3 {
		display: flex;
		flex-direction: column;
	}

	.forcontent {
		width: 700rpx;
		min-height: 80rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.colorbox {
		min-width: 80rpx;
		height: 46rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 20rpx;
		padding: 10rpx;
		margin-bottom: 10rpx;
		border-radius: 20rpx;
	}

	.shopmsg4 {
		width: 700rpx;
		height: 80rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.shopmsg5 {
		width: 700rpx;
		height: 80rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 100rpx;
	}

	.center {
		width: 700rpx;
		height: 80rpx;
		background: #f1301f;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 40rpx;
		color: #FFFFFF;
	}

	.ac {
		color: red;
	}
</style>
