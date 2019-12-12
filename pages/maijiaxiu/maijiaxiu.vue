<template>
	<view class="beijing uni-fle">
		<view v-for="(item,index) in showlist" :key="index">
			<image :class="index%2==0?'tu2':'tu'" :src="item.image" mode="aspectFill"></image>
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
						{{}}
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
				showlist: [],
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
					this.showlist = this.showlist.concat(res.data.buy)
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
	margin-left: 150rpx;
	font-size: 13rpx;
	color: #a5a5a5;
}
</style>
