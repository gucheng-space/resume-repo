<script setup lang="ts">
import type { TableItem } from "@/types/crud";

defineProps<{
  loading: boolean;
  data: TableItem[];
}>();

const emit = defineEmits<{
  add: [];
  edit: [row: TableItem];
  remove: [id: string];
}>();

const columns = [
  { prop: "name", label: "姓名", fixed: true, width: 150 },
  { prop: "date", label: "日期", width: 150 },
  { prop: "address", label: "地址", width: 150 },
];
</script>
<template>
  <div class="flex flex-col gap-2">
    <el-button type="primary" size="small" @click="$emit('add')"
      >新增</el-button
    >
    <el-table class="w-full" v-loading="loading" :data="data">
      <el-table-column
        v-for="v in columns"
        :key="v.prop"
        :prop="v.prop"
        :label="v.label"
        :width="v.width"
        :fixed="v.fixed"
      />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default="{ $index, row }">
          <el-popconfirm title="确定删除？" @confirm="emit('remove', row.id)">
            <template #reference>
              <el-button link type="danger">删除</el-button>
            </template>
          </el-popconfirm>
          <el-button
            link
            type="primary"
            size="small"
            @click="$emit('edit', row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
