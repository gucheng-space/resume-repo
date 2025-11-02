<script setup lang="ts">
import { routes } from "@/router";
const router = useRouter();
const routesWithOutRoot = routes.filter((r) => r.path !== "/");
const activeIdx = computed(() => {
  const idx = routesWithOutRoot.findIndex(
    (r) => r.path === router.currentRoute.value.path
  );
  return String(idx);
});
</script>

<template>
  <el-menu :default-active="activeIdx">
    <RouterLink v-for="(v, i) in routesWithOutRoot" :key="v.path" :to="v.path">
      <el-menu-item :index="String(i)">
        <span>
          {{ (v.name as string).toUpperCase() }}
        </span>
      </el-menu-item>
    </RouterLink>
  </el-menu>
</template>

<style scoped>
.el-menu {
  /* 覆盖 Element Plus 提供的 CSS 变量 */
  --el-menu-bg-color: transparent;
  --el-menu-border-color: transparent;
}
</style>
