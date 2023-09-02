<template>
  <main class="home">
    <div>home</div>

    <HomeThing eckdee="thing" />

    <div class="home__intersections">
      <div class="home__el" id="home__el-1">1</div>
      <div class="home__el" id="home__el-2">2</div>
      <div class="home__el" id="home__el-3">3</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HomeThing from './HomeThing.vue';
import { onMounted, onBeforeUnmount } from 'vue';

const obs = new IntersectionObserver(
  (els) => {
    // (els, ob) => {
    els.forEach((el) => {
      el.target.classList.toggle('home__el--active', el.isIntersecting);
      // unobserver pattern
      // if (el.isIntersecting) ob.unobserve(el.target);
    });
  },
  { threshold: 1, rootMargin: '-50px' }
);

onMounted(() => {
  obs.observe(document.getElementById('home__el-1'));
});

onBeforeUnmount(() => {
  obs.disconnect();
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;

  height: 150rem;

  &__intersections {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;

    height: 50rem;
  }

  &__el {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5rem;
    width: 5rem;

    opacity: 0;
    visibility: hidden;

    $duration: 1000ms;

    transition: color $duration, background-color $duration, opacity $duration,
      visibility $duration;

    &--active {
      color: black;
      background-color: white;

      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
