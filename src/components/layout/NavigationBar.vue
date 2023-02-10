<template>
  <nav class="navigation u-margin-bottom-big">
    <div class="navigation__container">
      <router-link to="/">
        <img
          src="../../assets/magnifying-glass-website-svgrepo-com.svg"
          alt=""
          class="navigation__logo"
      /></router-link>
      <ul class="navigation__list">
        <li class="navigation__list-item">
          <router-link class="navigation__list-item--link" to="/pokemons">Pokemons</router-link>
        </li>
        <li class="navigation__list-item">
          <router-link class="navigation__list-item--link" to="/resources">Resources</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/sass/utilities";
@import "@/assets/sass/variables";

.navigation {
  height: 4rem;
  width: 100%;
  background-color: $color-black;
  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: $container-width-desktop;
  }

  &__logo {
    height: 3rem;
    padding-top: 0.5rem;
    filter: invert(99%) sepia(94%) saturate(166%) hue-rotate(183deg) brightness(115%) contrast(87%);
  }

  &__list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  &__list-item--link {
    transition: all 0.2s ease;
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      padding: 1rem;
      color: $color-primary;
    }

    &:hover {
      color: $color-secondary;
      transform: translateY(-2px);
    }

    &:active {
      color: $color-tertiary;
      transform: translateY(0);
    }
  }
}
</style>
