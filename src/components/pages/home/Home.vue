<template>
  <main class="home">
    <div>home</div>

    <div class="home__boxes">
      <HomeThing eckdee="thing" />
      <div class="home__box" id="home__box-a">A</div>
      <div class="home__box" id="home__box-b">B</div>
    </div>

    <div class="home__elements">
      <div class="home__el" id="home__el-1">1</div>
      <div class="home__el" id="home__el-2">2</div>
      <div class="home__el" id="home__el-3">3</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HomeThing from './HomeThing.vue';
import { onMounted, onBeforeUnmount } from 'vue';

let box_a: HTMLDivElement = null;
let box_b: HTMLDivElement = null;

const obs = new IntersectionObserver(
  (els) => {
    els.forEach((el) => {
      el.target.classList.toggle('home__el--active', el.isIntersecting);
    });
  },
  { threshold: 1, rootMargin: '-24px' }
);

function WindowScrollListenerA() {
  if (box_a) box_a.style.transform = `translateX(${window.scrollY * 2}px)`;
}

function WindowScrollListenerB() {
  if (box_b) box_b.style.transform = `translateX(-${window.scrollY * 2}px)`;
}

onMounted(() => {
  box_a = <HTMLDivElement>document.getElementById('home__box-a');
  box_b = <HTMLDivElement>document.getElementById('home__box-b');

  window.addEventListener('scroll', WindowScrollListenerA);
  window.addEventListener('scroll', WindowScrollListenerB);

  obs.observe(document.getElementById('home__el-1'));
  obs.observe(document.getElementById('home__el-2'));
  obs.observe(document.getElementById('home__el-3'));
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', WindowScrollListenerA);
  window.removeEventListener('scroll', WindowScrollListenerB);

  obs.disconnect();
});
</script>

<style lang="scss" scoped>
.home {
  @include PageWidth;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;

  height: 200rem;

  padding: 5rem 0rem;

  &__boxes {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    overflow: hidden;

    height: 100%;
    width: 100%;
  }

  &__elements {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;

    height: 50rem;
  }

  &__box {
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 5rem;
    width: 5rem;

    background-color: white;
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

      &:nth-child(1) {
      }
    }
  }
}
</style>
