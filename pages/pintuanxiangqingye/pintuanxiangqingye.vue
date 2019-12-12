<template>
	<view style="background: #fff;">
		<image style="height: 560rpx;width:100%;" src="../../static/pintuanxiangqingye/img-76-sp.png" mode=""></image>
		<view class="rmb">￥128</view>
		<view class="shangpin_title">【小米】新鲜水果特价榨汁机、三种颜色</view>
		<view class="heng">
			<view class="yuexiao">月销3.1万</view>
			<view class="yuexiao">库存：100件</view>
			<view class="yuexiao">运费：0.00</view>
		</view>
		<view v-for="(item,index) in pintuanList" :key="index">
			<view class="pintuan">
				<view>{{item.name}}</view>
				<view class="pintuan_detail">
					<view class="pintuan_number">
						<view class="pintuan_le">
							还差
							<view style="color: red;">{{item.num}}人</view>
							<view>拼成</view>
						</view>
						<view>剩余{{item.time}}</view>
					</view>
					<button class="cantuan" type="primary" @tap="sanren(item)">去参团</button>
				</view>
			</view>
		</view>
		<view class="">
			<view class="show">
				<view class="maijiaxiu">买家秀（10）</view>
				<view class="show_right">
					<view class="chakan">查看全部</view>
					<image class="jinru" src="../../static/pintuanxiangqingye/iocn-76-jinru.png" mode=""></image>
				</view>
			</view>
			<view class="imageList">
				<view class="image_content" v-for="(item,index) in imgs" :key="index">
					<image :src="item.img" mode=""></image>
				</view>
			</view>
		</view>
		<view class="evalute">
			<view class="maijiaxiu">宝贝评价（1234）</view>
			<view class="evalute_right" @tap="quanbupinglun">
				<view class="chakan">查看全部</view>
				<image class="jinru" src="../../static/pintuanxiangqingye/iocn-76-jinru.png" mode=""></image>
			</view>
		</view>
		<view style="display: flex;">
			<image class="touxiang" src="../../static/img-50-touxiang.png" mode=""></image>
			<view class="xiaohei">小黑粉</view>
		</view>
		<view class="pingjia">正品有保障，小米还是一如既往的好 价格优惠非常好！</view>
		<view class="beijing1">
			<view class="xian"></view>
			<view class="spxiangqing">商品详情</view>
			<view class="xian"></view>
		</view>
		<view style="margin-bottom: 20%;">

			<image style="width:100%;height: 1700rpx;" src="../../static/pintuanxiangqingye/img-76-spxqy.png"></image>

		</view>
		<view class="di">
				<view>
					<image class="dp" src="../../static/pintuanxiangqingye/iocn-76-dianpu.png" mode=""></image>
					<view class="kf">店铺</view>
				</view>
				<view>
					<image class="dp" src="../../static/pintuanxiangqingye/iocn-76-kf.png" mode=""></image>
					<view class="kf">客服</view>
				</view>
				<view>
					<image class="dp" src="../../static/pintuanxiangqingye/ioicn-76-pt.png" mode=""></image>
					<view class="kf">拼团</view>
				</view>
				<view>
					<image class="dp" src="../../static/pintuanxiangqingye/icon-76-kj.png" mode=""></image>
					<view class="kf">砍价</view>
				</view>
			<view class="bottom_right">
				<view class="jiarugwc" @tap="togglePopup('bottom', 'dibu')">加入购物车</view>
				<view class="jiarugwc goumai">立即购买</view>
			</view>
		</view>
		<uni-popup msg="" :show="jiarugouwuche" type="bottoms">
			<view class="gouwuche">
				<view class="heng">
					<image class="tu1" src="../../static/img-23-tp.png" mode="aspectFit"></image>
					<view>
						<view class="jia1">￥128</view>
						<view class="kucun">库存118件</view>
					</view>
				</view>
				<view class="xiaomi">【小米】新鲜水果特价榨汁机、三种颜色</view>
				<view class="se">颜色</view>
				<view class="heng">
					<view class="yanse" v-for="(item , index) in yanse" :key="index">{{item.name}}</view>
				</view>
				<view class="se">尺码</view>
				<view class="heng">
					<view class="chima" v-for="(item , index) in ma" :key="index">{{item.name}}</view>
				</view>
				<view style="height: 1rpx;background-color: #FFFFFF;"></view>
				<view class="heng">
					<view class="se" style="margin-top: 61rpx;">购买数量</view>
					<view class="jian">-</view>
					<view class="shu">{{shu}}</view>
					<view class="jian jia">+</view>
				</view>
				<view class="heng">
					<view class="se" style="margin-top: 61rpx;">配送费</view>
					<view class="mianyou" style="margin-top: 61rpx;">快递 免邮</view>
				</view>
				<button class="queding" type="primary">确定</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				yanse: [{
						name: '蓝色'
					},
					{
						name: '蓝色'
					},
				],
				ma: [{
						name: 'M'
					},
					{
						name: 'L'
					},
					{
						name: 'XL'
					},
					{
						name: '2XL'
					},
				],
				imgs: [{
						img: '../../static/pintuanxiangqingye/img-76-sp_58.png',
					},
					{
						img: '../../static/pintuanxiangqingye/img-76-sp_58.png',
					},
					{
						img: '../../static/pintuanxiangqingye/img-76-sp_58.png',
					}, {
						img: '../../static/pintuanxiangqingye/img-76-sp_58.png',
					},
					{
						img: '../../static/pintuanxiangqingye/img-76-sp_58.png',
					}
				],
				shu: '1',
				jiarugouwuche: false,
				pintuanList: [{
						name: '3人拼团',
						num: 1,
						time: '22:10:11'
					},
					{
						name: '5人拼团',
						num: 1,
						time: '22:10:11'
					},
					{
						name: '8人拼团',
						num: 1,
						time: '22:10:11'
					}
				]

			};
		},
		methods: {
			togglePopup(type, open) {
				this.type = type;
				if (open === 'dibu') {
					//头像
					this.jiarugouwuche = true;
				}
			},
			maijiaxiu(e) {
				uni.navigateTo({
					url: '../maijiaxiu/maijiaxiu'
				})
			},
			quanbupinglun(e) {
				uni.navigateTo({
					url: '../quanbupinglun/quanbupinglun'
				})
			},
			sanren(e) {
				console.log(e)
				uni.redirectTo({
					url: '../pintuanxq/pintuanxq'
				})
			},
			wuren(e) {
				console.log(e)
				uni.redirectTo({
					url: '../wurenpintuan/wurenpintuan'
				})
			},
			baren(e) {
				console.log(e)
				uni.redirectTo({
					url: '../barenpintuan/barenpintuan'
				})
			}
		}
	};
