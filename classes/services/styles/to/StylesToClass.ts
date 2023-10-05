import { StylesTo } from './StylesTo.ts'

/**
 * Class for adding a class or subclass to a property.<br>
 * Класс для добавления класса или подкласса к свойству.
 */
export class StylesToClass extends StylesTo {
  treatment (): string[] {
    return [
      `${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
