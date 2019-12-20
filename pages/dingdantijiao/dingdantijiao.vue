<template>
	<view>
		<view class="beijing">
			<view class="baidi hengaddress" @tap="chooseaddress()">
				<image class="yuan" src="../../static/dingdan/icon-4-dw.png" mode="aspectFit"></image>
				<view v-if="addressbox == ''" style="margin-left: 30rpx;margin-top: 35rpx;">请选择收货地址</view>
				<view v-else style="margin-left: 30rpx;">
					<view class="heng">
						<view class="nicheng">{{addressbox.name}}</view>
						<view class="dianhua">{{addressbox.phone}}</view>
					</view>
					<view class="dizhi">{{addressbox.province}}{{addressbox.city}}{{addressbox.area}}{{addressbox.address}}</view>
				</view>
			</view>
			<view style="height: 10rpx;"></view>
			<view class="baidi1">
				<!-- 购物车的详情 -->
				<view class="heng1" v-for="(list,index) in arr " :key='index' v-if="goods_types*1 === 5">
					<view class="aaaaaaa" v-for="(li,idx) in list.goods_list" :key='idx'>
						<image class="tu" :src="li.goods_logo" mode="aspectFit"></image>
						<view class="bbbbb">
							<view class="xiaomi">{{li.goods_title}}</view>
							<view class="heng">
								<!-- <view class="se">颜色:</view>
									<view class="yanse">{{yanse}}</view>
									<view class="se">尺码:</view>
									<view class="yanse">{{chima}}</view> -->
								<view>{{li.goods_spec}}</view>
							</view>
							<view class="jia">￥{{li.price_selling}}</view>
							<view class="cccccc">
								<view class="jian" @tap="changeCount(li,-1)">-</view>
								<view class="shu">{{li.number_goods}}</view>
								<view class="jian jia1" @tap="changeCount(li,1)">+</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 直接购买0的详情 -->
				<view class="heng1" v-if="goods_types*1 === 0">
					<view class="aaaaaaa">
						<image class="tu" :src="ass.logo" mode="aspectFit"></image>
						<view class="bbbbb">
							<view class="xiaomi">{{ass.business_name}}</view>
							<view class="heng">
								<!-- <view class="se">颜色:</view>
									<view class="yanse">{{yanse}}</view>
									<view class="se">尺码:</view>
									<view class="yanse">{{chima}}</view> -->
								<view>{{ass.goods_spec}}</view>
							</view>
							<view class="jia">￥{{ass.price_selling}}</view>
							<view class="cccccc">
								<view class="jian" @tap="changeadd(-1)">-</view>
								<view class="shu">{{addnumber}}</view>
								<view class="jian jia1" @tap="changeadd(1)">+</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 直接购买0的详情包括砍价拼团 -->
				<view class="heng1" v-if="goods_types*1 === 2||goods_types*1 === 3||goods_types*1 === 4">
					<view class="aaaaaaa">
						<image class="tu" :src="ass.logo" mode="aspectFit"></image>
						<view class="bbbbb">
							<view class="xiaomi">{{ass.business_name}}</view>
							<view class="heng">
								<!-- <view class="se">颜色:</view>
									<view class="yanse">{{yanse}}</view>
									<view class="se">尺码:</view>
									<view class="yanse">{{chima}}</view> -->
								<view>{{ass.goods_spec}}</view>
							</view>
							<view class="jia">￥{{ass.price_selling}}</view>
							<view class="tuanNums" v-if="tPeopleNums">{{tPeopleNums}}人团</view>
						</view>
					</view>
				</view>
				<view class="heng1" v-if="goods_types*1 ===6">
					<!-- 二手好货的详情 -->
					<view class="aaaaaaa">
						<image class="tu" :src="esdetial.image[0]" mode="aspectFit"></image>
						<view class="ddddd">
							<view class="xiaomi">{{esdetial.title}}</view>
							<view class="jia">￥{{esdetial.price}}</view>
						</view>
					</view>
				</view>
				<view class="heng">
					<view class="se" style="margin-top: 40rpx;">下单时间</view>
					<view class="se time">{{nowdate}}</view>
				</view>
				<view class="heng" v-if="postage != ''">
					<view class="se" style="margin-top: 43rpx;">配送费</view>
					<view class="se mianyou" v-if="postage == '0.00'">快递免邮</view>
					<view class="se mianyou" v-else>运费:{{postage}}元</view>
				</view>
				<view class="heng">
					<view class="hengbox">
						<image class="zfb" src="../../static/zhibo/iocn-105-zfb.png" mode="aspectFit"></image>
						<view class="zi">支付宝</view>
					</view>
					<image :src="current == 0?require('../../static/shouhuodizhi/iocn-27-gou.png'):require('../../static/zhibo/iocn-4-wgx.png')"
					 mode="" class="binggoimg" @tap="changebinggo(0)"></image>
				</view>
				<view class="heng">
					<view class="hengbox">
						<image class="zfb" src="../../static/zhibo/iocn-105-wx.png" mode="aspectFit"></image>
						<view class="zi">微信</view>
					</view>
					<image :src="current1 == 0?require('../../static/shouhuodizhi/iocn-27-gou.png'):require('../../static/zhibo/iocn-4-wgx.png')"
					 mode="" class="binggoimg" @tap="changebinggo(1)"></image>
				</view>
			</view>
		</view>
		<view class="heng">
			<!-- <button class="pintuan" @tap="togglePopup('bottom', 'dibu')" type="primary">拼团购物</button> -->
			<button class="pintuan tijiao" type="primary" @tap="centerorder()">提交订单</button>
		</view>
		<uni-popup :show="pintuanyaoqing" type="bottom">
			<view style="height: 315rpx;background-color: #FFFFFF;">
				<view style="display: flex;flex-direction: row;">
					<image class="xj" src="../../static/iocn-weixin.png" @tap="cancle('wxhy')"></image>
					<view type="primary" @click="cancle('pyq')">
						<image class="xj" src="../../static/zhibo/icon-pyq.png">
					</view>
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
	import bridge from '../../common/unfile/unfile.js'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				pintuanyaoqing: false,
				nowdate: '',
				arr: [],
				ass: '',
				current: -1,
				current1:-1,
				addressbox: '',
				addressbox_id: '',
				paytype: '',
				paydata: '',
				goods_types: '',
				goods_specs: '',
				goodsids: '',
				specids: '',
				ershouids: '',
				esdetial: '',
				tPeopleNums : "",
				addnumber:1,//直接购买的数量
				activeid:'',
				
				postage:'',//邮费
			}
		},
		onLoad(options) {
			this.id = options.id
			// this.goods_id = options.goods_id
			this.goods_types = options.goods_type
			this.goods_specs = options.goods_spec
			this.goodsids = options.goodsid
			this.specids = options.specid
			this.ershouids = options.ershouid
			this.addnumber = options.number
			this.tPeopleNums = options.tPeopleNums
			this.activityid = options.activityid
			this.activeid = options.activeid
			this.types = options.types
			console.log(this.id)
			// console.log(this.goods_id)
			console.log(this.goods_types)
			console.log(this.goods_specs)
			console.log(this.goodsids)
			console.log(this.specids)
			console.log(this.ershouids)
			console.log(this.addnumber)
			if (this.goods_types * 1 === 5) { //判断是购物车55还是其他的购买
				this.getshopdetial()
			} else if (this.goods_types * 1 === 6) {
				this.getershoudetial()
			}else if(this.goods_types * 1 === 4){
				this.getTuanInfo();
			} else {
				this.getseckilldetial()
			}

			let date = new Date(),
				currentDate,
				currentTime,
				seperator = "-", // 如果想要其他格式 只需 修改这里 
				year = date.getFullYear(),
				month = date.getMonth() + 1,
				weex = date.getDay(),
				day = date.getDate(),
				hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
				minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
				second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			//当前 日期
			currentDate = year + seperator + month + seperator + day;
			//当前 时间
			currentTime = hour + ":" + minute + ":" + second;
			// 输出格式 为 2018-8-27 14:45:33
			this.nowdate = currentDate + " " + currentTime
			console.log(this.nowdate);
			this.myAdress()
		},
		onShow() {
			this.addressbox = uni.getStorageSync('getaddress')
			this.addressbox_id = uni.getStorageSync('getaddress_id')
			console.log(this.addressbox)
			console.log(this.addressbox_id)
		},
		methods: {
			centerorder() {
				if (this.goods_types * 1 === 5) {
					if (this.addressbox_id == '') {
						uni.showToast({
							title: '请选择地址',
							icon: 'none'
						})
						return
					} else if (this.paytype == '') {
						uni.showToast({
							title: '请选择支付方式',
							icon: 'none'
						})
						return
					}
					this.request.addOrder({
						token: uni.getStorageSync('token'),
						ids: this.id,
						address_id: this.addressbox.id,
						pay_type: this.paytype
					}).then(res => {
						console.log(res)
						console.log(res.data.ordersn)
						console.log(res.data.paydata)
						if (this.paytype == 'alipay') {
							console.log(11)
							// this.alipaydetial(res.data.paydata.split('&amp;').join('&'))
							// 支付宝
							bridge.call('alipay', res.data.paydata.split('&amp;').join('&'))
							bridge.register('alipaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan?tbIndex=1'
										});
									},1500)
								}
							})
						} else if (this.paytype == 'wechat') {
							console.log(22)
							// this.wxPay(res.data.paydata)
							console.log(res.data.paydata)
							bridge.call('wxpay', res.data.paydata)//微信
							bridge.register('wxpaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
							// uni.requestPayment({
							// 	provider: 'wxpay',
							// 	orderInfo: res.data.paydata, //微信、支付宝订单数据 
							// 	success: function(res) {
							// 		console.log(444)
							// 		console.log('success:' + JSON.stringify(res));
							// 	},
							// 	fail: function(err) {
							// 		console.log(555)
							// 		console.log('fail:' + JSON.stringify(err));
							// 	}
							// });
							console.log(33)
						}
					})

				} else if (this.goods_types * 1 === 2) {
					if (this.addressbox_id == '') {
						uni.showToast({
							title: '请选择地址',
							icon: 'none'
						})
						return
					} else if (this.paytype == '') {
						uni.showToast({
							title: '请选择支付方式',
							icon: 'none'
						})
						return
					}
					this.request.seckillgobuy({
						token: uni.getStorageSync('token'),
						goodsid: this.goodsids,
						specid: this.specids,
						address_id: this.addressbox.id,
						pay_type: this.paytype
					}).then(res => {
						console.log(res)
						console.log(res.data.ordersn)
						console.log(res.data.paydata)
						if (this.paytype == 'alipay') {
							console.log(11)
							// this.alipaydetial(res.data.paydata.split('&amp;').join('&'))
							bridge.call('alipay', res.data.paydata.split('&amp;').join('&'))
							bridge.register('alipaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									// uni.showToast({
									// 	title:'支付失败',
									// 	icon:'none'
									// })
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
						} else if (this.paytype == 'wechat') {
							console.log(22)
							// this.wxPay(res.data.paydata)
							console.log(res.data.paydata)
							bridge.call('wxpay', res.data.paydata)//微信
							bridge.register('wxpaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									// uni.showToast({
									// 	title:'支付失败',
									// 	icon:'none'
									// })
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
							// uni.requestPayment({
							// 	provider: 'wxpay',
							// 	orderInfo: res.data.paydata, //微信、支付宝订单数据 
							// 	success: function(res) {
							// 		console.log(444)
							// 		console.log('success:' + JSON.stringify(res));
							// 	},
							// 	fail: function(err) {
							// 		console.log(555)
							// 		console.log('fail:' + JSON.stringify(err));
							// 	}
							// });
							console.log(33)
						}
					})
				} else if (this.goods_types * 1 === 0) {
					if (this.addressbox_id == '') {
						uni.showToast({
							title: '请选择地址',
							icon: 'none'
						})
						return
					} else if (this.paytype == '') {
						uni.showToast({
							title: '请选择支付方式',
							icon: 'none'
						})
						return
					}
					console.log(232232)
					this.request.gostrightbuy({
						token: uni.getStorageSync('token'),
						id: this.id,
						spec: this.goods_specs,
						address_id: this.addressbox.id,
						pay_type: this.paytype,
						number: this.addnumber
					}).then(res => {
						console.log(789778)
						console.log(res)
						console.log(res.data.paydata)
						console.log(99999)
						if (this.paytype == 'alipay') {
							console.log(11)
							// this.paydata = res.data.paydata.split('&amp;').join('&')
							// this.alipaydetial(res.data.paydata.split('&amp;').join('&'))
							bridge.call('alipay', res.data.paydata.split('&amp;').join('&'))
							bridge.register('alipaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
							console.log(22222222)
						} else if (this.paytype == 'wechat') {
							console.log(22)
							// this.wxPay(res.data.paydata)
							console.log(res.data.paydata)
							bridge.call('wxpay', res.data.paydata)//微信
							bridge.register('wxpaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
							// uni.requestPayment({
							// 	provider: 'wxpay',
							// 	orderInfo: res.data.paydata, //微信、支付宝订单数据 
							// 	success: function(res) {
							// 		console.log(444)
							// 		console.log('success:' + JSON.stringify(res));
							// 	},
							// 	fail: function(err) {
							// 		console.log(555)
							// 		console.log('fail:' + JSON.stringify(err));
							// 	}
							// });
							console.log(33)
						}
					})
				} else if (this.goods_types * 1 === 6) {
					if (this.addressbox_id == '') {
						uni.showToast({
							title: '请选择地址',
							icon: 'none'
						})
						return
					} else if (this.paytype == '') {
						uni.showToast({
							title: '请选择支付方式',
							icon: 'none'
						})
						return
					}
					this.request.ershoucenter({
						token: uni.getStorageSync('token'),
						goodsid: this.ershouids,
						address_id: this.addressbox.id,
						pay_type: this.paytype
					}).then(res => {
						console.log(res)
						console.log(res.data.ordersn)
						console.log(res.data.paydata)
						if (this.paytype == 'alipay') {
							console.log(11)
							// this.paydata = res.data.paydata.split('&amp;').join('&')
							// this.alipaydetial(res.data.paydata.split('&amp;').join('&'))
							bridge.call('alipay', res.data.paydata.split('&amp;').join('&'))
							bridge.register('alipaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
						} else if (this.paytype == 'wechat') {
							console.log(22)
							// this.wxPay(res.data.paydata)
							console.log(res.data.paydata)
							bridge.call('wxpay', res.data.paydata)//微信
							bridge.register('wxpaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
							// uni.requestPayment({
							// 	provider: 'wxpay',
							// 	orderInfo: res.data.paydata, //微信、支付宝订单数据 
							// 	success: function(res) {
							// 		console.log(444)
							// 		console.log('success:' + JSON.stringify(res));
							// 	},
							// 	fail: function(err) {
							// 		console.log(555)
							// 		console.log('fail:' + JSON.stringify(err));
							// 	}
							// });
							console.log(33)
						}
					})
				}else if(this.goods_types * 1 === 4 && this.types === "开团"){
					if (this.addressbox_id == '') {
						uni.showToast({
							title: '请选择地址',
							icon: 'none'
						})
						return
					} else if (this.paytype == '') {
						uni.showToast({
							title: '请选择支付方式',
							icon: 'none'
						})
						return
					}
					this.request.initiateGroup({
						token: uni.getStorageSync('token'),
						activity_goods_id: this.activityid,
						goods_spec : this.goods_specs,
						address_id: this.addressbox.id,
						pay_type: this.paytype,
						group_people_num : this.tPeopleNums
					}).then(res => {
						console.log(res)
						uni.showToast({//提示当前状态
							title:res.msg,
							icon:'none'
						})
						if (this.paytype == 'alipay') {
							console.log(11)
							// this.paydata = res.data.paydata.split('&amp;').join('&')
							// this.alipaydetial(res.data.paydata.split('&amp;').join('&'))
							bridge.call('alipay', res.data.paydata.split('&amp;').join('&'))
							bridge.register('alipaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url:'/pages/pintuanxq/pintuanxq'
										});
									},1500)
								}
							})
						} else if (this.paytype == 'wechat') {
							console.log(22)
							// this.paydata = res.data.paydata
							// this.wxPay(res.data.paydata)
							console.log(res.data.paydata)
							bridge.call('wxpay', res.data.paydata)//微信
							bridge.register('wxpaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url:'/pages/pintuanxq/pintuanxq'
										});
									},1500)
								}
							})
							// uni.requestPayment({
							// 	provider: 'wxpay',
							// 	orderInfo: res.data.paydata, //微信、支付宝订单数据 
							// 	success: function(res) {
							// 		console.log(444)
							// 		console.log('success:' + JSON.stringify(res));
							// 	},
							// 	fail: function(err) {
							// 		console.log(555)
							// 		console.log('fail:' + JSON.stringify(err));
							// 	}
							// });
							console.log(33)
						}
					})
				}else if(this.goods_types * 1 === 4 && this.types === "参团"){
					if (this.addressbox_id == '') {
						uni.showToast({
							title: '请选择地址',
							icon: 'none'
						})
						return
					} else if (this.paytype == '') {
						uni.showToast({
							title: '请选择支付方式',
							icon: 'none'
						})
						return
					}
					this.request.participationGroup({
						token: uni.getStorageSync('token'),
						activity_id: this.activityid,
						goods_spec : this.goods_specs,
						address_id: this.addressbox.id,
						pay_type: this.paytype,
					}).then(res => {
						console.log(res)
						uni.showToast({//提示当前状态
							title:res.msg,
							icon:'none'
						})
						if (this.paytype == 'alipay') {
							console.log(11)
							bridge.call('alipay', res.data.paydata.split('&amp;').join('&'))
							bridge.register('alipaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
						} else if (this.paytype == 'wechat') {
							console.log(22)
							console.log(res.data.paydata)
							bridge.call('wxpay', res.data.paydata)//微信
							bridge.register('wxpaycallback', function(result) {
								console.log(result)
								if(result*1 === 0){
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
								}else if(result*1 === 1){
									uni.showToast({
										title:'支付成功',
										icon:'none'
									})
									setTimeout(function(){
										uni.redirectTo({
											url: '../dingdan/dingdan'
										});
									},1500)
								}
							})
							// uni.requestPayment({
							// 	provider: 'wxpay',
							// 	orderInfo: res.data.paydata, //微信、支付宝订单数据 
							// 	success: function(res) {
							// 		console.log(444)
							// 		console.log('success:' + JSON.stringify(res));
							// 	},
							// 	fail: function(err) {
							// 		console.log(555)
							// 		console.log('fail:' + JSON.stringify(err));
							// 	}
							// });
							console.log(33)
						}
					})
				}else if(this.goods_types*1 === 3){
						if(this.addressbox_id == ''){
							uni.showToast({
								title:'请选择地址',
								icon:'none'
							})
							return
						}else if (this.paytype == ''){
							uni.showToast({
								title:'请选择支付方式',
								icon:'none'
							})
							return
						}
						this.request.createOrder({
							token:uni.getStorageSync('token'),
							activity_id: this.activeid,
							address_id:this.addressbox.id,
							pay_type:this.paytype
						}).then(res=>{
							console.log(res)
							console.log(res.data.ordersn)
							console.log(res.data.paydata)
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
							if(this.paytype == 'alipay'){
								console.log(11)
								// this.paydata = res.data.paydata.split('&amp;').join('&')
								// this.alipaydetial(res.data.paydata.split('&amp;').join('&'))
								bridge.call('alipay', res.data.paydata.split('&amp;').join('&'))
								bridge.register('alipaycallback', function(result) {
								})
							}else if(this.paytype == 'wechat'){
								console.log(22)
								// this.paydata = res.data.paydata
								// this.wxPay(res.data.paydata)
								console.log(res.data.paydata)
								bridge.call('wxpay', res.data.paydata)//微信
								bridge.register('wxpaycallback', function(result) {
								})
								// uni.requestPayment({
								//     provider: 'wxpay',
								//     orderInfo: res.data.paydata, //微信、支付宝订单数据 
								//     success: function (res) {
								// 		console.log(444)
								//         console.log('success:' + JSON.stringify(res));
								//     },
								//     fail: function (err) {
								// 		console.log(555)
								//         console.log('fail:' + JSON.stringify(err));
								//     }
								// });
								// console.log(33)
							}
						})
					}
			},
			//微信支付
			wxPay(orderInfo) {
				console.log(orderInfo)
				// let type = ''
				// if (this.payid === 0) {
				// 	this.type = 'wxpay'
				// } else if (this.payid === 1) {
				// 	this.type = 'alipay'
				// }

			},
			//支付宝支付
			alipaydetial(orderInfo) {
				console.log(orderInfo)
				// let type = ''
				// if (this.payid === 0) {
				// 	this.type = 'wxpay'
				// } else if (this.payid === 1) {
				// 	this.type = 'alipay'
				// }
				uni.requestPayment({
						provider: 'alipay',
						orderInfo: orderInfo,
						success: res => {
							console.log(res)
							console.log('成功')
							console.log('success:' + JSON.stringify(res));
							uni.showToast({
								title: '支付成功',
								icon: 'none'
							});
							setTimeout(function() {
								uni.redirectTo({
									url: '../dingdan/dingdan'
								});
							},1500)
					},
					fail: err => {
						console.log(err)
						console.log('失败')
						console.log('fail:' + JSON.stringify(err));
						uni.showToast({
							title: '支付失败',
							icon: 'none'
						});
						setTimeout(function() {
							uni.redirectTo({
								url: '../dingdan/dingdan'
							});
						},1500)
					}
				})
		},
		chooseaddress() {

			uni.navigateTo({
				url: `../shouhuodizhi/shouhuodizhi?status=1`
			})

		},
		changebinggo(i) {
			if(i == 0){
				this.current =0
				this.current1=-1
				this.paytype = 'alipay'
			}else if (i == 1){
				this.current1=0
				this.current =-1
				this.paytype = 'wechat'
			}
		},
		radioChange: function(e) {
			var checked = e.target.value
			console.log(checked)
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
				goodsid: item.goods_id,
				spec: item.goods_spec,
				number: item.number_goods
			}).then(res => {
				console.log(res)
			})
		},
		//直接购买的数量加减
		changeadd(way) { //判断way的值为1还是-1
			if (way > 0) {
				this.addnumber++
			} else {
				this.addnumber--
				if (this.addnumber < 1) {
					this.addnumber = 1
				}
			}
			console.log(this.addnumber)
		},
		getshopdetial() { //购物车商品的详情显示
			this.request.ordershopcar({
				token: uni.getStorageSync('token'),
				ids: this.id
			}).then(res => {
				console.log(res)
				console.log(res.data)
				console.log(res.data.cartList)
				this.arr = res.data.cartList
				this.postage =res.data.price_express
			})
		},
		getseckilldetial() { //直接购买的详情显示包括秒杀团购等都用这个接口
			this.request.seckillbuy({
				token: uni.getStorageSync('token'),
				goods_type: this.goods_types,
				goods_id: this.id,
				goods_spec: this.goods_specs,
				number: 1
			}).then(res => {
				console.log(res)
				this.ass = res.data.cartList
				this.postage = res.data.cartList.price_express//邮费
			})
		},
		// 获取开团商品信息
		getTuanInfo(){
			this.request.seckillbuy({
				token: uni.getStorageSync('token'),
				goods_type: this.goods_types,
				goods_id: this.id,
				goods_spec: this.goods_specs,
				number: 1,
				group_people_num : this.tPeopleNums
			}).then(res => {
				console.log(res)
				this.ass = res.data.cartList
				this.postage = res.data.cartList.price_express//邮费
			})
		},
		getershoudetial() { //二手好货的详情显示
			this.request.ershoudetial({
				token: uni.getStorageSync('token'),
				id: this.ershouids
			}).then(res => {
				console.log(res)
				this.esdetial = res.data
			})
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

			}
		},
		/* 地址列表 */
		myAdress() {
			this.request.getAddressList({
				token: uni.getStorageSync('token')
			}).then(res => {
				console.log(res)
				console.log(res.data)
				res.data.forEach(item =>{
					if(item.is_default==1){
						this.addressbox = item
						this.addressbox_id = item.id
					}
				})
				// this.adressList = res.data
			})
		},
	}
	}
