<template>
	<div>
		<div class="content">
			<div class="page" id="first">
                <div>
                    <h2>SC2A, votre partenaire de confiance en assurance</h2>
                    <p>SC2A est votre courtier d'assurance en ligne, créée en 1999, notre société a pour objectif de vous offrir les meilleures offres d'assurance en fonction de vos besoins et de votre budget.
                    <br/>Nous proposons des solutions d'assurance pour les particuliers, les professionnels et les entreprises.</p>
                </div>
			</div>
            <div class="page" id="panel">
                <ul id="offres">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
			<div class="page" id="second">
				<div>
                   <h2>Une équipe de professionnels à votre écoute</h2>
			    	<p>Notre équipe de professionnels est à votre disposition pour vous conseiller et vous aider à trouver la meilleure assurance pour vous. Nous mettons tout en œuvre pour répondre à vos besoins et vous proposer des solutions adaptées à votre situation.</p>
                </div>
            </div>
			<div class="page" id="third">
                <div>
                    <h2>Des garanties sur mesure</h2>
                    <p>
                        Nous avons 30 ans d'expérience dans le domaine de l'assurance, et nous mettons cette expérience à votre disposition pour vous proposer des garanties sur mesure. Nous vous accompagnons tout au long de votre contrat d'assurance, depuis la souscription jusqu'à la gestion des sinistres.
                    </p>
                </div>
			</div>
			<div class="page" id="last">
                <div>
				    <h2>Des tarifs compétitifs</h2>
				    <p>En tant que courtier d'assurance indépendant, nous avons accès à un large panel d'offres d'assurance. Nous négocions pour vous les meilleurs tarifs pour assurer vous, votre famille, vos biens et vos outils de travail.</p>
                </div>
            </div>
		</div>
		<FooterBar/>
	</div>
</template>

<script>
	import FooterBar from '@/components/FooterBar.vue';
    import Card from '@/components/subcomponent/Card.vue';
	export default {
    name: "HomeView",
    components: { FooterBar, Card},
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
		display: flex;
		flex-direction: column;
        align-items: center;
        height:100%;
        width:100vw;
	}
	.page {
        width:100%;
        min-height:63.5vh;
		display: flex;
		flex-direction: column;
        align-items: center;
        justify-content: center;
		text-align: left;
		color: #273188;
	}
    .page > div{
        height:100%;
        width:70vw;
    }
    #panel, #third{
        color : #fff;
        border: 1.3vh #F8CF6F;
        border-style: solid none solid none;
        background-color: #F4B907;
    }
    #offres {
        width:70vw;
        height:100%;
        list-style: none;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
    }
    ul {
        height:100%;
    }
    li{
        display: block;
        width:30%;
    }
	h2 {
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
    @media screen and (max-width: 1024px){
        .page > div{
            width:80vw;
        }
	}

</style>