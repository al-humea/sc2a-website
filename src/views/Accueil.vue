<script>
	import FooterBar from '@/components/FooterBar.vue';
    import LocomotiveScroll from 'locomotive-scroll';
	export default {
        name: "HomeView",
        components: { FooterBar},
        data(){
            return {
                selected:null,
                scroll:null,
                sections:null
            }
        },
        mounted(){
            this.selected = document.querySelector("#offres");
            this.scroll = new LocomotiveScroll();
            this.sections = document.querySelectorAll("page");
        },
        methods:{
            offres(){
                this.scroll.scrollTo(this.selected);
            }
        }
    }

</script>

<template>
<div>
    <div class="content">
        <section class="slide lineUp">
            <h1 id="heading" ><u><strong>SC2A</strong></u>, votre partenaire de confiance en assurance</h1>
            <p>SC2A est votre courtier d'assurance en ligne, créée en 1999, notre société a pour objectif de vous offrir les meilleures offres d'assurance en fonction de vos besoins et de votre budget.</p>
            <p>Nous proposons des solutions d'assurance pour les particuliers, les professionnels et les entreprises.</p>
            <button id="nos_offres" @click="offres()">Nos offres</button>
        </section>
        <section class="slide" id="offres">
            <img src="../../public/stc.svg" alt="" srcset="">
            <img src="../../public/stc.svg" alt="" srcset="">
            <menu>
                <li class="card">Particulier</li>
                <li class="card">Professionnel</li>
                <li class="card">Entreprise</li>
            </menu>
        </section>
        <section class="slide">
            <h2>Une équipe de professionnels à votre écoute</h2>
            <p>Notre équipe de professionnels est à votre disposition pour vous conseiller et vous aider à trouver la meilleure assurance pour vous. Nous mettons tout en œuvre pour répondre à vos besoins et vous proposer des solutions adaptées à votre situation.</p>
        </section>
        <section class="slide">
            <div>
                <h2>Des garanties sur mesure</h2>
                <p>
                    Nous avons 30 ans d'expérience dans le domaine de l'assurance, et nous mettons cette expérience à votre disposition pour vous proposer des garanties sur mesure. Nous vous accompagnons tout au long de votre contrat d'assurance, depuis la souscription jusqu'à la gestion des sinistres.
                </p>
            </div>
        </section>
        <section class="slide">
            <div>
                <h2>Des tarifs compétitifs</h2>
                <p>En tant que courtier d'assurance indépendant, nous avons accès à un large panel d'offres d'assurance. Nous négocions pour vous les meilleurs tarifs pour assurer vous, votre famille, vos biens et vos outils de travail.</p>
            </div>
        </section>
    </div>
    <FooterBar/>
</div>
</template>

<style scoped>
	.content {
        /* ECRAN */
        width: 100vw;
        /* POLICE */
        font-size:xx-large;
        color : #273188;
        /* ARRANGEMENT */
        display: flex;
		flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .slide {
        min-height : 40vh;
        width : 70vw;
        /* arrangement */
        display : flex;
        flex-direction : column;
        align-items: center;
        padding-top:max(5vh, 20px);
    }
    h1{text-align: center;}
    #heading{margin-bottom: 20px;}
    #nos_offres{align-self: right;}
    button {
        font-family: "Blaimim";
        font-size:x-large;
        color:#fff;
        padding:10px;
        background-color: #f5ba08;
        border:solid 2px #f3ca4f;
        border-radius: 10px;
        margin-top: 20px;
        width:fit-content;
    }
    #offres{
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: "corner corner"
                                "offres";
        width:100%;
    }
    #offres img{
        height:max(10vh,200px);
    }
    #offres img:nth-child(1){
        grid-column:1;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    #offres img:nth-child(2){
        grid-column: 2;
    }
    menu{
        background-color: #f5ba08;
        width:100vw;
        height:max-content;
        grid-row:2;
        grid-column: 1/3;
    }
    @media screen and (max-width: 1024px){
        .slide{
            width:98vw;
        }
        .content{

        }
    }
    .lineUp {
        animation: 2s anim-lineUp ease-out forwards;
    }
    @keyframes anim-lineUp {
        0% {
            opacity: 0;
            transform: translateY(80%);
        }
        20% {
            opacity: 0;
        }
        50% {
            opacity: 1;
            transform: translateY(0%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }
</style>