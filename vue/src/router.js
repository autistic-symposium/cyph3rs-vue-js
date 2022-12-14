import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Searchers from './pages/Searchers.vue'
import Learn from './pages/Learn.vue'
import Terms from './pages/Terms.vue'
import About from './pages/About.vue'
import Careers from './pages/Careers.vue'
import Privacy from './pages/Privacy.vue'

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
      path: '/learn',
      component: Learn
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/privacy',
      component: Privacy
    },
    {
      path: '/terms',
      component: Terms
    },
    {
      path: '/careers',
      component: Careers
    }
  ]
})

export default router
