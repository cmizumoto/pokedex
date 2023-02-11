<template>
  <NavigationBar />
  <div class="app__container">
    <router-view v-slot="{ Component }">
      <transition name="move" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.move-enter-from,
.move-leave-to {
  opacity: 0;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>
