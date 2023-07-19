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
	<div id="Carousel" :style="{ backgroundImage: 'url()' }">
		<div id="menu">
			<div v-for="item in items" @click="toSlide(item.num)" :class='{menuButton : true, glass : !(item.num - 1 == this.current), current : (item.num - 1 == this.current)}'>
				<div id="header">{{item.heading}}</div>
				<img :src="item.icon" class="icon" />
			</div>
		</div>

		<img @click="decrementSlider" src="@/assets/carousel_icons/chevron-right.svg" id="left-slide-button" class="slide-buttons"/>

		<div id="slideContent">
			<h2>{{items[current].heading}}</h2>
			<p id="slideText">{{items[current].text}}</p>
			<div id="contacter">
				<router-link @click="contacter(items[current].heading)" to="/Contact">Demander un devis</router-link>
			</div>
		</div>

		<img @click="incrementSlider" src="@/assets/carousel_icons/chevron-right.svg" id="right-slide-button" class="slide-buttons"/>
	</div>
</template>

<style scoped>
	#Carousel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 80vh;

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		color: white;
	}
	.icon {display: none;}
	/*navigation slide*/
	#header{
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	#menu {
		position: absolute;
		top: 4vh;
		max-width: 100%;
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
		max-width: 5vw;
		min-width: 10px;
		transition: max-width 0.5s ease;
	}
	.menuButton:hover, .current{
		max-width: 20vw;
	}
	.glass {
		background-color: #a0a0a02e;
	}

	/* CONTENU SLIDE*/
	#slideContent{/* Texte slide*/
		margin: 100px 0 50px 0;
		height: 60%;
		max-width: 90%;
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
		color: #fff;
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
		font-size:xx-large;
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
		#header {display: none;}
		.icon {
			display: block;
			width: 20px;
			margin-left: 50%;
			transform: translateX(-50%);
			filter: brightness(0) saturate(100%) invert(100%) sepia(99%) saturate(2%) hue-rotate(21deg) brightness(106%) contrast(100%);
		}
		.slide-buttons {
			display: none;
		}
	}
</style>