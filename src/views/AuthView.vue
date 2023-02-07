<script setup>
import { ref, onBeforeMount } from "vue";
import { supabase } from "@/helpers/supabase";
import router from "@/router";

import { useUser } from "@/composables/useUser";
const {
  state: { usuario },
} = useUser();
//

let loading = ref(false);
let email = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    });
    if (error) throw error;
    alert("check your email for the login link!");
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    loading.value = false;
    email.value = "";
    console.log("finalmente");
    if (!loading) {
      router.push("/");
    }
  }
};

onBeforeMount(() => {
  if (usuario.value != null) {
    router.push("/");
  }
});
</script>

<template>
  <div>
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
  </div>
  <div></div>
</template>
