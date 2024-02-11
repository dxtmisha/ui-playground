import { type App, type Plugin } from 'vue'

import C1Icon from './C1Icon.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('C1Icon', C1Icon)
  }
} as Plugin

export {
  C1Icon
}
