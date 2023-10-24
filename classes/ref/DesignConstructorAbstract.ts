import {
  computed,
  type ComputedRef,
  ref,
  toRefs,
  type ToRefs,
  useAttrs,
  useSlots,
  VNode
} from 'vue'

import { forEach, isFilled, isObjectNotArray } from '../../functions/data.ts'
import { toCamelCase } from '../../functions/string.ts'
import { toArray } from '../../functions/object.ts'

import { type RefType } from '../../types/ref.ts'
import {
  type ConstrClass,
  type ConstrClasses,
  type ConstrClassObject,
  type ConstrComponent,
  type ConstrComponentMod,
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

  protected components?: COMP
  protected modification?: ConstrComponentMod<P>
  protected emits?: ConstrEmit<EMITS>
  protected classes?: RefType<ConstrClasses>
  protected classesSub?: ComputedRef<Partial<CLASSES>>

  protected styles?: RefType<ConstrStyles>
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

    this.components = options?.components
    this.modification = options?.modification
    this.emits = options?.emits
    this.classes = options?.classes
    this.styles = options?.styles

    this.attrs = useAttrs()
    this.slots = useSlots() as SLOTS
  }

  protected init (): this {
    this.makeOptions()
    this.makeComponents()

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
    const newName = typeof name === 'string'
      ? name
      : toArray(name).join('__')

    return `${this.getName()}__${newName}`
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
   * Initialization of a class for working with input components.<br>
   * Инициализация класса для работы с входными компонентами.
   */
  private makeComponents (): this {
    if (isFilled(this.components)) {
      // TODO: в разработке
    }

    return this
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
