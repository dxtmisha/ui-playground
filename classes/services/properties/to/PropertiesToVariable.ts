import { isFilled, isObjectNotArray } from '../../../../functions/data.ts'
import { toArray } from '../../../../functions/object.ts'

import { PropertiesTypes } from '../PropertiesTypes.ts'
import { PropertiesItems } from '../PropertiesItems.ts'

import {
  PropertyCategory,
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

import css from '../../../../media/propertiesListCss.json'
import cssSelector from '../../../../media/propertiesListCssSelector.json'
import cssVirtual from '../../../../media/propertiesListCssVirtual.json'

const FILE_CACHE = '008-variable'

/**
 * Class for performing data type conversions.<br>
 * Класс для выполнения преобразования типов данных.
 */
export class PropertiesToVariable {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  /**
   * Determine all properties and their property types in an object.<br>
   * Определяем все свойства и их типы свойств в объекте.
   */
  to () {
    this.items.each(({
      design,
      component,
      name,
      item,
      parent
    }) => {
      item[PropertyKey.variable] = toArray(
        this.getByVarParent(parent) ||
        item?.[PropertyKey.type] ||
        this.getByCategory(item) ||
        this.getByMain(design, component, name) ||
        this.findType(name, item)
      )
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * If there is a value of category, changes the property to the required one.<br>
   * Если есть значение категории, изменяет свойство на нужное.
   * @param item current property /<br>текущее свойство
   */
  private getByCategory (item: PropertyItem): PropertyType | undefined {
    switch (item?.[PropertyKey.category]) {
      case PropertyCategory.root:
        return PropertyType.var
      case PropertyCategory.theme:
        return PropertyType.theme
    }

    return undefined
  }

  /**
   * If the name matches the name of the design or component.<br>
   * Если название совпадает с названием дизайна или компонента.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param name key name /<br>название ключа
   */
  private getByMain (
    design: string,
    component: string | undefined,
    name: string
  ): PropertyType | undefined {
    if (name === design) {
      return PropertyType.design
    } else if (name === component) {
      return PropertyType.component
    }

    return undefined
  }

  /**
   * If the name of the property matches the name of the style in CSS.<br>
   * Если название свойства совпадает с названием стиля в CSS.
   * @param name key name /<br>название ключа
   */
  private getByProperty (name: string): PropertyType | undefined {
    return css.indexOf(name) !== -1 ? PropertyType.property : undefined
  }

  /**
   * If the name of the property matches the name of the pseudo-class.<br>
   * Если название свойства совпадает с названием псевдо-класса.
   * @param name key name /<br>название ключа
   */
  private getBySelector (name: string): PropertyType | undefined {
    return cssSelector.indexOf(name) !== -1 ? PropertyType.selector : undefined
  }

  /**
   * If the element has no properties and values.<br>
   * Если у элемента нет ни одного свойства и значения.
   * @param item current property /<br>текущее свойство
   */
  private getBySubclass (item: PropertyItem): PropertyType | undefined {
    if (
      Object.keys(item).length <= 1 &&
      !isFilled(item.value)
    ) {
      return PropertyType.subclass
    }

    return undefined
  }

  /**
   * If the ancestor has type var.<br>
   * Если у предка тип var.
   * @param parent object of ancestor /<br>объект предка
   */
  private getByVarParent (parent?: PropertyItem): PropertyType | undefined {
    return PropertiesTypes.isInType(parent?.[PropertyKey.variable], [PropertyType.var]) ? PropertyType.var : undefined
  }

  /**
   * If the type is a pseudo-element.<br>
   * Если тип псевдо-элемента.
   * @param name key name /<br>название ключа
   */
  private getByVirtual (name: string): PropertyType | undefined {
    return cssVirtual.indexOf(name) !== -1 ? PropertyType.virtual : undefined
  }

  /**
   * Search for a suitable property by name.<br>
   * Поиск подходящего свойства по названию.
   * @param name key name /<br>название ключа
   * @param item current property /<br>текущее свойство
   */
  private findType (name: string, item: PropertyItem): PropertyType {
    const property = this.items.getName(name, item)

    if (isObjectNotArray(item.value)) {
      return this.getBySubclass(item) ||
        this.getBySelector(property) ||
        this.getByVirtual(property) ||
        this.getByProperty(property) ||
        PropertyType.state
    } else {
      return this.getByProperty(property) ||
        PropertyType.var
    }
  }
}
