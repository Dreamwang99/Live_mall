<template>
	<view>
		<view class="kanjia_top">
			<image class="duorou" :src="goodslist.image" mode=""></image>
			<view class="kanjia_right">
				<view class="duorouzi">{{goodslist.introduction}}</view>
				<view>
					<uni-countdown class="daojishi" background-color="#ff212c" border-color="#ff212c" color="#ffffff" :show-day="false"
					 :hour="2" :minute="0" :second="0" :reset="true">
					</uni-countdown>
				</view>
				<view class="right_bottom">
					<view class="">
						<view style="display: flex; margin-bottom: 20rpx;">
							<view class="dijia">底价{{goodslist.list.bargain_price}}</view>
							<view class="xianjia">现价{{goodslist.price_selling}}</view>
						</view>
						<!-- <view class="yuji">预计需要5人砍价</view> -->
						<view v-if="status==2" class="succeed">砍价已成功</view>
						
					</view>
					<view @tap="fenxiang" v-if="openid==id&&status!=2" class="kaikan">分享帮砍</view>
					<!-- <view @tap="kaikan" v-if="openid!=id" class="kaikan">帮砍</view> -->
					<view @tap="bangkantap" v-if="openid!=id&&status!=2" class="kaikan">帮砍</view>
					<view @tap="fukuan" v-if="openid==id&&status==2" class="kaikan">去付款</view>
				</view>
			</view>
		</view>
		<view style="background: #fff;">
			<view class="kan_bottom">砍价团</view>
			<view class="tuan" v-for="(item,index) in kanjiaList" :key="index">

				<view class="kanjia_box">
					<image class="touxiang" :src="item.avatar_thumb" mode=""></image>
					<view style="display: flex;flex-direction:column;">
						<view class="mao">{{item.user_nicename}}</view>
						<view class="qili">{{item.bargain_yuyan}}</view>
					</view>
				</view>
				<view style="display: flex;">
					<image class="jinbi" src="../../static/ershou/72_iocn_jb.png" mode=""></image>
					<view class="kandiao">砍掉{{item.price}}元</view>
				</view>

			</view>
		</view>
		<!-- //帮砍弹出框 -->
		<uni-popup ref="kanjia" :show="kanjia" type="center" :mask-click="false" :custom="true">
			<view class="kanjia">
				<view class="dibu" :style="{ backgroundImage: 'url(' + '/static/shangcheng/bg-73-kajia@2x_90.png' + ')' }">
					<image class="gongxi" src="../../static/shangcheng/img-73-kanjia@2x.png" mode=""></image>
				</view>
				<view class="bangkan">{{bangkan}}</view>
				<view class="heng">
					<view class="quxiao" @tap="quxiao">取消</view>
					<view class="quxiao queding" @tap="quxiao">确定</view>
				</view>

			</view>
		</uni-popup>
		<!-- //分享弹出框 -->
		<uni-popup ref="share" type="bottom" :custom="true" @change="change">
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
	import uniCountdown from '../../components/linnian-CountDown/uni-countdown.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup,
			uniCountdown
		},

		data() {
			return {
				kanjia: false,
				bangkan: '帮砍11.15元',
				bottomData: [{
						icon: '/static/zhuye/icon_wx.png',
						text: '微信好友'
					},
					{
						icon: '/static/zhuye/icon-pyq.png',
						text: '朋友圈'
					}
				],
				kanjiaList: [],
				goods_id:'',
				bargain_id:'',
				goodslist:'',
				list:'',
				bargain_id:'',
				activeid:'',
				money:'',
				openid:'',
				id:'',
				//帮砍状态 1未成功 2成功
				status: 1,
			};
		},
		onLoad(options) {
			// this.goods_id = options.goods_id
			// this.bargain_id = options.bargain_id
			
			this.activeid = options.activid
			this.money = options.money
			this.openid = options.openid
			this.id = uni.getStorageSync('id')
			this.getBargain()
			this.getAshop()
		},
		methods: {
			
			//帮砍点击事件
			bangkantap() {
				this.request.getStart({
					token: uni.getStorageSync('token'),
					type: 2,
					bargain_id: this.bargain_id,
					goods_id: this.goods_id,
					activity_id: this.activeid,
					open_people: this.openid,
				}).then(res => {
					console.log(res)
					if(res.code==1){
						this.bangkan = res.data
						this.$refs.kanjia.open()
					}
				})
			},
			getAshop(){
				this.request.getActiviIdShop({
					token: uni.getStorageSync('token'),
					activity_id: this.activeid,
					open_people: this.openid
				}).then(res =>{
					console.log(res);
					this.goodslist = res.data
					this.status = res.data.status
					this.goods_id = res.data.goods_id
					this.bargain_id = res.data.list.bargain_id
					this.bargain = res.data.list.goods_spec
					let dd = new Date(res.data.activity_end_time)
					var now = new Date();
					let datelead = (dd.getTime()-now.getTime())/1000
					console.log(datelead)
					console.log(datelead/86400)
					// this.getShopSetail()
				})
			},
			getShopSetail(){
				this.request.getShopSet({
					token: uni.getStorageSync('token'),
					shop_id:this.goods_id
				}).then(res => {
					console.log(res)
					// this.goodslist = res.data
					this.list = res.data.lists[0]
				})
			},
			getBargain(){
				this.request.getBargainRe({
					token: uni.getStorageSync('token'),
					activity_id:this.activeid
				}).then(res => {
					console.log(res)
					this.kanjiaList = res.data
				})
			},
			kaikan() {
				this.$refs.kanjia.open()
			},
			quxiao() {
				this.$refs.kanjia.close()
				this.getBargain()
			},
			fenxiang() {
				this.$refs.share.open()
			},
			change(e){
				console.log(e.show);
			},
			fukuan() {
				console.log(this.activeid);
				console.log(this.activeid);
				uni.navigateTo({
					url: `../dingdantijiao/dingdantijiao?activeid=${this.activeid}&goods_type=3&goods_spec=${this.bargain}&id=${this.goods_id}`
				})
			}
		}
	};
