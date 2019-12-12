<template>
	<view>
		<view class="beijing">
			<view style="height: 50rpx"></view>
			<view class="heng">
				<view class="beijing1 heng">
					<image class="fdj" src="../../static/icon-fangdajing.png" mode=""></image>
					<input class="zi" type="text" placeholder="请输入你要搜索的内容" value="" />
				</view>
				<view class="quxiao">取消</view>
			</view>
			<view class="dangqian">当前定位</view>
			<view class="heng">
				<image class="dw" src="../../static/shaixuan/iocn-74-dw.png" mode=""></image>
				<view class="dizhi">{{dizhi}}</view>
				<view class="chongxin">重新定位</view>
			</view>
			<view style="height: 2rpx;background-color: #FFFFFF;margin-top: 30rpx;margin-bottom: 30rpx;"></view>
			<view class="remen">热门搜索</view>
			<view class="heng">
				<view class="diqu">铜山区</view>
				<view class="diqu">连云港</view>
			</view>
			<view class="heng">
				<view class="diqu2">铜山区</view>
				<view class="diqu2">连云港</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dizhi:'万达广场（铜山万达）'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.beijing{
	background-color: #F5F5F5;
	height: 1330rpx;
}
.heng{
	display: flex;
	flex-direction: row;
}
.beijing1{
	height: 60rpx;
	width: 610rpx;
	margin-left: 23rpx;
	border-radius: 35rpx;
	background-color: #FFFFFF;
}
.fdj{
	height: 26rpx;
	width: 26rpx;
	margin-top: 20rpx;
	margin-left: 28rpx;
}
.zi{
	font-size: 25rpx;
	margin-top: 18rpx;
	margin-left: 23rpx;
}
.quxiao{
	font-size: 26rpx;
	margin-right: 20rpx;
	margin-left: auto;
	margin-top: 18rpx;
	
}
.dangqian{
	font-size: 23rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
	color: #c6c6c6;
}
.dw{
	height: 32rpx;
	width: 25rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
}
.chongxin{
	font-size: 23rpx;
	margin-right: 20rpx;
	margin-left: auto;
	color: #FF212C;
	margin-top: 32rpx;
}
.dizhi{
	margin-top: 30rpx;
	margin-left: 18rpx;
	font-size: 28rpx;
}
.remen{
	font-size: 32rpx;
	margin-left: 20rpx;
	
}
.diqu{
	height: 52rpx;
	width: 123rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
	margin-right: 10rpx;
	border: solid;
	border-color: #FF212C;
	color: #FF212C;
	background-color: #FFFFFF;
	font-size: 23rpx;
	border-radius: 30rpx;
	line-height: 52rpx;
	text-align: center;
}
.diqu2{
	height: 52rpx;
	width: 123rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
	margin-right: 10rpx;
	font-size: 23rpx;
	background-color: #FFFFFF;
	border-radius: 30rpx;
	line-height: 52rpx;
	text-align: center;
	color: #c6c6c6;
}

</style>
