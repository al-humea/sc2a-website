<script>
import FooterBar from '@/components/FooterBar.vue';
export default {
    name: "Contact",
    components: { FooterBar },
    data() {
        return ({
            captcha: true
        });
    },
    computed: {
        objet: {
            get() { return this.$store.state.obj; },
            set(value) { this.$store.commit("UPD_OBJ", value); }
        },
        statut: {
            get() { return this.$store.state.pro; },
            set(value) { this.$store.commit("UPD_STATUS", value); }
        },
        soc: {
            get() { return this.$store.state.soc; },
            set(value) { this.$store.commit("UPD_SOC", value); }
        },
        nom: {
            get() { return this.$store.state.nom; },
            set(value) { this.$store.commit("UPD_NOM", value); }
        },
        pren: {
            get() { return this.$store.state.pren; },
            set(value) { this.$store.commit("UPD_PRE", value); }
        },
        tel: {
            get() { return this.$store.state.tel; },
            set(value) { this.$store.commit("UPD_TEL", value); }
        },
        email: {
            get() { return this.$store.state.email; },
            set(value) { this.$store.commit("UPD_EMAIL", value); }
        },
        content: {
            get() { return this.$store.state.content; },
            set(value) { this.$store.commit("UPD_CONT", value); }
        }
    }
}
</script>

<template>
	<div>
		<form v-if="captcha" id="contact" class="content">
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

			<textarea name="Contenu" id="contenu" class="field" v-model="content"/>

			<input type="submit" id="submit" value="Envoi" class="field">
		</form>
		<FooterBar/>
	</div>
</template>

<style scoped>
	.content {
		min-height: 62vh;
	}
	#contact {
		background: rgba(255, 255, 255, 0.20);
		gap: 2vh;
		margin: 2vh auto;
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(9px);
		-webkit-backdrop-filter: blur(9px);
		border: 1px solid rgba(255, 255, 255, 1);

		padding: 2vh;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(7, 1fr);
		align-items: space-between;
	}
	#dropdown{grid-row: 1;}
	#nom, #prenom{grid-row: 2;}
	#tel, #email{grid-row: 3;}
	#objet {grid-column: 1/3;}
	#contenu {grid-column: 1/3;grid-row: 5/8; height: auto;}
	#submit {grid-column: 2; grid-row: 8;width: 100%}

	@media screen and (max-width: 1024px){
		#contact {
			display: flex;
			flex-direction: column;
		}
		#contenu {
			padding: 1vw;
			box-sizing: border-box;
			height: 30vh;
		}
		#submit {width: 50%;}
	}

	#contenu {
		resize: none;
	}
	label {display:flex; flex-direction: column;}
	input[type="submit"] {
		background-color: #fff;
		align-self: end;
		height: 5vh;
		width: 5vw;
		transform-origin: 0 0;
		transition: transform 0.5s ease, box-shadow 0.5s ease;
	}
	input[type="submit"]:hover {
		transform : translateY(-0.5rem);
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.375);
	}
	.field {
		height: 100%;
		border: 1px solid rgba(128, 128, 128, 0.5);
		border-radius: 0.2vw;
		text-indent: 0.5vw;
	}
	.field:focus{
		border: 1px solid rgb(128, 128, 128);
		outline: none;
	}
</style>