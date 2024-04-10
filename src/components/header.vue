<template>
	<div class="headers">
		<div class="headers_content">
			<!-- icon -->
			<div class="icon">
				<img src="../assets/favicon.png" alt="">
			</div>
			<!-- text -->
			<div class="text">
				Jarvis Downey
			</div>
			<!-- text -->
			<div class="operation">
				<span>主页</span>
				<span>API</span>
				<span>功能</span>
				<span>关于</span>
				<span>支持</span>
				<span class="none">|</span>
				<span>
					<img src="../assets/github-fill.png" alt="">
				</span>

			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.headers {
	width: 100%;
	height: 55px;
	border-bottom: 1px solid #3c3c3c1f;
	box-sizing: border-box;
	user-select: none;

	.headers_content {
		width: 1450px;
		height: 100%;
		margin: auto;
		.icon {
			width: 55px;
			height: 55px;
			padding: 15px;
			box-sizing: border-box;
			float: left;
			cursor: pointer;
			user-select: none;
			img {
				width: 100%;
			}
		}
		.text {
			width: 180px;
			height: 100%;
			line-height: 55px;
			font-size: 20px;
			color: #273849;
			float: left;
			font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
			cursor: pointer;
		}
		.operation {
			min-width: 100px;
			height: 100%;
			float: right;
			color: #273849;
			line-height: 55px;
			font-size: 13px;
			span {
				display: block;
				height: 100%;
				float: left;
				margin: 0 20px;
				height: 100%;
				cursor: pointer;
				position: relative;
				img {
					display: block;
					width: 26px;
					height: 26px;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				}
			}
			.none {
				color: #bcb9b9;
				cursor: default;
			}
			span:hover {
				color: #42b883;
			}
			.none:hover {
				color: #bcb9b9;
			}
		}
	}
	@media screen and (max-width: 1450px) {
		/*当屏幕尺寸小于600px时，应用下面的CSS样式*/
		.headers_content {
			width: 100%;
		}
	}
}
</style>