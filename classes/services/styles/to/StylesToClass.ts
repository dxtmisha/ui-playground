import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for adding a class or subclass to a property.<br>
 * Класс для добавления класса или подкласса к свойству.
 */
export class StylesToClass extends StylesToAbstract {
  protected treatment (): string[] {
    const content = this.content()

    if (content.length > 0) {
      return [
        ...this.addEmptyString(),
        `${this.getName()} {`,
        ...this.content(),
        '}'
      ]
    }

    return []
  }
}
