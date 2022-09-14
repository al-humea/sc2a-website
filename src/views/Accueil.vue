<template>
	<div>
	<div class="content">
		<div class="page" id="first">
			<h3>SC2A</h3>
			<p>
				Créée en 1999 la société de courtage en assurance SC2A a pour objectif de rechercher auprès de ses
				différents partenaires les offres d'assurance correspondant le mieux à vos attentes, en termes de prix bien sûr,
				mais également en termes de garanties. (produits financiers ou assurances de dommages).
			</p>
		</div>
		<div class="page" id="second">
			<h3>Proximité et écoute sont nos maîtres mots.</h3>
			<p>Nos collaborateurs chercheront la solution la mieux adaptée à vos besoins.
				Nous mettrons tout en œuvre afin de réaliser vos projets.</p>
		</div>
		<div class="page" id="third">
			<h3>Chez SC2A, nous avons le soucis du client.</h3>
			<p>
				Fiers de nos années d'expériences et de nos compétences nous vous assurerons des 
				solutions individuelles adaptées, des conseils tant à la soucription des contrats qu'à la gestion des sinistres pour que l'on puisse avoir un 
				partenariat durable.
			</p>
		</div>
		<div class="page" id="last">
			<p>En tant que courtier d'assurances indépendant et avec plus de 30 années d'expérience, SC2A sera à vos côtés qu'il s'agisse de vous assurer 
				personnellement, d'assurer votre famille, d'assurer vos biens, ou vos outils de travail.</p>
		</div>
	</div>
	<FooterBar/>
	</div>
</template>

<script>
	import FooterBar from '@/components/FooterBar.vue';
	export default {
    name: "HomeView",
    components: { FooterBar },
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll (event) {
			
		}
	}
}
</script>

<style scoped>
	.content {
		margin: 10vh auto;
		display: flex;
		flex-direction: column;
		gap: 10vh;
	}
	.page {
		width: 100%;
		height: 80vh;
		display: flex;
		flex-direction: column;
	}

	.page:nth-child(even){
		background-color: lightyellow;
	}
	.page:nth-child(odd){
		background-color: lightgreen;
	}
</style>