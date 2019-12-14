<template>
	<view style="width: 100%;">
		<view style="background: #fff;">
			<view class="headimg">
				<text class="touxiang">头像</text>
				<view style="display: flex;" @tap="togglePopup('bottom', 'album')">
					<image class="logo1" :src="userinfo.avatar"></image>
					<view class="jr"><img style="height: 32rpx;width: 16rpx;" src="/static/center/iocn-jinru.png" /></view>
				</view>
			</view>
			<view class="headimg1">
				<view class="xiaohei">昵称</view>
				<view class="jr1" @tap="nicheng">
					<view class="xiaoheif">{{userinfo.user_nicename}}</view>
					<img src="/static/center/iocn-jinru.png" />
				</view>

			</view>
			<view class="headimg1" @click="togglesex('bottom', 'share')">
				<text class="xiaohei">性别</text>
				<view class="jr1">
					<text class="sex">{{xingbie}}</text>
					<img src="/static/center/iocn-jinru.png" />
				</view>

			</view>
			<view class="headimg1">
				<text class="xiaohei">用户所在地</text>
				<view class="heng" :class="{'active':index==tabIndex}" v-for="(item,index) in tabList" :key="index" @tap="toggleTab(item,index)">
					<text class="diqu">{{userinfo.city}}</text>
					<img src="/static/center/iocn-jinru.png" />
				</view>
			</view>
		</view>
		<!-- <view>
			<view class="denglu" @tap="Modifyuser()">确认</view>
		</view> -->
		<uni-popup ref="album" :custom="true" :type="type">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in album" :key="index" class="uni-share-content-box" @tap="chooseimg(item.type)">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="image" />
						</view>
						<view class="uni-share-content-text">{{ item.text}}</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('share')">取消</view>
			</view>
		</uni-popup>
		<uni-popup ref="share" :type="type1" :custom="true" @change="changesex">
			<view class="uni-share">
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box" @tap="tapsex(index)">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="image" />
						</view>
						<view class="uni-share-content-text">{{ item.text}}</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancelsex('share')">取消</view>
			</view>
		</uni-popup>
		<w-picker mode="region" :defaultVal="['浙江省','杭州市','滨江区']" :areaCode="['33','3301','330108']" :hideArea="false"
		 @confirm="onConfirm" ref="region"></w-picker>

	</view>
