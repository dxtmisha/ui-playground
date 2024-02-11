import { type App, type Plugin } from 'vue'

import M2Icon from './M2Icon.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M2Icon', M2Icon)
  }
} as Plugin

export {
  M2Icon
}
