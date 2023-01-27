<script setup>
import { ref, onMounted, provide } from "vue";
import { supabase } from "@/helpers/supabase";

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

let session = ref(null);

let isLoading = ref(false);

let email = ref(null);

const handleLogin = async () => {
  try {
    isLoading.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    isLoading.value = false;
  }
};

const logOut = async () => {
  try {
    isLoading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    isLoading.value = false;
  }
};

supabase.auth.getSession().then(({ data }) => {
  session.value = data.session;
});
supabase.auth.onAuthStateChange((_, _session) => {
  session.value = _session;
});

// onMounted(() => {

// });
//

provide("authSession", { session, logOut });
//
</script>

<template>
  <form @submit.prevent="handleLogin" class="p-1" v-if="!session">
    <div>
      <p class="description">sign in via magic link with your email below</p>
      <div>
        <input type="email" placeholder="your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="isLoading ? 'loading' : 'send magic link'"
          :disabled="isLoading"
        />
      </div>
    </div>
  </form>
  <TheHeader />
  <TheFooter />
</template>
