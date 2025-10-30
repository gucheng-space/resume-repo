import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "crud",
      path: "/",
      component: () => import("@/pages/crud/Index.vue"),
    },
  ],
});

export default router;
