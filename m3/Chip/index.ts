import { type App, type Plugin } from 'vue'

import M3Chip from './M3Chip.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Chip', M3Chip)
  }
} as Plugin

export {
  M3Chip
}
