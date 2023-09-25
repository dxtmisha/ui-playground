import { PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToVar } from './PropertiesToVar.ts'

import {
  type PropertyItem,
  PropertyType
} from '../../../../types/property.ts'

const FILE_CACHE = '024-property'

/**
 * A class for working with custom properties in CSS.<br>
 * Класс для работы с пользовательским стили в CSS.
 */
export class PropertiesToProperty extends PropertiesToVar {
  protected type = PropertyType.property
  protected cacheName = FILE_CACHE

  /**
   * Name transformation for the var type.<br>
   * Преобразование имени для типа var.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   * @param parents array of all ancestor properties along the tree from the top level /<br>
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  protected getName (
    design: string,
    component: string,
    name: string,
    item: PropertyItem,
    parents: PropertiesItemsItem['parents']
  ) {
    return this.items.getReName(name, item)
  }
}
