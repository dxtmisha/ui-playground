import { type App, type Plugin } from 'vue'

import M3Button from './M3Button.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Button', M3Button)
  }
} as Plugin

export {
  M3Button
}
