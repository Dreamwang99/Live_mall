<template>
	<view class="pin">
		<view style="background-color: #f5f5f5;height: 8rpx;"></view>
		<view class="dian">
			<image class="dp" src="../../static/dingdan/iocn-29-dp.png" mode=""></image>
			<view class="zi">{{getInfo.business_name}}</view>
		</view>
		<view class="shangpin">
			<view class="biao_img">
				<image class="img_t" :src="getInfo.logo" mode=""></image>
			</view>
			<view class="xiangqing" @tap="goxiangqing()">
				<view class="biaozi">{{getInfo.title}}</view>
				<!-- <view class="biaozi1">X{{getInfo.}}</view> -->
				<view class="biaozi2">{{getInfo.activity_goods_spec}}</view>
				<view style="display: flex;flex-direction: row;">
					<view class="biaozi4">{{getInfo.group_people_num}}人团</view>
					<view class="biaozi3">￥{{price}}</view>
				</view>
			</view>
		</view>
		<view class="people_list">
			<view class="tuanzhang" v-for="(item,index) in getInfo.join_user_list" :key="index">
				<image class="ktx" :src="item.avatar" mode=""></image>
				<!-- <view class="hdi" v-if="item.status">团长</view> -->
			</view>
		</view>
		<view class="list_middle">
			还差 <view style="color: red;font-size: 36rpx;">{{peopleNums}}</view>
			人成团，快来一起拼团吧~
		</view>
		<view class="time_" v-if="isShowTime">
			<view class="line"></view>
			<view class="shengyu">剩余</view>
			<uni-countdown class="daojishi" background-color="#ff212c" border-color="#ff212c" color="#ffffff" :show-day="false"
			 :hour="getHours" :minute="getMinutes" :second="getSeconds" :reset="true">
			</uni-countdown>
			<view class="shengyu">结束</view>
			<view class="line"></view>
		</view>
		<view class="pin_bottom" v-for="(item,index) in getInfo.join_user_list" :key="index">
			<image style="height: 93rpx;width: 93rpx;" :src="item.avatar" mode=""></image>
			<view class="pin_right">
				<view class="lier">{{item.user_nicename}}</view>
				<view class="time1">{{item.create_at}}</view>
			</view>
		</view>
		<button class="yaoqing" @click="togglePopup('bottom', 'share')">邀请好友拼团</button>
		<uni-popup ref="share" :type="type" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box" @tap="choseShareStyle(item.text)">
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
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import uniCountdown from '../../components/linnian-CountDown/uni-countdown.vue';
	import bridge from '@/common/unfile/unfile.js';
	export default {
		components: {
			uniPopup,
			uniCountdown
		},
		data() {
			return {
				show: false,
				type: '',
				getInfo : "",
				peopleNums : 0,
				price : "",
				getHours : 0,
				getMinutes : 0,
				getSeconds : 0,
				isShowTime : false,
				peopleList: [{
						img: '../../static/pintuan/img-50-touxiang.png',
						status: true

					}, {
						img: '../../static/pintuan/img-69-tx_42.png',
						status: false
					},
					{
						img: '../../static/pintuan/img-69-tx_42.png',
						status: false
					},
				],

				bottomData: [{
						icon: '/static/zhuye/icon_wx.png',
						text: '微信好友'
					},
					{
						icon: '/static/zhuye/icon-pyq.png',
						text: '朋友圈'
					}
				],
				pinList: [{
					img: '../../static/img-50-touxiang.png',
					name: '李yi狗',
					time: '2019--09-20 02-31-25'
				}, {
					img: '../../static/img-50-touxiang.png',
					name: '李二狗',
					time: '2019--09-20 02-31-25'
				}],
			};
		},
		onLoad(options) {
			this.activityId = options.activityid
			this.getOpenTInfo();
			//我的项目中只赋值一次, 所以直接设为true了
			this.reset = !this.reset;
			//如果还要设置天, 时, 秒, 在上面声明绑定后, 在这里赋值即可
			this.minute = 30;
			
		},
		methods: {
			getOpenTInfo(){
				this.request.getGroupPurchase({
					token : uni.getStorageSync('token'),
					activity_id : this.activityId
				}).then(res=>{
					console.log(res);
					if(res.code === 1){
						this.getInfo = res.data
						this.peopleNums = res.data.group_people_num - res.data.join_people_num
						if(res.data.group_people_num === 3){
							this.price = res.data.group_price_three
						}else{
							this.price = res.data.group_price_five
						}
						var getTimeStamp = new Date(res.data.end_time).getTime() - new Date().getTime()
						this.getHours = parseInt(this.changeTimeStamp(getTimeStamp)[1])
						this.getMinutes = parseInt(this.changeTimeStamp(getTimeStamp)[2])
						this.getSeconds = parseInt(this.changeTimeStamp(getTimeStamp)[3])
						this.isShowTime = true
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			changeTimeStamp(timeStamp){
				var days = parseInt(timeStamp / (1000 * 60 * 60 * 24));
				var hours = parseInt((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = parseInt((timeStamp % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = parseInt((timeStamp % (1000 * 60)) / 1000);
				return [days,hours,minutes,seconds]
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
			goxiangqing() {
				uni.navigateTo({
					url: '../pintuanxiangqingye/pintuanxiangqingye'
				})
			},
			choseShareStyle(types){
				var shareInfo = new Object();
				shareInfo.title = "拼团分享";
				shareInfo.describe = "快来参加我的团";
				shareInfo.linkUrl = "http://pintuan.a2w0m.cn?goodsId="+this.getInfo.goods_id+"&activityId="+this.getInfo.id
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

<style scoped>
	.content {
		width: 100%;
		background: #fff;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
	}

	.pin_right {
		display: flex;
		flex-direction: column;
		margin-left: 13rpx;
		line-height: 50rpx;
	}

	.dp {
		height: 25rpx;
		width: 25rpx;
		margin-left: 40rpx;
	}

	.pin_bottom {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 22rpx 0;
		padding-left: 5%;
		align-items: center;
		border-bottom: 1px solid #eee;
	}

	.daojishi {}

	.zi {
		color: #a5a5a5;
		font-size: 17rpx;
		margin-left: 12rpx;
	}

	.dian {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-top: 32rpx;
	}

	.time_ {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 49rpx 0 68rpx 0;
	}

	.line {
		height: 2rpx;
		width: 24%;
		background-color: #6e6e6e;
	}

	.img_t {
		width: 193rpx;
		height: 193rpx;
	}

	.zi1 {
		font-size: 20rpx;
		margin-left: 18rpx;
		margin-top: 45rpx;
		margin-right: auto;
	}

	.xiangqing {
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		width: 70%;
	}

	.people_list {
		width: 100%;
		display: flex;
		padding: 0 20rpx;
		flex-direction: row;
		justify-content: space-around;
		padding-top: 30rpx;
	}

	.shangpin {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20rpx;
		margin-top: 10rpx;
		border-bottom: 10rpx solid #eee;
	}

	.biao {
		height: 195rpx;
		width: 195rpx;
	}

	.biao_img {
		width: 193rpx;
	}

	.biaozi {
		font-size: 24rpx;
		width: 75%;
		margin-top: 10rpx;
		height: 50%;
	}

	.biaozi1 {
		font-size: 30rpx;
		margin-right: 10rpx;
		margin-left: auto;
		font-weight: 300;
	}

	.list_middle {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 50rpx;
		font-size: 26rpx;
	}

	.biaozi2 {
		font-size: 26rpx;
		color: #797979;
	}

	.biaozi4 {
		font-size: 26rpx;
		color: #797979;
	}

	.biaozi3 {
		font-size: 32rpx;
		color: red;
		margin-left: 45rpx;
	}

	.tuanzhang {
		/* height: 120rpx; */
		width: 18%;
	}

	.pin {
		height: auto;
		background: #fff;
		padding-bottom: 50rpx;
	}

	.hdi {
		position: relative;
		height: 28rpx;
		width: 52rpx;
		font-size: 16rpx;
		color: #ffffff;
		text-align: center;
		background-color: red;
		border-radius: 12rpx;
		line-height: 28rpx;
		top: -90%;
		left: 55%;
	}

	.ktx {
		height: 15vw;
		width: 15vw;
	}

	.time {
		background-color: red;
		height: 48rpx;
		width: 60rpx;
		margin-top: 52rpx;
		color: #ffffff;
		text-align: center;
	}

	.shengyu {
		color: #8b8b8b;
		font-size: 30rpx;
		padding: 0 10rpx;
	}

	.maohao {
		margin-top: 52rpx;
		margin-left: 7rpx;
		margin-right: 7rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.lier {
		font-size: 30rpx;
	}

	.time1 {
		font-size: 22rpx;
		color: #818181;
	}

	.yaoqing {
		height: 68rpx;
		width: 274rpx;
		background-color: red;
		color: #ffffff;
		line-height: 68rpx;
		text-align: center;
		border-radius: 1.5rem;
		margin-top: 72rpx;
		font-size: 26rpx;
		margin-bottom: 30rpx;
	}

	.xj {
		height: 80rpx;
		width: 80rpx;
		margin-top: 55rpx;
		margin-left: 188rpx;
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

	.quxiao {
		text-align: center;
		font-size: 25rpx;
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
</style>
