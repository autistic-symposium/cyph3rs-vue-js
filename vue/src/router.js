import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Searchers from './pages/Searchers.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/searchers',
      component: Searchers
    }
  ]
})

export default router
