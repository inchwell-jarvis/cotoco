<template>
	<div class='box'>
		<div class="variable_naming">
			<div class="variable_naming_header">变量命名</div>
			<div class="variable_naming_content">
				<div class="variable_naming_item variable_naming_input">
					<div class="textarea">
						<textarea class="dzm-textarea" name="textarea" v-model="textarea" placeholder="请输入内容"></textarea>
					</div>
				</div>
				<div class="variable_naming_item variable_naming_input">
					<!-- 无结果 -->
					<p v-if="textarea == ''">译文</p>

					<div>
						{{ textarea }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	// 定义属性
	data() {
		return {
			textarea: ''
		};
	},
	// 计算属性，会监听依赖属性值随之变化
	computed: {
	},
	// 监控data中的数据变化
	watch: {
		textarea() {
			this.apix('http://39.100.116.85:6001/api/account/login', { from: 2, password: "163", radio: true, username: "gotoadmin" }, { method: 'POST' })
				.then(rv => {
					console.log(rv)
				})
		}
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
	background: #fafafc;
	position: relative;

	.variable_naming {
		width: calc(100% - 80px);
		height: calc(100% - 80px);
		background: rgb(255, 255, 255);
		box-sizing: border-box;
		border: 1px solid rgb(242, 243, 245);
		box-shadow: rgba(35, 46, 67, 0.06) 0px 4px 10px;
		border-radius: 12px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;

		.variable_naming_header {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid rgb(227, 228, 229);
			font-weight: bold;
			line-height: 50px;
			text-indent: 2em;
		}

		.variable_naming_content {
			width: 100%;
			height: calc(100% - 50px);
			.variable_naming_item {
				width: 50%;
				height: 100%;
				float: left;
				box-sizing: border-box;
				font-size: 18px;
			}
			.variable_naming_input {
				border-right: 1px solid rgb(227, 228, 229);
				padding: 30px;
				box-sizing: border-box;
				.textarea {
					width: 100%;
					height: 100%;

					/* 输入框 */
					.dzm-textarea {
						width: 100%;
						height: 100%;
						content: none;
						padding: 5px;
						outline: none;
						border: none;
						font-family: "HarmonyOS_bold";
						font-size: 18px;
						padding: 0px;
					}

					.dzm-textarea::-webkit-input-placeholder {
						color: #ddd;
					}
				}
			}
		}
	}
}
</style>