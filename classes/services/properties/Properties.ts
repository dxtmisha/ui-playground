import { replaceRecursive } from '../../../functions/object.ts'

import { PropertiesCache } from './PropertiesCache.ts'
import { PropertiesPath } from './PropertiesPath.ts'
import { PropertiesTool } from './PropertiesTool.ts'
import { PropertiesItems } from './PropertiesItems.ts'

import { PropertiesSettings } from './PropertiesSettings.ts'
import { PropertiesMain } from './PropertiesMain.ts'

import { PropertiesToReplace } from './to/PropertiesToReplace.ts'
import { PropertiesToPalette } from './to/PropertiesToPalette.ts'
import { PropertiesToLink } from './to/PropertiesToLink.ts'
import { PropertiesToSub } from './to/PropertiesToSub.ts'
import { PropertiesToVariable } from './to/PropertiesToVariable.ts'

import { PropertiesToSimilar } from './to/PropertiesToSimilar.ts'
import { PropertiesToMulti } from './to/PropertiesToMulti.ts'

import {
  type PropertyList
} from '../../../types/property.ts'

const FILE_CACHE = 'properties'

/**
 * The main class for working with tokens.<br>
 * Главный класс для работы с токенами.
 */
export class Properties {
  private readonly designs: string[]

  /**
   * Constructor
   */
  constructor () {
    this.designs = ['d', ...PropertiesTool.getDesigns()]
  }

  /**
   * Processing of basic data.<br>
   * Обработка базовых данных.
   */
  read (): PropertyList {
    return PropertiesCache.get<PropertyList>([], this.getPathName(), () => {
      const properties = this.readFiles()

      this.toBasic(properties)

      new PropertiesToSimilar(properties).to()
      new PropertiesToMulti(properties).to()

      return properties.get()
    })
  }

  /**
   * Returns the name of the cache file. It contains all processed properties.<br>
   * Возвращает название файла для кэша.
   * Это полный массив со всеми обработанными свойствами.
   */
  private getPathName (): string {
    return `${this.designs.join('-')}-${FILE_CACHE}`
  }

  /**
   * Reads the content from the file and merges all records into a single object.<br>
   * Читает содержимое из файла и объединяет все записи в один объект.
   */
  private readFiles (): PropertiesItems {
    const path = new PropertiesPath(this.designs)
    return new PropertiesItems(
      replaceRecursive(
        new PropertiesSettings(path).get(),
        new PropertiesMain(path).get()
      )
    )
  }

  /**
   * Basic transformations.<br>
   * Базовые преобразования.
   * @param properties a class that contains all data /<br>класс со всеми данными
   * @private
   */
  private toBasic (properties: PropertiesItems) {
    new PropertiesToReplace(properties).to()
    new PropertiesToPalette(properties).to()
    new PropertiesToLink(properties).to()
    new PropertiesToSub(properties).to()
    new PropertiesToVariable(properties).to()
  }
}
