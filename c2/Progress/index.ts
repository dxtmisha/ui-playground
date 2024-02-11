import { type App, type Plugin } from 'vue'

import C2Progress from './C2Progress.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('C2Progress', C2Progress)
  }
} as Plugin

export {
  C2Progress
}
