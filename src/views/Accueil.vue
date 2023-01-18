<template>
	<div>
		<div class="content">
			<div class="page" id="first">
				<h2>SC2A, votre courtier d'assurance</h2>
				<p>
					SC2A est votre courtier d'assurance en ligne, créée en 1999, notre société a pour objectif de vous offrir les meilleures offres d'assurance en fonction de vos besoins et de votre budget. Nous proposons des solutions d'assurance pour les particuliers, les professionnels et les entreprises.
				</p>
			</div>
			<div class="page" id="second">
				<h3>Une équipe de professionnels à votre écoute</h3>
				<p>Notre équipe de professionnels est à votre disposition pour vous conseiller et vous aider à trouver la meilleure assurance pour vous. Nous mettons tout en œuvre pour répondre à vos besoins et vous proposer des solutions adaptées à votre situation.</p>
			</div>
			<div class="page" id="third">
				<h3>Des garanties sur mesure</h3>
				<p>
					Nous avons 30 ans d'expérience dans le domaine de l'assurance, et nous mettons cette expérience à votre disposition pour vous proposer des garanties sur mesure. Nous vous accompagnons tout au long de votre contrat d'assurance, depuis la souscription jusqu'à la gestion des sinistres.
				</p>
			</div>
			<div class="page" id="last">
				<h3>Des tarifs compétitifs</h3>
				<p>En tant que courtier d'assurance indépendant, nous avons accès à un large panel d'offres d'assurance. Nous négocions pour vous les meilleurs tarifs pour assurer vous, votre famille, vos biens et vos outils de travail.</p>
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
		margin:auto;
		display: flex;
		flex-direction: column;
		gap: 10vh;
	}
	.page {
		width: 100%;
		height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #273188;
	}
	
	#first {
		background-color: #F5BA0C;
	}
	#second, #third, #last {
		background-color: #273188;
		color: white;
	}
	h2, h3 {
		margin: 0;
		padding: 0;
		text-transform: uppercase;
		font-weight: bold;
	}
	p {
		font-size: 1.2em;
		line-height: 1.5em;
		margin: 1em 0;
	}

</style>