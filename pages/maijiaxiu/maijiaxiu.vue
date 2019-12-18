<template>
	<view class="beijing uni-fle">
		<view class="left">
			<view v-for="(item,index) in showlist1" :key="index">
				<image class="tu2" :src="item.image" mode="aspectFill"></image>
				<!-- <image :class="index==0?'tu':'tu2'" :src="item.image" mode="aspectFill"></image> -->
				<view class="baidi">
					<view class="xjhao">
						{{item.content}}
					</view>
					<view class="heng ">
						<image class="tx" :src="item.avatar" mode=""></image>
						<view class="fs">
							{{item.user_nicename}}
						</view>
						<view class="fen">
							{{item.create_time}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="right">
			<view v-for="(item,index) in showlist2" :key="index">
				<image class="tu2" :src="item.image" mode="aspectFill"></image>
				<!-- <image :class="index%2==0?'tu':'tu2'" :src="item.image" mode="aspectFill"></image> -->
				<view class="baidi">
					<view class="xjhao">
						{{item.content}}
					</view>
					<view class="heng ">
						<image class="tx" :src="item.avatar" mode=""></image>
						<view class="fs">
							{{item.user_nicename}}
						</view>
						<view class="fen">
							{{item.create_time}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopid:'',
				token: uni.getStorageSync('token'),
				showlist1: [],
				showlist2: [],
				page: 1,
				size: 10,
			}
		},
		onLoad(o) {
			this.shopid = o.id
			this.getdata()
		},
		methods: {
			getdata(){
				this.request.shopshow({
					token: this.token,
					shop_id: this.shopid,
					page: this.page,
					size: this.size,
				}).then(res =>{
					console.log(res);
					if(res.data.buy.length<1){
						this.page--
					}
					if(this.page==1){
						this.showlist = []
					}
					let list1 = []
					let list2 = []
					for (var i = 0; i < res.data.buy.length; i++) {
						if(res.data.buy[i].create_time){
							res.data.buy[i].create_time = res.data.buy[i].create_time.slice(0,10)
						}
						if(i%2==1){
							list1 = list1.concat(res.data.buy[i])
						}else{
							list2 = list2.concat(res.data.buy[i])
						}
					}
					console.log(list1);
					console.log(list2);
					this.showlist1 = list1
					this.showlist2 = list2
				})
			}
		}
	}
</script>

<style>
.beijing{
	background-color: #F5F5F5;
	background-size: cover;
}
.heng{
	display: flex;
	flex-direction: row;
}
.uni-fle{
	display: flex;
	flex-wrap: wrap;
}
.tu{
	height: 320rpx;
	width: 345rpx;
	margin-left: 20rpx;
	margin-top: 25rpx;
}
.tu2{
	height: 388rpx;
	width: 345rpx;
	margin-left: 20rpx;
	margin-top: 25rpx;
}
.xjhao{
	font-size: 18rpx;
	margin-left: 10rpx;
	line-height: 55rpx;
}
.baidi{
	width: 345rpx;
	margin-left: 25rpx;
	background-color: #FFFFFF;
	margin-top: -5rpx;
}
.tx{
	height: 35rpx;
	width: 35rpx;
	margin-left: 10rpx;
}
.fs{
	color: #a5a5a5;
	font-size: 19rpx;
	margin-left: 12rpx;
}
.fen{
	margin-left: 100rpx;
	font-size: 13rpx;
	color: #a5a5a5;
}
.left{
	width: 50%;
	height: 50px;
}
.right{
	width: 50%;
	height: 50px;
}
</style>
