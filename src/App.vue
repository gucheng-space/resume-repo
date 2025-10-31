<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <template #header> header </template>
    <template #aside><Aside /></template>
    <template #main> <RouterView /> </template>
  </DefaultLayout>
</template>

<style scoped></style>
