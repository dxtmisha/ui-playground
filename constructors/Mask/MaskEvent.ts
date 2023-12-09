import { getClipboardData } from '../../functions/string.ts'
import { makeStopPropagation } from '../../functions/event.ts'

import { MaskBuffer } from './MaskBuffer.ts'
import { MaskFocus } from './MaskFocus.ts'
import { MaskCharacterLength } from './MaskCharacterLength.ts'
import { MaskRight } from './MaskRight.ts'
import { MaskSelection } from './MaskSelection.ts'
import { MaskValueBasic } from './MaskValueBasic.ts'
import { MaskValidation } from './MaskValidation.ts'
import { MaskEmit } from './MaskEmit.ts'
import { MaskData } from './MaskData.ts'

import { type MaskEventSelection } from './typesBasic.ts'

/**
 * Class for working with events.<br>
 * Класс для работы с событиями.
 */
export class MaskEvent {
  protected change: boolean = false
  protected unidentified?: MaskEventSelection

  /**
   * Constructor
   * @param buffer
   * @param focus
   * @param characterLength
   * @param right
   * @param selection
   * @param valueBasic
   * @param validation
   * @param emit
   * @param data
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly buffer: MaskBuffer,
    protected readonly focus: MaskFocus,
    protected readonly characterLength: MaskCharacterLength,
    protected readonly right: MaskRight,
    protected readonly selection: MaskSelection,
    protected readonly valueBasic: MaskValueBasic,
    protected readonly validation: MaskValidation,
    protected readonly emit: MaskEmit,
    protected readonly data: MaskData
  ) {
  }

  /**
   * Capture of the event in focus.<br>
   * Перехват события в фокусе.
   * @param event event object /<br>объект события
   */
  onFocus (event: FocusEvent): void {
    this.change = false
    this.focus.in()

    this.emit
      .set('focus', event)
      .go()
  }

  /**
   * Capture of the event when focus is lost.<br>
   * Перехват события при потере фокуса.
   * @param event event object /<br>объект события
   */
  onBlur (event: FocusEvent): void {
    console.log('this.change', this.change)
    if (this.change) {
      this.emit
        .setType('change')
        .go()
    }

    this.focus.out()
    this.emit
      .set('blur', event)
      .go()
  }

  /**
   * Intercepting keypress to get a character.<br>
   * Перехват нажатия для получения символа.
   * @param event invoked event /<br>вызываемое событие
   */
  onKeydown (event: KeyboardEvent): void {
    const info = this.getSelectionInfo(event)
    const {
      start,
      end
    } = info

    this.emit
      .set('keydown', event)
      .go()

    if (this.isMetaKey(event)) {
      return undefined
    }

    if (this.isKey(event)) {
      if (event.key === 'Backspace') {
        if (start > 0 || start !== end) {
          this.data.pop(start, end)
        }
      } else if (event.key.length <= 1) {
        if (start === end) {
          console.log('event.key', event.key)
          if (this.buffer.go(event.key)) {
            this.data.add(start, event.key)
          }
        } else {
          this.data.pop(start, end)
            .add(this.selection.getShift(), event.key)
        }
      } else if ([
        'ArrowUp',
        'ArrowRight',
        'ArrowDown',
        'ArrowLeft'
      ].indexOf(event.key) >= 0) {
        this.makeToEnd(event)
      }
    } else {
      this.unidentified = info
    }
  }

  /**
   * Intercepting the event before data modification.<br>
   * Перехват события перед изменением данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onBeforeinput (event: InputEvent): void {
    this.emit
      .set('beforeinput', event)
      .go()

    console.log('beforeinput')

    if (!this.unidentified) {
      this.makeChange(event)
      makeStopPropagation(event)
    }
  }

  /**
   * Intercepting the event during data modification.
   * Перехват события при изменении данных.
   * @param event invoked event /<br>вызываемое событие
   */
  onInput (event: InputEvent): void {
    if (this.unidentified) {
      const target = event.target as HTMLInputElement

      if (
        this.unidentified.length > target.value.length ||
        this.unidentified.start !== this.unidentified.end
      ) {
        this.data.pop(this.unidentified.start, this.unidentified.end)
      }

      if ('data' in event) {
        if (
          event.data &&
          this.buffer.go(event.data)
        ) {
          this.data.add(this.unidentified.start, event.data)
        }
      } else {
        this.data.reset(target.value)
      }

      this.makeChange(event)
      this.unidentified = undefined
    }
  }

