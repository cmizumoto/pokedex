<template>
  <section class="search">
    <div class="search__container">
      <div class="search__form">
        <input type="text" class="search__input" id="search-poke" placeholder="Search a pokemon" />
        <label class="search__label" for="search-poke">Search a pokemon</label>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/sass/variables";
@import "@/assets/sass/utilities";

.search {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__container {
    width: 50%;
    padding: 1rem;
  }

  &__input {
    width: 80%;
    height: 3rem;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    color: $color-black;
    background-color: $color-primary;
    border: none;
    border-radius: 2px;
    border-bottom: 3px solid transparent;
    display: block;
    transition: all 0.3s;

    &::-webkit-input-placeholder {
      color: $color-black;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0.6rem 1rem rgba($color-black, 0.1);
      border-bottom: 3px solid $color-secondary;
    }
  }

  &__label {
    color: rgba($color-black, 0.9);
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 1.1rem;
    margin-top: 0.4rem;
    display: block;
    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem);
    z-index: -1;
  }
}
</style>
