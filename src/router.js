import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Homepage from '@/views/Homepage/Index.vue'
import Shuping from '@/views/Shuping/Index.vue'
import Search from '@/views/Search/Index.vue'
import Column from '@/views/Column/Index.vue'
import Article from '@/views/Article/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/shuping',
      name: 'shuping',
      component: Shuping
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/column',
      name: 'column',
      component: Column
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})
