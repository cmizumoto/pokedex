<template>
  <div class="pokemon">
    <SearchBox />
    <div class="pokemon__container">
      <PokemonCard
        v-for="pokemon in pokemonsList"
        :key="pokemon.id"
        :id="pokemon.id"
        :name="pokemon.name"
        :types="pokemon.types"
        :ability="pokemon.abilities"
        :image="pokemon.image"
        :weight="pokemon.weight"
        :height="pokemon.height"
        :stats="pokemon.stats"
        @click="openModal"
      />
    </div>
    <div>
      <h3 v-if="pokemonsList.length <= 1">{{ error }}</h3>
    </div>
    <PokemonModal v-if="isModalOpen" @closeAction="handleClose" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import SearchBox from "@/components/layout/SearchBox.vue";
import PokemonCard from "@/components/pokemons/PokemonCard.vue";
import PokemonModal from "@/components/pokemons/PokemonModal.vue";
import { useStorePokemons } from "@/stores/storePokemons";
import { useStoreModal } from "@/stores/storeModal";

const storePokemons = useStorePokemons();
const storeModal = useStoreModal();
const error = ref(null);

/* 
  Modal handler
*/

const isModalOpen = computed(() => {
  const status = storeModal.modalStatus;
  return status;
});

const openModal = () => {
  storeModal.openModal();
};

const handleClose = () => {
  storeModal.closeModal();
};

/* 
  Pokemon loading
*/
const pokemonsList = computed(() => {
  const list = storePokemons.pokemonsList;
  return list;
});

const loadPokemons = async () => {
  try {
    await storePokemons.getPokemons();
  } catch (err) {
    console.log("this error is in views pokeons");
  }
};
loadPokemons();
</script>

<style lang="scss">
@import "@/assets/sass/variables";

.pokemon {
  max-width: $container-width-desktop;
  display: block;
  margin: 0 auto;

  &__container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
  }
}
</style>
