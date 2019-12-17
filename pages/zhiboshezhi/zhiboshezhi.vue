<template>
	<view style="background: #fff;width: 100%;">
		<view class="fm" v-if="showAgain" :style="{ backgroundImage: 'url(' + thumb + ')' }" @tap="choose">
			<view class="bg_img">
				<image class="dibu" :src="uploadIcon" mode=""></image>
			</view>
			<view class="bg_title">给你的作品设置一个吸引人的封面</view>
		</view>
		<view class="box" @tap="togglePopup2()">
			<view class="title_left">直播间名称</view>
			<view class="title_right">{{chihuo}}</view>
		</view>
		<view class="box" @tap="togglePopup3()">
			<view class="title_left">禁用词语</view>
			<view style="display: flex;">
				<view class="title_right">设置禁用词语</view>
				<image class="jr" src="../../static/center/iocn-jinru.png" mode=""></image>
			</view>
		</view>
		<view class="box">
			<view class="title_left">禁言</view>
			<switch :checked="jinyan" color="#f1301f" @change="jinyanset" style="transform:scale(0.7)" />
		</view>
		<view class="box">
			<view class="title_left">允许他人分享本次直播</view>
			<switch :checked="allowshare" color="#f1301f" @change="allowshareset" style="transform:scale(0.7)" />
		</view>
		<!-- <view class="box">
			<view class="title_left">允许互关商家下载本次直播</view>
			<switch :checked="download" color="#f1301f" @change="downloadset" style="transform:scale(0.7)" />
		</view> -->
		<view class="box" @tap="goList()">
			<view class="title_left">选择商品列表</view>
			<image class="jr1" src="../../static/center/iocn-jinru.png" mode=""></image>
		</view>
		<view class="box" style="border-bottom: 1px solid #eee;" @tap="togglePopup('bottom', 'share')">
			<view class="title_left">分享</view>
			<image class="fenxiang" src="../../static/zhiboshezhi/iocn-92-zf.png"></image>
		</view>
		<view class="box" @tap="gowallet">
			<view class="title_left">钱包</view>
			<image class="jr1" src="../../static/center/iocn-jinru.png" mode=""></image>
		</view>
		<button class="kaishi" @tap="startLive()">开始直播</button>
		<uni-popup ref="share" :type="type" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" @tap="shareTypes(item.text)" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="image" />
						</view>
						<view class="uni-share-content-text">{{ item.text}}</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('share')">取消</view>
			</view>
		</uni-popup>
		<uni-popup ref="kanjia" :show="kanjia" type="center" :mask-click="true" :custom="true">
			<view class="xiugai">
				<view class="xiugai1">修改直播间名称</view>
				<view class="kuang heng">
					<input placeholder="请输入直播间名称" v-model="chihuoo" placeholder-class="chihuo1" style="height: 80rpx;"> </input>
					<image @tap="chihuooQK()" class="cha" src="../../static/dsp/icon-55-cha.png" mode=""></image>
				</view>
				<view class="bottom">
					<view @tap="cancel2()" class="quxiao">取消</view>
					<view @tap="chihuooQD()" class="queding">确定</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="jinyong" :show="jinyong" type="center" :mask-click="true" :custom="true">
			<view class="xiugai">
				<view class="xiugai1">禁用词语</view>
				<view class="xiugai2">
					<view class=""><text>{{unSendWords}}</text></view>
				</view>
				<view class="kuang heng">
					<input placeholder="请输入禁用词汇" v-model="jinyongg" placeholder-class="chihuo1" style="height: 80rpx;"> </input>
					<image class="cha" src="../../static/dsp/icon-55-cha.png" mode=""></image>
				</view>
				<view class="bottom">
					<view @tap="cancel3()" class="quxiao">取消</view>
					<view @tap="jinyongQD()" class="queding">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import bridge from '@/common/unfile/unfile.js';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				uploadIcon : '../../static/zhiboshezhi/icon_92-fengmian.png',
				kanjia: false,
				fenxiang: false,
				mingcheng: false,
				show: false,
				jinyong: [],
				showAgain : true,
				jinyongg: '',
				unSendWords : "",
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
				//封面
				thumb: '/static/zhiboshezhi/bg-92-fm.png',
				//直播间名
				chihuo: "吃货直播间",
				chihuoo: "吃货直播间",
				//禁言
				jinyan: true,
				//分享
				allowshare: true,
				//下载
				download: true,
				goodsId : ''
			}
		},
		onLoad() {
			this.choseGoodsId = uni.getStorageSync("choseGoodsId");
		},
		methods: {
			choose(){
				bridge.call('uploadImages', "0");
				bridge.register('uploadImagesCallback',(res)=>{
					console.log(res);
					this.thumb = res
					this.showAgain = false
					this.showAgain = true
					console.log("成功")
				});
				// let _this = this
				// uni.chooseImage({
				// 	count: 1,
				// 	sourceType:['album'],
				// 	success(res){
				// 		console.log(res.tempFilePaths[0])
				// 		_this.thumb = res.tempFilePaths[0]
				// 		console.log(_this.thumb)
				// 		_this.a=false
				// 		_this.save_imgthumb()
				// 	}
				// })
			},
			save_imgthumb(){
				var that =this;
				console.log("上传文件",that.thumb)
				uni.uploadFile({
					 url: that.request.baseUrl + '/merchant/uploadQnImg',
					 method:'post',
					 filePath: that.thumb,
					 name: 'file',
					 data: {
						  file:that.thumb
					 },
					 success: (uploadFileRes) => {
						 console.log("上传图片文件")
						 console.log(JSON.parse(uploadFileRes.data).data)
						 that.thumb = JSON.parse(uploadFileRes.data).data.img_url
						 console.log(that.thumb)
						 
					},
				})
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
			togglePopup2() {
				this.chihuoo = this.chihuo
				this.$refs.kanjia.open()
			},
			cancel2() {
				this.$refs.kanjia.close()
			},
			chihuooQD() {
				if(this.chihuoo){
					this.chihuo = this.chihuoo
				}
				this.$refs.kanjia.close()
			},
			chihuooQK() {
				this.chihuoo = ''
			},
			togglePopup3() {
				this.$refs.jinyong.open()
			},
			jinyongQD(){
				if(!this.jinyongg){
					uni.showToast({
						title:"禁用词汇不能为空",
						icon:'none'
					})
					return false;
				}
				this.jinyong[this.jinyong.length] = this.jinyongg
				this.unSendWords = this.jinyong.join(",");
				this.jinyongg = ""
				this.$refs.jinyong.close()
			},
			cancel3() {
				this.$refs.jinyong.close()
			},
			jinyanset: function (e) {
				console.log(e);
				this.jinyan = e.target.value
			},
			allowshareset: function (e) {
				this.allowshare = e.target.value
			},
			downloadset: function (e) {
				this.download = e.target.value
			},
			gowallet() {
				uni.navigateTo({
					url: '../wallet/wallet'
				})
			},
			goList(){
				uni.navigateTo({
					url:'/pages/shangpinlianjie/shangpinlianjie'
				})
			},
			startLive(){
				if(!this.choseGoodsId){
					uni.showToast({
						title:"未选择商品列表",
						icon:'none'
					})
					return false;
				}else{
					var createLiveObject = {};
					createLiveObject.thumb = this.thumb;
					createLiveObject.title = this.chihuo;
					createLiveObject.disable_word = this.unSendWords;
					createLiveObject.isShare = this.allowshare;
					createLiveObject.banned = this.jinyan;
					createLiveObject.goods_id = this.choseGoodsId;
					bridge.call('startLive',createLiveObject);
					this.request.createMyLive({
						id : uni.getStorageSync("id"),
						token : uni.getStorageSync('token'),
						thumb : this.thumb,
						title : this.chihuo,
						disable_word : this.unSendWords,
						banned : this.jinyan,
						isShare : this.allowshare,
						goods_id : this.choseGoodsId
					}).then(res=>{
						console.log(res);
						if(res.data.code === 0){
							uni.showToast({
								title:"开播成功",
								icon:'none'
							})
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}
					});
				}
			},
			shareTypes(types){
				var shareInfo = new Object();
				shareInfo.title = "直播分享";
				shareInfo.describe = "快来观看我的直播";
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
	}
</script>

<style>
	.fm {
		height: 341rpx;
		width: 100%;
		background-size: 100% 100%;
	}

	.dibu {
		height: 166rpx;
		width: 166rpx;
		margin: auto;
		display: block;

	}

	.bg_img {
		padding-top: 70rpx;
	}

	.confrim {
		width: 50%;
		text-align: center;
		font-size: 25rpx;
		color: red;
		border-left: 1px solid #eee;
	}

	.bottom {
		width: 100%;
		display: flex;
		margin-top: 20rpx;
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.xj {
		height: 80rpx;
		width: 80rpx;
		margin-top: 55rpx;
		margin-left: 188rpx;
	}

	.title_left {
		color: #232323;
		font-size: 30rpx;
	}

	.title_right {
		color: #9a9a9a;
		font-size: 26rpx;
	}

	.box {
		width: 100%;
		justify-content: space-between;
		display: flex;
		flex-direction: row;
		color: #9a9a9a;
		padding: 40rpx 20rpx;
		border-bottom: 1px solid #eee;
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

	.queding {
		color: #ff212c;
		border-left: 1px solid #eee;
		height: 102rpx;
		width: 265rpx;
		background-color: #FFFFFF;
		line-height: 102rpx;
		font-size: 30rpx;
		text-align: center;
		border-top: 1px solid #eee;
	}

	.jr {
		height: 20rpx;
		width: 13rpx;
		margin-left: 10rpx;
		margin-top: 10rpx;
	}

	.jr1 {
		height: 25rpx;
		width: 15rpx;
		margin-left: auto;
		margin-right: 23rpx;
		/* margin-top: 50rpx; */
	}

	.bg_title {
		color: #fdfdfd;
		font-size: 28rpx;
		text-align: center;
	}

	.kaiguan {
		margin-right: 23rpx;
		margin-left: auto;
		color: red;

	}

	.fenxiang {
		height: 20rpx;
		width: 22rpx;
		margin-right: 23rpx;
		margin-left: auto;
	}

	.kaishi {
		height: 90rpx;
		width: 100%;
		background-color: red;
		color: #FFFFFF;
		font-size: 28rpx;
		line-height: 90rpx;
		text-align: center;
		border-radius: 0rpx;
	}

	.xiugai {
		width: 100%;
		background: #fff;
	}

	.xiugai1 {
		font-size:30rpx;
		padding: 40rpx 0 20rpx 30rpx;
		color: #ff212c;
		border-bottom: 1px solid #ff212c;
	}
	.xiugai2 {
		flex-wrap: wrap;
		display: flex;
		font-size:24rpx;
		padding: 40rpx 0 20rpx 30rpx;
	}

	.kuang {
		margin-top: 38rpx;
		margin-left: 20rpx;
		height: 84rpx;
		width: 90%;
		border: 1px #eeeeed solid;
		border-radius: 8px;
		line-height: 84rpx;
	}

	.title {
		line-height: 50rpx;
		text-align: center;
		color: #9d9d9c;
		font-size: 27rpx;
	}

	.chihuo1 {
		font-size: 29rpx;
		color: #171717;
		margin-left: 10rpx;
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

	.quxiao {
		height: 102rpx;
		width: 265rpx;
		background-color: #FFFFFF;
		color: #171717;
		line-height: 102rpx;
		font-size: 30rpx;
		text-align: center;
		border-top: 1px solid #eee;
	}

	.cha {
		margin-right: 10rpx;
		margin-left: auto;
		height: 30rpx;
		width: 30rpx;
		margin-top: 20rpx;
	}
</style>
