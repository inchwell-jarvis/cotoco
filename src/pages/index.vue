<template>
	<div class="index">
		<!-- header -->
		<headerBar></headerBar>
		<!-- content -->
		<div class="content">
            <router-view />
		</div>
	</div>
</template>

<script>
import headerBar from "../components/header.vue";
export default {

	components: {
		headerBar
	}
}
</script>

<style lang="scss" scoped>
.index {
	width: 100%;
	height: 100%;
	.content {
		width: 100%;
		height: calc(100% - 55px);
	}
}
</style>