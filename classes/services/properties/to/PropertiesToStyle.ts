import { isObjectNotArray } from '../../../../functions/data.ts'

import { PropertiesItems } from '../PropertiesItems.ts'

import { PropertyKey, PropertyType } from '../../../../types/property.ts'

const KEY_CUSTOM = 'custom'

const FILE_CACHE = '016-style'

/**
 * A class for working with properties that support additional values.<br>
 * Класс для работы со свойствами с поддержкой дополнительных значений.
 */
export class PropertiesToStyle {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  /**
   * Handling a style record.<br>
   * Обработка записи стиля.
   */
  to () {
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

    this.items.write(FILE_CACHE)
  }
}
