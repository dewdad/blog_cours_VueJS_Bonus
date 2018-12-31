import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import ArticleDetail from '@/components/ArticleDetail'
import Planing from '@/components/Planning'
import Contact from '@/components/Contact'
import Aide from '@/components/Aide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/blog'
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/planing',
      name: 'Planing',
      component: Planing
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/aide',
      name: 'Aide',
      component: Aide
    }
  ]
})
