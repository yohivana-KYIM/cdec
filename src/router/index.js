import { createRouter, createWebHistory } from "vue-router";

// Importation des composants
import Home from "../views/Home.vue";
import ContactUs from "../components/frontend/ContactUs/contact_us.vue";
import LacDec from "../components/frontend/LacDec/lacdec.vue";
import Missions from "../components/frontend/Missions/missions.vue";
import Gouvernance from "../components/frontend/Gouvernance/Gouvernance.vue";
import ConsAdmin from "../components/frontend/Serviceslist/cons_admin.vue";
import Organigramme from "../components/frontend/Organigramme/Organigramme.vue";
import TextesReglementaires from "../components/frontend/TextesReglementaires/TextesReglementaires.vue";
import ConsJudiciaire from "../components/frontend/Serviceslist/cons_judiciaire.vue";
import ConsConvention from "../components/frontend/Serviceslist/cons_convention.vue";
import Actualites from "../components/frontend/Publications/actualites.vue";
import Interviews from "../components/frontend/Publications/Interviews.vue";
import Publications from "../components/frontend/Publications/publications.vue";
import GuideUtilisateurs from "../components/frontend/Publications/guide_utilisateurs.vue";
import Communique from "../components/frontend/Publications/communique.vue";
import Partenaires from "../components/frontend/partenaires/partenaires.vue";
import Mediatheque from "../components/frontend/Publications/mediatheque.vue";
import { useAuthStore } from "../stores/auth";
import Admin from "../views/Admin/dashboard.vue";
import LoginAdmin from "../views/Admin/loginadmin.vue";
import payslist from "../views/Admin/pays/payslist.vue";
import blocslist from "../views/Admin/blocs/blocslist.vue";
import Usager from "../components/frontend/Inscription/Usager.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/contact_us", name: "contact_us", component: ContactUs },
  { path: "/lacdec", name: "lacdec", component: LacDec },
  { path: "/missions", name: "missions", component: Missions },
  { path: "/gouvernance", name: "gouvernance", component: Gouvernance }, // Correction de la casse
  { path: "/organigramme", name: "organigramme", component: Organigramme },
  {
    path: "/textes_reglementaires",
    name: "textes_reglementaires",
    component: TextesReglementaires,
  },
  { path: "/partenaires", name: "partenaires", component: Partenaires },
  { path: "/cons_admin", name: "cons_admin", component: ConsAdmin },
  {
    path: "/cons_judiciaire",
    name: "cons_judiciaire",
    component: ConsJudiciaire,
  },
  {
    path: "/guide_utilisateurs",
    name: "guide_utilisateurs",
    component: GuideUtilisateurs,
  },
  { path: "/publications", name: "publications", component: Publications },
  { path: "/interviews", name: "interviews", component: Interviews }, // Correction de la casse
  { path: "/mediatheque", name: "mediatheque", component: Mediatheque }, // Correction de la casse
  { path: "/actualites", name: "actualites", component: Actualites },
  {
    path: "/cons_convention",
    name: "cons_convention",
    component: ConsConvention,
  },
  {
    path: "/inscription/usager",
    name: "inscription_usager",
    component: Usager,
  },

  { path: "/communique", name: "communique", component: Communique },
  { path: "/loginadmin", name: "loginadmin", component: LoginAdmin },
  {
    path: "/admin",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Admin,
      },
      {
        path: "blocs",
        name: "blocslist",
        component: blocslist,
      },
      {
        path: "pays",
        name: "payslist",
        component: payslist,
        meta: { requiresAuth: true }, // Ajout de la protection ici
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware pour la protection des routes
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Vérifiez si la route nécessite une authentification
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "loginadmin" }); // Redirige vers la page de connexion
  } else {
    next(); // Autorise l'accès
  }
});

export default router;
