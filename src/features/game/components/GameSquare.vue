<script setup lang="ts">
import { computed, ref } from 'vue';

const enum Colors {
  White = 'white',
  Blue = 'blue'
}

const currentColor = ref(Colors.White);

const styles = computed(() => {
  return {
    backgroundColor: currentColor.value
  }
})

function onHover() {
  currentColor.value = currentColor.value === Colors.White
    ? Colors.Blue
    : Colors.White
}
</script>

<template>
  <div
    class="game-square"
    :style="styles"
    @mouseover="onHover"
    @focusin="onHover"
  />
</template>

<style scoped>
.game-square {
  cursor: pointer;
  width: 36px;
  height: 36px;
}
</style>
