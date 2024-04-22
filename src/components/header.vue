<template>
	<div class="headers">
		<div class="headers_content">
			<!-- icon -->
			<div class="icon">
				<img src="../../public/images/favicon.png" alt="">
			</div>
			<!-- text -->
			<div class="text">
				games
			</div>
			<!-- text -->
			<div class="operation">
				<span v-for="(item,index) in menu" :key="index" :style="{'color':item.bool ? '#42b883':''}" @click="path(item)">{{ item.name }}</span>
				<span class="none">|</span>
				<span>
					<img src="../../public/images/github-fill.png" alt="">
				</span>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	// 定义属性
	data() {
		return {
			menu: [
				{
					name: '主页',
					bool: true,
					page: 'index'
				},
				{
					name: '游戏',
					bool: false,
					page: 'games'
				},
				{
					name: '关于',
					bool: false,
					page: 'about'
				}
			]
		};
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.menu.forEach(rv => {
			rv['bool'] = this.$route.name == rv.page
		})
	},
	// 计算属性，会监听依赖属性值随之变化
	computed: {
	},
	// 监控data中的数据变化
	watch: {
		$route(to) {
			console.log(to.matched[1].name)
			this.menu.forEach(rv => {
				rv['bool'] = to.matched[1].name == rv.page
			})
		},
	},
	// 方法集合
	methods: {
		// 获取数据
		path(item) {
			console.log(item)
			this.$router.push({ path: item.page })
		}
	},
	// 生命周期 - 挂载完成（可以访问DOM元素）
	mounted() { },
	beforeCreate() { }, // 生命周期 - 创建之前
	beforeMount() { }, // 生命周期 - 挂载之前
	beforeUpdate() { }, // 生命周期 - 更新之前
	updated() { }, // 生命周期 - 更新之后
	beforeDestroy() { }, // 生命周期 - 销毁之前
	destroyed() { }, // 生命周期 - 销毁完成
	activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.headers {
	width: 100%;
	height: 55px;
	border-bottom: 1px solid #2929291f;
	box-sizing: border-box;
	user-select: none;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08);

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
			font-size: 22px;
			float: left;
			font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
			cursor: pointer;
		}
		.operation {
			min-width: 100px;
			height: 100%;
			float: right;
			line-height: 55px;
			font-size: 14px;
			font-weight: bold;
			font-family: "HarmonyOS";
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