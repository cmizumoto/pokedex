<template>
  <div class="card">
    <div class="card__container">
      <div class="card__img-container u-margin-bottom-small">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`"
          :alt="name"
          class="card__img"
        />
      </div>
      <div class="card__desc">
        <span class="card__number u-margin-bottom-small">#{{ id }}</span>
        <p>{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["id", "name"]);
</script>

<style lang="scss">
@import "@/assets/sass/variables";
.card {
  width: 10rem;
  height: 14rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 0.3rem 0.8rem rgba($color-black, 0.5);
  transition: all 0.1s;

  &__container {
    margin: 0.2rem;
    padding: 0.5rem;
    text-align: center;
  }

  &__img-container {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    background-color: rgba($color-primary, 0.5);
  }

  &__img {
    width: 6.5rem;
    height: 6.5rem;
  }

  &__desc {
    color: $color-black;
    font-size: 1.1rem;

    & p {
      text-transform: capitalize;
    }
  }

  &__number {
    display: flex;
    justify-content: space-around;
    padding: 0.2rem;
    border-radius: 5px;
    background-color: rgba($color-primary, 0.5);
  }

  &:hover {
    transform: scale(1.03);
  }
}
</style>
