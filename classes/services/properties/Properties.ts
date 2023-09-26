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
import { PropertiesToStyle } from './to/PropertiesToStyle.ts'

import { PropertiesToFull } from './to/PropertiesToFull.ts'
import { PropertiesToVar } from './to/PropertiesToVar.ts'
import { PropertiesToProperty } from './to/PropertiesToProperty.ts'
import { PropertiesToComponent } from './to/PropertiesToComponent.ts'
import { PropertiesToClass } from './to/PropertiesToClass.ts'
import { PropertiesToState } from './to/PropertiesToState.ts'
import { PropertiesToSubclass } from './to/PropertiesToSubclass.ts'
import { PropertiesToRoot } from './to/PropertiesToRoot.ts'
import { PropertiesToMedia } from './to/PropertiesToMedia.ts'
import { PropertiesToAnimate } from './to/PropertiesToAnimate.ts'

import { PropertiesToNone } from './to/PropertiesToNone.ts'

import {
  type PropertyList
} from '../../../types/property.ts'
import { PropertiesScss } from './PropertiesScss.ts'

const FILE_CACHE = 'properties'

/**
 * The main class for working with tokens.<br>
 * Главный класс для работы с токенами.
 */
export class Properties {
  private readonly designs: string[]
  private readonly items: PropertiesItems

  /**
   * Constructor
   */
  constructor () {
    this.designs = ['d', ...PropertiesTool.getDesigns()]
    this.items = new PropertiesItems(this.read())
  }

  /**
   * Getting structured data for use in an SCSS file.<br>
   * Получение структурированных данных для работы в SCSS файле.
   */
  getScss (): string {
    return PropertiesCache.get([], this.getPathName(), () => {
      const properties = new PropertiesScss(this.items).get()

      console.info('[Scss]', 'init')

      return properties
    }, 'scss')
  }

  /**
   * Processing of basic data.<br>
   * Обработка базовых данных.
   */
  protected read (): PropertyList {
    return PropertiesCache.get<PropertyList>([], this.getPathName(), () => {
      console.info('[Properties]', 'start')

      const properties = this.readFiles()

      this.toBasic(properties)

      new PropertiesToSimilar(properties).to()
      new PropertiesToMulti(properties).to()
      new PropertiesToStyle(properties).to()

      new PropertiesToFull(properties).to()
      new PropertiesToVar(properties).to()
      new PropertiesToProperty(properties).to()
      new PropertiesToComponent(properties).to()
      new PropertiesToClass(properties).to()
      new PropertiesToState(properties).to()
      new PropertiesToSubclass(properties).to()
      new PropertiesToRoot(properties).to()
      new PropertiesToMedia(properties).to()
      new PropertiesToAnimate(properties).to()

      new PropertiesToNone(properties).to()

      console.info('[Properties]', 'init')

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