</template>
<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import wPicker from "@/components/w-picker/w-picker.vue";
	import bridge from '@/common/unfile/unfile.js';
	export default {
		components: {
			wPicker,
			uniPopup
		},

		data() {
			return {
				userinfo: uni.getStorageSync('userInformation'),
				userHeader: "",
				show: false,
				type: '',
				bottomData: [{
						icon: '../../static/center/iocn-20-nan.png',
						text: '男'
					},
					{
						icon: '../../static/center/iocn-20-nv_30.png',
						text: '女'
					}
				],
				album: [{
						icon: '../../static/kefu/iocn-25-xc.png',
						text: '相机拍摄',
						type: 'camera'
					},
					{
						icon: '../../static/kefu/iocn-25-xj.png',
						text: '相册上传',
						type: 'album'
					}
				],
				tabIndex: 0,
				type1: '',
				txshow: false, //头像 本地相册
				xingbie: '女',
				mode: "range",
				defaultVal: [0, 0, 0, 0, 0, 0, 0],
				name: '',
				tabList: [{
					mode: "region",
					name: "江苏徐州"
				}, ]
			};
		},
		onShow() {
			let changename = uni.getStorageSync('changename')
			uni.setStorageSync('changename',0)
			if(changename==1){
				this.userinfo = uni.getStorageSync('userInformation'),
				this.Modifyuser()
			}
		},
		onLoad() {
			this.judgesex()
			console.log(this.userinfo);
		},
		methods: {
			judgesex (){
				if(this.userinfo.sex==2){
					this.xingbie = '男'
				}else{
					this.xingbie = '女'
				}
			},
			toggleTab(item, index) {
				this.tabIndex = index;
				this.mode = item.mode;
				this.defaultVal = item.value;
				this.$refs[item.mode].show();
			},
			togglesex(type, open) {
				this.type1= type
				this.$refs[open].open()
			},
			cancelsex(type) {
				this.$refs[type].close()
			},
			changesex(e) {
				console.log(e.show)
			},
			tapsex(e){
				if(e==0){
					this.userinfo.sex = 2
				}else{
					this.userinfo.sex = 1
				}
				this.judgesex()
				this.cancelsex('share')
				this.Modifyuser()
			},
			onConfirm(val) {
				console.log(val);
				this.userinfo.city = val.result;
				this.Modifyuser()
			},
			nicheng() {
				uni.navigateTo({
					url: '../changename/changename'
				})
			},
			chooseimg(e){
				console.log(e);
				if(e === 'camera'){
					bridge.call('uploadByPhotograph', "拍摄上传头像");
					bridge.register('uploadByPhotographCallback',function(res){
						console.log(res);
						this.userinfo.avatar = JSON.parse(res)
					});
				}else if(e === 'album'){
					bridge.call('uploadImages', "相册上传头像");
					bridge.register('uploadImagesCallback',function(res){
						console.log(res);
						this.userinfo.avatar = JSON.parse(res)
					});
				}
				// let sourceType = e
				// uni.chooseImage({
				// 	sourceType:[sourceType],
				//     success: (chooseImageRes) => {
				// 		let fileimg = chooseImageRes.tempFiles[0]
				// 		console.log(fileimg)
				// 		if(fileimg.size >= 1048576) {
				// 			uni.showToast({
				// 				title: "图片大小不得超过1M",
				// 				icon:"none"
				// 			});
				// 			return false;
				// 		}
				// 		const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		this.imgouter = tempFilePaths[0]
				// 		uni.showToast({
				// 			title: '上传中',
				// 			icon:"none"
				// 		});
				// 		uni.uploadFile({
				// 			url: 'http://zsybshop.yanggod.com/api/merchant/uploadQnImg',
				// 			filePath: tempFilePaths[0],
				// 			name: 'file',
				// 			formData: {
				// 				file:this.imgouter
				// 			},
				// 		success: (uploadFileRes) => {
				// 			console.log(uploadFileRes)
				// 			let imgdata = JSON.parse(uploadFileRes.data);
				// 			this.userinfo.avatar = imgdata.data.img_url
				// 			uni.hideToast()
				// 			uni.showToast({
				// 				title: imgdata.msg,
				// 				icon:"none"
				// 			});
				// 			this.$refs.album.close()
				// 			this.Modifyuser()
				// 		}
				// 		});
				// 	}
				// });
			},
			Modifyuser(){
				console.log('确定');
				let data = {avatar:this.userinfo.avatar,user_nicename:this.userinfo.user_nicename,sex:this.userinfo.sex,city:this.userinfo.city}
				let dataa = JSON.stringify(data)
				this.request.UpdateFields({
					uid: this.userinfo.id,
					token: uni.getStorageSync('token'),
					fields: dataa
				}).then(res => {
					console.log(res);
					if(res.data.code==0){
						uni.hideToast()
						uni.showToast({
							title: "用户信息修改成功",
							icon:"none"
						});
						uni.setStorageSync('userInformation', this.userinfo)
					}else{
						uni.hideToast()
						uni.showToast({
							title: "用户信息修改失败",
							icon:"none"
						});
					}
				})
			},
			Modifyavatar(e){
			},
			showPhoto() {
				const _self = this;
				const PPPHOTO = uni.requireNativePlugin('PP-PHOTO');
				PPPHOTO.show({}, result => {
					// _self.msg = new Date().getHours() + ':' + new Date().getMinutes() + '  ' + JSON.stringify(result);

					if (result.code == 200)
						_self.saveImgs(result.data)
				});
			},
			togglePopup(type, open) {
				this.type = type
				this.$refs[open].open()
			},
			//关闭
			cancel() {
				this.$refs.album.close()



			}
		}
	};
