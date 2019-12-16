<template>
	<view class="fabu_content">
		<input class="mingcheng" v-model="name" placeholder="名称(商品/型号)" type="text" value="" />
		<view class="mingcheng" @tap="updatabigtype()">{{bigtype}}</view>
		<view class="mingcheng" @tap="updatasmalltype()">{{smalltype}}</view>
		<input v-model="brand" class="mingcheng" placeholder="品牌" type="text" value="" />
		<input v-model="hinge" class="mingcheng" placeholder="输入10-30关键字内容" type="text" value="" />
		<view style="background: #fff;">
			<!-- <image class="tianjia" @click="updataimg()" v-for="(item,index) in img" :key="index" :src="img[index]" mode=""></image> -->
			<view class="uf-imgs" v-if="isUpload">
				<image src="../../static/fabu/img_12-tianjia.png" mode="" class="tianjia" @tap="choose()"></image>
				<view class="ui-item" v-for="(m,m_idx) in userChoseImgList" :key="m_idx">
					<image :src="m" mode="" class="tianjia"></image>
				</view>
			</view>
		</view>
		<view class="mingcheng" v-for="(item,index) in tabList" :key="index" @tap="toggleTab(item,index)">
			<view class="zi" style="font-size: 30rpx;">{{resultInfo.result}}</view>
		</view>
		<input type="text" value="" placeholder="详细地址" class="mingcheng" v-model="address"/>
		<w-picker mode="region" :defaultVal="['浙江省','杭州市','滨江区']" :areaCode="['33','3301','330108']" :hideArea="false"
		 @confirm="onConfirm" ref="region"></w-picker>
		<input v-model="price" class="mingcheng" placeholder="价格" type="number" value="" />
		<input v-model="oldprice" class="mingcheng" placeholder="入手价" type="text" value="" />
		<input v-model="newold" class="mingcheng" placeholder="新旧程度" type="text" value="" />
		<input v-model="phone" class="mingcheng" placeholder="联系方式" type="text" value="" />
		<view class="jy">交易方式</view>
		<view class="way">
			<view style="display: flex;flex-direction: row;justify-content: space-around;">
				<view :class="b?'ziti': ' kuaidi'  " @click="cancel">自提</view>
				<view :class="c?'ziti': ' kuaidi'  " @click="delivery">快递配送</view>
			</view>
			<view class="fabu" @click="confirm()">确认发布</view>
			<view class="fixed" v-if="maskShow">
				<view class="maskB" @tap="quxiao()"></view>
				<view class="mask">
					<view class="maskBox">
						<view class="user">
						<view class="label" v-for="(list,idx) in biglist" :key="idx" @tap="chooge(idx)" :class="current === idx ? 'ac' : ''">
							{{list.label}}
						</view>
						</view>
						<view class="heng">
							<view class="quxiao" @tap="quxiao()">取消</view>
							<view class="queding" @tap="quxiao()">确定</view>
						</view>
					</view>
				</view>
			</view>
			<view class="fixed" v-if="maskShow1">
				<view class="maskB" @tap="quxiao()"></view>
				<view class="mask">
					<view class="maskBox">
						<view class="user">
						<view class="label" v-for="(g_list,g_idx) in biglist" :key="g_idx" @tap="chooges(g_idx)" :class="current === g_idx ? 'ac' : ''">
							{{g_list.label}}
						</view>
						</view>
						<view class="heng">
							<view class="quxiao" @tap="quxiao()">取消</view>
							<view class="queding" @tap="quxiao()">确定</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import bridge from '@/common/unfile/unfile.js';
	export default {
		components: {
			wPicker,
		},
		data() {
			return {
				provincial: "",
				/* 省 */
				market: "",
				/* 市 */
				district: "",
				/* 区 */
				resultInfo: {
					result: "所在地区"
				},
				// 上传的图片
				userChoseImgList: [],
				// 服务器返回的图片
				returnList: [],
				// 渲染
				isUpload: true,
				name: "",
				bigtype: "所属大类",
				smalltype: "所属小类",
				hinge: "",
				brand: "",
				province:'',
				city:'',
				area: "",
				price: "",
				oldprice: "",
				newold: "",
				phone: "",
				maskShow: false,
				maskShow1: false,
				biglist: [],
				smalllist: [],
				userToken: "",
				userid: "",
				a: 1,
				picture: "",
				b: true,
				c: false,
				current:0,
				label:'',
				getimgaddress:'',
				tabList: [{
					mode: "region",
					name: "江苏徐州"
				}, ],
				typeid:'',
				longitude: 1,
				latitude: 1,
				address:'',
				type_top:''
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '../shuoming/shuoming'
			})
		},
		onLoad() {
			this.getimgaddress = this.request.BASE_URL
			this.getType()
			this.getplace()
		},
		methods: {
			toggleTab(item, index) {
				this.tabIndex = index;
				this.mode = item.mode;
				this.defaultVal = item.value;
				this.$refs[item.mode].show();
				console.log(this.provincial)
			},
			onConfirm(val) {
				console.log(val);
				this.resultInfo = val;
				this.provincial = val.checkArr[0]; /* 省 */
				this.market = val.checkArr[1]; /* 市 */
				this.district = val.checkArr[2]; /* 区 */
				console.log(this.provincial);
			},
			chooge(idx){
				this.current = idx
				this.maskShow1 = true
				if(this.biglist.length !== 0){
					var type = this.biglist[idx].id
					this.bigtype = this.biglist[idx].label
					this.smalltype = this.biglist[idx].label
					this.type_top = this.biglist[idx].id
				}
				this.request.getCategory({
					pid: type
				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						console.log(res)
						this.biglist = res.data
					}
				})
			},
			chooges(g_idx){
				this.current = g_idx
				if(this.biglist.length !== 0){
					var type_id = this.biglist[g_idx].id
					this.smalltype = this.biglist[g_idx].label
					this.typeid = this.biglist[g_idx].id
				}
				console.log(this.typeid)
			},
			/* 弹窗 */
			updatabigtype(){
				this.maskShow = true
			},
			updatasmalltype() {
				this.maskShow = true
			},
			quxiao() {
				this.maskShow = false
				this.maskShow1 = false
			},
			//上传图片
			choose() {
				bridge.call('uploadImages', "上传二手商品照片");
				bridge.register('uploadImagesCallback',(res)=>{
					console.log(res);
					let serverList = res
					this.returnList[this.returnList.length] = serverList
					this.userChoseImgList[this.userChoseImgList.length] = serverList
					this.isUpload = false
					this.isUpload = true
				});
				// uni.chooseImage({
				// 	sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				// 	sourceType: ['camera', 'album'], //从相册选择
				// 	success: (chooseImageRes) => {
				// 		const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		console.log(chooseImageRes.tempFilePaths)
				// 		let choseImg = tempFilePaths[0]
				// 		uni.uploadFile({
				// 			url: this.getimgaddress + '/merchant/uploadQnImg',
				// 			method: 'POST',
				// 			filePath: choseImg,
				// 			name: 'file',
				// 			formData: {
				// 				num: 0,
				// 				token: uni.getStorageSync('token') //自定义请求头信息
				// 			},
				// 			success: (res) => {
				// 				// let locaList = res.tempFilePaths[0]
				// 				console.log(res.data);
				// 				console.log(JSON.parse(res.data).data)
				// 				if (res.statusCode === 200) {
				// 					if (this.returnList.length < 9) {
				// 						let serverList = JSON.parse(res.data).data.img_url
				// 						this.returnList[this.returnList.length] = serverList
				// 						this.userChoseImgList[this.userChoseImgList.length] = choseImg
				// 						this.isUpload = false
				// 						this.isUpload = true
				// 						console.log(serverList)
				// 						console.log(this.returnList)
				// 					} else {
				// 						uni.showToast({
				// 							title: "最多上传9张图片哦~",
				// 							icon: 'none',
				// 							duration: 1500
				// 						})
				// 					}
				// 				} else {
				// 					uni.showToast({
				// 						title: res.errMsg,
				// 						icon: 'none',
				// 						duration: 1500
				// 					})
				// 				}
				// 			}
				// 		});
				// 	}
				// });
			},
			/* 获取位置 */
			getplace() {
				uni.getLocation({
					type: 'wgs84',
					geocode: 'true',
					success: res => {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						console.log('当前国家：' + res.address);
						console.log('当前省份：' + res.address.city);
						this.longitude = res.longitude,
						this.latitude = res.latitude,
						this.city = res.address.city
						this.confirm(res)
					}
				});
			},
			/* 确定发布 */
			confirm(typeid,res) {
				var gotImgStr = []
				console.log(this.returnList)
				if( this.returnList===undefined){
					gotImgStr = []
					console.log(3)
				}else{
					console.log(4)
					for (let i = 0; i < this.returnList.length; i++) {
						gotImgStr.push(this.returnList[i])
					}
					var file=gotImgStr.join("|")
					console.log(file)
				}
				this.request.getaddSecond({
					mid: uni.getStorageSync('id'),
					token: uni.getStorageSync('token'),
					title: this.name,
					/* 商品名称 */
					phone: this.phone,
					cate_top: this.type_top,
					cate_id: this.typeid,
					/* 大类ID */
					keyword: this.hinge,
					/* 关键字 */
					province: this.provincial,
					city: this.market,
					area: this.district,
					address: this.address,
					image: file,
					starting_price: this.oldprice,
					/* 入手价格 */
					price: this.price,
					brand: this.brand,
					mode: this.a,
					degree: this.newold,
					/* 新旧程度 */
					longitude: this.longitude,
					latitude: this.latitude
				}).then(res => {
					console.log(res)
					if(res.code==1){
						uni.showToast({
							title: res.msg+'请等待审核',
							icon: 'none',
							duration: 1500
						})
						setTimeout(function(){
							uni.navigateBack({
								
							})
						},1500);
					}else{
						uni.showToast({
							title: res.msg,
							icon: 'none',
						})
					}
				})
			},
			/* 选择配送方式 */
			cancel() {
				this.b = !this.b
				if (this.b) {
					this.c = false
					this.a = 1
					console.log(this.a)
				} else {
					this.c = true
					this.a = 2
					console.log(this.a)
				}
			},
			delivery() {
				this.c = !this.c
				if (this.c) {
					this.b = false
					this.a = 2
					console.log(this.a)
				} else {
					this.b = true
					this.a = 1
					console.log(this.a)
				}
			},
			/* 选择大类 */
			getType() {
				this.request.getCategory({

				}).then(res => {
					console.log(res)
					if (res.code === 1) {
						console.log(res)
						this.biglist = res.data
					}
				})
			}
		}
	}
