import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Admin from "../pages/admin/Admin.vue";
import Products from "../pages/admin/Products.vue";
import ProductCreate from "../pages/admin/ProductCreate.vue";
import ProductEdit from "../pages/admin/ProductEdit.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/products",
        component: Products,
        name: "Products",
      },
      {
        path: "/products/create",
        component: ProductCreate,
        name: "ProductCreate",
      },
      {
        path: "/products/:id/edit",
        component: ProductEdit,
        name: "ProductEdit",
        props: true, // id we will be getting as a props
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
