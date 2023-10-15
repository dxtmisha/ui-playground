import { PropertiesFile } from '../properties/PropertiesFile.ts'

import { DesignCommand } from './DesignCommand.ts'

const FILE_PROPS = 'props.ts'

/**
 * Class for generating files based on a constructor.<br>
 * Класс для генерации файлов по конструктору.
 */
export class DesignConstructor extends DesignCommand {
  protected DIR_SAMPLE: string = 'constructors'
  protected dir: string[]

  /**
   * Constructor
   * @param command component name /<br>названия компонента
   * @param options additional parameters /<br>дополнительные параметры
   */
  constructor (
    command: string,
    options: Record<string, string> = {}
  ) {
    super(command, options)
    this.dir = [
      PropertiesFile.getRoot(),
      this.DIR_SAMPLE,
      this.getStructure().getComponentNameFirst()
    ]
  }

  protected initMain (): void {
    this
      .makeProps()
    console.log(this.dir)
  }

  /**
   * This code generates the props.ts.<br>
   * Генерация файла props.ts.
   */
  protected makeProps (): this {
    const file = FILE_PROPS
    const sample = this.readDefinable(file)

    sample
      .replaceType()

    if (sample) {
      // if (this._isFile(FILE_PROPERTIES)) {
      //  sample = this._replaceSubclass(sample)
      //  sample = this._replacePropsType(sample)
      //  sample = this._replacePropsDefault(sample)
      //  sample = this._replaceProps(sample, this.loader.getComponent())
      // }
    }

    this.write(file, sample.get())

    return this
  }
}
