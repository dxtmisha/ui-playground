import { forEach } from '../../../functions/data.ts'

import { Properties } from '../properties/Properties.ts'
import { PropertiesFile } from '../properties/PropertiesFile.ts'
import { PropertiesItems } from '../properties/PropertiesItems.ts'
import { PropertiesScss } from '../properties/PropertiesScss.ts'

import { StylesTool } from './StylesTool.ts'

import { StylesRoot } from './StylesRoot.ts'
import { StylesClasses } from './StylesClasses.ts'

import { EXTENSION_STYLE_FILE, NAME_CONSTRUCTOR } from '../../../types/property.ts'

const FILE_VAR = 'vars'
const FILE_CLASS = 'classes'
const FILE_PROPERTIES = 'properties'

const DIR_CLASS = 'classes'

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
  make (): this {
    this.getByDesigns((
      design,
      items
    ) => {
      this.initRoot(design, items)
      this.initClasses(design, items)
      this.initProperties(design, items)
    })

    return this
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
      EXTENSION_STYLE_FILE
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
    const {
      data,
      classes
    } = new StylesClasses(items).init()

    forEach(classes, (item, name) => {
      PropertiesFile.write(
        [...StylesTool.getDir(design), DIR_CLASS],
        name,
        StylesTool.join(item),
        EXTENSION_STYLE_FILE
      )
    })

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_CLASS,
      StylesTool.join(data),
      EXTENSION_STYLE_FILE
    )

    return this
  }

  protected initProperties (
    design: string,
    items: PropertiesItems
  ): this {
    const scss = new PropertiesScss(items)

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_PROPERTIES,
      scss.get(),
      EXTENSION_STYLE_FILE
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
        if (design !== NAME_CONSTRUCTOR) {
          callback(
            design,
            new PropertiesItems(properties).setFocusDesign(design)
          )
        }
      })
  }
}
