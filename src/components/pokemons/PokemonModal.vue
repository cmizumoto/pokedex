<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal__container">
        <h4 class="modal__title">{{ pokemon.name }}</h4>
        <div class="modal__buttons">
          <button class="modal__button">&#9872;</button>
          <button class="modal__button" @click="closeModal">&#10005;</button>
        </div>
        <div class="modal__content">
          <div class="modal__details-img">
            <span class="modal__details-img-hash"> # </span>
            <span class="modal__details-img-number">{{ pokemonId }}</span>
            <img :src="pokemon.image" alt="" />
          </div>
          <div class="modal__details-desc">
            <ul class="modal__list">
              Abilities:
              <li v-for="(abi, index) in pokemon.ability" :key="index">{{ abi.ability.name }}</li>
            </ul>
            <ul class="modal__list">
              Types:
              <li v-for="(type, index) in pokemon.types" :key="index">{{ type.type.name }}</li>
            </ul>
          </div>
        </div>
        <div class="modal__evolutions">loophere</div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineEmits, ref, computed } from "vue";
import { useStoreModal } from "@/stores/storeModal";

const emit = defineEmits(["closeAction"]);
const storeModal = useStoreModal();

const pokemon = ref(storeModal.pokemonInfo);

const pokemonId = computed(() => {
  return String(pokemon.value.id).padStart(4, "0");
});

const closeModal = () => {
  emit("closeAction");
};
</script>

<style lang="scss">
@import "@/assets/sass/variables";
.modal {
  &__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    border-radius: 5px;
    background-color: #defde0;
    box-shadow: 0 1rem 2rem rgba($color-black, 0.8);
    background-image: linear-gradient(
      120deg,
      rgba(#fff, 0.6) 0%,
      rgba(#fff, 0.6) 55%,
      transparent 55%
    );
    transition: all 0.2s;
  }

  &__title {
    text-align: center;
    text-transform: capitalize;
    font-size: 2.5rem;
    font-weight: 100;
  }

  &__buttons {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &__button {
    font-size: 1.2rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: $color-secondary;
      color: $color-primary;
      border-radius: 3px;
    }

    &:active {
      background-color: $color-tertiary;
      transform: translateY(1px);
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  &__details-img {
    position: relative;
    & img {
      width: 17rem;
    }

    &-hash {
      position: absolute;
      font-size: 7rem;
      top: -2rem;
      left: -1rem;
      color: rgba($color-black, 0.1);
    }

    &-number {
      position: absolute;
      font-size: 2rem;

      height: 3rem;
      width: 3rem;
    }
  }

  &__details-desc {
    width: 17rem;
    text-transform: capitalize;
    padding-left: 6rem;
  }

  &__list {
    list-style-type: circle;
    margin-top: 1rem;
  }
}
</style>
