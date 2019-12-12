<template>
	<view>
		<view class="huidi">
			<view class="baidi">
				<view class="heng9">
					<view class="xianshi">限时秒杀</view>
					<view class="miao_right" @tap="swop">
						<image class="hyp1" src="../../static/meiribimiao/iocn-98-hxp.png" mode=""></image>
						<view class="hyp">换一批</view>
					</view>
				</view>
				<view class="heng">
					<view v-for="(item,index) in goods" :key="index" class="box">
						<image class="hezi" :src="item.logo" mode=""></image>
						<view class="rmb">￥{{item.spec.price_selling}}</view>
						<view class="yiqiang">已抢{{item.spec.number_sales}}件</view>
					</view>
				</view>
			</view>
			<view class="rush">
				<view class="qianggou">抢购中 先下单先得哦</view>
				<view style="display: flex;flex-direction: row;">
					<view class="shengyu">剩余时间</view>
					<uni-countdown class="daojishi" background-color="#ff212c" border-color="#ff212c" color="#ffffff" :show-day="false"
					 :hour="2" :minute="0" :second="0" :reset="true">
					</uni-countdown>
				</view>
			</view>
			<view class="flex_wrap">
				<view v-for="(item,index) in qianggou" :key="index" class="rush_list">
					<image class="shafa" :src="item.logo" mode=""></image>
					<view class="baidi1">
						<view class="deng">{{item.introduce}}</view>
						<view class="ziwaixian">{{item.reamrk}}</view>
						<view class="rush_price">
							<view class="rmb2">￥{{item.spec.seckill_price}}</view>
							<view class="rmb1">￥{{item.spec.market}}</view>
						</view>
						<button class="lijiqg" @tap="getid(item.goods_id,item.id)">立即抢购</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCountdown from '../../components/linnian-CountDown/uni-countdown.vue';

	export default {
		components: {
			uniCountdown
		},
		data() {
			return {
				goods: [{
						img: '../../static/shangcheng/img-85-sp.png',
						price: 128,
						number: 285
					},
					{
						img: '../../static/shangcheng/img-85-sp.png',
						price: 128,
						number: 285
					},
					{
						img: '../../static/shangcheng/img-85-sp.png',
						price: 128,
						number: 285
					},
					{
						img: '../../static/shangcheng/img-85-sp.png',
						price: 128,
						number: 285
					}
				],
				qianggou: [{
						img: '../../static/shangcheng/img-85-sp_31.png',
						name: 'Yeelight灭蚊灯',
						reamrk: '紫外线光精准诱蚊，高灭杀杀毒...',
						price: 128,
						discout: 200,
					},
					{
						img: '../../static/shangcheng/img-85-sp.png',
						name: 'Yeelight灭蚊灯',
						reamrk: '紫外线光精准诱蚊，高灭杀杀毒...',
						price: 128,
						discout: 200,
					},
					{
						img: '../../static/shangcheng/img-85-sp_31.png',
						name: 'Yeelight灭蚊灯',
						reamrk: '紫外线光精准诱蚊，高灭杀杀毒...',
						price: 128,
						discout: 200,
					}
				],
				goodslist: ''
			};
		},
		onLoad() {
			this.getSeckills()
			this.getTopSeckills()
		},
		methods: {
			getid(goods_id,id){
				console.log(id)
				uni.navigateTo({
					url:`../shangpinxiangqing/shangpinxiangqing?id=${goods_id}&goods_ids=${id}&judge=2`//秒杀
				})
			},
			getSeckills(){
				this.request.getSeckill({
					token: uni.getStorageSync('token'),
					page: 1
				}).then(res => {
					console.log(res)
					this.qianggou = res.data
					var now = new Date();
					var year = now.getFullYear();
					var month = now.getMonth() + 1;
					var date = now.getDate();
					var hour = now.getHours(); //得到小时
					var minu = now.getMinutes(); //得到分钟
					var sec = now.getSeconds(); //得到秒
					console.log(now,year,month,date,hour,minu,sec)
					
					for (var i = 0; i < this.qianggou.length; i++) {
						console.log(res.data[i].spec)
						this.goodslist = res.data[i].spec
					}
				})
			},
			getTopSeckills(){
				this.request.getTopSeckill({
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res)
					this.goods = res.data
				})
			},
			swop(){
				this.getTopSeckills()
			}
		}
	};
