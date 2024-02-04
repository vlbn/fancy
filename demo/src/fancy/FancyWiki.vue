<script setup>
import { ref, computed } from 'vue';

const response = await fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary');
const article = await response.json();

const longLink = ref(article.content_urls.mobile.page);

const longExtract = ref(article.extract);

const media = ref(article.thumbnail.source);

const truncatedExtract = computed(() => {
  const length = 400;
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
  <div class="basic">

    <div class="columns">
      <div class="columns container">

        <div class="column is-5 z">
          <div :style="{ backgroundImage: `url(${media})` }" class="wikiMedia is-pulled-right"></div>
        </div>

        <div class="column is-6 mt-3">

          <p class="title is-size-1 has-text-success">
            {{ article.title }}
          </p>
          <p class="subtitle mt-5">
            <b>{{ article.description }}</b>
          </p>

          <div class="block">
            {{ truncatedExtract }}
          </div>

          <a :href=article.content_urls.mobile.page target="_blank"><small>{{ truncatedLink }}</small></a>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.basic {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-height: 100vh;
}

.z {
  z-index: -3;
}

.title {
  font-size: 4rem !important;
  line-height: 3rem;
  margin-left: -3.3rem;
  text-shadow: 2px 2px 0px rgba(255, 255, 255, 1),
    5px 4px 0px rgba(0, 0, 0, 0.15);
}

.wikiMedia {
  opacity: .5;
  position: relative;
  top: -5rem;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
