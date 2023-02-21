<script setup>
import AuthMagicLink from "@/components/auth/AuthMagicLink.vue";

import { useUser } from "@/composables/useUser";
const {
  state: { usuario },
} = useUser();
</script>

<template>
  <div class="is-fixed-r" v-if="!usuario"><AuthMagicLink /></div>
  <div class="is-fixed-r" v-else>
    hola: <mark>{{ usuario.email }}</mark>
  </div>
</template>
