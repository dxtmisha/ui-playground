import { PropertiesItems } from './PropertiesItems.ts'
import { PropertiesTool } from './PropertiesTool.ts'

export class Properties {
  private readonly designs: string[]
  private readonly data?: Record<string, any>

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
        Cache.get([], this.getPathName(), () => {
          const properties = this.__readBasic()

          new ToDivision(properties).to()

          console.info('[Properties]', 'init')

          return properties.get()
        })
      )
    }

    return this.__basic
  }
}
