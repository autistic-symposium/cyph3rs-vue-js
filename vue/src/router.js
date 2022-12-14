import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Searchers from './pages/Searchers.vue'
import Learn from './pages/Learn.vue'
import About from './pages/About.vue'
import Careers from './pages/Careers.vue'
import Terms from './pages/Terms.vue'
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
      path: '/project',
      component: Projects
    },
    {
      path: '/searcher',
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
      path: '/careers',
      component: Careers
    },
    {
      path: '/terms',
      component: Terms
    },
    {
      path: '/privacy',
      component: Privacy
    }
  ]
})

export default router
