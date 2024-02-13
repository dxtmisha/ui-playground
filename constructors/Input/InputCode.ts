import { type InputBasicProps } from './props'

/**
 * Class for processing standard error text.<br>
 * Класс для обработки стандартного текста ошибки.
 */
export class InputCode {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputBasicProps
  ) {
  }

  /**
   * Returning error text.<br>
   * Возвращают текст ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  get (state: ValidityState): string | undefined {
    const validationCode = this.props?.validationCode

    if (
      validationCode &&
      !state.valid
    ) {
      if (typeof validationCode === 'string') {
        return validationCode
      } else {
        const index = this.getIndex(state)

        if (
          index &&
          index in validationCode
        ) {
          return validationCode[index]
        }
      }
    }

    return undefined
  }

  /**
   * Returns error index.<br>
   * Возвращает индекс ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  protected getIndex (state: ValidityState): keyof ValidityState | undefined {
    for (const index in state) {
      if (
        index !== 'valid' &&
        state[index as keyof ValidityState]
      ) {
        return index as keyof ValidityState
      }
    }

    return undefined
  }
}
