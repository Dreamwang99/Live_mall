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
					还差<view style="color: red;">{{n.surplus_num}}人</view>拼成
				</view>
				<view class="cantuan" @tap="nowboy(2,n.group_people_num,n.id)">去参团（选规格）</view>
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
			<view class="baobei">宝贝评价（{{allCounts}}）</view>
			<view class="pingjia_let" @tap="chakanpj">
				<view class="chakan">查看全部</view>
				<image class="jr" src="../../static/pintuan/iocn-76-jinru.png" mode=""></image>
			</view>
		</view>
		<view class="pingjia_detail">
			<image class="tx" :src="userCommentsInfo.avatar"></image>
			<view class="xh">
				{{userCommentsInfo.user_nicename}}
			</view>
		</view>
		<view class="pingjia">
			{{userCommentsInfo.content}}
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
				<image :src="goodsInfo.logo" mode="" class="shopmsg1img"></image>
				<view class="shoppircebox">
					<view class="pricetitle">￥{{getPrice}}</view>
					<view class="repertory">库存118件</view>
				</view>
			</view>
			<view class="shopmsg2">{{goodsInfo.title}}</view>
			<view class="shopmsg3" v-show="nowboyor==0">
				<view class="forname">团购规格</view>
				<view class="forcontent">
					<view class="colorbox" v-for="(j,j_idx) in tuanList" :key="j_idx" :class="[current_j === j_idx ? 'ac' : '']" @tap="choseTType(j_idx)">
						{{j.name}}
					</view>
					<!-- <view class="colorbox" :class="tuan ==3 ? 'ac':''" @tap="jointuan(3)">三人团</view>
					<view class="colorbox" :class="tuan ==5 ? 'ac':''" @tap="jointuan(5)">五人团</view> -->
				</view>
			</view>
			<view class="shopmsg3" v-for="(color,index) in specifications" :key='index'>
				<view class="forname">{{color.name}}</view>
				<view class="forcontent">
				<view class="colorbox" :class="{'ac':col.isChose}" v-for="(col,index1) in color.list" :key='index1' @tap="choosecolor(index,index1)">{{col.name}}</view>
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
				<view class="postagecontent">{{goodsInfo.price_express}}</view>
			</view>
			<view class="center" @tap="sureBuy()" v-show="nowboyor==1">确定购买</view>
			<view class="center" @tap="sureOpenT()" v-show="nowboyor==0">确定开团</view>
			<view class="center" @tap="sureCanT()" v-show="nowboyor==2">确定参团</view>
		</view>
		<uni-popup ref="share" :type="type" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" @tap="shareTypes(item.text)" :key="index" class="uni-share-content-box">
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
	import bridge from '@/common/unfile/unfile.js';
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
				// 规格信息
				specifications : [],
				// 选中的颜色
				isChoseColor : "",
				// 选中的尺码
				isChoseSize : "",
				// 所有规格信息
				allInfo : [],
				// 
				tuanList : [
					{
						name : "三人团"
					},
					{
						name : "五人团"
					}
				],
				cTid : 0,
				current_j : -1,
				getPrice : "",
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
				tPeopleNums : 0,
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
				nowboyor: -1,
				spec : "",
				tuan: 3,
				token: uni.getStorageSync('token'),
				goods_id:'',
				number: 1,
				num: 1,
				userCommentsInfo : "",
				allCounts : 0
			};
		},
		onLoad(options) {
			this.goods_id = options.goods_id
			this.getLocation();
			this.getGoodsDetails();
			this.getComments();
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
						this.allInfo = JSON.parse(res.data.goods.lists)
						var getInfo = JSON.parse(res.data.goods.specs)
						getInfo.forEach((item,index)=>{
							item.list.forEach((i,idx)=>{
								i.isChose = false
							})
						})
						this.specifications = getInfo
						console.log(this.specifications);
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			// 视频跳转
			videoTo(url){
				uni.navigateTo({
					url:'./videoPlay?urls='+url
				})
			},
			// 商品规格
			getSpecifications(color,size){
				if(!color || !size){}else{
					this.allInfo.forEach((item,index)=>{
						if(item[0].name === color && item[1].name === size){
							this.spec = item[0].key
						}
					})
					if(this.nowboyor === 0 || this.nowboyor === 2){
						this.request.getGoodsSpecDetails({
							goods_id : this.assembleInfo.id,
							goods_spec : this.spec
						}).then(res=>{
							console.log(res);
							if(res.code === 1){
								if(this.current_j === 0){
									this.getPrice = res.data.group_price_three
								}else if(this.current_j === 1){
									this.getPrice = res.data.group_price_five
								}
							}else{
								uni.showToast({
									title:res.msg,
									icon:'none'
								})
							}
						})
					}else if(this.nowboyor === 1){
						this.request.gitshopspecification({
							goods_id : this.goods_id,
							goods_spec : this.spec
						}).then(res=>{
							console.log(res);
							if(res.code === 1){
								this.getPrice = res.data.price_selling
							}else{
								uni.showToast({
									title:res.msg,
									icon:'none'
								})
							}
						})
					}
				}
			},
			choosecolor(idx_a,idx_b){
				this.specifications.forEach((item,index)=>{
					if(idx_a === index){
						item.list.forEach((i,idx)=>{
							if(idx === idx_b){
								i.isChose = true
								if(index === 0){
									this.isChoseColor = i.name
									if(!this.isChoseSize){}else{
										this.getSpecifications(this.isChoseColor,this.isChoseSize);
									}
								}else{
									this.isChoseSize = i.name
									if(!this.isChoseColor){}else{
										this.getSpecifications(this.isChoseColor,this.isChoseSize);
									}
								}
							}else{
								i.isChose = false
							}
						})
					}
				})
			},
			sureOpenT(){
				if(!this.isChoseColor){
					uni.showToast({
						title:"请选择要购买的颜色",
						icon:'none'
					})
					return false
				}else if(!this.isChoseSize){
					uni.showToast({
						title:"请选择要购买的尺寸",
						icon:'none'
					})
					return false
				}
				uni.navigateTo({
					url:'/pages/dingdantijiao/dingdantijiao?goods_type='+'4'+"&goods_spec="+this.spec+"&id="+this.goods_id+"&tPeopleNums="+this.tPeopleNums+"&activityid="+this.assembleInfo.id+"&types="+"开团"
				})
			},
			sureBuy(){
				if(!this.isChoseColor){
					uni.showToast({
						title:"请选择要购买的颜色",
						icon:'none'
					})
					return false
				}else if(!this.isChoseSize){
					uni.showToast({
						title:"请选择要购买的尺寸",
						icon:'none'
					})
					return false
				}
				uni.navigateTo({
					url:'/pages/dingdantijiao/dingdantijiao?goods_type='+'0'+"&goods_spec="+this.spec+"&id="+this.goods_id+"&number="+this.number
				})
			},
			sureCanT(){
				if(!this.isChoseColor){
					uni.showToast({
						title:"请选择要购买的颜色",
						icon:'none'
					})
					return false
				}else if(!this.isChoseSize){
					uni.showToast({
						title:"请选择要购买的尺寸",
						icon:'none'
					})
					return false
				}
				uni.navigateTo({
					url:'/pages/dingdantijiao/dingdantijiao?goods_type='+'4'+"&goods_spec="+this.spec+"&id="+this.goods_id+"&activityid="+this.cTid+"&tPeopleNums="+this.tPeopleNums+"&types="+"参团"
				})
			},
			choseTType(idx){
				this.current_j = idx
				if(idx === 0){
					this.tPeopleNums = 3
				}else if(idx === 1){
					this.tPeopleNums = 5
				}
				this.getSpecifications(this.isChoseColor,this.isChoseSize);
			},
			nowboy(e,nums,idx){
				console.log(e);
				this.showmsgdetial = true
				this.nowboyor = e
				if(e === 2){
					this.cTid = idx
					this.tPeopleNums = nums
					if(nums === 3){
						this.current_j = 0
					}else if(nums === 5){
						this.current_j = 1
					}
				}
			},
			closeshopdetial(){
				this.showmsgdetial = false
				this.current_j = -1
				this.nowboyor = -1
				this.getPrice = ""
				this.isChoseColor = ""
				this.isChoseSize = ""
				this.specifications.forEach((item,index)=>{
					item.list.forEach((i,idx)=>{
						i.isChose = false
					})
				})
			},
			// 商品评论
			getComments(){
				this.request.getShopCommon({
					token : uni.getStorageSync('token'),
					shop_id : this.goods_id
				}).then(res=>{
					console.log(res);
					if(res.code === 1){
						this.userCommentsInfo = res.data.common
						this.allCounts = res.data.count
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			//加减计算
			fixNum(e, id) {
				console.log(e)
				console.log(id)
				this.number= e
			},
			jointuan(e){
				this.tuan = e
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
					url: '../quanbupinglun/quanbupinglun?id='+this.goods_id,
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
			},
			shareTypes(types){
				var shareInfo = new Object();
				shareInfo.title = "快拼分享";
				shareInfo.describe = "快来参加我的团";
				shareInfo.linkUrl = "https://www.baidu.com/"
				if(types === "微信好友"){
					bridge.call('shareWeChatFriends', shareInfo);
					bridge.register('shareWeChatFriendsCallback',(res)=>{
						console.log(res);
					});
				}else{
					bridge.call('shareWeChatCircle', shareInfo);
					bridge.register('shareWeChatCircleCallback',(res)=>{
						console.log(res);
					});
				}
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
