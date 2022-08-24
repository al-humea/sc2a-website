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
		<Transition :name="this.$store.state.transition" mode="out-in">
			<component :is="content.Component"></component>
		</Transition>
	</router-view>
	<FooterBar/>
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
	nav , footer , h2{
		font-family: "Blaimim";
	}

	#app {
		position: relative;
		min-height: 100vh;
		width: 100vw;

		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		font-family: Montserrat, Arial, sans-serif;
		font-size: large;
	}

	.content {
		width: 60%;
		margin: 5vh 0%;
	}
	@media screen and (max-width: 1024px){
		.content {
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