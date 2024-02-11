import { type App, type Plugin } from 'vue'

import C2Button from './C2Button.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('C2Button', C2Button)
  }
} as Plugin

export {
  C2Button
}
