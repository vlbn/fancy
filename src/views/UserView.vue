<script setup>
import { useUser } from "@/composables/useUser";
const {
  state: { usuario },
} = useUser();
</script>

<template>
  <div>
    <mark class="is-fixed-r" v-if="usuario">{{ usuario.id }}</mark>
    <mark class="is-fixed-r" v-else>💀</mark>
  </div>
</template>