</script>

<style scoped>
	.fabu_content {
		width: 100%;
	}
	.mingsize{
		width: 10%;
		font-size: 25rpx;
		height: 80rpx;
		line-height: 80rpx;
		background: #fff;
		color: #999;
	}
	.mingcheng {
		width: 100%;
		font-size: 25rpx;
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 23rpx;
		background: #fff;
		color: #999;
		border-top: 5rpx solid #eee;
	}
	.uf-imgs {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.tianjia {
		height: 145rpx;
		width: 145rpx;
		margin: 80rpx 10rpx 13rpx 20rpx;
		background: #fff;
	}

	.kanjia {
		height: 350rpx;
		width: 100%;
		background-color: #FFFFFF;
	}

	.jy {
		font-size: 25rpx;
		margin: 20rpx;
		background-color: #F5F5F5;
	}

	.ziti {
		line-height: 62rpx;
		text-align: center;
		margin-top: 35rpx;
		font-size: 23rpx;
		height: 62rpx;
		width: 30%;
		background-color: #f13320;
		color: #FFFFFF;
		border-radius: 30rpx;
	}

	.kuaidi {
		line-height: 62rpx;
		text-align: center;
		margin-top: 35rpx;
		font-size: 23rpx;
		height: 62rpx;
		width: 30%;
		border: 1rpx solid #f13320;
		color: red;
		background-color: #FFFFFF;
		border-radius: 30rpx;
	}

	.fabu {
		color: #fff;
		text-align: center;
		margin: 60rpx auto;
		height: 75rpx;
		width: 90%;
		background-color: #f13320;
		border-radius: 40rpx;
		line-height: 75rpx;
	}

	.way {
		width: 100%;
		background-color: #F5F5F5;
	}
	.label{
		border-radius: 8rpx;
		border: 1rpx #F5F5F5 solid;
		padding: 5rpx 5rpx 5rpx 5rpx;
		margin-right: 15rpx;
	}
	.ac{
		border-radius: 8rpx;
		border: 1rpx red solid;
		padding: 5rpx 5rpx 5rpx 5rpx;
		margin-right: 15rpx;
	}
	.heng {
		display: flex;
		flex-direction: row;
		height: 60rpx;
		color: #FFFFFF;
		position: fixed;
		bottom: 30rpx;
	}

	.quxiao {
		width: 130rpx;
		height: 50rpx;
		background-color: red;
		border-radius: 35rpx;
		text-align: center;
		line-height: 50rpx;
		margin-right: 15rpx;
	}

	.queding {
		width: 130rpx;
		height: 50rpx;
		background-color: red;
		border-radius: 35rpx;
		text-align: center;
		line-height: 50rpx;
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
	.user{
		display: flex;
		flex-direction: row;
	}
</style>
