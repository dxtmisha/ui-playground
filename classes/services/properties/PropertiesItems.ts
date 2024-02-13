import { forEach, isNull, isObjectNotArray, isSelected } from '../../../functions/data'
import { toCamelCase } from '../../../functions/string'
import { getColumn } from '../../../functions/object'

import { PropertiesCache } from './PropertiesCache'

import {
  NAME_CONSTRUCTOR,
  PropertyCategory,
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../types/property'

export type PropertiesItemsParent = {
  name: string,
  item: PropertyItem
}
export type PropertiesItemsItem = {
  design: string,
  component?: string,
  name: string,
  index: string
  value: PropertyItem['value'],
  item: PropertyItem,
  previous?: PropertyItem,
  parent?: PropertyItem,
  parents: PropertiesItemsParent[]
}
export type PropertiesItemsCallback<T> = (item: PropertiesItemsItem) => T
export type PropertiesItemsMedia = Record<string, PropertyList>

const SUPPORT_NAME = [
  PropertyType.design,
  PropertyType.component,
  PropertyType.classType
]

/**
 * Class for working with a list of all properties.<br>
 * Класс для работы со списком всех свойств.
 */
export class PropertiesItems {
  private focusDesign?: string

  /**
   * Constructor
   * @param properties array with all property records /<br>массив со всеми записями свойств
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly properties: PropertyList
  ) {
  }

  /**
   * Checks if the record complies with the design requirements.<br>
   * Проверяет, соответствует ли запись условиям дизайна.
   * @param name names of items /<br>названия объектов
   * @param design design name /<br>название дизайна
   * @private
   */
  isFocusDesign (name: string, design?: string): boolean {
    return Boolean(
      design ||
      isNull(this.focusDesign) ||
      name === this.focusDesign ||
      name === NAME_CONSTRUCTOR
    )
  }

  /**
   * Getting full structure property.<br>
   * Получение полной структуры свойства.
   */
  get (): PropertyList {
    if (this.focusDesign) {
      const data: PropertyList = {}

      forEach(this.properties, (properties, index) => {
        if (
          index === NAME_CONSTRUCTOR ||
          index === this.focusDesign
        ) {
          data[index] = properties
        }
      })

      return data
    }

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
   * Returns values by index.<br>
   * Возвращает значения по индексу.
   * @param index index for splitting /<br>индекс для разделения
   */
  getItem (index: string): PropertyItem | undefined {
    const item = this.getInfo(index)?.item

    if (!item) {
      console.error('[Items]', `No record: ${index}`)
    }

    return item
  }

  /**
   * Returns the full information about the element by its link.<br>
   * Возвращает полную информацию об элементе по его ссылке.
   * @param index index for splitting /<br>индекс для разделения
   */
  getInfo (index: string): PropertiesItemsItem | undefined {
    const keys = this.getKeys(index)
    const design = keys.shift() as string
    const component = keys.shift() as string
    const value = this.properties?.[design]?.value
    const parents: PropertiesItemsItem['parents'] = [
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
          item = isObjectNotArray(item.value) ? item.value?.[key] : undefined

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
          index: this.getIndex(parents),
          value: item.value,
          item,
          parent,
          parents
        }
      }
    }

    return undefined
  }

  /**
   * Divides an index into sections.<br>
   * Разделяет индекс на разделы.
   * @param index index for splitting /<br>индекс для разделения
   */
  getKeys (index: string): string[] {
    const names = index.replace(/^\{|}$/ig, '')
      .split('.')

    return forEach(names, name => {
      if (name.match(/^&/)) {
        return name
      }

      return toCamelCase(name)
    })
  }

  /**
   * Returns the name of the property, taking into account the parameter of changing the name.<br>
   * Возвращает название свойства, учитывая параметр изменения имени.
   * @param name name of property /<br>название свойства
   * @param item object of property /<br>объект свойства
   */
  getName (name: string, item: PropertyItem): string {
    return this.getReName(name, item).replace(/\(.*?$/, '')
  }

  /**
   * Returns the used name.<br>
   * Возвращает использованное имя.
   * @param name name of property /<br>название свойства
   * @param item object of property /<br>объект свойства
   */
  getReName (name: string, item: PropertyItem): string {
    return item?.[PropertyKey.name] ?? item?.[PropertyKey.rename] ?? name
  }

  /**
   * Returns ancestor names.<br>
   * Возвращает имена предков.
   * @param parents array of all ancestor properties along the tree from the top level /<br>
   * массив со всеми свойствами предков по дереву от верхнего уровня
   * @param variable list of types to exclude, such types are ignored /<br>
   * список типов для исключения, такие типы игнорируются
   */
  getParentsName (
    parents: PropertiesItemsItem['parents'],
    variable?: string[]
  ): string[] {
    return forEach(parents, ({
      name,
      item
    }) => {
      if (
        !variable || (
          typeof item?.[PropertyKey.variable] === 'string' && (
            variable.indexOf(item[PropertyKey.variable]) !== -1 ||
            SUPPORT_NAME.indexOf(item[PropertyKey.variable]) !== -1
          )
        )
      ) {
        return toCamelCase(name)
      }

      return undefined
    }) as string[]
  }

  /**
   * Returns a list of information about media file list.<br>
   * Возвращает список информации о списках медиафайлов.
   */
  getMedia (): PropertiesItemsMedia {
    const data: PropertiesItemsMedia = {}

    this.findCategory(PropertyCategory.media)
      .forEach(({
        design,
        item
      }) => {
        if (isObjectNotArray(item.value)) {
          Object.assign(data, { [design]: item.value })
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
  getLink (
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

    return this.getLinkByDesign(design, value)
  }

  /**
   * Get values for links and convert them to accessible code.<br>
   * Получаем значения для ссылок и преобразуем их в доступный код.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param value values of properties from the value field /<br>значения свойств из поля value
   */
  getLinkToName (
    design: string,
    component: string,
    value: string
  ) {
    const link = this.getLink(
      design,
      component,
      value,
      '-'
    )

    return link.replace(/[a-zA-Z]+/ig, text => toCamelCase(text))
  }

  /**
   * Get values for links and convert them to accessible code.<br>
   * Получаем значения для ссылок и преобразуем их в значения для ссылки.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param value values of properties from the value field /<br>значения свойств из поля value
   */
  getLinkToValue (
    design: string,
    component: string,
    value: string
  ) {
    const link = this.getLink(
      design,
      component,
      value
    )

    return link.replace(/(?<=\{.*?)[a-zA-Z]+(?=.*?})/ig, text => toCamelCase(text))
  }

  /**
   * Replaces labels with design and component names (for the name).<br>
   * Заменяет метки на названия дизайна и компонента (для названия).
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param value values of properties from the value field /<br>значения свойств из поля value
   */
  getLinkForName (
    design: string,
    component: string,
    value: string
  ) {
    return this.getLink(design, component, value, '-')
  }

  /**
   * Adds the name of the design at the beginning if it is missing.<br>
   * Добавляет название дизайна в начало, если его нет.
   * @param design design name /<br>название дизайна
   * @param value values of properties from the value field /<br>значения свойств из поля value
   */
  getLinkByDesign (
    design: string,
    value: string
  ): string {
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
   * Recursively applies a custom function to each element of the property.<br>
   * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
   * @param callback the callback function is executed for each element /<br>
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param property
   */
  each<T> (
    callback: PropertiesItemsCallback<T>,
    property?: PropertiesItemsItem
  ): T[] {
    if (property) {
      if (isObjectNotArray(property.item.value)) {
        return this.read(
          callback,
          true,
          property.design,
          property.component,
          property.item.value,
          property.item,
          property.parents
        )
      }

      return []
    }

    return this.read(callback)
  }

  /**
   * Applies a user function to elements on the current level.<br>
   * Применяет пользовательскую функцию к элементам на текущем уровне.
   * @param callback the callback function is executed for each element /<br>
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param property
   */
  eachMainOnly<T> (
    callback: PropertiesItemsCallback<T>,
    property?: PropertiesItemsItem
  ): T[] {
    if (property) {
      if (isObjectNotArray(property.item.value)) {
        return this.read(
          callback,
          false,
          property.design,
          property.component,
          property.item.value,
          property.item,
          property.parents
        )
      }

      return []
    }

    return this.read(callback, false)
  }

  /**
   * Search for a record by selected conditions.<br>
   * Поиск записи по выбранным условиям.
   * @param callback function for checking the condition /<br>функция для проверки условия
   */
  find (callback: (property: PropertiesItemsItem) => boolean): PropertiesItemsItem[] {
    const data: PropertiesItemsItem[] = []

    this.each(property => {
      if (callback(property)) {
        data.push(property)
      }
    })

    return data
  }

  /**
   * Searching for records with selected categories.<br>
   * Поиск записей с выделенными категориями.
   * @param category names of categories /<br>названия категорий
   */
  findCategory (category: string | string[]): PropertiesItemsItem[] {
    const data: PropertiesItemsItem[] = []

    this.each(property => {
      if (isSelected(property.item?.[PropertyKey.category], category)) {
        data.push(property)
      }
    })

    return data
  }

  /**
   * Searching for records with selected categories.<br>
   * Поиск записей с выделенными категориями.
   * @param variable names of categories /<br>названия категорий
   */
  findVariable (variable: string | string[]): PropertiesItemsItem[] {
    const data: PropertiesItemsItem[] = []

    this.each(property => {
      if (isSelected(property.item?.[PropertyKey.variable], variable)) {
        data.push(property)
      }
    })

    return data
  }

  /**
   * Changes the focused design.<br>
   * Изменяет фокусированный дизайн.
   * @param design
   */
  setFocusDesign (design: string): this {
    this.focusDesign = design
    return this
  }

  /**
   * Saves intermediate data.<br>
   * Сохраняет промежуточные данные.
   * @param name file name /<br>название файла
   */
  write (name: string): void {
    PropertiesCache.write(`${this.getDesigns().join('-')}-${name}`, this.properties)
  }

  /**
   * Returns complete information about the property.<br>
   * Возвращает полную информацию о свойстве.
   * @param parents an object with information about properties /<br>объект с информацией о свойствах
   */
  private getIndex (parents: PropertiesItemsItem['parents']): string {
    return `${getColumn(parents, 'name').join('.')}`
  }

  /**
   * Recursively applies a custom function to each element of the property.<br
   * Рекурсивно применяет пользовательскую функцию к каждому элементу свойства.
   * @param callback the callback function is executed for each element /<br>
   * выполняется функция обратного вызова (callback) для каждого элемента
   * @param subItem scan child elements of the current element /<br>сканировать дочерние элементы текущего элемента
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param properties object for traversal /<br>объект для обхода
   * @param parent ancestor element /<br>элемент-предок
   * @param parents list of ancestor names /<br>список названий предков
   */
  private read<T> (
    callback: PropertiesItemsCallback<T>,
    subItem = true,
    design?: string,
    component?: string,
    properties = this.properties,
    parent?: PropertyItem,
    parents: PropertiesItemsItem['parents'] = []
  ): T[] {
    const data: T[] = []
    let previous: PropertyItem

    forEach(properties, (item, name) => {
      if (this.isFocusDesign(name, design)) {
        const newDesign = design ?? name
        const newComponent = design && (component ?? name)
        const newParents = [...parents, {
          name,
          item
        }]

        const value = callback({
          design: newDesign,
          component: newComponent,
          name,
          index: this.getIndex(newParents),
          value: item.value,
          item,
          previous,
          parent,
          parents
        })

        if (value !== undefined) {
          data.push(value)
        }

        if (
          subItem &&
          isObjectNotArray(item.value)
        ) {
          data.push(
            ...this.read(
              callback,
              subItem,
              newDesign,
              newComponent,
              item.value,
              item,
              newParents
            )
          )
        }

        previous = item
      }
    })

    return data
  }
}
