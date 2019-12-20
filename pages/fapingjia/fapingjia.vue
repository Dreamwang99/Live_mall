<template>
	<view class="">
		<view style="background: #fff;border-bottom: 20rpx solid #eee;" v-for="(item,index) in arr" :key="index">
			<view style="border-bottom: 9rpx solid #eee;">
				<view class="sp">
					<image class="biao" :src="item.goods_logo" mode=""></image>
					<view class="zi1">{{item.goods_title}}</view>
				</view>
			</view>
			<view class="pj" @tap="change1(index)">
				<view class="dp">店铺评价</view>
				<uni-rate :value="item.store" :margin="6" @changestar="onChange1" :size="22" :is-fill="false" color="#bbb" active-color="red" />
			</view>
			<view class="pj" @tap="change2(index)">
				<view class="dp">商品评价</view>
				<uni-rate :value="item.shop" :margin="6" @changestar="onChange2" :size="22" :is-fill="false" color="#bbb" active-color="red" />
			</view>
			<view class="pj" @tap="change3(index)">
				<view class="dp">物流评价</view>
				<uni-rate :value="item.logistics" :margin="6" @changestar="onChang3" :size="22" :is-fill="false" color="#bbb"
				 active-color="red" />
			</view>
			<view class="xian"></view>
			<view class="pj1">
				<textarea class="pj2" style="width: 100%;" v-model="item.content" type="text" placeholder="说点什么吧!" />
				<image class="showtu" v-if="item.common_image!=''" :src="item.common_image" :key="index" @click="updataPic(index)"></image>
		        <image v-if="item.common_image==''" src="../../static/dingdan/69_btn_tjzp.png" mode="aspectFit" :key="index" @click="updataPic(index)"></image>
		</view>
		
	</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {
			uniRate
		},
		data() {
			return {
				// 渲染
				isUpload: true,
				pjValue: 4,
				row: [],
				goods_list: [],
				detail:[],
				arr:[],
				business_order_no:'',
				content:'',
				store:5,
				shop:5,
				logistics:5,
				frontImage:'',
				common:[]
				
			}
		},
		onNavigationBarButtonTap(e) {
			for(var i=0;i<this.arr.length;i++){
				this.common.push({
					shop_id: this.arr[i].shop_id,
					business_id:this.arr[i].business_id,
					store:this.arr[i].store,
					shop:this.arr[i].shop,
					logistics:this.arr[i].logistics,
					content:this.arr[i].content,
					common_image:this.arr[i].common_image,
					bargain_id:this.arr[i].bargain_id,
					
				})
			}
			console.log(JSON.stringify(this.common));
			    this.request.getUserShopCommon({
				token: uni.getStorageSync('token'),
				common:JSON.stringify(this.common),
				business_order_no:this.business_order_no
			}).then(res => {
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
				setTimeout(function() {
					uni.navigateBack({
						
					})
				}, 1500);
			})
		},
		onLoad(options) {
			this.row = options.row
			this.business_order_no = options.business_order_no
			this.getDetails()
		},
		methods: {
			getDetails() {
				this.request.orderDetails({
					token: uni.getStorageSync('token'),
					business_order_no: this.business_order_no
				}).then(res => {
					console.log(res);
					if(res.code === 1){
						this.detail = res.data
						for(var i=0;i<res.data.goods_list.length;i++){
							this.arr.push({
								goods_logo:res.data.goods_list[i].goods_logo,
								goods_title:res.data.goods_list[i].goods_title,
								shop_id:res.data.goods_list[i].goods_id,
								bargain_id:res.data.goods_list[i].goods_spec,
								store:this.store,
								shop:this.shop,
								logistics:this.logistics,
								content:this.content,
								common_image:'',
								business_id:this.detail.business_id,
							})
						}
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			onChange1(e) {
				this.store=e.value
				// this.arr.store=e.value
			},
			change1(index){
				this.arr[index].store=this.store
				console.log("veve"+JSON.stringify(this.arr))
			},
			onChange2(e) {
				this.shop=e.value
			},
			change2(index){
				this.arr[index].shop=this.shop
				console.log("veve"+JSON.stringify(this.arr))
			},
			onChang3(e) {
				this.logistics=e.value
			},
			change3(index){
				this.arr[index].logistics=this.logistics
				console.log("veve"+JSON.stringify(this.arr))
			},
			updataPic(index){
					let _this = this
					uni.chooseImage({
						count: 1,
						sourceType:['album'],
						success(res){
							console.log(res.tempFilePaths[0])
							this.imgSrc = res.tempFilePaths[0]
							uni.uploadFile({
								url: _this.request.BASE_URL + '/merchant/uploadQnImg',
								filePath: this.imgSrc,
								name: 'file',
								formData: {
								},
								success: (uploadFileRes) => {
									console.log(JSON.parse(uploadFileRes.data).data.img_url);
									// if(uploadFileRes.)
									console.log(2222222)
									_this.arr[index].common_image=JSON.parse(uploadFileRes.data).data.img_url
								},
							});
						}
				})
			},
		}
	}
</script>

<style>
	.toubu {
		display: flex;
		flex-direction: row;
	}

	.back {
		margin-left: 21rpx;
		height: 35rpx;
		width: 22rpx;
	}

	.pj {
		margin-top: 50rpx;
		display: flex;
		flex-direction: row;
	}

	.zi {
		margin-left: 270rpx;
	}

	.biao {
		height: 160rpx;
		width: 190rpx;
		margin-right: 15rpx;
		border-radius: 10px;
	}

	.sp {
		display: flex;
		flex-direction: row;
		margin-right: 45rpx;
		margin-left: 20rpx;
		margin-top: 6rpx;
	}

	.xx {
		height: 25rpx;
		width: 25rpx;
		line-height: 28rpx;
		margin-left: 25rpx;
	}

	.zi1 {
		margin-top: auto;
		margin-bottom: auto;
		font-size: 23rpx;
	}

	.dp {
		margin-left: 30rpx;
		margin-right: 25rpx;
		font-size: 23rpx;
		color: #949494;
	}

	.xian {
		margin-top: 30rpx;
		height: 5rpx;
		background-color: #f5f5f5;
	}
	.showtu{
		width: 144rpx;
		height: 144rpx;
	}
	.pj1 {
		margin-left: 21rpx;
		padding-bottom: 31rpx;
	}
	.pj1 image{
		width: 144rpx;
		height: 144rpx;
	}
	.pj2 {
		font-size: 24rpx;
		height: 220rpx;
		padding-top: 20rpx;
		padding-right: 20rpx;

	}

	.xian1 {
		margin-top: 30rpx;
		height: 580rpx;
		background-color: #f5f5f5;
	}
</style>
