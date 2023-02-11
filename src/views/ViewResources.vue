<template>
  <div class="resources__container">
    <h2 class="resources__title u-margin-bottom-big">Resources</h2>
    <ul class="resources__list">
      <li class="resources__item">
        <a class="resources__link" href="https://pokeapi.co/" target="_blank">PokéAPI</a>
      </li>
      <li class="resources__item">
        <a class="resources__link" href="https://pinia.vuejs.org/introduction.html" target="_blank"
          >Pinia</a
        >
      </li>
      <li class="resources__item">
        <a class="resources__link" href="https://vitejs.dev/" target="_blank">Vite</a>
      </li>
      <li class="resources__item">
        <a class="resources__link" href="https://vueuse.org/" target="_blank">VueUse</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/utilities";
@import "@/assets/sass/variables";

.resources {
  &__list {
    list-style-type: none;
  }

  &__item {
    margin: 1rem 0;
  }

  &__link {
    padding: 1rem 0;

    &:link,
    &:visited {
      color: $color-black;
      text-transform: uppercase;
      text-decoration: none;
    }

    &:hover {
      color: $color-tertiary;
    }
  }
}
</style>
