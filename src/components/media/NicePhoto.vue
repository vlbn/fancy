<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["path"]);

let loading = ref(true);
let imageSrc = ref(null);
let imageAlt = ref(null);

onMounted(() => {
  const img = new Image();
  img.src = props.path;
  img.onload = () => {
    imageSrc.value = img.src;
    loading.value = false;
    imageAlt.value = img.src;
  };
});
</script>

<template>
  <Transition name="fade">
    <div v-if="loading" class="cargando">loading..</div>
    <div v-else>
      <img :src="imageSrc" :alt="imageAlt" :title="imageAlt" />
    </div>
  </Transition>
</template>
