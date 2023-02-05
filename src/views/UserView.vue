<script setup>
import { useUser } from "@/composables/useUser";
//

const {
  state: { usuario },
} = useUser();
//
</script>

<template>
  <mark class="is-fixed-r" v-if="usuario">{{ usuario }}</mark>
  <mark class="is-fixed-r" v-else>💀</mark>
</template>
