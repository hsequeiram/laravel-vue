import { createRouter, createWebHistory } from "vue-router";

import BlogsIndex from '../components/blogs/BlogsIndex.vue'
import BlogsDeterminantes from '../components/blogs/BlogsDeterminantes.vue'
import BlogsReglaCramer from '../components/blogs/BlogsReglaCramer.vue'
import BlogsInversaMatriz from '../components/blogs/BlogsInversaMatriz.vue'
/*
* Nota: el endpoint /home se define asi para el componente BlogsIndex
  es asi por que luego de iniciar sesión con laravel nos manda a ese endpoint
  si estan usando otro sistema de autenticacion como breeze cambiar el endpoind
  en este caso se uso laravel ui bootstrap auth y la ruta luego de iniciar sesion es /home
  si intentan poner otro endpoint no va a funcionar.
*/

const routes = [
    {
        path: '/laravel-vue/public/home',
        name: 'blogs.index',
        component: BlogsIndex
    },
    {
        path: '/laravel-vue/public/home',
        name: 'blogs.Determinantes',
        component: BlogsDeterminantes
    },
    {
        path: '/laravel-vue/public/home',
        name: 'blogs.ReglaCramer',
        component: BlogsReglaCramer
    },
    {
        path: '/laravel-vue/public/home',
        name: 'blogs.InversaMatriz',
        component: BlogsInversaMatriz
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
})