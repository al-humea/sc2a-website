<script>
	export default {
		name : "Carousel",
		props: {
			statut: {
				type: String,
				required: true
			},
			items : {
				type : Array,
				required: true
			}
		},
		data() {
			return ({
				current: 2,
				showText: false
			})
		},
		methods: {
			incrementSlider(){
				this.current++;
				if (this.current == this.items.length){
					this.current = 0;
				}
			},
			decrementSlider(){
				this.current--;
				if (this.current < 0)
					this.current = this.items.length - 1;
			},
			toggleSlide(){
				this.showText = !this.showText;
			},
			contacter(name){
				this.$store.dispatch("updateRequest",{
					obj:"[" + name +"] Détail de la demande",
					status: this.statut
				});
			}
		}
	}
</script>

<template>
	<div id="Carousel">
		<transition name="textAnim" id="text-panel">
			<div v-if="showText">
				<p>{{items[current].text}}</p>
				<div id="bottomSB">
					<router-link @click="contacter(items[current].heading)" to="/Contact">Demander un devis</router-link>
					<img @click="toggleSlide" src="/chevron-right.svg" id="down-button"/>
				</div>
			</div>
		</transition>
		<transition id="slide-content" name="bgAnim">
			<div v-show="!showText" >
				<img @click="decrementSlider" src="/chevron-right.svg" id="left-slide-button" class="slide-buttons"/>
				<div @click="toggleSlide" id="slide-text">
					<h2>{{items[current].heading}}</h2>
				</div>
				<img @click="incrementSlider" src="/chevron-right.svg" id="right-slide-button" class="slide-buttons"/>
			</div>
		</transition>
		<img id="offre-img" :src="items[current].image.path" :alt="items[current].image.alt"/>
	</div>
</template>

<style scoped>
	#Carousel {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 50vw;
		min-height: 500px;
		height: 60vh;
	}

	/*image de la slide*/
	#offre-img{
		grid-column: 1;
		grid-row: 1;
		z-index: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
		box-shadow: 0px 0px 0.5vw 0.01px black;
	}
	/*texte et flèches de la slide descendante*/
	#text-panel {
		grid-column: 1;
		grid-row: 1;
		z-index: 1;

		background-color: white;
		text-align: justify;
		width: 100%;
		height: 60vh;
		min-height: 500px;
		color: black;
		padding: 10%;
		box-sizing: border-box;
		text-shadow:0 0 1px transparent;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	/*Bouton slide descendant*/
	#text-panel a, a:visited, a:active{
		font-family: "Blaimim";
		font-size: medium;
		margin: auto 0 auto auto;
		width: fit-content;
		padding: 2%;
		text-align: center;
		background-color: #F4B907;
		color: #000E14;
		text-decoration: none;
	}#text-panel a:hover {
		background-color: #d29f04;
		color: #000;
	}
	/*Bouton descendre slide texte*/
	#down-button {
		transform: rotate(-90deg);
		cursor:pointer;
		object-fit: contain;
		width: 13%;
		filter: invert(76%) sepia(54%) saturate(1240%) hue-rotate(353deg) brightness(96%) contrast(100%) opacity(100%);
	}
	#bottomSB {
		height: 40%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	/*Flèches + Nom image sans descente*/
	#slide-content {
		grid-column: 1;
		grid-row: 1;
		z-index: 1;

		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/*Texte image hover*/
	#slide-text {
		color: #fff;
		font-size: x-large;
		text-align: center;
		width: fit-content;
		height: 80%;

		display: flex;
		justify-items: center;
		align-items: center;
		transition: transform 0.4s ease-in-out 0s;
		/*fix blur during text resizing*/
		backface-visibility: hidden;
		transform: translateZ(0);
		-webkit-font-smoothing: subpixel-antialiased;
	}
	#slide-text:hover {
		cursor:pointer;
		transform: scale(1.1) translateY(-10px);
	}



	/*Fleches style*/
	#left-slide-button {transform: scaleX(-1);}
	.slide-buttons {
		cursor:pointer;
		object-fit: contain;
		padding-right: 2%;
		width: 10%;
		height: 80%;
		filter: invert(76%) sepia(54%) saturate(1240%) hue-rotate(353deg) brightness(96%) contrast(100%) opacity(20%);
		transition: filter 0.25s linear 0s;
	}
	.slide-buttons:hover {
		filter: invert(76%) sepia(54%) saturate(1240%) hue-rotate(353deg) brightness(96%) contrast(100%) opacity(100%);
	}

	@media screen and (max-width: 1250px){
		#Carousel {
			width: 70vw;
		}
	 }
	 @media screen and (max-width: 1000px){
		#Carousel {
			width: 80vw;
		}
	 }
	 @media screen and (max-width: 750px){
		#Carousel {
			width: 100vw;
		}
	 }

	/*Animation TEXTE slider*/
	.textAnim-enter-from,
	.textAnim-leave-to{
		opacity: 0;
		transform: translateY(-100%);
	}
	.textAnim-enter-active,
	.textAnim-leave-active{
		transition: opacity 0.5s ease-in, transform 0.5s ease-out;
	}
	.bgAnim-enter-from,
	.bgAnim-leave-to{
		opacity: 0;
	}
	.bgAnim-enter-active,
	.bgAnim-leave-active{
		transition: opacity 0.5s ease-in, transform 0.5s ease-out;
	}
</style>