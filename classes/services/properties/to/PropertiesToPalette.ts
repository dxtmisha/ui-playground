import { forEach, isFilled, isObject, isObjectNotArray } from '../../../../functions/data.ts'

import { PropertiesItems } from '../PropertiesItems.ts'

import {
  PropertyCategory,
  PropertyFull,
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  type PropertyReadFull,
  PropertyType
} from '../../../../types/property.ts'

const THEME_BASIC = 'basic'
const KEY_CLASS_NAME = 'palette'

const FILE_CACHE = '002-palette'

/**
 * Class for working with colors.<br>
 * Класс для работы с цветами.
 */
export class PropertiesToPalette {
  private palette: PropertyReadFull[]

  /**
   * Constructor
   * @param items
   */
  constructor (private items: PropertiesItems) {
    this.palette = this.items.findCategory(PropertyCategory.palette)
  }

  /**
   * Adding a class for working with colors.<br>
   * Добавление класса для работы со цветами.
   */
  to (): void {
    this.read()
    this.items.findCategory(PropertyCategory.theme)
      .forEach(({
        name,
        item
      }) => item?.value && isObjectNotArray(item.value) && this.read(item.value, name))

    this.items.writeStep(FILE_CACHE)
  }

  /**
   * Adding a color property by the name of the theme.<br>
   * Добавление свойства цвета по названию темы.
   * @param root the property object, by which it will be added /<br>
   * объект свойства, по которому будет добавлять
   * @param theme the name of the theme /<br>название темы
   */
  private read (
    root?: PropertyList,
    theme = THEME_BASIC
  ) {
    this.palette.forEach(({
      item,
      parents,
      index
    }) => {
      const list = this.getParent(
        root ? PropertyCategory.colors : PropertyCategory.class,
        root ?? (parents?.[0].item.value as PropertyList)
      )

      if (
        list &&
        isObjectNotArray(item?.value)
      ) {
        forEach(item?.value, (shade, name) => {
          const parent = this.getClass(list, name)

          this.addItem(
            parent,
            `${index}.${name}`,
            theme,
            shade?.value as PropertyList
          )

          this.addDefault(parent, theme, item)
        })
      }
    })
  }

  /**
   * Adding a group of properties based on the design name.<br>
   * Добавление группы свойств по названию дизайна.
   * @param category category names /<br>названия категорий
   * @param parent the property object, by which it will be added /<br>объект свойства, по которому будет добавлять
   */
  private getParent (
    category: PropertyCategory.colors | PropertyCategory.class,
    parent: PropertyList
  ): PropertyList {
    if (!(KEY_CLASS_NAME in parent)) {
      const type = category === PropertyCategory.colors
        ? PropertyType.classType
        : PropertyType.component

      parent[KEY_CLASS_NAME] = {
        value: {},
        [PropertyKey.type]: type,
        [PropertyKey.category]: category
      }
    }

    return parent?.[KEY_CLASS_NAME]?.value as PropertyList
  }

  /**
   * Adding a new class with the name of the color.<br>
   * Добавление нового класса по имени цвета.
   * @param items list of classes /<br>список классов
   * @param name class name /<br>название класса
   */
  private getClass (items: PropertyList, name: string): PropertyList {
    if (!(name in items)) {
      items[name] = {
        value: {},
        [PropertyKey.type]: PropertyType.state
      }
    }

    return items[name].value as PropertyList
  }

  /**
   * Returns names for light.<br>
   * Возвращает названия для света.
   * @param theme the name of the theme /<br>название темы
   * @param name names of colors /<br>названия цвета
   */
  private getName (theme: string, name: string): string {
    return `${theme}-${name}`
  }

  /**
   * Returns values for color.<br>
   * Возвращает значения для цвета.
   * @param link base link /<br>базовая ссылка
   * @param name names of colors /<br>названия цвета
   */
  private getValue (link: string, name: string): string {
    return `{${link}.${name}}`
  }

  /**
   * Checking the default value.<br>
   * Проверка значения по умолчанию.
   * @param item the value to be checked /<br>проверяемое значение
   * @param theme the name of the theme /<br>название темы
   */
  private getValueDefault (item: PropertyItem, theme: string): string {
    const value = item?.[PropertyKey.default]

    if (isFilled(value)) {
      return isObject(value) ? value?.[theme] : value as string
    }

    return 'default'
  }

  /**
   * Adding a saturation property.<br>
   * Добавление свойства насыщенности.
   * @param parent list of available values for the class /<br>список доступных значений у класса
   * @param link list of classes /<br>список классов
   * @param theme the name of the theme /<br>название темы
   * @param palette the list of saturation /<br>список насыщенности
   * @private
   */
  private addItem (
    parent: PropertyList,
    link: string,
    theme: string,
    palette: PropertyList
  ): void {
    if (palette) {
      forEach(palette, (item, name) => {
        if (item && typeof name === 'string') {
          parent[this.getName(theme, name)] = {
            value: this.getValue(link, name),
            [PropertyKey.type]: PropertyType.var,
            [PropertyKey.category]: PropertyCategory.color
          }
        }
      })
    }
  }

  /**
   * Adding a default value.<br>
   * Добавление значения по умолчанию.
   * @param parent list of available values for the class /<br>список доступных значений у класса
   * @param theme the name of the theme /<br>название темы
   * @param palette list of classes /<br>список классов
   * @private
   */
  private addDefault (
    parent: PropertyList,
    theme: string,
    palette: PropertyItem
  ): void {
    const defaultValue = this.getValueDefault(palette, theme)
    const name = this.getName(theme, defaultValue)

    if (name in parent) {
      parent['sys-palette'] = {
        ...parent[name],
        [PropertyKey.full]: [PropertyFull.name]
      }
    }
  }
}
