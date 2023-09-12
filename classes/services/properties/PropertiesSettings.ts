import { isFilled } from '../../../functions/data.ts'
import { replaceRecursive } from '../../../functions/object.ts'
import { toCamelCase } from '../../../functions/string.ts'

import { PropertiesFile } from './PropertiesFile.ts'
import { PropertiesPath } from './PropertiesPath.ts'
import { PropertiesCache } from './PropertiesCache.ts'

import { PropertiesStandard } from './PropertiesStandard.ts'

import {
  FILE_PROPERTY,
  type PropertyList
} from '../../../types/property.ts'

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
  get (): PropertyList | undefined {
    return this.path.toAll(DIR_NAME, (path, design) => {
      let data = {}

      PropertiesFile.readDir(path).forEach(dir => {
        const properties = PropertiesCache.read([...path, dir, FILE_PROPERTY])

        if (isFilled(properties)) {
          data = replaceRecursive(data, PropertiesStandard.to({
            [design]: {
              [toCamelCase(dir)]: properties
            }
          }))
        }
      })

      return data
    })
  }
}
