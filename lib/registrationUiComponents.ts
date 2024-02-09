import type { App } from 'vue'

import * as components from './components.ts'

/**
 * Registration of all components.<br>
 * Регистрация всех компонентов.
 */
export const registrationUiComponents = {
  install: (app: App<Element>): void => {
    for (const component in components) {
      app.component(component, components[component])
    }
  }
}
