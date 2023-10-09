import { isObjectNotArray } from '../../../../functions/data.ts'

import { type PropertiesItemsParent } from '../PropertiesItems.ts'
import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

const TYPE = [
  PropertyType.var,
  PropertyType.property
]

const EXCEPTION = [
  PropertyType.classType,
  PropertyType.subclass
]

/**
 * A class for searching for related properties at a higher level to adopt their properties.<br>
 * Класс для поиска родственных свойств на уровне выше для принятия их свойств.
 */
export class PropertiesToSimilar extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '010-similar'

  /**
   * Finding similar data for editing.<br>
   * Поиск похожих данных для редактирования.
   */
  protected init (): void {
    this.items.each(({
      item,
      name,
      parents
    }) => {
      const similar = this.getParent(name, item, parents)

      if (similar) {
        item[PropertyKey.rename] = this.items.getReName(name, similar)
        item[PropertyKey.variable] = similar?.[PropertyKey.variable]
      }
    })
  }

  /**
   * Returns similar values by its name.<br>
   * Возвращает похожие значения по его имени.
   * @param name name of the name /<br>название имени
   * @param item object for checking /<br>объект для проверки
   * @param parents array of all ancestor properties along the tree from the top level /<br>
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  private getParent (
    name: string,
    item: PropertyItem,
    parents: PropertiesItemsParent[]
  ): PropertyItem | undefined {
    const list = [...parents].reverse()

    if (
      !item?.[PropertyKey.type] &&
      !item?.[PropertyKey.rename] &&
      !this.isException(item) &&
      !this.isException(list?.[0]?.item)
    ) {
      list.shift()

      for (const { item } of list) {
        if (isObjectNotArray(item.value)) {
          const similar = item.value?.[name]

          if (this.isException(item)) {
            break
          } else if (
            similar &&
            this.is(similar) && (
              similar?.[PropertyKey.type] ||
              similar?.[PropertyKey.rename]
            )
          ) {
            return similar
          }
        }
      }
    }

    return undefined
  }

  /**
   * Checks if the property is available for inheritance.<br>
   * Проверяет, доступно ли свойство для наследования.
   * @param item object for checking /<br>объект для проверки
   */
  private is (item: PropertyItem): boolean {
    if (item?.[PropertyKey.variable]) {
      return TYPE.indexOf(item?.[PropertyKey.variable]) !== -1
    }

    return false
  }

  /**
   * Checks if inheriting the property is prohibited.<br>
   * Проверяет, запрещено ли наследовать свойство.
   * @param item object for checking /<br>объект для проверки
   */
  private isException (item: PropertyItem): boolean {
    if (item?.[PropertyKey.variable]) {
      return EXCEPTION.indexOf(item[PropertyKey.variable]) !== -1
    }

    return false
  }
}
