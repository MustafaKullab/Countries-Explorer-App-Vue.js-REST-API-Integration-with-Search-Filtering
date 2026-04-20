import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/country/:name",
      name: "countryDetails",
      component: () => import("@/views/CountryDetails.vue"),
    },
  ],
});

export default router;
