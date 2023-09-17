import { isFilled } from '../../../functions/data.ts'

import { PropertiesCache } from './PropertiesCache.ts'
import { PropertiesPath } from './PropertiesPath.ts'

import { PropertiesStandard } from './PropertiesStandard.ts'
import { PropertiesImport } from './PropertiesImport.ts'
import { PropertiesSeparator } from './PropertiesSeparator.ts'
import { PropertiesWrap } from './PropertiesWrap.ts'

import {
  FILE_PROPERTY,
  type PropertyList
} from '../../../types/property.ts'

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
}
