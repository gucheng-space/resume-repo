<script setup lang="ts">
import { useTableStore } from "@/stores/useTable";
import Search from "./components/Search.vue";
import Table from "./components/Table.vue";

const tableStore = useTableStore();

onMounted(async () => {
  await tableStore.getTableData();
});
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4">
    <Search />
    <div v-if="tableStore.loading || !tableStore.tableRef">正在加载...</div>
    <Table v-else :data="tableStore.tableRef" />
  </div>
</template>

<style scoped></style>
