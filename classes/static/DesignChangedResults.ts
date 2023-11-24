import { forEach } from '../../functions/data.ts'

import { DesignChanged } from '../design/DesignChanged.ts'

/**
 * Class for working with cached results.<br>
 * Класс для работы с кэшированными результатами.
 */
export class DesignChangedResults<T extends Record<string, any>> {
  private results: Record<string, any> = {}
  private checks: Record<string, Record<string, any>> = {}
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
   * @param additionalCheck additional check for comparison /<br>дополнительная проверка для сравнения
   */
  get<R> (
    index: string,
    callback: () => R,
    additionalCheck?: Record<string, any>
  ): R {
    if (
      !(index in this.results) ||
      this.isCheck(index, additionalCheck) ||
      this.changed.isChanged()
    ) {
      this.results[index] = callback()
    }

    return this.results[index]
  }

  /**
   * Additional check for comparison.<br>
   * Дополнительная проверка для сравнения
   * @param index data for verification /<br>данные для проверки
   * @param checks значения для сравнения
   */
  private isCheck (
    index: string,
    checks?: Record<string, any>
  ): boolean {
    if (checks) {
      if (index in this.checks) {
        let value = false

        forEach(checks, (check, key) => {
          if (this.checks[index][key] !== check) {
            value = true
            this.checks[index][key] = check
          }
        })

        return value
      }

      this.checks[index] = { ...checks }
      return true
    }

    return false
  }
}
