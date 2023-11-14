import { forEach } from '../../../functions/data.ts'
import { getExp, strFill } from '../../../functions/string.ts'

// TODO
export class MaskRubberItem {
  protected value: Record<string, number> = {}

  /**
   * Checks if there is a value in the record.<br>
   * Проверяет, есть ли значение в записи.
   * @param index value for checking /<br>значение для проверки
   */
  is (index: string): boolean {
    return index in this.value
  }

  /**
   * Getting the list of records.<br>
   * Получение списка записей.
   */
  get (): Record<string, number> {
    return this.value
  }

  /**
   * Getting the value by index.<br>
   * Получение значения по индексу.
   * @param index value for checking /<br>значение для проверки
   */
  getByIndex (index: string): number {
    return this.value?.[index] ?? 0
  }

  /**
   * Adding a new record.<br>
   * Добавление новой записи.
   * @param index value for checking /<br>значение для проверки
   */
  add (index: string): this {
    this.value[index] = this.getByIndex(index) + 1
    return this
  }

  /**
   * Deleting a record by its value.<br>
   * Удаление записи по ее значению.
   * @param index value for checking /<br>значение для проверки
   */
  pop (index: string): boolean {
    if (this.is(index)) {
      if (--this.value[index] <= 0) {
        delete this.value[index]
      }

      return true
    }

    return false
  }

  /**
   * Deleting a record by its value.<br>
   * Удаление записи по ее значению.
   */
  reset (): this {
    this.value = {}
    return this
  }

  // TODO
  expandMask (mask: string): string {
    let value = mask

    forEach(this.value, (length, index) => {
      value = value.replace(
        getExp(index, 'ig', '([:value]+)'),
        (all: string) => `${all}${strFill(index, length)}`
      )
    })

    return value
  }
}
