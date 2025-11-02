<script setup lang="ts">
import type { EChartsCoreOption } from "echarts/core";
import ECharts from "./components/ECharts.vue";
import echartApi from "@/api/echart.api";

const option = ref<EChartsCoreOption | null>(null);
onMounted(async () => {
  option.value = await echartApi.loadData();
});
</script>

<template>
  <ECharts :options="option" />
</template>
