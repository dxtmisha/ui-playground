import { PropertyPath, PropertySystem, PropertySystemItem, PropertyValue } from '../../../types/property.ts'
import { PropertiesFile } from './PropertiesFile.ts'
import { toArray } from '../../../functions/object.ts'

const CACHE_STATUS = true
const DIR_STEP = ['step']
const DIR_COMPONENTS = ['components']
const FILE_SYSTEM = 'system'

export class PropertiesCache {
  /**
   * Retrieving cache data or updating it if the size does not match.<br>
   * Получение данных кеша или обновление его, если размер не соответствует.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param pathControl путь к файл для получения информация и проверке
   * @param callback if the file is not found, the callback function is called and its result is saved in the current file /<br>
   * если файл не найден, вызывается функция обратного вызова (callback) и её результат сохраняется в текущем файле
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static getBySize<T extends PropertyValue> (
    path: PropertyPath,
    name: string,
    pathControl: PropertyPath,
    callback?: () => T,
    extension = 'json'
  ): T {
    if (
      CACHE_STATUS &&
      this.is(path, name, extension) &&
      this.isBySize(pathControl)
    ) {
      return this.getCache(path, name, extension)
    } else if (callback) {
      const value = callback(this.readBySize(pathControl))
      this.create(path, name, value, extension)

      return value
    } else {
      return {}
    }
  }

  /**
   * Checks if the file has been changed by its size.<br>
   * Проверяет, изменен ли файл по его размеру.
   * @param path a sequence of path segments /<br>последовательность сегментов пути
   */
  private static isBySize (path: PropertyPath): boolean {
    const file = PropertiesFile.joinPath(this.getPath(path))
    const system = this.getFileItem(file)

    if (PropertiesFile.stat(file)?.size === system.size) {
      return true
    } else {
      this.console(`Updated file: ${file}`)
      return false
    }
  }

  /**
   * Returns the path to the file for system data.<br>
   * Возвращает путь к файлу для системных данных.
   * @param path path to the file /<br>путь к файлу
   */
  private static getPathItem (path: PropertyPath) {
    return PropertiesFile.joinPath(path).replace(/(\.\w+)$/, '-system$1')
  }

  /**
   * Returns technical data from a cached file.<br>
   * Возвращает технические данные у кешированного файла.
   * @param path path to the file /<br>путь к файлу
   */
  private static getFileItem (path: PropertyPath): PropertySystemItem {
    return PropertiesFile.readFile<PropertySystemItem>(
      this.getPathItem(path)
    )
  }

  /**
   * Reads the contents of the file and updates the file size label.<br>
   * Читает содержимое файла и обновляет метку размера файла.
   * @param path a sequence of path segments /<br>последовательность сегментов пути
   */
  static readBySize (path: PropertyPath) {
    const file = this.getPath(path)

    if (PropertiesFile.is(file)) {
      const read = PropertiesFile.readFile(file)
      const pathSystem = PropertiesFile.parse(this.getPathItem(file))

      PropertiesFile.write(
        [pathSystem.dir],
        pathSystem.name,
        PropertiesFile.stat(file)
      )

      return read
    }

    return undefined
  }
}
