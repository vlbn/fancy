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
    router.push("/greeting");
  }
});
</script>

<template>
  <mark @click="router.push('/')" class="is-fixed-r"><h1>greeting</h1></mark>
</template>
