import { transformation } from '../../functions/data.ts'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BASIC = {
  cache: {
    index: 'UI_CACHE',
    value: 7 * 24 * 60 * 60
  },
  language: {
    index: 'UI_LANGUAGE',
    value: 'en-GB'
  },
  prefix: {
    index: 'UI_PREFIX',
    value: 'ui-playground-'
  }
}

export type EnvIndex = keyof typeof BASIC & string

/**
 * Class for working with Env.<br>
 * Класс для работы с Env.
 */
export class Env {
  /**
   * Constructor
   * @param index property name /<br>название свойства
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private index: EnvIndex
  ) {
    if (index in items) {
      return items[index]
    }

    items[index] = this
  }

  /**
   * Returns the values from the env environment.<br>
   * Возвращает значения из окружения env.
   * @param defaultValue default property value /<br>значение свойства по умолчанию
   */
  get<T> (defaultValue?: T): T {
    return transformation(
      import.meta.env?.[this.getName()] ??
      defaultValue ??
      this.getValue()
    )
  }

  /**
   * Getting a basic object with a key name and a default value.<br>
   * Получение базового объекта с названием ключа и значения по умолчанию.
   * @private
   */
  private getBasic () {
    return BASIC?.[this.index]
  }

  /**
   * Get the full key name in env.<br>
   * Получаем полное название ключа в env.
   */
  private getName (): string {
    return this.getBasic()?.index ?? this.index
  }

  /**
   * Gets values by its keys.<br>
   * Получает значения по его ключам.
   */
  private getValue () {
    return this.getBasic()?.value
  }
}

const items: Record<string, Env> = {}