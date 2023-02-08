<script setup>
import { supabase } from "@/helpers/supabase";
import { useUser } from "@/composables/useUser";
//

import router from "@/router";
//

import IconUnLocked from "@/components/icons/IconUnLocked.vue";
import IconIsLocked from "@/components/icons/IconIsLocked.vue";
//

const {
  state: { usuario },
} = useUser();
//

const logOut = async () => {
  try {
    //isLoading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    //isLoading.value = false;
    router.push("/");
  }
};
</script>

<template>
  <div class="is-fixed-top">
    <div v-if="usuario">
      <IconUnLocked />
      <button @click="logOut">logout</button>
      <h1>{{ usuario.id }}</h1>
    </div>
    <div v-else>
      <IconIsLocked />
    </div>
    <ul>
      <li @click="router.push('/about')">about</li>
      <li @click="router.push('/preview')">preview</li>
      <li @click="router.push('/user')">user</li>
      <li @click="router.push('/greeting')">greeting</li>
      <li @click="router.push('/x')">x</li>
    </ul>
  </div>
</template>
