import { type App, type Plugin } from 'vue'

import M2Image from './M2Image.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M2Image', M2Image)
  }
} as Plugin

export {
  M2Image
}
