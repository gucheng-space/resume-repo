import type { TableItem } from "@/types/crud";
import { ElMessage } from "element-plus";

export const useTableStore = defineStore("table", () => {
  const tableRef = ref<TableItem[] | undefined>();
  const editing = ref<TableItem | undefined>();
  const isEditing = computed(() => !!editing.value);
  const loading = ref(false);
  const visible = ref(false);

  const getTableData = async () => {
    loading.value = true;
    try {
      await new Promise((r) => setTimeout(r, 500));
      const data = [
        {
          id: "0",
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "1",
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ];
      tableRef.value = data;
    } finally {
      loading.value = false;
    }
  };

  const deleteItem = (index: number) => {
    tableRef.value?.splice(index, 1);
  };

  const addItem = (item: TableItem) => {
    try {
      tableRef.value?.unshift(item);
    } catch (error) {
      ElMessage.error(String(error));
    }
  };

  const updataItem = (item: TableItem) => {
    if (!tableRef.value) return ElMessage.error("没有数据");
    const idx = tableRef.value.findIndex((t) => t.id === item.id);
    if (idx > -1) {
      tableRef.value[idx] = item;
    } else {
      ElMessage.error("未找到该记录");
    }
  };

  const updataEditing = (item: TableItem | undefined) => {
    editing.value = item;
  };

  const updataVisible = (v: boolean) => {
    visible.value = v;
  };
  return {
    tableRef,
    loading,
    isEditing,
    visible,
    editing,
    updataVisible,
    updataEditing,
    getTableData,
    deleteItem,
    addItem,
    updataItem,
  };
});
