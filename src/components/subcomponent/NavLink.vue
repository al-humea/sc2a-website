<script>
	export default {
		name: "NavLink",
		props:{
			text: String,
			path: String
		}
	}
</script>

<template>
	<router-link class="navLink" :to="path">{{text}}</router-link>
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
		height: 6px;
		transition: width 0.3s ease, left 0.3s ease;
	}
	.navLink:hover::after{
		width: 100%;
		left: 0%;
	}
</style>