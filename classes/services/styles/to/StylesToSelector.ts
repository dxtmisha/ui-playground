import { PropertiesTool } from '../../properties/PropertiesTool.ts'

import { StylesToAbstract } from './StylesToAbstract.ts'

/**
 * Class for generating data for sub property styles.<br>
 * Класс для генерация данный для под свойство стили.
 */
export class StylesToSelector extends StylesToAbstract {
  /**
   * Method for converting data into a style structure.<br>
   * Метод преобразования данных в структуру стиля.
   */
  protected treatment (): string[] {
    return [
      `${this.getSelector()} {`,
      ...this.content(),
      '}'
    ]
  }

  /**
   * Getting the name of the class of a component.<br>
   * Получение названия класса у компонента.
   */
  private getClassName (): string {
    const {
      design,
      component
    } = this.property

    return `'${PropertiesTool.getClassName(design, component)}'`
  }

  /**
   * Returns a string for a selector.<br>
   * Возвращает строку для селектора.
   */
  private getSelector (): string {
    const name = this.getName()

    switch (name) {
      case 'disabled':
      case 'readonly':
        return `@include ${name}(${this.getClassName()})`
      case 'active':
      case 'focus':
      case 'hover':
        return `@include enabledSelector(${name}, ${this.getClassName()})`
      default:
        return `&:${name}`
    }
  }
}
