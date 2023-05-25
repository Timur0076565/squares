<script setup lang="ts">
import GameSquare from "@/features/game/components/GameSquare.vue";

defineProps<{
  squares: (number | undefined)[][];
}>()


</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="overflow-auto">
        <div
          class="d-flex w-auto"
          v-for="(square, y) in squares"
          :key="y"
        >
          <GameSquare
            v-for="(_, x) in square"
            :key="`${y}-${x}`"
          />
        </div>
      </div>
    </v-col>
  </v-row>
</template>
