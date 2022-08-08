<script>
import Carousel from "../components/Carousel.vue"
import offres from "../store/professionnel.json"

export default {
	name : "Particulier",
	components : {
		Carousel
	},
	data () {
		return {
			offres : offres
		}
	}
}
</script>

<template>
	<div class="content">
		<Carousel statut="Professionnel" :items="offres"/>
	</div>
</template>

<style>
</style>