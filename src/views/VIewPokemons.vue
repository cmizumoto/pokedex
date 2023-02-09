<template>
  <div class="pokemon__container">
    <SearchBox />
    <div class="pagination">
      <PokemonCard />
    </div>
  </div>
</template>

<script setup>
import SearchBox from "@/components/layout/SearchBox.vue";
import PokemonCard from "@/components/layout/PokemonCard.vue";
</script>
