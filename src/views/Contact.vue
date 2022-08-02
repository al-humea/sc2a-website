<script>
export default {
	name : "Contact",
	data (){
		return ({
			captcha : True
		})
	}
}
</script>

<template>
	<div v-if="captcha">
	</div>
</template>

<style>
</style>