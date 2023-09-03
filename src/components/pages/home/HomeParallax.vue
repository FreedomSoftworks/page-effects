<template>
  <section class="parallax">
    <Header />
    <img
      class="parallax__stars"
      src="/public/img/parallax/stars.jpg"
      alt="stars"
    />

    <img
      class="parallax__moon"
      src="/public/img/parallax/moon.png"
      alt="stars"
    />

    <img
      class="parallax__mountain"
      src="/public/img/parallax/mountain.png"
      alt="stars"
    />

    <img
      class="parallax__trees-1"
      src="/public/img/parallax/trees-1.png"
      alt="stars"
    />

    <!-- <img
      class="parallax__trees-2"
      src="/public/img/parallax/trees-2.png"
      alt="stars"
    /> -->
  </section>
</template>

<script setup lang="ts">
import Header from 'src/components/global/header/Header.vue';
</script>

<style lang="scss" scoped>
.parallax {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  margin-bottom: 8rem;

  overflow: hidden;

  &__stars {
    z-index: -100;

    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  &__moon {
    z-index: -50;

    position: absolute;
    top: 10%;
    right: 30%;

    height: 15rem;

    object-fit: cover;
  }

  &__mountain {
    z-index: -25;

    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    object-fit: contain;
  }

  &__trees-1 {
    z-index: -10;

    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  &__trees-2 {
    z-index: -1;

    position: absolute;
    top: 20%;
    left: 0;

    height: 100%;
    width: 100%;

    object-fit: cover;
  }
}
</style>
