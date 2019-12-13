<template>
	<view class="dianpu">
		<view class="heng">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in goodsInfo.image" :key="index">
					<view class="swiper-item">
						<image :src="item" mode="" class="tu"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="dangaozi">
			<!-- 蛋糕是一种古老的西点，一般是由烤箱制作的，蛋糕是用鸡蛋、白糖、小麦粉为主要原料。以牛奶、果汁、奶粉、香粉、色拉油、水，起酥油、打泡粉为辅料。经过搅拌、调制、烘焙后制成一种像海绵的点心。蛋糕是一种面食，通常是甜的，典型的蛋糕是以烤的方式制作出来。 -->
			{{goodsInfo.introduction}}
		</view>
		<view class="heng1">
			<view class="pintuan_title">
				<image class="im" src="../../static/zhuye/iocn-11-jg.png" mode=""></image>
				<view class="xl">拼团销量：{{assembleInfo.number_sales}}</view>
			</view>
			<view class="pintuan_title">
				<view class="cj">限成交时间</view>
				<uni-countdown class="daojishi" background-color="#ff212c" border-color="#ff212c" color="#ffffff" :show-day="false"
				 :hour="2" :minute="0" :second="0" :reset="true">
				</uni-countdown>
			</view>

		</view>
		<view class="heng2">
			<view class="heng">
				<image class="jg" src="../../static/zhuye/iocn-11-dw.png" mode=""></image>
				<view class="xl">{{adressInfo.address}}</view>
			</view>
			<!-- <view class="juli">距您步行200米，大约需要2分钟</view> -->
		</view>
		<!-- <view class="pintuan_content">
			<view>3人拼团</view>
			<view class="tuan">
				<view class="people">
					还差<view style="color: red;">1人</view>拼成
				</view>
				<view class="cantuan" @tap="sanren0">去参团</view>
			</view>
		</view>
		<view class="pintuan_content">
			<view>5人拼团</view>
			<view class="tuan">
				<view class="people">
					还差<view style="color: red;">1人</view>拼成
				</view>
				<view class="cantuan" @tap="sanren1">去参团</view>
			</view>
		</view>
		<view class="pintuan_content">
			<view>8人拼团</view>
			<view class="tuan">
				<view class="people">
					还差<view style="color: red;">1人</view>拼成
				</view>
				<view class="cantuan" @tap="sanren2">去参团</view>
			</view>
		</view>
		<view class="pintuan_content">
			<view>8人拼团</view>
			<view class="tuan">
				<view class="people">
					还差<view style="color: red;">1人</view>拼成
				</view>
				<view class="cantuan" @tap="nowboy(2)">去参团（选规格）</view>
			</view>
		</view> -->
		<view class="pintuan_content" v-for="(n,n_idx) in assembleInfo.purchase" :key="n_idx">
			<view>{{n.group_people_num}}人拼团</view>
			<view class="tuan">
				<view class="people">
					还差<view style="color: red;">{{n.join_people_num}}人</view>拼成
				</view>
				<view class="cantuan" @tap="nowboy(2)">去参团（选规格）</view>
				 <!-- @tap="sanren0" -->
			</view>
		</view>
		<view class="imageList">
			<view class="image_content" v-for="(item,index) in showVideoInfo" :key="index" @tap="videoTo(item.video_url)">
				<image :src="item.video_img" mode=""></image>
				<view class="ysld">{{item.clicks}}</view>
			</view>
		</view>
		<!-- <view class="guanggao">
			<view class="ggy">这是一个广告语大约十五个字</view>
			<view class="ggtime">9/20 16:30</view>
		</view> -->
		<view class="pingjia">
			<view class="baobei">宝贝评价（1234）</view>
			<view class="pingjia_let" @tap="chakanpj">
				<view class="chakan">查看全部</view>
				<image class="jr" src="../../static/pintuan/iocn-76-jinru.png" mode=""></image>
			</view>
		</view>
		<view class="pingjia_detail">
			<image class="tx" src="../../static/img-50-touxiang.png"></image>
			<view class="xh">
				小黑粉
			</view>
		</view>
		<view class="pingjia">
			正品有保障，小米还是一如既往的好 价格优惠非常好！
		</view>
		<view class="xian"></view>
		<view class="heng">
			<view class="xuzhi">参团须知：这是参团须知信息！！！！</view>
			<view class="tousu" @click="baocuo">投诉|报错</view>
		</view>
		<view class="button_bottom">
			<view class="kaituan heng" @tap="nowboy(0)">
				<image class="tu1" src="/static/xxdp/iocn-11-kt.png" mode="aspectFit"></image>
				<view>我要开团</view>
			</view>
			<view class="kuaipin heng" @click="togglePopup('bottom', 'share')">
				<image class="tu1" src="/static/xxdp/iocn-11-zf.png" mode="aspectFit"></image>
				<view>转发快拼</view>
			</view>
			<view class="goumai heng" @tap="nowboy(1)">
				<image class="tu1" src="/static/xxdp/iocn-11-gw.png" mode="aspectFit"></image>
				<view>立即购买</view>
			</view>
		</view>
		<!-- 加入购物车的弹框 -->
		<view class="blackbox" v-show="showmsgdetial == true" @tap="closeshopdetial()"></view>
		<view class="shopdetialmsgbox" v-show="showmsgdetial == true">
			<view class="shopmsg1">
				<image src="../../static/11.png" mode="" class="shopmsg1img"></image>
				<view class="shoppircebox">
					<view class="pricetitle" v-if="shopmsg.price_selling != ''">￥{{shopmsg.price_selling}}</view>
					<view class="repertory">库存118件</view>
				</view>
			</view>
			<view class="shopmsg2">【小米】新鲜水果啊大大啊ad </view>
			<view class="shopmsg3" v-show="nowboyor==0">
				<view class="forname">团购规格</view>
				<view class="forcontent">
					<view class="colorbox" :class="tuan ==3 ? 'ac':''" @tap="jointuan(3)">三人团</view>
					<view class="colorbox" :class="tuan ==5 ? 'ac':''" @tap="jointuan(5)">五人团</view>
				</view>
			</view>
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
				<view class="" v-show="nowboyor!=1">
					{{num}}
				</view>
				<add :num='1' @numChange='fixNum($event)' v-show="nowboyor==1"></add>
			</view>
			<view class="shopmsg5">
				<view class="postagename">配送费</view>
				<view class="postagecontent">快递免邮</view>
			</view>
			<view class="center" @tap="bugcar()" v-show="nowboyor==1">确定购买</view>
			<view class="center" @tap="bugcarr()" v-show="nowboyor==0">确定开团</view>
			<view class="center" @tap="bugcarr()" v-show="nowboyor==2">确定参团</view>
		</view>
		<uni-popup ref="share" :type="type" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="image" />
						</view>
						<view class="uni-share-content-text">{{ item.text}}</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('share')">取消</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	let a = []
	import uniCountdown from '../../components/linnian-CountDown/uni-countdown.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import add from '@/components/add.vue'
	export default {
		components: {
			uniCountdown,
			uniPopup,
			add
		},
		data() {
			return {
				// 经度
				longitude : 1,
				// 纬度
				latitude : 1,
				// 商品信息
				goodsInfo : "",
				// 拼团信息(正在拼的团)
				assembleInfo : "",
				// 展示视频信息
				showVideoInfo : "",
				// 地址信息
				adressInfo : "",
				showmsgdetial: false,
				shopmsg:'',
				colorbox:'',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				swiplist:['../../static/zhuye/img-11-sp_81.png'],
				show: false,
				type: '',
				bottomData: [{
						icon: '/static/zhuye/icon_wx.png',
						text: '微信好友'
					},
					{
						icon: '/static/zhuye/icon-pyq.png',
						text: '朋友圈'
					}
				],
				imageLIst: [{
						img: '../../static/zhuye/img-11-sp_81.png',
						name: '雅诗兰黛“钢铁侠”平价替代款'
					},
					{
						img: '../../static/zhuye/img-11-sp_81.png',
						name: '雅诗兰黛“钢铁侠”平价替代款'
					},
					{
						img: '../../static/zhuye/img-11-sp_81.png',
						name: '雅诗兰黛“钢铁侠”平价替代款'
					}
				],
				price_selling:'',
				goods_specs:'',
				goodslist:'',
				nowboyor: 1,
				
				tuan: null,
				token: uni.getStorageSync('token'),
				goods_id:'',
				number: 1,
				num: 1,
				
			};
		},
		onLoad(options) {
			this.goods_id = options.goods_id
			this.getLocation();
			// this.getshopmsg();
			this.getGoodsDetails();
			// this.getshopshow()
		},
		methods: {
			// 获取地址信息
			getLocation(){
				uni.getLocation({
					type: 'wgs84',
					geocode: 'true',
					success: res => {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						console.log('当前国家：' + res.address);
						console.log('当前省份：' + res.address.city);
						this.longitude = res.longitude
						this.latitude = res.latitude
						this.city = res.address.city
						this.getGoodsDetails();
					}
				});
			},
			// 获取商品信息
			getGoodsDetails(){
				this.request.details({
					goods_id : this.goods_id,
					longitude : this.longitude,
					latitude : this.latitude
				}).then(res=>{
					console.log(res);
					if(res.code === 1){
						this.goodsInfo = res.data.goods
						this.assembleInfo = res.data.assemble
						this.showVideoInfo = res.data.video
						this.adressInfo = res.data.business
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			videoTo(url){
				uni.navigateTo({
					url:'./videoPlay?urls='+url
				})
			},
			nowboy(e){
				console.log(e);
				this.showmsgdetial = true
				this.nowboyor = e
			},
			closeshopdetial(){
				this.showmsgdetial = false
			},
			//加减计算
			fixNum(e, id) {
				console.log(e)
				console.log(id)
				this.number= e
				// this.grtcarnumber(e,id)
				// this.fixCost()
			},
			jointuan(e){
				this.tuan = e
			},
			getshopshow(){
				this.request.shopshow({
					token:this.token,
					shop_id:this.goods_id,
					page:1,
					size:5
				}).then(res=>{
					console.log(res)
				})
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
				// 判断位数是否相等
				if(a.length*1 === this.colorbox.length*1){
					this.gitshopspecifications()
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
			//商品规格的请求
			gitshopspecifications() {
				this.request.gitshopspecification({
					goods_id: this.goods_id,
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
				this.request.gitshopdetial({
					goods_id: this.goods_id
				}).then(res => {
					console.log(res)
					this.swiplist = res.data.image
					// this.lunboimg = res.data.image	
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
			bugcar(){
				if(a.length*1 === this.colorbox.length*1){
					if(this.shoppricess !== '0.00' && this.status*1 !== 0){
						this.request.addshopcar({
							token:this.token,
							goodsid:this.goods_id,
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
			bugcarr(){
				if(a.length*1 === this.colorbox.length*1){
					if(this.shoppricess !== '0.00' && this.status*1 !== 0){
						this.request.addshopcar({
							token:this.token,
							goodsid:this.goods_id,
							spec:this.goods_specs,
							number:this.num
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
			togglePopup(type, open) {
				this.type = type
				this.$refs[open].open()
			},
			cancel(type) {
				this.$refs[type].close()
			},
			change(e) {
				console.log(e.show)
			},
			baocuo() {
				uni.navigateTo({
					url: '../tousubaocuo/tousubaocuo'
				})
			},
			chakanpj(e) {
				uni.navigateTo({
					url: '../quanbupinglun/quanbupinglun',

				})
			},

			sanren0(e) {
				uni.navigateTo({
					url: '../pintuanxq/pintuanxq',

				})
			},
			sanren1(e) {
				uni.navigateTo({
					url: '../pintuan1/pintuan1',

				})
			},
			sanren2(e) {
				uni.navigateTo({
					url: '../pintuan2/pintuan2',

				})
			},
			wuren(e) {
				uni.navigateTo({
					url: '../wurenpintuan/wurenpintuan',

				})
			},
			baren(e) {
				uni.navigateTo({
					url: '../barenpintuan/barenpintuan',

				})
			}
		}
	};
</script>

<style>
	.swiper{
		height: 288rpx;
		width: 100%;
		text-align: center;
	}
	.swiper-item {
		height: 288rpx;
		width: 100%;
		text-align: center;
	}

	.dianpu {
		width: 100%;
		background: #fff;
	}

	.tu {
		height: 285rpx;
		width: 100%;
		display: inline-block;
	}

	.image_content {
		width: 243rpx;
		height: 314rpx;
		margin: 5rpx;
		position: relative;
	}

	.image_content image {
		width: 100%;
		height: 100%;
	}

	.heng {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.imageList {
		width: 749rpx;
		height: 393rpx;
		border-top: 10rpx solid #eee;
		padding-top: 20rpx;
		display: flex;
		justify-content: space-around;
	}

	.heng1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		background: #fff;
		justify-content: space-between;
		padding: 20rpx 0 10rpx 20rpx;
		border-top: 15rpx solid #eee;
	}

	.heng2 {
		width: 100%;
		display: flex;
		flex-direction: column;
		background: #fff;
		justify-content: space-between;
		padding: 20rpx 0 20rpx 0;
		margin-left: 21rpx;
		border-top: 1rpx solid #eee;
	}

	.dangaozi {
		width: 100%;
		padding: 20rpx;
		background: #fff;
		font-size: 24rpx;
		line-height: 35rpx;
		color: #494949;
	}

	.jg {
		height: 30rpx;
		width: 25rpx;
		margin-left: 25rpx;
	}

	.im {
		height:30rpx;
		width: 30rpx;
		margin-left: 25rpx;
	}

	.xl {
		font-size: 26rpx;
		padding-left: 17rpx;
		color: #494949;
	}

	.pintuan_title {
		display: flex;
		align-items: center;
	}

	.guanggao {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 12rpx;
		background-color: red;
		padding: 10rpx 20rpx;
		color: #FFFFFF;
	}

	.pingjia {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 12rpx;
		padding: 10rpx 20rpx;
		font-size: 26rpx;
	}

	.cj {
		font-size: 22rpx;
		margin-right: 10rpx;
		color: #494949;
		margin-top: 10rpx;
	}

	.people {
		display: flex;
		font-size: 24rpx;
		padding-right: 20rpx;
	}

	.time1 {
		background-color: red;
		height: 24rpx;
		width: 30rpx;
		font-size: 16rpx;
		line-height: 24rpx;
		color: #ffffff;
		text-align: center;
		margin-top: 5rpx;
	}

	.pintuan_content {
		width:729rpx;
		height: 88.6rpx;
		line-height: 88.6rpx;
		margin: 0 22rpx;
		font-size: 24rpx;
		padding-right: 21rpx;
		border-top: 2rpx solid #eee;
		display: flex;
		justify-content: space-between;
	}

	.tuan {
		display: flex;
		align-items: center;
	}

	.maoh {
		font-size: 13rpx;
	}

	.juli {
		font-size:20rpx;
		margin-left: 70rpx;
		color: #949494;
	}

	.chengnuo {
		width: 100%;
		font-size: 26rpx;
		padding: 20rpx 20rpx 20rpx 0;
		margin-left: 21rpx;
		border-top: 1rpx solid #eee;
	}

	.cantuan {
		height: 47rpx;
		width: 120rpx;
		text-align: center;
		border-radius: 30rpx;
		background-color: red;
		color: #ffffff;
		line-height: 47rpx;
		overflow: hidden;
		font-size: 18rpx;
	}

	.ysld {
		width: 100%;
		height: 60rpx;
		line-height: 30rpx;
		overflow: hidden;
		position: absolute;
		bottom: 10rpx;
		font-size: 24rpx;
	}

	.ggy {
		margin-left: 20rpx;
		line-height: 44rpx;
		font-size: 24rpx;
	}

	.daojishi {
		margin-right: 10rpx;
	}

	.ggtime {
		line-height: 44rpx;
		font-size: 24rpx;
	}

	.pingjia_let {
		display: flex;
	}

	.baobei {
		line-height: 90rpx;
		font-size: 26rpx;
	}

	.chakan {
		line-height: 90rpx;
		font-size: 24rpx;
		color: #FF212C;
	}

	.jr {
		height: 23rpx;
		width: 13rpx;
		margin-top: 32rpx;
		margin-left: 14rpx;
	}

	.tx {
		margin-left: 27rpx;
		height: 44rpx;
		width: 44rpx;
	}

	.xh {
		font-size: 24rpx;
		color: #9c9c9c;
		margin-left: 14rpx;
	}

	.pingjia_detail {
		width: 100%;
		display: flex;
	}

	.xian {
		height: 2rpx;
		background-color: #F5F5F5;
	}

	.xuzhi {
		font-size: 24rpx;
		color: #9c9c9c;
		margin-left: 27rpx;
		line-height: 90rpx;
	}

	.tousu {
		font-size: 24rpx;
		line-height: 90rpx;
		margin-right: 20rpx;
		margin-left: auto;
		color: #FF212C;
	}

	.kaituan {
		margin-top: 62rpx;
		height: 60rpx;
		width:223rpx;
		display: flex;
		justify-content: center;
		border-radius: 30px;
		line-height: 60rpx;
		font-size:30rpx;
		background-color: #ff212c;
		color: #FFFFFF;
		margin-bottom: 60rpx;
	}

	.button_bottom {
		width: 100%;
		display: flex;
		background: #eee;
		justify-content: space-around;
	}

	.kuaipin {
		margin-top: 62rpx;
		height: 60rpx;
		width:223rpx;
		display: flex;
		justify-content: center;
		border-radius: 30px;
		line-height: 60rpx;
		font-size: 30rpx;
		background-color: #ed9b42;
		color: #FFFFFF;
		margin-bottom: 60rpx;
	}

	.goumai {
		margin-top: 62rpx;
		height: 60rpx;
		width:223rpx;
		display: flex;
		justify-content: center;
		border-radius: 30px;
		line-height: 60rpx;
		font-size: 30rpx;
		background-color: #fd632d;
		color: #FFFFFF;
		margin-bottom: 60rpx;
	}

	.tu1 {
		height: 30rpx;
		width: 36rpx;
		margin-right: 12rpx;
	}

	/* 底部分享 */
	.uni-share {
		background: #fff;
	}

	.uni-share-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
		text-align: center;
	}

	.uni-share-content {
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
		width: 100%;
		justify-content: space-around;
	}

	.uni-share-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
		box-sizing: border-box;
	}

	.uni-share-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60upx;
		height: 60upx;
		overflow: hidden;
		border-radius: 10upx;
	}

	.uni-share-content-image .image {
		width: 100%;
		height: 100%;
	}

	.uni-share-content-text {
		font-size: 26upx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}

	.uni-share-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
		text-align: center;
		color: #666;
	}
	.blackbox {
		width: 750rpx;
		height: 1334rpx;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
	}
	.shopdetialmsgbox {
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		width: 750rpx;
		/* min-height: 1100rpx; */
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
