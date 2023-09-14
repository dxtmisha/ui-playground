import { forEach, isFilled, isObject } from '../../../functions/data.ts'
import { replaceRecursive } from '../../../functions/object.ts'

import { PropertiesFile } from './PropertiesFile.ts'
import { PropertiesCache } from './PropertiesCache.ts'

import { PropertiesStandard } from './PropertiesStandard.ts'

import {
  PropertyKey,
  type PropertyList,
  type PropertyListOrData,
  type PropertyPath
} from '../../../types/property.ts'

/**
 * Class for working with external files, which adds them to the current list of properties.<br>
 * Класс для работы с внешними файлами, который подключает их к текущему списку свойств.
 */
export class PropertiesImport {
  /**
   * Constructor
   * @param properties array with all property records / массив со всеми записями свойств
   * @param root path to the directory / путь к директории
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private properties: PropertyList,
    private root: string[]
  ) {
  }

  /**
   * Method that adds external files to the current property.<br>
   * Метод подключает внешние файлы к текущему свойству.
   * @param properties An array that needs to be transformed /<br>
   * Массив, который нужно преобразовать
   * @param root path to the directory /<br>путь к директории
   */
  to (
    properties: PropertyList = this.properties,
    root: string[] = this.root
  ) {
    let data: PropertyList = {}

    forEach(properties, (item, name) => {
      if (
        item?.[PropertyKey.type] === 'file' &&
        typeof item?.value === 'string'
      ) {
        const path = this.getPath(root, item.value)
        const read = this.read(path)

        if (isFilled(read)) {
          data = replaceRecursive(data, this.to(
            PropertiesStandard.to(read),
            [PropertiesFile.getPathDir(path)]
          ))
        }
      } else if (
        isFilled(item?.value) &&
        isObject(item.value) &&
        !Array.isArray(item.value)
      ) {
        data = replaceRecursive(data, {
          [name]: {
            ...item,
            value: this.to(item.value, root)
          }
        } as PropertyList)
      } else {
        data = replaceRecursive(data, { [name]: item })
      }
    })

    return data
  }

  /**
   * Returns the path to the file.<br>
   * Возвращает путь к файлу.
   * @param root path to the directory /<br>путь к директории
   * @param value object with data /<br>объект с данными
   */
  private getPath (root: string[], value: string): string[] {
    return [
      ...root,
      ...value.split('/')
    ]
  }

  /**
   * Reads a file or an entire directory.<br>
   * Читает файл или всю директорию.
   * @param path path to file /<br>путь к файлу
   */
  private read (path: PropertyPath): PropertyListOrData | undefined {
    if (PropertiesFile.isDir(path)) {
      return this.readByDir(path)
    } else {
      return PropertiesCache.read<PropertyListOrData>(path)
    }
  }

  /**
   * Reads a directory.<br>
   * Читает директорию.
   * @param path path to file /<br>путь к файлу
   */
  private readByDir (path: PropertyPath): PropertyListOrData {
    const files = PropertiesFile.readDir(path)
    const data: PropertyListOrData = {}

    files?.sort()
    files?.forEach(file => {
      const parse = PropertiesFile.parse(file)

      if (parse.ext === '.json') {
        data[parse.name] = PropertiesCache.read<PropertyListOrData>([...path, file]) ?? {}
      }
    })

    return data
  }
}
