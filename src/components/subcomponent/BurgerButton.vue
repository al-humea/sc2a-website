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
	<div @click="toggle" id="burgerButton" >
		<div id="line1" :class="{straightUp:!status, downward:status }"></div>
		<Transition name="middlebar">
			<div id="line2" v-if="!status"></div>
		</Transition>
		<div id="line3" :class="{straightBot:!status, upward:status }"></div>
	</div>
</template>

<style scoped>

#burgerButton {
	margin: 5vh 0vw 0vh 5vw;
	grid-column: 1;
	grid-row: 1;
	height: 5vh;
	min-height: 50px;
	width: 5vh;
	min-width: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
#burgerButton > div{
	min-width: 50px;
	width: 5vh;
	min-height: 10px;
	height: 1vh;
	background-color: #fff;
	border-radius: 5px;
}

#burgerButton:hover {
	cursor: pointer;
}

.downward {
	animation : rotateDown 1s ease-in-out forwards;
}

@keyframes rotateDown {
	from {transform : rotate(0deg) translateY(0%);}
	to {transform: translateY(200%) rotate(45deg);}
}

.upward {
	animation : rotateUp 1s ease-in-out forwards;
}

@keyframes rotateUp {
	from {transform : rotate(0deg), translateY(0%);}
	to {transform: translateY(-200%) rotate(-45deg);}
}

.straightBot {
	animation : straightenBot 1s ease-in-out forwards;
}

@keyframes straightenBot {
	from {transform : translateY(-200%) rotate(-45deg);}
	to {transform: translateY(0%) rotate(0deg);}
}

.straightUp {
	animation : straightenUp 1s ease-in-out forwards;
}

@keyframes straightenUp {
	from {transform : translateY(200%) rotate(45deg);}
	to {transform: rotate(0deg) translateY(0%);}
}


.middlebar-enter-active,
.middlebar-leave-active {
	transition: opacity 0.5s ease-in, transform;
}

.middlebar-enter-from,
.middlebar-leave-to {
	opacity: 0;
}
</style>