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
		background-color: #273188;
		width: 100vw;
		height: 50px;
	}

	nav {
		display: flex;
		width: 50%;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		height: 100%;
	}

	a {
		color : white;
		width: fit-content;
		position: relative;
		text-decoration: none;
	}
	a:visited, a:active {
		color : white;
	}
	a + a {
		margin-left: 35px;
	}
</style>