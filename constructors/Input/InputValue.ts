import { isArray, isFilled, isObject } from '../../functions/data.ts'

import { InputElement } from './InputElement.ts'

import { type InputProps } from './props.ts'
import { InputChange } from './InputChange.ts'

/**
 * Class for working with input values.<br>
 * Класс для работы со значениями инпута.
 */
export class InputValue<V = any> {
  protected value?: V
  protected valueIs: boolean = false

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputProps<V>,
    protected readonly element: InputElement,
    protected readonly change: InputChange,
    protected readonly callback: () => void
  ) {
    this.value = this.getOriginal()
  }

  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  is (): boolean {
    return this.valueIs ||
      this.getBoolean() ||
      Boolean(this.props?.placeholder)
  }

  /**
   * Returns the current value.<br>
   * Возвращает текущее значение.
   */
  get (): V | undefined {
    return this.value
  }

  /**
   * Returns the current value, converted to a string.<br>
   * Возвращает текущее значение, преобразованное в строку.
   */
  getString (): string {
    const value = this.get()

    if (isArray(value)) {
      return value.join(', ')
    }

    if (isObject(value)) {
      return JSON.stringify(value)
    }

    if (value === true) {
      return '1'
    }

    if (value === false) {
      return '0'
    }

    if (isFilled(value)) {
      return value?.toString?.() ?? ''
    }

    return ''
  }

  /**
   * Returns the current value, converted to a number.<br>
   * Возвращает текущее значение, преобразованное в номер.
   */
  getNumber (): number {
    if (this.getBoolean()) {
      return parseFloat(this.getString())
    }

    return 0
  }

  /**
   * Returns the current value of type boolean.<br>
   * Возвращает текущее значение типа boolean.
   */
  getBoolean (): boolean {
    return isFilled(this.get())
  }

  /**
   * Returns the original value.<br>
   * Возвращает оригинальное значение.
   */
  getOriginal (): V | undefined {
    return this.props?.value ?? this.props?.modelValue
  }

  /**
   * Returns the length of the entered value.<br>
   * Возвращает длину введенного значения.
   */
  getLength (): number {
    const value = this.get()

    if (isArray(value)) {
      return value.length
    }

    if (isObject(value)) {
      return Object.keys(value).length
    }

    return this.getString().length ?? 0
  }

  /**
   * Changes the value.<br>
   * Изменяет значение.
   * @param value changeable value /<br>изменяемое значение
   */
  set (value: V): this {
    if (this.value !== value) {
      this.value = value
      this.change.set(this.getOriginal() !== value)
      this.callback()
    }

    return this
  }

  /**
   * Changes the values by the selected element.<br>
   * Изменяет значения по выбранному элементу.
   * @param event event object /<br>объект события
   */
  setByEvent (event: Event): this
  setByEvent (value: Record<string, any>): this
  setByEvent (value: V): this
  setByEvent (eventValue: Event | Record<string, any> | V): this {
    switch (typeof eventValue) {
      case 'object':
        if (eventValue) {
          if ('value' in eventValue) {
            this.set(eventValue.value)
          } else if ('target' in eventValue) {
            this.setByTarget(eventValue.target as HTMLInputElement)
          }

          if ('valueIs' in eventValue) {
            this.valueIs = eventValue.valueIs
          }
        }

        break
      default:
        this.set(eventValue)
        break
    }

    return this
  }

  /**
   * Changes the values by the selected element.<br>
   * Изменяет значения по выбранному элементу.
   * @param target selected elements /<br>выбранные элементы
   */
  setByTarget (target: HTMLInputElement): this {
    const value = (this.isCheckbox(target) ? target.checked : target.value) as V

    this.set(value)
    return this
  }

  /**
   * Changes the value by the checked property.<br>
   * Изменяет значение по свойству checked.
   * @param event event value /<br>значение события
   */
  setByChecked (event: Event): this {
    const input = event.target as HTMLInputElement

    this.set(input.checked as V)
    return this
  }

  /**
   * Changes the value for radio type.<br>
   * Изменяет значение для типа radio.
   * @param event event object /<br>объект события
   */
  setByRadio (event: Event): this {
    const input = event.target as HTMLInputElement
    const value: V = (input.checked ? input.value : '') as V

    this.set(value)
    return this
  }

  /**
   * Changes the values to the original ones.<br>
   * Изменяет значения на оригинальные.
   */
  toOriginal (): this {
    this.value = this.getOriginal()
    return this
  }

  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear (): this {
    this.set('' as V)
    this.element.clear()

    this.valueIs = false

    return this
  }

  /**
   * Is the selected type a checkbox.<br>
   * Является ли выбранный тип чекбокс.
   * @param target selected elements /<br>выбранные элементы
   */
  protected isCheckbox (target: HTMLInputElement): boolean {
    return target.type === 'checkbox'
  }
}
