<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";

const route = useRoute();

let ruta = ref(route.path);

let theFace = ref();

let displayMessage = ref();

const truncatedUrl = computed(() => {
  const length = 10;
  if (ruta.value.length > length) {
    return ruta.value.substring(0, length) + "...";
  } else {
    return ruta.value;
  }
});

onMounted(() => {
  if (ruta.value === "/wp-admin") {
    displayMessage.value = "hahaha are you f*cking serious?";
    theFace.value = "😂";
  } else {
    displayMessage.value = "that's not a valid URL";
    theFace.value = "😒";
  }
});
</script>

<template>
  <div @click="$router.push('/')" class="notFound">
    <h1 class="title">{{ theFace }} {{ truncatedUrl }} ?</h1>
    <h2 class="subtitle">{{ displayMessage }}</h2>
  </div>
</template>

<style scoped>
.notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-height: 100vh;
  cursor: pointer;
}

.title {
  font-size: 3rem;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
}
</style>
