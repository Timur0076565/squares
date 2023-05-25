<script setup lang="ts">
import { ref } from 'vue';
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from '@vuelidate/validators';
import type {IUserData} from "@/features/auth/types";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();


const formData = ref<IUserData>({
  email: '',
  password: '',
});

const rules = {
  email: {
    email,
    required,
  },
  password: {
    required,
    minLength: minLength(6),
  },
};

const v$ = useVuelidate(rules, formData);

function getErrorMessage(fieldName: string) {
  return v$.value[fieldName].$errors.map(error => error.$message)
}

async function onSubmit() {
  const result = await v$.value.$validate();
  if (result) {
    authStore.login();
  }
}

</script>

<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card color="secondary">
        <v-card-text>
          <v-form @submit.prevent="onSubmit">
            <v-text-field
              v-model="formData.email"
              label="Email"
              type="email"
              required
              :error-messages="getErrorMessage('email')"
              @blur="v$.email.$touch"
              @input="v$.email.$touch"
            />

            <v-text-field
              class="mt-2"
              v-model="formData.password"
              label="Password"
              required
              type="password"
              :error-messages="getErrorMessage('password')"
              @blur="v$.password.$touch"
              @input="v$.password.$touch"
            />

            <v-btn
              type="submit"
              class="mt-4"
              color="primary"
            >
              Login
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
