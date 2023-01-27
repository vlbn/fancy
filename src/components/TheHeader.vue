<script setup>
import { inject, ref, watch } from "vue";
//

import IconUnLocked from "@/components/icons/IconUnLocked.vue";
import IconIsLocked from "@/components/icons/IconIsLocked.vue";
//

const { session, logOut } = inject("authSession");
//

let usuario = ref();

watch(session, () => {
  usuario.value = session.value.user;
  console.log(usuario.value);
});
//
</script>

<template>
  <div class="is-fixed-top">
    <div v-if="session">
      <IconUnLocked />
      <button @click="logOut">logout</button>
      <h1>{{ usuario }}</h1>
    </div>
    <div v-else>
      <IconIsLocked />
    </div>
  </div>
</template>
