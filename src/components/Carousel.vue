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
				current: 0,
				showText: false
			})
		},
		methods: {
			toSlide(num){
				this.current = num - 1;
			},
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
			contacter(name){
				this.$store.commit("UPD_TRAN", "slideRight");
				this.$store.commit("UPD_CURPAGE", 4);
				this.$store.dispatch("updateRequest",{
					obj:"[" + name +"] Détail de la demande",
					status: this.statut
				});
			}
		}
	}
</script>

<template>
	<div id="Carousel" :style="{ backgroundImage: 'url(' + items[current].image.path + ')' }">
		<div id="menu">
			<div v-for="item in items" :class='{menuButton : true, glass : !(item.num - 1 == this.current)}' @click="toSlide(item.num)">
				{{item.heading}}
			</div>
		</div>

		<img @click="decrementSlider" src="/chevron-right.svg" id="left-slide-button" class="slide-buttons"/>

		<div id="slideContent">
			<h2>{{items[current].heading}}</h2>
			<p id="slideText">{{items[current].text}}</p>
			<div id="contacter">
				<router-link @click="contacter(items[current].heading)" to="/Contact">Demander un devis</router-link>
			</div>
		</div>
		
		<img @click="incrementSlider" src="/chevron-right.svg" id="right-slide-button" class="slide-buttons"/>
	</div>
</template>

<style scoped>
	#Carousel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 80vh;

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		color: white;
	}
	/*navigation slide*/
	#menu {
		position: absolute;
		top: 4vh;
		display: flex;
		justify-content: space-between;
		gap: 1vw;
	}
	.menuButton {
		cursor: pointer;
		padding: 15px;
		background-color: #f5ba08;
		box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		border-radius: 25px;
		height: 20px;
		max-width: 7vw;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		transition: max-width 0.5s ease;
	}
	.menuButton:hover{
		max-width: 20vw;
	}
	.glass {
		background-color: #a0a0a02e;
	}

	/* CONTENU SLIDE*/
	#slideContent{/* Texte slide*/
		height: 60%;
		width: 90%;
		border-radius: 25px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
		font-size: x-large;
	}
	#slideText{
		backdrop-filter: blur(3px);
	}
	a:visited, a:focus, a:target, a{
		color: #000;
		text-decoration: none;
	}
	#contacter {	/* Bouton slide*/
		align-self: flex-end;
		background-color: #f5ba08;
		box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
		border:rgba(0, 0, 0, 0.13) 0.1rem solid;
		border-radius: 15px;
		width: fit-content;
		padding: 15px;
		font-size: x-large;
	}
	h2 { /**/
		font-size:54px;
	}
	/*Fleches style*/
	#left-slide-button {transform: scaleX(-1);}
	.slide-buttons {
		cursor:pointer;
		object-fit: contain;
		padding-right: 2%;
		width: 10%;
		height: 10vh;
		filter: invert(76%) sepia(54%) saturate(1240%) hue-rotate(353deg) brightness(96%) contrast(100%) opacity(20%);
		transition: filter 0.25s linear 0s;
	}
	.slide-buttons:hover {
		filter: invert(76%) sepia(54%) saturate(1240%) hue-rotate(353deg) brightness(96%) contrast(100%) opacity(100%);
	}
	@media screen and (max-width: 1024px) {
		.slide-buttons {
			display: none;
		}
	}
</style>