import { createRouter, createWebHashHistory } from "vue-router";

import ViewPokemons from "@/views/ViewPokemons.vue";
import ViewFavorites from "@/views/ViewFavorites.vue";
import ViewResources from "@/views/ViewResources.vue";

const routes = [
  {
    path: "/",
    name: "pokemons",
    component: ViewPokemons,
    alias: "/pokemons",
  },
  {
    path: "/favorites",
    name: "favorites",
    component: ViewFavorites,
  },
  {
    path: "/resources",
    name: "resources",
    component: ViewResources,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
