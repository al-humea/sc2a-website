<script>
	import FooterBar from '@/components/FooterBar.vue';
	export default {
        name: "HomeView",
        components: { FooterBar},
        data(){
            return {
                selected:null,
                seeing:null,
                intRatio:0
            }
        },
        mounted(){
            this.$store.commit("UPD_TRAN", "fade");
            this.selected = document.querySelector("#offres");
            this.offres = ()=>{
                window.scrollTo({
                    top:this.selected.offsetTop,
                    behavior:"smooth"
                });
            };
            this.observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.intersectionRatio > this.intRatio){
                        entry.target.classList.remove("dynamic");
                        if(entry.target.id == "second")
                            Array.from(entry.target.children).forEach((x, i)=>{
                                setTimeout(()=>{
                                    x.classList.add("lineUp");
                                }, 250 * i);
                            });
                        else
                            entry.target.classList.add("lineUp");
                    }
                })},
                {
                    rootMargin:"0px 0px 0px 0px"
                }
            );
            if (window.innerWidth < 1024){
                document.querySelectorAll(".dynamic").forEach((x)=>
                x.classList.remove("dynamic"));
            }
            document.querySelectorAll(".dynamic").forEach((slide)=>{
                this.observer.observe(slide);
            });
        }
    }

</script>

<template>
<div>
    <div class="content">
        <section class="slide">
            <div class="slideText dynamic" id="first">
                <h1 id="heading" ><u><strong>SC2A</strong></u>, votre partenaire de confiance en assurance</h1>
                <p>SC2A est votre courtier d'assurance en ligne, créée en 1999, notre société a pour objectif de vous offrir les meilleures offres d'assurance en fonction de vos besoins et de votre budget.</p>
                <p>Nous proposons des solutions d'assurance pour les particuliers, les professionnels et les entreprises.</p>
                <button id="nos_offres" @click="offres()">Nos offres</button>
                <img src="@/assets/carousel_icons/chevron-right.svg" alt="arrow pointing towards bottom" id="arrow" @click="offres()">
            </div>
            <img style="left:0;-webkit-transform: scaleX(-1);transform: scaleX(-1);" src="@/assets/accueil/stc.svg" alt="bottom left corner of first panel" id="cornerL" class="corners">
            <img style="right:0;" src="@/assets/accueil/stc.svg" alt="bottom right corner of first panel" id="cornerR" class="corners">
        </section>
        <section class="slide" id="offres">
            <menu class="dynamic" id="second">
                <router-link to="/Particulier" class="card">
                    <img src="@/assets/accueil/Handshake_Isometric.svg" alt="Smiling vector image" class="illustration">
                    <p>Particulier</p>
                </router-link>
                <router-link to="/Professionnel" class="card">
                    <img src="@/assets/accueil/Business.svg" alt="Handshake vector image" class="illustration">
                    <p>Professionnel</p>
                </router-link>
                <router-link to="/Professionnel" class="card">
                    <img src="@/assets/accueil/Team.svg" alt="Building vector image" class="illustration">
                    <p>Entreprise</p>
                </router-link>
            </menu>
        </section>
        <section class="slide">
            <div class="slideText">
                <h2>Des tarifs <u>compétitifs</u></h2>
                <p>En tant que courtier d'assurance indépendant, nous avons accès à un large panel d'offres d'assurance. Nous négocions les meilleurs tarifs pour vous assurer, vous ainsi que votre famille, vos biens et vos outils de travail, en solicitant plusieurs de nos collaborateurs.</p>
                <menu id="collaborateurs" class="dynamic">
                    <a href="https://www.axa.fr" target="_blank">
                        <img src="@/assets/collaborateurs/axa.png" alt="Axa">
                    </a>
                    <a href="https://www.allianz.fr" target="_blank">
                        <img src="@/assets/collaborateurs/allianz.png" alt="Allianz">
                    </a>
                    <a href="https://www.generali.fr" target="_blank">
                        <img src="@/assets/collaborateurs/generali.png" alt="Generali">
                    </a>
                    <a href="https://www.swisslife.fr" target="_blank">
                        <img src="@/assets/collaborateurs/swisslife.png" alt="Swisslife">
                    </a>
                    <a href="https://www.april.fr" target="_blank">
                        <img src="@/assets/collaborateurs/april.png" alt="April">
                    </a>
                    <a href="https://www.sollyazar.com" target="_blank">
                        <img src="@/assets/collaborateurs/sollyazar.png" alt="solly azar">
                    </a>
                    <a href="https://www.maxance.com" target="_blank">
                        <img src="@/assets/collaborateurs/maxance.png" alt="Maxance">
                    </a>
                    <img src="@/assets/collaborateurs/dots.svg" alt="Et bien d'autres">
                </menu>
            </div>
        </section>
        <section class="slide" id="third">
            <div class="slideText">
                <h2>Des garanties sur mesure</h2>
                <p>
                    Nous avons 30 ans d'expérience dans le domaine de l'assurance, et nous mettons cette expérience à votre disposition pour vous proposer des garanties sur mesure. Nous vous accompagnons tout au long de votre contrat d'assurance, depuis la souscription jusqu'à la gestion des sinistres.
                </p>
            </div>
        </section>
        <section class="slide">
            <div class="slideText">
                <h2>Une équipe de professionnels à votre écoute</h2>
                <p>Notre équipe de professionnels est à votre disposition pour vous conseiller et vous aider à trouver la meilleure assurance pour vous. Nous mettons tout en œuvre pour répondre à vos besoins et vous proposer des solutions adaptées à votre situation.</p>
            </div>
        </section>
    </div>
    <FooterBar/>
