import { WindowStatus } from './WindowStatus.ts'

// import { type WindowProps } from './props.ts'
import { WindowClasses } from './WindowClasses.ts'

export class Window {
  protected status: WindowStatus
  protected classes: WindowClasses

  constructor (
    // props: WindowProps,
    // element?: HTMLDivElement,
    className: string = 'is-window',
    classControl: string = 'is-control',
    classBody: string = 'is-body'
  ) {
    this.status = new WindowStatus()
    this.classes = new WindowClasses(
      this.status,
      className,
      classControl,
      classBody
    )
  }

  /**
   * Returns an object for working with classes.<br>
   * Возвращает объект для работы с классами.
   */
  getClasses (): WindowClasses {
    return this.classes
  }

  setElement (element?: HTMLDivElement): this {
    console.log('element', element)
    return this
  }
}
