<template>
	<div  id="banner">
		<div id="topleftcorner"></div>
		<div id="identity">
			<img id="sc2a_logo" src="banner/sc2a_logo.png" alt="logo">
			<div id="text">
				<h1>ASSURANCES</h1>
				<div id="textBar"></div>
				<p>CABINET L'HUMEAU</p>
			</div>
		</div>
		<div id="rightcorner"></div>
		<div id="bottom"></div>
	</div>
</template>

<script setup>

</script>

<style scoped>
	#banner {
		z-index: 0;
		height : 20vh;
		min-height: 240px;
		width: 100%;
		background-color: #273188;
		position: relative;

		display: flex;
		justify-content: space-between;
	}
	#identity {
		min-width: fit-content;
		height: fit-content;
		max-width: 40vw;
		display: flex;
		margin: 0 auto;
		justify-content: space-around;
		align-items: center;
		margin-top: 1vh;
	}
	#sc2a_logo {
		height: min(30vw, 180px);
	}
	#text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: fit-content;
		color: white;
	}
	h1 {
		height: fit-content;
		font-weight: lighter;
		font-family: "LumarcLL";
		font-size: min(8vw, 50px);
	}
	#textBar {
		height: 1px;
		width: 100%;
		background-color: white;
	}
	p {
		font-family: "Blaimim";
		width: fit-content;
		font-size: min(2vw, 15px);
		align-self: flex-end;
	}

	#bottom {
		content: url("../../../public/banner/Bottom.png");
		height: 50%;
		width: 100%;
		position: absolute;
		z-index: 0;
		bottom: 0;
	}
	#rightcorner {
		content: url("../../../public/banner/Corner-CBR.png");
		height: 50%;
		position: absolute;
		z-index: 1;
		right: 0;
		bottom: 0;
	}
	#topleftcorner {
		content: url("../../../public/banner/Banner-CTL.svg");
		max-height: 80%;
		min-width: 175px;
		max-width: 20vw;
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
	}
	@media screen and (max-width: 1024px){
		#banner {
			align-items: center;
		}
		#rightcorner {
			display: none;
		}
	}
</style>