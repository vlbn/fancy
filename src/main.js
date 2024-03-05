import { createApp } from "vue";
import App from "./App.vue";

import "./assets/scss/styles.scss";

import uiState from "./stores/uiState";

const app = createApp(App);

app.provide("store", uiState);
app.mount("#app");
