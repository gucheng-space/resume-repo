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

interface Props {
  visible: boolean;
  form?: TableItem;
}
const props = defineProps<Props>();

interface Emits {
  "update:visible": [boolean];
}
const emit = defineEmits<Emits>();
const isEditing = computed(() => !!props.form);

const localForm = ref<TableItem>({
  id: "",
  name: "",
  date: "",
  address: "",
});
watch(
  () => props.visible,
  (show) => {
    if (show) {
      Object.assign(
        localForm.value,
        props.form ?? {
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

// const visible = defineModel<boolean>("visible");

const handleConfirm = () => {
  if (isEditing.value) {
    tableStore.updataItem(localForm.value);
    localForm.value = {
      id: "",
      name: "",
      date: "",
      address: "",
    };
  } else {
    tableStore.addItem(localForm.value);
  }

  emit("update:visible", false);
};
</script>

<template>
  <el-dialog
    :model-value="visible"
    @update:model-value="$emit('update:visible', false)"
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
      <el-button @click="$emit('update:visible', false)">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </template>
  </el-dialog>
</template>
