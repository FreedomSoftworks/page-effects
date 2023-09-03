<template>
  <section class="parallax">
    <Header />
    <div class="parallax__bg">
      <img src="/public/img/parallax/stars.jpg" alt="" srcset="" />
    </div>
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

  &__bg {
    z-index: -1;

    & > img {
      position: absolute;
      top: 0;
      left: 0;

      height: 100%;
      width: 100%;

      object-fit: cover;
    }
  }
}
</style>
