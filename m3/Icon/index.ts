import { type App, type Plugin } from 'vue'

import M3Icon from './M3Icon.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Icon', M3Icon)
  }
} as Plugin

export {
  M3Icon
}
