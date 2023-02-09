<template>
  <NavigationBar />
  <div class="app__container">
    <RouterView />
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layout/NavigationBar.vue";
</script>

<style lang="scss">
@import "@/assets/sass/variables";
.app {
  &__container {
    margin: 0 auto;
    width: $container-width-desktop;
  }
}
</style>
