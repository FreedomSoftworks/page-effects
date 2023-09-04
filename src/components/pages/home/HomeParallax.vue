<template>
  <section class="parallax">
    <Header />
    <img
      class="parallax__stars"
      id="parallax__stars"
      src="/public/img/parallax/stars.jpg"
      alt="stars"
    />

    <img
      class="parallax__moon"
      id="parallax__moon"
      src="/public/img/parallax/moon.png"
      alt="stars"
    />

    <img
      class="parallax__mountain"
      id="parallax__mountain"
      src="/public/img/parallax/mountain-2.png"
      alt="stars"
    />

    <!-- <img
      class="parallax__trees-1"
      id="parallax__trees-1"
      src="/public/img/parallax/trees-1-1.png"
      alt="stars"
    /> -->

    <img
      class="parallax__trees-2"
      id="parallax__trees-2"
      src="/public/img/parallax/trees-2-2.png"
      alt="stars"
    />
  </section>
</template>

<script setup lang="ts">
import Header from 'src/components/global/header/Header.vue';
import { onBeforeUnmount, onMounted } from 'vue';

let stars: HTMLDivElement | null = null;
let moon: HTMLDivElement | null = null;
let mountain: HTMLDivElement | null = null;
let trees: HTMLDivElement | null = null;

function StarsListener(): void {
  if (stars) {
    stars.style.top = `${window.scrollY * 0.75}px`;
    stars.style.left = `${window.scrollY * 0.1}px`;
  }
}

function MoonListener(): void {
  if (moon)
    moon.style.transform = `
     translate(
      ${window.scrollY * 0.15}px, 
      ${window.scrollY * 0.75}px
      )`;
}

function MountainListener(): void {
  if (mountain) {
    mountain.style.bottom = `${window.scrollY * -0.5}px`;
    mountain.style.transform = `translateX(${window.scrollY * -0.1}px)`;
  }
  // mountain.style.transform = `translateY(${window.scrollY * 0.5}px)`;
}

function TreesListener(): void {
  if (trees) {
    // trees.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    trees.style.bottom = `${window.scrollY * -0.25}px`;
    trees.style.left = `${window.scrollY * -0.15}px`;
  }
}

onMounted(() => {
  stars = <HTMLDivElement>document.getElementById('parallax__stars');
  moon = <HTMLDivElement>document.getElementById('parallax__moon');
  mountain = <HTMLDivElement>document.getElementById('parallax__mountain');
  trees = <HTMLDivElement>document.getElementById('parallax__trees-2');

  window.addEventListener('scroll', StarsListener);
  window.addEventListener('scroll', MoonListener);
  window.addEventListener('scroll', MountainListener);
  window.addEventListener('scroll', TreesListener);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', StarsListener);
  window.removeEventListener('scroll', MoonListener);
  window.removeEventListener('scroll', MountainListener);
  window.removeEventListener('scroll', TreesListener);
});
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

    transform: translateX(-10rem);

    width: 110%;

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
    bottom: 0;
    left: -25%;

    width: 150%;

    object-fit: cover;
  }

  // &__trees-1 {
  //   z-index: -10;

  //   position: absolute;
  //   top: -10%;
  //   left: 0;

  //   height: 100%;
  //   width: 100%;

  //   object-fit: cover;
  // }

  &__trees-2 {
    z-index: -1;

    position: absolute;
    bottom: 0;
    left: 0;

    transform: translateY(20rem) scaleX(-1);

    width: 115%;

    object-fit: contain;
  }
}
</style>
