<script setup>
import IconFingerPrint from "@/components/icons/IconFingerPrint.vue";

import { useUser } from "@/composables/useUser";
const {
  state: { usuario },
} = useUser();
</script>

<template>
  <div class="is-fixed-bottom p-1">
    <div v-if="usuario">
      <h1>
        <mark>{{ usuario.email }}</mark>
      </h1>
    </div>
    <div v-else class="cargando m-3">
      <IconFingerPrint />
    </div>
  </div>
</template>
