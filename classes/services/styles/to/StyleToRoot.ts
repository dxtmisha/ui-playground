import { StylesToAbstract } from './StylesToAbstract.ts'

export class StyleToRoot extends StylesToAbstract {
  protected treatment (): string[] {
    return [
      ...this.addEmptyString(),
      `@at-root ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
