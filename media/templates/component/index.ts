import { type App, type Plugin } from 'vue'

import DesignComponent from './DesignComponent.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

export default {
  install (app: App) {
    app.component('DesignComponent', DesignComponent)
  }
} as Plugin

export {
  DesignComponent
}
