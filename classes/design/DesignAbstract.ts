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
  protected readonly changed: DesignChanged<T>

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   * @param changed base data /<br>данный для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: T,
    protected readonly callback?: (event: C) => void,
    changed?: string[]
  ) {
    this.changed = new DesignChanged(props, changed)
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
   * @param nameProp names of properties of the input variable /<br>названия свойств входной переменной
   */
  protected isChanged<
    K extends keyof C & string,
    KT extends keyof T & string
  > (
    name: K,
    nameProp?: KT | KT[]
  ): boolean {
    return !(name in this.event) || this.changed.is(nameProp || name)
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  makeCallback (): void {
    if (this.changed.isChanged()) {
      this.initEvent()
      this.makeCallbackItem()
      this.changed.update()
    }
  }

  /**
   * The function calls an image call.<br>
   * Функция вызывает образный вызов.
   */
  protected makeCallbackItem (): void {
    if (this.callback) {
      this.callback(this.event)
    }
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected abstract initEvent (): void
}
