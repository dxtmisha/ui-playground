import { toCamelCaseFirst } from '../../../functions/string.ts'

import { DesignStructure } from './DesignStructure.ts'

/**
 * Class with basic replacement for templates.<br>
 * Класс с базовой заменой для шаблонов.
 */
export class DesignReplace {
  protected readonly component: string
  protected readonly mark: string

  /**
   * Constructor
   * @param structure object for working with components /<br>объект для работы с компонентами
   * @param mark метка для замена на имя
   * @param sample property template /<br>шаблон свойства
   */
  constructor (
    protected structure: DesignStructure,
    mark: string,
    protected sample: string
  ) {
    this.mark = toCamelCaseFirst(mark)
    this.component = this.structure.getComponentNameFirst()
  }

  /**
   * Returns the modified template.<br>
   * Возвращает изменённый шаблон.
   */
  get (): string {
    return this.sample
  }

  /**
   * Returns the path for importing the module.<br>
   * Возвращает путь для подключения модуля.
   */
  getRoot (): string {
    // const path = __filename.match(/node_modules\/([^/]+)/)

    // if (path) {
    //   return `${path?.[1]}/`
    // }

    return '../../'
  }

  /**
   * Changing the name of the component.<br>
   * Изменение названия компонента.
   */
  replaceName (): this {
    this.sample = this.sample.replaceAll(this.mark, this.component)
    return this
  }

  /**
   * Change the path to the file.<br>
   * Изменение пути к файлу.
   */
  replacePath (): this {
    this.sample.replaceAll('../../../', this.getRoot())
    return this
  }

  /**
   * Replaces values with the selected label only once.<br>
   * Заменяет значения на выбранную метку только 1 раз.
   * @param name label name /<br>название метки
   * @param removeReplacement data deletion /<br>удаление данных
   */
  replacementOnce (
    name = this.mark,
    removeReplacement: boolean | ((data: string) => string) = false
  ): this {
    const exp1 = new RegExp(`\\/\\/ :${name}\\.once ([^\r\n]+)([\r\n ]*)`, 'g')
    const exp2 = new RegExp(`\\/\\* :${name}\\.once \\*\\/([\\S\\s]*?)\\/\\* :${name}\\.once\\.end \\*\\/([\r\n ]*)`, 'g')
    const exp3 = new RegExp(`\\/\\* :${name}\\.once (.*?) \\*\\/([\r\n ]*)`, 'g')
    const exp4 = new RegExp(`<!-- :${name}\\.once -->([\\S\\s]*?)<!-- :${name}\\.once\\.end -->([\r\n ]*)`, 'g')
    const exp5 = new RegExp(`<!-- :${name}\\.once (.*?) -->([\r\n ]*)`, 'g')

    const replacement = (...data: string[]) => {
      if (typeof removeReplacement === 'function') {
        return `${removeReplacement(data[1].trim())}${data[2]}`
      } else if (removeReplacement) {
        return ''
      }

      return `${data[1].trim()}${data[2]}`
    }

    this.sample
      .replace(exp1, replacement)
      .replace(exp2, replacement)
      .replace(exp3, replacement)
      .replace(exp4, replacement)
      .replace(exp5, replacement)

    return this
  }
}
