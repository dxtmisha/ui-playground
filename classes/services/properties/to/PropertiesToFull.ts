import { PropertiesItems } from '../PropertiesItems.ts'
import { PropertyKey } from '../../../../types/property.ts'

const FILE_CACHE = '018-full'

/**
 * A class for transforming components.<br>
 * Класс для преобразования состояния.
 */
export class PropertiesToFull {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.each(({
      design,
      component,
      name,
      value,
      item
    }) => {
      if (component) {
        item[PropertyKey.name] = this.items.getLink(design, component, this.items.getReName(name, item), '-')

        if (typeof value === 'string') {
          item[PropertyKey.css] = this.items.getLink(design, component, value)
        }
      }
    })

    this.items.write(FILE_CACHE)
  }
}
