<template>
	<div class="content">
		<p>
			Créée en 1999 la société de courtage en assurance SC2A a pour objectif de rechercher auprès de ses
			différents partenaires les offres d'assurance correspondant le mieux à vos attentes, en termes de prix bien sûr,
			mais également en termes de garanties. (produits financiers ou assurances de dommages).
		</p>

		<h3>Proximité et écoute sont nos maîtres mots.</h3>
		<p>Nos collaborateurs chercheront la solution la mieux adaptée à vos besoins.
			Nous mettrons tout en œuvre afin de réaliser vos projets.</p>

		<h3>Chez SC2A, nous avons le soucis du client.</h3>
		<p>
			Fiers de nos années d'expériences et de nos compétences nous vous assurerons des 
			solutions individuelles adaptées, des conseils tant à la soucription des contrats qu'à la gestion des sinistres pour que l'on puisse avoir un 
			partenariat durable.
		</p>
		<p>En tant que courtier d'assurances indépendant et avec plus de 30 années d'expérience, SC2A sera à vos côtés qu'il s'agisse de vous assurer 
			personnellement, d'assurer votre famille, d'assurer vos biens, ou vos outils de travail.</p>
	</div>
</template>

<script>
	export default {
		name: 'HomeView'
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