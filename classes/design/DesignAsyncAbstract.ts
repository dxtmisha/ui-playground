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
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make (compelled?: boolean): this {
    this.makeCallback(compelled).then()
    return this
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  async makeCallback (compelled?: boolean): Promise<void> {
    if (
      compelled ||
      this.changed.isChanged()
    ) {
      await this.initEvent()
      this.makeCallbackItem()
      this.changed.update()
    }
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected abstract initEvent (): Promise<void>
}
