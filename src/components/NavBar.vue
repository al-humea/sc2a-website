<template>
	<header>
		<Burger/>
		<div id="sc2amenu" alt="sc2amenu">
			<img id="sc2abanner" alt="sc2a banner"/>
			<nav id="pc-nav">
					<router-link to="/Accueil">Accueil</router-link>
					<router-link to="/Particulier">Particulier</router-link>
					<router-link to="/Professionnel">Professionnel</router-link>
					<router-link to="/Contact">Contact</router-link>
			</nav>
		</div>
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
	#sc2abanner {
		max-width: 100%;
		width: 100vw;
		content: url("../assets/banner/B_SC2A_16_9.jpg");
		object-fit: cover;
	}
	#pc-nav {
		position: relative;
		z-index: 3;
		top: -5vh;
		margin: 0 auto;
		width: fit-content;
	}
	.router-link-active {
		margin-left: 10px;
	}

	@media screen and (max-width : 1024px){
		#pc-nav {
			display: none;
		}
		#sc2abanner{
			content: url("../assets/banner/B_SC2A_4_3.jpg");
		}
	}
	@media screen and (max-width : 720px){
		#sc2abanner{
			content: url("../assets/banner/B_SC2A_1_1.jpg");
		}
	}
	@media screen and (max-width : 360px){
		#sc2abanner{
			content: url("../assets/banner/B_SC2A_9_16.jpg");
		}
	}
</style>