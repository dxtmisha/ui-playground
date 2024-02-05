import { config } from 'dotenv'
import { isFilled } from '../../functions/data.ts'
import { toCamelCase, toCamelCaseFirst, toKebabCase } from '../../functions/string.ts'

import { PropertiesFile } from '../services/properties/PropertiesFile.ts'
import { PropertiesCache } from '../services/properties/PropertiesCache.ts'

import { Styles } from '../services/styles/Styles.ts'
import { DesignConstructor } from '../services/designs/DesignConstructor.ts'
import { DesignComponent } from '../services/designs/DesignComponent.ts'
import { DesignIcons } from './DesignIcons.ts'

import {
  FILE_COMPONENTS,
  FILE_PROPERTY,
  FILE_DESIGN_STYLE,
  FILE_DESIGN_COMPONENTS
} from '../../types/property.ts'

export type DesignCommandDesignsItem = {
  name: string
  components: string[]
}
export type DesignCommandDesigns = DesignCommandDesignsItem[]

config()

/**
 * A class for updating styles and tokens.<br>
 * Класс для обновления стилей и токенов.
 */
export class DesignCommand {
  /**
   * Constructor
   * @param name component name /<br>названия компонента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly name: string = ''
  ) {
  }

  /**
   * Returns the name as an array.<br>
   * Возвращает название в виде массива.
   */
  protected get names (): string[] {
    return this.name.split('.', 2)
  }

  /**
   * Returns the design name by the component name.<br>
   * Возвращает название дизайна по имени компонента.
   */
  protected get design (): string {
    return this.names?.[0]
  }

  /**
   * Returns the component name by its name.<br>
   * Возвращает название компонента по имени.
   */
  protected get component (): string {
    return this.names?.[1]
  }

  /**
   * Initialization of the component.<br>
   * Инициализация компоненты.
   */
  init (): void {
    PropertiesCache.clear()

    const designs = this.initDesign()

    new Styles().init()

    designs.forEach(design => {
      design.components.push(...this.initComponent(design.name))
    })

    designs.forEach(design => {
      new DesignIcons(design.name).init()

      design.components.forEach(component => {
        const name = `${design.name}.${component}`

        console.log(`Component update: ${name}`)

        new DesignConstructor(`d.${component}`).init()
        new DesignComponent(name).init()

        this.makeComponentsDesign(design.name)
      })
    })

    this.makeStyle()
      .makeComponents()
  }

  /**
   * Are there component names in the passed names.<br>
   * Есть ли названия компонентов в передаваемых названиях.
   */
  protected isDesign (): boolean {
    return isFilled(this.design)
  }

  /**
   * Are there component names in the passed names.<br>
   * Есть ли названия компонентов в передаваемых названиях.
   */
  protected isComponent (): boolean {
    return isFilled(this.component)
  }

  /**
   * Returns the name of the global property.<br>
   * Возвращает название глобального свойства.
   */
  protected getGlobalName (): string {
    return process.env.DESIGNS_GLOBAL ?? 'UI'
  }

  /**
   * Returns the name of the main design.<br>
   * Возвращает название главного дизайна.
   */
  protected getDesignMain (): string {
    return process.env.DESIGNS_MAIN ?? 'design'
  }

  /**
   * Returns a list of design names.<br>
   * Возвращает список названий дизайнов.
   */
  protected getDesignList (): DesignCommandDesigns {
    const list: DesignCommandDesigns = []

    process.env.DESIGNS
      ?.split(',')
      ?.forEach(design => {
        list.push({
          name: design.trim(),
          components: []
        })
      })

    return list
  }

  /**
   * Returns a list of components.<br>
   * Возвращает список компонентов.
   * @param design design names /<br>названия дизайна
   */
  protected getComponentList (design: string): string[] {
    const list: string[] = []
    const dirs = PropertiesFile.readDir(design)

    dirs.forEach(dir => {
      if (PropertiesFile.is([design, dir, FILE_PROPERTY])) {
        list.push(toKebabCase(dir))
      }
    })

    return list
  }

  /**
   * Returns the full name of the component.<br>
   * Возвращает полное название компонента.
   * @param design design names /<br>названия дизайна
   * @param component component name /<br>название компонента
   */
  protected getNameComponent (
    design: string,
    component: string
  ): string {
    return toCamelCaseFirst(`${design}-${component}`)
  }

