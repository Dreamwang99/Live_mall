<template>
	<view>
		<view style="height: 10rpx;"></view>
		<view style="background-color: #FFF;">
			<input class="name" v-model="name" type="text" placeholder="请输入姓名"></input>
		</view>
		<view style="background-color: #FFF;">
			<input class="name" type="text" v-model="phone" placeholder="请输入手机号"></input>
		</view>
		<view class="shangchuan">
			<text class="shenfen">请上传身份证件</text>
		</view>
		<!-- 身份证正面上传前 -->
		<view class="kuang1" v-if="showA">
			<image class="kuang" @click="updataPic()" :src="frontImage"></image>
		</view>
		<!-- 身份证背面上传前 -->
		<view class="kuang1" v-if="showB">
			<image class="kuang" @click="updata_back()" :src="back_image"></image>
		</view>
		<!-- 手持身份证上传前 -->
		<view class="kuang1" v-if="showC">
			<image class="kuang" @click="updata_Peo()" :src="peoson_image"></image>
		</view>
		<view style="background-color: #FFF;">
			<input class="name" type="text" v-model="shopName" placeholder="请输入店铺名称"></input>
		</view>
		<view style="background-color: #FFF;" v-for="(item,index) in tabList" :key="index" @click="bottom">
			<view class="name">{{classify}}</view>
		</view>
		<view class="shangchuan">
			<text class="shenfen">请上传logo</text>
		</view>
		<!-- 店铺logo 上传前-->
		<view class="kuang1" v-if="showD">
			<view class="kuang" :style="{ backgroundImage: 'url(' + logo + ')' }" @click="logo_pic()">
				<image class="xiangji" style="height: 100rpx;" :src="a?'../../static/iocn-26-logo.png':''"></image>
			</view>
		</view>
		<view style="background-color: #FFF;">
			<view class="name" type="text" v-for="(item,index) in tabList" :key="index" @tap="toggleTab(item,index)">{{resultInfo.result}}</view>
		</view>
		<view style="background-color: #FFF;">
			<input class="name" type="text" v-model="detailAdress" placeholder="请输入店铺详细地址"></input>
			<view class="name" type="text" @click="getadress()">{{detailAdress}}</view>
		</view>
		<view class="shangchuan">
			<text class="shenfen">请上传营业执照</text>
		</view>
		<!-- 营业执照上传前 -->
		<view class="kuang1" v-if="showE">
			<view class="kuang" :style="{ backgroundImage: 'url(' + license + ')' }" @click="licens_pic()">
				<image class="xiangji" style="height: 100rpx;" :src="b?'/static/ruzhu/iocn-26-scyezz.png':''"></image>
			</view>
		</view>
		<view class="denglu" @click="publish()">确认发布</view>
		<view class="fixed" v-if="maskShow">
			<view class="maskB" @tap="quxiao()"></view>
			<view class="mask">
				<view class="maskBox">
					<view class="user">
						<view class="label" v-for="(it_em,in_dex) in selectList" :key="in_dex" @click="choose(in_dex)" :class="current === in_dex ? 'ac' : ''">{{it_em.label}}</view>
					</view>
					<view class="btn">
						<view class="cbtn" @tap="quxiao()">确定</view>
					</view>
				</view>
			</view>
		</view>
		<w-picker mode="region" :defaultVal="['浙江省','杭州市','滨江区']" :areaCode="['33','3301','330108']" :hideArea="false"
		 @confirm="onConfirm" ref="region"></w-picker>
	</view>

