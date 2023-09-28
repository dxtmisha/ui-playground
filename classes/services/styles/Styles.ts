import { strFill } from '../../../functions/string.ts'

import { PropertiesTool } from '../properties/PropertiesTool.ts'
import { PropertiesFile } from '../properties/PropertiesFile.ts'
import { PropertiesItems } from '../properties/PropertiesItems.ts'

import { Properties } from '../properties/Properties.ts'
import { StylesRoot } from './StylesRoot.ts'

const SPACE = '  '
const DIR_STYLE = 'styles'

const FILE_VAR = 'vars'

/**
 * Base class for generating basic properties.<br>
 * Базовый класс для генерации базовых свойств.
 */
export class Styles {
  private readonly properties: Properties

  /**
   * Constructor
   */
  constructor () {
    this.properties = new Properties()
  }

  init () {
    this.initRoot()
  }

  /**
   * Generating basic variables.<br>
   * Генерация базовых переменных.
   */
  protected initRoot () {
    this.getByDesigns((
      design,
      items
    ) => {
      const list = new StylesRoot(items).init()
      const space = this.addSpace(1)
      const data = [
        this.addImportProperties(),
        '',
        ':root {',
        `${space}${list.join(`\r\n${space}`)}`,
        '}'
      ]

      PropertiesFile.write(this.getDir(design), FILE_VAR, data.join('\r\n'), 'scss')
    })
  }

  /**
   * Generating a list of properties from a design.<br>
   * Получение списка свойств по дизайну.
   * @param callback data processing function /<br>функция для обработки данных
   */
  private getByDesigns (callback: (design: string, items: PropertiesItems) => void): void {
    const properties = this.properties.get().get()

    this.properties
      .get()
      .getDesigns()
      .forEach(design => {
        callback(
          design,
          new PropertiesItems(properties).setFocusDesign(design)
        )
      })
  }

  /**
   * Getting a directory to store a file.<br>
   * Получение директории для хранения файла.
   * @param design design name /<br>название дизайна
   */
  private getDir (design: string): string[] {
    return [PropertiesTool.getDirByName(design), DIR_STYLE]
  }

  /**
   * Getting an indent.<br>
   * Получение отступа.
   * @param level level /<br>уровень
   */
  private addSpace (level: number): string {
    return strFill(SPACE, level)
  }

  /**
   * Getting a reference to a base function.<br>
   * Получение ссылки на базовую функцию.
   */
  private addImportProperties (): string {
    return '@import "../../styles/all";'
  }
}
