import { isFilled, isObjectNotArray } from '../../../../functions/data.ts'
import { getColumn } from '../../../../functions/object.ts'

import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import { PropertyType } from '../../../../types/property.ts'

const TYPES = [
  PropertyType.var,
  PropertyType.property
]

/**
 * Class for cleaning all empty entries for clothing the array.<br>
 * Класс для очистки всех пустых записей для облечения массива.
 */
export class PropertiesToNone extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '999-none'

  /**
   * Removes all empty entries from the data.<br>
   * Удаляет у данных всех пустых записей.
   */
  protected init (): void {
    this.items.findVariable(TYPES)
      .forEach(({
        name,
        value,
        parent,
        parents
      }) => {
        if (
          parent &&
          !isFilled(value) &&
          isObjectNotArray(parent.value)
        ) {
          console.error('[None]', `{${getColumn(parents, 'name').join('.')}.${name}}`)
          delete parent.value[name]
        }
      })
  }
}
