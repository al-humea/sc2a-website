import { createRouter, createWebHistory } from 'vue-router'
import Accueil from "../views/Accueil.vue"
import MentionsLegales from "../views/MentionsLegales.vue"
import Particulier from "../views/Particulier.vue"
import Professionnel from "../views/Professionnel.vue"
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
	path: "/MentionsLegales",
	name: "MentionsLegales",
	component: MentionsLegales
  },
  {
	path: "/",
	redirect: "/Accueil"
  },
  {
	path: "/Particulier",
	name: "Particulier",
	component: Particulier
  },
  {
	path: "/Professionnel",
	name: "Professionnel",
	component: Professionnel
  },
  {
	path: "/Contact",
	name: "Contact",
	component: Contact
  }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
