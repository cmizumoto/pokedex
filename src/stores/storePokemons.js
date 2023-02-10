import { defineStore } from "pinia";

export const useStorePokemons = defineStore("storePokemons", {
  state: () => {
    return {
      searchQuery: "",
      pokemons: [],
      lastFetch: null,
      error: false,
      limit: 12,
    };
  },
  actions: {
    // Fetch multiple pokemons, limit is regulated in the state do not put high values to not overload the API
    async getPokemons() {
      this.pokemons = [];
      for (let i = 1; i <= this.limit; i++) {
        await this.fetchPokemon(i);
      }
    },
    // This fetch we specify by name or pokemon number
    async getPokemon(query) {
      this.pokemons = [];
      await this.fetchPokemon(query);
    },

    // Main fetch method, fetch, create an object and save to the state
    async fetchPokemon(pokemonSearch) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`);
      const pokemonData = await response.json();
      // Creating another array and objects with a better format for our component
      const pokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
        abilities: pokemonData.abilities,
        types: pokemonData.types,
        image: pokemonData.sprites.other["official-artwork"].front_default,
      };

      if (!response.ok) {
        console.log(error);
      }

      this.pokemons.push(pokemon);
    },

    updateSearch(query) {
      this.searchQuery = query;
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
      Handle last fetch, don't know if i'm gonna use it
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
