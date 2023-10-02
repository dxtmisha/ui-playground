import { PropertiesTool } from '../../properties/PropertiesTool.ts'
import { type PropertiesItemsItem } from '../../properties/PropertiesItems.ts'

import { StylesTool } from '../StylesTool.ts'

import { PropertyKey } from '../../../../types/property.ts'

/**
 * Class for generating data for sub property styles.<br>
 * Класс для генерация данный для под свойство стили.
 */
export class StylesSelector {
  /**
   * Generates a sub property for the selected token variable.<br>
   * Генерирует под свойство для выбранной переменной токенов.
   * @param property current branch /<br>текущая ветка
   * @param space space /<br>пробел
   * @param content callable function for sub property /<br>вызываемая функция для под свойства
   */
  static get (
    property: PropertiesItemsItem,
    space: string,
    content: () => string[]
  ): string {
    const {
      design,
      component,
      item
    } = property
    const name = item?.[PropertyKey.name] as string
    const className = PropertiesTool.getClassName(design, component)

    return StylesTool.join([
      `${space}${this.getSelector(name, className)} {`,
      ...content(),
      `${space}}`
    ])
  }

  /**
   * Returns a string for a selector.<br>
   * Возвращает строку для селектора.
   * @param name property name /<br>название свойства
   * @param className class name /<br>названия класса
   */
  private static getSelector (name: string, className: string): string {
    switch (name) {
      case 'disabled':
      case 'readonly':
        return `@include ${name}(#{${className}})`
      case 'active':
      case 'focus':
      case 'hover':
        return `@include enabledSelector(#{${name}}, #{${className}})`
      default:
        return `&:${name}`
    }
  }
}
