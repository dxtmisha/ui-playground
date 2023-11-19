import { DesignChanged } from './DesignChanged.ts'

/**
 * Class for working with cached results.<br>
 * Класс для работы с кэшированными результатами.
 */
export class DesignChangedResults<T extends Record<string, any>> {
  private results: Record<string, any> = {}
  private changed: DesignChanged<T>

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param watch data for tracking /<br>данные для слежения
   */
  constructor (
    props: T,
    watch: string[]
  ) {
    this.changed = new DesignChanged(props, watch)
  }

  /**
   * Getting data by its index.<br>
   * Получение данных по его индексу.
   * @param index data for verification /<br>данные для проверки
   * @param callback callable function /<br>вызываемая функция
   */
  get<R> (
    index: string,
    callback: () => R
  ): R {
    if (
      !(index in this.results) ||
      this.changed
        .reset()
        .resetByCache()
        .isChanged()
    ) {
      this.results[index] = callback()
    }

    return this.results[index]
  }
}
