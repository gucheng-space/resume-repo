import type { TableItem } from "@/types/crud";
import { ElMessage } from "element-plus";

export const useTableStore = defineStore("table", () => {
  const tableRef = ref<TableItem[] | undefined>();
  const loading = ref(false);

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
    if (!tableRef.value) {
      ElMessage.error("没有数据");
      return;
    }
    console.log(index);

    // const idx = tableRef.value.findIndex((t) => t.id === id);
    if (index) tableRef.value?.splice(index, 1);
  };

  return { tableRef, loading, getTableData, deleteItem };
});
