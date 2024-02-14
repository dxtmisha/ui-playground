import { config } from 'dotenv'
import { isFilled } from '../../functions/data'
import { toKebabCase } from '../../functions/string'

import { PropertiesCache } from '../services/properties/PropertiesCache'

import { Styles } from '../services/styles/Styles'
import { DesignConstructor } from '../services/designs/DesignConstructor'
import { DesignComponent } from '../services/designs/DesignComponent'
import { DesignIcons } from '../services/designs/DesignIcons.ts'

import { ComponentsItems } from '../services/сomponents/ComponentsItems'
import { ComponentsList } from '../services/сomponents/ComponentsList'
import { ComponentsMain } from '../services/сomponents/ComponentsMain'
import { ComponentsTypes } from '../services/сomponents/ComponentsTypes'
import { ComponentsStyle } from '../services/сomponents/ComponentsStyle'
import { ComponentsRegistration } from '../services/сomponents/ComponentsRegistration'
import { PropertiesFile } from '../services/properties/PropertiesFile.ts'

config()

/**
 * A class for updating styles and tokens.<br>
 * Класс для обновления стилей и токенов.
 */
export class DesignCommand {
  protected readonly components: ComponentsItems
  protected readonly componentsList: ComponentsList
  protected readonly componentsMain: ComponentsMain
  protected readonly componentsTypes: ComponentsTypes
  protected readonly componentsStyle: ComponentsStyle
  protected readonly componentsRegistration: ComponentsRegistration

  /**
   * Constructor
   * @param name component name /<br>названия компонента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly name: string = ''
  ) {
    this.components = new ComponentsItems()
    this.componentsList = new ComponentsList(this.components)
    this.componentsRegistration = new ComponentsRegistration(this.components)
    this.componentsMain = new ComponentsMain(this.components)
    this.componentsTypes = new ComponentsTypes(this.components)
    this.componentsStyle = new ComponentsStyle(this.components)
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
    return toKebabCase(this.names?.[0] ?? '').trim()
  }

  /**
   * Returns the component name by its name.<br>
   * Возвращает название компонента по имени.
   */
  protected get component (): string {
    return toKebabCase(this.names?.[1] ?? '').trim()
  }

  /**
   * Initialization of the component.<br>
   * Инициализация компоненты.
   */
  make (): void {
    PropertiesCache.clear()

    new Styles().make()

    this.makeConstructorComponent()

    this.componentsList.make()
    this.componentsRegistration.make()
    this.componentsMain.make()
    this.componentsTypes.make()
    this.componentsStyle.make()

    this.makePackageJson()
  }

  /**
   * Are there component names in the passed names.<br>
   * Есть ли названия компонентов в передаваемых названиях.
   * @param design design names /<br>названия дизайна
   */
  protected isDesign (design: string): boolean {
    const designOriginal = this.design

    return !isFilled(designOriginal) || designOriginal === design
  }

  /**
   * Are there component names in the passed names.<br>
   * Есть ли названия компонентов в передаваемых названиях.
   * @param component component name /<br>название компонента
   */
  protected isComponent (component: string): boolean {
    const componentOriginal = this.component

    return !isFilled(this.component) || componentOriginal === component
  }

  /**
   * Creates or updates the list of components.<br>
   * Создает или обновляет список компонентов.
   */
  protected makeConstructorComponent (): this {
    const designs = this.components.get()

    designs.forEach(design => {
      if (this.isDesign(design.name)) {
        new DesignIcons(design.name).make()

        design.components.forEach(component => {
          if (this.isComponent(component.name)) {
            console.log(`Component update: ${component.alias}`)

            new DesignConstructor(`d.${component.name}`).make()
            new DesignComponent(component.alias).make()
          }
        })
      }
    })

    return this
  }

  protected makePackageJson (): void {
    const components = this.components.getComponentList()
    const packageJson = PropertiesFile.readFile('package.json')
    const exports: Record<string, any> = {
      '.': {
        import: './dist/index.js',
        require: './dist/index.umd.cjs',
        types: './dist/lib/index.d.ts'
      },
      './style.css': './dist/style.css'
    }

    components.forEach(component => {
      exports[`./${component.codeFull}`] = {
        import: `./dist/${component.codeFull}.js`,
        require: `./dist/${component.codeFull}.umd.cjs`,
        types: `./dist/${component.design}/${component.dir}/${component.codeFull}.vue.d.ts`
      }
    })

    if (packageJson) {
      PropertiesFile.write(
        [],
        'package',
        {
          ...packageJson,
          exports
        },
        'json'
      )
    }
  }
}
