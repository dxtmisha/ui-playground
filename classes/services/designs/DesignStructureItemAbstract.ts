import { Properties } from '../properties/Properties.ts'
import { PropertiesItemsItem } from '../properties/PropertiesItems.ts'

export abstract class DesignStructureItemAbstract<D> {
  protected properties: Properties
  protected items?: PropertiesItemsItem

  protected abstract data: D

  /**
   * Constructor
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   */
  protected constructor (
    protected readonly design: string,
    protected readonly component: string
  ) {
    this.properties = new Properties()
    this.items = this.properties.get().getInfo(this.getLink())
  }

  /**
   * Getting all data about dependencies of the current component.<br>
   * Получение всех данных об зависимостях у текущего компонента.
   */
  get (): D {
    return this.data
  }

  /**
   * Returns a reference to the component.<br>
   * Возвращает ссылку на компонент.
   * Это полный массив со всеми обработанными свойствами.
   */
  protected getLink (): string {
    return `{${this.design}.${this.component}}`
  }
}
