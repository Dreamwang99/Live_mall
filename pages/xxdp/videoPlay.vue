<template>
	<view>
		<view class="vMs">
			<video :src="videoUrl" controls autoplay="true"></video>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				videoUrl : ""
			}
		},
		onLoad(options) {
			_self = this;
			_self.videoUrl = options.urls
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.vMs{
		height: 100vh;
		video{
			width: 100%;
			height: 100%;
		}
	}
</style>
