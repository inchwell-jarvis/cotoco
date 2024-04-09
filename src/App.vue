<template>
	<div id="app">
		Jarvis Downey
		<router-view />
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	margin: 0;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 100px;
}
</style>
