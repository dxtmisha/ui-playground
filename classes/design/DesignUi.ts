import { config } from 'dotenv'
import { isFilled } from '../../functions/data'
import { toKebabCase } from '../../functions/string'

import { PropertiesFile } from '../services/properties/PropertiesFile'
import { PropertiesCache } from '../services/properties/PropertiesCache'

import { Styles } from '../services/styles/Styles'
import { DesignConstructor } from '../services/designs/DesignConstructor'
import { DesignComponent } from '../services/designs/DesignComponent'
import { DesignIcons } from '../services/designs/DesignIcons'

import { ComponentsItems } from '../services/components/ComponentsItems'
import { ComponentsList } from '../services/components/ComponentsList'
import { ComponentsFlags } from '../services/components/ComponentsFlags.ts'
import { ComponentsMedia } from '../services/components/ComponentsMedia.ts'

import { ComponentsMain } from '../services/components/ComponentsMain'
import { ComponentsTypes } from '../services/components/ComponentsTypes'
import { ComponentsStyle } from '../services/components/ComponentsStyle'
import { ComponentsRegistration } from '../services/components/ComponentsRegistration'
import { ComponentsFileTypes } from '../services/components/ComponentsFileTypes.ts'

config()

/**
 * A class for updating styles and tokens.<br>
 * Класс для обновления стилей и токенов.
 */
export class DesignUi {
  protected readonly components: ComponentsItems
  protected readonly componentsList: ComponentsList
  protected readonly componentsFlags: ComponentsFlags
  protected readonly componentsMedia: ComponentsMedia

  protected readonly componentsMain: ComponentsMain
  protected readonly componentsTypes: ComponentsTypes
  protected readonly componentsFileTypes: ComponentsFileTypes
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
    this.componentsFlags = new ComponentsFlags(this.components)
    this.componentsMedia = new ComponentsMedia(this.components)

    this.componentsRegistration = new ComponentsRegistration(this.components)
    this.componentsMain = new ComponentsMain(this.components)
    this.componentsTypes = new ComponentsTypes(this.components)
    this.componentsFileTypes = new ComponentsFileTypes(this.components)
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
    this.componentsFlags.make()
    this.componentsMedia.make()

    this.componentsRegistration.make()
    this.componentsMain.make()
    this.componentsTypes.make()
    this.componentsFileTypes.make()
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
    const componentDef = this.component

    if (componentDef !== '') {
      new DesignConstructor(`d.${componentDef}`).make()
      new DesignComponent(`${this.design}.${componentDef}`).make()
    } else {
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
    }

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
      './components-type': './dist/lib/types.d.ts',
      './components-file': './dist/lib/file-types.d.ts',
      './create': {
        import: './dist/create.js',
        require: './dist/create.umd.cjs',
        types: './dist/lib/create.d.ts'
      },
      './main': {
        import: './dist/main.js',
        require: './dist/main.umd.cjs',
        types: './dist/lib/main.d.ts'
      },
      './style': './lib/style.scss',
      './style-init': './lib/style-init.scss',
      './style.css': './dist/style.css',
      './media': {
        import: './dist/media.js',
        require: './dist/media.umd.cjs',
        types: './dist/lib/media.d.ts'
      },
      './dist/*': './dist/*',
      './styles/*': './styles/*',
      './*': './*'
    }

    this.components.getDesigns().forEach(design => {
      exports[`./${design}/use`] = `./${design}/use.scss`
    })

    components.forEach(component => {
      exports[`./${component.codeFull}`] = {
        import: `./${component.design}/${component.dir}/index.ts`,
        require: `./dist/${component.codeFull}.umd.cjs`,
        types: `./dist/${component.design}/${component.dir}/index.d.ts`
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
