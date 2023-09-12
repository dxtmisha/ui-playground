import { replaceRecursive } from '../../../functions/object.ts'

import { PropertiesTool } from './PropertiesTool.ts'
import { PropertiesCache } from './PropertiesCache.ts'
import { PropertiesPath } from './PropertiesPath.ts'

import { PropertiesItems } from './PropertiesItems.ts'
import { PropertiesSettings } from './PropertiesSettings.ts'

import { type PropertyList } from '../../../types/property.ts'

const FILE_CACHE = 'properties'

export class Properties {
  private readonly designs: string[]
  private items: PropertiesItems

  /**
   * Constructor
   */
  constructor () {
    this.designs = ['d', ...PropertiesTool.getDesigns()]
    this.items = new PropertiesItems(
      PropertiesCache.get<PropertyList>([], this.getPathName(), () => {
        const properties = this.read()

        // new ToDivision(properties).to()

        console.info('[Properties]', 'init')

        return properties.get() ?? {}
      })
    )
  }

  /**
   * Collects into an array from all files and returns the content without processing them.<br>
   * Собирает в массив со всех файлов и возвращает содержимое не обрабатывая их.
   */
  get (): PropertyList | undefined {
    return this.items.get()
  }

  /**
   * Returns the name of the cache file. It contains all processed properties.<br>
   * Возвращает название файла для кэша.
   * Это полный массив со всеми обработанными свойствами.
   */
  private getPathName (): string {
    return `${this.designs.join('-')}-${FILE_CACHE}`
  }

  private read (): PropertiesItems {
    const path = new PropertiesPath(this.designs)
    const properties = new PropertiesItems(
      replaceRecursive(
        new PropertiesSettings(path).get() ?? {}
      )
    )

    return properties
  }
}
