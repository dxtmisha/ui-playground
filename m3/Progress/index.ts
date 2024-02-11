import { type App, type Plugin } from 'vue'

import M3Progress from './M3Progress.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3Progress', M3Progress)
  }
} as Plugin

export {
  M3Progress
}
