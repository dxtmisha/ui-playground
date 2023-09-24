import { PropertiesItems, PropertiesItemsItem } from '../PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey
} from '../../../../types/property.ts'

const REG_SUB = /(?<={[^}]*?){([^{}]+)}/g

const FILE_CACHE = '006-sub'

/**
 * Class for converting all properties with sub-values.<br>
 * Класс для преобразования всех свойств с под-значениями.
 */
export class PropertiesToSub {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  /**
   * Converting all elements.<br>
   * Преобразование всех элементов.
   */
  to (): void {
    this.items.each(property => {
      if (this.is(property.value)) {
        this.read(property)
      }
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * Проверяет, если значения
   * @param value current element /<br>текущий элемент
   */
  private is (value: PropertyItem['value']): boolean {
    return typeof value === 'string' && Boolean(value.match(REG_SUB))
  }

  /**
   * Converting all indices to values.<br>
   * Преобразование всех индексов в значения.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param value values of properties from the value field /<br>значения свойств из поля value
   */
  private getValue (
    design: string,
    component: string,
    value: string
  ) {
    let max = 24
    let update = true

    while (update && max-- > 0) {
      update = false
      value = value.replace(REG_SUB, (name, value) => {
        update = true

        return this.items.getItem(
          this.items.getLink(design, component, name)
        )?.value ?? value
      })
    }

    return value.trim()
  }

  /**
   * Converting all indices to values for a field of values.<br>
   * Преобразование всех индексов в значения для поля значения.
   */
  private read (
    {
      design,
      component,
      item
    }: PropertiesItemsItem
  ): void {
    if (
      component &&
      typeof item.value === 'string'
    ) {
      item.value = this.getValue(design, component, item.value)

      if (item?.[PropertyKey.fullValue]) {
        item.value = item.value.replace(/[{}]/g, '')
      }
    }
  }
}