</script>

<style scoped>
	.headimg {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 5rpx solid #eee;
		height: 125rpx;
		align-items: center;
	}

	.headimg1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 5rpx solid #eee;
		height: 88rpx;
		align-items: center;
		padding-right: 24rpx;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.tab {
		padding: 20upx 0;
		font-size: 32upx;
	}

	.tab.active {
		color: #f00;
	}

	.result {
		margin-top: 100upx;
		font-size: 32upx;
	}

	.logo {
		transform: rotate(180deg);
		height: 30rpx;
		width: 20rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: auto;
	}

	.heng {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.heng img{
		width: 13rpx;
		height: 25rpx;
	}
	.jr {
		height: 125rpx;
		line-height: 125rpx;
		margin-right: 20rpx;
	}

	.denglu {
		background-color: #f1301f;
		height: 75rpx;
		width: 707rpx;
		font-size: 34rpx;
		margin: 300rpx auto;
		border-radius: 50rpx;
		line-height: 75rpx;
		text-align: center;
		color: #FFFFFF;
	}

	.bianji {
		margin-left: 275rpx;
		margin-right: auto;
		margin-bottom: 10rpx;
	}

	.xiangcexq {
		margin-top: 22rpx;
		margin-left: 180rpx;
		font-size: 28rpx;
	}

	.xiangjips {
		margin-top: 22rpx;
		margin-left: 180rpx;
		font-size: 28rpx;
	}

	.xiaohei {
		margin-left: 21rpx;
		font-size: 26rpx;

	}

	.diqu {
		margin-right: 20rpx;
		font-size: 28rpx;
	}

	.xiaoheif {
		font-size: 28rpx;
		margin-right: 20rpx;
	}

	.sex {
		width: 50rpx;
		font-size: 28rpx;
		margin-right: 2rpx;
	}

	.touxiang {
		margin-left: 21rpx;
		font-size: 26rpx;
	}

	.logo1 {
		margin-top: 23rpx;
		height: 78rpx;
		width: 78rpx;
		margin-right: 20rpx;
	}

	.logo2 {
		height: 25rpx;
		width: 13rpx;
		margin-left: 40rpx;
		margin-top: 50rpx;
		margin-bottom: 20rpx;
	}

	.logo3 {
		height: 25rpx;
		width: 13rpx;
		margin-left: 20rpx;
		margin-right: auto;
		margin-top: 50rpx;
		margin-bottom: 20rpx;
	}

	.text-area {
		margin-left: 200rpx;
		margin-right: auto;
		margin-bottom: 50rpx;
		font-size: 36rpx;
		color: #8f8f94;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.xj {
		height: 80rpx;
		width: 80rpx;
		margin-top: 55rpx;
		margin-left: 188rpx;
	}

	.quxiao {
		text-align: center;
		font-size: 25rpx;

	}

	.nan {
		font-size: 21rpx;
		margin-top: 24rpx;
		margin-left: 218rpx;
		color: #949494;
	}

	.nv {
		font-size: 21rpx;
		margin-top: 24rpx;
		margin-left: 247rpx;
		color: #949494;
	}

	button[class='jr']::after {
		border: 0;
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
		width: 81rpx;
		height: 81rpx;
		overflow: hidden;
		border-radius: 10upx;
	}

	.uni-share-content-image .image {
		width: 100%;
		height: 100%;
	}

	.uni-share-content-text {
		font-size: 24upx;
		color: #333;
		padding-top:20px;
	}

	.uni-share-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
		text-align: center;
		color: #666;
	}

	.jr1 {
		display: flex;
		align-items: center;
	}

	.jr1 img {
		height: 25rpx;
		width: 13rpx;
	}
</style>
