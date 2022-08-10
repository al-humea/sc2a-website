<script>
	export default{
		name: "FooterBar"
	}
</script>

<template>
	<footer>
		<nav>
			<router-link to="/Accueil">@SC2A</router-link>
			<router-link to="/MentionsLegales">MENTIONS LÉGALES</router-link>
			<router-link to="/Accueil">
				NOTRE AGENCE
			</router-link>
		</nav>
	</footer>
</template>

<style scoped>
	footer {
		min-height: 6vh;
		width: 100vw;
		background-color: #273188;
	}
	nav a,nav a:visited,nav a:link{
			color: #fff;
			text-decoration: none;
	}
	@media screen and (min-aspect-ratio: 4/3) {
		nav {
			grid-row: 1;
			grid-column: 2;
			display:flex;
			justify-content: space-between;
			align-items: center;
			width: 90%;
		}
		footer {
			display: grid;
			grid-template-columns: 1fr 2fr 1fr;
			grid-template-rows: 1fr;
			align-items: center;
			justify-items: center;
			color: #FFFF;
		}
	}
	@media screen and (min-aspect-ratio: 16/9) {
		nav {
			grid-row: 1;
			grid-column: 2;
			display:flex;
			justify-content: space-between;
			align-items: center;
			width: 70%;
		}
		footer {
			display: grid;
			grid-template-columns: 1fr 2fr 1fr;
			grid-template-rows: 1fr;
			align-items: center;
			justify-items: center;
			color: #FFFF;
		}
	}
</style>