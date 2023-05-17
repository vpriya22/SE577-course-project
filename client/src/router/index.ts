import { createRouter, createWebHistory } from 'vue-router'
import AboutMePage from '../pages/AboutMePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'aboutme',
      component: AboutMePage
    },
    {
      path: '/p1',
      name: 'repospage',
      component: () => import('../pages/ReposPage.vue')
    },
    {
      path: '/p2',
      name: 'repodetailspage',
      component: () => import('../pages/RepoDetailsPage.vue')
    },
    {
      path: '/login',
      name: 'loginpage',
      component: () => import('../pages/LoginPage.vue')
    }
  ]
})

export default router
