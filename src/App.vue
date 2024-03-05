<script setup>
import { version, defineAsyncComponent, inject } from "vue";

const FancyWiki = defineAsyncComponent(() => import("./fancy/FancyWiki.vue"));

import GitHub from "./components/GitHub.vue";
import SwitCh from "./components/SwitCh.vue";
import DeMo from "./components/DeMo.vue";

import FancyCursor from "./fancy/FancyCursor.vue";
import FancyMouseIcon from "./fancy/FancyMouseIcon.vue";
import FancyPreLoader from "./fancy/FancyPreLoader.vue";

const { switchState, setSwitchState } = inject("store");

console.log("📦 fancy VUE components");
console.log(version);
</script>

<template>
  <div class="switch">
    <SwitCh :isOn="switchState" @click="setSwitchState" />
  </div>

  <Transition name="fade">
    <div v-if="switchState">
      <FancyCursor />
    </div>
  </Transition>

  <Transition name="fade">
    <div class="mouse_icon" v-if="switchState">
      <FancyMouseIcon />
    </div>
  </Transition>

  <Transition name="fade" mode="out-in">
    <section v-if="!switchState">
      <DeMo />
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
    </section>
  </Transition>

  <div class="github">
    <a href="https://github.com/vlbn/fancy">
      <GitHub />
    </a>
  </div>
</template>
