<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal__background"></div>
      <div class="modal__container" :class="pokemonType" ref="target">
        <h4 class="modal__title">{{ pokemon.name }}</h4>
        <div class="modal__buttons">
          <button class="modal__button">&#9872;</button>
          <button class="modal__button" @click="closeModal">&#10005;</button>
        </div>
        <div class="modal__content u-margin-bottom-medium">
          <div class="modal__details-img">
            <span class="modal__details-img-hash"> # </span>
            <span class="modal__details-img-number">{{ pokemonId }}</span>
            <img :src="pokemon.image" alt="" />
            <div class="modal__physical">
              <p>
                Height: <span>{{ pokemon.height }}</span> Weight: <span>{{ pokemon.weight }}</span>
              </p>
            </div>
          </div>
          <div class="modal__details-desc">
            <div class="modal__list">
              <ul class="modal__stats">
                Stats:
                <li v-for="(sta, index) in pokemon.stats" :key="index">
                  {{ sta.stat.name }}: {{ sta.base_stat }}
                </li>
              </ul>
            </div>
            <div class="modal__list">
              <ul class="modal__stat-sub">
                Abilities:
                <li v-for="(abi, index) in pokemon.ability" :key="index">{{ abi.ability.name }}</li>
              </ul>
              <ul class="modal__stat-sub">
                Types:
                <li v-for="(type, index) in pokemon.types" :key="index">{{ type.type.name }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal__evolutions">
          Evolutions:
          <ul class="modal__evolutions-list">
            <li
              class="modal__evolutions-item"
              v-for="(pokemonEvo, index) in pokemonsEvo"
              :key="index"
              @click="changeModal"
            >
              {{ pokemonEvo }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStoreModal } from "@/stores/storeModal";
import { useStorePokemons } from "@/stores/storePokemons";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["closeAction"]);
const storeModal = useStoreModal();
const storePokemons = useStorePokemons();

const pokemon = ref(storeModal.pokemonInfo);

const pokemonId = computed(() => {
  return String(pokemon.value.id).padStart(4, "0");
});
const pokemonType = computed(() => {
  return pokemon.value.types[0].type.name;
});

// Not ideal, wanted to only change the modal, but I'll need a bit more time to refactor the code
const changeModal = async (event) => {
  await storePokemons.getPokemon(event.currentTarget.innerHTML);
  closeModal();
};

/* 
    Modal Close Functions
*/
const closeModal = () => {
  emit("closeAction");
};

const target = ref(null);
onClickOutside(target, (event) => closeModal());

/* 
    Fetching evolution chain
*/
const loadChain = async () => {
  try {
    await storeModal.getEvolutions();
  } catch (err) {
    console.log(err);
  }
};

loadChain();

const pokemonsEvo = computed(() => {
  return storeModal.pokemonsEvolutions.reverse();
});
</script>

<style lang="scss">
@import "@/assets/sass/variables";
@import "@/assets/sass/utilities";
.modal {
  &__background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    background-color: rgba($color-black, 0.5);
  }

  &__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem rgba($color-black, 0.8);
    background-image: linear-gradient(
      120deg,
      rgba(#fff, 0.6) 0%,
      rgba(#fff, 0.6) 55%,
      transparent 55%
    );
    transition: all 0.2s;

    @media only screen and (max-width: 600px) {
      top: 0;
      transform: translate(-50%, -50%);
      padding: 0;
    }
    @media only screen and (max-width: 900px) {
      top: 50%;
    }
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

    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  &__details-img {
    position: relative;
    & img {
      max-width: 20rem;
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

  &__physical {
    text-align: center;
  }

  &__details-desc {
    font-size: 1.3rem;
    width: 30rem;
    text-transform: capitalize;
    padding-left: 6rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    @media only screen and (max-width: 900px) {
      max-width: 30rem;
      padding-left: 1rem;
    }

    @media only screen and (max-width: 600px) {
      padding-left: 0;
      flex-direction: column;
      align-items: center;
      max-width: 22rem;
    }
  }

  &__list {
    list-style-type: circle;
    margin-top: 1rem;
  }

  &__stat-sub {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__evolutions {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }

  &__evolutions-list {
    padding-top: 1rem;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &__evolutions-item {
    font-size: 1.3rem;
    text-transform: capitalize;
    cursor: pointer;
    padding-bottom: 1rem;
    transition: all 0.2s;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }

    &:not(:last-child)::after {
      content: "\21D2";
      padding-left: 30%;

      @media only screen and (max-width: 600px) {
        content: "";
        padding-left: 0;
      }
    }

    &:hover {
      color: $color-secondary;
    }
    &:active {
      color: $color-tertiary;
    }
  }
}
</style>