</script>

<style scoped>
	.huidi {
		height: auto;
		background-color: #f5f5f5;
		margin: 5rpx 15rpx;
	}

	.box {
		width: 166rpx;
		padding: 0 4rpx;
	}

	.heng {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 0 12rpx;
		/* justify-content: space-between; */
	}

	.rush_price {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.rush {
		width: 100%;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #8B8B8B;
		padding-bottom: 5rpx;
	}

	.heng9 {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		align-items: center;
		padding: 10rpx 20rpx;
		justify-content: space-between;
	}

	.baidi {
		width: 100%;
		border: 10rpx solid #eee;
		background-color: #ffffff;
	}

	.baidi1 {
		padding-bottom: 20rpx;
		background-color: #ffffff;
	}

	.rush_list {
		width: 352rpx;
		margin: 5rpx;
	}

	.hezi {
		height: 157rpx;
		width: 166rpx;
		margin-top: 25rpx;
	}

	.xianshi {
		font-size: 28rpx;
		margin-top: 25rpx;
	}

	.hyp1 {
		height: 16rpx;
		width: 18rpx;
	}

	.hyp {
		font-size: 18rpx;
		color: #ff212c;
		margin-left: 12rpx;
		/* margin-top: 34rpx; */
	}

	.rmb {
		font-size: 28rpx;
		color: #ff212c;
		width: 100%;
		text-align: center;
	}

	.yiqiang {
		font-size: 20rpx;
		color: #a5a5a5;
		width: 100%;
		text-align: center;
		margin-top: 5rpx;
		padding-bottom: 24rpx;
	}

	.time {
		font-size: 17rpx;
		background-color: red;
		height: 24rpx;
		line-height: 24rpx;
		width: 28rpx;
		margin-top: 35rpx;
		color: #ffffff;
		text-align: center;
	}

	.shengyu {
		color: #8b8b8b;
		/* margin-left: 150rpx; */
		margin-top: 35rpx;
		margin-right: 12rpx;
		font-size: 20rpx;
	}

	.maohao {
		margin-top: 35rpx;
		line-height: 24rpx;
		margin-left: 7rpx;
		margin-right: 7rpx;
		text-align: center;
		font-size: 16rpx;
	}

	.qianggou {
		font-size: 24rpx;
		margin-top: 32rpx;
		/* margin-left: 22rpx; */
	}

	.shafa {
		height: 300rpx;
		width: 353rpx;
		margin-top: 10rpx;
	}

	.miao_right {
		display: flex;
		align-items: center;
	}

	.flex_wrap {
		display: flex;
		flex-wrap: wrap;
		padding-top: 20rpx;
	}

	.rmb2 {
		font-size: 30rpx;
		margin-top: 28rpx;
		margin-left: 21rpx;
		color: #FF0D2E;
	}

	.rmb1 {
		font-size: 25rpx;
		margin-top: 28rpx;
		margin-left: 21rpx;
		color: #949494;
		text-decoration: line-through;
	}

	.xian {
		position: absolute;
		height: 2rpx;
		width: 58rpx;
		background-color: #949494;
		margin-top: 45rpx;
		margin-left: 85rpx;
	}

	.deng {
		font-size: 29rpx;
		margin-left: 20rpx;
		padding-top: 20rpx;
		font-weight: bold;
		overflow:hidden;
		text-overflow:ellipsis;
	}

	.ziwaixian {
		font-size: 17rpx;
		margin-top: 10rpx;
		margin-left: 20rpx;
		color: #949494;
	}

	.lijiqg {
		background-color: #FF0D2E;
		font-size: 26rpx;
		width: 308rpx;
		margin: auto;
		height: 53rpx;
		border-radius: 30rpx;
		line-height: 53rpx;
		margin-top: 24rpx;
		color: #fff;
	}

	.daojishi {
		margin-top: 30rpx;
		margin-left: 10rpx;
	}
</style>
