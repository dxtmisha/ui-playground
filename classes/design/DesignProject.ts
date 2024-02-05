import { PropertiesFile } from '../services/properties/PropertiesFile.ts'

export const DIR_TEMPLATE = [__dirname, '..', '..', 'media', 'templates']
export const DIR_PROJECT = []

export class DesignProject {
  private paths: string[]

  /**
   * Constructor
   * @param template
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
    console.log('this.paths', this.paths)

    this.paths.forEach(path => {
      const data = this.read(path)

      if (data) {
        PropertiesFile.writeByPath(path, data)
      }
    })
  }

  /**
   * Returns the name of the template directory.<br>
   * Возвращает название шаблонной директории.
   */
  private getTemplateDir (): string {
    return `project-${this.template}`
  }

  private getTemplatePath (): string[] {
    return [...DIR_TEMPLATE, this.getTemplateDir()]
  }

  private read (path: string): string | undefined {
    return PropertiesFile.readFile([
      ...this.getTemplatePath(),
      path
    ])
  }

  private initTemplatePaths (): string[] {
    return PropertiesFile.readDirRecursive(this.getTemplatePath())
  }
}
