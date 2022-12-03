import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import havePermission from '@/services/auth'

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
    path: '/premium',
    name: 'premium',
    component: () => import('@/views/PremiumPage.vue'),
  },
  {
    path: '/trails',
    name: 'trails',
    component: () => import('@/views/trailsPage.vue'),
  },
  {
    path: '/admin/registerTrails',
    name: 'registerTrails',
    component: () => import('@/views/Admin/registerTrails.vue'),
    beforeEnter: havePermission('Super')
    
  },
  {
    path: '/trilhas',
    name: 'All Trails',
    component: () => import('@/views/allTrails.vue'),
  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
