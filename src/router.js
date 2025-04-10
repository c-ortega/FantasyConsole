import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Search from "@/views/Search.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/search", component: Search },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
