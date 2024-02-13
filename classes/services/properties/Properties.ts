import { replaceRecursive } from '../../../functions/object'

import { PropertiesCache } from './PropertiesCache'
import { PropertiesPath } from './PropertiesPath'
import { PropertiesTool } from './PropertiesTool'
import { PropertiesItems } from './PropertiesItems'

import { PropertiesSettings } from './PropertiesSettings'
import { PropertiesMain } from './PropertiesMain'

import { PropertiesToReplace } from './to/PropertiesToReplace'
import { PropertiesToPalette } from './to/PropertiesToPalette'
import { PropertiesToLink } from './to/PropertiesToLink'
import { PropertiesToSub } from './to/PropertiesToSub'
import { PropertiesToClone } from './to/PropertiesToClone'
import { PropertiesToDrag } from './to/PropertiesToDrag'
import { PropertiesToRemove } from './to/PropertiesToRemove'
import { PropertiesToVariable } from './to/PropertiesToVariable'

import { PropertiesToSimilar } from './to/PropertiesToSimilar'
import { PropertiesToMulti } from './to/PropertiesToMulti'
import { PropertiesToStyle } from './to/PropertiesToStyle'

import { PropertiesToFull } from './to/PropertiesToFull'
import { PropertiesToVar } from './to/PropertiesToVar'
import { PropertiesToProperty } from './to/PropertiesToProperty'
import { PropertiesToComponent } from './to/PropertiesToComponent'
import { PropertiesToClass } from './to/PropertiesToClass'
import { PropertiesToState } from './to/PropertiesToState'
import { PropertiesToSubclass } from './to/PropertiesToSubclass'
import { PropertiesToRoot } from './to/PropertiesToRoot'
import { PropertiesToMedia } from './to/PropertiesToMedia'
import { PropertiesToAnimate } from './to/PropertiesToAnimate'

import { PropertiesToSort } from './to/PropertiesToSort'
import { PropertiesToNone } from './to/PropertiesToNone'
import { PropertiesToDuplicate } from './to/PropertiesToDuplicate'

import { PropertiesScss } from './PropertiesScss'

import {
  NAME_CONSTRUCTOR,
  type PropertyList
} from '../../../types/property'

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
    this.designs = [NAME_CONSTRUCTOR, ...PropertiesTool.getDesigns()]
    this.items = new PropertiesItems(this.read())
  }

  get () {
    return this.items
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

      new PropertiesToSort(properties).to()
      new PropertiesToNone(properties).to()
      new PropertiesToDuplicate(properties).to()

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
    const settings = new PropertiesSettings(path).get()

    return new PropertiesItems(
      replaceRecursive(
        settings,
        new PropertiesMain(path).getBySettings(settings)
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
    new PropertiesToClone(properties).to()
    new PropertiesToRemove(properties).to()
    new PropertiesToDrag(properties).to()
    new PropertiesToVariable(properties).to()
  }
}
