import { toCamelCaseFirst } from '../../../functions/string'

import { PropertiesFile } from '../properties/PropertiesFile'

import { ComponentsItems } from './ComponentsItems'

import {
  COMPONENTS_DIR,
  COMPONENTS_REGISTRATION
} from '../../../types/components'

/**
 * A class for creating a connection file for all components.<br>
 * Класс для создания файла подключения всех компонентов.
 */
export class ComponentsRegistration {
  /**
   * Constructor
   * @param items object for working with the list of components /<br>объект для работы со списком компонентов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly items: ComponentsItems
  ) {
  }

  /**
   * Creating a file for connecting components.<br>
   * Создание файла для подключения компонентов.
   */
  make (): this {
    const name = `${toCamelCaseFirst(this.items.getGlobalName())}Components`

    PropertiesFile.write(
      [COMPONENTS_DIR],
      COMPONENTS_REGISTRATION,
      [
        '// This file is generated by a script, do not edit.',
        '// Этот файл генерируется скриптом, не редактировать.',
        '',
        'import { type App, type Component, createApp } from \'vue\'',
        'import { forEach } from \'../functions/data\'',
        '',
        'import { components } from \'./components\'',
        'import \'./types.d.ts\'',
        '',
        `export function registration${name} (app: App): void {`,
        '  forEach(components, (component, name) => {',
        '    app.component(name, component)',
        '  })',
        '}',
        '',
        `export function create${name}<A extends Component> (App: A) {`,
        '  const app = createApp(App)',
        '',
        `  registration${name}(app)`,
        '',
        '  return app',
        '}',
        '',
        'export * from \'./../functions/all\'',
        'export * from \'./../classes/all\'',
        ''
      ].join('\r\n'),
      'ts'
    )

    return this
  }
}
