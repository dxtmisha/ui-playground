import {
  computed,
  type ComputedRef,
  ref,
  toRefs,
  type ToRefs,
  useAttrs,
  useSlots,
  type VNode
} from 'vue'

import { forEach, isObject, isObjectNotArray } from '../../functions/data.ts'
import { toCamelCase } from '../../functions/string.ts'
import { toArray } from '../../functions/object.ts'

import { DesignComponents } from './DesignComponents.ts'

import { type RefType } from '../../types/ref.ts'
import {
  type ConstrClass,
  type ConstrClasses,
  type ConstrClassObject,
  type ConstrComponent,
  type ConstrEmit,
  type ConstrItem,
  type ConstrOptions,
  type ConstrSetup,
  type ConstrStyles
} from '../../types/constructor.ts'

/**
 * Class for collecting all functional components.<br>
 * Класс для сбора всех функциональных компонентов.
 */
export abstract class DesignConstructorAbstract<
  E extends Element,
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  SETUP extends ConstrItem,
  EXPOSE extends ConstrItem,
  SLOTS extends ConstrItem,
  CLASSES extends ConstrClasses,
  P extends ConstrItem
> {
  protected readonly name: string[]
  protected readonly element = ref<E | undefined>()
  protected readonly refs: ToRefs<P>

  protected readonly components: DesignComponents<COMP, P>
  protected readonly emits?: ConstrEmit<EMITS>

  protected readonly classes?: RefType<ConstrClasses>
  protected classesSub?: ComputedRef<Partial<CLASSES>>

  protected readonly styles?: RefType<ConstrStyles>
  protected stylesSub?: ComputedRef<ConstrStyles>

  protected attrs?: ConstrItem
  protected slots?: SLOTS

  protected data?: ConstrSetup<E, CLASSES, SETUP>
  protected dataExpose?: EXPOSE

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  protected constructor (
    name: string,
    protected readonly props: Readonly<P>,
    options?: ConstrOptions<COMP, EMITS, P>
  ) {
    this.name = this.initName(name)
    this.refs = this.props ? toRefs(this.props) : {} as ToRefs<P>

    this.components = new DesignComponents(options?.components, options?.compMod)

    this.emits = options?.emits
    this.classes = options?.classes
    this.styles = options?.styles

    this.attrs = useAttrs()
    this.slots = useSlots() as SLOTS
  }

  protected init (): this {
    this.makeOptions()

    this.classesSub = computed(() => this.initClasses())
    this.stylesSub = computed(() => this.initStyles())

    this.data = {
      name: this.getName(),
      element: this.element,
      classes: computed(() => this.updateClasses()),
      styles: computed(() => this.updateStyles()),
      ...this.initSetup()
    }

    this.dataExpose = this.initExpose()

    return this
  }

  /**
   * Getting the class name.<br>
   * Получение названия класса.
   */
  getName (): string {
    return this.name.join('-')
  }

  /**
   * Getting the class name.<br>
   * Получение названия класса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getSubClass (name: string | string[]): string {
    return `${this.getName()}__${toArray(name).join('__')}`
  }

  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass (name: string | string[]): string {
    return `${this.getName()}--${toArray(name).join('--')}`
  }

  /**
   * Execution method to replace setup in Vue.<br>
   * Метод выполнения, для замены setup в Vue.
   */
  setup (): ConstrSetup<E, CLASSES, SETUP> {
    return this.data ?? {} as ConstrSetup<E, CLASSES, SETUP>
  }

  /**
   * List of available external variables.<br>
   * Список доступных переменных извне.
   */
  expose (): EXPOSE {
    return this.dataExpose ?? {} as EXPOSE
  }

  /**
   * The rendering method for the setup method.<br>
   * Метод рендеринга для метода настройки.
   */
  render (): () => VNode {
    return () => this.initRender()
  }

  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  protected abstract makeOptions (): this

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected abstract initSetup (): SETUP

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected abstract initExpose (): EXPOSE

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected abstract initClasses (): Partial<CLASSES>

  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  protected abstract initStyles (): ConstrStyles

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected abstract initRender (): VNode

  /**
   * Initializes the slot.<br>
   * Инициализирует слот.
   * @param name slot name /<br>название слота
   * @param children if you pass this element, the slot will be added to it /<br>
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot /<br>свойство для слота
   */
  protected initSlot<K extends keyof SLOTS> (
    name: K,
    children?: any[],
    props: ConstrItem = {}
  ): VNode | undefined {
    if (
      this.slots &&
      this.slots?.[name] &&
      typeof this.slots[name] === 'function'
    ) {
      const slot = (this.slots[name] as ((props?: ConstrItem) => VNode))(props)

      if (children) {
        children.push(slot)
      }

      return slot
    }

    return undefined
  }

  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  protected toClassName (classes?: ConstrClassObject): ConstrClassObject {
    if (isObject(classes)) {
      const data: ConstrClassObject = {}

      forEach(classes, (value, name: string) => {
        if (name.match(/^\?\?/)) {
          data[name.replace(/^\?\?/, this.getName())] = value
        } else if (name.match(/^\?/)) {
          data[name.replace(/^\?/, this.name[0])] = value
        } else {
          data[name] = value
        }
      })

      return data
    }

    return {}
  }

  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  private initName (name: string): string[] {
    return forEach(name.split('.', 2), item => toCamelCase(item))
  }

  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  private updateClasses (): CLASSES {
    const classes = this.classesSub?.value
    const classesProps = this.classes?.value

    if (
      classes &&
      classesProps
    ) {
      return {
        ...classes,
        ...classesProps,
        main: {
          ...this.toClass(classes?.main),
          ...this.toClass(classesProps?.main)
        }
      } as CLASSES
    }

    return (
      classesProps ??
      {
        main: {}
      }
    ) as CLASSES
  }

  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  private updateStyles (): ConstrStyles {
    const styles = this.stylesSub?.value
    const stylesProps = this.styles?.value

    if (
      styles &&
      stylesProps
    ) {
      return {
        ...styles,
        ...stylesProps
      }
    }

    return stylesProps ?? {}
  }

  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  private toClass (classes?: ConstrClass): ConstrClassObject {
    if (isObjectNotArray(classes)) {
      return classes
    }

    if (Array.isArray(classes)) {
      const name = classes
        .filter(item => typeof item === 'string' && item.trim() !== '')
        .join(' ')

      return { [name]: true }
    }

    if (typeof classes === 'string') {
      return { [classes]: true }
    }

    return {}
  }
}
