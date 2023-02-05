<script setup>
import { onMounted } from "vue";
import { supabase } from "@/helpers/supabase.js";
import { RouterView } from "vue-router";

//
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

//
import { useUser } from "@/composables/useUser";

//
const { handleState } = useUser();

// ENVIAR ESTO A SUPABASE.js?
onMounted(() => {
  supabase.auth.onAuthStateChange((_, _session) => {
    console.log("revisando el estado de la session");
    if (!_session) {
      handleState(null);
      console.log("🖖🏻 gg usuario");
    } else {
      console.log("todo ok");
    }
  });
  supabase.auth.getSession().then(({ data }) => {
    console.log("getting session.." + `\n` + "data is: " + data.session);
    if (data != null) {
      const { session } = data;
      if (session) {
        handleState(session.user);
        console.log("😄");
      } else {
        console.log("😥");
      }
    }
  });
});
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>
