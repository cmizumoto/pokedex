<template>
  <div class="card" :class="types[0].type.name" @click="propsInfo">
    <div class="card__container">
      <div class="card__img-container u-margin-bottom-small">
        <img :src="image" :alt="name" class="card__img" />
      </div>
      <div class="card__desc">
        <span class="card__number u-margin-bottom-small">#{{ id }}</span>
        <p class="u-margin-bottom-small">{{ name }}</p>
        <p>{{ types[0].type.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreModal } from "@/stores/storeModal";

const storeModal = useStoreModal();
const props = defineProps(["id", "name", "types", "ability", "height", "weight", "stats", "image"]);

const propsInfo = () => {
  console.log(props);
  storeModal.saveCurrentPokemon(props);
};
</script>

<style lang="scss">
@import "@/assets/sass/variables";
@import "@/assets/sass/utilities";
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
  cursor: pointer;

  background-image: linear-gradient(145deg, transparent 0%, transparent 50%, rgba(white, 0.4) 50%);
  background-size: 400%;
  transition: all 0.2s;

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
    background-color: $color-primary;
  }

  &:hover {
    background-position: 100%;
  }
  &:active {
    transform: translateY(2px);
  }
}
</style>
