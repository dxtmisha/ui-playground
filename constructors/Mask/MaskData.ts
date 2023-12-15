import { isFilled } from '../../functions/data.ts'
import { toArray } from '../../functions/object.ts'

import { MaskType } from './MaskType.ts'
import { MaskBuffer } from './MaskBuffer.ts'
import { MaskFocus } from './MaskFocus.ts'
import { MaskRubberTransition } from './MaskRubberTransition.ts'
import { MaskDate } from './MaskDate.ts'
import { MaskMatch } from './MaskMatch.ts'
import { MaskRubber } from './MaskRubber.ts'
import { MaskItem } from './MaskItem.ts'
import { MaskSelection } from './MaskSelection.ts'
import { MaskCharacter } from './MaskCharacter.ts'
import { MaskValueBasic } from './MaskValueBasic.ts'
import { MaskValue } from './MaskValue.ts'
import { MaskEmit } from './MaskEmit.ts'

import { type MaskElementInput } from './typesBasic.ts'

/**
 * Class for working with behavior when entering data.<br>
 * Класс для работы с поведением при вводе данных.
 */
export class MaskData {
  /**
   * Constructor
   * @param type
   * @param buffer
   * @param focus
   * @param rubberTransition
   * @param date
   * @param match
   * @param rubber
   * @param mask
   * @param selection
   * @param character
   * @param valueBasic
   * @param value
   * @param emit
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly type: MaskType,
    protected readonly buffer: MaskBuffer,
    protected readonly focus: MaskFocus,
    protected readonly rubberTransition: MaskRubberTransition,
    protected readonly date: MaskDate,
    protected readonly match: MaskMatch,
    protected readonly rubber: MaskRubber,
    protected readonly mask: MaskItem,
    protected readonly selection: MaskSelection,
    protected readonly character: MaskCharacter,
    protected readonly valueBasic: MaskValueBasic,
    protected readonly value: MaskValue,
    protected readonly emit: MaskEmit,
    protected element?: MaskElementInput
  ) {
  }

  /**
   * Changes in an element.<br>
   * Изменения в элементе.
   * @param element new element /<br>новый элемент
   */
  setElement (element: MaskElementInput): this {
    this.element = element
    return this
  }

  /**
   * Adding new characters that can be entered by the user.<br>
   * Добавление новых вводимых символов.
   * @param selection number of the selected key /<br>номер выделенного ключа
   * @param chars a list of values that are entered by the user /<br>список вводимых значений
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  add (
    selection: number,
    chars: string | string[],
    focus = true
  ): boolean {
    let update = false

    this.selection.setByMask(selection, focus)
    this.rubberTransition.reset()

    toArray(chars).forEach(char => {
      const groupName = this.character.getFocus()
      const immediate = this.character.getImmediate()

      this.selection.setShift(
        this.rubber.update(this.value.getInfo(), immediate, char)
      )

      if (this.rubberTransition.is()) {
        this.selection.setByMask(
          this.mask.getByChar(this.rubberTransition.get(), this.selection.getImmediate()) + 1,
          focus
        )
      } else if (this.match.is(char, groupName)) {
        this.character.shift()

        if (
          this.character.getFocus() && (
            this.mask.getMaxLength() > this.valueBasic.getLength() ||
            this.character.isCharDelete()
          )
        ) {
          this.character.add(char)
          update = true
        }
      }
    })

    this.goSelection()
    return update
  }

  /**
   * Removing selected input characters.<br>
   * Удаление выделенных вводимых символов.
   * @param start location of the start of the selected area /<br>место начала выделенной области
   * @param end location of the end of the selected area /<br>конечный место выделенной области
   * @param focus is the element focused /<br>находится ли элемент в фокусе
   */
  pop (
    start: number,
    end: number = start,
    focus = true
  ): this {
    if (
      start >= 0 &&
      end <= this.mask.getMaxLength()
    ) {
      let quantity = this.mask.getQuantity(start, end)

      if (focus) {
        this.selection.setByMask(end)
      }

      while (quantity--) {
        this.rubberTransition.reset()

        this.character.pop()
        this.character.shift(0)

        this.selection.setShift(
          this.rubber.pop(this.character.getFocus())
        )
      }

      this.goSelection()
    }

    return this
  }

  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset (value = ''): this {
    this.character.reset()
    this.rubber.reset()

    if (isFilled(value)) {
      const chars = this.type.isDate() ? this.date.getValue(value) : value
      this.add(0, chars.split(''))
    }

    return this
  }

  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection (updateBuffer = true): this {
    if (this.focus.is()) {
      requestAnimationFrame(() => {
        if (
          this.element && (
            !updateBuffer ||
            !this.goBuffer()
          )
        ) {
          const length = this.valueBasic.getLength()
          const shift = this.selection.getShift()
          const newSelection = length < shift ? length : shift

          this.element.selectionEnd = newSelection
          this.element.selectionStart = newSelection
        }
      })
    }

    return this
  }

  /**
   * Checks if the data is in the buffer. If it is, then add it.<br>
   * Проверяет, если данный в буфер. Если есть, то добавляем.
   */
  protected goBuffer (): boolean {
    if (this.buffer.is()) {
      this.add(this.selection.getShift(), this.buffer.get())
      this.buffer.resetChars()

      return true
    }

    this.buffer.reset()
    this.emit.go()

    return false
  }
}
