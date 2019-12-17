<template>
	<view>
		<image src="../../static/back.png" mode="" class="navback" @tap="navback()"></image>
		<view class="beijing" :style="{ backgroundImage: 'url(' + '/static/gerenzhongxin/bg-61-dingfu.png' + ')' }">
			<view class="heng">
				<image class="tx" :src="userlist.avatar" mode=""></image>
				<view>
					<view :class="show ? 'guanzhu' :'quxiaoguanzhu'" type="primary" @click="cancel1">
						{{show? '+关注':'取消关注'}}</view>
				</view>
			</view>
			<view class="tiezhu">{{userlist.user_nicename}}</view>
			<view class="heng">
				<view class="id">ID:{{userlist.id}}</view>
				<view class="fensi">{{userlist.fans}}粉丝</view>
				<view class="fensi" style="margin-left: 35rpx;">|</view>
				<view class="fensi" style="margin-left: 35rpx;">{{userlist.focus}}关注</view>
			</view>
		</view>
		<view class="heng">
			<view class="shipin" :class="num===0? 'ac':''" @tap="sel_nav(0)">视频</view>
			<view class="shipin" :class="num===1? 'ac':''" @tap="sel_nav(1)">直播</view>
		</view>
		<view style="height: 4rpx;background-color: #F5F5F5;margin-top: 10rpx;"></view>
		<view class="classify" v-show="num === 0">
			<view class="heng" v-for="(detali,index) in detalis" :key='index'>
				<view class="tu"  :style="{ backgroundImage: 'url(' + detali.thumb + ')' }">
					<view class="xiaohei">{{goodslist.user_nicename}}</view>
					<view class="heng">
						<view class="paimeishi">{{goodslist.signature}}</view>
						<image class="bf" src="../../static/gerenzhongxin/iocn-59-bf.png" mode=""></image>
						<view class="shu2">{{detali.views}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="classify" v-show="num === 1">
			<view class="heng" v-for="(list,index) in arr" :key='index'>
				<view class="tu" :style="{ backgroundImage: 'url(' + '/static/gerenzhongxin/img-61-sp.png' + ')' }">
					<view class="xiaohei">@小黑粉</view>
					<view class="heng">
						<view class="paimeishi">给大家拍个美食来看看</view>
						<image class="bf" src="../../static/gerenzhongxin/iocn-59-bf.png" mode=""></image>
						<view class="shu2">123</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bridge from '../../common/unfile/unfile.js'
	export default {
		data() {
			return {
				num: 0,
				c: 0,
				show: true,
				list: [{
						name: '+关注',
						a: true
					},
					{
						name: '取消关注',
						b: false
					}
				],
				uid: '',
				arr:[],
				detalis:[],
				goodslist:'',
				userlist:'',
				token:''
			};
		},
		onBackPress() {//页面返回
			bridge.register('navBack', function(result) {
				console.log(result)
			})
		},
		onLoad(options) {
			this.getpersonalhomepage()//获取移动端返回信息
			// this.uid = options.uid
			this.getvideolist()
			this.getMyfans()
			this.getLiverecord()
		},
		methods: {
			getpersonalhomepage(){//获取移动端返回信息
				bridge.register('personalHomePageCallback', function(result) {
					console.log(result)
					this.UIDS =result.uid
				})
			},
			getvideolist() {
				this.request.getVideoList({
					uid: this.UIDS
				}).then(res => {
					console.log(res);
					this.detalis = res.data.info
					this.detalis.forEach((val)=>{
						this.goodslist = val.userinfo
					})
				})
			},
			getLiverecord(){
				this.request.getLivere({
					touid: this.UIDS
				}).then(res => {
					console.log(res);
					this.arr = res.data.info
					this.detalis.forEach((val)=>{
						this.goodslist = val.userinfo
					})
				})
			},
			getMyfans(){
				this.request.getMyFans({
					token:uni.getStorageSync('token')
				}).then(res => {
					console.log(res);
					this.userlist = res.data
				})
			},
			cancel1() {
				this.request.getAttent({
					uid: uni.getStorageSync('id'),
					touid: this.UIDS
				}).then(res => {
					console.log(res);
				})
				this.show = !this.show
			},
			sel_nav(i) {
				console.log(i)
				switch (i) {
					case 0:
						this.num = 0
						this.page = 1
						break;
					case 1:
						this.num = 1
						this.page = 1
						break;
				}
			},
			cancel(index) {
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.list[i].a = true;
					} else {
						this.list[i].a = false;
					}
				}
			}
		}
	};
</script>

<style>
	.beijing {
		height: 380rpx;
		background-size: 100% 100%;
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.tx {
		height: 112rpx;
		width: 112rpx;
		margin-left: 70rpx;
		margin-top: 162rpx;
		border-radius: 50%;
	}

	.guanzhu {
		margin-top: 190rpx;
		height: 55rpx;
		font-size: 27rpx;
		line-height: 55rpx;
		text-align: center;
		width: 370rpx;
		background-color: #f13620;
		border-radius: 40rpx;
		margin-left: 50rpx;
		color: #FFFFFF;
	}

	.quxiaoguanzhu {
		margin-top: 190rpx;
		height: 55rpx;
		font-size: 27rpx;
		line-height: 55rpx;
		text-align: center;
		width: 370rpx;
		background-color: #A5A5A5;
		border-radius: 40rpx;
		margin-left: 50rpx;
		color: #FFFFFF;
	}

	.tiezhu {
		font-size: 26rpx;
		line-height: 53rpx;
		margin-left: 100rpx;
		color: #ffffff;
	}

	.id {
		margin-left: 100rpx;
		color: #ffffff;
		font-size: 17rpx;
		margin-top: 3rpx;
	}

	.fensi {
		margin-left: 130rpx;
		color: #ffffff;
		font-size: 25rpx;
	}

	.shipin {
		font-size: 28rpx;
		line-height: 50rpx;
		margin-left: 206rpx;
	}
	.ac{
		color: #f23d3d;
		text-align: center;
		border-bottom: 3upx solid #f23d3d;
	}

	.hongxian {
		height: 4rpx;
		width: 75rpx;
		margin-left: 198rpx;
		background-color: #ff212c;
	}

	.tu {
		height: 345rpx;
		width: 240rpx;
		margin-left: 8rpx;
		margin-top: 12rpx;
		background-size: 100% 100%;
	}

	.xiaohei {
		margin-top: 280rpx;
		font-size: 17rpx;
		color: #ffffff;
		margin-left: 6rpx;
	}

	.paimeishi {
		margin-top: 8rpx;
		font-size: 12rpx;
		color: #ffffff;
		margin-left: 6rpx;
	}

	.bf {
		height: 15rpx;
		width: 12rpx;
		margin-top: 10rpx;
		margin-left: 30rpx;
	}

	.shu2 {
		margin-top: 5rpx;
		font-size: 12rpx;
		color: #ffffff;
		margin-left: 12rpx;
	}
	.classify{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.navback{
		position: absolute;
	}
</style>
