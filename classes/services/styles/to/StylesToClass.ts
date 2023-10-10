import { StylesToAbstract } from './StylesToAbstract.ts'

/**
 * Class for adding a class or subclass to a property.<br>
 * Класс для добавления класса или подкласса к свойству.
 */
export class StylesToClass extends StylesToAbstract {
  protected treatment (): string[] {
    return [
      ...this.addEmptyString(),
      `${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
