import { toArray } from '../../functions/object.ts'

import { PropertiesFile, type PropertiesFilePath } from '../services/properties/PropertiesFile.ts'

export const DIR_TEMPLATE = [__dirname, '..', '..', 'media', 'templates', 'project']
export const DIR_PROJECT = ['..']
export const DIR_TEMP = 'temp'

/**
 * Class for working with template projects.<br>
 * Класс для работы с шаблонными проектами.
 */
export class DesignProject {
  private paths: string[]

  /**
   * Constructor
   * @param template template name /<br>название шаблона
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly template: string
  ) {
    this.paths = this.initTemplatePaths()
  }

  /**
   * Initialization of files for the project.<br>
   * Инициализация файлов для проекта.
   */
  make (): void {
    if (this.paths.length > 0) {
      this.paths.forEach(path => {
        const data = this.read(path)

        if (data) {
          PropertiesFile.writeByPath(this.getProjectPath(path), data)
        }
      })

      this.removeTempDir()
    }
  }

  /**
   * Returns the name of the template directory.<br>
   * Возвращает название шаблонной директории.
   */
  private getTemplateDir (): string {
    return this.template
  }

  /**
   * Returns the path to the template file.<br>
   * Возвращает путь к файлу шаблона.
   */
  private getTemplatePath (): string[] {
    return [...DIR_TEMPLATE, this.getTemplateDir()]
  }

  /**
   * Returns the path to the project.<br>
   * Возвращает путь к проекту.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  private getProjectPath (
    path: PropertiesFilePath
  ): string[] {
    return [
      ...DIR_PROJECT,
      ...toArray(path)
    ]
  }

  /**
   * Reads the file from the template.<br>
   * Читает файл из шаблона.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  private read (path: PropertiesFilePath): string | undefined {
    return PropertiesFile.readFile([
      ...this.getTemplatePath(),
      ...toArray(path)
    ])
  }

  /**
   * Reads the selected files in the project.<br>
   * Читает выбранные файлы в проекте.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  private readProject (path: PropertiesFilePath): string | undefined {
    return PropertiesFile.readFile(this.getProjectPath(path))
  }

  /**
   * We get a list of links to files.<br>
   * Получаем список ссылок на файлы.
   */
  private initTemplatePaths (): string[] {
    return PropertiesFile.readDirRecursive(this.getTemplatePath())
  }

  /**
   * Deleting temporary files, if they exist.<br>
   * Удаление временных файлов, если они есть.
   */
  private removeTempDir (): this {
    const path = this.getProjectPath([DIR_TEMP])

    if (PropertiesFile.is(path)) {
      PropertiesFile.removeDir(path)
    }

    return this
  }
}
