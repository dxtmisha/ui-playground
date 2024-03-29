import { PropertiesFile } from '../properties/PropertiesFile'

import { ComponentsItems } from './ComponentsItems'

import {
  COMPONENTS_DIR,
  COMPONENTS_FILE
} from '../../../types/components'

/**
 * Class for creating a file with a list of components.<br>
 * Класс для создания файла со списком компонентов.
 */
export class ComponentsList {
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
   * Creates files with a list of components.<br>
   * Создает файлы со списком компонентов.
   */
  make (): this {
    this.makeComponents()
    return this
  }

  /**
   * Creates a file with a list of components for the selected design.<br>
   * Создает файл со списком компонентов для выбранного дизайна.
   */
  protected makeComponents (): this {
    const components = this.items.getComponentList()

    const imports: string[] = []
    const list: string[] = []
    const json: any[] = []

    components.forEach(({
      design,
      codeFull,
      dir
    }) => {
      imports.push(`import { ${codeFull} } from './../${design}/${dir}'`)
      list.push(`  ${codeFull}`) // : import('./../${design}/${dir}')
      json.push({
        name: codeFull,
        path: `${design}/${dir}`
      })
    })

    PropertiesFile.write(
      [COMPONENTS_DIR],
      COMPONENTS_FILE,
      [
        '// This file is generated by a script, do not edit.',
        '// Этот файл генерируется скриптом, не редактировать.',
        '',
        ...imports,
        '',
        'export const components = {',
        list.join(',\r\n'),
        '}',
        ''
      ].join('\r\n'),
      'ts'
    )

    PropertiesFile.write(
      [COMPONENTS_DIR],
      COMPONENTS_FILE,
      json,
      'json'
    )

    return this
  }
}
