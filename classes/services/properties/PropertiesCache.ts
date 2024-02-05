import { toArray } from '../../../functions/object.ts'

import {
  PropertiesFile,
  type PropertiesFilePath,
  type PropertiesFileValue
} from './PropertiesFile.ts'

const DIR_CACHE = ['cache']
const DIR_STEP = ['step']
const FILE_SYSTEM = 'system'

type PropertiesCacheList = Record<string, string[]>
type PropertiesCacheSystem = {
  time: number,
  files: PropertiesCacheList,
  sizes: PropertiesCacheList
}

/**
 * Processing for storing temporary files.<br>
 * Обработка для хранения временных файлов.
 */
export class PropertiesCache {
  private static time = 0
  private static readonly files: PropertiesCacheList = {}
  private static readonly sizes: PropertiesCacheList = {}
  private static readonly listenerName: string[] = ['global']

  /**
   * Reads data from the cache or updates the cache if the data is outdated.<br>
   * Читает данные из кэша или обновляет кэш, если данные устарели.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param callback if the file is not found, the callback function is called
   * and its result is saved in the current file /<br>
   * если файл не найден, вызывается функция обратного вызова (callback) и её
   * результат сохраняется в текущем файле
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static get<T extends PropertiesFileValue> (
    path: PropertiesFilePath,
    name: string,
    callback: () => T,
    extension = 'json'
  ): T {
    if (
      this.is(path, name, extension) &&
      this.isBySystem(name)
    ) {
      return this.readFile<T>(path, name, extension) as T
    }

    this.listenerName.push(name)

    const value = callback()
    this.writeFile(path, name, value, extension)

    this.listenerName.pop()
    this.writeSystem()

    return value
  }

  /**
   * Returns the content of the file by the specified path.<br>
   * Возвращает содержимое файла по указанному пути.
   * @param path filename /<br>имя файла
   */
  static read<R> (path: PropertiesFilePath): R | undefined {
    if (PropertiesFile.is(path)) {
      const value = PropertiesFile.joinPath(path)

      this.listenerName.forEach(name => {
        if (!(name in this.files)) {
          this.files[name] = [value]
        } else if (this.files[name].indexOf(value) === -1) {
          this.files[name].push(value)
        }
      })
    }

    return PropertiesFile.readFile<R>(path)
  }

  /**
   * Saves intermediate data.<br>
   * Сохраняет промежуточные данные.
   * @param name file name /<br>название файла
   * @param value values for storage /<br>значения для хранения
   */
  static write<T extends PropertiesFileValue> (name: string, value: T): void {
    this.writeFile<T>(DIR_STEP, name, value)
  }

  /**
   * Clear cached data.<br>
   * Очистить кешированные данные.
   */
  static clear (): void {
    PropertiesFile.removeDir(this.getPath([]))
  }

  /**
   * Checks if there are files to read.<br>
   * Проверяет наличие файлов для чтения.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  private static is (
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): boolean {
    return PropertiesFile.is(this.getPathName(path, name, extension))
  }

  /**
   * Checks if there are updated files.<br>
   * Проверяет, есть ли обновленные файлы.
   * @param name the name of the cache /<br>название кэша
   */
  private static isBySystem (name = 'global'): boolean {
    let notUpdate = true

    if (name in this.files) {
      this.files[name].forEach(path => {
        const stat = PropertiesFile.stat(path)

        if (stat && stat.mtimeMs > this.time) {
          notUpdate = false
          this.console(`Modified file: ${name}, ${path}`)
        }
      })
    }

    return notUpdate
  }

  /**
   * Returns the path to the file.<br>
   * Возвращает путь к файлу.
   * @param path path to the file /<br>путь к файлу
   */
  private static getPath (path: PropertiesFilePath): string[] {
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
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): string[] {
    return PropertiesFile.getPathFile(this.getPath(path), name, extension)
  }

  /**
   * Reads the content of the file.<br>
   * Читает содержимое файла.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  private static readFile<R> (
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): R | undefined {
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
  private static writeFile<T extends PropertiesFileValue> (
    path: PropertiesFilePath,
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
      this.time = new Date().getTime()

      const data: PropertiesCacheSystem = {
        time: this.time,
        files: this.files,
        sizes: this.sizes
      }

      this.writeFile([], FILE_SYSTEM, data)
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
    const system = this.readFile<PropertiesCacheSystem>([], FILE_SYSTEM)

    if (system) {
      this.time = system.time
      Object.assign(this.files, system.files)
      Object.assign(this.sizes, system.sizes)
    }
  }
}
