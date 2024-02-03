<template>
  <div class="cursor-a cursor"></div>
  <div class="cursor-b cursor"></div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  trigger: {
    type: String,
    default: "a",
  },
  colorA: {
    type: String,
    default: "#2e2e2e",
  },
  colorB: {
    type: String,
    default: "#42b983",
  },
});

let colorA_ = ref(props.colorA);
let colorB_ = ref(props.colorB);

let fancyTl = gsap.timeline({ paused: true });

const cursorIn = () => fancyTl.play();
const cursorOut = () => fancyTl.reverse();

const cursorAttach = ($event) => {
  gsap.set(".cursor-a", {
    x: $event.clientX,
    y: $event.clientY,
  });
  gsap.set(".cursor-b", {
    x: $event.clientX,
    y: $event.clientY,
  });
  gsap.to(".cursor-a", {
    duration: 0,
    autoAlpha: 1,
    x: $event.clientX,
    y: $event.clientY,
  });
  gsap.to(".cursor-b", {
    duration: 0.9,
    autoAlpha: 1,
    x: $event.clientX,
    y: $event.clientY,
  });
};

const cursorAnimate = ($event) => {
  let iTrigger = document.querySelectorAll(props.trigger);
  for (let i = 0; i < iTrigger.length; i++) {
    iTrigger[i].addEventListener("mouseover", cursorIn);
    iTrigger[i].addEventListener("mouseout", cursorOut);
    iTrigger[i].addEventListener("click", cursorOut);
    iTrigger[i].addEventListener("mousedown", cursorOut);
  }
  gsap.set(iTrigger, {
    zIndex: "1",
    position: "relative",
  });
};

onMounted(() => {

  gsap.set("html", {
    cursor: "none",
  });

  window.addEventListener("mousemove", cursorAttach);
  window.addEventListener("mouseover", cursorAnimate);

  fancyTl = gsap
    .timeline()
    .to(".cursor-a", {
      duration: 0.1,
      scale: 0,
    })
    .to(
      ".cursor-b",
      {
        duration: 0,
        zIndex: "2",
      },
      ">"
    )
    .to(
      ".cursor-b",
      {
        scale: 1.9,
        duration: 0.4,
        ease: "bounce",
      },
      ">"
    )
    .reverse();

});

onBeforeUnmount(() => {

  gsap.set("html", {
    cursor: "default",
  });

  gsap.to(".cursor-b, .cursor-a", {
    duration: 0,
    scale: 0,
    autoAlpha: 0,
  });

  window.removeEventListener("mousemove", cursorAttach);
  window.removeEventListener("mouseover", cursorAnimate);

});

</script>

<style scoped>
.cursor {
  opacity: 0;
  position: fixed;
  border-radius: 100%;
  pointer-events: none;
}

.cursor-a {
  background-color: v-bind(colorA_);
  width: 10px;
  height: 10px;
  left: -5px;
  top: -5px;
  z-index: 2;
}

.cursor-b {
  background-color: v-bind(colorB_);
  width: 30px;
  height: 30px;
  left: -15px;
  top: -15px;
  z-index: 1;
  mix-blend-mode: multiply;
}
</style>
