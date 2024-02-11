import { type App, type Plugin } from 'vue'

import M3Window from './M3Window.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Window', M3Window)
  }
} as Plugin

export {
  M3Window
}
