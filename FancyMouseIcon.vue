<script setup>
import { ref, onMounted, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  colorA: {
    type: String,
    default: "#42b983",
  },
  colorB: {
    type: String,
    default: "#ffffff",
  },
  scrollWheelDir: {
    default: false,
  },
});

let colorA_ = ref(props.colorA);
let colorB_ = ref(props.colorB);

// mouse-wheel TimeLine instance
let mwTl = ref();

onMounted(() => {
  // initial values
  gsap.set(".mouse-wheel", {
    background: colorA_.value,
    autoAlpha: 0,
    y: 0,
  });
  gsap.set(".mouse-body", {
    background: colorB_.value,
  });

  // mouse-wheel TimeLine animation
  mwTl = gsap
    .timeline({ repeat: -1 })
    .to(".mouse-wheel", {
      duration: 0.5,
      scale: 1.9,
      autoAlpha: 1,
    })
    .to(
      ".mouse-wheel",
      {
        duration: 0.5,
        scale: 0.9,
        y: 12,
      },
      0.3
    )
    .to(".mouse-wheel", {
      autoAlpha: 0,
    })
    .to(".mouse-wheel", {
      y: 0,
      scale: 0,
    });

  //
});

let isUserScrolling = ref(props.scrollWheelDir);

watch(isUserScrolling, () => {
  if (isUserScrolling.value) {
    mwTl.reverse(0);
  } else {
    mwTl.reverse();
    mwTl.play(0);
  }
});

//
</script>

<template>
  <div class="mouse-container">
    <div class="mouse-body">
      <div class="mouse-wheel"></div>
    </div>
  </div>
</template>

<style scoped>
.mouse-container {
  margin: 3rem;
  width: 25px;
  height: 40px;
}
.mouse-body {
  display: flex;
  justify-content: center;
  height: 100%;
  border: 0.1px solid #2e2e2e44;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
}

.mouse-wheel {
  margin-top: 0.3rem;
  width: 5px;
  height: 5px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
