import { PropertiesItems } from '../PropertiesItems.ts'

import { PropertyKey, PropertyType } from '../../../../types/property.ts'

const FILE_CACHE = '038-root'

/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export class PropertiesToRoot {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.findVariable(PropertyType.root).forEach(({
      design,
      component,
      name,
      item
    }) => {
      if (component) {
        item[PropertyKey.name] = this.getName(design, component, this.items.getReName(name, item))
      }
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * @param design design name / название дизайна
   * @param component component name / название компонента
   * @param name base property name / базовое название свойства
   */
  private getName (
    design: string,
    component: string,
    name: string
  ): string {
    return `${this.items.getLink(design, component, name)} &`
  }
}
