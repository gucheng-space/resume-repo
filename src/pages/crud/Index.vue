<script setup lang="ts">
import { useTableStore } from "@/stores/useTable";
import SearchBar from "./components/SearchBar.vue";
import TableView from "./components/TableView.vue";
import EditDialog from "./components/EditDialog.vue";
import type { TableItem } from "@/types/crud";

const tableStore = useTableStore();

const showDlg = ref(false);
const editingRow = ref<TableItem | undefined>();

function onSearch(params: string) {
  tableStore.loadTable({ search: params });
}

function onAdd() {
  editingRow.value = undefined;
  showDlg.value = true;
}

function onEdit(row: TableItem) {
  editingRow.value = row;
  showDlg.value = true;
}

async function onRemove(id: string) {
  await tableStore.remove(id);
}

async function onSave(dto: TableItem) {
  editingRow.value ? await tableStore.update(dto) : await tableStore.add(dto);
  showDlg.value = false;
}

onMounted(() => tableStore.loadTable());
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4">
    <SearchBar @search="onSearch" />
    <TableView
      :loading="tableStore.loading"
      :data="tableStore.items"
      @add="onAdd"
      @edit="onEdit"
      @remove="onRemove"
    />
    <EditDialog v-model="showDlg" :row="editingRow" @save="onSave" />
  </div>
</template>

<style scoped></style>