</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import luPopupWrapper from "@/components/lu-popup-wrapper/lu-popup-wrapper.vue";
	import wPicker from "@/components/w-picker/w-picker.vue";
	import bridge from '@/common/unfile/unfile.js';
	export default {
		components: {
			uniPopup,
			wPicker,
			luPopupWrapper
		},

		data() {
			return {
				showA : true,
				showB : true,
				showC : true,
				showD : true,
				showE : true,
				d: '',
				type: "bottom", // left right top bottom center
				transition: "slider", //none slider fade
				backgroundColor: '#FFF',
				active: false,
				height: "100%",
				width: "100%",
				popupId: 1,
				maskShow: false,
				maskClick: true,
				top: "10rpx",
				a: true,
				b: true,
				classify: "请输入经营类型",
				classifyy: "",
				logo: '../../static/ruzhu/iocn-26-tj.png',
				license: '../../static/ruzhu/iocn-26-tj.png',
				select: true,
				frontImage: "../../static/ruzhu/1.png",
				back_image: '../../static/ruzhu/2.png',
				peoson_image: '../../static/ruzhu/3.png',
				save: [],
				name: "",
				phone: "",
				shopName: "",
				shopAdress: "",
				url: "",
				mode: "range",
				selectList: [],
				tabList: [{
					mode: "region",
					name: "江苏徐州"
				}, ],
				provincial: "",
				/* 省 */
				market: "",
				/* 市 */
				district: "",
				/* 区 */
				resultInfo: {
					result: "请输入店铺地址"
				},
				detailAdress: "详细地址",
				longitude: '',
				latitude: '',
				type_top:'',
				current:0
			}
		},
		onLoad() {
		},
		methods: {
			quxiao() {
				this.maskShow = false
			},
			closeCallback() {
				console.log(123);
			},
			/* 选择商品类目 */
			choose(idx) {
				this.current = idx
				this.maskShow1 = true
				if (this.selectList.length !== 0) {
					var type = this.selectList[idx].id
					this.classify = this.selectList[idx].label
					this.type_top = this.selectList[idx].id
				}
			},
			/* 获取地址省市区 */
			toggleTab(item, index) {
				this.tabIndex = index;
				this.mode = item.mode;
				this.defaultVal = item.value;
				this.$refs[item.mode].show();
				console.log(this.provincial)
			},
			onConfirm(val) {
				console.log(val);
				//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
				// switch(this.mode){
				// 	case "date":
				// 		break;
				// }
				this.resultInfo = val;
				this.provincial = val.provincial; /* 省 */
				this.market = val.market; /* 市 */
				this.district = val.district; /* 区 */
				console.log(this.provincial);
			},
			/* 获取地址 具体*/
			getadress() {
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function(res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							success: function() {
								console.log('success');
							}
						});
					}
				});
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						this.longitude = res.longitude
						this.latitude = res.latitude
					}
				});

			},
			/* 弹窗 */
			bottom() {
				this.maskShow = true;
				this.request.getCategory({}).then(res => {
					console.log(res)
					if (res.code === 1) {
						console.log(res)
						this.selectList = res.data
					}
				})
			},
			show: function() {
				this.$refs.luPopupWrapper.show();
			},
			/* 点击确定 */

			/* 选择经营类型 */
			chooseType(item, index) {
				this.tabIndex = index;
				this.mode = item.mode;
				this.defaultVal = item.value;
				this.$refs[item.mode].show();
				console.log("11111")
			},
			/* 点击上传身份证正面照片 */
			updataPic() {
				bridge.call('uploadImages', "0");
				bridge.register('uploadImagesCallback',(res)=>{
					console.log(res);
					this.frontImage = res
					this.showA = false
					this.showA = true
				});
				// let _this = this
				// uni.chooseImage({
				// 	count: 1,
				// 	sourceType: ['album'],
				// 	success(res) {
				// 		console.log(res.tempFilePaths[0])
				// 		_this.frontImage = res.tempFilePaths[0]
				// 		console.log(_this.frontImage)
				// 		_this.save_img()
				// 		/* _this.publish() */
				// 	}
				// })
			},
			/* 点击上传身份证背面照片 */
			updata_back() {
				bridge.call('uploadImages', "0");
				bridge.register('uploadImagesCallback',function(res){
					this.back_image = res
					this.showB = false
					this.showB = true
				});
				// let _this = this
				// uni.chooseImage({
				// 	count: 1,
				// 	sourceType: ['album'],
				// 	success(res) {
				// 		console.log(res.tempFilePaths[0])
				// 		_this.back_image = res.tempFilePaths[0]
				// 		console.log(_this.back_image)
				// 		_this.save_img_back()
				// 		/* _this.publish() */
				// 	}
				// })
			},
			//上传身份证正面图片文件
			save_img() {
				var that = this;
				console.log("上传文件", that.frontImage)
				uni.uploadFile({
					url: that.request.baseUrl + '/merchant/uploadQnImg',
					method: 'post',
					filePath: that.frontImage,
					name: 'file',
					data: {
						file: that.frontImage
						// userId:this.$store.state.userId,
					},
					success: (uploadFileRes) => {
						console.log("上传图片文件")
						console.log(JSON.parse(uploadFileRes.data).data)
						that.frontImage = JSON.parse(uploadFileRes.data).data.img_url
						// this.$set(this.user_head_img)
					},
				})
			},
			//上传身份证背面图片文件
			save_img_back() {
				var that = this;
				console.log("上传文件", that.back_image)
				uni.uploadFile({
					url: that.request.baseUrl + '/merchant/uploadQnImg',
					method: 'post',
					filePath: that.back_image,
					name: 'file',
					data: {
						file: that.back_image
						// userId:this.$store.state.userId,
					},
					success: (uploadFileRes) => {
						console.log("上传图片文件")
						console.log(JSON.parse(uploadFileRes.data).data)
						that.back_image = JSON.parse(uploadFileRes.data).data.img_url
						// this.$set(this.user_head_img)
					},
				})
			},
			//上传手持身份证图片文件
			updata_Peo() {
				bridge.call('uploadImages', "0");
				bridge.register('uploadImagesCallback',function(res){
					this.peoson_image = res
					this.showC = false
					this.showC = true
				});
				// let _this = this
				// uni.chooseImage({
				// 	count: 1,
				// 	sourceType: ['album'],
				// 	success(res) {
				// 		console.log(res.tempFilePaths[0])
				// 		_this.peoson_image = res.tempFilePaths[0]
				// 		console.log(_this.peoson_image)
				// 		_this.save_imgback()
				// 		/* _this.publish() */
				// 	}
				// })
			},
			//上传手持身份证图片文件
			save_imgback() {
				var that = this;
				console.log("上传文件", that.peoson_image)
				uni.uploadFile({
					url: that.request.baseUrl + '/merchant/uploadQnImg',
					method: 'post',
					filePath: that.peoson_image,
					name: 'file',
					data: {
						file: that.peoson_image
						// userId:this.$store.state.userId,
					},
					success: (uploadFileRes) => {
						console.log("上传图片文件")
						console.log(JSON.parse(uploadFileRes.data).data)
						that.peoson_image = JSON.parse(uploadFileRes.data).data.img_url
						// this.$set(this.user_head_img)
					},
				})
			},
			/* 上传logo */
			logo_pic() {
				bridge.call('uploadImages', "0");
				bridge.register('uploadImagesCallback',function(res){
					this.logo = res
					this.a = false
					this.showD = false
					this.showD = true
				});
				// let _this = this
				// uni.chooseImage({
				// 	count: 1,
				// 	sourceType: ['album'],
				// 	success(res) {
				// 		console.log(res.tempFilePaths[0])
				// 		_this.logo = res.tempFilePaths[0]
				// 		console.log(_this.logo)
				// 		_this.a = false
				// 		_this.save_imglogo()
				// 		/* _this.publish() */
				// 	}
				// })
			},
			save_imglogo() {
				var that = this;
				console.log("上传文件", that.logo)
				uni.uploadFile({
					url: that.request.baseUrl + '/merchant/uploadQnImg',
					method: 'post',
					filePath: that.logo,
					name: 'file',
					data: {
						file: that.logo
						// userId:this.$store.state.userId,
					},
					success: (uploadFileRes) => {
						console.log("上传图片文件")
						console.log(JSON.parse(uploadFileRes.data).data)
						that.logo = JSON.parse(uploadFileRes.data).data.img_url
						console.log(that.logo)

						// this.$set(this.user_head_img)
					},
				})
			},
			/* 上传执照 */
			licens_pic() {
				bridge.call('uploadImages', "0");
				bridge.register('uploadImagesCallback',function(res){
					this.license = res
					this.b = false
					this.showE = false
					this.showE = true
				});
				// let _this = this
				// uni.chooseImage({
				// 	count: 1,
				// 	sourceType: ['album'],
				// 	success(res) {
				// 		console.log(res.tempFilePaths[0])
				// 		_this.license = res.tempFilePaths[0]
				// 		console.log(_this.license)
				// 		_this.b = false
				// 		_this.save_imglicens()
				// 		/* _this.publish() */
				// 	}
				// })
			},
			save_imglicens() {
				var that = this;
				console.log("上传文件", that.license)
				uni.uploadFile({
					url: that.request.baseUrl + '/merchant/uploadQnImg',
					method: 'post',
					filePath: that.license,
					name: 'file',
					data: {
						file: that.license
						// userId:this.$store.state.userId,
					},
					success: (uploadFileRes) => {
						console.log("上传图片文件")
						console.log(JSON.parse(uploadFileRes.data).data)
						that.license = JSON.parse(uploadFileRes.data).data.img_url
						// this.$set(this.user_head_img)
					},
				})
			},
			publish() {
				this.request.getmerchant({
					token: uni.getStorageSync('token'),
					name: this.name,
					phone: this.phone,
					business_name: this.shopName,
					idcard_face: this.frontImage,
					idcard_back: this.back_image,
					idcard_handheld: this.peoson_image,
					business_logo: this.logo,
					business_license: this.license,
					province: this.provincial,
					city: this.market,
					area: this.district,
					address: this.detailAdress,
					// longitude:this.longitude,
					// latitude:this.latitude,
					longitude: 1,
					latitude: 1,
					business_type: this.type_top,
				}).then(res => {
					console.log(res)
					if (res.data.code == 1) {
						uni.navigateTo({
							url: '../verify/verify'
						})
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none",
						});
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F5F5F5;
	}

	.list {
		height: 60rpx;
		width: 500rpx;
	}

	.back {
		height: 60rpx;
		width: 40rpx;

	}

	.xiangji {
		height: 90rpx;
		width: 114rpx;
		margin-right: auto;
		margin-left: auto;
		margin-top: 60rpx;
	}

	.screen {
		display: flex;
		flex-direction: row;
		position: absolute;
		width: 100%;
		height: 100%;
		margin-top: -170rpx;
	}

	.lab {
		margin: 30rpx 30rpx;
		font-size: 25rpx;
		height: 35rpx;
		padding: 5rpx;
		border: solid 1rpx #C4C4C4;
		border-radius: 5rpx;
	}

	.labl {
		margin: 30rpx 30rpx;
		font-size: 25rpx;
		height: 35rpx;
		padding: 5rpx;
		border: solid 1rpx #F13420;
		border-radius: 5rpx;
		color: #F13420;
	}

	.kuang {
		background-size: 100% 100%;
		height: 200rpx;
		width: 325rpx;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50rpx;
		display: flex;
		margin-bottom: 50rpx;

	}

	.kuang1 {
		margin-top: 49rpx;
	}

	.shenqing {
		height: 40rpx;
		width: 200rpx;
		margin-left: 200rpx;
	}

	.name {
		line-height: 90rpx;
		height: 90rpx;
		/* color: #949494; */
		margin-left: 20rpx;
		font-size: 26rpx;
		border-top: 1px solid #eee;
	}

	.denglu {
		height: 75rpx;
		line-height: 75rpx;
		width: 707rpx;
		margin: auto;
		text-align: center;
		background-color: red;
		border-radius: 45rpx;
		margin-top: 111rpx;
		margin-bottom: 50rpx;
		color: #FFFFFF;
		font-size: 34rpx;
	}

	.shangchuan {
		height: 80rpx;
		width: 100%;
		background-color: #949494;
		line-height: 80rpx;
	}

	.shenfen {
		color: #FFFFFF;
		margin-left: 20rpx;
		margin-right: auto;
		font-size: 28rpx;

	}

	/* 弹窗 */
	.fixed {
		position: fixed;
		top: 0;
		left: 0;
		width: 750rpx;
		height: 100vh;
		z-index: 9999999;
	}

	.maskB {
		background-color: rgba(0, 0, 0, .3);
		display: flex;
		top: 0;
		height: 1000rpx;
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
		justify-content: center;
		flex-direction: column;
		align-items: center;
		position: absolute;
		bottom: 0;
		background-color: #fff;
		width: 750rpx;
		min-height: 300rpx;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
	}

	.user {
		padding-top: 50rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.btn {
		position: fixed;
		bottom: 15px;
		width: 100%;
	}

	.cbtn {
		margin: auto;
		width: 130rpx;
		height: 50rpx;
		background-color: red;
		border-radius: 35rpx;
		text-align: center;
		line-height: 50rpx;
	}

	.label {
		border-radius: 8rpx;
		border: 1rpx #F5F5F5 solid;
		padding: 5rpx 5rpx 5rpx 5rpx;
		margin-right: 15rpx;
	}

	.ac {
		border-radius: 8rpx;
		border: 1rpx red solid;
		padding: 5rpx 5rpx 5rpx 5rpx;
		margin-right: 15rpx;
	}
</style>
