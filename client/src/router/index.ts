import { createRouter, createWebHistory } from 'vue-router'
import AboutMePage from '../pages/AboutMePage.vue'
import HomePage from '../pages/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMePage
    },
    {
      path: '/github-repos',
      name: 'githubrepospage',
      component: () => import('../pages/GithubReposPage.vue')
    },
    {
      path: '/db-repos',
      name: 'dbrepospage',
      component: () => import('../pages/DbReposPage.vue')
    },
    {
      path: '/login',
      name: 'loginpage',
      component: () => import('../pages/LoginPage.vue')
    }
  ]
})

export default router
