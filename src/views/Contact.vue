<script>
export default {
	name : "Contact",
	data (){
		return ({
			captcha : true
		})
	},
	computed : {
		objet : {
			get(){return this.$store.state.obj;},
			set(value){this.$store.commit("UPD_OBJ", value);}
		},
		statut : {
			get(){return this.$store.state.pro},
			set(value){this.$store.commit("UPD_STATUS", value);}
		},
		soc : {
			get(){return this.$store.state.soc},
			set(value){this.$store.commit("UPD_SOC", value);}
		},
		nom : {
			get(){return this.$store.state.nom},
			set(value){this.$store.commit("UPD_NOM", value);}
		},
		pren : {
			get(){return this.$store.state.pren},
			set(value){this.$store.commit("UPD_PRE", value);}
		},
		tel : {
			get(){return this.$store.state.tel},
			set(value){this.$store.commit("UPD_TEL", value);}
		},
		email : {
			get(){return this.$store.state.email},
			set(value){this.$store.commit("UPD_EMAIL", value);}
		},
		content : {
			get(){return this.$store.state.content},
			set(value){this.$store.commit("UPD_CONT", value);}
		}
	}
}
</script>

<template>
	<form v-if="captcha" id="contact" class="content padded">
		<label for="dropdown">Vous êtes un
			<select name="Statut" id="dropdown" class="field" v-model="statut">
				<option value="Particulier">Particulier</option>
				<option value="Professionnel">Professionnel</option>
			</select>
		</label>

		<label v-show='statut=="Professionnel"' for="societe">Société
			<input type="text" name="Societe" id="societe" class="field" v-model="soc">
		</label>

		<label for="nom" id="nom">Nom
			<input type="text" name="Nom" class="field ppl_id" v-model="nom">
		</label>

		<label for="prenom" id="prenom">Prénom
			<input type="text" name="Prenom" class="field ppl_id" v-model="pren">
		</label>

		<label for="tel" id="tel">Téléphone
			<input type="tel" name="Tel" class="field" placeholder="01 23 45 67 89" v-model="tel">
		</label>

		<label for="email" id="email">Email
			<input type="email" name="Email" class="field" placeholder="email@exemple.com" v-model="email">
		</label>

		<label for="objet" id="objet">Objet
			<input type="text" name="Objet" class="field" placeholder="[Type de contrat] Détail de la demande" v-model="objet">
		</label>

		<textarea name="Contenu" id="contenu" v-model="content"/>

		<input type="submit" id="submit" value="Envoi" class="field">
	</form>
</template>

<style scoped>
	label {display:flex; flex-direction: column;}
	.field {
		height: 100%;
		border: 0.1vw black solid;
		border-radius: 0.2vw;
		text-indent: 0.5vw;
	}
	#contenu {
		padding: 1vw;
		resize: none;
		box-sizing: border-box;
	}
	input[type="submit"]:hover {
		background-color: rgb(203, 203, 203);
	}

	@media screen and (min-width: 1000px){
		#contact {
			width: 50%;
			height: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(7, 1fr);
			gap: 1vw;
		}
		#objet {grid-column: 1/3;}
		#contenu {grid-column: 1/3;grid-row: 5/7;}
		#submit {grid-column: 2; grid-row: 7;}
		#nom, #prenom{grid-row: 2;}
		#tel, #email{grid-row: 3;}
	}
</style>