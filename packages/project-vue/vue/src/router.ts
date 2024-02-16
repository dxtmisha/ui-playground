import { createWebHistory, type RouterOptions } from 'vue-router'
import { Translate } from 'ui'

import CcMain from './components/CcMain.vue'
import CcAbout from './components/CcAbout.vue'
import CcShop from './components/CcShop.vue'

const routes: RouterOptions['routes'] = [
  {
    name: Translate.getSync('main'),
    component: CcMain,
    path: '/'
  },
  {
    name: Translate.getSync('about'),
    component: CcAbout,
    path: '/about'
  },
  {
    name: Translate.getSync('shop'),
    component: CcShop,
    path: '/shop'
  }
]

export const router: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
}
