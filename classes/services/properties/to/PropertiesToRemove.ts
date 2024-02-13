import { isObjectNotArray } from '../../../../functions/data'
import { getColumn } from '../../../../functions/object'

import { PropertiesToAbstract } from './PropertiesToAbstract'

import { PropertyKey } from '../../../../types/property'

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