  /**
   * Intercepting the event of data insertion from the buffer.<br>
   * Перехват события вставки данных из буфера.
   * @param event invoked event /<br>вызываемое событие
   */
  onPaste (event: ClipboardEvent): void {
    const {
      start,
      end
    } = this.getSelectionInfo(event)

    getClipboardData(event)
      .then((data) => {
        const text = data.split('')

        if (start === end) {
          this.data.add(start, text)
        } else {
          this.data.pop(start, end)
            .add(this.selection.getShift(), text)
        }

        this.change = true
        this.emit
          .set('paste', event)
          .go()
      })
      .catch(error => console.error('getClipboardData', error))
  }

  /**
   * Intercepting the change event, this is for intercepting the browser’s autocomplete event.<br>
   * Перехват события изменения, это для перехвата события автозаполнения в браузере.
   * @param event invoked event /<br>вызываемое событие
   */
  onChange (event: Event): void {
    const target = event.target as HTMLInputElement

    this.data.reset(target.value)
    this.emit
      .set('change', event)
      .go()
  }

  /**
   * Intercepting the click event to change the selection location, if necessary.<br>
   * Перехват события клика для изменения места выделения, если это необходимо.
   * @param event invoked event /<br>вызываемое событие
   */
  onClick (event: MouseEvent): void {
    this.makeToEnd(event)
    this.makeToStart(event)
  }

  /**
   * Was the meta button pressed.<br>
   * Была ли нажата мета-кнопка.
   * @param event invoked event /<br>вызываемое событие
   */
  protected isMetaKey (event: KeyboardEvent): boolean {
    return event.metaKey || event.altKey || event.ctrlKey
  }

  /**
   * Checks the key values in the event.<br>
   * Проверяет значения key в событии.
   * @param event invoked event /<br>вызываемое событие
   */
  protected isKey (event: KeyboardEvent): boolean {
    return 'key' in event && event.key !== 'Unidentified'
  }

  /**
   * Getting data about the selection at the event element.<br>
   * Получение данных о выделении у элемента события.
   * @param event invoked event /<br>вызываемое событие
   */
  protected getSelectionInfo (event: Event): MaskEventSelection {
    const target = event.target as HTMLInputElement

    return {
      target,
      start: target.selectionStart ?? 0,
      end: target.selectionEnd ?? 0,
      length: target.value.length
    }
  }

  /**
   * Preparing to send an event.<br>
   * Подготовка для отправки события.
   * @param event invoked event /<br>вызываемое событие
   */
  protected makeChange (event: Event): void {
    this.change = true

    this.emit.set('input', event)

    if (this.buffer.is()) {
      return
    }

    this.emit.go()
    this.emit.resetType()
  }

  /**
   * Changes the cursor position if the alignment is right.<br>
   * Изменяет место указателя, если выравнивание справа.
   * @param event invoked event /<br>вызываемое событие
   */
  protected makeToEnd (event: Event): void {
    if (this.right.isRight()) {
      const length = this.valueBasic.getLength()
      const {
        target,
        start,
        end
      } = this.getSelectionInfo(event)

      if (start > length) {
        target.selectionStart = length
      }

      if (end > length) {
        target.selectionEnd = length
      }
    }
  }

  /**
   * Check when selecting from the front, before all special characters.<br>
   * Проверка при выделении спереди, перед всеми специальными символами.
   * @param event invoked event /<br>вызываемое событие
   */
  protected makeToStart (event: Event): void {
    const selection = this.selection.getFirst()
    const {
      target,
      start
    } = this.getSelectionInfo(event)

    if (start < selection) {
      target.selectionStart = selection
      target.selectionEnd = selection
    }
  }
}