</script>

<style scoped>
	.kanjia_top {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 20rpx;
		background: #fff;
		margin-top: 10rpx;
	}

	.kan_bottom {
		margin-top: 20rpx;
		font-size: 32rpx;
		text-align: center;
		padding-top: 20rpx;
	}

	.kanjia_right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* margin-left: 21rpx; */
	}

	.tuan {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding:13rpx 34rpx;
		align-items: center;
		border-bottom: 1px solid #eee;
	}

	.touxiang {
		height: 74rpx;
		width: 74rpx;
	}

	.right_bottom {
		display: flex;
		width: 100%;
		flex-direction: row;
		margin-top: 14rpx;
		align-items: center;
		justify-content: space-between;
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.duorou {
		height: 240rpx;
		width: 240rpx;
		padding-right: 21rpx;
	}

	.duorouzi {
		width: 419rpx;
		font-size: 28rpx;
	}

	.time {
		color: #ffffff;
		font-size: 20rpx;
		background-color: red;

	}

	.time1 {
		font-size: 20rpx;
	}

	.dijia {
		color: #ff0d2e;
		font-size: 30rpx;
	}

	.yuji {
		color: #323232;
		font-size: 20rpx;
		padding-top: 23rpx;
	}

	.xianjia {
		color: #8a8a8a;
		font-size: 26rpx;
		padding-left: 15rpx;
	}
	.kanjia_box{
		display: flex;
		align-items: center;
	}
	.kaikan {
		width: 136rpx;
		height: 62rpx;
		border-radius: 30rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: center;
		background-color: #f1301f;
		line-height: 62rpx;
	}

	.mao {
		font-size: 26rpx;
		margin-top: 6rpx;
		margin-left: 10rpx;
		font-weight: 300;
	}

	.qili {
		font-size: 22rpx;
		color: #737373;
		margin-top: 4rpx;
		margin-left: 10rpx;
	}

	.jinbi {
		height: 45rpx;
		width: 45rpx;
	}

	.kandiao {
		margin-left: 30rpx;
		font-size: 26rpx;
	}

	.kanjia {
		height: 390rpx;
		width: 537rpx;


		border-radius: 20rpx;
		background-color: #FFFFFF;
	}

	.dibu {
		height: 151rpx;
		width: 537rpx;
		background-size: cover;

	}

	.gongxi {
		position: absolute;
		margin-top: -20rpx;
		height: 174rpx;
		width: 290rpx;
		text-align: center;
		margin-left: 120rpx;
	}

	.bangkan {
		text-align: center;
		line-height: 140rpx;
		font-size: 32rpx;
		color: #ff212c;
	}

	.quxiao {
		height: 67rpx;
		width: 223rpx;
		background-color: #f14e25;
		border-top-left-radius: 40rpx;
		border-bottom-left-radius: 40rpx;
		font-size: 30rpx;
		text-align: center;
		line-height: 67rpx;
		color: #FFFFFF;
		margin-left: 45rpx;
	}

	.queding {
		margin-left: 0rpx;
		border-top-left-radius: 0rpx;
		border-bottom-left-radius: 0rpx;
		border-top-right-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
		background-color: #f3b940;
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
	.succeed{
		color: red;
		font-size: 40rpx;
	}
</style>
