<script setup>
import { inject } from "vue";
import PkgIcon from "@/components/PkgIcon.vue";
const { setSwitchState } = inject("store");
</script>

<template>
  <div>
    <p>
      <PkgIcon /> fancy <b>VUE</b> components
    </p>
    <ul>
      <li>FancyMouseIcon</li>
      <li>FancyCursor</li>
    </ul>
    <pre>work in constant progress</pre>
    <sub>i do mantain this mostly to avoid getting rusty with VUE</sub>
    <button @click.once="setSwitchState" role="button" class="button-85">
      see in action
    </button>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-height: 100vh;

  b {
    vertical-align: middle;
    display: inline-flex;
    margin-top: -0.1rem;
  }

  ul {
    margin: 0rem;
  }

  pre {
    font-weight: normal;
    padding: 0.2em 0.3em;
    margin: 0;
    font-size: 120%;
    white-space: break-spaces;
    background-color: #afb8c133;
    border-radius: 6px;
    margin: 1.5rem 0 1.5rem 0;
  }
  sub {
    font-size: .9rem;
    font-style: oblique;
    margin: 0rem;
  }
  button {
    margin-top: 2rem;
  }
}

/*

    ~ button #85
    link: https://getcssscan.com/css-buttons-examples

*/

.button-85 {
  font-family: inherit;
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
</style>
