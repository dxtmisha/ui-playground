import { isFilled } from '../../../../functions/data.ts'
import { toCamelCase } from '../../../../functions/string.ts'

import { type PropertiesItemsItem } from '../../properties/PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey
} from '../../../../types/property.ts'

export const TYPES: string[] = [
  /* Flex */
  'flex-position',
  'flex-dynamic',
  'justify-content',

  /* Position */
  'inset',
  'horizon',
  'vertically',
  'left',
  'right',
  'absolute',
  'absoluteAfter',

  /* Padding */
  'padding-x',
  'padding-y',
  'padding-left',
  'padding-right',

  /* Margin */
  'margin-x',
  'margin-y',
  'margin-left',
  'margin-right',

  /* Dimension */
  'width',
  'height',
  'width-basis',
  'height-basis',
  'aspect-ratio',
  'aspect-ratio-width',
  'aspect-ratio-height',
  'squared',
  'circle',

  /* Font */
  'font-size',
  'line-height',
  'text-align',
  'text-overflow',
  'clamp',
  'text-select-none',

  /* Color */
  'palette',
  'palette-color',
  'palette-stroke',
  'palette-background',
  'palette-fill',
  'palette-gradient',
  'palette-border',
  'color',
  'color-opacity',
  'stroke',
  'stroke-opacity',
  'background-color',
  'background-opacity',
  'background-size',
  'fill',
  'fill-opacity',
  'gradient',
  'gradient-opacity',
  'border-color',
  'border-opacity',

  /* Transform */
  'translate-x',
  'translate-y',
  'scale',
  'rotate'
]

/**
 * CSS class for converting to CSS property.<br>
 * Класс для преобразования в свойство CSS.
 */
export class StylesProperty {
  /**
   * Acquiring full ownership.<br>
   * Получения полного свойства.
   * @param property current branch /<br>текущая ветка
   * @param space space /<br>пробел
   */
  static get (
    property: PropertiesItemsItem,
    space: string
  ): string[] {
    const data: string[] = []
    const {
      design,
      component,
      item
    } = property

    if (
      component &&
      isFilled(item?.[PropertyKey.name]) &&
      isFilled(item?.[PropertyKey.css])
    ) {
      if (item?.[PropertyKey.varKey]) {
        data.push(`${space}${this.getVar(
          design,
          component,
          item
        )};`)
      }

      data.push(`${space}${this.getValue(
        item[PropertyKey.name],
        item[PropertyKey.css],
        item?.[PropertyKey.modification] ?? true
      )};`)
    }

    return data
  }

  /**
   * Generating values for variables.
   * Генерация значений для переменных.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param item current property /<br>текущее свойство
   */
  private static getVar (
    design: string,
    component: string,
    item: PropertyItem
  ) {
    return `--${design}-${component}-${item[PropertyKey.name]}: ${item[PropertyKey.css]};`
  }

  /**
   * Generating value for property.<br>
   * Генерация значения для свойства.
   * @param name base property name /<br>базовое название свойства
   * @param value current element /<br>текущий элемент
   * @param modification modify data /<br>модифицировать данные
   * @private
   */
  private static getValue (
    name: string,
    value: string,
    modification: boolean
  ): string {
    if (
      modification &&
      TYPES.indexOf(name) !== -1
    ) {
      return `@include ${toCamelCase(name)}(#{${value}})`
    }

    return `${name}: ${value}`
  }
}
