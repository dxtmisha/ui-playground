import { forEach, isFilled, isObject, isObjectNotArray } from '../../../functions/data.ts'

import {
  PropertyItem,
  PropertyKey,
  type PropertyList
} from '../../../types/property.ts'

export type PropertyWrapValue = Record<string, PropertyList[]>
export type PropertyWrapItem = {
  values: PropertyWrapValue
  quantity: number
}
export type PropertyWrapItems = Record<string, PropertyWrapItem>
export type PropertyWrap = {
  properties: PropertyWrapItems,
  quantity: number
}

export type PropertyWrapFocus = {
  value: string,
  item: PropertyList[]
}

/**
 * A class for moving data up the level, if the property is used in all records at the same level.<br>
 * Класс для переноса данных выше по уровню, если свойство используется во всех записях на одном уровне.
 */
export class PropertiesWrap {
  /**
   * Drag the duplicate properties to the top level to reduce the record.<br>
   * Перетаскивает дублирующиеся свойства на верхний уровень для уменьшения записи.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  static to (properties: PropertyList): PropertyList {
    if (
      isFilled(properties) &&
      isObject(properties)
    ) {
      forEach(properties, item => {
        if (
          item?.value &&
          isObjectNotArray(item.value)
        ) {
          if (item?.[PropertyKey.wrap]) {
            const value = item.value
            const selectors = this.getSelectors(value)

            if (selectors.quantity > 1) {
              forEach(selectors.properties, (property, name) => {
                if (name in value) {
                  const valueName = value[name]?.value

                  if (typeof valueName === 'string') {
                    this.removeProperties(name, property?.values?.[valueName])
                  }
                } else if (property.quantity === selectors.quantity) {
                  const repeat = this.getMaxRepeat(property.values)

                  if (repeat) {
                    value[name] = {
                      ...repeat.item[0]?.[name],
                      value: repeat.value
                    } as PropertyItem

                    this.removeProperties(name, repeat.item)
                  }
                }
              })
            }

            delete item[PropertyKey.wrap]
          }

          this.to(item.value)
        }
      })
    }

    return properties
  }

  /**
   * The method processes the properties and returns all the names of the property and its values.<br>
   * Метод обрабатывает свойства и возвращает все названия свойства и его значения.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  private static getSelectors (properties: PropertyList): PropertyWrap {
    const data: PropertyWrap = {
      properties: {},
      quantity: 0
    }

    forEach(properties, item => {
      if (isObjectNotArray(item?.value)) {
        data.quantity++
        this.addItem(data.properties, item?.value)
      }
    })

    return data
  }

  /**
   * Adds a new property if it does not exist and returns an object to work with this property.<br>
   * Добавляет новое свойство, если его нет, и возвращает объект для работы с этим свойством.
   * @param data object with all the collected data /<br>объект со всеми собранными данными
   * @param name the name of the property /<br>название свойства
   */
  private static getSelector (
    data: PropertyWrapItems,
    name: string | number
  ): PropertyWrapItem {
    if (!(name in data)) {
      data[name] = {
        values: {},
        quantity: 0
      }
    }

    return data[name]
  }

  /**
   * Adds values to the current property and returns an array for adding a data source.<br>
   * Добавляет значения к текущему свойству и возвращает массив для добавления источника данных.
   * @param selector an object to work with the current property /<br>объект для работы с текущим свойством
   * @param value the value of the property /<br>значение свойства
   */
  private static getValue (
    selector: PropertyWrapItem,
    value: string
  ): PropertyList[] {
    if (!(value in selector.values)) {
      selector.values[value] = []
    }

    return selector.values[value]
  }

  /**
   * Returns values with maximum repetitions.<br>
   * Возвращает значения с максимальными повторами.
   * @param properties values for verification /<br>значения для проверки
   */
  private static getMaxRepeat (properties: PropertyWrapValue): PropertyWrapFocus | undefined {
    let max = 0
    let focus: PropertyWrapFocus | undefined

    forEach(properties, (item, value) => {
      if (
        item.length > 1 && (
          item.length > max ||
          focus === undefined
        )
      ) {
        max = item.length
        focus = {
          value: value as string,
          item
        }
      }
    })

    return focus
  }

  /**
   * Adding information about the property and its values.<br>
   * Добавления информация об свойство и его значения.
   * @param data object with all the collected data /<br>объект со всеми собранными данными
   * @param properties list of properties /<br>свойств
   */
  private static addItem (
    data: PropertyWrapItems,
    properties: PropertyList
  ): void {
    forEach(properties, (item, name) => {
      if (typeof item?.value === 'string') {
        const selector = this.getSelector(data, name)
        const values = this.getValue(selector, item.value)

        selector.quantity++
        values.push(properties)
      }
    })
  }

  /**
   * Deletes all records with the property that was moved up the tree.<br>
   * Удаляет все записи с свойством, которое было перенесено выше по дереву.
   * @param name the name of the property for deletion /<br>название свойства для удаления
   * @param properties an array with properties by the same values /<br>
   * массив со свойствами по одинаковым значениям
   */
  private static removeProperties (
    name: string | number,
    properties?: PropertyList[]
  ): void {
    properties?.forEach(item => delete item[name])
  }
}
