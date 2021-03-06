import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/workshop',
    name: 'Workshop',
    // route level code-splitting
    // this generates a separate chunk (workshop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "workshop" */ '../views/Workshop.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (workshop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "workshop" */ '../views/Shop.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
