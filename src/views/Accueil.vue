<template>
	<div class="content">
		<div class="paragraph">
			<p>Après plus de 10 années d'expérience dans l'assurance, Christophe L'HUMEAU crée en 1999 la société SC2A qui a pour objectif de rechercher auprès de ses 
				différents partenaires les offres correspondant le mieux à vos attentes en termes de prix, bien sur, mais également en termes de garanties.
				(produits financiers ou assurances de dommages).</p>
			<p>Proximité et écoute étant nos maîtres mots, nos collaborateurs SC2A chercherons la solution mieux adaptée à vos besoins.
				Nous mettrons tout en œuvre afin de réaliser vos projets.</p>
		</div>
		<div id="imgtext">
			<div class="paragraph">
				<p>Chez SC2A, nous avons le soucis du client. Fiers de nos années d'expériences et de nos compétences nous vous assurerons des 
					solutions individuelles adaptées, des conseils tant à la soucription des contrats qu'à la gestion des sinistres pour que l'on puisse avoir un 
					partenariat durable.</p>
				<p>En tant que courtier d'assurances indépendant et avec plus de 30 années d'expérience, SC2A sera à vos côtés qu'il s'agisse de vous assurer 
					personnellement, d'assurer votre famille, d'assurer vos biens, ou vos outils de travail.</p>
			</div>
			<img id="sc2aface" src="../assets/imgs/sc2a_face.jpg" alt="image des bureaux de l'agence SC2A"/>
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
		height: 60vh;
	}
	.content {
		display: grid;
		align-items: center;
		gap: 1vh;
	}
	.paragraph{
		text-align: justify;
	}
	#imgtext {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		background-color: red;
	}
	#sc2aface {
		object-fit: cover;
		object-position: top center;
		width: 100%;
		height: 60vh;
	}
</style>