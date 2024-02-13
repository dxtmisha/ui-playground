import { forEach, isFilled, isObject, isObjectNotArray } from '../../../../functions/data'

import { PropertiesItems, type PropertiesItemsItem } from '../PropertiesItems'
import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  PropertyCategory,
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../../types/property'

const THEME_BASIC = 'basic'
const KEY_CLASS_NAME = 'palette'

/**
 * Class for working with colors.<br>
 * Класс для работы с цветами.
 */
export class PropertiesToPalette extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '002-palette'
  private palette: PropertiesItemsItem[]

  /**
   * Constructor
   * @param items data for processing /<br>данные для обработки
   */
  constructor (protected items: PropertiesItems) {
    super(items)
    this.palette = this.items.findCategory(PropertyCategory.palette)
  }

  /**
   * Adding a class for working with colors.<br>
   * Добавление класса для работы со цветами.
   */
  protected init (): void {
    this.read()
    this.items.findCategory(PropertyCategory.theme)
      .forEach(({
        design,
        name,
        item
      }) => item?.value && isObjectNotArray(item.value) && this.read(item.value, name, design))
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
      parent[KEY_CLASS_NAME] = {
        value: {},
        [PropertyKey.type]: category === PropertyCategory.colors
          ? PropertyType.classType
          : PropertyType.component,
        [PropertyKey.category]: category
      }
    }

    return parent[KEY_CLASS_NAME].value as PropertyList
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
   * Adding a color property by the name of the theme.<br>
   * Добавление свойства цвета по названию темы.
   * @param root the property object, by which it will be added /<br>
   * объект свойства, по которому будет добавлять
   * @param theme the name of the theme /<br>название темы
   * @param designParent design name /<br>название дизайна
   */
  private read (
    root?: PropertyList,
    theme = THEME_BASIC,
    designParent?: string
  ) {
    this.palette.forEach(({
      design,
      item,
      parents,
      index
    }) => {
      if (!designParent || designParent === design) {
        const themeName = item?.[PropertyKey.theme]

        if (!themeName || themeName === theme) {
          const list = this.getParent(
            root ? PropertyCategory.colors : PropertyCategory.class,
            root ?? (parents?.[0].item.value as PropertyList)
          )

          if (
            list &&
            isObjectNotArray(item.value)
          ) {
            forEach(item.value, (shade, name) => {
              const parent = this.getClass(list, name)

              if (
                isObjectNotArray(shade.value) &&
                shade?.[PropertyKey.category] !== PropertyCategory.paletteNone
              ) {
                this.addItem(
                  parent,
                  `${index}.${name}`,
                  theme,
                  shade.value
                )
              }

              this.addDefault(parent, theme, item)
            })
          }
        }
      }
    })
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
    forEach(palette, (item, name) => {
      if (item) {
        parent[this.getName(theme, name)] = {
          value: this.getValue(link, name),
          [PropertyKey.type]: PropertyType.var,
          [PropertyKey.category]: PropertyCategory.color
        }
      }
    })
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
        [PropertyKey.fullName]: true
      }
    }
  }
}
