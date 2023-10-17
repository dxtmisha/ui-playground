import { PropertiesFile } from '../properties/PropertiesFile.ts'

import { DesignCommand } from './DesignCommand.ts'

const FILE_CLASS = 'ConstructorsDesign.ts'
const FILE_PROPERTIES = 'properties.json'
const FILE_PROPS = 'props.ts'
const FILE_TYPES = 'types.ts'
const FILE_STYLE = 'style.scss'

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

  /**
   * Initializes the creation of all files for the current team.<br>
   * Инициализирует создание всех файлов для текущей команды.
   */
  protected initMain (): void {
    this
      .makeProperties()
      .makeProps()
      .makeTypes()
      .makeStyle()
  }

  /**
   * This code generates the properties.json.<br>
   * Генерация файла properties.json.
   */
  protected makeProperties (): this {
    const file = FILE_PROPERTIES

    if (!this.isFile(file)) {
      this.write(file, '{\r\n}\r\n')
    }

    return this
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
      .replaceDefault()
      .replaceProps()

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the types.ts.<br>
   * Генерация файла types.ts.
   */
  protected makeTypes (): this {
    const file = FILE_TYPES
    const sample = this.readDefinable(file)

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the style.scss.<br>
   * Генерация файла style.scss.
   */
  protected makeStyle (): this {
    const file = FILE_STYLE

    if (!this.isFile(file)) {
      const sample = this.readDefinable(file)
      this.write(file, sample.get())
    }

    return this
  }
}
