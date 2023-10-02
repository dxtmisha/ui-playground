import { PropertiesFile } from '../properties/PropertiesFile.ts'
import { PropertiesItems } from '../properties/PropertiesItems.ts'

import { Properties } from '../properties/Properties.ts'
import { StylesTool } from './StylesTool.ts'

import { StylesRoot } from './StylesRoot.ts'
import { StylesClasses } from './StylesClasses.ts'

const FILE_VAR = 'vars'
const FILE_CLASS = 'classes'

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

  /**
   * Generating all basic data.<br>
   * Генерация всех базовых данных.
   */
  init () {
    this.getByDesigns((
      design,
      items
    ) => {
      this.initRoot(design, items)
      this.initClasses(design, items)
    })
  }

  /**
   * Generating basic variables.<br>
   * Генерация базовых переменных.
   * @param design design name /<br>название дизайна
   * @param items current element /<br>текущий элемент
   */
  protected initRoot (
    design: string,
    items: PropertiesItems
  ): this {
    const data = StylesTool.join(new StylesRoot(items).init())

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_VAR,
      data,
      'scss'
    )

    return this
  }

  /**
   * Generating all base classes.<br>
   * Генерация всех базовых классов.
   * @param design design name /<br>название дизайна
   * @param items current element /<br>текущий элемент
   */
  protected initClasses (
    design: string,
    items: PropertiesItems
  ): this {
    const data = StylesTool.join(new StylesClasses(items).init())

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_CLASS,
      data,
      'scss'
    )

    return this
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
}
