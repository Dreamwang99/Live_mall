<template>
	<view >
		<!-- 顶部 -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- <view class="heng sous">
			<view class="heng beijing1">
				<image class="fangdajing" src="../../static/icon-fangdajing.png" mode=""></image>
				<input class="sousuo" type="text" value="" placeholder="请输入搜索内容" />
			</view>
			<image class="xinf" src="" mode=""></image>
		</view> -->
		<view class="top">
			<view class="top_c">
				<image src="../../static/icon-fangdajing.png" mode="" class="hunt"></image>
				<input type="text" placeholder="请输入要搜索的内容" value="" class="search_string" @tap="search()" />
			</view>
			<image src="../../static/icon-xinxi.png" mode="" class="toptext" @tap="goxinxi"></image>
		</view>
		<view class="top_nav">
			<view class="V_line">
				<view class="bor" v-for="(lnl_item,lnl_idx) in leftNavList" :key="lnl_idx" @tap="choseNav(lnl_idx)" :class="current === lnl_idx ? 'ac' : ''">
					{{lnl_item.label}}
				</view>
			</view>
		</view>
		<view class="nominate">
			<view class="matter" v-for="(c,c_idx) in childKindsInfo" :key="c_idx" @tap="cagaly(c)">
				<view class="recommend">{{c.title}}</view>
				<view class="huanhang">
					<view class="classify" v-for="(d,d_idx) in c.category" :key="d_idx" @tap="commodity()">
						<image :src="d.logo" mode="" class="classifyimg"></image>
						<view class="classifytxt">{{d.title}}</view>
					</view>
				</view>
			</view>
		</view>


		<!-- <view  class="huadong1">
			<scroll-view scroll-x="true" style="  display: inline-block">
					<view class="heng"  v-for="(item,index) in list" :key=index @click="cancel(index)" >
						<view :class="item.a? 'shu':'shu1'"></view>
						<view :class="item.a? 'pinpai1':'pinpai'">{{item.name}}</view>
					</view>
			</scroll-view>
			</view>
			<scroll-view v-if="b===0" scroll-x="true" class="gundong2 beijing">
				<view class="meizhuang">美妆</view>
					<view class="hzp1" >
						<view class="hezi" v-for="(item,index) in list1" :key=index>
							<image :class="item.tu" :src="item.urlimage" mode="aspectFit"></image>
							<view class="hzp2">{{item.name}}</view>
						</view>
					</view>
				
			</scroll-view> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: true,
				b: 0,
				current: 0,
				typeId: 0,
				deslo: [{
					name: '接口'
				}],
				leftNavList: [],
				childKindsInfo: [{
					name: '接口'
				}],
				goods_id:''
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList() {
				this.request.getgory({

				}).then(res => {
					console.log(res)
					this.leftNavList = res.data
					this.choseNav(0)
				})
			},
			choseNav(idx) {
				this.current = idx
				if (this.leftNavList.length !== 0) {
					var type = this.leftNavList[idx].id
				}
				this.request.getShopList({
					token: uni.getStorageSync('token'),
					category_id: type
				}).then(res => {
					console.log(res)
					this.childKindsInfo = res.data
				})
			},
			search() {
				uni.navigateTo({
					url: 'sousuo'
				})
			},
			cagaly(c) {

			},
			commodity() {
				this.childKindsInfo.forEach((val, idx) => {
					console.log(val)
					val.category.forEach((val2, idx2) => {
						this.goods_id = val2.id
						console.log(this.goods_id)
					})
				})
				uni.navigateTo({
					url: 'fenleisousuo?goods_id=' + this.goods_id
				})
			},
			goxinxi() {
				uni.navigateTo({
					url: '../xinxitongzhi/xinxitongzhi'
				})
			}
		},
	}
</script>

<style lang="scss">
	//顶部标题栏
	.status_bar {
	  height: var(--status-bar-height);
	  width: 100%;
	  background-color: #FFFFFF;
	 }
	
	 .top_view {
	  height: var(--status-bar-height);
	  width: 100%;
	  position: fixed;
	  background: -webkit-gradient(linear, 0 0, 100% 100%, from(#fafafa), to(#fafafa));
	  top: 0;
	  z-index: 999;
	 }
	/* 顶部 */
	.top {
		display: flex;
		justify-content: flex-end;
		flex-direction: row;
		align-items: center;
		width: 750rpx;
		height: 95rpx;
		line-height: 95rpx;
		background-color: #fafafa;
	}
	
	.topimg {
		width: 22rpx;
		height: 40rpx;
		margin-right: 30rpx;
		margin-left: 20rpx;
		margin-top: 18rpx;
	}
	
	.top_c {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 500rpx;
		height: 65rpx;
		margin-left: 40rpx;
		background-color: #eeeeed;
		border-radius: 50px;
		margin-top: 10rpx;
	}
	
	.hunt {
		width: 35rpx;
		height: 30rpx;
		margin-left: 20rpx;
	}
	
	.search_string {
		margin-left: 20rpx;
		font-weight: 100;
		font-size: 30rpx;
		color: #b5b5b5;
	}
	
	.toptext {
		width: 40rpx;
		height: 35rpx;
		color: #f23d3d;
		margin-left: 50rpx;
		margin-right: 60rpx;
	}
	
	.top_nav {
		text-align: center;
		width: 180rpx;
		min-height: 90vh;
		line-height: 100rpx;
		background-color: #fafafa;
		position: absolute;
		top: 145rpx;
		left: 0;

		.bor {
			height: 100rpx;
			font-size: 26rpx;
			text-align: center;
		}

		.ac {
			color: #f23d3d;
			border-left: 3px #f23d3d solid;
			text-align: center;
			background-color: #FFFFFF;
		}
	}
	.nominate {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 571rpx;
		height: 1220rpx;
		background-color: #F5F5F5;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
		margin-left:180rpx;
	}
	.huanhang{
		display: flex;
		flex-wrap: wrap;
		width: 499rpx;
		height: 365rpx;
		margin-top: 20rpx;
	}
	.classify {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 20rpx;
		margin-left: 30rpx;
		margin-right: 40rpx;
	}
	.matter{
		display: flex;
		flex-direction: column;
	}
	.recommend {
		margin-top: 30rpx;
		font-size: 26rpx;
	}
	
	.imgtext {
		text-align: center;
		margin-right: 30rpx;
	}
	
	.classifyimg {
		width: 108rpx;
		height: 108rpx;
	}
	
	.classifytxt {
		color: #464646;
		font-size: 26rpx;
	}
</style>