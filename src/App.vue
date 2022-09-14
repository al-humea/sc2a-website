<script>
import NavBar from "./components/NavBar.vue"

export default {
	name: "App",
	components: {
		NavBar
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
		width: 100vw;
		max-width: 100%;

		font-family: Montserrat, Arial, sans-serif;
		font-size: large;
	}
	body {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	::-webkit-scrollbar {
		display: none;
	}
	.content {
		margin: 0 auto;
		width: 60%;
	}
	@media screen and (max-width: 1024px){
		.content {
			width: 80%;
		}
	}
</style>



FICHIER CSS AVEC LES TRANSITIONS