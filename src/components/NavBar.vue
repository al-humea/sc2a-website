<template>
	<header>
		<Burger/>
		<img id="sc2abanner" alt="sc2a-banner"/>
		<nav id="pc-nav">
				<router-link to="/Accueil">Accueil</router-link>
				<router-link to="/Particulier">Particulier</router-link>
				<router-link to="/Professionnel">Professionnel</router-link>
				<router-link to="/Contact">Contact</router-link>
		</nav>
	</header>
</template>

<script>
import Burger from './Burger.vue';
	export default{
    name: "NavBar",
    components: { Burger }
}
</script>

<style scoped>

</style>