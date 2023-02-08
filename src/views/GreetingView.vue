<script setup>
import { onMounted } from "vue";
import router from "@/router";

import { useUser } from "@/composables/useUser";
const {
  state: { usuario },
} = useUser();

onMounted(() => {
  if (!usuario.value) {
    router.push("/");
  }
});
</script>

<template>
  <mark @click="router.push('/')" class="is-fixed-r">
    <h1>greeting</h1>
  </mark>
</template>
