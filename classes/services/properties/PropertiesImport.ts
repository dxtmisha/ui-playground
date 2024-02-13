import { forEach, isFilled, isObjectNotArray } from '../../../functions/data'
import { replaceRecursive } from '../../../functions/object'

import { PropertiesFile, type PropertiesFilePath } from './PropertiesFile'
import { PropertiesCache } from './PropertiesCache'
import { PropertiesTypes } from './PropertiesTypes'

import { PropertiesConvector } from './PropertiesConvector'
import { PropertiesStandard } from './PropertiesStandard'

import {
  PropertyKey,
  type PropertyList,
  type PropertyListOrData,
  PropertyType
} from '../../../types/property'

/**
 * Class for working with external files, which adds them to the current list of properties.<br>
 * Класс для работы с внешними файлами, который подключает их к текущему списку свойств.
 */
export class PropertiesImport {
  /**
   * Constructor
   * @param properties array with all property records /<br>массив со всеми записями свойств
   * @param root path to the directory /<br>путь к директории
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
    properties = this.properties,
    root = this.root
  ) {
    let data: PropertyList = {}

    forEach(properties, (item, name) => {
      if (
        typeof item.value === 'string' &&
        PropertiesTypes.isInType(item[PropertyKey.type], [PropertyType.file])
      ) {
        const {
          path,
          link
        } = this.initLink(root, item.value)
        const read = this.readByLink(this.read(path), link)

        if (isFilled(read)) {
          PropertiesConvector.to(read)

          data = replaceRecursive(data, this.to(
            PropertiesStandard.to(read),
            [PropertiesFile.getPathDir(path)]
          ))
        }
      } else if (isObjectNotArray(item.value)) {
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
   * Generates the path to the file and prepares entries in the tree to go through.<br>
   * Генерирует путь к файлу и подготавливает записи в дереве, по которому надо пройтись.
   * @param root path to the directory /<br>путь к директории
   * @param value object with data /<br>объект с данными
   */
  private initLink (root: string[], value: string) {
    const link = value.split('#', 2)

    return {
      path: this.getPath(root, link[0]),
      link: link?.[1]
    }
  }

  /**
   * Reads a file or an entire directory.<br>
   * Читает файл или всю директорию.
   * @param path path to file /<br>путь к файлу
   */
  private read (path: PropertiesFilePath): PropertyListOrData | undefined {
    if (PropertiesFile.isDir(path)) {
      return this.readByDir(path)
    }

    return PropertiesCache.read<PropertyListOrData>(path) ?? {}
  }

  /**
   * Reads the file and leaves the data only along the selected path.<br>
   * Читает файл и оставляет данные только по выделенному пути.
   * @param read read data /<br>прочитанные данные
   * @param link the path to the entry that needs to be used /<br>путь к записи, который надо использовать
   */
  private readByLink (
    read: PropertyListOrData | undefined,
    link?: string
  ): PropertyListOrData | undefined {
    let data = read

    if (data && link) {
      for (const name of link.split('.')) {
        if (name in data) {
          data = data[name]
        } else {
          return undefined
        }
      }
    }

    return data
  }

  /**
   * Reads a directory.<br>
   * Читает директорию.
   * @param path path to file /<br>путь к файлу
   */
  private readByDir (path: PropertiesFilePath): PropertyListOrData {
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
