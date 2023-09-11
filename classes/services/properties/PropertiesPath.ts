import { replaceRecursive } from '../../../functions/object.ts'
import { toKebabCase } from '../../../functions/string.ts'

import { PropertiesFile } from './PropertiesFile.ts'
import { PropertiesCache } from './PropertiesCache.ts'

import {
  type PropertyList,
  type PropertyListOrData
} from '../../../types/property.ts'

export type PropertyPathItem = {
  design: string
  paths: string[][]
}

export type PropertyPathList = PropertyPathItem[]

const DIR_CACHE = 'read'

/**
 * Class for working with paths by the given name of the design.<br>
 * Класс для работы с путями по заданному названию дизайна.
 */
export class PropertiesPath {
  private readonly paths: PropertyPathList

  /**
   * Constructor
   * @param designs list of design names corresponding to folder names /<br>
   * список названий дизайнов, соответствующих названиям папок
   */
  constructor (
    private designs: string[]
  ) {
    this.paths = []

    designs.forEach(design => {
      this.paths.push({
        design: toKebabCase(design),
        paths: this.getDir(design)
      })
    })
  }

  /**
   * Returns the names of available designs.<br>
   * Возвращает названия доступных дизайнов.
   */
  getDesigns (): string[] {
    return this.designs
  }

  /**
   * Gets a list of available paths to the file of global component settings.<br>
   * Получает список доступных путей к файлу глобальных настроек компонента.
   * @param name design name /<br>название дизайна
   */
  getPath (name: string): PropertyPathItem | undefined {
    return this.paths.find(item => item.design === name)
  }

  /**
   * Processes all token values for the selected design and combines them into one-big array.<br>
   * Обрабатывает все значения токена у выбранного дизайна и соединяет их в одну-большую массива.
   * @param name name of the group /<br>названия группы
   * @param design design name /<br>название дизайна
   * @param callback function for processing /<br>функция для обработки
   */
  to (
    name: string,
    design: string,
    callback: (path: string[], design: string) => PropertyList
  ): PropertyListOrData | undefined {
    return PropertiesCache.get<PropertyListOrData>([DIR_CACHE, name], `${name}-${design}`, () => {
      let data = {}

      this.getPath(design)?.paths.forEach(path => {
        data = replaceRecursive(data, callback(path, design))
      })

      return data
    })
  }

  /**
   * Processes all token values for all designs and combines them into one-big array.<br>
   * Обрабатывает все значения токена у всех дизайнов и соединяет их в одну-большую массива.
   * @param name name of the group /<br>названия группы
   * @param callback function for processing /<br>функция для обработки
   */
  toAll (
    name: string,
    callback: (path: string[], design: string) => PropertyList
  ): PropertyListOrData | undefined {
    return PropertiesCache.get<PropertyListOrData>([DIR_CACHE], name, () => {
      let data = {}

      this.designs.forEach(design => {
        data = replaceRecursive(data, this.to(name, design, callback))
      })

      return data
    })
  }

  /**
   * Returns the path to a file by design name.<br>
   * Возвращает путь к файлу по названию дизайна.
   * @param name design name /<br>название дизайна
   */
  private getDir (name: string): string[][] {
    const path = this.getDirByName(name)
    const root = PropertiesFile.getRoot()

    if (PropertiesFile.isModule()) {
      return [
        [root, path],
        [root, 'src', 'components', path],
        [__dirname, '..', '..', '..', path]
      ]
    } else {
      return [
        [root, path]
      ]
    }
  }

  /**
   * Getting the directory name by its name.<br>
   * Получение названия директории по его имени.
   * @param name design name /<br>название дизайна
   */
  private getDirByName (name: string) {
    return name === 'd' ? 'constructors' : name
  }
}
