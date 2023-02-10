import { defineStore } from "pinia";

export const useStorePokemons = defineStore("storePokemons", {
  state: () => {
    return {
      pokemons: [],
      lastFetch: null,
      error: false,
    };
  },
  actions: {
    async getPokemons() {
      if (!this.shouldUpdate) {
        return;
      }
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=48");
      const responseData = await response.json();

      if (!response.ok) {
        // error
      }

      const pokemons = [];
      const responsedata = responseData.results;
      // Creating another array and objects with a better format for our component
      for (const key in responsedata) {
        const pokemon = {
          id: +key + 1,
          name: responsedata[key].name,
          url: responsedata[key].url,
        };
        pokemons.push(pokemon);
      }
      this.pokemons = pokemons;
      this.lastFetch = new Date().getTime();
    },
  },
  getters: {
    pokemonsList(state) {
      return state.pokemons;
    },
    hasPokemonsList(state) {
      return state.pokemons && state.pokemons.length > 0;
    },
    /* 
      Handle last fetch
    */
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      // set a 5 min timer to be able to fetch again
      const currentTime = new Date().getTime();
      return (currentTime - lastFetch) / 5000 > 60;
    },
  },
});
