import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/DashBoard.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AuthView.vue"),
  },    
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;