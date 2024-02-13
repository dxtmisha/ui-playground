import { StylesProperties } from '../styles/StylesProperties'
import { DesignStructureItemAbstract } from './DesignStructureItemAbstract'
import { forEach } from '../../../functions/data'

/**
 * Class for processing styles from tokens for the component.<br>
 * Класс для обработки стилей из токенов для компонента.
 */
export class DesignStructureStyles extends DesignStructureItemAbstract<string[]> {
  protected data: string[]

  /**
   * Constructor
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   */
  constructor (
    design: string,
    component: string
  ) {
    super(design, component)
    this.data = this.make()
  }

  /**
   * Performing transformation.<br>
   * Выполнение преобразования.
   */
  make (): string[] {
    if (this.items) {
      const styles = (new StylesProperties('  ', this.items)).make()
      return forEach(styles, style => style.replace(/^ {2}/, ''))
    }

    return []
  }
}
