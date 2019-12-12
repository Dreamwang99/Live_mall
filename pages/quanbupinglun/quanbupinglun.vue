<template>
	<view>
		<view class="xian">
		</view>
		<view class="heng">
			<view class="hp" :class="type-1==index?'re':''" v-for="( item,index ) in list" :key="index" @tap="typesee(index)">{{item.name}}({{item.count}})</view>
		</view>
		<view class="common" v-for="(item,index) in clist" :key="index">
			<!-- <view class="baobei">
				宝贝评价（1234）
			</view> -->
			<view class="heng">
				<image class="tx" :src="item.avatar"></image>
				<view class="xh">
					{{item.user_nicename}}
				</view>
			</view>
			<view class="pingjia">
				{{item.content}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopid:'',
				list:[
					{name:'全部',count:null},
					{name:'好评',count:null},
					{name:'中评',count:null},
					{name:'差评',count:null},
				],
				clist:[],
				cdata:null,
				token: uni.getStorageSync('token'),
				page: 1,
				size: 10,
				type: 1,
			}
		},
		onReachBottom(){
			this.page+=10
			this.getdata(this.type)
		},
		onLoad(o) {
			this.shopid = o.id
			this.getdata(this.type)
			for (var i = 1; i < 5; i++) {
				this.getcount(i)
			}
		},
		methods: {
			typesee(ty){
				this.type = ty+1
				this.page = 1
				console.log(this.type);
				this.getdata(this.type)
			},
			getdata(ty){
				this.request.getAllCommon({
					token: this.token,
					shop_id: this.shopid,
					type: ty,
					page: this.page,
					size: this.size,
				}).then(res =>{
					console.log(res);
					if(res.data.common.length<1){
						this.page--
					}
					if(this.page==1){
						this.clist = []
					}
					this.clist = this.clist.concat(res.data.common)
					this.cdata = res.data
				})
			},
			getcount(ty){
				this.request.getAllCommon({
					token: this.token,
					shop_id: this.shopid,
					type: ty,
					page: this.page,
					size: this.size,
				}).then(res =>{
					this.list[ty-1].count = res.data.count
				})
			}
		}
	}
</script>

<style>
.xian{
	height: 2rpx;
	width: 100%;
	background-color: #F5F5F5;
}
.heng{
	display: flex;
	flex-direction: row;
}
.hp{
	margin-top: 40rpx;
	text-align: center;
	border-radius: 30rpx;
	line-height: 40rpx;
	height: 40rpx;
	padding: 0rpx 10rpx;
	/* width: 90rpx; */
	font-size: 23rpx;
	margin-left: 20rpx;
	margin-right: 5rpx;
	border:solid;
	border-color: #898989;
}
.re{
	border-color: red;
	color: red;
}
.baobei{
	line-height: 85rpx;
	font-size: 22rpx;
	margin-left: 27rpx;
}
.tx{
	margin-left: 27rpx;
	height: 70rpx;
	width: 70rpx;
	border-radius: 100%;
}
.xh{
	font-size: 36rpx;
	line-height: 70rpx;
	color: #9c9c9c;
	margin-left: 14rpx;
}
.pingjia{
	font-size: 40rpx;
	line-height: 78rpx;
	margin-left: 50rpx;
}
.common{
	margin-top: 10rpx;
}
</style>
