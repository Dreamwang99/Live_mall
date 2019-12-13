<template>
	<view class="top">
		<view v-if="pages==0" class="beijing1" :style="{ backgroundImage: 'url(' + selectList.business_logo + ')' }">
			<view class="dianpu_top">
				<image src="../../static/gerenshangjia/20_back.png" @tap="fanhui"></image>
				<view class="top_right" @tap="getinput()">{{isShouCang}}</view>
			</view>
			<view class="dianpu_name">
				{{selectList.business_name}}
			</view>
			<view class="dianpu_number">
				粉丝数：{{selectList.count}}
			</view>
			<view class="dianpu_bottom">
				<view v-for="(item,index) in titles" :key="index" :class="item.status?'chooose':'nochoose'" @tap="choose(index)">{{item.name}}</view>
			</view>
		</view>
		<view v-if="pages==1" class="beijing2" :style="{ backgroundImage: 'url(' + selectList.business_logo + ')' }">
			<view class="dianpu_top">
				<image src="../../static/gerenshangjia/20_back.png" @tap="fanhui"></image>
				<view class="top_right" @tap="getinput()">{{isShouCang}}</view>
			</view>
			<view class="dianpu_name">
				{{selectList.business_name}}
			</view>
			<view class="dianpu_number">
				粉丝数：{{selectList.count}}
			</view>
			<view class="dianpu_bottom">
				<view v-for="(item,index) in titles" :key="index" :class="item.status?'chooose':'nochoose'" @tap="choose(index)">{{item.name}}</view>
			</view>
			<view class="all">
				<view class="all_goods" v-for="(g_list,index) in allgoods" :key="index" @tap="godetail(g_list)">
					<image :src="g_list.logo"></image>
					<view class="name">{{g_list.title}}</view>
					<view class="detail">{{g_list.introduction}}</view>
					<view class="price">¥{{g_list.price_selling.price}}</view>
				</view>
			</view>
		</view>
		<view v-if="pages==0" style="height: 100%;">
			<view class="tuijian">
				<image src="../../static/gerenshangjia/icon_hw_78.png"></image>
				<view class="">
					店铺推荐
				</view>
				<image src="../../static/gerenshangjia/icon_hw.png"></image>
			</view>
			<view class="imageList">
				<view v-for="(item,index) in images" :key="index" class="image_">
					<image :src="item.logo"></image>
				</view>
			</view>
			<view class="bottom">
				<image src="../../static/gerenshangjia/20_img_gg.png" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				pages:0,
				allgoods: '',
				goods:[{
					img:'../../static/gerenshangjia/21_img_sp.png',
					name:'石墨烯智能温控发热鹅绒马甲',
					detail:'插电持续发热，90%白鹅绒可机手洗',
					price:'200'
				},
				{
					img:'../../static/gerenshangjia/img_sp2.png',
					name:'石墨烯智能温控发热鹅绒马甲',
					detail:'插电持续发热，90%白鹅绒可机手洗',
					price:'200'
				},
				{
					img:'../../static/gerenshangjia/21_img_sp.png',
					name:'石墨烯智能温控发热鹅绒马甲',
					detail:'插电持续发热，90%白鹅绒可机手洗',
					price:'200'
				},
				{
					img:'../../static/gerenshangjia/21_img_sp.png',
					name:'石墨烯智能温控发热鹅绒马甲',
					detail:'插电持续发热，90%白鹅绒可机手洗',
					price:'200'
				}],
				titles: [{
						name: '首页',
						status: true
					},
					{
						name: '全部宝贝',
						status: false
					},
					{
						name: '联系客服',
						status: false
					}
				],
				images: [{
						img: '../../static/gerenshangjia/20_img_sp.png'
					},
					{
						img: '../../static/gerenshangjia/20_img_sp3.png'
					},
					{
						img: '../../static/gerenshangjia/20_img_sp_86.png'
					}
				],
				shop_id:'',
				isShouCang: '关注',
				bool: true,
				selectList:''
			}
		},
		onLoad(options) {
			this.shop_id = options.shopid
			this.getStoreColle()
			this.getPersons()
			this.getStoreAdver()
			this.getallgoods()
		},
		methods: {
			getallgoods(){
				this.request.getPerson({
					token: uni.getStorageSync('token'),
					type: 2,
					page: 1,
					size:3,
					business_id: this.shop_id
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						this.allgoods = res.data
						// this.images = res.data
					}
				})
			},
			getPersons(){
				this.request.getPerson({
					token: uni.getStorageSync('token'),
					type: 1,
					page: 1,
					size:3,
					business_id: this.shop_id
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						this.goods = res.data
						this.images = res.data
					}
				})
			},
			getStoreAdver(){
				this.request.getStoreA({
					token: uni.getStorageSync('token'),
					page: 1,
					size:1,
					business_id: this.shop_id
				}).then(res => {
					console.log(res)
				})
			},
			getStoreColle(){
				this.request.getStore({
					token: uni.getStorageSync('token'),
					business_id: this.shop_id
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						console.log(res)
						this.selectList = res.data
						if (res.data.exist == 1) {
							this.bool = false
							this.isShouCang = "已关注"
						} else {
							this.bool = true
							this.isShouCang = "关注"
						}
					}
				})
			},
			choose(index) {
				for (let i = 0; i < this.titles.length; i++) {
					if (index == i) {
						this.titles[i].status = true;
						this.pages=i
					} else {
						this.titles[i].status = false;
					}
				}
			},
			getinput(){
				this.request.getCollect({
					token: uni.getStorageSync('token'),
					content_id: this.shop_id,
					type: 4
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						console.log(res)
					}
				})
				this.bool = !this.bool
				if (this.bool === true) {
					this.isShouCang = "关注"
				} else {
					this.isShouCang = "已关注"
				}
			},
			fanhui() {
				uni.navigateBack({
					delta: 1
				})
			},
			godetail(g_list){
				uni.navigateTo({
					url:'../xxdp/xxdp?goods_id='+g_list.id
				})
			},
		}
	}
