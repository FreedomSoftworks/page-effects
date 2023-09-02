<template>
  <header>
    <div class="main">
      <div class="left">header</div>
      <div class="right">
        <div>one</div>
        <div>two</div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  background-color: #222;
}

.main {
  @include PageWidth;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 10rem;
}

.left {
}

.right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
</style>
