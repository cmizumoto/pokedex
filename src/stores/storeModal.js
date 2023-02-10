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
  },
});
