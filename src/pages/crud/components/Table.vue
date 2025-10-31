<script setup lang="ts">
import { useTableStore } from "@/stores/useTable";
import type { TableItem } from "@/types/crud";

interface Props {
  data: TableItem[];
}
const props = defineProps<Props>();

const col = [
  { prop: "name", label: "Name", fixed: true, width: 150 },
  { prop: "date", label: "Date", width: 150 },
  { prop: "address", label: "Address", width: 150 },
];

const tableStore = useTableStore();
</script>
<template>
  <el-table class="w-full" :data="props.data">
    <el-table-column
      v-for="v in col"
      :key="v.prop"
      :prop="v.prop"
      :label="v.label"
      :width="v.width"
      :fixed="v.fixed"
    />
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="() => tableStore.deleteItem(scope.$index)"
        >
          删除
        </el-button>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
