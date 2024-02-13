import { toCamelCase, toCamelCaseFirst, toKebabCase } from '../../../functions/string'

import { PropertiesFile } from '../properties/PropertiesFile'
import { PropertiesCache } from '../properties/PropertiesCache'

import { DesignStructureRead } from './DesignStructureRead'
import { DesignStructureClasses } from './DesignStructureClasses'
import { DesignStructureStyles } from './DesignStructureStyles'

import {
  DesignStructureClassesList,
  type DesignStructureList
} from '../../../types/design'

const DIR_NAME = 'structure'
const FILE_CLASSES = 'classes'

/**
 * Class for processing structured components.<br>
 * Класс для обработки структурированных компонентов.
 */
export class DesignStructure {
  protected readonly design: string
  protected readonly component: string

  protected items?: DesignStructureList
  protected itemsClasses?: DesignStructureClassesList
  protected itemsStyles?: string[]

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
  }

  /**
   * Getting all data from the structure.<br>
   * Получение всех данных из структуры.
   */
  get (): DesignStructureList {
    if (this.items === undefined) {
      this.items = this.make()
    }

    return this.items
  }

  /**
   * Obtaining a list of subclasses from a structure.<br>
   * Получение списка подклассов из структуры.
   */
  getClasses (): DesignStructureClassesList {
    if (this.itemsClasses === undefined) {
      this.itemsClasses = this.makeClasses()
    }

    return this.itemsClasses
  }

  /**
   * Returns all styles from tokens.<br>
   * Возвращает все стили из токенов.
   */
  getStyles (): string[] {
    if (this.itemsStyles === undefined) {
      this.itemsStyles = this.makeStyles()
    }

    return this.itemsStyles
  }

  /**
   * Returns the name of the design.<br>
   * Возвращает название дизайна.
   */
  getDesign (): string {
    return this.design
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
   * Returns the names of component files.<br>
   * Возвращает названия файлов компонентов.
   */
  getFileName (): string {
    return toCamelCaseFirst(this.getPathName())
  }

  /**
   * Returns the name of the cache file. It contains all processed properties.<br>
   * Возвращает название файла для кэша.
   * Это полный массив со всеми обработанными свойствами.
   */
  getPathName (): string {
    return `${this.design}-${this.component}`
  }

  /**
   * Returns the name of the file with data about the subclass.<br>
   * Возвращает название файла с данными о подклассе.
   */
  protected getPathClasses (): string {
    return `${this.getPathName()}-${FILE_CLASSES}`
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

  /**
   * Generation of data for the subclass.<br>
   * Генерация данных для подкласса.
   */
  protected makeClasses (): DesignStructureClassesList {
    return PropertiesCache.get<DesignStructureClassesList>(
      [DIR_NAME],
      this.getPathClasses(),
      () => {
        return new DesignStructureClasses(
          this.design,
          this.component
        ).get()
      }
    )
  }

  /**
   * Performing transformation of tokens into styles for the component.<br>
   * Выполнение преобразования токенов в стили для компонента.
   */
  protected makeStyles (): string[] {
    return new DesignStructureStyles(
      this.design,
      this.component
    ).get()
  }
}
