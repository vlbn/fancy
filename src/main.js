import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/styles.scss";

import uiState from "./stores/uiState";

const app = createApp(App);

app.use(router);
app.provide("store", uiState);
app.mount("#app");
