import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Searchers from './pages/Searchers.vue'
import Rookies from './pages/Rookies.vue'
import Terms from './pages/Terms.vue'
import Privacy from './pages/Privacy.vue'
import Signup from './pages/Signup.vue'

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
    },
    {
      path: '/rookies',
      component: Rookies
    },
    {
      path: '/terms',
      component: Terms
    },
    {
      path: '/privacy',
      component: Privacy
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
})

export default router
