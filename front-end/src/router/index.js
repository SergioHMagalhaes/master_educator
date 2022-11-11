import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: homePage
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/registerPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
