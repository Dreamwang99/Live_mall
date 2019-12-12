<template>
	<view class="beijing">
		<!-- <image src="/static/dpshoucang/img-46-sp.png" mode="" class="backimage"></image> -->
		<video class="backimage" :src='goodslist' lazy-load='true' controls="true" @fullscreenchange="quanpingvideo">
			<cover-view class="tx">
				<cover-image src="../../static/dsp/iocn-14-tx.png" mode="" class="portrait" @tap="geren()"></cover-image>
				<!-- <image class="jia" src="" mode="aspectFit"></image> -->
				<cover-image :src="bool==true? require('../../static/dsp/iocn-14-jia.png'):require('../../static/shouhuodizhi/iocn-27-gou.png')" mode="" class="jia" @tap="guanzhu()"></cover-image>
				<!-- <image class="zan" src="" mode="aspectFit"></image> -->
				<cover-image :src="bool1==true? require('../../static/dsp/iocn-14-zan.png'):require('../../static/dsp/iocn-14-zan2.png')"
				 mode="" class="zan" @tap="zan()"></cover-image>
				<cover-view class="zi">1.2w</cover-view>
				<cover-image class="pl" src="../../static/dsp/ionc-14-pl.png" mode="aspectFit" @tap="pinglun()"></cover-image>
				<cover-view class="zi">123</cover-view>
				<cover-image class="pl" src="../../static/dsp/iocn-14-zf.png" mode="" @tap="fenxiang()"></cover-image>
				<cover-view class="zi">223</cover-view>
			</cover-view>
			<cover-view class="zi1">
				<cover-view class="zi2">@小黑粉</cover-view>
				<cover-view>给大家拍个美食来看看！！！</cover-view>
			</cover-view>
		</video>
		
		<!-- 短视频评价弹窗 -->
		<view class="fixed" v-if="maskShow">
			<view class="maskB" @tap="guanbi()"></view>
			<view class="mask">
				<view class="maskBox">
					<view class="pinglun1">
						<image class="cha" src="../../static/dsp/iocn-15-cha.png" mode="aspectFit" @tap="guanbi()"></image>
						<view class="heng" v-for="(item,index) in list" :key="index">
							<image class="touxiang" :src="item.urlimg" mode="aspectFit"></image>
							<view>
								<view class="zhanghu">{{item.zhanghu}}</view>
								<view class="pingjia">{{item.pingjia}}</view>
							</view>
						</view>
						<view class="heng shuodian">
							<input class="shuru1" type="text" placeholder="说点什么吧" placeholder-class="shuru" value="" />
							<view class="aite">@</view>
							<image class="xiao" src="../../static/dsp/iocn-15-xiaolan.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分享短视频 -->
		<view class="fixed" v-if="maskShow1">
			<view class="maskB" @tap="guanbi()"></view>
			<view class="mask">
				<view class="maskBox1">
					<view class="Share">
						<view class="options" @tap="weixin()">
							<image class="xj" src="../../static/iocn-weixin.png" @tap="cancle('wxhy')"></image>
							<view class="xiangcexq">微信好友</view>
						</view>
						<view class="options" @tap="pengyouquan()">
							<image class="xj" src="../../static/zhibo/icon-pyq.png">
								<view class="xiangcexq">朋友圈</view>
						</view>
					</view>
					<view class="cancel" @tap="guanbi()">取消</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					urlimg: '../../static/gerenzhongxin/img-50-touxiang.png',
					zhanghu: '小黑粉',
					pingjia: '正品有保障，小米还是一如既往的好 价格优惠非常好！'
				}],
				ping: false,
				maskShow: false,
				maskShow1: false,
				id: '',
				goodslist: '',
				danmuValue: '',
				bool: true,
				bool1: true,
				uid: ''
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getinfo()
		},
		methods: {
			quanpingvideo() {
				console.log(123);
			},
			getinfo() {
				this.request.getDvideo({
					uid: uni.getStorageSync('id'),
					videoid: this.id
				}).then(res => {
					console.log(res)
					this.goodslist = res.data.info[0].href
					this.uid = res.data.info[0].uid
					console.log(this.goodslist)
					if (res.data.info[0].isattent == 1) {
						this.bool = false
					} else {
						this.bool = true
					}
					if (res.data.info[0].islike == 1) {
						this.bool1 = false
					} else {
						this.bool1 = true
					}
				})
			},
			//关注
			guanzhu() {
				this.request.getAttent({
					uid: uni.getStorageSync('id'),
					touid: this.uid
				}).then(res => {
					console.log(res)
					this.bool = !this.bool
					if (res.ret == 200) {
						if (res.data.info[0].isattent == 1) {
							this.bool = false
							uni.showToast({
								title: '关注成功',
								icon: "none",
							});
						} else {
							this.bool = true
							uni.showToast({
								title: '取消关注',
								icon: "none",
							});
						}
					}
				})
			},
			//点赞
			zan() {
				this.request.getAddLike({
					uid: uni.getStorageSync('id'),
					token: uni.getStorageSync('token'),
					videoid: this.id
				}).then(res => {
					console.log(res)
					this.bool1 = !this.bool1
					if (res.ret == 200) {
						if (res.data.info[0].islike == 1) {
							this.bool1 = false
							uni.showToast({
								title: '点赞成功',
								icon: "none",
							});
						} else {
							this.bool1 = true
							uni.showToast({
								title: '取消点赞',
								icon: "none",
							});
						}
					}
				})
			},
			//分享到微信
			weixin() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 2,
					mediaUrl: this.goodslist,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			//分享到朋友圈
			pengyouquan() {
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 2,
					imageUrl: this.baseUrl + '/tpapi/UserInfo/MyQRcode?token=' + uni.getStorageSync("token"),
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			//个人主页
			geren() {
				uni.navigateTo({
					url: '../zhibogeren/gerenzhuye'
				})
			},
			pinglun() {
				this.maskShow = true;
			},
			fenxiang() {
				this.maskShow1 = true;
			},
			guanbi() {
				this.maskShow = false;
				this.maskShow1 = false;
			},
			togglePopup(type, open) {
				this.type = type;
				if (open === 'dibu') {
					//头像
					this.fenxiang = true;
				}
			}
		}
	}
