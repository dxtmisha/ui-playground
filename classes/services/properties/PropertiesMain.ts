import { forEach, isFilled, isObjectNotArray } from '../../../functions/data'

import { PropertiesCache } from './PropertiesCache'
import { PropertiesPath } from './PropertiesPath'

import { PropertiesConvector } from './PropertiesConvector'
import { PropertiesStandard } from './PropertiesStandard'
import { PropertiesImport } from './PropertiesImport'
import { PropertiesSeparator } from './PropertiesSeparator'
import { PropertiesWrap } from './PropertiesWrap'

import {
  FILE_PROPERTY, PropertyItem,
  type PropertyList
} from '../../../types/property'

const DIR_NAME = 'main'

/**
 * A class for transforming global tokens.<br>
 * Класс для преобразования глобальных токенов.
 */
export class PropertiesMain {
  /**
   * Constructor
   * @param path object of the class for working with paths /<br>объект класса для работы с путями
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly path: PropertiesPath
  ) {
  }

  /**
   * Returns all main tokens.<br>
   * Возвращает все основные токены.
   */
  get (): PropertyList {
    return this.path.toAll(DIR_NAME, (path, design) => {
      let properties = PropertiesCache.read<PropertyList>([...path, FILE_PROPERTY])

      if (isFilled(properties)) {
        PropertiesConvector.to(properties)

        properties = PropertiesStandard.to({ [design]: properties })
        properties = new PropertiesImport(properties, path).to()

        if (PropertiesSeparator.is(properties)) {
          properties = PropertiesSeparator.to(properties)
          PropertiesWrap.to(properties)
        }
      }

      return properties ?? {}
    }) as PropertyList
  }

  /**
   * We get the main property taking into account the change of settings.<br>
   * Получаем главное свойство с учетом изменения настроек.
   * @param list list of settings /<br>список настроек
   */
  getBySettings (list: PropertyList): PropertyList {
    const data = this.get()

    forEach(list, (designItems, design) => {
      const dataDesign = data?.[design]?.value

      if (
        dataDesign &&
        isObjectNotArray(dataDesign) &&
        isObjectNotArray(designItems.value)
      ) {
        forEach(designItems.value, (componentItems, component) => {
          const dataComponent = dataDesign?.[component]?.value

          if (
            dataComponent &&
            isObjectNotArray(dataComponent) &&
            isObjectNotArray(componentItems.value)
          ) {
            forEach(componentItems.value, (item, name) => {
              this.copySettings(
                item,
                dataComponent?.[name]
              )
            })
          }
        })
      }
    })

    return data
  }

  /**
   * We copy the settings.<br>
   * Копируем настройки.
   * @param item element with settings /<br>элемент с настройками
   * @param itemCopy element for copying settings /<br>элемент для копирования настроек
   */
  protected copySettings (
    item: PropertyItem,
    itemCopy?: PropertyItem
  ): this {
    if (itemCopy) {
      forEach(item, (value, property: keyof PropertyItem) => {
        if (
          property.match(/^_/) &&
          property in itemCopy &&
          itemCopy[property] !== value
        ) {
          itemCopy[property] = value as never
        }
      })
    }

    return this
  }
}
