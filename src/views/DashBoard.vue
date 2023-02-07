<template>
  <mark @click="router.push('/user')" class="is-fixed-r">dashboard</mark>
  <h1 @click="router.push('/greeting')">ir a greeee</h1>
</template>

<script setup>
import router from "@/router";
</script>

<style scoped>
h1 {
  margin-top: 15rem;
}
</style>
