<template>
  <SearchBox />
  <div class="pokemon__container">
    <PokemonCard
      v-for="pokemon in pokemonsList"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import SearchBox from "@/components/layout/SearchBox.vue";
import PokemonCard from "@/components/pokemons/PokemonCard.vue";
import { useStorePokemons } from "../stores/storePokemons";

const storePokemons = useStorePokemons();

const pokemonsList = computed(() => {
  const list = storePokemons.pokemonsList;
  return list;
});

const loadPokemons = async () => {
  try {
    await storePokemons.getPokemons();
  } catch (err) {
    console.log(err);
  }
};
loadPokemons();
</script>

<style lang="scss">
@import "@/assets/sass/variables";

.pokemon {
  &__container {
    max-width: $container-width-desktop;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
  }
}
</style>
