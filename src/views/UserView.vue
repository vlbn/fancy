<script setup>
import { onBeforeMount } from "vue";
import router from "@/router";
//

import { useUser } from "@/composables/useUser";
const {
  state: { usuario },
} = useUser();
//

onBeforeMount(() => {
  console.log(usuario.value);
  if (!usuario) {
    router.push("/");
  } else {
    router.push("/user");
  }
});
</script>

<template>
  <div @click="router.push('/')">
    <mark class="is-fixed-r" v-if="usuario">{{ usuario.id }}</mark>
    <mark class="is-fixed-r" v-else>💀</mark>
  </div>
  <h1 @click="router.push('/about')">ir about</h1>
</template>

<style scoped>
h1 {
  margin-top: 15rem;
}
</style>
