import { PropertiesTool } from './PropertiesTool.ts'
import { PropertiesItems } from './PropertiesItems.ts'

import { PropertiesCache } from './PropertiesCache.ts'
import { PropertiesPath } from './PropertiesPath.ts'

const FILE_CACHE = 'properties'

export class Properties {
  private readonly designs: string[]
  private data?: Record<string, any>

  /**
   * Constructor
   */
  constructor () {
    this.designs = ['d', ...PropertiesTool.getDesigns()]
  }

  /**
   * Collects into an array from all files and returns the content without processing them.<br>
   * Собирает в массив со всех файлов и возвращает содержимое не обрабатывая их.
   */
  getBasic () {
    if (!this.data) {
      this.data = new PropertiesItems(
        PropertiesCache.get([], this.getPathName(), () => {
          // const properties = this.__readBasic()

          // new ToDivision(properties).to()

          console.info('[Properties]', 'init')

          return { test: 'test' } // properties.get()
        })
      )
    }

    return this.data
  }

  /**
   * Returns the name of the cache file. It contains all processed properties.<br>
   * Возвращает название файла для кэша.
   * Это полный массив со всеми обработанными свойствами.
   */
  private getPathName (): string {
    return `${this.designs.join('-')}-${FILE_CACHE}`
  }

  private read () {
    const path = new PropertiesPath(this.designs)
  }
}
