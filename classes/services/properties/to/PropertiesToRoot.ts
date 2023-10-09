import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import { PropertyKey, PropertyType } from '../../../../types/property.ts'

/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export class PropertiesToRoot extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '038-root'

  protected init (): void {
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
  }

  /**
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param name base property name /<br>базовое название свойства
   */
  private getName (
    design: string,
    component: string,
    name: string
  ): string {
    return `${this.items.getLink(design, component, name)} &`
  }
}
