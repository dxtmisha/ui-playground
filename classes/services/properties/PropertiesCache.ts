import { propertyPath } from '../../../types/property.ts'

const CACHE_STATUS = true
const DIR_CACHE = ['cache']
const DIR_STEP = ['step']
const DIR_COMPONENTS = ['components']
const FILE_SYSTEM = 'system'

export class PropertiesCache {
  /**
   * Reads data from the cache or updates the cache if the data is outdated.<br>
   * Читает данные из кэша или обновляет кэш, если данные устарели.
   * @param paths path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param callback if the file is not found, the callback function is called and
   * its result is saved in the current file /<br>если файл не найден, вызывается функция
   * обратного вызова (callback) и её результат сохраняется в текущем файле
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static get<T> (
    paths: propertyPath,
    name: string,
    callback?: () => T,
    extension = 'json'
  ): T {
    if (
      CACHE_STATUS &&
      this.is(paths, name, extension) &&
      this.__isBySystem(name)
    ) {
      return this.__getCache(paths, name, extension)
    } else if (callback) {
      this.listenerName.push(name)

      const value = callback()
      this.create(paths, name, value, extension)

      this.listenerName.pop()
      this.__writeSystem()

      return value
    } else {
      return {}
    }
  }
}