</div>
</template>

<style scoped>
	.content {
        /* ECRAN */
        width: 100%;
        /* POLICE */
        font-size:x-large;
        color : #273188;
        /* ARRANGEMENT */
        display: flex;
		flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .slide {
        min-height : 70vh;
        width : 100%;
        /* arrangement */
        position:relative;
        display : flex;
        flex-direction : column;
        align-items: center;
        justify-content: center;
    }
    h1{text-align: center;}
    #heading{margin-bottom: 20px;}
    .slideText{
        width : 70%;
        display : flex;
        flex-direction : column;
        align-items: center;
        justify-content: center;
        padding-top:max(5vh, 20px);
    }
    button {
        z-index:1;
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
    #arrow{
        z-index:1;
        filter: invert(73%) sepia(69%) saturate(3996%) hue-rotate(11deg) brightness(118%) contrast(94%);
        height:max(5vh,100px);
        animation: 2s anim-upDown ease-in-out infinite;
    }
    .corners{
        height:max(10vh,200px);
        position:absolute;
        z-index:-1;
        bottom: 0;
    }
    #offres{
        background-color: #273188;
        min-height:100vh;
    }
    #second{
        /* style */
        background-color: #273188;
        width : 70%;
        list-style: none;
        /* arrangement */
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .illustration{
        height:75%;
    }
    .card{
        /* style */
        font-weight: bold;
        color:#fff;
        border:#fff solid 2px;
        border-radius: 10px;
        text-decoration: none;
        text-align: center;

        width:20vmax;
        height:20vmax;
        /* arrangement */
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition:scale 1s, box-shadow 1s;
    }
    .card:hover{
        scale:1.05;
        box-shadow: 0 0 5px #fff;
    }
    .dynamic{
        opacity:0;
        transform: translateY(80%);
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
        50%, 100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }
    @keyframes anim-upDown{
        0%, 100%{
            transform: rotate(90deg) translateX(0px);
            -webkit-transform: rotate(90deg) translateX(0px);
        }
        50% {
            transform: rotate(90deg) translateX(10px);
            -webkit-transform: rotate(90deg) translateX(10px);
        }
    }
    #collaborateurs{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap:1vmax;

        width: 100%;
        min-height: 8vmax;
        padding: 2vmax 0;
    }
    #collaborateurs img{
        width: 8vmax;
        max-height:100%;
    }
    #third {
        background: url("../assets/accueil/garanties2.jpg");
        background-position: center;
        background-size: cover;
    }
    #third > .slideText{
        height:max-content;
        color:#f5ba08;
        backdrop-filter: blur(3px);
    }
    .card {
        opacity:0;
    }
    @media screen and (max-width: 1024px) {
        .content {
            font-size:large;
        }
        #second{
            flex-direction: column;
            justify-content: space-around;
            padding-bottom:20vmax;
            height:130vmax;
        }
        #collaborateurs{
            justify-content: center;
            gap:3vmax;
        }
        #collaborateurs img{
            width: 15vmax;
            max-height:100%;
        }
        .card{
            width:40vmax;
            height:40vmax;
            opacity:1;
        }
    }
</style>