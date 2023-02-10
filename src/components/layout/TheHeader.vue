<script setup>
import { supabase } from "@/helpers/supabase";

import router from "@/router";

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
    router.push("/");
  }
};
</script>

<template>
  <div class="box">
    <div v-if="usuario" class="box">
      <button class="button is-primary is-rounded is-small" @click="logOut">
        <div class="p-3"><IconUnLocked /></div>
        logout
      </button>
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
