import { StylesToAbstract } from './StylesToAbstract.ts'

/**
 * Class for creating animation.<br>
 * Класс для создания анимации.
 */
export class StylesToAnimate extends StylesToAbstract {
  protected treatment (): string[] {
    return [
      ...this.addEmptyString(),
      `@keyframes ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
