<script setup>
import { defineAsyncComponent, shallowRef } from "vue";

const TheHeader = defineAsyncComponent(() => import("./components/layout/TheHeader.vue"));
const TheFooter = defineAsyncComponent(() => import("./components/layout/TheFooter.vue"));

const linkMagico = defineAsyncComponent(() =>
  import("./components/auth/AuthMagicLink.vue")
);

const nicePic = defineAsyncComponent(() => import("./components/media/NicePhoto.vue"));

const componenteActivo = shallowRef(nicePic);
</script>

<template>
  <TheHeader />
  <component
    :is="componenteActivo"
    path="https://picsum.photos/2000/3000?random=1"
  ></component>
  <TheFooter />
</template>
