import { DesignAbstract } from './DesignAbstract.ts'

/**
 * Base class for working with the constructor.<br>
 * Базовый класс для работы с конструктором.
 */
export abstract class DesignAsyncAbstract<
  T extends Record<string, any>,
  C extends Record<string, any>
> extends DesignAbstract<T, C> {
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  make (): this {
    this.makeCallback().then()
    return this
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  async makeCallback (): Promise<void> {
    const changed = this.getChanged()

    changed.addByCache(this.props)
    await this.initEvent()

    if (this.callback) {
      this.callback(this.event)
    }

    changed.reset()
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected abstract initEvent (): Promise<void>
}
