import { type App, type Plugin } from 'vue'

import M3Input from './M3Input.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Input', M3Input)
  }
} as Plugin

export {
  M3Input
}
