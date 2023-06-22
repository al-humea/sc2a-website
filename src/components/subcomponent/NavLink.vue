<script>
	export default {
		name: "NavLink",
		data (){
			return ({
				anim : true
			})
		},
		watch : {
			"$route.name" : {
				handler (){
					if (this.$route.name == this.text){
						this.anim= false;
						this.$store.commit("UPD_CURPAGE", this.slideNum);
					}
					else
						this.anim = true;
				},
				deep:true
			}
		},
		props:{
			text: String,
			path: String,
			slideNum: Number
		},
		methods:{
			updateTransition(){
				if (this.$store.state.curPageNum == 0)
					this.$store.commit("UPD_TRAN", "fade");
				else if (this.slideNum < this.$store.state.curPageNum)
					this.$store.commit("UPD_TRAN", "slideLeft");
				else if (this.slideNum > this.$store.state.curPageNum)
					this.$store.commit("UPD_TRAN", "slideRight");
			}
		}
	}
</script>

<template>
	<router-link @click="updateTransition()" :class="{navLink : true, anim : !anim}" :to="path">{{text}}</router-link>
</template>

<style scoped>

	.navLink{
		color : white;
		width: fit-content;
		position: relative;
		text-decoration: none;
	}
	.navLink:visited{
		color : white;
	}
	.navLink:active, .navLink.current{
		color : #F4B907;
	}
	.navLink::after {
		position: absolute;
		top: 100%;
		left: 50%;
		content:"";
		background-color: #F4B907;
		border-radius: 3px;
		width: 0%;
		height: 4px;
		min-height: 0.5vh;
		transition: width 0.3s ease, left 0.3s ease;
	}
	.navLink:hover::after{
		width: 100%;
		left: 0%;
	}
	.anim::after {
		position: absolute;
		top: 100%;
		left: 0%;
		content:"";
		background-color: #F4B907;
		border-radius: 3px;
		width: 100%;
		height: 4px;
		min-height: 0.5vh;
	}
</style>