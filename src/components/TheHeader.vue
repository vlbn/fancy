<script setup>
import { logOut, useUser } from "@/helpers/supabase";
//

import IconUnLocked from "@/components/icons/IconUnLocked.vue";
import IconIsLocked from "@/components/icons/IconIsLocked.vue";
//

const {
  state: { usuario },
} = useUser();
//
</script>

<template>
  <div class="is-fixed-top">
    <div v-if="usuario != null">
      <IconUnLocked />
      <button @click="logOut">logout</button>
      <h1>{{ usuario }}</h1>
    </div>
    <div v-else>
      <IconIsLocked />
    </div>
  </div>
</template>
