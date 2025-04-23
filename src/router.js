import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Search from "@/views/Search.vue";
import Contact from "@/views/Contact.vue";
import Cauldron from "@/views/Cauldron.vue"; 

const routes = [
  { 
    path: "/", 
    component: Home,
    meta: { title: "Home" }
  },
  { 
    path: "/about", 
    component: About,
    meta: { title: "About" }
  },
  { 
    path: "/search", 
    component: Search,
    meta: { title: "Search" }
  },
  { 
    path: "/contact", 
    component: Contact,
    meta: { title: "Contact Us" }
  },
  { 
    path: "/cauldron", 
    component: Cauldron,
    meta: { title: "Potion Cauldron" }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;