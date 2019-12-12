<template>
	<view class="content">
		<view class="setmoren">
			<image class="gou" :src="show ? '../../static/center/iocn-gou.png':'../../static/center/iocn-20-yuan.png'" mode=""
			 @click="xuanze"></image>
			<view class="moren">设为默认地址</view>
		</view>
		<input class="zi" v-model="name" type="text" placeholder="请输入姓名">
		<input class="zi" v-model="phone" type="text" placeholder="请输入联系方式">
		<view class="heng" v-for="(item,index) in tabList" :key="index" @tap="toggleTab(item,index)">
			<view class="zi" style="font-size: 30rpx;">{{resultInfo.result}}</view>

			<image class="back1" src="../../static/back.png" :class="{'active':index==tabIndex}"></image>
		</view>
		<input v-model="detailAdre" class="zi3" :placeholder="detailAdress"></input>
		<w-picker mode="region" :defaultVal="['浙江省','杭州市','滨江区']" :areaCode="['33','3301','330108']" :hideArea="false"
		 @confirm="onConfirm" ref="region"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
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
				detailAdress: "详细地址：如街道、门牌号、小区、楼道号、单元",
				detailAdre: "",
				tabIndex: 0,
				type: '',
				txshow: false, //头像 本地相册
				changesex: false,
				xingbie: '男',
				mode: "range",
				defaultVal: [0, 0, 0, 0, 0, 0, 0],
				name: '',
				phone: '',
				tabList: [{
					mode: "region",
					name: "江苏徐州"
				}, ],
				userToken: "",
				show: false,
				default: 0
			}
		},
		onNavigationBarButtonTap() {
			this.addAdress()
			

		},
		onLoad() {
			/* this.userToken = uni.getStorageSync('value[19]');//调用获取key为userId 的缓存数值 */
		},
		methods: {
			/* 新增地址接口 */
			addAdress() {
				if (this.show == true) {
					this.default = 1
				} else {
					this.default = 0
				}
				console.log(this.show);
				console.log(this.default);
				uni.request({
					url: 'http://zsybshop.yanggod.com/api/order/addAddress',
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					data: {
						token: uni.getStorageSync('token'),
						name: this.name,
						phone: this.phone,
						province: this.provincial,
						city: this.market,
						area: this.district,
						address: this.detailAdre,
						is_default: this.default,
					},
					success: (res) => {
						if (res.data.code === 1) {
							uni.showToast({
								title: res.msg,
								icon: "none"
							})
							console.log("成功")
							uni.navigateBack({
								delta: 1
							})
						} else {
							uni.showToast({
								title: "添加地址失败",
								icon: "none",
							})
							console.log("失败")
						}
					}
				})
			},
			xuanze() {
				this.show = !this.show
			},
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
				this.provincial = val.checkArr[0]; /* 省 */
				this.market = val.checkArr[1]; /* 市 */
				this.district = val.checkArr[2]; /* 区 */
				console.log(this.provincial);
			}
		}
	}
</script>

<style>
	page {
		background-color: #F5F5F5;
	}

	.content {
		background-color: #FFFFFF;
	}

	.back {
		height: 55rpx;
		width: 35rpx;

	}

	.back1 {
		height: 30rpx;
		width: 16rpx;
		transform: rotate(180deg);
		margin-left: auto;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		margin-top: 28rpx;
	}

	.heng {
		display: flex;
		flex-direction: row;
	}

	.shouhuo {
		height: 40rpx;
		width: 200rpx;
		margin-left: 200rpx;
	}

	.shouhuo1 {
		height: 40rpx;
		width: 200rpx;
		margin-top: 30rpx;
		font-size: 30rpx;
		float: right;
	}

	.beijing {
		height: 5rpx;
		background-color: #f5f5f5;
	}

	.setmoren {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.moren {
		line-height: 94rpx;
		font-size: 26rpx;
	}

	.gou {
		width: 35rpx;
		height: 35rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}

	.zi {
		height: 94rpx;
		line-height: 94rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
	}

	.zi2 {
		font-size: 26rpx;
		margin-left: 20rpx;
		color: #A0A0A0;
	}

	.zi3 {
		height: 40rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
		color: #A0A0A0;
		margin-bottom: 60rpx;
	}
</style>
