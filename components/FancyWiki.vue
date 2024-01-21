<script setup>
const response = await fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary');
const article = await response.json();
</script>

<template>
  <div class="is-flex is-justify-content-center fv-100 is-flex-direction-column is-align-items-center p-5">

    <div class="columns">
      <div class="columns container">

        <div class="column is-5 z">

          <figure class="is-pulled-right">
            <img :src=article.thumbnail.source>
          </figure>

        </div>

        <div class="column is-6 mt-3">

          <p class="title is-size-1 has-text-success">
            {{ article.title }}
          </p>
          <p class="subtitle mt-5">
            <b>{{ article.description }}</b>
          </p>

          <div class="block">
            {{ article.extract }}
          </div>

          <a :href=article.content_urls.mobile.page target="_blank"><small>{{ article.content_urls.mobile.page
          }}</small></a>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.z {
  z-index: -3;
}

img {
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  -moz-filter: grayscale(1);
  opacity: .5;
}

a {
  color: brown
}

.title {
  font-size: 4rem !important;
  line-height: 3rem;
  margin-left: -3.3rem;
  text-shadow: 2px 2px 0px rgba(255, 255, 255, 1),
    5px 4px 0px rgba(0, 0, 0, 0.15);

}</style>
