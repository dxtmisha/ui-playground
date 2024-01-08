import { isObjectNotArray } from '../../../../functions/data.ts'
import { getColumn } from '../../../../functions/object.ts'

import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import { PropertyKey } from '../../../../types/property.ts'

/**
 * Class for removing a property.<br>
 * Класс для удаления свойства.
 */
export class PropertiesToRemove extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '007-02-remove'

  protected init (): void {
    this.items.find(({ item }) => item?.[PropertyKey.remove] ?? false)
      .forEach(({
        name,
        parent,
        parents
      }) => {
        if (
          parent &&
          isObjectNotArray(parent.value)
        ) {
          console.warn('[Remove]', `{${getColumn(parents, 'name').join('.')}.${name}}`)
          delete parent.value[name]
        }
      })
  }
}
