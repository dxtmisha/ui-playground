import { strFill } from '../../../functions/string.ts'

import { PropertiesTool } from '../properties/PropertiesTool.ts'

const SPACE = '  '
const DIR_STYLE = 'styles'

/**
 * CSS style processing class.<br>
 * Класс с базовыми функциями для обработки стилей.
 */
export class StylesTool {
  /**
   * Getting a directory to store a file.<br>
   * Получение директории для хранения файла.
   * @param design design name /<br>название дизайна
   */
  static getDir (design: string): string[] {
    return [PropertiesTool.getDirByName(design), DIR_STYLE]
  }

  /**
   * Returns a space.<br>
   * Возвращает пробел
   */
  static getSpace (): string {
    return SPACE
  }

  /**
   * Getting an indent.<br>
   * Получение отступа.
   * @param level level /<br>уровень
   */
  static addSpace (level: number): string {
    return strFill(SPACE, level)
  }

  /**
   * Код строки для импорта файла.<br>
   * Code line for file import.
   * @param path path to the file /<br>путь к файлу
   */
  static addImport (path: string): string {
    return `@import "${path}";`
  }

  /**
   * Getting a reference to a base function.<br>
   * Получение ссылки на базовую функцию.
   * @param path path to the file /<br>путь к файлу
   */
  static addImportProperties (path: string = '..'): string {
    return this.addImport(`${path}/styles/all`)
  }

  /**
   * Combines the elements of an array into one string.<br>
   * Объединяет элементы массива в одну строку.
   * @param data array containing records /<br>массив, содержащий записи
   */
  static join (data: string[]): string {
    return data.join('\r\n')
  }

  /**
   * Adding an access level.<br>
   * Добавление уровня доступа.
   * @param space space /<br>пробел
   */
  static increaseSpace (space: string): string {
    return `${space}${SPACE}`
  }

  static toFunctionCss (value: string): string {
    if (value.match(/@[a-zA-Z0-9]+\(.*?\)( |,|$)/)) {
      return value
        .replace(/@([a-zA-Z0-9]+\(.*?\))( |,|$)/g, '#{$1}$2')
    }

    return value
  }
}
