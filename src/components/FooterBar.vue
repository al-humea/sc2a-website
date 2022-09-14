<script>
	export default{
		name: "FooterBar",
		methods: {
			updateTransition(){
				this.$store.commit("UPD_TRAN", "fade");
			}
		}
	}
</script>

<template>
	<footer>
		<nav>
			<router-link @click="updateTransition()" to="/Accueil">©SC2A</router-link>
			<router-link @click="updateTransition()" to="/MentionsLegales">MENTIONS LÉGALES</router-link>
			<a href="https://www.google.fr/maps/dir/?api=1&destination=63+Av.+Jean+Lolive%20+93500+Pantin" target="_blank" rel="noopener noreferrer">
				NOTRE AGENCE
			</a>
		</nav>
	</footer>
</template>

<style scoped>
	footer {
		background-color: #273188;
		width: 100vw;
		min-height: 50px;
		height: 5vh;
	}

	nav {
		height: 100%;
		width: 50%;
		margin: auto;

		display: flex;
		justify-content: space-between;	
		align-items: center;
	}

	a {
		color : white;
		text-align: center;
		text-decoration: none;
	}
	a:visited, a:active {
		color : white;
	}

	@media screen and (max-width: 1400px){
		nav {
			width: 70%;
		}
	}
	@media screen and (max-width: 1024px){
		nav {
			width: 90%;
		}
		footer {
			position: sticky;
			bottom: 0;
		}
		a {
			width: min-content;
		}
	}
</style>