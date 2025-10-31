<script setup lang="ts">
const input = ref("");
</script>

<template>
  <div>
    <el-input
      v-model="input"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-button>搜索</el-button>
      </template>
    </el-input>
  </div>
</template>
