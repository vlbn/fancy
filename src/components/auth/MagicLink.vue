<script setup>
import { ref } from "vue";
import { useUser, handleLogin } from "@/helpers/supabase";

//
const {
  state: { usuario },
} = useUser();

//
let email = ref(null);

//
</script>

<template>
  <form @submit.prevent="handleLogin(email)" class="p-1" v-if="!usuario">
    <div>
      <p class="description">sign in via magic link with your email below</p>
      <div>
        <input type="email" placeholder="your email" v-model="email" />
      </div>
      <div>
        <input type="submit" class="button block" />
      </div>
    </div>
  </form>
</template>
