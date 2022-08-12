<script>
	export default {
		name:"BurgerButton",
		props: {
			status:Boolean
		},
		methods : {
			toggle(){
				this.$emit("toggle");
			}
		}
	}
</script>

<template>
	<Transition>
		<div @click="toggle" id="burgerButton" v-if="!status">
			<div id="line1"></div>
			<div id="line2"></div>
			<div id="line3"></div>
		</div>
		<div @click="toggle" id="burgerButton" v-else-if="status">
			<div id="line1"></div>
			<div id="line3"></div>
		</div>
	</Transition>
</template>

<style scoped>
#burgerButton {
	z-index: 3;
	height: 5vh;
	min-height: 50px;
	width: 5vh;
	min-width: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
#burgerButton > div{
	z-index: 3;
	min-width: 50px;
	width: 5vh;
	min-height: 10px;
	height: 1vh;
	background-color: red;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>