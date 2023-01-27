<script setup>
import { useUser } from "@/helpers/supabase";
//

import IconFingerPrint from "@/components/icons/IconFingerPrint.vue";
//

const {
  state: { usuario },
} = useUser();
//
</script>

<template>
  <div class="is-fixed-bottom">
    <div v-if="usuario">
      <h1>
        <mark>{{ usuario.email }}</mark>
      </h1>
    </div>
    <div v-else>
      <IconFingerPrint />
    </div>
  </div>
</template>
