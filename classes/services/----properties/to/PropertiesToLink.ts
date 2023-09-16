import { isFilled, isObjectNotArray } from '../../../../functions/data.ts'
import { copyObject, splice } from '../../../../functions/object.ts'

import { PropertiesType } from '../PropertiesType.ts'
import { PropertiesItems } from '../PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../../types/property.ts'

type PropertiesLinkItem = {
  properties: PropertyList,
  name: string,
  data: PropertyList
}

const FILE_CACHE = '004-link'
const USED_TYPE = [
  PropertyType.link,
  PropertyType.var,
  PropertyType.property,
  PropertyType.selector,
  PropertyType.virtual
]

const MAX = 24
const MAX_PARENT = 12

/**
 * The method for changing all links.<br>
 * Метод для изменения всех ссылок.
 */
export class PropertiesToLink {
  private update = 1
  private readonly updateList: Record<string, boolean> = {}
  private readonly ignore: Record<string, boolean> = {}

  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  /**
   * The method searches for all links and replaces their values with the specified link.<br>
   * Метод ищет все ссылки и заменяет значения на указанную ссылку.
   */
  to () {
    let max = MAX

    while (
      this.update > 0 &&
      max-- > 0) {
      this.update = 0
      this.read()
    }

    this.items.writeStep(FILE_CACHE)
  }

  /**
   * The method searches for all links and replaces their values with the specified link.<br>
   * Метод ищет все ссылки и заменяет значения на указанную ссылку.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param properties array with all property records /<br>массив со всеми записями свойств
   * @param parent object of ancestor /<br>объект предка
   */
  private read (
    design?: string,
    component?: string,
    properties = this.items.get(),
    parent: string[] = []
  ) {
    const list: PropertiesLinkItem[] = []
    let expect = false

    if (parent.length > MAX_PARENT) {
      return expect
    }

    for (const [name, item] of Object.entries(properties)) {
      const parentItem = [...parent, name]

      if (
        design &&
        component &&
        this.isType(item) &&
        this.isValue(item?.value) &&
        this.ignore?.[item.value] !== true
      ) {
        const link = this.items.toFullLink(design, component, item.value)
        const data = this.items.getFullItemByIndex(link)

        if (data) {
          if (
            this.isData(data.item) &&
            isObjectNotArray(data?.value)
          ) {
            if (
              this.updateList?.[link] !== true &&
              data.design &&
              data.component &&
              this.read(
                data.design,
                data.component,
                data?.value,
                parentItem
              )
            ) {
              expect = true
              break
            } else {
              this.updateList[link] = true
              this.update++

              list.push({
                properties,
                name,
                data: data.value
              })
            }
          } else {
            this.ignore[item.value] = true
          }
        } else {
          expect = true
          break
        }
      } else if (
        isFilled(item?.value) &&
        isObjectNotArray(item?.value) &&
        this.read(
          design || name,
          design && (component || name),
          item?.value,
          parentItem
        )
      ) {
        expect = true
      }
    }

    this.add(list)
    return expect
  }

  /**
   * Checks for compliance by type.<br>
   * Проверяет на соответствие по типу.
   * @param item current element /<br>текущий элемент
   */
  private isType (item: PropertyItem): boolean {
    return !item?.[PropertyKey.type] || PropertiesType.isType(item[PropertyKey.type], USED_TYPE)
  }

  /**
   * Checks whether a value is a reference.<br>
   * Проверяет, является ли значение ссылкой.
   * @param value current element /<br>текущий элемент
   */
  private isValue (value: PropertyItem['value']): value is string {
    return Boolean(
      typeof value === 'string' &&
      value.match(/^{[^{}]+}$/) &&
      !value.match(/[{?.]sys/)
    )
  }

  /**
   * Checks if the given link complies with the conditions.<br>
   * Проверяет, подходит ли данная ссылка под условия.
   * @param item current element /<br>текущий элемент
   */
  private isData (item: PropertyItem): boolean {
    return typeof item?.value === 'object' &&
      Object.keys(item.value).length > 0
  }

  /**
   * Adds new entries.<br>
   * Добавляет новые записи.
   * @param list list of records to be added /<br>список добавляемых записей
   */
  private add (list: PropertiesLinkItem[]): void {
    list.forEach(({
      properties,
      name,
      data
    }) => {
      Object.assign(properties, splice<PropertyItem>(
        properties,
        copyObject(data),
        name
      ))
    })
  }
}
