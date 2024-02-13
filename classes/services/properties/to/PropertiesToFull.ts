import { PropertiesToAbstract } from './PropertiesToAbstract'

import { PropertyKey } from '../../../../types/property'

/**
 * A class for transforming components.<br>
 * Класс для преобразования состояния.
 */
export class PropertiesToFull extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '018-full'

  protected init (): void {
    this.items.each(({
      design,
      component,
      name,
      value,
      item
    }) => {
      if (component) {
        item[PropertyKey.name] = this.items.getLinkToName(
          design,
          component,
          this.items.getReName(name, item)
        )

        if (typeof value === 'string') {
          item[PropertyKey.css] = this.items.getLinkToValue(design, component, value)
        }
      }
    })
  }
}
