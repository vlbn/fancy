<script setup>
import { ref } from "vue";
import { supabase } from "@/helpers/supabase";

let loading = ref(false);
let email = ref("");
let emailSent = false;

let x = !loading ? "z" : "x";

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
  <div v-if="!emailSent" class="m-6">
    <form @submit.prevent="handleLogin" class="niceInput-1">
      <p class="description my-5">sign in via magic link with your email below</p>
      <input type="email" placeholder="your email" v-model="email" />
      <button class="button-82-pushable my-5" role="button" :disabled="loading">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text"> {{ x }} </span>
      </button>
    </form>
  </div>
  <div v-else>
    <h3>PLEASE CHECK YOUR EMAIL INBOX</h3>
    <mark>you can close this window now</mark>
  </div>
</template>
