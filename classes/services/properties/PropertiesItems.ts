import { forEach, isObjectNotArray, isSelected } from '../../../functions/data.ts'
import { getColumn } from '../../../functions/object.ts'

import { PropertiesCache } from './PropertiesCache.ts'

import {
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  type PropertyRead,
  type PropertyReadCallback,
  type PropertyReadFull,
  type PropertyReadParents
} from '../../../types/property.ts'

/**
 * Class for working with a list of all properties.<br>
 * Класс для работы со списком всех свойств.
 */
export class PropertiesItems {
  private readonly properties: PropertyList

  /**
   * Constructor
   * @param properties array with all property records /<br>массив со всеми записями свойств
   */
  constructor (
    properties?: PropertyList
  ) {
    this.properties = properties ?? {}
  }

  /**
   * Getting full structure property.<br>
   * Получение полной структуры свойства.
   */
  get (): PropertyList {
    return this.properties
  }

  /**
   * Returns a list of design names.<br>
   * Возвращает список названий дизайнов.
   */
  getDesigns (): string[] {
    return Object.keys(this.properties)
  }

  /**
   * Divides an index into sections.<br>
   * Разделяет индекс на разделы.
   * @param index index for splitting /<br>индекс для разделения
   */
  getKeys (index: string): string[] {
    return index.replace(/^\{|}$/ig, '')
      .split('.')
  }

  /**
   * Returns the full information about the element by its link.<br>
   * Возвращает полную информацию об элементе по его ссылке.
   * @param index index for splitting /<br>индекс для разделения
   */
  getFullItemByIndex (index: string): PropertyRead | undefined {
    const keys = this.getKeys(index)
    const design = keys.shift() as string
    const component = keys.shift() as string
    const value = this.properties?.[design]?.value
    const parents: PropertyReadParents = [
      {
        name: design,
        item: this.properties?.[design]
      }
    ]

    if (isObjectNotArray(value)) {
      let name: string = component
      let item: PropertyItem | undefined = value?.[component]
      let parent: PropertyItem = parents[0].item

      if (item) {
        for (const key of keys) {
          parents.push({
            name: key,
            item
          })

          parent = item

          name = key
          item = isObjectNotArray(item?.value) ? item.value?.[key] : undefined

          if (!item) {
            break
          }
        }
      }

      if (item) {
        return {
          design,
          component,
          name,
          item,
          value: item?.value,
          parent,
          parents
        }
      }
    }

    return undefined
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
   * Searching for records with selected categories.<br>
   * Поиск записей с выделенными категориями.
   * @param category names of categories /<br>названия категорий
   */
  findCategory (category: string | string[]): PropertyReadFull[] {
    const data: PropertyReadFull[] = []

    this.each((property) => {
      const {
        item
      } = property

      if (isSelected(item?.[PropertyKey.category], category)) {
        data.push(this.getFullInfo(property))
      }
    })

    return data
  }

  /**
   * Replaces labels with design and component names.<br>
   * Заменяет метки на названия дизайна и компонента.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param value values of properties from the value field /<br>значения свойств из поля value
   * @param separator разделитель
   */
  toFullLink (
    design: string,
    component: string,
    value: string,
    separator = '.'
  ): string {
    if (value.match(/\?/)) {
      return value
        .replace(/\?\?(?![ _-])/g, `${design}${separator}${component}${separator}`)
        .replace(/\?\?(?=[ _-])/g, `${design}${separator}${component}`)
        .replace(/\?/g, `${design}${separator}`)
    }

    return this.toFullLinkByDesign(design, value)
  }

  /**
   * Adds the name of the design at the beginning if it is missing.<br>
   * Добавляет название дизайна в начало, если его нет.
   * @param design design name /<br>название дизайна
   * @param value values of properties from the value field /<br>значения свойств из поля value
   */
  toFullLinkByDesign (design: string, value: string): string {
    if (value.match('{')) {
      return value?.replace(/(?<=\{)[^.{}]+/g, name => {
        if (this.getDesigns().indexOf(name) === -1) {
          return `${design}.${name}`
        }

        return name
      })
    }

    return value
  }

  /**
   * Saves intermediate data.<br>
   * Сохраняет промежуточные данные.
   * @param name file name /<br>название файла
   */
  writeStep (name: string): void {
    if (this.properties) {
      PropertiesCache.writeStep(`${this.getDesigns().join('-')}-${name}`, this.properties)
    }
  }

  /**
   * Returns complete information about the property.<br>
   * Возвращает полную информацию о свойстве.
   * @param property an object with information about properties /<br>объект с информацией о свойствах
   */
  private getFullInfo (property: PropertyRead): PropertyReadFull {
    return {
      ...property,
      index: `${getColumn(property.parents, 'name').join('.')}.${property.name}`
    }
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
    properties: PropertyItem['value'] = this.properties,
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
