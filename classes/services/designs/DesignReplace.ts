import { forEach } from '../../../functions/data.ts'
import { toCamelCase, toCamelCaseFirst } from '../../../functions/string.ts'
import { getColumn } from '../../../functions/object.ts'

import { DesignStructure } from './DesignStructure.ts'

import {
  type DesignStructureClasses,
  type DesignStructureItem,
  type DesignStructureItemSub,
  type DesignStructureList
} from '../../../types/design.ts'
import { KEY_CUSTOM } from '../properties/to/PropertiesToStyle.ts'

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
   * Changes the names in accordance with the component name.<br>
   * Изменяет названия в соответствии с названием компонента.
   * @param name the name of a file /<br>название файла
   */
  getNameFile (name: string): string {
    return name
      .replaceAll('[design]', this.structure.getDesign())
      .replaceAll('[component]', this.structure.getComponentName())
      .replaceAll('DesignComponent', this.structure.getFileName())
      .replaceAll(this.mark, this.component)
  }

  /**
   * Changing the name of the component.<br>
   * Изменение названия компонента.
   */
  replaceName (): this {
    this.sample = this.getNameFile(this.sample)
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

      if (value.trim() !== '') {
        this.sample = this.sample
          .replace(
            new RegExp(`(^ +)(\\/\\/ :${name} .*?$)([\\S\\s]+)(^ +\\/\\/ :${name} )`, 'gm'),
            `$1$2${inString}${value}\r\n$4`
          )
      } else {
        this.sample = this.sample
          .replace(
            new RegExp(`(^ +)(\\/\\/ :${name} .*?$)([\\S\\s]+)(^ +\\/\\/ :${name} )`, 'gm'),
            '$1$2\r\n$4'
          )
      }
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
   * @param constructor additional data for processing /<br>дополнительные данные для обработки
   */
  replaceType (constructor?: string): this {
    const mark = 'type'
    const props = this.structure.get()
    const templates: string[] = []

    if (constructor) {
      templates.push(...this.getTypeForConstructor(constructor))
    }

    forEach(props, ({
      name,
      valueAll,
      style
    }) => {
      const types = this.getPropTypeByValue(valueAll, style)

      if (
        !this.initMarkAddValue(mark, name, types) &&
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
    const indexDefault = this.getIndexDefault()

    forEach(props, item => {
      if (!this.isNoMark('type', item.name)) {
        const type = this.getPropByValue(item.name, item.valueAll)

        if (item.default) {
          templates.push(
            `${item.name}: {` +
            `[space]  type: ${type},` +
            `[space]  default: ${indexDefault}?.${item.name}` +
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
   * Transforms the given value into a list.<br>
   * Преобразовывает данное значение в список.
   */
  replacePropsValues (): this {
    const mark = 'values'
    const props = this.structure.get()
    const templates: string[] = []

    forEach(props, item => {
      if (!this.isNoMark('type', item.name)) {
        const values = this.getPropValuesByValue(item.valueAll)

        if (values) {
          templates.push(`${item.name}: [${values}]`)
        }
      }
    })

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Adding a list of available classes.<br>
   * Добавление списка доступных классов.
   * @param template a function that returns a template /<br>функция, которая возвращает шаблон
   * @param end symbol at the end of the line /<br>символ в конце строки
   */
  replaceClasses (
    template: (item: DesignStructureClasses) => string = (item: DesignStructureClasses) => `${item.index}: string`,
    end = ''
  ): this {
    const mark = 'classes'
    const classes = this.structure.getClasses()
    const templates: string[] = []

    forEach(classes, item => templates.push(template(item)))

    return this.replaceMark(mark, templates, end)
  }

  /**
   * Transformation for active status classes.<br>
   * Преобразование для активных классов статуса.
   */
  replaceClassesValues (): this {
    const mark = 'classes-values'
    const templates: string[] = [
      `'${this.structure?.getPathName()}': true`,
      ...this.initClassesValues()
    ]

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Transformation for active status classes.<br>
   * Преобразование для активных классов статуса.
   */
  replaceStylesValues (): this {
    const mark = 'styles-values'
    const templates: string[] = this.initStylesValues()

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Adding a list of available classes for a constructor.<br>
   * Добавление списка доступных классов для конструктора.
   */
  replaceConstructorClasses (): this {
    return this.replaceClasses(
      (item: DesignStructureClasses) => {
        if (item.full) {
          return `${item.index}: '${item.className}'`
        }

        return `${item.index}: this.getSubClass('${item.className}')`
      },
      ','
    )
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

    const type = this.isBoolean(value) ? '[String, Boolean]' : 'String'
    const index = this.getIndexProp()

    if (index) {
      return `${type} as PropType<${index}['${name}']>`
    }

    return type
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
   * Getting a list of available data for the property.<br>
   * Получение списка доступных данных у свойства.
   * @param value values to check /<br>значения для проверки
   */
  protected getPropValuesByValue (
    value: DesignStructureItem['value']
  ): string | undefined {
    if (this.isString(value)) {
      const types: string[] = []

      value.forEach(item => {
        if (item !== KEY_CUSTOM) {
          types.push(item === true ? 'true' : `'${item}'`)
        }
      })
      return types.join(', ')
    }

    return undefined
  }

  /**
   * Returns the names of parameters.<br>
   * Возвращает названия параметров переменных.
   */
  protected getIndexProp (): string | undefined {
    return this.sample.match(/type ([a-zA-Z]*Props[a-zA-Z]*) =/)?.[1]
  }

  /**
   * Returns the names of parameters and their default values.<br>
   * Возвращает названия параметров и значения по умолчанию.
   */
  protected getIndexDefault (): string | undefined {
    return this.sample.match(/const ([a-zA-Z]*defaults[a-zA-Z]*):/)?.[1]
  }

  /**
   * Getting base properties from a constructor.<br>
   * Получение базовых свойств из конструктора.
   * @param constructor data for processing /<br>данные для обработки
   */
  protected getTypeForConstructor (constructor: string): string[] {
    const props = getColumn(this.structure.get(), 'name')
    const templates: string[] = []

    constructor
      .match(/(?<=type[^{]+Props[^{]+{[^{}]+)(^[^\n{}/]+$)(?=[^{}]+^})/igm)
      ?.forEach(string => {
        const name = string.match(/[a-z0-9]+(?=[ ?:])/i)?.[0]

        if (name && props.indexOf(name) === -1) {
          templates.push(`// [constructor] ${string.trim()}`)
        }
      })

    return templates
  }

  /**
   * Adds new data from tokens to existing data.<br>
   * Добавляет новые данные из токенов к уже существующим.
   * @param mark label property /<br>метка свойства
   * @param name property name /<br>название свойства
   * @param value property value /<br>значение свойства
   */
  protected initMarkAddValue (
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

  /**
   * Getting an array with all classes and conditions of activity status.<br>
   * Получение массива со всеми классами и условиями статуса активности.
   * @param items data list /<br>список данных
   * @param parent ancestor data /<br>данные о предке
   * @param values activity conditions /<br>условия активности
   * @protected
   */
  protected initClassesValues (
    items: DesignStructureList | DesignStructureItemSub[] = this.structure.get(),
    parent: string = this.structure?.getPathName() ?? '',
    values: string[] = []
  ): string[] {
    const templates: string[] = []

    forEach(items, item => {
      const {
        name,
        value,
        state
      } = item

      const index = `props.${name}`
      const newParent = ('className' in item && item?.className as string) || `${parent}--${name}`
      const newValues = [
        ...values,
        this.isString(value) ? `Boolean(${index})` : index,
        ...this.initClassesCategory(item)
      ]

      if (this.isBoolean(value)) {
        templates.push(
          `'${newParent}': ${newValues.join(' && ')}`,
          ...this.initClassesValues(state, newParent, newValues)
        )
      }

      if ('style' in item && item.style) {
        templates.push(`'${newParent}--${KEY_CUSTOM}': isFilled(${index}) && !inArray(propsValues.${name}, ${index})`)
      }

      if (this.isString(value)) {
        templates.push(`[\`${newParent}--\${${index}}\`]: inArray(propsValues.${name}, ${index})`)
      }
    })

    return templates
  }

  /**
   * Adding an exception for the current property.<br>
   * Добавление исключения для текущего свойства.
   * @param item object for checking /<br>объект для проверки
   */
  protected initClassesCategory (item: DesignStructureItem | DesignStructureItemSub): string[] {
    const values: string[] = []

    if (
      'category' in item &&
      item.category &&
      Boolean(item.default)
    ) {
      forEach(this.structure.get(), ({
        name,
        category
      }) => {
        if (item.name !== name && item.category === category) {
          values.push(`!props.${name}`)
        }
      })
    }

    return values
  }

  /**
   * Getting an array with all component styles.<br>
   * Получение массива со всеми стилями компонента.
   * @param items data list /<br>список данных
   * @protected
   */
  protected initStylesValues (
    items: DesignStructureList = this.structure.get()
  ): string[] {
    const templates: string[] = []
    const className = this.structure?.getPathName()

    forEach(items, ({
      name,
      style
    }) => {
      if (style) {
        templates.push(`'${className}-sys-${name}': props.${name} ?? null`)
      }
    })

    return templates
  }
}
