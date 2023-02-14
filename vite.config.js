import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import purgeCSS from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [vue(), purgeCSS({
    content: [
      './index.html',
      './src/**/*.vue'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
