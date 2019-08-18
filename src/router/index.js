import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import Portrait from '@/components/Portrait'
import Landscape from '@/components/Landscape'
import Urban from '@/components/Urban'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/Portrait',
      name: 'Portrait',
      component: Portrait
    },
    {
      path: '/Landscape',
      name: 'Landscape',
      component: Landscape
    },
    {
      path: '/Urban',
      name: 'Urban',
      component: Urban
    }
  ]
})
