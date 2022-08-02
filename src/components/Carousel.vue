<script>
	export default {
		name : "Carousel",
		props: {
			items : {
				type : Array,
				required: true
			}
		},
		data() {
			return ({
				current: 1,
				showText: false
			})
		},
		computed : {
		},
		methods: {
			incrementSlider(){
				this.current++;
				if (this.current > this.items.length){
					this.current = 1;
				}
			},
			decrementSlider(){
				this.current--;
				if (this.current === 0)
					this.current = this.items.length;
			},
			toggleSlide(){
				this.showText = !this.showText;
			}
		}
	}
</script>

<template>
	<div id="Carousel">
		<div v-for="item in items">
			<div v-if="item.num === current" class="slide">
				<transition name="textAnim">
					<div v-if="showText" id="text-panel">
						<p>{{item.text}}</p>
						<div id="bottomSB">
							<router-link to="/Contact">Demander un devis</router-link>
							<img @click="toggleSlide" src="/chevron-right.svg" id="down-button"/>
						</div>
					</div>
				</transition>
				<transition name="bgAnim">
					<div v-if="!showText" id="slide-content">
						<img @click="decrementSlider" src="/chevron-right.svg" id="left-slide-button" class="slide-buttons"/>
						<div @click="toggleSlide" id="slide-text">
							<h2>{{item.heading}}</h2>
						</div>
						<img @click="incrementSlider" src="/chevron-right.svg" id="right-slide-button" class="slide-buttons"/>
					</div>
				</transition>
				<img id="offre-img" :src="item.image.path" :alt="item.image.alt"/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.slide {
		margin: 0% 10%;
		position: relative;
	}
	/*texte et flèches de la slide*/
	#text-panel {
		background-color: white;
		position: absolute;
		z-index: 1;
		text-align: justify;
		width: 100%;
		height: 100%;
		color: black;

		box-sizing: border-box;
		padding: 10%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}#text-panel a, a:visited, a:active{
		margin: auto 0 auto auto;
		width: 30%;
		padding: 2% 0%;
		text-align: center;
		background-color: #F4B907;
		color: #000E14;
		text-decoration: none;
	}#text-panel a:hover {
		background-color: #d29f04;
		color: #000;
	}
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
	/*image de la slide*/
	#offre-img {
		box-shadow: 0px 0px 1vw rgba(0, 0, 0, 0.20);
		object-fit: cover;
		object-position: center;
		width: 100%;
		height: 100%;
	}
	/*Flèches + Nom image*/
	#slide-content {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/*Texte image hover*/
	#slide-text {
		color: #fff;
		width: 60%;
		height: 80%;
		display: flex;
		justify-content: center;
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
		height: 100%;
		filter: invert(76%) sepia(54%) saturate(1240%) hue-rotate(353deg) brightness(96%) contrast(100%) opacity(20%);
		transition: filter 0.25s linear 0s;
	}
	.slide-buttons:hover {
		filter: invert(76%) sepia(54%) saturate(1240%) hue-rotate(353deg) brightness(96%) contrast(100%) opacity(100%);
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