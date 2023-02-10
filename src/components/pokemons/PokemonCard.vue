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
const props = defineProps(["id", "name", "types", "ability", "image"]);

const propsInfo = () => {
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

.fire {
  background-color: #fddfdf;
}
.grass {
  background-color: #defde0;
}
.electric {
  background-color: #fcf7de;
}
.water {
  background-color: #def3fd;
}
.ground {
  background-color: #f4e7da;
}
.rock {
  background-color: #d5d5d4;
}
.fairy {
  background-color: #fceaff;
}
.poison {
  background-color: #98d7a5;
}
.bug {
  background-color: #f8d5a3;
}
.dragon {
  background-color: #97b3e6;
}
.psychic {
  background-color: #eaeda1;
}
.flying {
  background-color: #f5f5f5;
}
.fighting {
  background-color: #e6e0d4;
}
.normal {
  background-color: #f5f5f5;
}
</style>
