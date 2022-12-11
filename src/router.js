// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

import Blog from "./components/Blog.vue";
import Login from "./components/Login.vue";
import App from "./App.vue";
import ShowPosts from "./components/ShowPosts.vue";
import Register from "./components/Register.vue";

const routes = [
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/posts",
    name: "posts",
    component: ShowPosts,
  },
  {
    path: "/",
    name: "home",
    component: ShowPosts,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router