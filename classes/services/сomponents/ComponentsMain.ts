import { toCamelCaseFirst } from '../../../functions/string.ts'

import { ComponentsItems } from './ComponentsItems.ts'

import { PropertiesFile } from '../properties/PropertiesFile.ts'

import {
  COMPONENTS_DIR,
  COMPONENTS_MAIN
} from '../../../types/components.ts'

/**
 * Class for working with the main files.<br>
 * Класс для работы с главными файлами.
 */
export class ComponentsMain {
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
   * Export data for the main file.<br>
   * Экспортировать данные для главного файла.
   */
  make (): this {
    const name = this.items.getGlobalName()

    PropertiesFile.write(
      [COMPONENTS_DIR],
      COMPONENTS_MAIN,
      [
        '// This file is generated by a script, do not edit.',
        '// Этот файл генерируется скриптом, не редактировать.',
        '',
        'import { MutationGlobal } from \'./../classes/mutation/MutationGlobal\'',
        'import { MutationGlobalRef } from \'./../classes/mutation/MutationGlobalRef.ts\'',
        '',
        'import * as functions from \'./../functions/all.ts\'',
        'import * as classes from \'./../classes/all.ts\'',
        'import { components } from \'./components.ts\'',
        '',
        'MutationGlobal.addFunctionList(functions)',
        'MutationGlobal.addClassList(classes)',
        'MutationGlobal.addComponentList(components)',
        '',
        `;(window as any).${name} = MutationGlobal`,
        `;(window as any).${name}_VUE = MutationGlobalRef`,
        '',
        `export { create${toCamelCaseFirst(name)}Components } from './create.ts'`,
        ''
      ].join('\r\n'),
      'ts'
    )

    return this
  }
}
