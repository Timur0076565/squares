import { computed } from 'vue'
import { defineStore } from 'pinia'
import {useRouter} from "vue-router";
import {useLocalStorage} from "@vueuse/core";

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();

  const authorized = useLocalStorage('auth', false);

  const isAuthorized = computed(() => authorized.value)
  function login() {
    authorized.value = true;
    router.push('/game');
  }

  function logout() {
    authorized.value = false;
    router.push('/');
  }

  return { isAuthorized, login, logout }
})
