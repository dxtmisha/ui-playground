import { type App, type Plugin } from 'vue'

import M3Scrollbar from './M3Scrollbar.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Scrollbar', M3Scrollbar)
  }
} as Plugin

export {
  M3Scrollbar
}
