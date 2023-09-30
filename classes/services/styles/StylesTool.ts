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
   * Getting an indent.<br>
   * Получение отступа.
   * @param level level /<br>уровень
   */
  static addSpace (level: number): string {
    return strFill(SPACE, level)
  }

  /**
   * Getting a reference to a base function.<br>
   * Получение ссылки на базовую функцию.
   */
  static addImportProperties (): string {
    return '@import "../../styles/all";'
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
   * @param space basic values /<br>базовые значения
   */
  static increaseSpace (space: string): string {
    return `${space}${SPACE}`
  }
}
