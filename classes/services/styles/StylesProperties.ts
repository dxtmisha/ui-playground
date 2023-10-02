import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { StylesTool } from './StylesTool.ts'

import { StylesVar } from './to/StylesVar.ts'
import { StylesProperty } from './to/StylesProperty.ts'

import { type PropertyItem, PropertyKey, PropertyType } from '../../../types/property.ts'
import { StylesSelector } from './to/StylesSelector.ts'

const TYPE_AUXILIARY = [
  'selector',
  'virtual'
]

const TYPE_BASIC = [
  'var',
  'property',
  'scss'
]

/**
 * A class for converting all property types in SCSS.<br>
 * Класс для преобразования всех тип свойство в виде scss.
 */
export class StylesProperties {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  /**
   * Generating all properties and variables.<br>
   * Генерация всех свойств и переменных.
   * @param property initial variables for processing /<br>начальные переменные для обработки
   * @param space пробелы
   * @param parent object of ancestor /<br>объект предка
   */
  init (
    property: PropertiesItemsItem,
    space: string,
    parent?: PropertyItem
  ): string[] {
    const data: string[] = []

    this.items.eachMainOnly(propertyItem => {
      if (
        this.isTypeAuxiliary(parent) &&
        this.isTypeAuxiliary(propertyItem.item) &&
        !this.isTypeBasic(property)
      ) {
        data.push(
          `${space}& {`,
          ...this.init(propertyItem, StylesTool.increaseSpace(space)),
          `${space}}`
        )
      } else {
        data.push(...this.toByType(propertyItem, space))
      }
    }, property)

    return data
  }

  /**
   * Checks if the type is one that requires a space at the beginning.<br>
   * Проверяет, является ли тип тот, для которого надо пробел поставить в начале.
   * @param item element for checking /<br>элемент для проверки
   */
  private isTypeAuxiliary (item?: PropertyItem): boolean {
    return Boolean(item && TYPE_AUXILIARY.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  /**
   * Checks if the type is a base property of variables.<br>
   * Проверяет, является ли тип базовым свойством переменных.
   * @param item element for checking /<br>элемент для проверки
   */
  private isTypeBasic (item: PropertyItem): boolean {
    return Boolean(item && TYPE_BASIC.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  /**
   * Converting a value to a string depending on the type.<br>
   * Преобразования значения в строка в зависимости от типа.
   * @param property initial variables for processing /<br>начальные переменные для обработки
   * @param space пробелы
   */
  private toByType (
    property: PropertiesItemsItem,
    space: string
  ) {
    const { item } = property
    const data: string[] = []
    const content = () => this.init(property, StylesTool.increaseSpace(space))

    switch (item?.[PropertyKey.variable]) {
      case PropertyType.var:
        data.push(...StylesVar.get(property, space))
        break
      case PropertyType.property:
        data.push(...StylesProperty.get(property, space))
        break
      case PropertyType.selector:
        data.push(...StylesSelector.get(property, space, content))
        break
    }

    return data
  }
}
