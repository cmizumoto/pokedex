<template>
  <div class="card">
    <div class="card__container">
      <div class="card__img-container u-margin-bottom-small">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt=""
          class="card__img"
        />
      </div>
      <div class="card__desc">
        <span class="card__number u-margin-bottom-small">#000</span>
        <p>Name</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/variables";
.card {
  width: 10rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: red;
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

  &__desc {
    color: $color-black;
    font-size: 1.1rem;
  }

  &__number {
    display: flex;
    justify-content: space-around;
    padding: 0.2rem;
    border-radius: 5px;
    background-color: rgba($color-primary, 0.5);
  }

  &:hover {
    transform: scale(1.02);
  }
}
</style>
