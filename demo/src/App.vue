<script setup>
import { ref, version, defineAsyncComponent } from "vue";

const FancyWiki = defineAsyncComponent(() => import("./components/FancyWiki.vue"));

import PkgIcon from "./components/icons/PkgIcon.vue";
import GitHubLogo from "./components/logos/GitHubLogo.vue";

import FancyCursor from "./components/FancyCursor.vue";
import FancyMouseIcon from "./components/FancyMouseIcon.vue";

console.log("📦 fancy VUE components");
console.log(version);

let fancy = ref(false);
</script>

<template>
  <Transition name="fade">
    <div v-if="fancy">
      <FancyCursor />
    </div>
  </Transition>

  <Transition name="fade">
    <div class="is-fixed-t mt-6">
      <FancyMouseIcon v-if="fancy" />
    </div>
  </Transition>

  <div class="is-fixed-tl">
    <div>
      <PkgIcon class="mr-1 mb-3" /> fancy <mark><b>VUE</b></mark> components
    </div>
    <ul class="mb-3">
      <li>- FancyMouseIcon</li>
      <li>- FancyCursor</li>
      <li>- FancyWiki</li>
      <li>- FancyPreLoader</li>
    </ul>
    <div class="field is-grouped is-grouped-multiline mb-2">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">gsap</span>
          <span class="tag is-info">3.12.4</span>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">vue</span>
          <span class="tag is-info">3.4.13</span>
        </div>
      </div>
    </div>
    <div>
      <label class="switch">
        <input type="checkbox" id="checkbox" v-model="fancy" />
        <span class="slider round"></span>
      </label>
    </div>
  </div>

  <Transition name="fade" mode="out-in">
    
    <section v-if="!fancy" class="is-flex is-justify-content-center fv-100 is-align-items-center">
      click!
    </section>

    <section v-else>
      <Transition name="fade" mode="out-in">
        <Suspense>

          <template #default>
            <FancyWiki />
          </template>

          <template #fallback>
            <progress class="progress is-small is-primary" max="100">15%</progress>
          </template>

        </Suspense>
      </Transition>

      <Transition name="fade" mode="out-in">
        <Suspense>

          <template #default>
            <FancyWiki />
          </template>

          <template #fallback>
            <progress class="progress is-small is-primary" max="100">15%</progress>
          </template>

        </Suspense>
      </Transition>

    </section>

  </Transition>

  <div class="m-0 is-fixed-bl">
    <a href="https://github.com/vlbn/fancy">
      <GitHubLogo customColor="black iPoint" />
    </a>
  </div>

</template>