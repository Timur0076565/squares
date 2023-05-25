<script setup lang="ts">
import {useDebounceFn, useVModel} from "@vueuse/core";

const props = defineProps<{
  x?: number,
  y?: number,
}>();

const emit = defineEmits<{
  (e: 'update:x', value?: number): void,
  (e: 'update:y', value?: number): void,
}>();

const valueX = useVModel(props, 'x', emit);
const valueY = useVModel(props, 'y', emit);

const debouncedX = useDebounceFn((value: string) => {
  valueX.value = Number(value);
}, 1000);

const debouncedY = useDebounceFn((value: string) => {
  valueY.value = Number(value);
}, 1000);
</script>

<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card color="secondary">
        <v-card-text>
          <v-text-field
            @update:model-value="debouncedX"
            :model-value="valueX"
            label="Size X"
            type="number"
            :clearable="true"
          />

          <v-text-field
            @update:model-value="debouncedY"
            :model-value="valueY"
            label="Size Y"
            type="number"
            :clearable="true"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
