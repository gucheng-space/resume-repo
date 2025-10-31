import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    redirect: "/crud",
  },
  {
    name: "crud",
    path: "/crud",
    component: () => import("@/pages/crud/Index.vue"),
  },
  {
    name: "echarts",
    path: "/echarts",
    component: () => import("@/pages/echarts/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
