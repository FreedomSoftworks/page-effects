<template>
  <div>{{ name }}</div>
  <div>{{ $store.state.count }}</div>
  <button @click="$store.commit($store_mut_keys.plus)">plus</button>
  <button @click="$store.commit($store_mut_keys.minus)">minus</button>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
