import { toArray } from '../../../functions/object.ts'

import { PropertiesFile } from '../properties/PropertiesFile.ts'
import { DesignStructure } from './DesignStructure.ts'
import { DesignReplace } from './DesignReplace.ts'

const DIR_SAMPLE = [__dirname, '..', '..', '..', 'media', 'templates']

/**
 * Base abstract class for generating script files.<br>
 * Базовый абстрактный класс для генерации файлов скриптов.
 */
export abstract class DesignCommand {
  protected abstract DIR_SAMPLE: string
  protected abstract dir: string[]

  protected structure?: DesignStructure

  /**
   * Constructor
   * @param command component name /<br>названия компонента
   * @param options additional parameters /<br>дополнительные параметры
   */
  // eslint-disable-next-line no-useless-constructor
  protected constructor (
    protected readonly command: string,
    protected readonly options: Record<string, string> = {}
  ) {
  }

  /**
   * Entry point for the command.<br>
   * Точка входа для команды.
   */
  init (): void {
    if (this.command) {
      console.info(`-- ${this.command}:`)

      this.initMain()

      console.info('-- end')
    } else {
      console.info('-- not name')
    }
  }

  /**
   * Initializes the creation of all files for the current team.<br>
   * Инициализирует создание всех файлов для текущей команды.
   */
  protected abstract initMain (): void

  /**
   * Checks the presence of a file.<br>
   * Проверяет наличие файла.
   * @param name file name /<br>название файла
   */
  protected isFile (name: string | string[]): boolean {
    return PropertiesFile.is([...this.dir, ...toArray(name)])
  }

  /**
   * Returns the path for importing the module.<br>
   * Возвращает путь для подключения модуля.
   */
  protected getRoot (): string {
    const path = __filename.match(/node_modules\/([^/]+)/)

    if (path) {
      return `${path?.[1]}/`
    } else {
      return '../../'
    }
  }

  /**
   * Returns the names for the team.<br>
   * Возвращает названия для команды.
   */
  protected getCommand (): string {
    return this.command
  }

  /**
   * Returns a structure object.<br>
   * Возвращает объект структуры.
   */
  protected getStructure (): DesignStructure {
    if (!this.structure) {
      const [design, component] = this.getCommand().split('.', 2)
      this.structure = new DesignStructure(design, component)
    }

    return this.structure
  }

  /**
   * Returns an object for template transformation.<br>
   * Возвращает объект для преобразования шаблона.
   * @param sample property template /<br>шаблон свойства
   */
  protected getReplace (sample?: string): DesignReplace {
    return new DesignReplace(
      this.getStructure(),
      this.DIR_SAMPLE,
      sample ?? ''
    )
  }

  /**
   * Reading.<br>
   * Читает файл.
   * @param name file name /<br>название файла
   */
  protected read (name: string | string[]): string | undefined {
    return PropertiesFile.readFile<string>([...this.dir, ...toArray(name)])
  }

  /**
   * This code reads a template.<br>
   * Читает шаблона.
   * @param name file name /<br>название файла
   */
  protected readSample (name: string): string | undefined {
    return PropertiesFile.readFile<string>([...DIR_SAMPLE, this.DIR_SAMPLE, name])
  }

  /**
   * Reads the file itself or its template if it is not found.<br>
   * Читает сам файл или его шаблон, если его нет.
   * @param name file name /<br>название файла
   * @param callback the function is executed if there is no such file /<br>функция выполняется, если такого файла нет
   */
  protected readDefinable (name: string, callback?: (sample: DesignReplace) => void): DesignReplace {
    const fileName = this.getReplace().getNameFile(name)

    if (this.isFile(fileName)) {
      return this.getReplace(this.read(fileName))
    }

    const replace = this.getReplace(this.readSample(name))

    if (callback) {
      callback(replace)
    }

    replace
      .replaceOnce()
      .replaceName()
      .replacePath()

    return replace
  }

  /**
   * Creating or rewriting a file.<br>
   * Создание или перезапись файла.
   * @param name file name /<br>название файла
   * @param value values for storage /<br>значения для хранения
   */
  protected write (name: string, value: string): void {
    this.console(name)

    PropertiesFile.write(
      this.dir,
      name,
      value,
      ''
    )
  }

  /**
   * Outputting data to the console.<b>
   * Вывод данных в консоль.
   * @param name file name /<br>название файла
   */
  protected console (name: string): void {
    console.info(`--  ${this.isFile(name) ? 'update' : 'create'} ${name}`)
  }
}
