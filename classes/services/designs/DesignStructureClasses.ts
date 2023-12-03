import { forEach, isFilled, isObjectNotArray } from '../../../functions/data.ts'
import { toCamelCase } from '../../../functions/string.ts'

import { DesignStructureItemAbstract } from './DesignStructureItemAbstract.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../types/property.ts'
import {
  type DesignStructureClassesList
} from '../../../types/design.ts'

/**
 * A class for getting a list of classes of components.<br>
 * Класс для получения списка классов компонентов.
 */
export class DesignStructureClasses extends DesignStructureItemAbstract<DesignStructureClassesList> {
  protected data: DesignStructureClassesList = []

  /**
   * Constructor
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   */
  constructor (
    design: string,
    component: string
  ) {
    super(design, component)
    this.data = this.make(this.items?.value)
  }

  /**
   * Returns records that meet state conditions.<br>
   * Возвращает записи, удовлетворяющие условиям состояния.
   * @param properties input data /<br>входной данный
   * @param parent ancestor name /<br>название предка
   */
  protected make (
    properties?: PropertyItem['value'],
    parent: string[] = []
  ): DesignStructureClassesList {
    const list: DesignStructureClassesList = []
    if (
      isFilled(properties) &&
      isObjectNotArray(properties)
    ) {
      forEach(properties, item => {
        if (this.isClasses(item)) {
          const names = this.getNames(item, parent)

          list.push(
            {
              index: toCamelCase(names.join('-')),
              full: item?.[PropertyKey.fullName] ?? false,
              className: names.join('__')
            },
            ...this.make(item?.value, names)
          )
        }
      })
    }

    return list
  }

  /**
   * Does this property belong to the class.<br>
   * Является ли это свойство частью класса.
   * @param item object for checking /<br>объект для проверки
   */
  protected isClasses (item: PropertyItem): boolean {
    return Boolean(
      item?.[PropertyKey.variable] === PropertyType.subclass || item?.[PropertyKey.subclass]
    )
  }

  /**
   * Obtaining the name of the class.<br>
   * Получение имени класса.
   * @param item object for checking /<br>объект для проверки
   * @param parent list of names of ancestors /<br>список имен предков
   */
  protected getNames (
    item: PropertyItem,
    parent: string[]
  ): string[] {
    const name = item?.[PropertyKey.nameIndex] ?? item?.[PropertyKey.index] ?? ''

    if (item?.[PropertyKey.fullName]) {
      return [name]
    }

    return [...parent, name]
  }
}
