import { isArray } from '../../functions/data.ts'

/**
 * The class checks the values that have been edited.<br>
 * Класс проверяет значения, которые были отредактированы.
 */
export class DesignChanged<T extends Record<string, any>> {
  private readonly cache: Record<string, any> = {}

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param watch data for tracking /<br>данные для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: T,
    protected readonly watch: string[] = Object.keys(props)
  ) {
  }

  /**
   * Checks if the value has been updated.<br>
   * Проверяет, обновлено ли значение.
   * @param name property name /<br>название свойства
   */
  is (name: string | string[]): boolean {
    if (isArray(name)) {
      return Boolean(name.find(index => this.isDifferent(index)))
    }

    return this.isDifferent(name)
  }

  /**
   * Checks if there are changes in the data.<br>
   * Проверяет, есть ли изменения в данных.
   */
  isChanged (): boolean {
    const props = this.props

    return Boolean(
      this.watch.find(index => {
        return index in props && this.isDifferent(index)
      })
    )
  }

  /**
   * Updates all values.<br>
   * Обновляет все значения.
   */
  update (): void {
    const props = this.props

    this.watch.forEach(index => {
      if (
        index in props &&
        this.isDifferent(index)
      ) {
        this.cache[index] = props[index]
      }
    })
  }

  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param name property name /<br>название свойства
   */
  protected isDifferent (name: string): boolean {
    return this.cache?.[name] !== this.props?.[name]
  }
}
