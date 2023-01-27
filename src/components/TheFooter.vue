<script setup>
import { inject } from "vue";
//

import IconFingerPrint from "@/components/icons/IconFingerPrint.vue";
//

const { session } = inject("authSession");
//
</script>

<template>
  <div class="is-fixed-bottom">
    <div v-if="session">
      <h1>
        <mark>{{ session.user.email }}</mark>
      </h1>
    </div>
    <div v-else>
      <IconFingerPrint />
    </div>
  </div>
</template>