</script>

<style>
	cover-view,
	cover-image {
		display: inline-block;
	}

	/* 选择银行卡弹窗 */
	.fixed {
		position: fixed;
		top: 0;
		left: 0;
		width: 750rpx;
		height: 100vh;
		z-index: 1;
	}

	.maskB {
		background-color: rgba(0, 0, 0, .3);
		display: flex;
		top: 0;
		height: 900rpx;
	}

	.mask {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 100vh;
		background-color: rgba(0, 0, 0, .3);
	}

	.maskBox {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0;
		background-color: #fff;
		width: 750rpx;
		max-height: 888rpx;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
	}

	.maskBox1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0;
		background-color: #FFFFFF;
		width: 750rpx;
		height: 312rpx;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
	}

	.Share {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		width: 385rpx;
		margin-bottom: 40rpx;
	}

	.options {
		display: flex;
		flex-direction: column;
	}

	.cancel {
		text-align: center;
		height: 92rpx;
		line-height: 92rpx;
		width: 750rpx;
		position: absolute;
		bottom: 0;
		border-top: 1rpx #e5e5e5 solid;
	}

	.makcard {
		text-align: center;
		height: 112rpx;
		width: 690rpx;
		line-height: 112rpx;
		font-size: 34rpx;
		color: #232323;
	}

	.makimg {
		position: absolute;
		top: 20rpx;
		left: 700rpx;
		width: 30rpx;
		height: 30rpx;
	}

	.makfor {
		display: flex;
		flex-flow: row;
		align-items: center;
		width: 690rpx;
		height: 110rpx;
		line-height: 110rpx;
		border-top: 1rpx #F6F6F6 solid;
	}

	.cradimg {
		width: 36rpx;
		height: 36rpx;
	}

	.cardname {
		position: absolute;
		left: 110rpx;
		color: #5e5e5e;
		font-size: 30rpx;
	}

	.cardid {
		position: absolute;
		left: 230rpx;
		color: #5e5e5e;
		font-size: 30rpx;
	}

	/* 主体部分 */
	.beijing {
		width: 750rpx;
		height: 1350rpx;
		position: relative;
	}

	.backimage {
		width: 100%;
		height: 100%;
	}

	.tx {
		display: flex;
		flex-direction: column;
		/* position: absolute;
		left: 640rpx;
		top: 547rpx; */
		background-size: cover;
		margin-left: 640rpx;
		margin-top: 547rpx;
		padding-top: 540rpx;
		padding-left: 600rpx;
	}

	.portrait {
		height: 88rpx;
		width: 88rpx;
		z-index: 9999999;
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.touxiang {
		height: 75rpx;
		width: 75rpx;
		margin-left: 20rpx;
		margin-top: 15rpx;
	}

	.quxiao {
		text-align: center;
		font-size: 25rpx;

	}

	.jia {
		height: 27rpx;
		width: 27rpx;
		margin-left: 32rpx;
		z-index: 999999999;
	}

	.zan {
		height: 70rpx;
		width: 68rpx;
		margin-top: 85rpx;
		margin-left: 17rpx;
	}

	.pl {
		height: 68rpx;
		width: 70rpx;
		margin-top: 47rpx;
		margin-left: 17rpx;
	}

	.xj {
		height: 80rpx;
		width: 80rpx;
		margin-bottom: 20rpx;
	}

	.zi {
		color: #FFFFFF;
		font-size: 21rpx;
		margin-left: 28rpx;
		margin-top: 15rpx;
	}

	.zi1 {
		position: fixed;
		bottom: 65rpx;
		left: 20rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		font-weight: 100;
	}

	.zi2 {
		font-size: 32rpx;
		color: #FFFFFF;
		margin-bottom: 23rpx;
	}

	.xiangcexq {
		font-size: 22rpx;
	}

	.xiangjips {
		margin-top: 22rpx;
		margin-left: 180rpx;
		font-size: 22rpx;
	}

	.pinglun1 {
		height: 890rpx;
		width: 750rpx;
		background-color: rgba(243, 229, 229, 0.76);
	}

	.cha {
		margin-top: 20rpx;
		height: 23rpx;
		width: 23rpx;
		margin-left: 700rpx;
	}

	.zhanghu {
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-top: 15rpx;
		color: #7b7b7b;
	}

	.pingjia {
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-top: 23rpx;
		color: #7b7b7b;
	}

	.shuodian {
		background-color: #dedede;
		width: 750rpx;
		line-height: 82rpx;
		position: fixed;
		bottom: 0rpx;

	}

	.shuru1 {
		margin-top: 28rpx;
		margin-left: 40rpx;
	}

	.shuru {
		font-size: 23rpx;
	}

	.aite {
		margin-top: 5rpx;
		margin-left: 400rpx;
		font-size: 24rpx;
		color: #949494;
	}

	.xiao {
		height: 40rpx;
		width: 40rpx;
		margin-top: 25rpx;
		margin-left: 30rpx;
	}
</style>
