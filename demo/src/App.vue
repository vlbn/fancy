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
    <div class="is-fixed-r mr-6" v-if="fancy">
      <FancyMouseIcon />
    </div>
  </Transition>

  <div class="is-fixed-tl">
    <a>
      <div class="checkbox-wrapper-5">
        <div class="check">
          <input id="check-5" type="checkbox" v-model="fancy">
          <label for="check-5"></label>
        </div>
      </div>
    </a>
  </div>

  <Transition name="fade" mode="out-in">

    <section v-if="!fancy" class="fv-100 centerXY">
      <div>
        <PkgIcon class="mr-1 mb-3" /> fancy <mark><b>VUE</b></mark> components
      </div>
      <ul>
        <li>- FancyMouseIcon</li>
        <li>- FancyCursor</li>
        <li>- FancyWiki</li>
        <li>- FancyPreLoader</li>
      </ul>
      <div class="code my-4"><mark>work in constant progress</mark></div>
      <button @click="fancy = true" class="button is-success is-rounded">see in action</button>
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
      <GitHub customColor="black" />
    </a>
  </div>

</template>