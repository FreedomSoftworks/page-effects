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
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
}

.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  margin-inline: 5rem;
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
