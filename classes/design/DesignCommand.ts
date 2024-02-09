import { config } from 'dotenv'
import { isFilled } from '../../functions/data.ts'
import { toKebabCase } from '../../functions/string.ts'

import { PropertiesCache } from '../services/properties/PropertiesCache.ts'

import { Styles } from '../services/styles/Styles.ts'
import { DesignConstructor } from '../services/designs/DesignConstructor.ts'
import { DesignComponent } from '../services/designs/DesignComponent.ts'
import { DesignIcons } from './DesignIcons.ts'

import { ComponentsItems } from '../services/сomponents/ComponentsItems.ts'
import { ComponentsList } from '../services/сomponents/ComponentsList.ts'
import { ComponentsMain } from '../services/сomponents/ComponentsMain.ts'
import { ComponentsStyle } from '../services/сomponents/ComponentsStyle.ts'

config()

/**
 * A class for updating styles and tokens.<br>
 * Класс для обновления стилей и токенов.
 */
export class DesignCommand {
  protected readonly components: ComponentsItems
  protected readonly componentsList: ComponentsList
  protected readonly componentsMain: ComponentsMain
  protected readonly componentsStyle: ComponentsStyle

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
    this.componentsMain = new ComponentsMain(this.components)
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
    this.componentsMain.make()
    this.componentsStyle.make()
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
            const name = `${design.name}.${component.alias}`

            console.log(`Component update: ${name}`)

            new DesignConstructor(`d.${component.alias}`).make()
            new DesignComponent(name).make()
          }
        })
      }
    })

    return this
  }
}
