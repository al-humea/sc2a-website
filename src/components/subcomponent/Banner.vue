<template>
	<div  id="banner">
		<div id="topCorner"></div>
		<div id="topSubCorner"></div>
		<div id="identity">
			<img id="sc2a_logo" src="sc2a_logo.png" alt="logo">
			<div id="text">
				<h1>ASSURANCES</h1>
				<div id="textBar"></div>
				<p>CABINET L'HUMEAU</p>
			</div>
		</div>
		<div id="botCorner"></div>
		<div id="underline"></div>
	</div>
</template>

<script setup>

</script>

<style scoped>
#banner {
	z-index: 0;
	height : 20vh;
	width: 100vw;
	background-color: #273188;
	position: relative;

	display: flex;
	justify-content: space-between;
}
#identity {
	background-color: red;
	height: 100%;
	min-width: fit-content;
	width: 40vw;
	display: flex;
	justify-content: space-between;
}
#text {
	display: flex;
	flex-direction: column;
	margin: auto 0 auto 0;
	width: fit-content;
	color: white;
}
h1 {
	height: 50px;
	font-weight: lighter;
	font-family: "LumarcLL";
	font-size: 50px;
}
#textBar {
	height: 1px;
	width: 100%;
	background-color: white;
}
p {
	font-family: "Blaimim";
	width: fit-content;
	font-size: smaller;
	align-self: flex-end;
}
#sc2a_logo {
	height: 120%;

	margin: auto 0;
}
</style>