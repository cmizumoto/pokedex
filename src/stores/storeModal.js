import { defineStore } from "pinia";

export const useStoreModal = defineStore("storeModal", {
  state: () => {
    return {
      isModalOpen: false,
      pokemons: [],
      evolutions: [],
    };
  },
  actions: {
    // Since we only get this information when we check for more details, makes more sense to fetch this information in the modal store
    async getEvolutions() {
      const responsePokInfo = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${this.pokemons.id}/`
      );
      const responseDataPokInfo = await responsePokInfo.json();
      const evolutionChainEnd = responseDataPokInfo.evolution_chain.url;

      const response = await fetch(evolutionChainEnd);
      const responseData = await response.json();

      /* 
        Since we have deeply nested objects in this evolution chain endpoint
        I'm gonna use a function with recursive call
        I could go for loops in a loops, but I don't know too much pokemon to understand if there is more or less than 3 evolutions per pokeman
      */
      const isObject = (val) => {
        if (val === null) {
          return false;
        }
        return typeof val === "object";
      };
      const pokemonEvolution = [];
      const pokemonProps = (obj) => {
        for (let value in obj) {
          if (isObject(obj[value])) {
            pokemonProps(obj[value]);
          } else {
            if (
              value === "name" &&
              obj[value] !== "level-up" &&
              obj[value] !== "use-item" &&
              obj[value] !== "trade"
            ) {
              pokemonEvolution.push(obj[value]);
            }
          }
        }
      };

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to get evolution chain");
        throw error;
      }
      pokemonProps(responseData.chain);
      this.evolutions = pokemonEvolution;
    },

    // Don't use toggle, because we have multiple ways to open and close this modal
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    saveCurrentPokemon(info) {
      this.pokemons = info;
    },
  },
  getters: {
    modalStatus(state) {
      return state.isModalOpen;
    },
    pokemonInfo(state) {
      return state.pokemons;
    },
    pokemonsEvolutions(state) {
      return state.evolutions;
    },
  },
});
