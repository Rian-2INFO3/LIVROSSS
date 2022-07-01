import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditorasView from "../views/EditorasView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import AutorView from "../views/AutorView.vue";
import LivroView from "../views/LivroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Início",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "Categoria",
      component: CategoriasView,
    },

    {
      path: "/editoras",
      name: "Editora",
      component: EditorasView,
    },
    {
      path: "/autores",
      name: "Autores",
      component: AutorView,
    },
    {
      path: "/livros",
      name: "Livros",
      component: LivroView
    },
  ],
});

export default router;
