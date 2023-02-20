<script setup>
import { supabase } from "@/helpers/supabase";

import IconUnLocked from "@/components/icons/IconUnLocked.vue";
import IconIsLocked from "@/components/icons/IconIsLocked.vue";

import { useUser } from "@/composables/useUser";
const {
  state: { usuario },
} = useUser();

const logOut = async () => {
  try {
    //isLoading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    //isLoading.value = false;
  }
};
</script>

<template>
  <div class="is-fixed-top-right m-3">
    <div v-if="usuario">
      <button class="button-29" @click="logOut">
        <div class="p-3"><IconUnLocked /></div>
        logout
      </button>
      <h1 class="my-3">{{ usuario.id }}</h1>
    </div>
    <div v-else class="button-29 m-1 p-3">
      <IconIsLocked />
    </div>
  </div>
</template>
