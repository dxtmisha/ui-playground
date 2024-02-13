import { toCamelCase } from '../../../../functions/string'

import { PropertiesTool } from '../../properties/PropertiesTool'
import { StylesToAbstract } from './StylesToAbstract'

import { PropertyKey } from '../../../../types/property'
import { StylesTool } from '../StylesTool'

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
  'text-case',
  'paragraph-spacing',

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
export class StylesToProperty extends StylesToAbstract {
  /**
   * Acquiring full ownership.<br>
   * Получения полного свойства.
   */
  protected treatment (): string[] {
    const data: string[] = []

    if (
      this.property?.previous &&
      this.property.previous?.[PropertyKey.sort] !== this.item?.[PropertyKey.sort]
    ) {
      data.push('')
    }

    if (this.item?.[PropertyKey.varKey]) {
      data.push(this.getVar())
    }

    data.push(this.getPropertyValue())

    return data
  }

  /**
   * Generating values for variables.
   * Генерация значений для переменных.
   */
  private getVar () {
    const {
      design,
      component
    } = this.property
    const name = this.getName()
    const value = this.getValue()

    return `--${PropertiesTool.getComponentName(design, component)}-${name}: ${value};`
  }

  /**
   * Generating value for property.<br>
   * Генерация значения для свойства.
   */
  private getPropertyValue (): string {
    const name = this.getName()
    const value = this.getValue() ?? 'unset'

    if (
      this.item?.[PropertyKey.modification] !== false &&
      TYPES.indexOf(name) !== -1
    ) {
      return `@include ${toCamelCase(name)}(#{${value}});`
    }

    return `${name}: ${StylesTool.toFunctionCss(value)};`
  }
}
