<script setup lang="ts">
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

const props = defineProps<{
  modelValue: boolean;
  row?: TableItem;
}>();

const emit = defineEmits<{
  "update:modelValue": [v: boolean];
  save: [dto: TableItem];
}>();

const form = reactive<TableItem>({ id: "", name: "", date: "", address: "" });
watch(
  () => props.row,
  (r) => Object.assign(form, r ?? { id: "", name: "", date: "", address: "" }),
  { immediate: true }
);

function confirm() {
  emit("save", { ...form });
}
</script>

<template>
  <el-dialog
    :title="row ? '编辑' : '新增'"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <el-form :model="form">
      <el-form-item v-for="v in config" :label="v.label" :label-width="v.width">
        <el-input v-model="form[v.data]" autocomplete="off" /> </el-form-item
    ></el-form>
    <template #footer>
      <el-button @click="$emit('update:modelValue', false)">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </template>
  </el-dialog>
</template>
