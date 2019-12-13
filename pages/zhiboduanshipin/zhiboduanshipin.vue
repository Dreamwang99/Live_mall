<template>
	<view>
		<view class="heng">
			<view v-for="( item, index ) in list" :key="index" @click="cancel(index)">
				<view>
					<text :class="item.a ? 'zi':'hzi'">{{ item.name }}</text>
				</view>
			</view>
		</view>
		<view class="zhibo" v-show="list[0].a">
			<view class="shipin" v-for="(item,index) in zhibos" :key="index">
				<view class="beijing" :style="{ backgroundImage: 'url(' + item.avatar + ')' }" @tap="intoLiveRoom(item)">
					<view>
						<view class="xh">@{{item.user_nicename}}</view>
						<view class="botttom_t">
							<view class="xh1">{{item.title}}!</view>
							<view class="bofang">
								<image class="xh2" src="/static/dpshoucang/iocn-89-bf.png" mode=""></image>
								<view class="xh3">{{item.watch}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="zhibo" v-show="list[1].a">
			<view class="shipin" v-for="(item,index) in shipin" :key="index">
				<view class="beijing" :style="{ backgroundImage: 'url(' + item.thumb + ')' }" @tap="intoVideoPlay(item)">
					<view>
						<view class="xh">@{{item.userinfo.user_nicename}}</view>
						<view class="botttom_t">
							<view class="xh1">{{item.title}}!</view>
							<view class="bofang">
								<image class="xh2" src="/static/dpshoucang/iocn-89-bf.png" mode=""></image>
								<view class="xh3">{{item.views}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import bridge from '@/common/unfile/unfile.js';
	export default {
		data() {
			return {
				zhibo: true,
				duanshipin: false,
				list: [{
						name: '直播',
						a: true
					},
					{
						name: '短视频',
						a: false
					},

				],
				zhibos: [],
				shipin: []
			}
		},
		onLoad() {
			this.getlive()
			this.getRecom()
		},
		methods: {
			getlive() {
				this.request.getLiveList({
					token: uni.getStorageSync('token')
				}).then(res => {
					console.log(res)
					if(res.code === 1){
						this.zhibos = res.data
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none',
						})
					}
				})
			},
			getRecom() {
				this.request.getVideoList({
					uid: uni.getStorageSync('id')
				}).then(res => {
					console.log(res)
					if(res.data.code === 0){
						this.shipin = res.data.info
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none',
						})
					}
				})
			},
			intoLiveRoom(info){
				bridge.call('intoLiveRoom', info);
				bridge.register('intoLiveRoomCallback',function(res){
					console.log(res);
				});
			},
			intoVideoPlay(info){
				bridge.call('intoVideoPlay', info);
				bridge.register('intoVideoPlayCallback',function(res){
					console.log(res);
				});	
			},
			cancel(index) {
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.list[i].a = true;
						this.b = i;
					} else {
						this.list[i].a = false;
					}
				}
			}
		}
	}
</script>

<style>
	.zi {
		text-align: center;
		font-size: 28rpx;
		color: #FF212C;
		height: 82rpx;
		line-height: 82rpx;
		padding: 0 10rpx 10rpx 10rpx;
		border-bottom: 2px solid red;
	}

	.hzi {
		text-align: center;
		height: 82rpx;
		font-size: 28rpx;
		color: #000000;
		line-height: 82rpx;
		padding: 0 10rpx 10rpx 10rpx;
		width: 50%;
	}

	.zhibo {
		margin: 10rpx 21rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.hxian {
		height: 5rpx;
		width: 82rpx;
		margin-top: 13rpx;
		background-color: #FF212C;
		margin-left: 160rpx;
		margin-bottom: 8rpx;
	}

	.botttom_t {
		width: 349rpx;
		display: flex;
		padding-bottom: 10rpx;
		padding-right: 10rpx;
		justify-content: space-between;
	}

	.heng {
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		width: 100%;
		padding: 10rpx 30rpx;
		justify-content: space-around;
		border-top: 1px solid #eee;
	}

	.fl {
		font-size: 20rpx;
		line-height: 75rpx;
		margin-left: 40rpx;
		margin-right: 60rpx;
	}

	.bofang {
		display: flex;
		align-items: center;
	}

	.shipin {
		width: 349rpx;
		margin-top: 10rpx;
	}

	.xian {
		height: 2rpx;
		background-color: #F5F5F5;
		width: 100%;
	}

	.beijing {
		display: flex;
		align-items: flex-end;
		height: 499rpx;
		width: 349rpx;
		background-size: 100% 100%;
	}

	.beijing1 {
		height: 500rpx;
		width: 350rpx;

		background-size: 100% 100%;

	}

	.xh {
		margin-left: 12rpx;
		font-size: 27rpx;
		color: #FFFFFF;
		width: 100%;
	}

	.xh1 {
		margin-left: 12rpx;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.xh2 {
		margin-left: 20rpx;
		margin-top: 8rpx;
		height: 18rpx;
		width: 18rpx;
	}

	.xh3 {
		font-size: 20rpx;
		color: #FFFFFF;
	}
</style>
