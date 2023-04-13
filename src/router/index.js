import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projekt',
      name: 'projekt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjektView.vue')
    },
    {
      path: '/omMig',
      name: 'omMig',
      component: () => import('../views/OmmigView.vue')
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetail',
      component: () => import('../views/PortfolioDetail.vue'),
      props: true
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/KonktaktInfo.vue'),
    },
  ]
})

export default router
