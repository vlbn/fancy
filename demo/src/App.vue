<script setup>
import { ref, version, defineAsyncComponent } from "vue";

const SectionBelow = defineAsyncComponent(() => import("./components/SectionBelow.vue"));

import PkgIcon from "./components/icons/PkgIcon.vue";
import GitHubLogo from "./components/logos/GitHubLogo.vue";

import FancyCursor from "./components/FancyCursor.vue";
import FancyMouseIcon from "./components/FancyMouseIcon.vue";

console.log("📦 fancy VUE components");
console.log(version);

let fancy = ref(false);

//
</script>

<template>
  <Transition name="fade">
    <div v-if="fancy">
      <FancyCursor />
    </div>
  </Transition>

  <div class="m-0 is-fixed-tr">
    <a href="https://github.com/vlbn/fancy">
      <GitHubLogo customColor="black iPoint" />
    </a>
  </div>

  <section class="is-flex is-justify-content-center fv-100 is-flex-direction-column is-align-items-center">
    <div class="columns">

      <div class="column is-full">

        <PkgIcon class="mr-1" /> fancy <mark><b>VUE</b></mark> components

        <label class="switch">
          <input type="checkbox" id="checkbox" v-model="fancy" />
          <span class="slider round"></span>
        </label>

      </div>

    </div>
  </section>

  <Transition name="fade">
    <div class="is-fixed-r">
      <FancyMouseIcon v-if="fancy" />
    </div>
  </Transition>

  <Transition name="fade">

    <Suspense>
      <template #default>
        <SectionBelow v-if="fancy" />
      </template>
      <template #fallback>
        <div class="iSpin"></div>
      </template>
    </Suspense>

  </Transition>
</template>