</script>

<style>
	.beijing {
		height: 1080rpx;
		/* background-color: #F5F5F5; */
		background-color: #FFF;
	}

	.baidi {
		height: 140rpx;
		width: 710rpx;
		margin-left: 20rpx;
		background-color: #FFFFFF;
	}

	.baidi1 {
		min-height: 610rpx;
		width: 710rpx;
		margin-left: 20rpx;
		background-color: #FFFFFF;
	}
	.tuanNums{
		height: 50rpx;
		width: 100%;
	}

	.heng {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
	}

	.hengaddress {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 700rpx;
	}

	.hengbox {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.heng1 {
		display: flex;
		flex-direction: column;
	}

	.aaaaaaa {
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
	}

	.bbbbb {
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.cccccc {
		display: flex;
		flex-direction: row;
	}

	.ddddd {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.yuan {
		height: 56rpx;
		width: 56rpx;
		margin-top: 40rpx;
		margin-left: 32rpx;
		text-align: center;
		line-height: 100rpx;
	}

	.nicheng {
		font-size: 23rpx;
		margin-left: 37rpx;
		margin-top: 34rpx;
	}

	.dianhua {
		font-size: 17rpx;
		color: #c3c3c3;
		margin-top: 40rpx;
	}

	.dizhi {
		margin-left: 37rpx;
		font-size: 17rpx;
		margin-top: 32rpx;
	}

	.tu {
		height: 195rpx;
		width: 205rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.xiaomi {
		margin-top: 24rpx;
		font-size: 20rpx;
	}

	.se {
		margin-top: 32rpx;
		margin-left: 16rpx;
		font-size: 20rpx;
	}

	.yanse {
		margin-top: 32rpx;
		font-size: 20rpx;
	}

	.jia {
		color: #ff4446;
		font-size: 23rpx;
		/* margin-top: 32rpx; */
		/* margin-left: 16rpx; */
	}

	.jian {
		font-size: 21rpx;
		margin-left: 350rpx;
		margin-top: 8rpx;
	}

	.shu {
		width: 42rpx;
		height: 42rpx;
		font-size: 21rpx;
		margin-left: 15rpx;
		/* margin-top:58rpx; */
		background-color: #F5F5F5;
		line-height: 42rpx;
		text-align: center;
	}

	.jia1 {
		margin-left: 15rpx;
		color: #000000;
	}

	.mianyou {


		margin-left: 450rpx;

	}

	.time {
		margin-left: 366rpx;
	}

	.zfb {
		height: 30rpx;
		width: 30rpx;
		/* margin-top: 54rpx; */
		margin-left: 20rpx;

	}

	.gou {
		height: 30rpx;
		width: 30rpx;
		margin-top: 54rpx;
		margin-left: auto;
		margin-right: 23rpx;
	}

	.zi {
		font-size: 20rpx;
		margin-left: 10rpx;
		/* margin-top: 54rpx; */
	}

	.pintuan {
		height: 68rpx;
		width: 240rpx;
		border-radius: 40rpx;
		/* margin-top: 28rpx; */
		margin-bottom: 26rpx;
		font-size: 25rpx;
		line-height: 68rpx;
		background-color: #f14c25;
		margin-left: 70rpx;
	}

	.tijiao {
		background-color: #f2ae3d;
		margin-left: 250rpx;
	}

	.xj {
		height: 80rpx;
		width: 80rpx;
		margin-top: 55rpx;
		margin-left: 188rpx;
	}

	.quxiao {
		text-align: center;
		font-size: 25rpx;

	}

	.xiangcexq {
		margin-top: 22rpx;
		margin-left: 180rpx;
		font-size: 22rpx;
	}

	.xiangjips {
		margin-top: 22rpx;
		margin-left: 180rpx;
		font-size: 22rpx;
	}

	.binggoimg {
		width: 35rpx;
		height: 35rpx;
	}
</style>
