<template>
	<header>
		<img id="sc2abanner" alt="sc2a-banner"/>
		<nav>
				<router-link to="/Accueil">Accueil</router-link>
				<router-link to="/Particulier">Particulier</router-link>
				<router-link to="/Professionnel">Professionnel</router-link>
				<router-link to="/Contact">Contact</router-link>
		</nav>
	</header>
</template>

<script>
	export default{
		name: "NavBar"
	}
</script>

<style scoped>
	header {
		z-index: 2;
		width: 100vw;
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-rows: 1fr;
		align-items: end;
		justify-items: center;
	}

	#sc2abanner {
		grid-row: 1;
		grid-column: 1/4;
		width: 100%;
		object-fit: cover;
		content: url("../assets/banner/B_SC2A_9_16.jpg");
	}

	nav a,nav a:visited,nav a:link{
		color: #fff;
		text-decoration: none;
	}
	nav a:hover{
		color : yellow;
	}
	nav {
		grid-row: 1;
		grid-column: 2;
		display:flex;
		justify-content: space-between;
		width: 70%;
		height: 15%;
		padding: 0% 10vw;
	}

	@media screen and (min-aspect-ratio: 1/1) {
		#sc2abanner {
			content: url("../assets/banner/B_SC2A_1_1.jpg");
		}
	}
	@media screen and (min-aspect-ratio: 4/3) {
		#sc2abanner {
			content: url("../assets/banner/B_SC2A_4_3.jpg");
		}
	}
	@media screen and (min-aspect-ratio: 16/9) {
		#sc2abanner {
			content: url("../assets/banner/B_SC2A_16_9.jpg");
		}
	}
</style>