<template>
  <Header />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from 'src/components/global/header/Header.vue';
</script>

<style lang="scss">
// this comment needs to exist to load all the scss in the project
</style>
