import { config } from 'dotenv'
import { isFilled } from '../../functions/data.ts'
import { toKebabCase } from '../../functions/string.ts'

import { PropertiesFile } from '../services/properties/PropertiesFile.ts'

import { Styles } from '../services/styles/Styles.ts'
import { DesignConstructor } from '../services/designs/DesignConstructor.ts'
import { DesignComponent } from '../services/designs/DesignComponent.ts'
import { DesignIcons } from './DesignIcons.ts'

import { FILE_PROPERTY, FILE_STYLE } from '../../types/property.ts'

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
      })
    })

    this.makeStyle()
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

  protected makeStyle (): this {
    const design = process.env.DESIGNS_MAIN
    const designs = process.env.DESIGNS?.split(',')

    if (design && designs) {
      const file: string[] = []

      designs.forEach(item => {
        file.push(`@import "./${item}/${item === design ? 'main' : 'init'}";`)
      })

      PropertiesFile.write(
        [],
        FILE_STYLE,
        file.join('\r\n'),
        'scss'
      )
    }

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
   * Gets the list of components from the current design.<br>
   * Получает список компонентов у текущего дизайна.
   * @param design design names /<br>названия дизайна
   */
  protected initComponent (design: string): string[] {
    if (this.isComponent()) {
      return [this.component]
    }

    const list: string[] = []
    const dirs = PropertiesFile.readDir(design)

    dirs.forEach(dir => {
      if (PropertiesFile.is([design, dir, FILE_PROPERTY])) {
        list.push(toKebabCase(dir))
      }
    })

    return list
  }
}
