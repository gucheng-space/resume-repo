<script setup lang="ts">
import type { EChartsCoreOption, ECharts } from "echarts/core";
import { echarts } from "@/plugins";

interface Props {
  options: EChartsCoreOption | null;
  autoResize?: boolean;
  delay?: number;
  size?: { width: string; height: string };
}

const props = withDefaults(defineProps<Props>(), {
  size: () => ({ width: "100%", height: "500px" }),
  autoResize: true,
  delay: 200,
});

const el = ref<HTMLDivElement>();
let chart: ECharts | null = null;
const showLoading = computed(() => !props.options);

let timer: number | null = null;
function onResize() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => chart?.resize(), props.delay);
}

function setOption(opt: EChartsCoreOption, notMerge: boolean = false) {
  chart?.setOption(opt, { notMerge });
}

function init() {
  if (!el.value) return;
  chart = echarts.init(el.value);
  if (props.options) setOption(props.options);
  if (props.autoResize) {
    window.addEventListener("resize", onResize);
  }
}

watch(
  () => props.options,
  (newVal) => {
    if (!newVal) return;
    if (!chart) init();
    else setOption(newVal);
  },
  { deep: true, immediate: true }
);

onMounted(() => nextTick(init));

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  chart?.dispose();
});
</script>

<template>
  <div class="pos-relative" :style="{ ...size }">
    <div ref="el" :style="{ ...size }"></div>
    <div v-if="showLoading" class="pos-absolute inset-0">
      <slot name="loading">
        <div class="text-center w-full h-full flex justify-center items-center">
          <svg class="circular" viewBox="25 25 50 50">
            <circle
              class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.circular {
  width: 42px;
  height: 42px;
  animation: rotate 2s linear infinite;

  .path {
    stroke: #409eff;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
  }
  .loading-text {
    margin-top: 8px;
    font-size: 14px;
    color: #666;
  }
}
</style>
