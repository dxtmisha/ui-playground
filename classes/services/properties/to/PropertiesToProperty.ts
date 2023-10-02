import { toKebabCase } from '../../../../functions/string.ts'

import { PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToVar } from './PropertiesToVar.ts'

import { PropertyType } from '../../../../types/property.ts'

const FILE_CACHE = '024-property'

/**
 * Class for working with custom styles in CSS.<br>
 * Класс для работы с пользовательскими стилями в CSS.
 */
export class PropertiesToProperty extends PropertiesToVar {
  protected type = PropertyType.property
  protected cacheName = FILE_CACHE

  /**
   * Name transformation for the var type.<br>
   * Преобразование имени для типа var.
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   */
  protected getName ({
    name,
    item
  }: PropertiesItemsItem) {
    return toKebabCase(this.items.getReName(name, item))
  }
}
