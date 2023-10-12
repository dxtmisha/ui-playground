import { PropertiesFile } from '../properties/PropertiesFile.ts'

const DIR_SAMPLE = [__dirname, '..', '..', '..', 'media', 'templates']

/**
 * Base abstract class for generating script files.<br>
 * Базовый абстрактный класс для генерации файлов скриптов.
 */
export abstract class DesignCommand {
  protected abstract DIR_SAMPLE: string
  protected abstract dir: string[]

  /**
   * Constructor
   * @param command component name / названия компонента
   * @param options additional parameters / дополнительные параметры
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
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
   * Returns an array of paths to components.<br>
   * Возвращает массив с путями к компонентам.
   */
  protected abstract initDir (): string[]

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
  protected isFile (name: string): boolean {
    return PropertiesFile.is([...this.dir, name])
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
   * Reading.<br>
   * Читает файл.
   * @param name file name /<br>название файла
   */
  protected read (name: string): string | undefined {
    return PropertiesFile.readFile<string>([...this.dir, name])
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
