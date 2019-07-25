import Vue from 'vue'
import Router from 'vue-router'

import Editor from 'components/editor/editor'

Vue.use(Router)

const HomePage = () => import('components/home-page/home-page')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
    },
    {
      path:'/editor/:id',
      name:'editor',
      component:Editor
    }
  ],
  linkActiveClass:'active'
})