  /**
   * Returns the import code of the component.<br>
   * Возвращает код импорта компонента.
   * @param design design names /<br>названия дизайна
   * @param component component name /<br>название компонента
   * @param dir directory name for the component /<br>название директории для компонента
   */
  protected getCodeComponentImport (
    design: string,
    component: string,
    dir: boolean = false
  ): string {
    const name = this.getNameComponent(design, component)
    const dirName = dir ? `${toCamelCase(design)}/` : ''

    return `import ${name} from './${dirName}${toCamelCaseFirst(component)}/${name}.vue'`
  }

  /**
   * Returns the code to connect the component.<br>
   * Возвращает код для подключения компонента.
   * @param design design names /<br>названия дизайна
   * @param component component name /<br>название компонента
   */
  protected getCodeVueApp (
    design: string,
    component: string
  ): string {
    const name = this.getNameComponent(design, component)
    return `  app.component('${name}', ${name})`
  }

  /**
   * Creates a common style file.<br>
   * Создает общий файл стилей.
   */
  protected makeStyle (): this {
    const design = this.getDesignMain()
    const designs = process.env.DESIGNS?.split(',')

    if (design && designs) {
      const file: string[] = []

      designs.forEach(item => {
        file.push(`@import "./${item}/${item === design ? 'main' : 'init'}";`)
      })

      PropertiesFile.write(
        [],
        FILE_DESIGN_STYLE,
        file.join('\r\n'),
        'scss'
      )
    }

    return this
  }

  /**
   * Creates a common component file.<br>
   * Создает общий файл компоненты.
   */
  protected makeComponents (): this {
    const designs = this.getDesignList()

    const imports: string[] = []
    const importsComponent: string[] = []
    const data: string[] = []
    const components: string[] = []

    designs.forEach(design => {
      const name = toCamelCase(design.name)

      imports.push(`import ${name} from './${name}/${FILE_COMPONENTS}.ts'`)
      data.push(`MutationGlobal.addComponentList(${name})`)

      this.getComponentList(design.name).forEach(component => {
        importsComponent.push(this.getCodeComponentImport(design.name, component, true))
        components.push(this.getCodeVueApp(design.name, component))
      })
    })

    PropertiesFile.write(
      [],
      FILE_DESIGN_COMPONENTS,
      [
        'import { type App, createApp } from \'vue\'',
        '',
        'import { MutationGlobal } from \'./classes/mutation/MutationGlobal\'',
        '',
        'import functions from \'./functions/all.ts\'',
        'import classes from \'./classes/all.ts\'',
        '',
        ...imports,
        '',
        ...importsComponent,
        '',
        'MutationGlobal.addFunctionList(functions)',
        'MutationGlobal.addClassList(classes)',
        ...data,
        '',
        `;(window as any).${this.getGlobalName()} = MutationGlobal`,
        '',
        'export function initComponents (App: any): App<Element> {',
        '  const app = createApp(App)',
        '',
        ...components,
        '',
        '  return app',
        '}',
        ''
      ].join('\r\n'),
      'ts'
    )

    return this
  }

  /**
   * Creates a file with a list of components for the selected design.<br>
   * Создает файл со списком компонентов для выбранного дизайна.
   * @param design design names /<br>названия дизайна
   */
  protected makeComponentsDesign (design: string): this {
    const components = this.getComponentList(design)

    const imports: string[] = []
    const data: string[] = []

    components.forEach(component => {
      const name = toCamelCaseFirst(`${design}-${component}`)

      imports.push(this.getCodeComponentImport(design, component))
      data.push(`  ${name}`)
    })

    PropertiesFile.write(
      [design],
      FILE_COMPONENTS,
      [
        ...imports,
        '',
        'export default {',
        data.join(',\r\n'),
        '}',
        ''
      ].join('\r\n'),
      'ts'
    )

    return this
  }

  /**
   * Creates an array with all connected designs.<br>
   * Создает массив со всеми подключенными дизайнами.
   */
  protected initDesign (): DesignCommandDesigns {
    if (this.isDesign()) {
      return [{
        name: this.design,
        components: []
      }]
    }

    return this.getDesignList()
  }

  /**
   * Gets the list of components from the current design.<br>
   * Получает список компонентов у текущего дизайна.
   * @param design design names /<br>названия дизайна
   */
  protected initComponent (design: string): string[] {
    if (this.isComponent()) {
      return [this.component]
    }

    return this.getComponentList(design)
  }
}
