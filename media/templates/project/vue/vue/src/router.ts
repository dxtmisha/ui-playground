import { createWebHistory, type RouterOptions } from 'vue-router'

const routes: RouterOptions['routes'] = []

export const router: RouterOptions = {
  history: createWebHistory('/'),
  routes
}
