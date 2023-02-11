import { createRouter, createWebHashHistory } from "vue-router";

import ViewPokemons from "@/views/ViewPokemons.vue";
import ViewResources from "@/views/ViewResources.vue";

const routes = [
  {
    path: "/",
    name: "pokemons",
    component: ViewPokemons,
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
