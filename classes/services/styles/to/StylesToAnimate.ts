import { StylesToAbstract } from './StylesToAbstract.ts'

export class StylesToAnimate extends StylesToAbstract {
  protected treatment (): string[] {
    return [
      ...this.addEmptyString(),
      `${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
