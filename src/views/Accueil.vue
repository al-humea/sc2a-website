<template>
	<div class="content">
		<div class="text">
			<p>Depuis 1999 notre métier de courtier en assurance nous demande de rechercher, de comparer puis de sélectionner pour vous
			les offres les plus avantageuses (produits financiers ou assurances de dommages), parmi le catalogue d'offres de nos partenaires.</p>
			<p>Proximité et écoute étant nos maîtres mots, nos collaborateurs CL'CA/SC2A chercherons la solution adaptée à vos besoins,
			nous mettrons tout en œuvre afin de réaliser vos projets.</p>
		</div>
		<div class="textpic">
			<div class="text">
				<p>Chez CL'CA/SC2A, nous nous soucions réellement du client, fier de nos années d'expériences et de nos compétences nous vous assurerons des 
				solutions individuelles adaptées, de l'aide en cas d'accident et vous aurez l'assurance d'un partenariat durable et productif.</p>
				<p>En tant que courtier d'assurances indépendant, CL'CA/SC2A sera à vos côtés pour vous conseiller dans le choix d'une solution adaptée,
				qu'il s'agisse de vous assurer vous et votre famille, d'assurer l'un de vos biens, ou que vous souhaitiez souscrire une assurance
				pour votre outil de travail.</p>
			</div>
			<img id="sc2aface" class="imgs" alt="image des bureaux de l'agence SC2A"/>
		</div>
		<div class="text">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
			<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
		<MapView id="Map"/>
	</div>
</template>

<script>
import MapView from "../components/MapView.vue"

export default {
  name: 'HomeView',
  components :{
	MapView
  }
}
</script>

<style scoped>
	#Map {
		height: 40vh;
	}
	.textpic {
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow: hidden;
	}
	.text {
		text-align: justify;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 2vh;
	}
	.text p:first-child {
		padding-bottom: 1vh;
		text-indent: 2vw;
	}
	.imgs {
		min-width: 50%;
		height: 95%;
		object-fit: cover;
		object-position: top center;
	}
	#sc2alogo {
		content: url("../assets/imgs/sc2a_logo.png");
		margin-right: 5%;
	}
	#sc2aface {
		content: url("../assets/imgs/sc2a_face.jpg");
		margin-left: 5%;
	}
</style>