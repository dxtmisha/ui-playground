import { InputCode } from './InputCode.ts'

import { type InputValidityProps } from './propsBasic.ts'

export class InputValidation {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param code object for working with error codes /<br>объект для работы с кодами ошибок
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputValidityProps,
    protected readonly code: InputCode
  ) {
  }
}
