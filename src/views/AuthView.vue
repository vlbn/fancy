<script setup>
import { ref } from "vue";
import { supabase } from "@/helpers/supabase";

const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;
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
    loading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <div>
      <p class="description">sign in via magic link with your email below</p>
      <div>
        <input type="email" placeholder="your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'loading' : 'send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
