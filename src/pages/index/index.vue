<template>
	<div class='box'>
		<div class="content">
			<div class="logo">
				<img src="../../../public/images/favicon.png" alt="">
			</div>

			<div class="introduce">
				<p class="p1">COTOCO</p>

				<p class="p2">变量命名</p>
				<p class="p3">专为程序员设计的工具模块，旨在简化和加速开发过程中的变量命名工作。该模块能够将汉字转换成有意义、易于理解的英文代码变量名称，极大地提高编码效率和代码的可读性。</p>

				<p class="p2">随机密码</p>
				<p class="p3">强大而灵活的密码生成工具，专为需要高安全标准的用户设计。它能够生成随机、复杂的密码，确保用户的在线安全。支持批量生成密码，非常适合需要大量安全凭据的场景。</p>

				<p class="p2">扫雷游戏</p>
				<p class="p3">经典扫雷游戏的现代复兴版，为您带来无与伦比的乐趣和挑战！我们的自研扫雷小游戏采用了最新的计算规则和用户界面设计，让这款经典的解谜游戏焕发出新的活力。无论您是扫雷游戏的老玩家还是新爱好者，都将为您带来难忘的体验。</p>

			</div>
			<!-- 
			<p>声音传播需要时间，我们面对面交谈 <br>我在过去，你在未来</p> -->
		</div>
	</div>
</template>
<script>
export default {
	// 定义属性
	data() {
		return {
		};
	},
	// 计算属性，会监听依赖属性值随之变化
	computed: {
	},
	// 监控data中的数据变化
	watch: {
	},
	// 方法集合
	methods: {
		// 获取数据
		start() {
		},
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.start();
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

<style lang='scss' scoped>
.box {
	font-family: "HarmonyOS_bold";

	.content {
		max-width: 1450px;
		height: 100%;
		margin: auto;
		.logo {
			width: 40%;
			height: 100%;
			float: left;
			position: relative;
			img{
				width: 100px;
				display: block;
				position: absolute;
				top: 30%;
				left: 70%;
				transform: translate(-50%, -50%);
			}
		}
		.introduce {
			width: 60%;
			height: 100%;
			float: left;
			padding: 100px 50px;
			box-sizing: border-box;
			.p1{
				font-size: 50px;
				line-height: 100px;
				margin-bottom: 50px;
			}
			.p2{
				font-size: 20px;
				font-family: "HarmonyOS_bold";
				line-height: 30px;
				margin: 10px 20px;
			}
			.p3{
				font-size: 15px;
				font-family: "HarmonyOS";
				line-height: 20px;
				margin: 10px 20px 30px;
				box-sizing: border-box;
				color: #2c3e50;
			}
		}
	}
}
</style>