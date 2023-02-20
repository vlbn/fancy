<script setup>
import { defineAsyncComponent, shallowRef } from "vue";

import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

const linkMagico = defineAsyncComponent(() =>
  import("./components/auth/AuthMagicLink.vue")
);

const nicePic = defineAsyncComponent(() => import("./components/media/NicePhoto.vue"));

const componenteActivo = shallowRef(linkMagico);
</script>

<template>
  <TheHeader />
  <component :is="componenteActivo"></component>
  <TheFooter />
</template>
