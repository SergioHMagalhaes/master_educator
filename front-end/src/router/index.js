import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: homePage
  },
  {
    path: '/signup',
    name: 'Sign up',
    component: () => import('@/views/signUp.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/trails',
    name: 'Trails',
    component: () => import('@/views/trailsPage.vue'),
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
