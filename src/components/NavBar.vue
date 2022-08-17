<template>
	<header>
		<Burger/>
		<div id="sc2amenu" alt="sc2amenu">
			<Banner/>
			<nav id="pc-nav">
				<NavLink text="Accueil" path="/Accueil"/>
				<NavLink text="Particulier" path="/Particulier"/>
				<NavLink text="Professionnel" path="/Professionnel"/>
				<NavLink text="Contact" path="/Contact"/>
			</nav>
		</div>
	</header>
</template>

<script>
	import Burger from './Burger.vue';
	import NavLink from './subcomponent/NavLink.vue';
	export default{
		name: "NavBar",
		components: { Burger, NavLink}
	}
</script>

<style scoped>
	#sc2amenu {
		width: 100vw;
		position: relative;
		z-index: 3;
	}

	#pc-nav {
		font-size: larger;

		position: absolute;
		top : 20%;
		left: 25%;

		max-width: 50vw;
		width: 100%;
		background-color: red;
		display: flex;
		justify-content: space-between;
		
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