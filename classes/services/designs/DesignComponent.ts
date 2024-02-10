import { PropertiesFile } from '../properties/PropertiesFile.ts'
import { DesignCommand } from './DesignCommand.ts'

import { DIR_CONSTRUCTOR } from '../../../types/property.ts'

const FILE_PROPERTIES = 'properties.json'
const FILE_PROPS = 'props.ts'
const FILE_STYLE = 'styleToken.scss'
const FILE_CLASS = 'DesignComponent.vue'
const FILE_INDEX = 'index.ts'

/**
 * Class for creating a component or updating data.<br>
 * Класс для создания компонента или обновления данных.
 */
export class DesignComponent extends DesignCommand {
  protected DIR_SAMPLE: string = 'component'
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

    const structure = this.getStructure()

    this.dir = [
      PropertiesFile.getRoot(),
      structure.getDesign(),
      structure.getComponentNameFirst()
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
      .makeStyle()
      .makeMain()
      .makeIndex()
  }

  /**
   * This code generates the properties.json.<br>
   * Генерация файла properties.json.
   */
  protected makeProperties (): this {
    const file = FILE_PROPERTIES

    if (!this.isFile(file)) {
      this.write(file, `{\r\n  "main": "{d.${this.getStructure().getComponentName()}}"\r\n}\r\n`)
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
    const constructor = this.getFileConstructor(file)

    sample
      .replaceType(constructor)
      .replaceDefault()
      .replaceProps()
      .replacePropsValues()

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the style.scss.<br>
   * Генерация файла style.scss.
   */
  protected makeStyle (): this {
    const file = FILE_STYLE
    const sample = this.readDefinable(file)
    const styles = this.getStructure().getStyles()

    sample.replaceMark('style', styles)

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the style.scss.<br>
   * Генерация файла style.scss.
   */
  protected makeMain (): this {
    const file = FILE_CLASS
    const sample = this.readDefinable(file)

    sample.replaceClassesValues()
    sample.replaceStylesValues()

    this.write(sample.getNameFile(file), sample.get())
    return this
  }

  /**
   * This code generates the index.ts.<br>
   * Генерация файла index.ts.
   */
  protected makeIndex (): this {
    const file = FILE_INDEX
    const sample = this.readDefinable(file)

    this.write(file, sample.get())
    return this
  }

  /**
   * Getting the contents of a file from a constructor.<br>
   * Получение содержимого файла из конструктора.
   * @param file file name /<br>имя файла
   */
  private getFileConstructor (file: string): string {
    const path: string[] = ['..', '..', DIR_CONSTRUCTOR, this.getStructure().getComponentNameFirst(), file]
    const constructor = this.read(path)

    return constructor ?? ''
  }
}
