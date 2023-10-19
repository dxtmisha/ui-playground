import { forEach } from '../../../functions/data.ts'
import { toCamelCase, toCamelCaseFirst } from '../../../functions/string.ts'

import { DesignStructure } from './DesignStructure.ts'

import { type DesignStructureItem } from '../../../types/design.ts'

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
    this.sample = this.sample.replaceAll('../../../', this.getRoot())
    return this
  }

  /**
   * Replaces values with selected label.<br>
   * Заменяет значения на выбранную метку.
   * @param name label name /<br>название метки
   * @param data data for replacement /<br>данные для замены
   * @param end symbol at the end of the line /<br>символ в конце строки
   */
  replaceMark (
    name: string,
    data: string[],
    end = ''
  ): this {
    const space = this.sample.match(new RegExp(`^( +)(\\/\\/ :${name} )`, 'm'))?.[1]

    if (space) {
      const inString = `\r\n${space}`
      const value = data
        .join(`${end}${inString}`)
        .replaceAll('[space]', inString)

      this.sample = this.sample
        .replace(
          new RegExp(`(^ +)(\\/\\/ :${name} .*?$)([\\S\\s]+)(^ +\\/\\/ :${name} )`, 'gm'),
          `$1$2${inString}${value}\r\n$4`
        )
    }

    return this
  }

  /**
   * Replaces values with the selected label only once.<br>
   * Заменяет значения на выбранную метку только 1 раз.
   * @param name label name /<br>название метки
   * @param removeReplacement data deletion /<br>удаление данных
   */
  replaceOnce (
    name = toCamelCase(this.mark),
    removeReplacement: boolean | ((data: string) => string) = false
  ): this {
    const exp1 = new RegExp(`\\/\\/ :${name}\\.once ([^\r\n]+)([\r\n ]*)`, 'g')
    const exp2 = new RegExp(`\\/\\* :${name}\\.once \\*\\/([\\S\\s]*?)\\/\\* :${name}\\.once\\.end \\*\\/([\r\n ]*)`, 'g')
    const exp3 = new RegExp(`\\/\\* :${name}\\.once (.*?) \\*\\/([\r\n ]*)`, 'g')
    const exp4 = new RegExp(`<!-- :${name}\\.once -->([\\S\\s]*?)<!-- :${name}\\.once\\.end -->([\r\n ]*)`, 'g')
    const exp5 = new RegExp(`<!-- :${name}\\.once (.*?) -->([\r\n ]*)`, 'g')

    const replacement = (...data: string[]) => {
      if (typeof removeReplacement === 'function') {
        return `${removeReplacement(data[1])}${data[2]}`
      } else if (removeReplacement) {
        return ''
      }

      return `${data[1]}${data[2]}`
    }

    this.sample = this.sample
      .replace(exp1, replacement)
      .replace(exp2, replacement)
      .replace(exp3, replacement)
      .replace(exp4, replacement)
      .replace(exp5, replacement)

    return this
  }

  /**
   * Adding types for properties.<br>
   * Добавление типов для свойств.
   */
  replaceType (): this {
    const mark = 'type'
    const props = this.structure.get()
    const templates: string[] = []

    forEach(props, ({
      name,
      valueAll,
      style
    }) => {
      const types = this.getPropTypeByValue(valueAll, style)

      if (
        !this.makeMarkAddValue(mark, name, types) &&
        !this.isNoMark(mark, name)
      ) {
        templates.push(`${name}?: ${types}`)
      }
    })

    return this.replaceMark(mark, templates)
  }

  /**
   * Adding default values for properties.<br>
   * Добавление значения по умолчанию для свойств.
   */
  replaceDefault (): this {
    const mark = 'default'
    const props = this.structure.get()
    const templates: string[] = []

    forEach(props, item => {
      if (
        item.default &&
        !this.isNoMark(mark, item.name)
      ) {
        templates.push(`${item.name}: ${this.getDefault(item.default)}`)
      }
    })

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Adding types for properties.<br>
   * Добавление самих свойств.
   */
  replaceProps (): this {
    const mark = 'prop'
    const props = this.structure.get()
    const templates: string[] = []

    forEach(props, item => {
      if (!this.isNoMark('type', item.name)) {
        const type = this.getPropByValue(item.name, item.valueAll)

        if (item.default) {
          templates.push(
            `${item.name}: {` +
            `[space]  type: ${type},` +
            `[space]  default: defaults${this.component}?.${item.name}` +
            '[space]}'
          )
        } else {
          templates.push(`${item.name}: ${type}`)
        }
      }
    })

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Adding a list of available classes.<br>
   * Добавление списка доступных классов.
   */
  replaceClasses (): this {
    const mark = 'classes'
    const classes = this.structure.getClasses()
    const templates: string[] = []

    forEach(classes, (...item) => {
      templates.push(`${item[1]}: string`)
    })

    return this.replaceMark(mark, templates)
  }

  /**
   * Checks if the data type is boolean.<br>
   * Проверяет, является ли тип данных булевым.
   * @param value values to check /<br>значения для проверки
   */
  protected isBoolean (value: DesignStructureItem['value']): boolean {
    return value.indexOf(true) !== -1
  }

  /**
   * Checks if the data type is string.<br>
   * Проверяет, является ли тип данных строковым.
   * @param value values to check /<br>значения для проверки
   */
  protected isString (value: DesignStructureItem['value']): boolean {
    return value.length > 0 && value[0] !== true
  }

  /**
   * Checks whether the current property should be excluded by its label.<br>
   * Проверяет, следует ли исключить текущее свойство по его метке.
   * @param mark label property /<br>метка свойства
   * @param name property name /<br>название свойства
   */
  protected isNoMark (
    mark: string,
    name: string
  ): boolean {
    return Boolean(this.sample.match(`:${mark}.${name}.none`))
  }

  /**
   * Returns default values.<br>
   * Возвращает значения по умолчанию.
   * @param value default values /<br>значения по умолчанию
   */
  protected getDefault (value: DesignStructureItem['default']): string {
    if (typeof value === 'string') {
      return `'${value}'`
    } else {
      return `${value}`
    }
  }

  /**
   * Returns available types for property.<br>
   * Возвращает доступные типы для свойства.
   * @param name property name /<br>название свойства
   * @param value values to check /<br>значения для проверки
   */
  protected getPropByValue (
    name: string,
    value: DesignStructureItem['value']
  ): string {
    if (!this.isString(value)) {
      return 'Boolean'
    }

    return `${this.isBoolean(value) ? '[String, Boolean]' : 'String'} as PropType<${this.component}Props['${name}']>`
  }

  /**
   * Returns a string with the data type.<br>
   * Возвращает строку с типом данных.
   * @param value values to check /<br>значения для проверки
   * @param style is the property style present /<br>является ли свойство style
   */
  protected getPropTypeByValue (
    value: DesignStructureItem['value'],
    style?: boolean
  ): string {
    const types: string[] = []

    if (this.isBoolean(value)) {
      types.push('boolean')
    }

    if (style) {
      types.push('string')
    }

    if (this.isString(value)) {
      value.forEach(item => types.push(item === true ? 'true' : `'${item}'`))
    }

    if (types.length === 0) {
      types.push('boolean')
    }

    return types.join(' | ')
  }

  /**
   * Adds new data from tokens to existing data.<br>
   * Добавляет новые данные из токенов к уже существующим.
   * @param mark label property /<br>метка свойства
   * @param name property name /<br>название свойства
   * @param value property value /<br>значение свойства
   */
  protected makeMarkAddValue (
    mark: string,
    name: string,
    value: string
  ): boolean {
    if (
      this.sample.match(`:${mark}.${name}`)
    ) {
      this.sample = this.sample
        .replace(
          new RegExp(`(/[*] ?:${mark}[.]${name} ?[*]/)[^\r\n]*`, 'g'),
          `$1 | ${value}`
        )

      return true
    }

    return false
  }
}