</script>

<style scoped>
	.top {
		background: #fff;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		height: 100%;
	}

	.beijing1 {
		width: 100%;
		height: 355rpx;
		background-size: cover;
	}
	.beijing2{
		width: 100%;
		height:100%;
		background-size: cover;
	}
	.dianpu_top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		padding: 40rpx;
	}

	.dianpu_top image {
		width: 20rpx;
		height: 30rpx;
	}

	.top_right {
		color: #fff;
		border: 1px solid #eee;
		padding: 3rpx 30rpx;
		border-radius: 0.7rem;
	}

	.dianpu_name {
		color: #fff;
		font-weight: bold;
		font-size: 33rpx;
		margin-left: 5%;
	}

	.dianpu_number {
		color: #fff;
		font-size: 23rpx;
		margin-left: 5%;
		margin-top: 25rpx;
	}

	.dianpu_bottom {
		color: #fff;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 40rpx 3%;
	}

	.chooose {
		border-bottom: 2px solid #fff;
		margin: 0 20rpx;
	}

	.nochoose {
		margin: 0 20rpx;
	}

	.tuijian {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 30rpx;
	}

	.tuijian image {
		width: 60rpx;
		height: 40rpx;
		padding: 10rpx;
	}

	.imageList {
		display: flex;
		padding: 10rpx 25rpx;
		width: 100%;
	}

	.image_ {
		width: 32%;
	}

	.image_ image {
		width: 100%;
		height:25vw;
		/* padding: 10rpx; */
		border-radius: 0.2rem;
	}

	.bottom {
		width: 100%;
		height: 100%;
	}

	.bottom image {
		width: 100%;
		height: 100%;
		display: block;
		margin: auto;
	}
	.all{
		display: flex;
		flex-wrap: wrap;
		padding: 10rpx;	
		/* height:100%; */
		width: 100%;
		justify-content: space-between;
	}
	.all_goods{
		width: 48%;
		background: #fff;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 0.2rem;
	}
	.all_goods image{
		height: 40vw;
	}
	.name{
		width: 100%;
		padding:10rpx ;
	}
	.detail{
		color: #C1C1C1;
		font-size: 20rpx;
		padding:10rpx ;
	}
	.price{
		color: red;
		padding-left: 20rpx;
		font-size: 30rpx;
	}
</style>
