<script setup>

import { ref } from "vue";

let huesped = ref("Mr Doe");

let voluntarios = ref([
  { nombre: "jon" },
  { nombre: "mike" },
  { nombre: "boy" }
]);

let idiomaDeMensaje = ref([
  { tag: "esp", label: "Español" },
  { tag: "eng", label: "English" }
]);

let horaDeLlegada = ref("16:20");

let alojamientos = ref([
  { tag: "bruc", label: "Bruc" },
  { tag: "mallorca", label: "Mallorca" },
  { tag: "traveler", label: "Traveller" },
  { tag: "blanes", label: "Blanes" },
  { tag: "estudio", label: "Estudio" },
  { tag: "boqueria", label: "Boquería" }
]);

let avisoLateCheckin = ref(false);

let vistaPrevia = ref(null);

</script>

<template>
  <ul>
    <li>{{ huesped }}</li>
    <li>{{ voluntarios }}</li>
    <li>{{ idiomaDeMensaje }}</li>
    <li>{{ horaDeLlegada }}</li>
    <li>{{ alojamientos }}</li>
    <li>{{ avisoLateCheckin }}</li>
    <li>{{ vistaPrevia }}</li>
  </ul>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

li {
  padding: 2rem;
}

.hc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  vertical-align: middle;
  align-items: center;
}

.hc img {
  margin-bottom: .4rem;
  margin-right: .4rem;
}

.hc strong {
  margin-left: .3rem;
}

body,
html {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  overflow-x: hidden !important;
  margin: 0px;
  padding: 0px;
  font-weight: 400;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  border: 0 !important;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -user-drag: none;
}

* {
  scrollbar-width: auto;
  scrollbar-color: #a6a6a65a #ffffff;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #a6a6a65a;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
