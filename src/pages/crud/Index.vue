<script setup lang="ts">
import CrudLayouts from "@/layouts/CrudLayouts.vue";
</script>

<template>
  <CrudLayouts>
    <template #header>
      <div>header</div>
    </template>
    <template #aside>
      <div>aside</div>
    </template>
    <template #main>
      <div>main</div>
    </template>
  </CrudLayouts>
</template>
