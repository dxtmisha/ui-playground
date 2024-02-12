import { App } from 'vue'

import * as components from './components'

const UiLibrary = {
  install (app: App) {
    // Auto import all components
    for (const componentKey in components) {
      app.use((components as any)[componentKey])
    }
  }
}

export default UiLibrary

// export all components as vue plugin
export * from './testComponents.ts'
