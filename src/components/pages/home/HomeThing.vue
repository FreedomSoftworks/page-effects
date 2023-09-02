<template>
  <div>
    {{ eckdee }}
  </div>
</template>

<script setup lang="ts">
const { eckdee } = defineProps({
  eckdee: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
