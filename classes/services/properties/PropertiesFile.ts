import { isFilled, transformation } from '../../../functions/data.ts'
import { toKebabCase } from '../../../functions/string.ts'
import { toArray } from '../../../functions/object.ts'

import requireFs from 'fs'
import requirePath from 'path'

import {
  type PropertyFileValue,
  type PropertyPath
} from '../../../types/property.ts'

/**
 * A class for working with files.<br>
 * Класс для работы с файлами.
 */
export class PropertiesFile {
  static root: string
  static module: boolean

  /**
   * The fs.existsSync() method is used to synchronously check if a file already
   * exists in the given path or not. It returns a boolean value which indicates
   * the presence of a file.<br>
   * Метод fs.existsSync() используется для синхронной проверки наличия файла в
   * указанном пути. Он возвращает логическое значение, которое указывает на
   * наличие файла.
   * @param path it holds the path of the file that has to be checked /<br>
   * это содержит путь к файлу, который необходимо проверить
   */
  static is (path: PropertyPath): boolean {
    return requireFs.existsSync(this.joinPath(path))
  }

  /**
   * Determines whether the package is connected as a module.<br>
   * Определяет, является ли пакет подключенным как модуль.
   */
  static isModule (): boolean {
    return this.module
  }

  /**
   * Checks whether it is a directory.<br>
   * Проверяет, является ли это директорией.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  static isDir (path: PropertyPath): boolean {
    return !this.joinPath(path).match(/\.\w+$/)
  }

  /**
   * Returns the root path.<br>
   * Возвращает корневой путь.
   */
  static getRoot (): string {
    return this.root
  }

  /**
   * Returns the file name.<br>
   * Возвращает имя файла.
   * @param name element name /<br>название элемента
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static getFileName (
    name: string,
    extension = 'json'
  ): string {
    if (isFilled(extension)) {
      return `${toKebabCase(name)}.${extension}`
    } else {
      return name
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
   * The path.joinPath() method joins all given path segments together using the
   * platform-specific separator as a delimiter, then normalizes the resulting path.<br>
   * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
   * специфического для платформы разделителя в качестве разделителя,
   * а затем нормализует полученный путь.
   * @param path a sequence of path segments /<br>последовательность сегментов пути
   */
  static joinPath (path: PropertyPath): string {
    return requirePath.join(...toArray(path))
  }

  /**
   * Getting the path to the file by its name and the path to the directory.<br>
   * Получение пути к файлу по его названию и пути к директории.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static joinPathByName (
    path: PropertyPath,
    name: string,
    extension = 'json'
  ): string {
    return this.joinPath([...toArray(path), this.getFileName(name, extension)])
  }

  /**
   * Method returns an object whose properties represent significant elements of the path.<br>
   * Метод возвращает объект, свойства которого представляют существенные элементы пути.
   * @param path filename /<br>имя файла
   */
  static parse (path: PropertyPath): requirePath.ParsedPath {
    return requirePath.parse(this.joinPath(path))
  }

  /**
   * Getting information about the file.<br>
   * Получение информации о файле.
   * @param path path to the file /<br>путь к файлу
   */
  static stat (path: PropertyPath): requireFs.Stats {
    if (this.is(path)) {
      return requireFs.statSync(this.joinPath(path))
    } else {
      return {
        mtimeMs: 0,
        size: 0
      } as requireFs.Stats
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

  /**
   * Returns the contents of the path.<br>
   * Возвращает содержимое пути.
   * @param path filename /<br>имя файла
   */
  static readFile<R> (path: PropertyPath): R | undefined {
    if (this.is(path)) {
      return transformation(
        requireFs.readFileSync(this.joinPath(path)).toString()
      )
    }

    return undefined
  }

  /**
   * Writing data to a file.<br>
   * Запись данных в файл.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param value values for storage /<br>значения для хранения
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static write<T extends PropertyFileValue> (
    path: PropertyPath,
    name: string,
    value: T,
    extension = 'json'
  ): void {
    this.createDir(path)

    requireFs.writeFileSync(
      this.joinPathByName(path, name, extension),
      typeof value === 'object' ? JSON.stringify(value) : value
    )
  }

  /**
   * Synchronously creates a directory.<br>
   * Синхронно создает директорию.
   * @param path path to the directory /<br>путь к директории
   */
  private static createDir (path: PropertyPath): void {
    const dir: string[] = [this.root]

    this.splitForDir(this.removeRootInPath(path)).forEach(name => {
      dir.push(name)
      if (!this.is(dir)) {
        requireFs.mkdirSync(this.joinPath(dir))
      }
    })
  }

  /**
   * The method splits the path into an array of components.<br>
   * Метод разбивает путь на массив компонентов.
   * @param path path to the directory /<br>путь к директории
   */
  private static splitForDir (path: PropertyPath): string[] {
    const dir = this.isDir(path) ? path : this.parse(path)?.dir
    return (this.joinPath(dir || '')).split(requirePath.sep)
  }

  /**
   * Removing root from the path.<br>
   * Удаление root из пути.
   * @param path path to the directory /<br>путь к директории
   * @private
   */
  private static removeRootInPath (path: PropertyPath): string {
    return this.joinPath(path).replace(`${this.root}${requirePath.sep}`, '')
  }

  static {
    this.module = !!__dirname.match('node_modules')
    this.root = this.module
      ? __dirname.replace(/node_modules.*?$/, '')
      : this.joinPath([__dirname, '..', '..', '..'])
  }
}
