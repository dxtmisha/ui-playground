import { PropertiesTool } from './PropertiesTool.ts'

export class Properties {
  private readonly designs: string[]

  /**
   * Constructor
   */
  constructor () {
    this.designs = ['d', ...PropertiesTool.getDesigns()]
    console.log('this.designs', this.designs)
  }
}
