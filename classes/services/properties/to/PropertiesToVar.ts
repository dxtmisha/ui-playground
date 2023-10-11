import { toCamelCase } from '../../../../functions/string.ts'

import { type PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

const REG_VAR = /\{([^{}]+)}/ig

/**
 * A class for working with custom properties in CSS.<br>
 * Класс для работы с пользовательским свойством в CSS.
 */
export class PropertiesToVar extends PropertiesToAbstract {
  protected FILE_CACHE = '020-var'
  protected type = PropertyType.var

  protected init (): void {
    this.items.findVariable(this.type).forEach(property => {
      const {
        design,
        component,
        value,
        item
      } = property

      if (
        component &&
        typeof value === 'string' &&
        value !== ''
      ) {
        const fullValue = item?.[PropertyKey.css] ?? this.items.getLinkToValue(design, component, value)

        item[PropertyKey.name] = this.getName(property)
        item[PropertyKey.css] = this.toValue(
          this.toCalculator(fullValue), item?.[PropertyKey.default]
        )

        if (item?.[PropertyKey.important]) {
          item[PropertyKey.css] += ' !important'
        }
      }
    })
  }

  /**
   * Name transformation for the var type.<br>
   * Преобразование имени для типа var.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   * @param parents array of all ancestor properties along the tree from the top level /<br>
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  protected getName ({
    design,
    component,
    name,
    item,
    parents
  }: PropertiesItemsItem): string {
    if (component && item?.[PropertyKey.fullName]) {
      return `--${this.items.getLink(design, component, name, '-')}`
    }

    return `--${this.items.getParentsName(parents, [PropertyType.var]).join('-')}-${toCamelCase(name)}`
  }

  /**
   * Checks if the value has a mathematical expression.<br>
   * Проверяет, есть ли у значения математическое выражение.
   * @param value values to process /<br>значения для преобразования
   */
  protected toCalculator (value: string): string {
    if (
      value.match(/([+*/]|(?<![\w-])-(?![\w-]))/ig) &&
      value.match(/calc/ig) === null
    ) {
      return `calc(${value})`
    }

    return value
  }

  /**
   * Returns the transformed pointer.<br>
   * Возвращает преобразованный указатель.
   * @param {string} value values to process /<br>значения для преобразования
   */
  protected toLink (value: string): string {
    return this.items.getKeys(value).join('-')
  }

  /**
   * Transformation to the CSS property.<br>
   * Преобразование в свойство CSS.
   * @param value values to process /<br>значения для преобразования
   * @param defaultValue default values /<br>значения по умолчанию
   */
  protected toValue (value: string, defaultValue?: PropertyItem['_default']): string {
    if (value.match('{')) {
      return value.replace(REG_VAR, (...text) => {
        if (defaultValue && typeof defaultValue === 'string') {
          return `var(--${this.toLink(text[1])}, ${this.toValue(this.toCalculator(defaultValue))})`
        }

        return `var(--${this.toLink(text[1])})`
      })
    }

    return value
  }
}
