<script setup>
import { ref } from "vue";
import { supabase } from "@/helpers/supabase";

let loading = ref(false);
let email = ref("");
let emailSent = false;

const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    });
    if (error) throw error;
    alert("check your email for the login link!");
    emailSent = true;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    loading.value = false;
    email.value = "";
  }
};
</script>

<template>
  <div v-if="!emailSent">
    <form @submit.prevent="handleLogin">
      <p class="description">sign in via magic link with your email below</p>
      <input type="email" placeholder="your email" v-model="email" />
      <input
        type="submit"
        class="button block"
        :value="loading ? 'sending..' : 'send magic link'"
        :disabled="loading"
      />
    </form>
  </div>
  <div v-else>
    <h3>PLEASE CHECK YOUR EMAIL INBOX</h3>
    <mark>you can close this window now</mark>
  </div>
</template>
