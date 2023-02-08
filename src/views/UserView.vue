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
  <div>
    <mark class="is-fixed-r" v-if="usuario">{{ usuario.id }}</mark>
    <mark class="is-fixed-r" v-else>💀</mark>
  </div>
</template>
