import { forEach, isArray } from '../../functions/data.ts'

/**
 * The class checks the values that have been edited.<br>
 * Класс проверяет значения, которые были отредактированы.
 */
export class DesignChanged {
  private data: string[] = []
  private readonly cache: Record<string, any> = {}

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
   * Checks if there are changes in the data.<br>
   * Проверяет, есть ли изменения в данных.
   */
  isChanged (): boolean {
    return this.data.length > 0
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
   * Checking for data changes in all records.<br>
   * Проверка на изменения данных у всех записей.
   * @param props base data /<br>базовые данные
   */
  addByCache (props: Record<string, any>): this {
    forEach(props, (prop, name) => {
      if (!(name in this.cache) || this.cache[name] !== prop) {
        this.cache[name] = prop
        this.add(name)
      }
    })

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
