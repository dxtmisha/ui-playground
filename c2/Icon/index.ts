import { type App, type Plugin } from 'vue'

import C2Icon from './C2Icon.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('C2Icon', C2Icon)
  }
} as Plugin

export {
  C2Icon
}
