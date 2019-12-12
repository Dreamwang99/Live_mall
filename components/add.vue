<template>

	<view class="checkNumBox">
		<view class="minu btn" @tap="minu">-</view>
		<view class="checkNumVal">
			{{childNum}}
		</view>
		<view class="plus btn" @tap="plus">+</view>
	</view>
</template>

<script>
	export default {
		name: 'add',
		data() {
			return {
				childNum:1
			}
		},
		props: {
			num: {
				type: Number,
				default: 1, //默认值
			}
		},
		created() {
			this.childNum = this.num
		},
		methods: {
			minu() {
				if (this.childNum > 1) {
					this.childNum -= 1
				}
				this.$emit('numChange',this.childNum)
			},
			plus() {
				if (this.childNum < 999) {
					this.childNum += 1
				}
				this.$emit('numChange',this.childNum)
			}
		},
		watch: {

		},
	}
</script>

<style lang="scss" scoped>
	.checkNumBox {
		display: flex;
		justify-content: flex-start;

		view {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		// 加号
		.btn {
			width: 50upx;
			height: 50upx;
			font-size: 50upx;
			border: #e5e5e5 1rpx solid;
		}
		// 减号
		.minu {
			color: #797979;
			border: #e5e5e5 1rpx solid;
		}
		//数字
		.checkNumVal {
			width: 50upx;
			height: 50upx;
			font-size: 30upx;
			border: #e5e5e5 1rpx solid;
		}
	}
</style>
