import Vue from 'vue';
import VueRouter from "vue-router";
import axios from "axios";
import store from "./store";

Vue.use(VueRouter);
const baseURL = "https://webdev-api.loftschool.com";
const guard = axios.create({
  baseURL
});

const routes = [
  {
    path: "/login",
    component: () => import("./components/login/login.vue"),
    meta: {
      public: true
    }
  },
  {
    path: "/",
    component: () => import("./components/about/about.vue"),
    meta: {
      title: "Блок Обо мне"
    }
  },
  {
    path: "/works",
    component: () => import("./components/works/works.vue"),
    meta: {
      title: "Блок Работы"
    }
  },
  {
    path: "/comments",
    component: () => import("./components/comments/comments.vue"),
    meta: {
      title: "Блок Отзывы"
    }
  }
];

const router = new VueRouter({routes});

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];

  if (isPublicRoute == false && isUserLogged == false) {
    const token = localStorage.getItem("token");

    guard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      const response = await guard.get("/user");
      store.commit("user/SET_USER", response.data.user);
      next();
    } catch (error) {
      router.replace("/login");
      localStorage.removeItem("token");
    }
  } else {
    next();
  }
})

export default router;