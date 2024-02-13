import { MaskPattern } from './MaskPattern'
import { MaskValue } from './MaskValue'

import { type InputValidationItem } from '../Input/typesBasic'

/**
 * Class for working with the validity of entered data.<br>
 * Класс для работы с валидностью введенных данных.
 */
export class MaskValidation {
  /**
   * Constructor
   * @param pattern
   * @param value
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly pattern: MaskPattern,
    protected readonly value: MaskValue
  ) {
  }

  /**
   * Checks if the current group has an error.<br>
   * Проверяет, есть ли ошибка у текущей группы.
   * @param groupName group name /<br>название группы
   */
  isError (groupName: string): boolean {
    const groupError = this.get()?.group

    return Boolean(
      groupError && (
        groupError === groupName ||
        groupError === 'check'
      )
    )
  }

  /**
   * Checks the correctness of filling in the values.<br>
   * Проверяет корректность заполнения значений.
   */
  checkValidity (): boolean {
    return this.get() === undefined
  }

  /**
   * We get an object with information about the error if there is an error, or undefined.<br>
   * Получаем объект с информацией об ошибке, если есть ошибка, или undefined.
   */
  get (): InputValidationItem {
    for (const input of Object.values(this.pattern.getInputList())) {
      const item = this.value.getInfoItem(input.group)

      if (item && item.full) {
        const check = input.check(item.value)

        if (check && !check.status) {
          return check
        }
      }
    }

    return this.getValidationCheck()
  }

  /**
   * Getting an error message.<br>
   * Получение сообщения об ошибке.
   */
  getMessage (): string {
    return this.get()?.validationMessage ?? ''
  }

  /**
   * Getting global check data.<br>
   * Получение данных глобальной проверки.
   */
  protected getValidationCheck (): InputValidationItem {
    if (this.value.isFull()) {
      const item = this.value.getForCheck()

      if (this.pattern.isCheck()) {
        const check = this.pattern.getInput(item.group)?.check(item.value)

        if (check && !check.status) {
          return check
        }
      }

      return {
        value: item.value,
        required: true
      }
    }

    return {
      value: this.value.get(),
      required: false
    }
  }
}
