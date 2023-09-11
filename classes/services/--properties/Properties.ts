import { replaceRecursive } from '../../../functions/object.ts'

import { PropertiesTool } from './PropertiesTool.ts'
import { PropertiesCache } from './PropertiesCache.ts'
import { PropertiesItems } from './PropertiesItems.ts'

import { PropertiesPath } from './PropertiesPath.ts'
import { PropertiesSettings } from './PropertiesSettings.ts'

const DIR_MAIN = ['main']

export class Properties {
  private readonly designs: string[]

  /**
   * Constructor
   */
  constructor () {
    this.designs = ['d', ...PropertiesTool.getDesigns()]
  }

  private read () {
    const path = new PropertiesPath(this.designs)

    return properties
  }
}
