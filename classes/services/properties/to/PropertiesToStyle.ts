import { isObjectNotArray } from '../../../../functions/data.ts'

import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import { PropertyKey, PropertyType } from '../../../../types/property.ts'

const KEY_CUSTOM = 'custom'

/**
 * A class for working with properties that support additional values.<br>
 * Класс для работы со свойствами с поддержкой дополнительных значений.
 */
export class PropertiesToStyle extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '016-style'

  /**
   * Handling a style record.<br>
   * Обработка записи стиля.
   */
  protected init (): void {
    this.items.each(({
      item,
      name,
      design,
      component
    }) => {
      if (
        item?.[PropertyKey.style] &&
        isObjectNotArray(item.value) &&
        !item.value?.[KEY_CUSTOM]
      ) {
        item[PropertyKey.variable] = PropertyType.state
        item.value[KEY_CUSTOM] = {
          value: {
            [name]: {
              value: `{${design}.${component}.sys.${name}`,
              [PropertyKey.variable]: PropertyType.property
            }
          },
          [PropertyKey.variable]: PropertyType.state
        }
      }
    })
  }
}
