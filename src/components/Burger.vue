<script>
import BurgerButton from "./subcomponent/BurgerButton.vue";

export default{
	name: "Burger",
	data() {
		return ({
			active: true
		});
	},
	components: { BurgerButton }
}
</script>

<template>
	<div id="burger">
		<BurgerButton/>
		<div id="active" v-if="active">
			<nav>
				<router-link to="/Accueil">Accueil</router-link>
				<router-link to="/Particulier">Particulier</router-link>
				<router-link to="/Professionnel">Professionnel</router-link>
				<router-link to="/Contact">Contact</router-link>
			</nav>
		</div>
	</div>
</template>

<style scoped>
#active {
	z-index: 3;
	position: absolute;
	top:0;
	left:0;
	width: 100vw;
	height: 100vh;
	background-color: yellow;
}
nav {
	height : 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-items: center;
}
</style>