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
				Nos agences
			</router-link>
		</nav>
	</footer>
</template>

<style scoped>
	nav a,nav a:visited,nav a:link{
		color: #fff;
		text-decoration: none;
	}
	nav {
		grid-row: 1;
		grid-column: 2;
		display:flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	footer {
		min-height: 6vh;
		width: 100vw;
		background-color: #273188;
		
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		justify-items: center;
		color: #FFFF;
	}
</style>