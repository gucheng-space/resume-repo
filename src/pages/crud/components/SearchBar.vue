<script setup lang="ts">
const emit = defineEmits<{
  search: [string];
}>();

const keyword = ref("");
function handleSearch() {
  emit("search", keyword.value.trim());
}
</script>

<template>
  <div>
    <el-input
      v-model="keyword"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #prepend>
        <el-button @click="handleSearch">搜索</el-button>
      </template>
    </el-input>
  </div>
</template>
