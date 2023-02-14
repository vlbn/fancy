<script setup>
import router from "@/router";
</script>

<template>
  <div class="columns m-6">
    <div class="column">1</div>
    <div class="column">2</div>
    <div class="column">3</div>
    <div class="column">4</div>
    <div class="column">5</div>
  </div>
  <button class="button-29" role="button">Loading button</button>
  <mark class="is-fixed-r">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ad laborum
      fugit quod! Necessitatibus eum consequuntur aut. Sapiente quod mollitia ullam natus,
      eum porro, excepturi est itaque veritatis quibusdam harum.
    </p>
  </mark>
  <h1 @click="router.push('/user')">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae veniam
    ratione asperiores amet illum, cupiditate nobis quod ab, soluta, quasi rerum nulla ut
    quisquam perspiciatis dolores animi quae inventore?
  </h1>
  <img src="https://picsum.photos/id/237/200/300" />
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae veniam
    ratione asperiores amet illum, cupiditate nobis quod ab, soluta, quasi rerum nulla ut
    quisquam perspiciatis dolores animi quae inventore?
  </h1>
  <h1 class="has-text-primary p-6 m-6 niceBox-8">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae veniam
    ratione asperiores amet illum, cupiditate nobis quod ab, soluta, quasi rerum nulla ut
    quisquam perspiciatis dolores animi quae inventore?
  </h1>
  <div class="m-6">
    <button class="button-82-pushable" role="button">
      <span class="button-82-shadow"></span>
      <span class="button-82-edge"></span>
      <span class="button-82-front text"> Button 82 </span>
    </button>
  </div>
  <div class="niceBox-2 p-6 m-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque illo, aut eos
    eligendi nobis maxime sapiente mollitia tempore? Eius officiis necessitatibus modi.
    Similique nihil voluptates hic qui, totam nulla?
  </div>
  <div class="m-6 niceInput-1">
    <label>
      <input type="text" placeholder="tu correo" />
    </label>
  </div>
  <div class="niceBox-3 p-6 m-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque illo, aut eos
    eligendi nobis maxime sapiente mollitia tempore? Eius officiis necessitatibus modi.
    Similique nihil voluptates hic qui, totam nulla?
  </div>
  <div class="niceBox-5 p-6 m-6">
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae veniam
      ratione asperiores amet illum, cupiditate nobis quod ab, soluta, quasi rerum nulla
      ut quisquam perspiciatis dolores animi quae inventore?
    </h1>
  </div>
  <div class="m-6"><button class="button-29" role="button">Button 29</button></div>
  <div class="m-6"><button class="button-85" role="button">Button 83</button></div>
  <div class="m-6"><button class="button-74" role="button">Button 82</button></div>
  <div class="m-6"><button class="button-49" role="button">Button 82</button></div>
  <div class="m-6"><button class="button-47" role="button">Button 82</button></div>
  <div class="niceBox-1 p-6 m-6">
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae veniam
      ratione asperiores amet illum, cupiditate nobis quod ab, soluta, quasi rerum nulla
      ut quisquam perspiciatis dolores animi quae inventore?
    </h1>
  </div>
  <div class="niceBox-7 p-6 m-6">
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae veniam
      ratione asperiores amet illum, cupiditate nobis quod ab, soluta, quasi rerum nulla
      ut quisquam perspiciatis dolores animi quae inventore?
    </h1>
  </div>

  <div class="niceBox-8 p-6 m-6">
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae veniam
      ratione asperiores amet illum, cupiditate nobis quod ab, soluta, quasi rerum nulla
      ut quisquam perspiciatis dolores animi quae inventore?
    </h1>
  </div>

  <div class="p-6 m-6">
    <div class="checkbox-wrapper-12">
      <div class="cbx">
        <input id="cbx-12" type="checkbox" />
        <label for="cbx-12"></label>
        <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
          <path d="M2 8.36364L6.23077 12L13 2"></path>
        </svg>
      </div>
    </div>
  </div>

  <div class="p-6 m-6">
    <div class="checkbox-wrapper-55">
      <label class="rocker rocker-small">
        <input type="checkbox" />
        <span class="switch-left">Yes</span>
        <span class="switch-right">No</span>
      </label>
    </div>
  </div>

  <div class="m-6 p-6">
    <div class="checkbox-wrapper-7">
      <input class="tgl tgl-ios" id="cb2-7" type="checkbox" />
      <label class="tgl-btn" for="cb2-7"></label>
    </div>
  </div>

  <div class="m-6 p-6">
    <div class="checkbox-wrapper-34">
      <input class="tgl tgl-ios" id="toggle-34" type="checkbox" />
      <label class="tgl-btn" for="toggle-34"></label>
    </div>
  </div>
</template>
