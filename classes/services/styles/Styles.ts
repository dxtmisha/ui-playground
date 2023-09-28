import { Properties } from '../properties/Properties.ts'
import { StylesRoot } from './StylesRoot.ts'
import { PropertiesItems } from '../properties/PropertiesItems.ts'
import { PropertiesFile } from '../properties/PropertiesFile.ts'

export class Styles {
  private readonly properties: Properties

  /**
   * Constructor
   */
  constructor () {
    this.properties = new Properties()
  }

  init () {
    this.initRoot()
  }

  initRoot () {
    this.getByDesigns((
      design,
      items
    ) => {
      let file = ''

      file += ':root {'
      file += '  color: red;'
      file += '}'

      PropertiesFile.write([design], 'mainProperties', file, 'scss')

      // new StylesRoot(items).init()
    })
  }

  private getByDesigns (callback: (design: string, items: PropertiesItems) => void): void {
    const properties = this.properties.get().get()

    this.properties
      .get()
      .getDesigns()
      .forEach(design => {
        callback(
          design,
          new PropertiesItems(properties).setFocusDesign(design)
        )
      })
  }
}
