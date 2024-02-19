import { forEach } from '../../functions/data'
import { toArray } from '../../functions/object'

import { PropertiesFile, type PropertiesFilePath } from '../services/properties/PropertiesFile'
import { DesignProjectModule } from './DesignProjectModule'

export const DIR_TEMPLATE = [__dirname, '..', '..', 'packages']
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
          const projectPath = this.getProjectPath(path)

          if (!PropertiesFile.is(projectPath)) {
            PropertiesFile.writeByPath(projectPath, data)
          }
        }
      })

      this.makeUpdatePackage()
      this.makeUpdateLink()

      this.removeTempDir()
    }
  }

  makeBuild (): void {
    if (this.getTemplateDir() === 'vue') {
      const pathDist = ['.', 'production', 'dist']
      const pathBuild = ['.', '..']

      new DesignProjectModule(pathDist).make()

      this.copyBuild(pathDist, pathBuild)
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
    return [...DIR_TEMPLATE, `project-${this.getTemplateDir()}`]
  }

  /**
   * Returns the path to the project.<br>
   * Возвращает путь к проекту.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  private getProjectPath (
    path: PropertiesFilePath
  ): string[] {
    const paths = [
      ...DIR_PROJECT,
      ...toArray(path)
    ]
    const length = paths.length - 1

    if (paths[length].match('gitignore.txt')) {
      paths[length] = paths[length].replace('gitignore.txt', '.gitignore')
    }

    return paths
  }

  /**
   * Returns the project name.<br>
   * Возвращает название проекта.
   */
  private getProjectName (): string {
    const paths = PropertiesFile.splitForDir(__dirname)
    const name = []
    let isName = false

    while (paths.length > 0) {
      if (isName) {
        name.unshift(paths.pop())
      } else if (PropertiesFile.is([PropertiesFile.sep(), ...paths, 'index.php'])) {
        isName = true
        name.unshift(paths.pop())
      } else {
        paths.pop()
      }

      if (PropertiesFile.is([PropertiesFile.sep(), ...paths, 'ui', 'index.html'])) {
        break
      }
    }

    return `/${name.join('/')}/`
  }

  /**
   * Reads the file from the template.<br>
   * Читает файл из шаблона.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  private read (path: PropertiesFilePath): string | undefined {
    return PropertiesFile.readFileOnly([
      ...this.getTemplatePath(),
      ...toArray(path)
    ])
  }

  /**
   * Reads the selected files in the project.<br>
   * Читает выбранные файлы в проекте.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  // private readProject (path: PropertiesFilePath): string | undefined {
  //   return PropertiesFile.readFile(this.getProjectPath(path))
  // }

  /**
   * Copying the collected data.<br>
   * Копирование собранных данных.
   * @param dist link to the compiled script /<br>ссылка на собранный скрипт
   * @param build link to the relocation site /<br>ссылка на место перемещения
   */
  private copyBuild (
    dist: string[],
    build: string[]
  ) {
    const dirs = PropertiesFile.readDir(dist)

    dirs.forEach(item => {
      const paths = [...build, item]
      const pathsDist = [...dist, item]

      if (PropertiesFile.isDir(paths)) {
        PropertiesFile.removeDir(paths)
      } else {
        PropertiesFile.removeFile(paths)
      }

      PropertiesFile.rename(
        pathsDist,
        paths
      )
    })
  }

  /**
   * Updating the version of dependent files.<br>
   * Обновление версии зависимых файлов.
   */
  private makeUpdatePackage (): void {
    const pathProject = ['package.json']
    const packageUi = PropertiesFile.readFile<Record<string, any>>(['node_modules', 'ui', 'package.json'])
    const packageProject = PropertiesFile.readFile<Record<string, any>>(pathProject)

    if (
      packageUi &&
      packageProject
    ) {
      [
        'dependencies',
        'devDependencies'
      ].forEach(group => {
        if (
          group in packageUi &&
          group in packageProject
        ) {
          forEach(packageProject[group], (_, key) => {
            if (key in packageUi[group]) {
              packageProject[group][key] = packageUi[group][key]
            }
          })
        }
      })

      PropertiesFile.writeByPath(pathProject, packageProject)
    }
  }

  /**
   * Updating the script links.<br>
   * Обновление ссылок на скрипт.
   */
  private makeUpdateLink (): void {
    const name = this.getProjectName()

    const pathIndex = this.getProjectPath(['index.php'])
    const fileIndex = PropertiesFile.readFile<string>(pathIndex)

    if (fileIndex) {
      PropertiesFile.writeByPath(
        pathIndex,
        fileIndex.replace(/componentName = '[^']+'/, `componentName = '${name}'`)
      )
    }

    const pathVue = this.getProjectPath(['vue', 'vite.config.ts'])
    const fileVue = PropertiesFile.readFile<string>(pathVue)

    if (fileVue) {
      PropertiesFile.writeByPath(
        pathVue,
        fileVue.replace(/BASE_URL = '[^']+'/, `BASE_URL = '${name}'`)
      )
    }
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
