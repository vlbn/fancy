<script setup>
import { ref, version, defineAsyncComponent } from "vue";

const FancyWiki = defineAsyncComponent(() => import("./fancy/FancyWiki.vue"));

import PkgIcon from "./components/PkgIcon.vue";
import GitHub from "./components/GitHub.vue";

import FancyCursor from "./fancy/FancyCursor.vue";
import FancyMouseIcon from "./fancy/FancyMouseIcon.vue";
import FancyPreLoader from "./fancy/FancyPreLoader.vue";

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
    <div class="is-fixed-t mt-6" v-if="fancy">
      <FancyMouseIcon /> 
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
      click <mark @click="fancy = true" class="iPoint">here</mark>!
    </section>

    <section v-else>
      <Transition name="fade" mode="out-in">
        <Suspense>

          <template #default>
            <FancyWiki />
          </template>

          <template #fallback>
            <FancyPreLoader />
          </template>

        </Suspense>
      </Transition>

      <Transition name="fade" mode="out-in">
        <Suspense>

          <template #default>
            <FancyWiki />
          </template>

          <template #fallback>
            <FancyPreLoader />
          </template>

        </Suspense>
      </Transition>

    </section>

  </Transition>

  <div class="m-0 is-fixed-bl">
    <a href="https://github.com/vlbn/fancy">
      <GitHub customColor="black iPoint" />
    </a>
  </div>

</template>