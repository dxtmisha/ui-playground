import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for displaying a class with a full class name.<br>
 * Класс для вывода класса с полной строкой названия.
 */
export class StylesToClassFull extends StylesToAbstract {
  protected treatment (): string[] {
    return [
      ...this.addEmptyString(),
      `${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
