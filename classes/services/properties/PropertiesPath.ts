import { forEach } from '../../../functions/data.ts'
import { toKebabCase } from '../../../functions/string.ts'
import { getColumn, replaceRecursive } from '../../../functions/object.ts'

import { PropertiesFile } from './PropertiesFile.ts'
import { PropertiesCache } from './PropertiesCache.ts'

import {
  type PropertyList,
  type PropertyRoot,
  type PropertyRootItem,
  type PropertyRootPath
} from '../../../types/property.ts'

const DIR_CACHE = 'read'
const FILE_NAME = 'properties.json'

/**
 * Class for working with paths by the given name of the design.<br>
 * Класс для работы с путями по заданному названию дизайна.
 */
export class PropertiesPath {
  private readonly root: PropertyRoot

  /**
   * Constructor
   * @param designs list of design names corresponding to folder names /<br>
   * список названий дизайнов, соответствующих названиям папок
   */
  constructor (designs: string[]) {
    this.root = []

    designs.forEach(design => {
      this.root.push({
        design: toKebabCase(design),
        paths: this.makeInfo(this.makePaths(design))
      })
    })
  }

  /**
   * Returns the names of available designs.<br>
   * Возвращает названия доступных дизайнов.
   */
  getDesigns (): string[] {
    return getColumn(this.root, 'design') as string[]
  }

  /**
   * Gets a list of available paths to the file of global component settings.<br>
   * Получает список доступных путей к файлу глобальных настроек компонента.
   * @param name design name /<br>название дизайна
   */
  getPath (name: string): PropertyRootItem | undefined {
    return this.root.find(item => item.design === name)
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
    callback: (item: PropertyRootPath, design: string) => PropertyList
  ) {
    return PropertiesCache.get([DIR_CACHE, name], `${name}-${design}`, () => {
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
    callback: (item: PropertyRootPath, design: string) => PropertyList
  ) {
    return PropertiesCache.get([DIR_CACHE], name, () => {
      let data = {}

      this.getDesigns().forEach(design => {
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
  private makePaths (name: string): string[][] {
    const path = name === 'd' ? 'constructors' : name
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
   * Getting the context of the path and file separation.<br>
   * Получение контекста разделения пути и файла.
   * @param paths list of available paths /<br>список доступных путей
   */
  private makeInfo (paths: string[][]): PropertyRootPath[] {
    return forEach(paths, path => ({
      dir: path,
      file: FILE_NAME,
      full: [...path, FILE_NAME]
    }))
  }
}
