<script>
import Carousel from "../components/Carousel.vue"
import offres from "../store/particulier.json"
import FooterBar from "@/components/FooterBar.vue";

export default {
	name : "Particulier",
	components : {
    Carousel,
    FooterBar
},
	data () {
		return {
			offres : offres
		}
	}
}
</script>

<template>
	<div>
		<Carousel statut="Particulier" :items="offres"/>
		<FooterBar/>
	</div>
</template>