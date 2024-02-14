import { createWebHistory, type RouterOptions } from 'vue-router'

const routes: RouterOptions['routes'] = []

export const router: RouterOptions = {
  history: createWebHistory(import.meta.env?.BASE_URL ?? '/'),
  routes
}
