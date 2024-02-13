import { StylesToAbstract } from './StylesToAbstract'

export class StylesToRoot extends StylesToAbstract {
  protected treatment (): string[] {
    return [
      ...this.addEmptyString(),
      `@at-root ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
