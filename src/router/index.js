import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/aboutView.vue";
import SkillsView from "../views/skillsView.vue";
import ServicesView from "../views/services.vue";
import portoFllio from "../views/mywork.vue";
import ContactView from "../views/contact.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/portfollio",
    name: "portfollio",
    component: portoFllio,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
