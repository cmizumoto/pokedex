import { createRouter, createWebHashHistory } from "vue-router";

import ViewPokemon from "@/views/ViewPokemon.vue";
import ViewResources from "@/views/ViewResources.vue";

const routes = [
  {
    path: "/",
    name: "pokemons",
    component: ViewPokemon,
    alias: "/pokemons",
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
