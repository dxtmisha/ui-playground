import { toCamelCase } from '../../functions/string.ts'

import { PropertiesFile } from '../services/properties/PropertiesFile.ts'

import { DIR_ICONS, FILE_ICONS } from '../../types/property.ts'

export type DesignIconsItem = {
  name: string
  path: string
}
export type DesignIconsList = DesignIconsItem[]

/**
 * A class for creating an icon information file.<br>
 * Класс для создания файла информации иконки.
 */
export class DesignIcons {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly design: string
  ) {
  }

  /**
   * File initialization.<br>
   * Инициализация файла.
   */
  init () {
    const list = this.getList()

    if (list) {
      const imports: string[] = []
      const icons: string[] = []

      list.forEach(icon => {
        const name = toCamelCase(icon.name)

        imports.push(`import ${name} from '${icon.path}'`)
        icons.push(`Icons.add('${icon.name}', ${name})`)
      })

      this.write([
        'import { Icons } from \'../classes/Icons.ts\'',
        '',
        ...imports,
        '',
        ...icons,
        ''
      ])
    }
  }

  /**
   * Returns a list of icons.<br>
   * Возвращает список иконок.
   * @param paths path to the icons folder /<br>путь к папке иконок
   */
  protected getList (
    paths: string[] = []
  ): DesignIconsList | undefined {
    const dirs = this.getDirs(paths)

    if (dirs.length > 0) {
      const list: DesignIconsList = []

      dirs.forEach(name => {
        if (PropertiesFile.isDir(name)) {
          list.push(...(this.getList([...paths, name]) ?? []))
        } else {
          const parse = PropertiesFile.parse([...paths, name])

          list.push({
            name: [...paths, parse.name].join('-'),
            path: PropertiesFile.joinPath(['.', DIR_ICONS, ...paths, name])
          })
        }
      })

      return list
    }

    return undefined
  }

  /**
   * Returns the directory to the icon.<br>
   * Возвращает директорию к иконке.
   * @param paths path to the icons folder /<br>путь к папке иконок
   */
  protected getDirs (paths: string[]): string[] {
    return PropertiesFile.readDir([this.design, DIR_ICONS, ...paths])
  }

  /**
   * Saves the file.<br>
   * Сохраняет файл.
   * @param file data for writing /<br>данные для записи
   */
  protected write (file: string[]): this {
    PropertiesFile.write(
      [this.design],
      FILE_ICONS,
      file.join('\r\n'),
      'ts'
    )

    return this
  }
}