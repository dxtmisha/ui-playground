import { MaskBuffer } from './MaskBuffer.ts'

/**
 * Class for storing information about the focus of an element.<br>
 * Класс для хранения информации о фокусировке элемента.
 */
export class MaskFocus {
  protected value: boolean = false

  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly buffer: MaskBuffer
  ) {
  }

  /**
   * Checks for focus on the element.<br>
   * Проверяет наличие фокуса у элемента.
   */
  is (): boolean {
    return this.value
  }

  /**
   * Set the element state to focused.<br>
   * Установить состояние элемента на фокусированное.
   */
  in (): void {
    this.value = true
    this.buffer.reset()
  }

  /**
   * Reset the focus of the element.<br>
   * Сбросить фокус элемента.
   */
  out (): void {
    this.value = false
    this.buffer.reset()
  }
}
