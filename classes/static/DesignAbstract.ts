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
  protected changed?: DesignChanged<T>

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   * @param changedWatch base data /<br>данный для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: T,
    protected readonly callback?: (event: C) => void,
    protected readonly changedWatch?: string[]
  ) {
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
    return !(name in this.event) || this.getChanged().is(nameProp || name)
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
   * Getting an object to check for data changes.<br>
   * Получение объекта для проверки изменения данных.\
   */
  protected getChanged (): DesignChanged<T> {
    if (this.changed) {
      return this.changed
    }

    this.changed = new DesignChanged(this.props, this.changedWatch)
    return this.changed
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
      this.getChanged().add(name)

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
  makeCallback (): void {
    const changed = this.getChanged()

    changed.resetByCache()
    this.initEvent()
    this.makeCallbackItem()
    changed.reset()
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
