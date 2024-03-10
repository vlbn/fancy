<script setup>
import { version, defineAsyncComponent, inject } from "vue";

import PreLoader from "@/components/PreLoader.vue";
import GitHub from "@/components/GitHub.vue";
import SwitCh from "@/components/SwitCh.vue";
import LandingContent from "@/components/LandingContent.vue";

import FancyCursor from "@/fancy/FancyCursor.vue";
import FancyMouseIcon from "@/fancy/FancyMouseIcon.vue";

const WikiPedia = defineAsyncComponent(() =>
  import("@/components/WikiPedia.vue")
);

const { switchState, setSwitchState } = inject("store");

console.log("📦 fancy VUE components");
console.log(version);
</script>

<template>
  <div>

    <div class="switch">
      <SwitCh :isOn="switchState" @click="setSwitchState" />
    </div>

    <Transition name="fade" mode="out-in">
      <section v-if="!switchState">
        <LandingContent />
      </section>
      <section v-else>
        <FancyMouseIcon class="mouse-icon" />
        <FancyCursor />
        <Transition name="fade" mode="out-in">
          <Suspense>
            <template #default>
              <WikiPedia />
            </template>
            <template #fallback>
              <PreLoader />
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

  </div>
</template>

<style scoped>
.mouse-icon {
  position: fixed;
  height: 100vh;
  top: 0px;
  bottom: 0px;
  right: 1rem;
  display: flex;
  align-items: center;
}

.github {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
}

.switch {
  position: fixed;
  top: 1rem;
  left: 1rem;
}
</style>
