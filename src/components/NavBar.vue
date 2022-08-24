<template>
	<header>
		<Burger/>
		<div id="sc2amenu" alt="sc2amenu">
			<Banner/>
			<nav id="pc-nav">
				<NavLink text="Accueil" path="/Accueil" :slideNum=1 />
				<NavLink text="Particulier" path="/Particulier" :slideNum=2 />
				<NavLink text="Professionnel" path="/Professionnel" :slideNum=3 />
				<NavLink text="Contact" path="/Contact" :slideNum=4 />
			</nav>
		</div>
	</header>
</template>

<script>
	import Burger from './Burger.vue';
	import Banner from './subcomponent/Banner.vue'
	import NavLink from './subcomponent/NavLink.vue';
	export default{
		name: "NavBar",
		components: { Burger, NavLink, Banner}
	}
</script>

<style scoped>
	#sc2amenu {
		width: 100vw;
		position: relative;
		display: grid;
	}

	#pc-nav {
		font-size: larger;
		z-index: 4;
		position: absolute;
		margin: 15vh auto 0 auto;
		width: 50vw;
		left:25%;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media screen and (max-width: 1400px){
		#pc-nav {
			width: 70vw;
			left:15%;
		}
	}
	@media screen and (max-width : 1024px){
		#pc-nav {
			display: none;
		}
	}
	@media screen and (max-width : 720px){
	}
	@media screen and (max-width : 360px){
	}
</style>