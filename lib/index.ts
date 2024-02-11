import { type App } from 'vue'

import * as components from './components.ts'

const UiComponents = {
  install (app: App) {
    for (const name in components) {
      app.use((components as any)[name])
    }
  }
}

export default UiComponents

export * from './components.ts'
