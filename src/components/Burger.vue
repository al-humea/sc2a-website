<script>
import BurgerButton from "./subcomponent/BurgerButton.vue";

export default{
	name: "Burger",
	data() {
		return ({
			active: false
		});
	},
	methods: {
		switchStatus(){
			this.active = !this.active;
			this.$store.commit("UPD_TRAN", "fade");
		}
	},
	components: { BurgerButton }
}
</script>

<template>
	<div id="burger">
		<BurgerButton @toggle="switchStatus" :status="active"/>
		<Transition name="bgAct" id="active">
			<nav v-if="active">
				<router-link to="/Accueil" @click="switchStatus()">Accueil</router-link>
				<router-link to="/Particulier" @click="switchStatus()">Particulier</router-link>
				<router-link to="/Professionnel" @click="switchStatus()">Professionnel</router-link>
				<router-link to="/Contact" @click="switchStatus()">Contact</router-link>
				<a href="https://www.google.fr/maps/dir/?api=1&destination=63+Av.+Jean+Lolive%20+93500+Pantin" target="_blank">Localisation</a>
				<router-link to="/MentionsLegales" @click="switchStatus()">MENTIONS LÉGALES</router-link>
			</nav>
		</Transition>
	</div>
</template>

<style scoped>
	#burger {
		display: none;
		
	}
	@media screen and (max-width: 1024px){
		#burgerButton {
			position: absolute;
			z-index: 5;
		}
		#burger {
			position: fixed;
			z-index: 4;
			top:0;
			left:0;
			display: block;
		}

		#active {
			background-color: #F4B907;
			z-index: 3;
			position: relative;
			width: 100vw;
			height: 100vh;
		}
		nav {
			height : 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: column;
		}
		a, a:visited, a:active{
			color: white;
			font: larger "Blaimim",sans-serif;
			text-decoration: none;
		}
		.bgAct-enter-active,
		.bgAct-leave-active{
			transition: opacity 0.5s ease;
		}
		.bgAct-enter-from,
		.bgAct-leave-to{
			opacity: 0;
		}
	}
</style>