import { type App, type Plugin } from 'vue'

import M3Checkbox from './M3Checkbox.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Checkbox', M3Checkbox)
  }
} as Plugin

export {
  M3Checkbox
}
