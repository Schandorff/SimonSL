import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      breadcrumb: 'Home',
    },
    children: [{
        path: '/projects',
        name: 'projects',
        component: Projects,
        meta: {
          breadcrumb: 'Projects',
        }
      },
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          breadcrumb: 'About',
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
          breadcrumb: 'Contact',
        }
      },
      {
        path: '/projects/:id',
        name: 'project',
        component: Project,
        meta: {
          breadcrumb: ':id',
        }
      }
    ]
  }]
})