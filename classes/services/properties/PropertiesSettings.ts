import { isFilled } from '../../../functions/data'
import { toKebabCase } from '../../../functions/string'
import { replaceRecursive } from '../../../functions/object'

import { PropertiesFile } from './PropertiesFile'
import { PropertiesCache } from './PropertiesCache'
import { PropertiesPath } from './PropertiesPath'

import { PropertiesStandard } from './PropertiesStandard'

import {
  FILE_PROPERTY,
  type PropertyList
} from '../../../types/property'

const DIR_NAME = 'settings'

/**
 * Class for searching all components.<br>
 * Класс для поиск всех компоненты.
 */
export class PropertiesSettings {
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
   * Returns the basic settings of the component.<br>
   * Возвращает базовые настройки у компонента.
   */
  get (): PropertyList {
    return this.path.toAll(DIR_NAME, (path, design) => {
      let data: PropertyList = {}

      PropertiesFile.readDir(path).forEach(dir => {
        const properties = PropertiesCache.read([...path, dir, FILE_PROPERTY])

        if (isFilled(properties)) {
          data = replaceRecursive(data, PropertiesStandard.to({
            [design]: {
              [toKebabCase(dir)]: properties
            }
          }))
        }
      })

      return data
    }) as PropertyList
  }
}
