<template>
	<view class="concent">
		<view class="xian">
		</view>
		<view class="heng">
			<view class="hp" :class="type-1==index?'re':''" v-for="( item,index ) in list" :key="index" @tap="typesee(index)">{{item.name}}({{item.count || 0}})</view>
		</view>
		<!-- <view class="baobei">
			宝贝评价（{{list[0].count}}）
		</view> -->
		<view class="common" v-for="(item,index) in clist" :key="index">
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
				shopid: '',
				list: [{
						name: '全部',
						count: null
					},
					{
						name: '好评',
						count: null
					},
					{
						name: '中评',
						count: null
					},
					{
						name: '差评',
						count: null
					},
				],
				clist: [],
				cdata: null,
				token: uni.getStorageSync('token'),
				page: 1,
				size: 10,
				type: 1,
			}
		},
		onReachBottom() {
			this.page++
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
			typesee(ty) {
				this.type = ty + 1
				this.page = 1
				console.log(this.type);
				this.getdata(this.type)
			},
			getdata(ty) {
				this.request.getAllCommon({
					token: this.token,
					shop_id: this.shopid,
					type: ty,
					page: this.page,
					size: this.size,
				}).then(res => {
					console.log(res);
					if (this.page == 1) {
						this.clist = []
					} else {
						if (res.data.common.length < 1) {
							this.page--
						}
					}
					this.clist = this.clist.concat(res.data.common)
					this.cdata = res.data
				})
			},
			getcount(ty) {
				this.request.getAllCommon({
					token: this.token,
					shop_id: this.shopid,
					type: ty,
					page: this.page,
					size: this.size,
				}).then(res => {
					this.list[ty - 1].count = res.data.count
				})
			}
		}
	}
</script>

<style>
	page,
	.content {
		width: 100%;
		min-height: 100%;
		background: #F8F8F8;
	}
	.xian {
		height: 2rpx;
		width: 100%;
		background-color: #F5F5F5;
	}

	.heng {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 30rpx;
	}

	.hp {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 25rpx;
		min-width: 120rpx;
		border: #898989 2rpx solid;
		margin-left: 25rpx;
		margin-top: 20rpx;
	}

	.re {
		border-color: red;
		color: red;
	}

	.baobei {
		line-height: 85rpx;
		font-size: 22rpx;
		margin-left: 27rpx;
	}

	.tx {
		margin-left: 27rpx;
		height: 40rpx;
		width: 40rpx;
		border-radius: 100%;
	}

	.xh {
		font-size: 25rpx;
		color:#949494;
		margin-left: 15rpx;
	}

	.pingjia {
		font-size: 25rpx;
		color: #000000;
		margin-left: 26rpx;
	}

	.common {
		margin-top: 20rpx;
	}
</style>
