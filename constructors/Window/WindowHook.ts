import { WindowProps } from './props.ts'

/**
 * A class for working with hooks when opening and closing a window.<br>
 * Класс для работы с хуками при открытии и закрытии окна.
 */
export class WindowHook {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps
  ) {
  }

  /**
   * Hook for preparing elements before opening/closing.<br>
   * Хук для подготовки элементов перед открытием/закрытием.
   * @param open current state of the window /<br>текущее состояние окна
   */
  async preparation (open: boolean): Promise<void> {
    if (this.props.preparation) {
      await this.props.preparation(open)
    }
  }

  /**
   * Hook before opening/closing.<br>
   * Хук перед открытием/закрытием.
   * @param open current state of the window /<br>текущее состояние окна
   */
  async beforeOpening (open: boolean): Promise<boolean> {
    if (this.props.beforeOpening) {
      return await this.props.beforeOpening(!open)
    }

    return true
  }

  /**
   * Hook after opening/closing.<br>
   * Хук после открытия/закрытия.
   * @param open current state of the window /<br>текущее состояние окна
   */
  async opening (open: boolean): Promise<boolean> {
    if (this.props.opening) {
      return await this.props.opening(open)
    }

    return false
  }
}
