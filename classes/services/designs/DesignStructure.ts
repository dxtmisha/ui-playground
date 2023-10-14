import { toCamelCase, toCamelCaseFirst, toKebabCase } from '../../../functions/string.ts'

import { PropertiesFile } from '../properties/PropertiesFile.ts'
import { PropertiesCache } from '../properties/PropertiesCache.ts'

import { DesignStructureRead } from './DesignStructureRead.ts'

import {
  type DesignStructureList
} from '../../../types/design.ts'

const DIR_NAME = 'structure'

/**
 * Class for processing structured components.<br>
 * Класс для обработки структурированных компонентов.
 */
export class DesignStructure {
  protected readonly design: string
  protected readonly component: string

  protected items: DesignStructureList

  constructor (path: string)
  constructor (design: string, component: string)
  /**
   * Constructor
   * @param pathDesign design name /<br>название дизайна
   * @param component component name /<br>название компонента
   */
  constructor (
    pathDesign: string,
    component?: string
  ) {
    if (pathDesign && component) {
      this.design = toKebabCase(pathDesign)
      this.component = toCamelCase(component)
    } else {
      const dirs = PropertiesFile.splitForDir(pathDesign)

      this.design = toKebabCase(dirs[dirs.length - 2])
      this.component = toCamelCase(dirs[dirs.length - 1])
    }

    this.items = this.make()
  }

  /**
   * Getting all data from the structure.<br>
   * Получение всех данных из структуры.
   */
  get (): DesignStructureList {
    return this.items
  }

  /**
   * Returns the name of the component.<br>
   * Возвращает название компонента.
   */
  getComponentName (): string {
    return this.component
  }

  /**
   * Returns the name of the component with a capital letter.<br>
   * Возвращает название компонента с заглавной буквой.
   */
  getComponentNameFirst (): string {
    return toCamelCaseFirst(this.component)
  }

  /**
   * Returns the name of the cache file. It contains all processed properties.<br>
   * Возвращает название файла для кэша.
   * Это полный массив со всеми обработанными свойствами.
   */
  protected getPathName (): string {
    return `${this.design}-${this.component}`
  }

  /**
   * Data generation.<br>
   * Генерация данных.
   */
  protected make (): DesignStructureList {
    return PropertiesCache.get<DesignStructureList>(
      [DIR_NAME],
      this.getPathName(),
      () => {
        return new DesignStructureRead(
          this.design,
          this.component
        ).get()
      }
    )
  }
}
