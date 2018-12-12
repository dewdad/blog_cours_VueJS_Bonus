import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})
