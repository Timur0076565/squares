<script setup lang="ts">
import { ref, computed } from 'vue';
import GameSettingForm from "@/features/game/components/GameSettingForm.vue";
import GameSquaresResult from "@/features/game/components/GameSquaresResult.vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

const x = ref<number>();
const y = ref<number>();

const squares = computed(() => [...Array(y.value).keys()].map(() => [...Array(x.value).keys()]));
</script>

<template>
  <v-container>
    <GameSettingForm
      class="mb-2"
      v-model:x="x"
      v-model:y="y"
    />

    <GameSquaresResult
      :squares="squares"
      :key="`${y}-${x}`"
    />

    <v-row>
      <v-col cols="12">
        <v-btn
          class="mt-4"
          @click="authStore.logout()"
          color="pink-accent-4"
        >
          Logout
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
