/**
 * Class with a list of available types.<br>
 * Класс со списком доступных типов.
 */
export class PropertiesType {
  static readonly design = 'design'
  static readonly component = 'component'

  /**
   * Type of user property.<br>
   * Тип пользовательского свойства.
   */
  static readonly var = 'var'

  /**
   * Type of style property.<br>
   * Тип свойства стиля.
   */
  static readonly property = 'property'

  /**
   * Pseudo-classes
   */
  static readonly selector = 'selector'

  /**
   * Pseudo-elements
   */
  static readonly virtual = 'virtual'

  /**
   * Element state.<br>
   * Состояние элемента.
   */
  static readonly state = 'state'

  /**
   * Child element.<br>
   * Дочерний элемент.
   */
  static readonly subclass = 'subclass'

  /**
   * css / @media(min-width)
   */
  static readonly media = 'media'

  /**
   * css / @media(max-width)
   */
  static readonly mediaMax = 'media-max'

  /**
   * css / @keyframes
   */
  static readonly animate = 'animate'

  /**
   * Link for adding additional data.<br>
   * Ссылка для добавления дополнительных данных.
   */
  static readonly link = 'link'

  /**
   * Link to the object of the class. Such a property does not generate new data, but simply adds it in the form of a class.<br>
   * Ссылка к объекту класса. Такое свойство не генерируют новых данных, а просто добавляют в виде класса.
   */
  static readonly linkClass = 'link-class'

  /**
   * Selector for code in scss.<br>
   * Селектор для кода на scss.
   */
  static readonly scss = 'scss'

  static readonly classType = 'class'
  static readonly theme = 'theme'
  static readonly root = 'root'

  /**
   * Such types do not participate in the formation of style and exist only for storing the property and value for the reference.<br>
   * Такие типы не участвуют в формировании стиля и существуют только для хранения свойства и значения для ссылки.
   */
  static readonly mixin = 'mixin'

  /**
   * Such records will be deleted from the array.<br>
   * Такие записи будут удалены из массива.
   */
  static readonly none = 'none'

  private static types = [
    this.design,
    this.component,
    this.var,
    this.property,
    this.selector,
    this.virtual,
    this.state,
    this.subclass,
    this.media,
    this.mediaMax,
    this.animate,
    this.link,
    this.linkClass,
    this.scss,
    this.classType,
    this.theme,
    this.root,
    this.mixin,
    this.none
  ]

  /**
   * Checks if the name is a type.<br>
   * Проверяет, является ли название типом.
   * @param name type names /<br>названия типа
   */
  static isType (name: string) {
    return this.types.indexOf(name) !== -1
  }
}
