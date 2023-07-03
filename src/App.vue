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

	nav , footer , h2, h1{
		font-family: "Blaimim";
	}
	#app {
        padding:0;
        margin:0;
		position: relative;
		width: 100vw;
		max-width: 100%;
		font-family: Montserrat, Arial, sans-serif;
		font-size: large;
	}
	body {
        padding:0;
        margin:0;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
    }
	::-webkit-scrollbar {
		display: none;
	}
</style>