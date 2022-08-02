<script>
import NavBar from "./components/NavBar.vue"
import FooterBar from "./components/FooterBar.vue"

export default {
	name: "App",
	components: {
		NavBar,
		FooterBar
	}
}
</script>

<template>
	<NavBar/>
	<router-view/>
	<FooterBar/>
</template>

<style>
	@font-face {
		font-family: "Blaimim";
		src: local("Blaimim"),
			url("./assets/fonts/Blaimim.ttf") format("truetype");
	}
	@font-face {
		font-family: "Montserrat";
		src: local("Montserrat"),
			url("./assets/fonts/Montserrat-Regular.ttf") format("truetype");
	}
	nav , footer , h2{
		font-family: "Blaimim";
	}
	* {margin: 0; padding: 0; }
	#app {
		height: 100vh;
		width: 100%;
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		font-family: Montserrat, Arial, sans-serif;
	}

	#app div, h2 {
		font-size: clamp(1.5rem, 1.5vw, 3rem);
	}
	header, footer{
		font-size: clamp(1rem, 1vw, 2rem);
	}
	@media screen and (max-width: 1920px){
		#app div{
			font-size: clamp(1rem, 1.5vw, 2.5rem);
		}
		h2 {
			font-size: clamp(1rem, 1.25vw, 2.5rem);
		}
		header{
			font-size: clamp(1rem, 1vw, 1.5rem);
		}
		footer{
			font-size: clamp(1rem, 1vh, 1vw);
		}
	}
	.content {
		max-width: 60%;
		display:flex;
		flex-direction: column;
		padding: 5vh 0%;
		justify-content: center;
		align-content: center;
	}
	@media screen and (min-aspect-ratio: 1/1) {
		.content {
			max-width: 60%;
		}
	}

	/*Delete la scroll bar et set la maxwidth*/
	body {
		max-width: 100%;
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
	::-webkit-scrollbar {
		display: none;
	}
</style>
