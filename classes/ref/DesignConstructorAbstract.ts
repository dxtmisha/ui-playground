import { computed, ref, toRefs, type ToRefs, useAttrs, useSlots, VNode } from 'vue'

import { forEach, isFilled } from '../../functions/data.ts'
import { toCamelCase } from '../../functions/string.ts'
import { toArray } from '../../functions/object.ts'

import { type RefType } from '../../types/ref.ts'
import {
  type ConstrClasses,
  type ConstrComponent,
  type ConstrComponentMod,
  type ConstrEmit,
  type ConstrItem,
  type ConstrOptions,
  type ConstrSetup
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
  protected classes?: RefType<CLASSES>
  protected classesSub?: RefType<CLASSES>

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
  constructor (
    name: string,
    protected readonly props: Readonly<P>,
    options?: ConstrOptions<COMP, EMITS, CLASSES, P>
  ) {
    this.name = this.makeName(name)
    this.refs = this.props ? toRefs(this.props) : {} as ToRefs<P>

    this.components = options?.components
    this.modification = options?.modification
    this.emits = options?.emits
    this.classes = options?.classes

    this.attrs = useAttrs()
    this.slots = useSlots() as SLOTS
  }

  protected init (): this {
    this.makeOptions()
    this.makeComponents()

    this.data = {
      name: this.getName(),
      element: this.element,
      classes: this.classes,
      ...this.initSetup()
    }

    this.dataExpose = this.initExpose()
    this.classesSub = computed(() => this.initClasses())

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
  protected abstract initClasses (): CLASSES

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected abstract initRender (): VNode

  private makeName (name: string): string[] {
    return forEach(name.split('.', 2), item => toCamelCase(item))
  }

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
}
