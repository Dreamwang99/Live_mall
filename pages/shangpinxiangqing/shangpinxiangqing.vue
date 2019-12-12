<template>
	<view class="content">
		<view class="swiperbox">
			<image :src="bool == true?require('../../static/iocn-sc.png'):require('../../static/iocn-2-wsc.png')" mode="" @tap="choosecollect()" class="collectimage"></image>
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
					<view class="freight">运费:0.00元</view>
				</view>
			</view>
			<view class="parameter" @tap="lookshopdetial()">
				<view class="parametermsg">商品参数:品牌、尺码......</view>
				<image src="../../static/iocn-2-jr.png" mo de="" class="nextimg"></image>
			</view>
			<!-- ///////////////////////////////////////////////////// -->
			<view class="pepershow">
				<view class="showbox">
					<view class="showtilte">买家秀（{{buylist.count}}）</view>
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
						<image :src="shopcommon.common.avatar" mode="" class="humanimg"></image>
						<view class="humanname">{{shopcommon.common.user_nicename}}</view>
					</view>
					<view class="humanmsg">{{shopcommon.common.content}}</view>
				</view>
			</view>
			<!-- //////////////////////////////////////////////////////////////////// -->
			<view class="shopdetial">
				<view>————————</view>
				<view>商品详情</view>
				<view>————————</view>
			</view>
			<view class="bigimgbox">
				<image src="../../static/1.jpg" mode="widthFix" class="bigimg"></image>
			</view>
		</view>
		<!-- 商品参数的弹框 -->
		<view class="blackbox" v-show="showdetial == true" @tap="closeshopdetial()"></view>
		<view class="whitebox" v-show="showdetial == true">
			<view class="whiteboxtitle">商品参数</view>
			<view class="whitenamebox" v-for="(item,idx) in goodsparameter" :key='idx'>
				<view class="whiteboxname">{{item.name}}</view>
				<view class="whiteboxcontent"><text v-for="(itemm,idxx) in item.list" :key='idxx'>{{itemm.name}}:</text></view>
			</view>
			<view class="redbutton" @tap="closeshopdetial()">完成</view>
		</view>
		<!-- 商品参数的弹框 -->
		<!-- 加入购物车的弹框 -->
		<view class="blackbox" v-show="showmsgdetial == true" @tap="closeshopdetial()"></view>
		<view class="shopdetialmsgbox" v-show="showmsgdetial == true">
			<view class="shopmsg1">
				<image src="../../static/11.png" mode="" class="shopmsg1img"></image>
				<view class="shoppircebox">
					<view class="pricetitle" v-if="shopmsg.price_selling != ''&&judges*1!==2">￥{{shopmsg.price_selling}}</view>
					<view class="pricetitle" v-if="judges*1===2">￥{{shopmsg.seckill_price}}</view>
					<view class="repertory">库存118件</view>
				</view>
			</view>
			<view class="shopmsg2">【小米】新鲜水果啊大大啊ad </view>
			<view class="shopmsg3" v-for="(color,index) in colorbox" :key='index'>
				<view class="forname">{{color.name}}</view>
				<view class="forcontent">
					<!-- 方法二 -->
					<!-- <view class="colorbox" :class="col.aaa != -1? 'ac':''" v-for="(col,index1) in color.list" :key='index1' @tap="choosecolor(col.aaa,index,index1)">{{col.name}}</view>
				</view> -->
				<!-- 方法二 -->
				<view class="colorbox" :class="color.aaa ==index1 ? 'ac':''" v-for="(col,index1) in color.list" :key='index1' @tap="choosecolor(index,index1,color.name,col.name)">{{col.name}}</view>
				</view>
			</view>
			<view class="shopmsg4">
				<view class="buynumbername">购买数量</view>
				<add :num='1' @numChange='fixNum($event)'></add>
			</view>
			<view class="shopmsg5">
				<view class="postagename">配送费</view>
				<view class="postagecontent">快递免邮</view>
			</view>
			<view class="center" @tap="bugcar()">确定</view>
		</view>

		<!-- 跳转砍价页面 -->
		<view class="blackbox" v-show="showmsgdetial1 == true" @tap="closeshopdetial()"></view>
		<view class="shopdetialmsgbox" v-show="showmsgdetial1 == true">
			<view class="shopmsg1">
				<image src="../../static/11.png" mode="" class="shopmsg1img"></image>
				<view class="shoppircebox">
					<view class="pricetitle" v-if="shopmsg.price_selling != ''">￥{{shopmsg.seckill_price}}</view>
					<view class="repertory">库存118件</view>
				</view>
			</view>
			<view class="shopmsg2">【小米】新鲜水果啊大大啊ad </view>
			<view class="shopmsg3" v-for="(color,index) in colorbox" :key='index'>
				<view class="forname">{{color.name}}</view>
				<view class="forcontent">
					<!-- 方法二 -->
					<!-- <view class="colorbox" :class="col.aaa != -1? 'ac':''" v-for="(col,index1) in color.list" :key='index1' @tap="choosecolor(col.aaa,index,index1)">{{col.name}}</view>
				</view> -->
				<!-- 方法二 -->
				<view class="colorbox" :class="color.aaa ==index1 ? 'ac':''" v-for="(col,index1) in color.list" :key='index1' @tap="choosecolors(index,index1,color.name,col.name)">{{col.name}}</view>
				</view>
			</view>
			<view class="shopmsg4">
				<view class="buynumbername">购买数量</view>
				<add :num='1' @numChange='fixNum($event)'></add>
			</view>
			<view class="shopmsg5">
				<view class="postagename">配送费</view>
				<view class="postagecontent">快递免邮</view>
			</view>
			<view class="center" @tap="bargainmit()">确定</view>
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
			<view class="store" @tap="group()">
				<image src="../../static/shopdetial/iocn-2-pt.png" mode="" class="storeimg" v-if="showimg2 == 4"></image>
				<image src="../../static/shopdetial/icon_pt.png" mode="" class="storeimg" v-if="showimg2 == 5"></image>
				<view class="storename" :class="showimg2 == 5?'red':''">拼团</view>
			</view>
			<view class="store" @tap="bargain()">
				<image src="../../static/shopdetial/iocn-2-kj.png" mode="" class="storeimg" v-if="showimg3 == 6"></image>
				<image src="../../static/shopdetial/icon_kj.png" mode="" class="storeimg" v-if="showimg3 == 7"></image>
				<view class="storename" :class="showimg3 == 7?'red':''">砍价</view>
			</view>
			<view class="buttons">
				<view class="shoppingcart" @tap="opencar()">加入购物车</view>
				<view class="buy" @tap="nowbuy()">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script>
	let a = []
	import add from '@/components/add.vue'
	export default {
		components: {
			add
		},
		data() {
			return {
				showimg: 1,
				showimg1: 2,
				showimg2: 4,
				showimg3: 6,
				shopid: '',
				lunboimg: [],
				showdetial: false,
				showmsgdetial: false,
				showmsgdetial1: false,
				colorbox: [],
				current: "",
				goods_specs:'',
				detialname:'',
				shopmsg:'',
				number:1,
				bool:false,
				shoppricess:'',
				status:'',
				specid:'',
				judges:'',
				goods_idss:'',
				
				bargain_id:'',
				bargainid:'',
				
				
				//买家秀列表
				buylist:[],
				//商品评论信息 1个
				shopcommon:'',
				//商品参数
				goodsparameter:'',
				goodsdata:'',
				choosetype:0,//购物车的选择弹出
			}
		},
		onLoad(options) {
			console.log('qweqe')
			this.token=uni.getStorageSync('token')
			this.shopid = options.id
			this.judges = options.judge/////////////////////////////////////新增状态 秒杀为2
			console.log(options.judge)
			console.log(this.judges)
			if(this.judges*1 === 2){
				this.showmsgdetial = true
				this.goods_idss =  options.goods_ids
			}else{
				this.judges= 0//-1为购物车
			}
			console.log(this.judges)
			this.getshopmsg()
			this.getshopshow()
			this.getcollectList()
			this.getShopCommon()
		},
		methods: {
			//////////////////////////////////////////////////////////////////////////////////////////////////
			//获取买家秀
			getshopshow(){
				this.request.shopshow({
					token:this.token,
					shop_id:this.shopid,
					page:1,
					size:5
				}).then(res=>{
					console.log(res)
					this.buylist = res.data
				})
			},
			//获取商品评论
			getShopCommon(){
				this.request.getShopCommon({
					token:this.token,
					shop_id:this.shopid,
				}).then(res =>{
					console.log(res);
					this.shopcommon = res.data
				})
			},
			///////////////////////////////////////ch
			getcollectList(){
				this.request.getcollectList({
					token:this.token,
					type:3,
					page:1,
					num:99
				}).then(res =>{
					console.log(res.data);
					for (var i = 0; i < res.data.length; i++) {
						if(this.shopid == res.data[i].content_id){
							this.bool = true
						}
					}
				})
			},
			choosecollect(){
				if(this.bool){
					console.log("收藏")
					this.request.addcollect({
						token:this.token,
						content_id:this.shopid,
						type:3
					}).then(res=>{
						console.log(res)
						uni.showToast({
							title:res.msg,
							icon:"none"
						})
					})
				}else{
					console.log("取消收藏")
					this.request.addcollect({
						token:this.token,
						content_id:this.shopid,
						type:3
					}).then(res=>{
						console.log(res)
						uni.showToast({
							title:res.msg,
							icon:"none"
						})
					})
				}
				//取反开等于关  关等于开
				this.bool = !this.bool
			},
			choosecolor(index,index1,cname,name) {
				console.log(index)
				console.log(this.colorbox)
				console.log(cname)
				console.log(name)
				console.log(this.colorbox[index])
				this.color= this.colorbox[0].name
				this.color1= this.colorbox[index].list[0].name
				a[index] = this.colorbox[index].name+'::'+this.colorbox[index].list[index1].name
				var bb = '';
				for(var i = 0; i<a.length; i++){
					bb += a[i]+';;'; 
				}
				this.goods_specs = bb.substr(0,bb.length-2)
				if(this.colorbox[index].aaa == index1){
					this.colorbox[index].aaa = -1
				}else{
					this.colorbox[index].aaa = index1
				}
				console.log(this.judges)
				if(this.judges *1 === 2){////////////////////////秒杀为2
					// 判断位数是否相等
					if(a.length*1 === this.colorbox.length*1){
						this.seckillChoose()
					}else{
						uni.showToast({
							title:'请选择相应的商品类型',
							icon:'none'
						})
					}
				}else{
					// 判断位数是否相等
					if(a.length*1 === this.colorbox.length*1){
						this.gitshopspecifications()
					}else{
						uni.showToast({
							title:'请选择相应的商品类型',
							icon:'none'
						})
					}
				}
				//方法二
				// for(var i = 0 ; i<this.colorbox[index].list.length;i++){
				// 	this.colorbox[index].list[i].aaa = -1
				// }
				// this.colorbox[index].list[index1].aaa = 1
				//方法
			},
			
			choosecolors(index,index1,cname,name){
				console.log(index)
				console.log(this.colorbox)
				console.log(cname)
				console.log(name)
				console.log(this.colorbox[index])
				this.color= this.colorbox[0].name
				this.color1= this.colorbox[index].list[0].name
				a[index] = this.colorbox[index].name+'::'+this.colorbox[index].list[index1].name
				var bb = '';
				for(var i = 0; i<a.length; i++){
					bb += a[i]+';;'; 
				}
				this.goods_specs = bb.substr(0,bb.length-2)
				if(this.colorbox[index].aaa == index1){
					this.colorbox[index].aaa = -1
				}else{
					this.colorbox[index].aaa = index1
				}
				// 判断位数是否相等
				if(a.length*1 === this.colorbox.length*1){
					this.gitshopspeci()
				}else{
					uni.showToast({
						title:'请选择相应的商品类型',
						icon:'none'
					})
				}
				//方法二
				// for(var i = 0 ; i<this.colorbox[index].list.length;i++){
				// 	this.colorbox[index].list[i].aaa = -1
				// }
				// this.colorbox[index].list[index1].aaa = 1
				//方法
			},
			gitshopspeci(){
				this.request.getGoodsSpec({
					goods_id: this.bargain_id,
					goods_spec: this.goods_specs
				}).then(res => {
					console.log(res)
					console.log(res.data.price_selling)
					this.shopmsg=res.data
					this.shoppricess = res.data.price_selling
					this.status =res.data.status
					this.bargainid = res.data.id
				})
			},
			
			
			//秒杀规格的请求
			seckillChoose(){
				this.request.seckillchoose({
					goods_id:this.goods_idss,
					goods_spec:this.goods_specs
				}).then(res=>{
					console.log(res)
					this.shopmsg=res.data
					this.shoppricess = res.data.seckill_price
					this.status =res.data.status
					this.specid=res.data.id
				})
			},
			//普通商品规格的请求
			gitshopspecifications() {
				this.request.gitshopspecification({
					goods_id: this.shopid,
					goods_spec: this.goods_specs
				}).then(res => {
					console.log(res)
					console.log(res.data.price_selling)
					this.shopmsg=res.data
					this.shoppricess = res.data.price_selling
					this.status =res.data.status
				})
			},
			//商品详情的请求
			getshopmsg() {
				console.log(1111)
				this.request.gitshopdetial({
					goods_id: this.shopid
				}).then(res => {
					console.log(res)
					this.goodsparameter = res.data.specs	//商品参数
					this.goodsdata = res.data				//商品所有数据
					this.lunboimg = res.data.image	
					let arr = res.data.specs
					//forEach循环
					// arr.forEach(item => {
					// 	item.list.forEach(i => {
					// 		i.aaa = -1
					// 	})
					// 	console.log(item)
					// })
					for(var i in arr){
						arr[i].aaa = -1
					}
					console.log(arr)
					this.colorbox= arr
					console.log(this.colorbox)
					this.bargain_id = res.data.bargain[0]
					//for循环
					// for(let index in arr){
					// 	console.log(arr)
					// 	let newarr=arr[index].list
					// 	console.log(newarr)

					// 	for(var i=0 ; i<newarr.length ; i++ ){
					// 		newarr[i].aaa=-1
					// 	}
					// }


				})
			},
			//加减计算
			fixNum(e, id) {
				console.log(e)
				console.log(id)
				this.number= e
				// this.grtcarnumber(e,id)
				// this.fixCost()
			},
			opencar() {
				console.log(1111)
				this.judges = -1
				this.showmsgdetial = true
				
			},
			nowbuy(){//直接购买
			console.log('直接购买')
				this.showmsgdetial = true
			},
			bugcar(){
				if(a.length*1 === this.colorbox.length*1){
					if(this.shoppricess !== '0.00' && this.status*1 !== 0){//判断是否有该商品或该商品是否已下架
						console.log(this.judges)
						if(this.judges*1 === 2){
							uni.navigateTo({//goods_type=0普通商品 2秒杀商品 3砍价商品 4团购商品
								url:`../dingdantijiao/dingdantijiao?id=${this.shopid}&goods_type=2&goods_spec=${this.goods_specs}&specid=${this.specid}&goodsid=${this.goods_idss}`
							})
						}else if(this.judges*1 === 0 ){
	uni.navigateTo({//goods_type=0普通商品 2秒杀商品 3砍价商品 4团购商品
	url:`../dingdantijiao/dingdantijiao?id=${this.shopid}&goods_type=0&goods_spec=${this.goods_specs}&specid=${this.specid}&goodsid=${this.goods_idss}`
							})
						}
						else if(this.judges*1 === -1){
							this.request.addshopcar({//普通商品的加入购物车
								token:this.token,
								goodsid:this.shopid,
								spec:this.goods_specs,
								number:this.number
							}).then(res=>{
								console.log(res)
								this.showmsgdetial = false
								if(res.code*1 === 1){
									uni.showToast({
										title:'加入购物车成功',
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
					}else{
						uni.showToast({
							title:'该规格已下架',
							icon:'none'
						})
					}
					
				}else{
					uni.showToast({
						title:'请先选的商品规格',
						icon:'none'
					})
				}
				
			},
			
			
			
			closeshopdetial() {
				this.showdetial = false
				this.showmsgdetial = false
				this.showmsgdetial1 = false
				
				this.showimg = 1
				this.showimg1 = 2
				this.showimg2 = 4
				this.showimg3 = 6
			},
			lookshopdetial() {
				this.showdetial = true
			},
			store() {
				this.showimg = 1
				this.showimg1 = 2
				this.showimg2 = 4
				this.showimg3 = 6
			},
			service() {
				this.showimg = 0
				this.showimg1 = 3
				this.showimg2 = 4
				this.showimg3 = 6
			},
			group() {
				this.showimg = 0
				this.showimg1 = 2
				this.showimg2 = 5
				this.showimg3 = 6
			},
			bargain() {
				this.showimg = 0
				this.showimg1 = 2
				this.showimg2 = 4
				this.showimg3 = 7
				this.showmsgdetial1 = true
			},
			bargainmit(){
				if(a.length*1 === this.colorbox.length*1){
					if(this.shoppricess !== '0.00' && this.status*1 !== 0){
						this.request.getStart({
							token: uni.getStorageSync('token'),
							goods_id:this.shopid,
							type: 1,
							bargain_id: this.bargainid,
							open_people: uni.getStorageSync('id')
						}).then(res => {
							console.log(res)
							if(res.code == 1){
								uni.navigateTo({
									url:'../kanjia/kanjia?goods_id='+this.shopid + '&activid=' + res.data.activity_id + '&money=' + res.data.price
								})
							}
						})
					}else{
						uni.showToast({
							title:'该规格已下架',
							icon:'none'
						})
					}
					
				}else{
					uni.showToast({
						title:'请先选的商品规格',
						icon:'none'
					})
				}
			},
			backnext(){
				uni.navigateBack({
					
				})
			},
			quanbupingjia(){
				uni.navigateTo({
					url: '../quanbupinglun/quanbupinglun?id='+this.shopid
				})
			},
			quanbusolo(){
				uni.navigateTo({
					url: '../maijiaxiu/maijiaxiu?id='+this.shopid
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
	.icon1{
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
	.collectimage{
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
		display: flex;
		flex-direction: column;
		padding-left: 25rpx;
		background: #FFFFFF;
	}

	.shopprice {
		color: red;
		font-size: 42rpx;
	}

	.shopmsg {
		width: 725 rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		color: #b4b4b4;
	}

	.parameter {
		width: 750rpx;
		background: #FFFFFF;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 50rpx;
		color: #A5A5A5;
		margin-top: 10rpx;
	}

	.nextimg {
		width: 20rpx;
		height: 30rpx;
		margin-left: 10rpx;
	}

	.pepershow {
		width: 750rpx;
		height: 230rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		margin-top: 10rpx;
	}

	.showbox {
		width: 750rpx;
		background: #FFFFFF;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		color: #A5A5A5;
		align-items: center;
		justify-content: space-between;
		padding: 50rpx;
	}

	.backbox {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.showimgbox {
		display: flex;
		flex-direction: row;
		padding-left: 30rpx;
	}

	.showimgsize {
		width: 120rpx;
		height: 120rpx;
		margin-left: 15rpx;
	}

	.evaluatetitlebox {
		width: 750rpx;
		background: #FFFFFF;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		color: #A5A5A5;
		align-items: center;
		justify-content: space-between;
		padding: 50rpx;
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
		display: flex;
		flex-direction: column;
		padding-left: 50rpx;
	}

	.photobox {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.humanimg {
		width: 60rpx;
		height: 60rpx;
		border-radius: 20rpx;
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
		height: 680rpx;
		position: fixed;
		left: 0rpx;
		bottom: 0rpx;
		background: #FFFFFF;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		color: #949494;
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
		min-height: 1100rpx;
		background: #f5f5f5;
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		padding-top: 20rpx;
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
