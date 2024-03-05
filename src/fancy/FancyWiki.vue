<script setup>
import { ref, computed } from "vue";

const response = await fetch(
  "https://en.wikipedia.org/api/rest_v1/page/random/summary"
);

const article = await response.json();

const longLink = ref(article.content_urls.mobile.page);

const longExtract = ref(article.extract);

const media = ref(article.thumbnail.source);

const truncatedExtract = computed(() => {
  const length = 300;
  if (longExtract.value.length > length) {
    return longExtract.value.substring(0, length) + "...";
  } else {
    return longExtract.value;
  }
});

const truncatedLink = computed(() => {
  const length = 50;
  if (longLink.value.length > length) {
    return longLink.value.substring(0, length) + "...";
  } else {
    return longLink.value;
  }
});
</script>

<template>
  <div class="wrapper">
    <div :style="{ backgroundImage: `url(${media})` }" class="wikiMedia"></div>
    <h1 class="title" style="max-width: 50%;">
      {{ article.title }}
    </h1>
    <h2 class="subtitle">
      {{ article.description }}
    </h2>
    <p style="max-width: 50%;">{{ truncatedExtract }}</p>
    <a :href="article.content_urls.mobile.page" target="_blank"
      ><small>{{ truncatedLink }}</small></a
    >
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0 4rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-height: 100vh;
}

a {
  color: fuchsia;
}

.title {
  font-weight: 600;
  font-size: 4rem !important;
  margin: 1.3rem 0rem 1.3rem 0rem;
  line-height: 3rem;
  text-shadow: 2px 2px 0px rgba(255, 255, 255, 1),
    5px 4px 0px rgba(0, 0, 0, 0.15);
}

.subtitle {
  font-size: 2rem !important;
  font-weight: 400;
  margin: 0rem;
}

.wikiMedia {
  opacity: 0.5;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
}
</style>
