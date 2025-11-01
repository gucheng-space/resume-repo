import { tableApi } from "@/api";
import type { TableListParams } from "@/api/table.api";
import type { TableItem } from "@/types/crud";
import { ElMessage } from "element-plus";

export const useTableStore = defineStore("table", () => {
  const items = ref<TableItem[]>([]);
  const loading = ref(false);
  const pager = reactive({ page: 1, size: 10, total: 0 });

  async function loadTable(params?: TableListParams) {
    loading.value = true;
    try {
      await new Promise((r) => setTimeout(r, 500));
      const { data } = await tableApi.getTableList({ ...pager, ...params });
      if (data) items.value = data;
    } finally {
      loading.value = false;
    }
  }

  async function remove(id: string) {
    const { data } = await tableApi.deleteTableItem(id);
    items.value = data;
    ElMessage.success("已删除");
    // await loadTable();
  }

  async function add(dto: TableItem) {
    const { data } = await tableApi.addTableItem(dto);
    items.value = data;
    ElMessage.success("已添加");
    // await loadTable();
  }

  async function update(dto: TableItem) {
    const { data } = await tableApi.updateTableItem(dto);
    items.value = data;
    ElMessage.success("已更新");
    // await loadTable();
  }

  return { items, loading, pager, loadTable, remove, add, update };
});
