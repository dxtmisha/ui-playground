import requireFs from 'fs'
import requirePath from 'path'

import { isFilled, transformation } from '../../../functions/data.ts'
import { toKebabCase } from '../../../functions/string.ts'
import { toArray } from '../../../functions/object.ts'

import { PropertyPath, PropertyValue } from '../../../types/property.ts'

export class PropertiesFile {
  /**
   * Initializing root path.<br>
   * Инициализация корневого пути.
   */
  private static initRoot () {
    if (this.module) {
      return __dirname.replace(/node_modules.*?$/, '')
    } else {
      return this.joinPath([__dirname, '..', '..', '..'])
    }
  }

  /**
   * Returns the path to the directory, removing the file name from the path.<br>
   * Возвращает путь к директории, убрав название файла из пути.
   * @param path path to the file /<br>путь к файлу
   */
  static getPathDir (path: PropertyPath): string {
    if (this.isDir(path)) {
      return this.joinPath(path)
    } else {
      return requirePath.dirname(this.joinPath(path))
    }
  }

  /**
   * Reads the contents of the directory.<br>
   * Читает содержимое директории.
   * @param path path to the directory /<br>путь к директории
   */
  static readDir (path: PropertyPath): string[] {
    return this.is(path) ? requireFs.readdirSync(this.joinPath(path)) : []
  }
}
