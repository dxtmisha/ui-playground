import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { StylesTool } from './StylesTool.ts'

import { StylesToClass } from './to/StylesToClass.ts'
import { StylesToClassFull } from './to/StylesToClassFull.ts'
import { StylesToVar } from './to/StylesToVar.ts'
import { StylesToProperty } from './to/StylesToProperty.ts'
import { StylesToSelector } from './to/StylesToSelector.ts'
import { StylesToVirtual } from './to/StylesToVirtual.ts'
import { StylesToMedia } from './to/StylesToMedia.ts'
import { StylesToAnimate } from './to/StylesToAnimate.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../types/property.ts'

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
  private readonly item: PropertyItem
  private readonly data: string[] = []

  /**
   * Constructor
   * @param space пробелы
   * @param property array with all property records /<br>массив со всеми записями свойств
   * @param parent object of ancestor /<br>объект предка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private space: string,
    private property: PropertiesItemsItem,
    private parent?: PropertyItem
  ) {
    this.item = property.item
  }

  /**
   * Generating all properties and variables.<br>
   * Генерация всех свойств и переменных.
   */
  make (): string[] {
    (new PropertiesItems({})).eachMainOnly(property => {
      const { item } = property

      if (
        this.isAuxiliary() &&
        this.isAuxiliary(item) &&
        this.isNotBasic(item)
      ) {
        const data: string[] = new StylesProperties(
          StylesTool.increaseSpace(this.space),
          property,
          this.item
        ).make()

        this.data.push(
          `${this.space}& {`,
          ...data,
          `${this.space}}`
        )
      } else {
        this.data.push(...this.toByType(property))
      }
    }, this.property)

    return this.data
  }

  /**
   * Checks if the type is one that requires a space at the beginning.<br>
   * Проверяет, является ли тип тот, для которого надо пробел поставить в начале.
   * @param item element for checking /<br>элемент для проверки
   */
  private isAuxiliary (
    item = this.parent
  ): boolean {
    return Boolean(item && TYPE_AUXILIARY.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  /**
   * Checks if the type is a base property of variables.<br>
   * Проверяет, является ли тип базовым свойством переменных.
   * @param item element for checking /<br>элемент для проверки
   */
  private isNotBasic (item: PropertyItem): boolean {
    return !(item && TYPE_BASIC.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  /**
   * Returns a function for iterating over all records.<br>
   * Возвращает функцию для обхода всех записей.
   * @param property initial variables for processing /<br>начальные переменные для обработки
   */
  private getContent (
    property: PropertiesItemsItem
  ): () => string[] {
    return () => new StylesProperties(
      this.space,
      property,
      this.item
    ).make()
  }

  /**
   * Parameters for a class that converts data by type.<br>
   * Параметры для класса, который преобразует данные по типу.
   * @param property initial variables for processing /<br>начальные переменные для обработки
   */
  private getArgumentsForTo (
    property: PropertiesItemsItem
  ): [PropertiesItemsItem, string, () => string[]] {
    return [property, this.space, this.getContent(property)]
  }

  /**
   * Converting a value to a string depending on the type.<br>
   * Преобразования значения в строка в зависимости от типа.
   * @param property initial variables for processing /<br>начальные переменные для обработки
   */
  private toByType (
    property: PropertiesItemsItem
  ): string[] {
    const argumentsValue = this.getArgumentsForTo(property)

    switch (property.item?.[PropertyKey.variable]) {
      case PropertyType.var:
        return new StylesToVar(...argumentsValue).make()
      case PropertyType.property:
        return new StylesToProperty(...argumentsValue).make()
      case PropertyType.selector:
        return new StylesToSelector(...argumentsValue).make()
      case PropertyType.virtual:
        return new StylesToVirtual(...argumentsValue).make()
      case PropertyType.media:
      case PropertyType.mediaMax:
        return new StylesToMedia(...argumentsValue).make()
      case PropertyType.animate:
        return new StylesToAnimate(...argumentsValue).make()
      case PropertyType.state:
      case PropertyType.subclass:
        return new StylesToClass(...argumentsValue).make()
      case PropertyType.animateFrame:
        return new StylesToClassFull(...argumentsValue).make()
      default:
        return []
    }
  }
}
