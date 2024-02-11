import { type App, type Plugin } from 'vue'

import M2Ripple from './M2Ripple.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M2Ripple', M2Ripple)
  }
} as Plugin

export {
  M2Ripple
}
