import { type App, type Plugin } from 'vue'

import C1Image from './C1Image.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('C1Image', C1Image)
  }
} as Plugin

export {
  C1Image
}
