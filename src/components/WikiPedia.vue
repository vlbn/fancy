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
  <div class="container">
    <div class="content">
      <div :style="{ backgroundImage: `url(${media})` }" class="wikiMedia"></div>
      <h1 class="title">
        {{ article.title }}
      </h1>
      <h2 class="subtitle">
        {{ article.description }}
      </h2>
      <p>{{ truncatedExtract }}</p>
      <a :href="article.content_urls.mobile.page" target="_blank"
        ><small>{{ truncatedLink }}</small></a
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
}

.content {
  padding: 1rem;
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

a {
  color: fuchsia;
}

.title {
  text-align: left;
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
