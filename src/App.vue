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
	<router-view v-slot="content">
		<Transition :name="this.$store.state.transition">
			<component :is="content.Component"></component>
		</Transition>
	</router-view>
</template>

<style>
	@import "./assets/transitions.css";

	*{margin: 0; padding: 0;}
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
	@font-face {
		font-family: "LuMarcLL";
		src: local("LumarcLL"),
			url("./assets/fonts/LuMarcLL-Normal.ttf") format("truetype");
	}
	nav , footer , h2{
		font-family: "Blaimim";
	}

	#app {
		position: relative;
		min-height: 100vh;
		width: 100vw;

		font-family: Montserrat, Arial, sans-serif;
		font-size: large;
	}

	.content {
		margin: 7.5vh 20vw;
		width: 60vw;
		min-height: 60vh;
	}
	@media screen and (max-width: 1024px){
		.content {
			margin: 5vh auto 7vh auto;
			width: 80%;
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



FICHIER CSS AVEC LES TRANSITIONS