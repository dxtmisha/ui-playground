import { type App, type Plugin } from 'vue'

import DesignComponent from './DesignComponent.vue'

// :wiki [!] System label / Системная метка
// :wiki [!] System label / Системная метка

const DesignComponentPlugin: Plugin = {
  install (app: App) {
    app.component('DesignComponent', DesignComponent)
  }
}

export {
  DesignComponent,
  DesignComponentPlugin
}
