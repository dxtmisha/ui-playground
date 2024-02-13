import { transformation } from '../functions/data'

const BASIC = {
  api: {
    index: 'UI_API_URL',
    value: '/api/'
  },
  apiTranslate: {
    index: 'UI_API_TRANSLATE',
    value: 'ui/?command=translate'
  },
  cache: {
    index: 'UI_CACHE',
    value: 7 * 24 * 60 * 60
  },
  iconPath: {
    index: 'UI_ICON_PATH',
    value: '/icons/'
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
    private index: EnvIndex | string
  ) {
  }

  /**
   * Returns the values from the env environment.<br>
   * Возвращает значения из окружения env.
   * @param defaultValue default property value /<br>значение свойства по умолчанию
   */
  get<T> (defaultValue?: T): T {
    try {
      if (import.meta) {
        const value =
          import.meta.env?.[this.getName()] ??
          import.meta.env?.[`VITE_${this.getName()}`]

        if (value) {
          return value
        }
      }
    } catch (_) {
    }

    return transformation(
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
    return BASIC?.[this.index as EnvIndex]
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
