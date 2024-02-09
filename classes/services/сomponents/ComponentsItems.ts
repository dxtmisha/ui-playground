import { toCamelCaseFirst, toKebabCase } from '../../../functions/string.ts'

import { PropertiesFile } from '../properties/PropertiesFile.ts'

import {
  COMPONENTS_EXCEPTIONS,
  type ComponentsData,
  type ComponentsList
} from '../../../types/components.ts'

import { FILE_PROPERTY } from '../../../types/property.ts'

/**
 * Class for working with the list of components.<br>
 * Класс для работы со списком компонентов.
 */
export class ComponentsItems {
  protected readonly items: ComponentsList

  /**
   * Constructor
   */
  constructor () {
    this.items = this.initItems()
  }

  /**
   * Returns the list of components divided by design groups.<br>
   * Возвращает список компонентов, разделенных по группам дизайна.
   */
  get (): ComponentsList {
    return this.items
  }

  /**
   * Returns the list of components as an array.<br>
   * Возвращает список компонентов в виде массива.
   */
  getComponentList (): ComponentsData[] {
    const list: ComponentsData[] = []

    this.items.forEach(item => list.push(...item.components))

    return list
  }

  /**
   * Returns the name of the global property.<br>
   * Возвращает название глобального свойства.
   */
  getGlobalName (): string {
    return process.env.DESIGNS_GLOBAL ?? 'UI'
  }

  /**
   * Returns the name of the main design.<br>
   * Возвращает название главного дизайна.
   */
  getDesignMain (): string {
    return process.env.DESIGNS_MAIN ?? 'design'
  }

  /**
   * Returns a list of design names.<br>
   * Возвращает список названий дизайнов.
   */
  protected getDesigns (): string[] {
    const list: string[] = []

    process.env.DESIGNS
      ?.split(',')
      ?.forEach(design => list.push(toKebabCase(design).trim()))

    return list
  }

  /**
   * Returns a list of components.<br>
   * Возвращает список компонентов.
   * @param design design names /<br>названия дизайна
   */
  protected getComponents (design: string): ComponentsData[] {
    const list: ComponentsData[] = []
    const dirs = PropertiesFile.readDir(design)

    dirs.forEach(dir => {
      if (
        PropertiesFile.is([design, dir, FILE_PROPERTY]) &&
        COMPONENTS_EXCEPTIONS.indexOf(dir) === -1
      ) {
        const name = toKebabCase(dir).trim()

        list.push({
          name,
          design,
          alias: `${design}.${name}`,
          codeFull: toCamelCaseFirst(`${design}-${name}`),
          dir
        })
      }
    })

    return list
  }

  /**
   * Initializes data about the component.<br>
   * Инициализирует данные о компоненте.
   */
  protected initItems (): ComponentsList {
    const list: ComponentsList = []

    this.getDesigns().forEach(name => {
      list.push({
        name,
        components: this.getComponents(name)
      })
    })

    return list
  }
}
