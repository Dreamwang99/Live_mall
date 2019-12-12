<template>
	<view>
		<view class="beijing1" :style="{ backgroundImage: 'url(' + '../../static/shouye/bg-top.png' + ')' }">
			<view class="shouye_top">
				<image class="mi" src="../../static/shouye/logo-84-wz.png" mode=""></image>
				<view class="sousuo">
					<image class="fangdajing" src="../../static/icon-fangdajing.png" mode="aspectFit"></image>
					<input class="shuru" type="text" value="" placeholder="请输入搜索内容" @tap="goSousuo()" />
				</view>
				<image class="xinxi" src="../../static/shouye/iocn-xx.png" mode="aspectFit" @tap="xinxi"></image>
			</view>
			<view class="heng">
				<view class="topTitle" v-for="(item, index) in list" :key="index" @click="cancel(index)">
					<text :class="item.a ? 'sp' : 'tj'">{{ item.name }}</text>
				</view>
			</view>
			<view class="beijing2" :style="{ backgroundImage: 'url(' + '/static/shouye/bg-84.png' + ')' }">
				<view v-if="b === 0">
					<swiper class="chufang" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<swiper-item>
							<image @click="sp1" class="chufang" src="/static/shouye1/banner.png"></image>
						</swiper-item>
						<swiper-item>
							<image @click="sp1" class="chufang" src="/static/shouye1/banner.png"></image>
						</swiper-item>
						<swiper-item>
							<image @click="sp1" class="chufang" src="/static/shouye1/banner.png"></image>
						</swiper-item>
					</swiper>
					<view class="lhd" :style="{ backgroundImage: 'url(' + '/static/shouye1/bg-lhd.png' + ')' }">
						这是一个礼花弹！！！>
					</view>
					<view class="heng">
						<view class="hezi" v-for="(item,index) in shouye" :key="index" @tap="dianji(index)">
							<image class="tu" :src="item.urlimg" mode="aspectFit"></image>
							<view class="zi">{{item.name}}</view>
						</view>
					</view>
					<view class="heng pinkanzhuanqu" @tap="Chopping()">
						<image class="pk" src="../../static/shouye1/iocn-pkzq.png" mode=""></image>
						<view class="pkzq">拼砍专区</view>
						<view class="gengduo">更多</view>
						<image class="jr" src="../../static/fabu/iocn-50-jinru.png" mode="aspectFit"></image>
					</view>
					<view class="heng" style="border-bottom: 10rpx solid #eee;" @tap="Chopping()">
						<view class="zhainan ">
							<view class="znbibei">宅男必备</view>
							<view class="content">
								<view class="shengyu">仅剩余</view>
								<view class="jj">99</view>
								<view class="jian">件</view>
							</view>
							<image class="diannao" src="../../static/shouye1/img-dn.png" mode="aspectFit"></image>
						</view>
						<view class="right">
							<view class="tuan">
								<view class="right_tuan">
									<view class="tuangouhaohuo">团购好货</view>
									<view class="xiamo">夏末新品清仓</view>
								</view>
								<image class="yifu" src="../../static/shouye1/img-yf.png" mode="aspectFit"></image>
							</view>
							<view class="heng">
								<view class="jinqiufs">
									<view class="jinqiu">金秋丰收</view>
									<view class="xiying">喜迎甜蜜来袭</view>
									<view class="rgm">
										<image src="../../static/shouye1/img-rgm.png" mode="aspectFit"></image>
									</view>
								</view>
								<view class="jinqiufs">
									<view class="jinqiu">天天特惠</view>
									<view class="xiying">智能穿戴</view>
									<view class="rgm">
										<image src="../../static/shouye1/img-sm.png" mode="aspectFit"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="heng pinkanzhuanqu">
						<image class="pk" src="../../static/shouye1/icon-zb.png" mode=""></image>
						<view class="pkzq">直播短视频</view>
						<view class="gengduo" @tap="govideo">更多</view>
						<image class="jr" src="../../static/fabu/iocn-50-jinru.png" mode="aspectFit"></image>
					</view>
					<view class="baidi">
						<scroll-view scroll-x="true" style=" white-space: nowrap; display: flex">
							<view class="zhibo_content" v-for="(item,index) in viedioList" :key="index">
								<view class="xiaoshipin2" :style="{ backgroundImage: 'url(' + item.backimg + ')' }" @tap="zhibo1">
									<view class="jinru">{{item.name}}</view>
								</view>
							</view>
						</scroll-view>
						<scroll-view scroll-x="true" style=" white-space: nowrap; display: flex;width: 100%;">
							<!--  display: inline-block-->
							<view class="xiaoshipin " v-for="(item,index) in list1" :key="index" @tap="zhibo(index)">
								<view class="xiaoshipin1" :style="{ backgroundImage: 'url(' + item.backimg + ')' }">
								</view>
								<view class="tidaikuan">{{item.name}}</view>
								<view class="heng cent">
									<image class="tx1" :src="item.touxiang" mode="aspectFit"></image>
									<view class="lier">{{item.nicheng}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					<view class="xian"></view>
					<view class="baidis" @tap="dianji(0)">
						<view class="pinkanzhuanqu">
							<image class="pk" src="../../static/shouye1/iocn-sc.png" mode=""></image>
							<view class="pkzq">热卖商城</view>
						</view>
						<image class="tupian" src="../../static/shouye1/img-sp.png"></image>
					</view>
					<view class="shangpin">
						<view class="goods" v-for="(item,index) in remaisc" :key=index @tap="sp(item.id)">
							<image class="hezi1" :src='item.logo'></image>
							<view class="baidi1">
								<view class="sp1">{{item.title}}</view>
								<view class="heng9">
									<view class="jiage">{{item.price_selling}}</view>
									<view class="renshu">{{item.number_sales}}人付款</view>
								</view>
							</view>
						</view>

					</view>
				</view>
				<view class="shangjia" v-if="b === 1">
					<image class="banner" src="../../static/shouye/banner-82-.png" mode=""></image>
					<view class="shangjia_title">
						<view style="display: flex;">
							<view v-for="(item,index) in title" :key="index" @tap="chooseT(index)">
								<view :class="item.status?'jl':'zd'">{{item.name}}</view>
							</view>
						</view>
						<!-- <view @click="right" class="title_right">
							<view class="">筛选</view>
							<image class="sxtu" src="../../static/ershou/iocn-63-sx.png" mode=""></image>
						</view> -->
					</view>
					<view class="jindian_content">
						<view class="box" v-for="(item,index) in jindian" :key="index">
							<view class="dianpu_box">
								<view class="heng_dian">
									<view class="jindian_left">
										<image class="tx" :src='item.business_logo' mode="aspectFit"></image>
										<view style="display: flex;flex-direction: column;">
											<text class="xm">{{item.business_name}}</text>
											<text class="xm1">{{item.brand_title}}</text>
										</view>
									</view>
									<view class="jd" @click="jindian1(item.id)">进店</view>
								</view>
								<view class="heng">
									<image v-for="(img,idx) in item.goods_list" class="tup" :src="img.logo" @tap="goodsdetails(img.id)"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="shipin_top" v-if="b === 2">
					<image class="banner" src="../../static/shouye/banner-82-.png" mode=""></image>
					<view class="shipinList">
						<view class="shipin" v-for="(item,index) in shipin" :key="index">
							<view class="beijing" :style="{ backgroundImage: 'url(' + item.thumb_s + ')' }">
								<view style="display: flex;flex-direction:column;">
									<view class="xh">@{{item.userinfo.liang.name}}</view>
									<view style="display: flex;flex-direction: row;">
										<text class="xh1">{{item.title}}!</text>
										<image class="xh2" src="/static/dpshoucang/iocn-89-bf.png" mode=""></image>
										<text class="xh3">{{item.number}}</text>
									</view>
								</view>
							</view>
						</view>

					</view>
				</view>
				<view class="free" v-if="b === 3">
					<image class="banner" src="../../static/shouye/banner-84.png" mode=""></image>
					<view class="list" v-for="(item,index) in mianfeina" :key="index">
						<view class="free_img">
							<image class="logo1" :src="item.business_logo"></image>
						</view>
						<view class="free_right">
							<view class="xiaomi">{{item.title}}</view>
							<view class="xiangqing">{{item.introduction}}</view>
							<view class="free_bottom">
								<view class="prise">{{item.number_sales}}</view>
								<view class="dianji" @tap="gofree(item)">点击免费拿</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<luPopupWrapper ref="luPopupWrapper" :type="type" :transition="transition" :backgroundColor="backgroundColor" :active="active"
		 :height="height" :width="width" :popupId="popupId" :maskShow="maskShow" :maskClick="maskClick">
		 <view class="status_bar">
		 	<view class="top_view"></view>
		 </view>
			<view class="content_popup">
				<view class="screen">筛选</view>
				<view class="shaixuan_title">
					价格
				</view>
				<view class="paixu">
					<view v-for="(item,index) in shaixuan" :key="index" @tap="choose(index)">
						<view :class="item.status?'paixu_title':'paixu_none'">{{item.name}}</view>
					</view>
				</view>
				<view class="shaixuan_title">
					距离
				</view>
				<view :class="shangjia.status?'paixu_shangjia1':'paixu_shangjia2'" @tap="choose1(shangjia.status)">
					{{shangjia.name}}
				</view>
				<view class="confirm">
					确认
				</view>
			</view>
		</luPopupWrapper>


	</view>
</template>

<script>
	import luPopupWrapper from "@/components/lu-popup-wrapper/lu-popup-wrapper.vue";
	export default {
		components: {
			luPopupWrapper
		},
		data() {
			return {
				type: "bottom", // left right top bottom center
				transition: "slider", //none slider fade
				backgroundColor: '#FFF',
				active: false,
				height: "100%",
				width: "100%",
				popupId: 1,
				maskShow: true,
				maskClick: true,
				b: 0,
				shaixuan: [{
						name: '由高到低',
						status: true
					},
					{
						name: '由低到高',
						status: false
					},
				],
				shangjia: {
					name: '附近商家',
					status: true
				},
				shipin: [{
						img: '/static/dpshoucang/img-46-sp.png',
						name: '小黑粉',
						title: '给大家拍个视频来看看',
						number: 123
					},
					{
						img: '/static/dpshoucang/img-46-sp.png',
						name: '小黑粉',
						title: '给大家拍个视频来看看',
						number: 123
					}, {
						img: '/static/dpshoucang/img-46-sp.png',
						name: '小黑粉',
						title: '给大家拍个视频来看看',
						number: 123
					}
				],

				title: [{
					status: true,
					order: 'distance',
					name: '距离'
				}, {
					status: false,
					order: 'sales',
					name: '销量'
				}],
				jindian: [{
						img: '../../static/dpshoucang/img-49-tx.png',
						name: '小米官方旗舰店',
						xinxi: '1.2km|小米|徐州|1234月销量',
						jd: '进店',
						image: '../../static/dpshoucang/img-49-sp.png'
					},
					{
						img: '../../static/dpshoucang/img-49-tx.png',
						name: '小米官方旗舰店',
						xinxi: '1.2km|小米|徐州|1234月销量',
						jd: '进店',
						image: '../../static/dpshoucang/img-49-sp.png'
					},
					{
						img: '../../static/dpshoucang/img-49-tx.png',
						name: '小米官方旗舰店',
						xinxi: '1.2km|小米|徐州|1234月销量',
						jd: '进店',
						image: '../../static/dpshoucang/img-49-sp.png'
					},
				],
				mianfeina: [{
						img: '/static/fabu/img-23-tp.png',
						name: '【小米】新鲜水果特价榨汁机',
						name1: '小米原生水果特价榨汁机，三种颜色任你...',
						name3: '已送出100件',
					},
					{
						img: '/static/fabu/img-23-tp.png',
						name: '【小米】新鲜水果特价榨汁机',
						name1: '小米原生水果特价榨汁机，三种颜色任你...',
						name3: '已送出100件',
					},
					{
						img: '/static/fabu/img-23-tp.png',
						name: '【小米】新鲜水果特价榨汁机',
						name1: '小米原生水果特价榨汁机，三种颜色任你...',
						name3: '已送出100件',
					}


				],
				remaisc: [{
						img: '/static/shouye1/img-sp_18.png',
						name: '香橙果味榨汁机',
						prise: '¥128',
						fukuan: '821人付款'
					},
					{
						img: '/static/shouye1/img-sp_18.png',
						name: '香橙果味榨汁机',
						prise: '¥128',
						fukuan: '821人付款'
					},
					{
						img: '/static/shouye1/img-sp_18.png',
						name: '香橙果味榨汁机',
						prise: '¥128',
						fukuan: '821人付款'
					},
					{
						img: '/static/shouye1/img-sp_18.png',
						name: '香橙果味榨汁机',
						prise: '¥128',
						fukuan: '821人付款'
					},

				],
				viedioList: [{
						backimg: '/static/shouye1/img-dsp.png',
						name: '直播间'
					}, {
						backimg: '/static/shouye1/img-dsp.png',
						name: '直播间'
					},
					{
						backimg: '/static/shouye1/img-dsp.png',
						name: '直播间'
					}
				],
				list1: [{
						backimg: '/static/shouye1/img-dsp.png',
						name: '雅诗兰黛“钢铁侠”平价替代款',
						touxiang: '/static/shouye1/img-tx.png',
						nicheng: '李二狗'
					},
					{
						backimg: '/static/shouye1/img-dsp.png',
						name: '雅诗兰黛“钢铁侠”平价替代款',
						touxiang: '/static/shouye1/img-tx.png',
						nicheng: '李二狗'
					},
					{
						backimg: '/static/shouye1/img-dsp.png',
						name: '雅诗兰黛“钢铁侠”平价替代款',
						touxiang: '/static/shouye1/img-tx.png',
						nicheng: '李二狗'
					},
					{
						backimg: '/static/shouye1/img-dsp.png',
						name: '雅诗兰黛“钢铁侠”平价替代款',
						touxiang: '/static/shouye1/img-tx.png',
						nicheng: '李二狗'
					},
					{
						backimg: '/static/shouye1/img-dsp.png',
						name: '雅诗兰黛“钢铁侠”平价替代款',
						touxiang: '/static/shouye1/img-tx.png',
						nicheng: '李二狗'
					}
				],
				list: [{
						name: '推荐',
						a: true
					},
					{
						name: '个人商家',
						a: false
					},
					{
						name: '视频',
						a: false
					},
					{
						name: '免费拿',
						a: false
					},
				],
				shouye: [{
						urlimg: '/static/shouye1/btn-sc.png',
						name: '商城'
					},
					{
						urlimg: '/static/shouye1/btn-eshh.png',
						name: '二手好货'
					},
					{
						urlimg: '/static/shouye1/iocn-dptj.png',
						name: '店铺推荐'
					},
					{
						urlimg: '/static/shouye1/iocn-ms.png',
						name: '每日必秒'
					},
				],
				order: 'distance',
				longitude: '',
				latitude: '',
				pages: 1,
			}
		},
		onReachBottom(){
			this.pages ++
			// this.getMerchantsshoplist(this.order)
		},
		onLoad() {
			this.getList()
			this.getvideolist()
			this.getbarngin()
			this.getMerchantsshoplist(this.order)
		},
		methods: {
			//拼砍专区
			Chopping(){
				this.list[0].a = false
				this.list[3].a = true;
				this.b = 3
			},
			getList(){
				this.request.getindexG({
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res)
					this.remaisc = res.data
				})
			},
			
			getMerchantsshoplist(order){
				this.request.getMerchantsList({
					page: this.pages,
					num: 4,
					// longitude: this.longitude,
					// latitude: this.latitude,
					longitude: 1,
					latitude: 1,
					order: order,
				}).then(res => {
					if(this.pages == 1){
						this.jindian = []
					}
					if(res.data.length==0){
						if(this.page>1){
							this.pages--
						}
						uni.showToast({
							title: "没有更多了",
							icon: "none",
						});
					}
					
					this.jindian = this.jindian.concat(res.data)
					console.log(res.data)
				})
			},
			//免费拿
			getbarngin(){
				this.request.getBargain({
					token: uni.getStorageSync('token'),
					page: 1,
					size: 1
				}).then(res => {
					console.log(res)
					this.mianfeina = res.data
				})
			},
			//获取视频
			getvideolist(){
				this.request.getVideoList({
					uid: uni.getStorageSync('id')
				}).then(res => {
					console.log(res)
					this.shipin = res.data.info
				})
			},
			jindian1(id) {
				uni.navigateTo({
					url: '../dianpu/dianpu?shopid='+id
				})
			},
			goSousuo() {
				uni.navigateTo({
					// url: '../sousuokuang/sousuokuang'
					url:'../fenlei/sousuo'
				})
			},
			sp(id) {
				uni.navigateTo({
					url: '../shangpinxiangqing/shangpinxiangqing?id='+id
				})
				// switch (index) {
				// 	case index:
				// 		uni.navigateTo({
				// 			url: '../shangpinxiangqing/shangpinxiangqing'
				// 		})
				// 		break;

				// 	default:
				// 		break;
				// }
			},
			sp1() {
				uni.navigateTo({
					url: '../shangpinxiangqing/shangpinxiangqing'
				})
			},
			choose(index) {
				for (let i = 0; i < this.shaixuan.length; i++) {
					if (index == i) {
						this.shaixuan[i].status = true;
					} else {
						this.shaixuan[i].status = false;
					}
				}
			},
			govideo() {
				uni.navigateTo({
					url: '../zhiboduanshipin/zhiboduanshipin'
				})
			},
			choose1(status) {
				this.shangjia.status = !this.shangjia.status
				console.log("cwj" + this.shangjia.status)
			},
			zhibo(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '../zhibojian/zhibojian'
						})
						break;
					case 1:
						uni.navigateTo({
							url: '../zhibojian/zhibojian'
						})
						break;
					case 2:
						uni.navigateTo({
							url: '../zhibojian/zhibojian'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '../zhibojian/zhibojian'
						})
						break;
					default:
						break;
				}
			},
			zhibo1() {
				uni.navigateTo({
					url: '../zhibojian/zhibojian'
				})
			},
			xinxi() {
				uni.navigateTo({
					url: '../xinxitongzhi/xinxitongzhi'
				})
			},
			gofree(item) {
				uni.navigateTo({
					url:'../shangpinxiangqing/shangpinxiangqing?id='+item.goods_id
					// url: '../kanjia/kanjia?goods_id='+item.goods_id
				})
			},
			/* 筛选弹窗 */
			right: function() {
				this.width = "50%";
				this.height = "100%";
				this.transition = "slider";
				this.type = "right";
				this.show();
			},
			show: function() {
				this.$refs.luPopupWrapper.show();
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			dianji(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '../shangcheng/shangcheng',
						})
						break;
					case 1:
						uni.navigateTo({
							url: '../ershouhaohuo/ershouhaohuo',
						})
						break;
					case 2:
						uni.navigateTo({
							url: '../dianputuijian/dianputuijian',
						})
						break;
					case 3:
						uni.navigateTo({
							url: '../meiribimiao/meiribimiao',
						})
						break;
					default:
						break;
				}
			},
			cancel(index) {
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.list[i].a = true;
						this.b = i;
					} else {
						this.list[i].a = false;
					}
				}
			},
			chooseT(index) {
				this.pages = 1
				for (let i = 0; i < this.title.length; i++) {
					if (index == i) {
						this.title[i].status = true;
						this.order = this.title[i].order
						this.getMerchantsshoplist(this.order)
					} else {
						this.title[i].status = false;
					}
				}
			},

		}
	}
