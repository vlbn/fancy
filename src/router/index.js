import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/DashBoard.vue"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AuthView.vue"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
