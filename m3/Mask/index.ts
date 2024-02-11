import { type App, type Plugin } from 'vue'

import M3Mask from './M3Mask.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Mask', M3Mask)
  }
} as Plugin

export {
  M3Mask
}
