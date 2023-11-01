import { isArray } from '../../functions/data.ts'

/**
 * The class checks the values that have been edited.<br>
 * Класс проверяет значения, которые были отредактированы.
 */
export class DesignChanged {
  private data: string[] = []

  /**
   * Checks if the value has been updated.<br>
   * Проверяет, обновлено ли значение.
   * @param value property name /<br>название свойства
   */
  is (value: string | string[]): boolean {
    if (isArray(value)) {
      return Boolean(this.data.find(item => value.indexOf(item) !== -1))
    }

    return this.data.indexOf(value) !== -1
  }

  /**
   * Getting a list of updated values.<br>
   * Получение списка обновленных значений.
   */
  get (): string[] {
    return this.data
  }

  /**
   * Adds a new property that has been updated.<br>
   * Добавляет новое свойство, которое было обновлено.
   * @param value property name /<br>название свойства
   */
  add (value: string | string[]): this {
    if (isArray(value)) {
      this.data.push(...value)
    } else {
      this.data.push(value)
    }

    return this
  }

  /**
   * Resets all values.<br>
   * Сбрасывает все значения.
   */
  reset (): this {
    this.data = []
    return this
  }
}
