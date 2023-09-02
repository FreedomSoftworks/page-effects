<template>
  <Header />
  <RouterView />
  <!-- <Footer /> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/global/header/Header.vue';
// import Footer from './components/global/footer/Footer.vue';
</script>

<style lang="scss">
// this comment needs to exist to load all the scss in the project
</style>
