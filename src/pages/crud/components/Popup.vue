<script setup lang="ts">
import { useTableStore } from "@/stores/useTable";
import type { TableItem } from "@/types/crud";

type FormKey = "name" | "date" | "address";

const config = [
  { label: "名字", width: "140px", data: "name" },
  { label: "时间", width: "140px", data: "date" },
  { label: "地址", width: "140px", data: "address" },
] as const satisfies ReadonlyArray<{
  label: string;
  width: string;
  data: FormKey;
}>;

const tableStore = useTableStore();

const localForm = ref<TableItem>({
  id: "",
  name: "",
  date: "",
  address: "",
});
watch(
  () => tableStore.visible,
  (show) => {
    if (show) {
      Object.assign(
        localForm.value,
        tableStore.editing ?? {
          id: "",
          name: "",
          date: "",
          address: "",
        }
      );
    }
  },
  { immediate: true }
);

const handleClosed = () => {
  Object.assign(localForm.value, {
    id: "",
    name: "",
    date: "",
    address: "",
  });
};

const handleConfirm = () => {
  if (tableStore.isEditing) {
    tableStore.updataItem(localForm.value);
    handleClosed();
  } else {
    tableStore.addItem(localForm.value);
  }
  tableStore.updataVisible(false);
};
</script>

<template>
  <el-dialog
    :model-value="tableStore.visible"
    @update:model-value="tableStore.updataVisible(false)"
    @close="handleClosed"
    title="Shipping address"
  >
    <el-form :model="localForm">
      <el-form-item v-for="v in config" :label="v.label" :label-width="v.width">
        <el-input
          v-model="localForm[v.data]"
          autocomplete="off"
        /> </el-form-item
    ></el-form>
    <template #footer>
      <el-button @click="tableStore.updataVisible(false)">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </template>
  </el-dialog>
</template>