</script>

<style scoped>
	.shaixuan_title {
		width: 100%;
		padding: 20rpx 30rpx;
		font-size: 30rpx;
	}

	.paixu {
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #F8F8F8;
	}
	
	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background:#fff;
		top: 0;
		z-index: 999;
	}
	.paixu_title {
		/* width: 35%; */
		border: 1px solid red;
		color: red;
		border-radius: 1rem;
		padding: 5rpx 15rpx;
	}

	.paixu_none {
		/* width: 35%; */
		background: #eee;
		color: #494949;
		border-radius: 1rem;
		height: 50rpx;
		text-align: center;
		/* line-height: 50rpx; */
		padding: 5rpx 15rpx;
	}

	.confirm {
		background: red;
		width: 90%;
		border-radius: 1rem;
		margin: auto;
		margin-top: 35%;
		height: 60rpx;
		text-align: center;
		color: #fff;
		line-height: 60rpx;
	}

	.paixu_title1 {
		padding-left: 30rpx;
	}

	.mycontent {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		overflow: scroll;
	}

	.paixu_shangjia1 {
		border: 1px solid red;
		color: red;
		width: 35%;
		border-radius: 1rem;
		margin-left: 7%;
		text-align: center;
		padding: 6rpx 0;
	}

	.paixu_shangjia2 {
		background: #eee;
		color: #494949;
		width: 35%;
		border-radius: 1rem;
		margin-left: 7%;
		text-align: center;
		padding: 6rpx 0;
	}

	.beijing1 {
		width: 100%;
		height: 425rpx;
		background-size: cover;
		padding-top: 30rpx;
	}

	.screen {
		font-size: 30rpx;
		width: 100%;
		border-bottom: 1px solid #eee;
		text-align: center;
		padding-bottom: 20rpx;
	}

	.baidi {
		width: 100%;
		padding-bottom: 10rpx;
		background-color: #FFFFFF;
		padding-left: 21rpx;
	}

	.baidis {
		width: 100%;
		padding-bottom: 10rpx;
		background-color: #FFFFFF;
	}

	.baidi1 {
		background-color: #FFFFFF;
		width: 100%;
	}

	.xian {
		height: 10rpx;
		margin-bottom: 20rpx;
	}

	.xian1 {
		height: 20rpx;
	}

	.heng {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-direction: row;
	}

	.heng_dian {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		padding-right: 10rpx;
	}

	.shouye_top {
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding-top: 60rpx;
		align-items: center;
		padding-right: 20rpx;
	}

	.free_bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}

	.beijing {
		display: flex;
		align-items: flex-end;
		width:349rpx;
		height: 499rpx;
		padding-bottom: 10rpx;
		background-size: 100% 100%;
	}

	.jl {
		font-size: 28rpx;
		color: #ff212c;
		padding: 10rpx 25rpx 10rpx 0;
	}

	.zd {
		font-size: 28rpx;
		padding: 10rpx 25rpx 10rpx 0;
		color: #161616;
	}

	.xl {
		margin-left: 40rpx;
		color: black;
	}

	.xiaoshipin {
		display: inline-block;
		width: 174rpx;
		margin: 5rpx;
		text-align: center;
		margin-bottom: 28rpx;
		padding-bottom: 20rpx;
	}

	.jindian_content {
		background: #fff;
		width: 100%;
	}

	.mi {
		height: 61rpx;
		width: 62rpx;
		margin-left: 21rpx;
	}

	.xiaoshipin1 {
		height: 165rpx;
		width: 174rpx;
		background-size: cover;

	}

	.xiaoshipin2 {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 305rpx;
		width: 407rpx;
		background-size: cover;
	}

	.tidaikuan {
		font-size: 16rpx;
		margin-top: 8rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		white-space: pre-line;
	}

	.cent {
		width: 100%;
		justify-content: center;
	}

	.tx1 {
		height: 30rpx;
		width: 30rpx;
		margin-top: 23rpx;

	}

	.lier {
		font-size: 16rpx;
		margin-top: 22rpx;
		margin-left: 10rpx;
	}

	.sousuo {
		height: 61rpx;
		width: 72%;
		display: flex;
		align-items: center;
		/* margin-left: 20rpx; */
		background-color: #ffffff;
		border-radius: 30rpx;
	}

	.goods {
		width: 335rpx;
		background: #fff;
		margin:5rpx;
	}

	.free_right {
		width: 480rpx;
		height: 161rpx;
	}

	.fangdajing {
		width: 28rpx;
		height: 28rpx;
		margin-left: 28rpx;
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.shangpin {
		width: 690rpx;
		margin:10rpx auto;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 100rpx;
	}

	.shuru {
		font-size: 24rpx;
		margin-left: 30rpx;
		margin-right: 10rpx;
	}

	.xinxi {
		height: 35rpx;
		/* 40 修改成45 */
		width: 45rpx;
	}

	.xh1 {
		margin-left: 12rpx;
		font-size: 18rpx;
		color: #FFFFFF;
	}

	.xh2 {
		margin-left: 20rpx;
		margin-top: 8rpx;
		height: 18rpx;
		width: 18rpx;
	}

	.xh3 {
		font-size: 20rpx;
		color: #FFFFFF;
		margin-top: 5rpx;
		padding-right: 10rpx;
	}

	.title_right {
		display: flex;
		align-items: center;
	}

	.xh {
		margin-left: 12rpx;
		font-size: 25rpx;
		color: #FFFFFF;
		width: 100%;
	}

	.free {
		width: 100%;
		margin-bottom: 120rpx;
		background: #fff;
	}

	.beijing2 {
		margin-top: 20rpx;
		height: 1200rpx;
		width: 100%;
		background-size: 100% 100%;
	}

	.list {
		display: flex;
		flex-direction: row;
		/* width:725rpx; */
		height: 213rpx;
		justify-content: space-around;
		padding:20rpx 30rpx 0 30rpx;
		border-bottom: 1px solid #eee;
	}

	.zhibo_img {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.free_img {
		width:198rpx;
		margin-right: 10rpx;
		margin-bottom: 40rpx;
	}

	.xiaomi {
		width: 100%;
		/* margin-top: 25rpx; */
		font-size: 24rpx;
	}

	.shipinList {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10rpx 21rpx;
	}

	.prise {
		color: red;
		font-size: 22rpx;
		margin-left: 10rpx;
	}

	.dianji {
		height: 46rpx;
		line-height: 46rpx;
		padding: 0 15rpx;
		background-color: #f13d22;
		border-radius: 30rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		text-align: center;
	}

	.topTitle {
		width: 25%;
		text-align: center;
		padding-top: 10rpx;
	}

	.logo1 {
		height: 172rpx;
		width:198rpx;
		margin-right: 10rpx;
	}

	.shangjia {
		width: 100%;
		margin-bottom: 100rpx;
	}

	.list {
		display: flex;
		flex-direction: row;
	}

	.shangjia_title {
		display: flex;
		width: 100%;
		padding: 10rpx 20rpx;
		justify-content: space-between;
		align-items: center;
	}

	.list1 {
		height: 175rpx;
		width: 200rpx;
		margin-left: 30rpx;
		margin-right: 10rpx;
		margin-bottom: 40rpx;
	}

	.xiangqing {
		width: 100%;
		height:95rpx;
		padding-right: 10rpx;
		color: #C0C0C0;
		font-size: 22rpx;
		margin-left: 10rpx;
	}

	.rgm image {
		width: 100%;
		height: 60rpx;
	}

	.tj {
		width: 100%;
		font-size: 24rpx;
		line-height: 57rpx;
		/* margin-left: 60rpx; */
		color: #FFFFFF;
		text-align: center;
		/* margin-right: 55rpx; */
		margin-top: 12rpx;
	}

	.hezi1 {
		height: 291rpx;
		width: 341rpx;
	}

	.sp {
		margin-top: 12rpx;
		width: 100%;
		line-height: 57rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 30rpx;
	}

	.chufang {
		height: 287rpx;
		width: 710rpx;
		display: block;
		margin: auto;
	}

	.banner {
		height: 221rpx;
		width: 710rpx;
		display: block;
		margin: auto;
	}

	.swiper-item {}

	.lhd {
		height: 45rpx;
		width: 100%;
		background-size: cover;
		margin-top: 20rpx;
		font-size: 27rpx;
		text-align: center;
		line-height: 42rpx;
		color: #FFFFFF;
	}

	.tupian {
		height: 305rpx;
		width: 689rpx;
		display: block;
		margin: auto;
		/* padding:0 30rpx 10rpx 30rpx; */
	}

	.hezi {
		height: 184rpx;
		width: 176rpx;
		text-align: center;
	}

	.tu {
		height: 98rpx;
		width: 98rpx;
		margin-top: 21rpx;
	}

	.zi {
		font-size: 21rpx;
	}

	.pinkanzhuanqu {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 10rpx 30rpx 0 15rpx;
		line-height: 70rpx;
		background-color: #FFFFFF;
	}

	.pk {
		margin-left: 20rpx;
		height: 30rpx;
		width: 30rpx;
		margin-top: 20rpx;
	}

	.pkzq {
		font-size: 28rpx;
		margin-left: 10rpx;
	}

	.gengduo {
		font-size: 18rpx;
		color: #c4c3c3;
		margin-left: auto;
	}

	.jr {
		margin-right: 20rpx;
		height: 20rpx;
		width: 11rpx;
		margin-left: 10rpx;
		margin-top: 25rpx;
	}

	.pinkan {
		margin-top: 2rpx;
		height: 340rpx;
		width: 750rpx;

	}

	.box {
		border-bottom: 2px solid #eee;
	}

	.dianpu_box {
		padding: 10rpx 20rpx;
	}

	.zhainan {
		height: 334rpx;
		width: 50%;
		margin-left: 0rpx;
		background-color: #FFFFFF;
		margin-top: 5rpx;
	}

	.right {
		width: 50%;
	}

	.znbibei {
		width: 100%;
		font-size: 23rpx;
		margin-top: 23rpx;
		margin-left: 40rpx;
		color: #f23d2e;
	}

	.content {
		width: 100%;
		display: flex;
		margin-left: 10%;
		font-size: 20rpx;
	}

	.shengyu {
		margin-left: 40rpx;
		color: #c1c1c1;
		font-size: 20rpx;
		margin-top: 22rpx;
	}

	.jj {
		font-size: 20rpx;
		margin-top: 26rpx;
		color: #f23d2e;
		padding: 0 10rpx;
	}

	.jian {
		color: #c1c1c1;
		font-size: 20rpx;
		margin-top: 22rpx;
	}

	.diannao {
		height: 145rpx;
		width: 60%;
		display: block;
		margin: auto;
		margin-top: 45rpx;
	}

	.zhibo_content {
		display: inline-block;
		text-align: center;
		margin: 0 10rpx 7rpx 0;
		width: 407rpx;
		height: 305rpx;
	}

	.shipin_top {
		width: 100%;
		margin-bottom: 130rpx;
	}

	.tuan {
		display: flex;
		width: 100%;
		height: 132rpx;
		justify-content: space-between;
		background-color: #FFFFFF;
		margin-top: 5rpx;
		margin-left: 5rpx;
		padding-right: 20rpx;
	}

	.right_tuan {
		width: 66%;
	}

	.tuangouhaohuo {
		font-size: 23rpx;
		margin-top: 23rpx;
		margin-left: 22rpx;
		color: #ff6a88;
	}

	.xiamo {
		margin-left: 22rpx;
		color: #c1c1c1;
		font-size: 18rpx;
		margin-top: 22rpx;
	}

	.yifu {
		height: 122rpx;
		width: 37%;
		/* margin-left: 80rpx; */
		margin-top: 6rpx;
	}

	.jinqiufs {
		display: flex;
		flex-direction: column;
		margin-top: 5rpx;
		background-color: #FFFFFF;
		width: 50%;
		height: 200rpx;
		border-left: 5rpx solid #eee;
	}

	.jinqiu {
		width: 100%;
		font-size: 23rpx;
		padding-top: 23rpx;
		padding-left: 22rpx;
		color: #ff6a88;
	}

	.xiying {
		width: 100%;
		padding-left: 22rpx;
		color: #c1c1c1;
		font-size: 18rpx;
		padding-top: 3rpx;
	}

	.rgm {
		height: 94rpx;
		width: 120rpx;
	}

	.tttehui {
		margin-top: 5rpx;
		background-color: #FFFFFF;
		width: 50%;
		height: 200rpx;
		margin-left: 3rpx;
	}

	.tehui {
		font-size: 23rpx;
		margin-top: 23rpx;
		margin-left: 22rpx;
		color: #ff6a88;
	}

	.zhineng {
		margin-left: 22rpx;
		color: #c1c1c1;
		font-size: 18rpx;
		margin-top: 22rpx;
	}

	.sb {
		height: 102rpx;
		width: 70rpx;
		margin-left: 108rpx;
	}

	.jrduanshipin {
		height: 304rpx;
		width: 400rpx;
		margin-left: 18rpx;
		background-size: cover;
		/* display: inline-block; */

	}

	.tx {
		height: 95rpx;
		width: 94rpx;
		margin-top: 18rpx;
		margin-left: 19rpx;
	}

	.jinru {
		height: 35rpx;
		width: 140rpx;
		line-height: 35rpx;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.56);
		border-radius: 20rpx;
		font-size: 17rpx;
		color: #f4212b;
	}

	.xm {
		width: 100%;
		margin-left: 15rpx;
		margin-top: 25rpx;
		font-size: 28rpx;
	}

	.xm1 {
		width: 100%;
		margin-left: 15rpx;
		margin-top: 15rpx;
		font-size: 22rpx;
		color: #797979;

	}

	.jd {
		height: 46rpx;
		width: 99rpx;
		color: red;
		border: solid 1rpx #f43426;
		font-size: 26rpx;
		border-radius: 1rem;
		/* margin-top: 45rpx; */
		line-height: 46rpx;
		background-color: #FFFFFF;
		text-align: center;
	}

	.jindian_left {
		width: 80%;
		display: flex;
	}

	.tup {
		height: 212rpx;
		width: 229rpx;
		/* margin-left: 15rpx; */
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.tup1 {
		height: 210rpx;
		width: 230rpx;
		margin-left: 15rpx;
		margin-top: 20rpx;
	}

	.shipin {
		width: 349rpx;
		padding-bottom: 10rpx;
	}

	.sx {
		margin-left: 450rpx;
		color: black;
	}

	.sxtu {
		height: 24rpx;
		width: 24rpx;
		margin-left: 20rpx;

	}

	.zi1 {
		height: 20rpx;
		width: 100%;
		display: inline-block;
		margin-top: 430rpx;
		font-size: 22rpx;
		/* padding-bottom: 20rpx; */
		color: #FFFFFF;
	}

	.zhibo1 {
		height: 40rpx;
		font-size: 15rpx;
		color: #FFFFFF;
		margin-top: 5rpx;
	}

	.bf {
		margin-top: 10rpx;
		height: 18rpx;
		width: 15rpx;
		margin-left: 48rpx;
	}

	.sp1 {
		font-size: 22rpx;
		margin-left: 10rpx;
		width: 100%;
		overflow: hidden;
		padding-top: 10rpx;
	}

	.jiage {
		color: #ff0d2e;
		font-size: 28rpx;

	}

	.heng9 {
		display: flex;
		align-items: center;
		padding: 10rpx 10rpx 20rpx 10rpx;
	}

	.renshu {
		color: #ADADAD;
		font-size: 18rpx;
		margin-left: 29rpx;
	}

	.content_popup {
		position: absolute;
		top: 5%;
		width: 100%;
		bottom: 0;
		background: #fff;
	}
</style>
