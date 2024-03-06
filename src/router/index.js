import { createRouter, createWebHistory } from "vue-router";

import LostAndFound from "@/views/LostAndFound.vue";

const routes = [
  {
    path: "/",
    name: "once upon a time",
    component: () => import("@/views/LandingView.vue"),
    meta: { transition: "fade" },
  },
  {
    path: "/:catchAll(.*)",
    name: "where do we go now?",
    component: LostAndFound,
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
