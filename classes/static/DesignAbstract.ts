import { DesignChanged } from './DesignChanged.ts'

/**
 * Base class for working with the constructor.<br>
 * Базовый класс для работы с конструктором.
 */
export abstract class DesignAbstract<
  T extends Record<string, any>,
  C extends Record<string, any>
> {
  protected readonly event: C = {} as C
  protected readonly changed: DesignChanged

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   */
  protected constructor (
    protected readonly props: T,
    protected readonly callback?: (event: C) => void
  ) {
    this.changed = new DesignChanged()
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  make (): this {
    this.makeCallback()
    return this
  }

  /**
   * Checks if there are values in the property.<br>
   * Проверяет, есть ли значения в свойстве.
   * @param name property names /<br>названия свойств
   */
  protected is<K extends keyof T> (name: K): boolean {
    return name in this.props
  }

  /**
   * Checks if the value has been changed by the property name.<br>
   * Проверяет, было ли изменено значение по названию свойства.
   * @param name property names /<br>названия свойств
   */
  protected isChanged<K extends keyof T & string> (name: K): boolean {
    return !(name in this.event) || this.changed.is(name)
  }

  /**
   * Returns the property value by its name.<br>
   * Возвращает значение свойства по его названию.
   * @param name property names /<br>названия свойств
   */
  protected get<K extends keyof T> (name: K): T[K] | undefined {
    return this.props?.[name]
  }

  /**
   * Updates the property values and triggers data enumeration if the make value is true.<br>
   * Обновляет значения свойства и вызывает перечисление данных, если значение make = true.
   * @param name property names /<br>названия свойств
   * @param value new property value /<br>новое значение свойства
   * @param make call to update the value /<br>вызов обновления значения
   */
  protected set<K extends keyof T, V extends T[K]> (
    name: K & string,
    value?: V,
    make = true
  ): this {
    if (this.props?.[name] !== value) {
      this.props[name] = value as any
      this.changed.add(name)

      if (make) {
        this.make()
      }
    }

    return this
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  protected makeCallback (): void {
    if (this.callback) {
      this.initEvent()

      this.callback(this.event)
      this.changed.reset()
    }
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected abstract initEvent (): void
}
