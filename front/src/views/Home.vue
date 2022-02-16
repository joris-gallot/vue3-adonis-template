<script setup lang="ts">
import { SigninDto } from "@/dtos/auth";
import { IServiceApi } from "@/interfaces/ServiceApi";
import { inject, ref } from "vue";
import { useMutation } from "vue-query";

const api: IServiceApi = inject("api")!;
const payload = ref<SigninDto>()

const { mutate: signin, error, isError } = useMutation(
  "signin",
  () => api.auth.signin(payload.value!),
);
</script>

<template>
  <div>
    <div class="bg-blue-600 text-white space-x-2">
      <span>Home</span>
      <FontAwesomeIcon icon="user" />
    </div>

    <p v-if="isError" class="error-message"> {{ error }} </p>

    <button class="text-white bg-red-600 p-2 mt-2 rounded" @click="signin()">Try to signin</button>
  </div>
</template>