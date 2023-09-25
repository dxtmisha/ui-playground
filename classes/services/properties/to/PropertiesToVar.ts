import { isFilled } from '../../../../functions/data.ts'
import { toKebabCase } from '../../../../functions/string.ts'

import { PropertiesItems, type PropertiesItemsItem } from '../PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

const REG_VAR = /\{([^{}]+)}/ig

const FILE_CACHE = '020-var'

/**
 * A class for working with custom properties in CSS.<br>
 * Класс для работы с пользовательским свойством в CSS.
 */
export class PropertiesToVar {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.findVariable(PropertyType.var).forEach(({
      design,
      component,
      name,
      value,
      item,
      parents
    }) => {
      if (
        component &&
        typeof value === 'string' &&
        isFilled(value)
      ) {
        const fullValue = item?.[PropertyKey.css] || this.items.getLink(design, component, value)

        item[PropertyKey.name] = this.getName(
          design,
          component,
          name,
          item,
          parents
        )

        item[PropertyKey.css] = this.toValue(
          this.toCalculator(fullValue), item?.[PropertyKey.default]
        )

        if (item?.[PropertyKey.important]) {
          item[PropertyKey.css] += ' !important'
        }
      }
    })

    this.items.write(FILE_CACHE)
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
  private getName (
    design: string,
    component: string,
    name: string,
    item: PropertyItem,
    parents: PropertiesItemsItem['parents']
  ): string {
    if (item?.[PropertyKey.fullName]) {
      return `--${this.items.getLink(design, component, name, '-')}`
    }

    return `--${this.items.getParentsName(parents, [PropertyType.var]).join('-')}-${name}`
  }

  /**
   * Checks if the value has a mathematical expression.<br>
   * Проверяет, есть ли у значения математическое выражение.
   * @param value values to process /<br>значения для преобразования
   */
  private toCalculator (value: string): string {
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
  private toLink (value: string): string {
    return toKebabCase(
      value.replace(/\./ig, '-')
    )
  }

  /**
   * Transformation to the CSS property.<br>
   * Преобразование в свойство CSS.
   * @param value values to process /<br>значения для преобразования
   * @param defaultValue default values /<br>значения по умолчанию
   */
  private toValue (value: string, defaultValue?: PropertyItem['_default']): string {
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
