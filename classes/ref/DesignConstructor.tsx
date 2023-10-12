import { toKebabCase } from '../../functions/string.ts'

export type ConstrItemType = Record<string, any>

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type ConstrEmitItemType<T extends ConstrItemType> = T[keyof T]
export type ConstrEmitType<T extends ConstrItemType = ConstrItemType> = UnionToIntersection<ConstrEmitItemType<{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: (evt: K, ...args: T[K]) => void
}>>

/**
 * Class for collecting all functional components.<br>
 * Класс для сбора всех функциональных компонентов.
 */
export class DesignConstructor<
  SETUP extends ConstrItemType,
  EMITS extends ConstrItemType,
  EXPOSE extends ConstrItemType,
  P extends ConstrItemType
> {
  protected readonly name: string

  constructor (
    name: string,
    protected readonly props?: Readonly<P>,
    protected readonly emits?: ConstrEmitType<EMITS>
  ) {
    this.name = toKebabCase(name)
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initSetup (): SETUP {
    return {} as SETUP
  }

  /**
   * A method for rendering
   *
   * Метод для рендеринга
   * @protected
   */
  protected initRender (): JSX.Element {
    return <div />
  }

  /**
   * List of available external variables.<br>
   * Список доступных переменных извне.
   */
  expose (): EXPOSE {
    return {} as EXPOSE
  }
}
