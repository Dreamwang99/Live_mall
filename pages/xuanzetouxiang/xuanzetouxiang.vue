<template>
	<view class="beijing">
		<view class="buju" >
			<image class="tx" v-for="(item,index) in list" :key=index :src="item.img" mode="aspectFit"></image>
		</view>
		<view class="dibu heng" @tap="dianji">
			<view class="suoyou" >所有照片</view>
			<image class="tu" src="../../static/center/iocn-106-souyou.png" mode="aspectFit"></image>
		</view>
		<uni-popup msg=""  :show="show" type="bottom">
			<view class="zhaopian">
				<view class="heng zp1"  v-for="(item,index) in list1" :key=index>
					<image class="tx" :src="item.img" mode="aspectFit"></image>
					<view  @click="xuanze(index)">
						<view class="zp">{{item.name}}</view>
						<view class="jizhang">{{item.name1}}</view>
					</view>
					<image class="gou" :src="item.a ? '../../static/center/iocn-gou.png':'' " mode="aspectFit" ></image>
				</view>
				<view class="dibu heng" >
					<view class="suoyou" >{{zhaopian}}</view>
					<image class="tu" src="../../static/center/iocn-106-souyou.png" mode="aspectFit"></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
		export default {
			components:{
				uniPopup
			},
		data() {
			return {
				a:true,
				zhaopian:'所有照片',
				show:false,
				list:[{img:'../../static/center/img-touxiang.png'},
				{img:'../../static/center/img-touxiang.png'},
				{img:'../../static/center/img-touxiang.png'},
				{img:'../../static/center/img-touxiang.png'},
				{img:'../../static/center/img-touxiang.png'}],
				list1:[
					{img:'../../static/center/img-touxiang.png',
					name:'所有照片',
					name1:'',
					a:true},
						{img:'../../static/center/img-touxiang.png',
						name:'Camera',
						name1:'1000张',
						a:false},
						{img:'../../static/center/img-touxiang.png',
						name:'微信',
						name1:'1000张',
						a:false}
				]
			}
		},
		methods: {
			dianji(){
				this.show=true;
			},
			xuanze(index){
			for (let i = 0; i < this.list1.length; i++) {
				if (index == i) {
					this.list1[i].a = true;
					this.zhaopian=this.list1[i].name;
				} else {
					this.list1[i].a = false;
				}
			}
			}
		}
	}
</script>

<style>
.beijing{
	background-color: #F5F5F5;
}
.buju{
	flex-direction: row;
}
.heng{
	display: flex;
	flex-direction: row;
}
.jizhang{
	color: #ADADAD;
	font-size: 22rpx;
	margin-left: 62rpx;
	margin-top: 23rpx;
}
.dibu{
	position: fixed;
	bottom: 0rpx;
	height: 100rpx;
	line-height: 100rpx;
	background-color: #FFFFFF;
	width: 100%;
}
.suoyou{
	font-size: 27rpx;
	margin-left: 22rpx;
}
.tu{
	margin-top: 24rpx;
	margin-left: 17rpx;
	height: 45rpx;
	width: 45rpx;
}
.tx{
	height: 140rpx;
	width: 152rpx;
	margin-top: 24rpx;
	margin-left: 20rpx;
	margin-right: 10rpx;
}
.gou{
	height: 33rpx;
	width: 33rpx;
	margin-top: 90rpx;
	margin-right: 20rpx;
	margin-left: auto;
}
.zhaopian{
	height: 750rpx;
}
.zp{
	font-size: 34rpx;
	margin-top: 68rpx;
	margin-left:62rpx;
}
.zp1{
	height: 215rpx;
	width: 100%;
	margin-bottom: 0rpx;
}
</style>
