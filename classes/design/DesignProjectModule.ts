import { PropertiesFile } from '../services/properties/PropertiesFile.ts'

import { MODULES_LIST } from '../../lib/modules.ts'

/**
 * Class for changing the path of module connection.<br>
 * Класс для изменения пути подключения модулей.
 */
export class DesignProjectModule {
  /**
   * Constructor
   * @param dirs path to the file /<br>путь к файлу
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly dirs: string[]
  ) {
  }

  make () {
    const items = PropertiesFile.readDirRecursive(this.dirs)

    items.forEach(item => {
      const path = [...this.dirs, item]
      const read = PropertiesFile.readFile<string>(path)

      if (
        read &&
        read.match(this.getRegMatch())
      ) {
        PropertiesFile.writeByPath(
          path,
          read.replace(
            this.getRegReplace(),
            (_, list, name) => {
              const items = list.replace(/([^ ]+) as ([^, ]+)/ig, '$1: $2')

              return `const{${items}=${this.getModule(name)}`
            }
          )
        )
      }
    })

    return this
  }

  /**
   * Returns the module code by its code.<br>
   * Возвращает код модуля по его коду.
   * @param name module name /<br>название модуля
   */
  private getModule (name: string): string {
    const key = name.trim()

    if (key in MODULES_LIST) {
      return `window.${MODULES_LIST[key]}`
    }

    return key
  }

  /**
   * Returns a list of links for export.<br>
   * Возвращает список ссылок для экспорта.
   */
  private getRegList (): string {
    return Object.keys(MODULES_LIST).join('|')
  }

  /**
   * Returns a regular expression to check if the data exists.<br>
   * Возвращает регулярное выражение для проверки наличия данных.
   */
  private getRegMatch (): RegExp {
    return new RegExp(`from ?"(${this.getRegList()})"`)
  }

  /**
   * Returns a regular expression to change the data.<br>
   * Возвращает регулярное выражение для изменения данных.
   */
  private getRegReplace (): RegExp {
    return new RegExp(`import ?{ ?([^}]+) ?} ?from ?"(${this.getRegList()})"`, 'ig')
  }
}
