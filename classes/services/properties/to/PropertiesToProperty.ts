import { toKebabCase } from '../../../../functions/string'

import { PropertiesItemsItem } from '../PropertiesItems'
import { PropertiesToVar } from './PropertiesToVar'

import { PropertyType } from '../../../../types/property'

/**
 * Class for working with custom styles in CSS.<br>
 * Класс для работы с пользовательскими стилями в CSS.
 */
export class PropertiesToProperty extends PropertiesToVar {
  protected FILE_CACHE = '024-property'
  protected type = PropertyType.property

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
