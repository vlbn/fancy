<script setup>
import { useUser } from "@/composables/useUser";
import AuthMagicLink from "@/components/auth/AuthMagicLink.vue";
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
