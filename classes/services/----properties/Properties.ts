import { replaceRecursive } from '../../../functions/object.ts'

import { PropertiesTool } from './PropertiesTool.ts'
import { PropertiesCache } from './PropertiesCache.ts'
import { PropertiesPath } from './PropertiesPath.ts'

import { PropertiesItems } from './PropertiesItems.ts'
import { PropertiesSettings } from './PropertiesSettings.ts'
import { PropertiesMain } from './PropertiesMain.ts'

import { PropertiesToReplace } from './to/PropertiesToReplace.ts'
import { PropertiesToPalette } from './to/PropertiesToPalette.ts'

import { type PropertyList } from '../../../types/property.ts'
import { PropertiesToLink } from './to/PropertiesToLink.ts'

export class Properties {
  private readonly designs: string[]
  private items: PropertiesItems

  constructor () {
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

  private read (): PropertiesItems {
    const properties = new PropertiesItems(
      replaceRecursive(
        new PropertiesSettings(path).get(),
        new PropertiesMain(path).get()
      )
    )
    new PropertiesToPalette(properties).to()
    new PropertiesToLink(properties).to()

    return properties
  }
}
