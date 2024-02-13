import { InputType } from './InputType'
import type { InputBasicProps } from './props'

const PATTERNS: Record<string, string> = {
  email: '[\\S]+@[\\S]{2,}\\.[\\w]{2,}',
  password: '[0-9a-zA-Z-!@#$%^&*]+'
}

/**
 * Class for working with checks by regular expressions.<br>
 * Класс для работы с проверкой по регулярным выражениям.
 */
export class InputPattern {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type object for working with input type /<br>объект для работы с типом ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputBasicProps,
    protected readonly type: InputType
  ) {
  }

  /**
   * Returns regular expressions.<br>
   * Возвращает регулярные выражения.
   */
  get (): string | undefined {
    if (this.props?.pattern) {
      return this.props.pattern
    }

    const type = this.type.get()

    if (type in PATTERNS) {
      return PATTERNS[type]
    }

    return undefined
  }
}
