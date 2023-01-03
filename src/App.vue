<template>
  <div class="hc"> <img src="@/assets/media/house.svg" width="24" /> Host <strong>Central</strong></div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.hc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  vertical-align: middle;
  align-items: center;
}

.hc img {
  margin-bottom: .4rem;
  margin-right: .4rem;
}

.hc strong {
  margin-left: .3rem;
}

body,
html {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  overflow-x: hidden !important;
  margin: 0px;
  padding: 0px;
  font-weight: 400;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  border: 0 !important;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -user-drag: none;
}

* {
  scrollbar-width: auto;
  scrollbar-color: #a6a6a65a #ffffff;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #a6a6a65a;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
