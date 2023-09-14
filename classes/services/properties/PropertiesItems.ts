import { forEach, isObjectNotArray } from '../../../functions/data.ts'

import {
  type PropertyItem,
  type PropertyList,
  type PropertyRead,
  type PropertyReadCallback,
  type PropertyReadParents,
  type PropertyReadValue
} from '../../../types/property.ts'

/**
 * Class for working with a list of all properties.<br>
 * Класс для работы со списком всех свойств.
 */
export class PropertiesItems {
  /**
   * Constructor
   * @param properties array with all property records /<br>массив со всеми записями свойств
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private properties?: PropertyList
  ) {
  }

  /**
   * Getting full structure property.<br>
   * Получение полной структуры свойства.
   */
  get (): PropertyList | undefined {
    return this.properties
  }

  /**
   * Returns a list of design names.<br>
   * Возвращает список названий дизайнов.
   */
  getDesigns (): string[] {
    return (this.properties && Object.keys(this.properties)) ?? []
  }

  /**
   * Recursively applies a custom function to each element of the property.<br>
   * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
   * @param callback the callback function is executed for each element /<br>
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param property
   */
  each<T> (callback: PropertyReadCallback<T>, property?: PropertyRead): T[] {
    if (property) {
      return this.read(
        callback,
        property?.design,
        property?.component,
        property?.item?.value,
        property?.item,
        property?.parents
      )
    }

    return this.read(callback)
  }

  /**
   * Recursively applies a custom function to each element of the property.<br
   * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
   * @param callback the callback function is executed for each element /<br>
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param properties object for traversal /<br>объект для обхода
   * @param parent ancestor element /<br>элемент-предок
   * @param parents list of ancestor names /<br>список названий предков
   */
  private read<T> (
    callback: PropertyReadCallback<T>,
    design ?: string,
    component ?: string,
    properties: PropertyReadValue = this.properties,
    parent?: PropertyItem,
    parents: PropertyReadParents = []
  ): T[] {
    const data: T[] = []

    if (isObjectNotArray(properties)) {
      forEach(properties, (item, name) => {
        if (typeof name === 'string') {
          const value = callback({
            design: design || name,
            component: design && (component || name),
            name,
            value: item?.value,
            item,
            parent,
            parents
          })

          if (value !== undefined) {
            data.push(value)
          }

          if (isObjectNotArray(item?.value)) {
            data.push(
              ...this.read(
                callback,
                design || name,
                design && (component || name),
                item.value,
                item,
                [...parents, {
                  name,
                  item
                }]
              )
            )
          }
        }
      })
    }

    return data
  }
}
