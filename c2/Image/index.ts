import { type App, type Plugin } from 'vue'

import C2Image from './C2Image.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('C2Image', C2Image)
  }
} as Plugin

export {
  C2Image
}
