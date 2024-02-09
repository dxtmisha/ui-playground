import type { App } from 'vue'
import { forEach } from '../functions/data.ts'

import * as components from './components.ts'

/**
 * Registration of all components.<br>
 * Регистрация всех компонентов.
 */
export const registrationUiComponents = {
  install: (app: App<Element>): void => {
    forEach(components, (component, name) => {
      app.component(name, component)
    })
  }
}
