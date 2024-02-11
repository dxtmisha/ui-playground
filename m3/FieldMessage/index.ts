import { type App, type Plugin } from 'vue'

import M3FieldMessage from './M3FieldMessage.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('M3FieldMessage', M3FieldMessage)
  }
} as Plugin

export {
  M3FieldMessage
}
