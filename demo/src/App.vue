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

  <section class="is-flex is-justify-content-center fv-100 is-align-items-center">

    <Transition name="fade">
      <Suspense>
        <SectionBelow />
      </Suspense>
    </Transition>

    <div class="is-fixed-tl">
      <PkgIcon class="mr-1" /> fancy <mark><b>VUE</b></mark> components
      <div class="field is-grouped is-grouped-multiline">
        <div class="control my-5">
          <div class="tags has-addons">
            <span class="tag is-dark">gsap</span>
            <span class="tag is-info">3.12.4</span>
          </div>
        </div>
        <div class="control my-5">
          <div class="tags has-addons">
            <span class="tag is-dark">vue</span>
            <span class="tag is-info">3.4.13</span>
          </div>
        </div>
      </div>
      <label class="switch">
        <input type="checkbox" id="checkbox" v-model="fancy" />
        <span class="slider round"></span>
      </label>
    </div>

    <Transition name="fade">
      <div class="is-fixed-t mt-6">
        <FancyMouseIcon v-if="fancy" />
      </div>
    </Transition>

    <div class="m-0 is-fixed-bl">
      <a href="https://github.com/vlbn/fancy">
        <GitHubLogo customColor="black iPoint" />
      </a>
    </div>

  </section>

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
