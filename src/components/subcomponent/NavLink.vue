<script>
	export default {
		name: "NavLink",
		props:{
			text: String,
			path: String,
			slideNum: Number
		},
		methods:{
			updateTransition(){
				if (this.slideNum < this.$store.state.curPageNum)
					this.$store.commit("UPD_TRAN", "slideLeft");
				if (this.slideNum > this.$store.state.curPageNum)
					this.$store.commit("UPD_TRAN", "slideRight");
				this.$store.commit("UPD_CURPAGE", this.slideNum);
			}
		}
	}
</script>

<template>
	<router-link @click="updateTransition()" class="navLink" :to="path">{{text}}</router-link>
</template>

<style scoped>
	.navLink{
		color : white;
		width: fit-content;
		position: relative;
		text-decoration: none;
	}
	.navLink:visited{
		color : white;
	}
	.navLink:active, .navLink.current{
		color : #F4B907;
	}
	.navLink::after {
		position: absolute;
		top: 100%;
		left: 50%;
		content:"";
		background-color: #F4B907;
		border-radius: 3px;
		width: 0%;
		height: 4px;
		min-height: 0.5vh;
		transition: width 0.3s ease, left 0.3s ease;
	}
	.navLink:hover::after{
		width: 100%;
		left: 0%;
	}
</style>