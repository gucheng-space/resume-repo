import type { TableItem } from "@/types/crud";
import http from "./http";

import { mockTable } from "@/assets/data";

export interface PageResult<T> {
  data: T[];
  total: number;
}

export interface TableListParams {
  page?: number;
  size?: number;
  search?: string;
}

const getTableList = (
  params?: TableListParams
): Promise<PageResult<TableItem>> => {
  let data = mockTable;
  if (params && params.search) {
    data = mockTable.filter((t) => t.name.includes(params.search!));
  }

  return Promise.resolve({
    data: data,
    total: data.length,
  });
};

const addTableItem = (dto: TableItem): Promise<PageResult<TableItem>> => {
  const data = [...mockTable, dto];
  return Promise.resolve({
    data: data,
    total: data.length,
  });
};

const updateTableItem = (dto: TableItem): Promise<PageResult<TableItem>> => {
  const data = mockTable;
  const idx = data.findIndex((t) => t.id === dto.id);
  if (idx > -1) data[idx] = dto;
  return Promise.resolve({
    data: data,
    total: data.length,
  });
};

const deleteTableItem = (id: string): Promise<PageResult<TableItem>> => {
  const data = mockTable.filter((t) => t.id !== id);
  return Promise.resolve({
    data: data,
    total: data.length,
  });
};

export default { getTableList, addTableItem, updateTableItem, deleteTableItem };
