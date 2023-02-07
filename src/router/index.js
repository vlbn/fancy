import { createRouter, createWebHistory } from "vue-router";
import { ref } from "vue";

//
import { supabase } from "@/helpers/supabase.js";

//
import { useUser } from "@/composables/useUser";
const { handleState } = useUser();

//
let isConnected = ref(false);

// check for session state
await supabase.auth.onAuthStateChange((_, _session) => {
  if (!_session) {
    handleState(null);
  }
});

// fetch session state & user data
await supabase.auth.getSession().then(({ data }) => {
  console.log("getting session.." + `\n` + "data is: " + data.session);
  if (data != null) {
    const { session } = data;
    if (session) {
      handleState(session.user);
      console.log("😄");
      isConnected = true;
    } else {
      console.log("😥");
      isConnected = false;
    }
  }
});

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/DashBoard.vue"),
    meta: {
      requiresAuth: true,
      title: "Dashboard",
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AuthView.vue"),
    meta: {
      requiresAuth: false,
      title: "Conectar",
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
    meta: {
      requiresAuth: true,
      title: "Datos de Usuario",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      requiresAuth: false,
      title: "Acerca de..",
    },
  },
  {
    path: "/greeting",
    name: "greeting",
    component: () => import("@/views/GreetingView.vue"),
    meta: {
      requiresAuth: true,
      title: "Saludo",
    },
  },
  {
    path: "/preview",
    name: "preview",
    component: () => import("@/views/PreView.vue"),
    meta: {
      requiresAuth: true,
      title: "Vista previa",
    },
  },    
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      requiresAuth: false,
      title: "404",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Host Central ~ ${to.meta.title}`;
  next();
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isConnected) {
    return {
      path: "/auth",
      //query: { redirect: to.fullPath },
    };
  }
});

export default router;
