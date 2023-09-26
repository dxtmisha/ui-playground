import { PropertiesItems, PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertyItem, PropertyKey, PropertyType } from '../../../../types/property.ts'

const FILE_CACHE = '044-animate'

/**
 * A class for transforming animate.<br>
 * Класс для преобразования animate.
 */
export class PropertiesToAnimate {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.findVariable(PropertyType.animate).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(this.items.getReName(name, item), item, parents)
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   * @param parents array of all ancestor properties along the tree from the top level /<br>
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  private getName (
    name: string,
    item: PropertyItem,
    parents: PropertiesItemsItem['parents']
  ) {
    if (item?.[PropertyKey.fullName]) {
      return name
    } else {
      return `${this.items.getParentsName(parents).join('-')}-${name}`
    }
  }
}
