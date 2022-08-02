<script>
	export default{
		name: "FooterBar"
	}
</script>

<template>
	<footer>
		<router-link to="/Accueil">@SC2A</router-link>
		<router-link to="/MentionsLegales">MENTIONS LÉGALES</router-link>
		<router-link to="/Accueil">
			Nos agences
		</router-link>
	</footer>
</template>

<style scoped>
	a, a:visited, a:hover, a:link {
		color: #FFF;
		text-decoration: none;
		height: auto;
	}
	footer {
		min-height: 6vh;
		width:100%;
		background-color: #273188;
		
		display: flex;
		justify-content: space-around;
		align-content: center;
		align-items: center;

		color: #FFFF;
	}
</style>