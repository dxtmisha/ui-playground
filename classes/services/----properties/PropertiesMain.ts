import { isFilled, isObject } from '../../../functions/data.ts'

import { PropertiesCache } from './PropertiesCache.ts'
import { PropertiesPath } from './PropertiesPath.ts'

import { PropertiesStandard } from './PropertiesStandard.ts'
import { PropertiesImport } from './PropertiesImport.ts'
import { PropertiesSeparator } from './PropertiesSeparator.ts'

import {
  FILE_PROPERTY,
  type PropertyList
} from '../../../types/property.ts'
import { PropertiesWrap } from './PropertiesWrap.ts'

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
}
