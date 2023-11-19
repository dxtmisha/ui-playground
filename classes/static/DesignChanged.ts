import { forEach, isArray } from '../../functions/data.ts'

/**
 * The class checks the values that have been edited.<br>
 * Класс проверяет значения, которые были отредактированы.
 */
export class DesignChanged<T extends Record<string, any>> {
  private data: string[] = []
  private readonly cache: Record<string, any> = {}

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param watch data for tracking /<br>данные для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props?: T,
    protected readonly watch?: string[]
  ) {
  }

  /**
   * Checks if the value has been updated.<br>
   * Проверяет, обновлено ли значение.
   * @param name property name /<br>название свойства
   */
  is (name: string | string[]): boolean {
    if (isArray(name)) {
      return Boolean(this.data.find(item => name.indexOf(item) !== -1))
    }

    return this.data.indexOf(name) !== -1
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
   * Resets all values.<br>
   * Сбрасывает все значения.
   */
  reset (): this {
    this.data = []
    return this
  }

  /**
   * Checking for data changes in all records.<br>
   * Проверка на изменения данных у всех записей.
   */
  resetByCache (): this {
    if (this.props) {
      forEach(this.props, (prop, name) => {
        if (
          this.isWatch(name) &&
          this.cache?.[name] !== prop
        ) {
          this.cache[name] = prop
          this.data.push(name)
        }
      })
    }

    return this
  }

  /**
   * Checks if the current values need to be checked for changes.
   * Проверяет, нужно ли проверить текущие значения на изменения.
   * @param name property name /<br>название свойства
   */
  protected isWatch (name: string): boolean {
    return !this.watch || this.watch.indexOf(name) >= 0
  }
}
