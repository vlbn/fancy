<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/helpers/supabase";

import AuthView from "./views/AuthView.vue";
import UserView from "./views/UserView.vue";

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>

<template>
  <UserView v-if="session" :session="session" />
  <AuthView v-else />
</template>
