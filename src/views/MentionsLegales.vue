<script>
import FooterBar from '@/components/FooterBar.vue';
	export default {
    name: "MentionsLegales",
    components: { FooterBar },
	mounted (){
		this.$store.commit("UPD_CURPAGE", 0);
	}
}
</script>


<template>
	<div>
		<div class="content" id="Mentionslegales">
			<div id="Mentions">
				<h2>Mentions légales</h2>
				<p>Société de courtage 2 associés (SC2A) est une société de courtage d’assurances régie par le Code des Assurances inscrite sous le code APE 66.22Z (activités des agents et courtiers d’assurances)</p>
				<table>
					<tr>
						<td>Siège social</td>
						<td>63 AV JEAN LOLIVE 93500 PANTIN</td>
					</tr>
					<tr>
						<td>Forme juridique</td>
						<td>Société à responsabilité limitée (SARL)</td>
					</tr>
					<tr>
						<td>Capital social</td>
						<td>10 000,00€</td>
					</tr>
					<tr>
						<td>Numéro RCS</td>
						<td>423 978 600 R.C.S. Bobigny</td>
					</tr>
					<tr>
						<td>ORIAS</td>
						<td>10053235</td>
					</tr>
					<tr>
						<td>Numéro TVA</td>
						<td>FR32423978600</td>
					</tr>
				</table>
			</div>
			<div id="Contact">
				<h2>Nous contacter</h2>
				<ul>
					<li>
						Par téléphone 01 48 10 14 64
					</li>
					<li>
						Par mail <router-link to="/Contact" id="me-router-link">agence@sc2aassurances.com</router-link>
					</li>
				</ul>
				<p>SC2A dispose d’une garantie financière et d’une assurance de Responsabilité Civile conforme aux articles L.512-6 e L.512-7 du Code des Assurances et son activité est soumise au contrôle de l’ACPR – 4 place de Budapest CS 92459 – 75436 Paris Cedex 09</p>
			</div>
			<div id="Editeur">
				<h2>Editeur</h2>
				<table>
					<tr><td colspan="2" style="text-decoration:underline">SARL SC2A, 63 AV JEAN LOLIVE 93500 PANTIN</td></tr>
					<tr>
						<td>Directeur de la publication :</td>
						<td>Christophe L’HUMEAU / Guillaume L’HUMEAU</td>
					</tr>
					<tr>
						<td>Graphisme, développement et réalisation :</td>
						<td>Alexandre L’HUMEAU</td>
					</tr>
				</table>
			</div>
			<div id="Hebergeur">
				<h2>Hebergeur (Mettre à jour)</h2>
				<table>
					<tr><td colspan="2">ORANGE<br>Société anonyme au capital de 10 640 226 396 euros, RCS Nanterre 380 129 866</td></tr>
					<tr>
						<td>Siège social</td>
						<td>
							<ul>
								<li>111, quai du Président Roosevelt, 92130 ISSY-LES-MOULINEAUX</li>
								<li>et domiciliée pour les besoins des présentes,1 avenue Nelson Mandela</li>
								<li>, 94745 ARCUEIL</li>
							</ul>
						</td>
					</tr>
				</table>
			</div>
			<div id="Conditions">
				<h2>Conditions Générales</h2>
				<p>
					L’objet des présentes Conditions Générales est de définir les conditions d’accès et d’utilisation du site internet de la société SC2A,
					accessible aux adresses suivantes : <b>ADRESSE DU SITE</b>, ci-après également dénommé le « Site Internet ».L’accès et l’utilisation du Site
					Internet impliquent que l’internaute, également appelé « l’Utilisateur », accepte tacitement, complètement, et sans réserve les présentes Conditions 
					Générales dans leur dernière version mise en ligne.
				</p>
			</div>
			<div id="Objectif">
				<h2>Objectifs, nature de l’information et responsabilité</h2>
				<p>
					Le Site Internet a pour objectif de procurer une information aux Utilisateurs sur la nature de l’activité et 
					des services proposés par la société SC2A.La société SC2A s’efforce de mettre à la disposition des internautes 
					un Site Internet exempt de dysfonctionnements et comprenant une information actualisée et de qualité.
					Pour autant, les informations publiées sur le Site Internet n’ont pas un caractère pré-contractuel, et la société 
					SC2A ne fournit aucune garantie relative à la continuité de la mise en ligne du Site Internet ou à son bon fonctionnement, 
					à l’exactitude et à l’exhaustivité de l’information diffusée, et à ce titre, décline toute responsabilité pour tous les 
					dommages subis par les Utilisateurs ou les tiers, directs ou indirects, matériels ou immatériels, consécutifs ou en lien 
					avec les informations publiées sur le Site Internet ou avec la navigation sur le Site Internet.
				</p>
			</div>
			<div id="Recla">
				<h2>Réclamation</h2>
				
				<p>Vos demandes sont à adresser à :</p>
				<ul>
					<li>SC2A,</li>
					<li>63 AV JEAN LOLIVE</li>
					<li>93500 PANTIN</li>
				</ul>
				<p>
					Si la réponse fournie ne vous satisfait pas, vous pouvez faire appel au service réclamation de l'assureur
					dont les coordonnées figurent dans les dispositions générales
				</p>
			</div>
		</div>
		<FooterBar/>
	</div>
</template>

<style scoped>
	.content {
		margin: 8vh auto;
		color: #555;
		font-size: 1.2em;
		line-height: 1.6em;
	}
	div + div{
		margin-top: 2vh;
	}
	#Mentions ~ * h2{
		margin: 1% 0% 0% 0%;
	}
	ul { list-style: none; }
	table { width: 70%;}
	a:link, a:visited, a{
		color: black;
		font-family: Helvetica, Arial, sans-serif;
	}
	td, th {
		padding: .5em;
		border: 1px solid #ddd;
	}	
	/*
	** N'OUBLIE SURTOUT PAS
	** LE LIEN DU SITE EN ROUGE
	*/
	b {color:red}
</style>


<style scoped>
/*.content {

    width: 80%;


}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 2em 0;
}

td, th {
    padding: .5em;
    border: 1px solid #ddd;
}

h2 {
    margin-top: 2em;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.6em;
    letter-spacing: 2px;
}

#Contact {
    text-align: center;
}

#Contact ul {
    list-style: none;
    padding: 0;
    margin: 2em 0;
}

#Contact li {
    padding: .5em 0;
}

#me-router-link {
    color: #273188;
    text-decoration: none;
}
*/
</style>