</script>

<style scoped>
	.shangpin_title {
		width: 100%;
		font-size: 28rpx;
		margin-left: 24rpx;
	}

	.rmb {
		font-size: 30rpx;
		color: #ff0d2e;
		margin-left: 24rpx;
		margin-top: 33rpx;
		margin-bottom: 25rpx;
	}

	.heng {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.show {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 1px solid #eee;
		padding: 20rpx;
	}

	.di {
		width: 100%;
		display: flex;
		position: fixed;
		bottom: 0rpx;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		background: #fff;

	}
	.bottom_right{
		width: 40%;
		display: flex;
	}
	.beijing1 {
		background-color: #F5F5F5;
		height: 72rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.pintuan_number {
		display: flex;
		flex-direction: column;
		text-align: right;
		margin-right: 20rpx;

	}

	.pintuan {
		border-top: 1px solid #eee;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		padding: 20rpx;
		color: #B4B4B4;
	}

	.evalute {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 30rpx 20rpx;
		border-top: 1px solid #eee;
	}

	.xian {
		background-color: #d9d9d9;
		height: 2rpx;
		width: 30%;
		margin-top: 35rpx;
	}

	.yuexiao {
		font-size: 20rpx;
		color: #949494;
		margin-top: 30rpx;
	}

	.san {
		line-height: 85rpx;
		margin-left: 25rpx;
		font-size: 22rpx;
		color: #494949;
	}

	.haicha {
		margin-top: 21rpx;
		font-size: 16rpx;
		color: #494949;
	}

	.shengyu {
		margin-top: 6rpx;
		font-size: 16rpx;
		color: #494949;
		margin-left: 336rpx;
	}

	.imageList {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.cantuan {
		height: 47rpx;
		line-height: 47rpx;
		text-align: center;
		background-color: #FF212C;
		padding: 0 30rpx;
		color: #FFFFFF;
		font-size: 16rpx;
		border-radius: 25rpx;
		/* margin-top: 20rpx; */
		/* margin-bottom: 20rpx; */
	}

	.maijiaxiu {
		font-size: 22rpx;
	}

	.chakan {
		font-size: 18rpx;
		color: #ff212c;
	}

	.show_right {
		display: flex;
	}

	.jinru {
		height: 22rpx;
		width: 10rpx;
		margin-top: 5rpx;
		margin-left: 10rpx;
	}

	.evalute_right {
		display: flex;
	}

	.show_img {
		width: 100%;
		display: flex;
		justify-content: space-between;
		height: 70rpx;
	}

	.tu {
		width: 20%;
		height: 70rpx;
		padding: 10rpx;
	}

	.touxiang {
		height: 33rpx;
		width: 33rpx;
		margin-top: 30rpx;
		margin-left: 25rpx;
	}

	.xiaohei {
		margin-top: 35rpx;
		margin-left: 13rpx;
		font-size: 18rpx;
		color: #949494;
	}

	.pintuan_detail {
		display: flex;
		font-size: 20rpx;
	}

	.pingjia {
		width: 100%;
		font-size: 18rpx;
		color: #262626;
		padding: 20rpx;
	}

	.spxiangqing {
		width: 176rpx;
		line-height: 72rpx;
		text-align: center;
		font-size: 30rpx;
		color: #464646;
	}

	.dp {
		height: 35rpx;
		width: 35rpx;
		margin-top: 20rpx;
		margin-right: 20rpx;
		margin-left: 23rpx;
	}

	.jiarugwc {
		margin-left: 14rpx;
		margin-top: 16rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		width: 50%;
		background-color: red;
		border-top-left-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
		font-size: 21rpx;
		color: #FFFFFF;
		margin-bottom: 25rpx;
	}

	.goumai {
		margin-left: 0rpx;
		border-top-left-radius: 0rpx;
		border-bottom-left-radius: 0rpx;
		background-color: #f2ae3d;
		border-top-right-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
	}

	.kf {
		font-size: 18rpx;
		margin-top: 6rpx;
		text-align: center;
	}

	.gouwuche {
		height: 1200rpx;
		width: 750rpx;
		background-color: #F5F5F5;
		margin-left: 0rpx;
	}

	.image_content {
		width: 20%;
		padding: 5rpx;
	}

	.image_content image {
		height: 140rpx;
	}

	.tu1 {
		height: 210rpx;
		width: 225rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.jia1 {
		color: #ff4446;
		font-size: 23rpx;
		margin-top: 90rpx;
		margin-left: 20rpx;
	}

	.kucun {
		color: #9c9c9c;
		font-size: 18rpx;
		margin-top: 28rpx;
		margin-left: 20rpx;
	}

	.xiaomi {
		font-size: 20rpx;
		margin-top: 27rpx;
		margin-left: 22rpx;
	}

	.se {
		font-size: 23rpx;
		margin-left: 22rpx;
		margin-top: 27rpx;
	}

	.yanse {
		height: 48rpx;
		width: 80rpx;
		margin-top: 32rpx;
		margin-left: 50rpx;
		line-height: 48rpx;
		text-align: center;
		font-size: 19rpx;
		background-color: #FFFFFF;
	}

	.chima {
		height: 48rpx;
		width: 60rpx;
		margin-top: 32rpx;
		margin-left: 50rpx;
		line-height: 48rpx;
		text-align: center;
		font-size: 19rpx;
		background-color: #FFFFFF;
		margin-bottom: 30rpx;
	}

	.jian {
		font-size: 21rpx;
		margin-left: 460rpx;
		margin-top: 61rpx;
	}

	.shu {
		width: 42rpx;
		height: 42rpx;
		font-size: 21rpx;
		margin-left: 15rpx;
		margin-top: 58rpx;
		background-color: #FFFFFF;
		line-height: 42rpx;
		text-align: center;
	}

	.jia {
		margin-left: 15rpx;
		color: #000000;
	}

	.mianyou {
		background-color: #FFFFFF;
		margin-top: 27rpx;
		height: 43rpx;
		width: 162rpx;
		margin-left: 450rpx;
		font-size: 21rpx;
		line-height: 43rpx;
		text-align: center;
	}

	.queding {
		background-color: #F13420;
		margin-top: 273rpx;
		height: 75rpx;
		width: 710rpx;
		font-size: 29rpx;
		line-height: 75rpx;
		border-radius: 40rpx;
		margin-bottom: 20rpx;
	}

	.pintuan_le {
		display: flex;
		text-align: right;
	}
</style>
