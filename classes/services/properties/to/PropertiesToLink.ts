import { isObjectNotArray } from '../../../../functions/data'
import { splice } from '../../../../functions/object'

import { PropertiesTypes } from '../PropertiesTypes'
import { PropertiesToAbstract } from './PropertiesToAbstract'

import { type PropertyItem, PropertyKey, type PropertyList, PropertyType } from '../../../../types/property'

type PropertiesLinkItem = {
  name: string,
  data: PropertyList,
  properties: PropertyList
}

const MAX = 24
const MAX_PARENT = 12
const USED_TYPE: PropertyType[] = [
  PropertyType.link,
  PropertyType.var,
  PropertyType.property,
  PropertyType.selector,
  PropertyType.virtual,
  PropertyType.scss
]

/**
 * The method for changing all links.<br>
 * Метод для изменения всех ссылок.
 */
export class PropertiesToLink extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '004-link'

  private update = 1
  private readonly ignore: string[] = []
  private readonly links: string[] = []

  /**
   * The method searches for all links and replaces their values with the specified link.<br>
   * Метод ищет все ссылки и заменяет значения на указанную ссылку.
   */
  protected init (): void {
    let max = MAX

    while (
      this.update > 0 &&
      max-- > 0) {
      this.update = 0
      this.read()
    }
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
    const items: PropertiesLinkItem[] = []
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
        this.isValue(item.value) &&
        !this.isIgnore(item.value)
      ) {
        const link = this.items.getLink(design, component, item.value)
        const data = this.items.getInfo(link)

        if (data) {
          if (this.isData(data.value)) {
            if (
              !this.isLink(link) &&
              this.read(
                data.design,
                data.component,
                data.value,
                parentItem
              )
            ) {
              expect = true
              break
            } else {
              this.addLink(link)
              this.update++

              items.push({
                name,
                data: data.value,
                properties
              })

              break
            }
          } else if (typeof data.value === 'string') {
            this.addIgnore(data.value)
          }
        } else {
          expect = true
          break
        }
      } else if (
        isObjectNotArray(item.value) &&
        this.read(
          design ?? name,
          design && (component ?? name),
          item.value,
          parentItem
        )
      ) {
        expect = true
      }
    }

    if (items.length > 0) {
      this.add(parent, items)
    }

    return expect
  }

  /**
   * Checks for compliance by type.<br>
   * Проверяет на соответствие по типу.
   * @param item current element /<br>текущий элемент
   */
  private isType (item: PropertyItem): boolean {
    return !item?.[PropertyKey.type] || PropertiesTypes.isInType(item[PropertyKey.type], USED_TYPE)
  }

  /**
   * Checks whether a value is a reference.<br>
   * Проверяет, является ли значение ссылкой.
   * @param value current element /<br>текущий элемент
   */
  private isValue (value: PropertyItem['value']): value is string {
    return typeof value === 'string' &&
      Boolean(value.match(/^{[^{}]+}$/)) &&
      !value.match(/[{?.]sys/)
  }

  /**
   * Checks if the values are valid, if such values have been checked.<br>
   * Проверяет, подходят ли значения, проверены ли такие значения.
   * @param value current element /<br>текущий элемент
   */
  private isIgnore (value: string): boolean {
    return this.ignore.indexOf(value) !== -1
  }

  /**
   * Checks if the values are processed for the current link.<br>
   * Проверяет, обработаны ли значения у текущей ссылки.
   * @param value current element /<br>текущий элемент
   */
  private isLink (value: string): boolean {
    return this.links.indexOf(value) !== -1
  }

  /**
   * Checks if the given link meets the conditions.<br>
   * Проверяет, подходит ли данный ссылка под условия.
   * @param value current element /<br>текущий элемент
   */
  private isData (value: PropertyItem['value']): value is PropertyList {
    return isObjectNotArray(value) && Object.keys(value).length > 0
  }

  /**
   * Checks if the values are hidden.<br>
   * Проверяет, являются ли значения скрытыми.
   * @param parents list of ancestors /<br>список предков
   * @private
   */

  /*
  private isNone (parents: PropertiesItemsParent[]): boolean {
    for (const parent of parents) {
      if (parent.item?.[PropertyKey.type] === PropertyType.none) {
        return true
      }
    }

    return false
  }
  */

  /**
   * Adds new entries.<br>
   * Добавляет новые записи.
   * @param parent ссылка на предка /<br>ссылка на предка
   * @param items data for processing /<br>данные для обработки
   */
  private add (parent: string[], items: PropertiesLinkItem[]): void {
    const property = this.items.getInfo(`{${parent.join('.')}}`)

    if (property) {
      items.forEach(({
        name,
        data,
        properties
      }) => {
        property.item.value = splice<PropertyItem>(
          properties,
          data,
          name
        ) as PropertyList
      })
    }
  }

  /**
   * We will add the values to the ignore.<br>
   * Добавим значения в игнор.
   * @param value current element /<br>текущий элемент
   */
  private addIgnore (value: string): void {
    this.ignore.push(value)
  }

  /**
   * We will add a label that the current link is processed.<br>
   * Добавим метку, что текущая ссылка обработана.
   * @param value current element /<br>текущий элемент
   */
  private addLink (value: string): void {
    this.links.push(value)
  }
}
