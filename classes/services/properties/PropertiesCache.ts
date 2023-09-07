import { toArray } from '../../../functions/object.ts'

import { PropertiesFile } from './PropertiesFile.ts'

import {
  type PropertyPath,
  type PropertySystem,
  type PropertyValue
} from '../../../types/property.ts'

const CACHE_STATUS = true
const DIR_CACHE = ['cache']
const FILE_SYSTEM = 'system'

/**
 * Processing for storing temporary files.<br>
 * Обработка для хранения временных файлов.
 */
export class PropertiesCache {
  /**
   * System data for file version control.
   * This array stores the time of the last launch and the list of files that were read.<br>
   * Системные данные для контроля версии файла.
   * В этом массиве хранится время последнего запуска и список файлов, которые были прочитаны.
   */
  static system: PropertySystem = {
    time: 0,
    files: {},
    sizes: {}
  }

  /**
   * The name of the cache, by which the names of the files are stored during the execution of
   * the script for saving the cache.<br>
   * Имя кэша, по которому сохраняются названия файлов во время выполнения скрипта для сохранения кэша.
   */
  static listenerName: string[] = ['global']

  /**
   * Checks if there are files to read.<br>
   * Проверяет наличие файлов для чтения.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static is (
    path: PropertyPath,
    name: string,
    extension = 'json'
  ): boolean {
    return PropertiesFile.is(this.getPathName(path, name, extension))
  }

  /**
   * Reads data from the cache or updates the cache if the data is outdated.<br>
   * Читает данные из кэша или обновляет кэш, если данные устарели.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param callback if the file is not found, the callback function is called and
   * its result is saved in the current file /<br>если файл не найден, вызывается функция
   * обратного вызова (callback) и её результат сохраняется в текущем файле
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static get<T extends PropertyValue> (
    path: PropertyPath,
    name: string,
    callback?: () => T,
    extension = 'json'
  ): T {
    if (
      CACHE_STATUS &&
      this.is(path, name, extension) &&
      this.isBySystem(name)
    ) {
      return this.read(path, name, extension)
    }

    if (callback) {
      this.listenerName.push(name)

      const value = callback()
      this.write(path, name, value, extension)

      this.listenerName.pop()
      this.writeSystem()

      return value
    }

    return {} as T
  }

  /**
   * Checks if there are updated files.<br>
   * Проверяет, есть ли обновленные файлы.
   * @param name the name of the cache /<br>название кэша
   */
  private static isBySystem (name = 'global'): boolean {
    let update = false

    if (name in this.system.files) {
      this.system.files[name].forEach(path => {
        if (PropertiesFile.stat(path)?.mtimeMs > this.system.time) {
          update = true
          this.console(`Modified file: ${name} - ${path}`)
        }
      })
    }

    return !update
  }

  /**
   * Returns the path to the file.<br>
   * Возвращает путь к файлу.
   * @param path path to the file /<br>путь к файлу
   */
  private static getPath (path: PropertyPath): string[] {
    return [PropertiesFile.getRoot(), ...DIR_CACHE, ...toArray(path)]
  }

  /**
   * Returns the full path to the file.<br>
   * Возвращает полный путь к файлу.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  private static getPathName (
    path: PropertyPath,
    name: string,
    extension = 'json'
  ): string[] {
    return this.getPath([
      ...toArray(path),
      PropertiesFile.getFileName(name, extension)
    ])
  }

  /**
   * Reads the content of the file.<br>
   * Читает содержимое файла.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  private static read<R> (
    path: PropertyPath,
    name: string,
    extension = 'json'
  ): R {
    return PropertiesFile.readFile<R>(this.getPathName(path, name, extension))
  }

  /**
   * Writing data to a file.<br>
   * Запись данных в файл.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param value values for storage /<br>значения для хранения
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  private static write<T extends PropertyValue> (
    path: PropertyPath,
    name: string,
    value: T,
    extension = 'json'
  ): void {
    PropertiesFile.write(this.getPath(path), name, value, extension)
  }

  /**
   * Updates the system data and writes them. Executes after saving the cache.<br>
   * Обновляет системные данные и записывает их. Выполняется после сохранения кэша.
   */
  private static writeSystem (): void {
    if (this.listenerName.length < 2) {
      this.system.time = new Date().getTime()

      this.write([], FILE_SYSTEM, this.system)
      this.console('Writes the system data')
    }
  }

  /**
   * Adding a new message to the console.<br>
   * Добавление нового сообщения в консоли.
   * @param text text of the message /<br>текст сообщения
   */
  private static console (text: string): void {
    console.info('[Cache]', text)
  }

  static {
    if (this.is([], FILE_SYSTEM)) {
      this.system = this.read<PropertySystem>([], FILE_SYSTEM)
    }
  }
}
