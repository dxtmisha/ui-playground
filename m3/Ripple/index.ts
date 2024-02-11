import { type App, type Plugin } from 'vue'

import M3Ripple from './M3Ripple.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Ripple', M3Ripple)
  }
} as Plugin

export {
  M3Ripple
}
