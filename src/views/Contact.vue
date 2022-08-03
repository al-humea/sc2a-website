<script>
export default {
	name : "Contact",
	data (){
		return ({
			captcha : true
		})
	}
}
</script>

<template>
	<div v-if="captcha" id="contact">
	</div>
</template>

<style>
	#contact {
		
	}
</style>