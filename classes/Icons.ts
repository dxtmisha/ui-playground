import { forEach } from '../functions/data'

import { useEnv } from '../composables/useEnv'

export type IconsItem = string | Promise<string | any>

/**
 * Class for managing icons.<br>
 * Класс для управления иконками.
 */
export class Icons {
  protected static readonly icons: Record<string, IconsItem> = {}
  protected static readonly url: string = useEnv('iconPath') ?? '/icons/'

  /**
   * Checks if the given icon is in the list of connected icons.<br>
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name /<br>название иконки
   */
  static is (index: string): boolean {
    return index in this.icons || this.getName(index) in this.icons
  }

  /**
   * Returns the icon by the name.<br>
   * Возвращает иконку по названию.
   * @param index icon name /<br>название иконки
   * @param url path to the storage location of the icon, if the icon does not exist /<br>
   * путь к месту хранения иконки, если иконка не существует
   */
  static async get (index: string, url = ''): Promise<string> {
    const icon = this.icons?.[this.getName(index)] ??
      this.icons?.[index] ??
      `${index.replace(/^@/, url ?? this.url)}.svg`

    if (typeof icon === 'string') {
      return icon
    }

    return await icon
  }

  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList (): string[] {
    return forEach(this.icons, (_, name) => {
      return name.replace(/^@/, '')
    })
  }

  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add (index: string, file: IconsItem): void {
    this.icons[this.getName(index)] = file
  }

  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList (list: Record<string, IconsItem>): void {
    forEach(list, (file, index) => this.add(index, file))
  }

  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  protected static getName (index: string): string {
    return `@${index}`
  }
}
