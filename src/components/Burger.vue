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
				<router-link to="/Accueil">Accueil</router-link>
				<router-link to="/Particulier">Particulier</router-link>
				<router-link to="/Professionnel">Professionnel</router-link>
				<router-link to="/Contact">Contact</router-link>
			</nav>
		</Transition>
	</div>
</template>

<style scoped>
#burger {
	position: fixed;
	top:0;
	left:0;
}

#active {
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
	justify-items: center;
}

.bgAct-enter-active,
.bgAct-leave-active{
	transition: opacity 0.5s ease;
}
.bgAct-enter-from,
.bgAct-leave-to{
	opacity: 0;
}
</style>