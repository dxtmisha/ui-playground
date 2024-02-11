import { type App, type Plugin } from 'vue'

import M3Image from './M3Image.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Image', M3Image)
  }
} as Plugin

export {
  M3Image
}
