import { type ComputedRef, type ToRefs, type VNode } from 'vue';
import { DesignComponents } from './DesignComponents';
import { type RefType } from '../../types/ref';
import { type ConstrClasses, type ConstrComponent, type ConstrEmit, type ConstrItem, type ConstrOptions, type ConstrSetup, type ConstrStyles } from '../../types/constructor';
/**
 * Class for collecting all functional components.<br>
 * Класс для сбора всех функциональных компонентов.
 */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, SETUP extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    protected readonly props: Readonly<P>;
    protected readonly name: string[];
    protected readonly element: import("vue").Ref<E | undefined>;
    protected readonly refs: ToRefs<P>;
    protected readonly components: DesignComponents<COMP, P>;
    protected readonly emits?: ConstrEmit<EMITS>;
    protected readonly classes?: RefType<ConstrClasses>;
    protected classesSub?: ComputedRef<Partial<CLASSES>>;
    protected readonly styles?: RefType<ConstrStyles>;
    protected stylesSub?: ComputedRef<ConstrStyles>;
    protected attrs?: ConstrItem;
    protected slots?: SLOTS;
    protected data?: ConstrSetup<E, CLASSES, SETUP>;
    protected dataExpose?: EXPOSE;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P>);
    protected init(): this;
    /**
     * Getting the class name.<br>
     * Получение названия класса.
     */
    getName(): string;
    /**
     * Getting the class name.<br>
     * Получение названия класса.
     * @param name list of class names by levels /<br>список названий классов по уровням
     */
    getSubClass(name: string | string[]): string;
    /**
     * Getting the class name for the status.<br>
     * Получение названия класса для статуса.
     * @param name list of class names by levels /<br>список названий классов по уровням
     */
    getStatusClass(name: string | string[]): string;
    /**
     * Getting the property name for the style.<br>
     * Получение названия свойства для стиля.
     * @param name list of class names by levels /<br>список названий классов по уровням
     */
    getStyle(name: string | string[]): string;
    /**
     * Getting additional parameters.<br>
     * Получение дополнительных параметров.
     */
    getAttrs(): ConstrItem;
    /**
     * Execution method to replace setup in Vue.<br>
     * Метод выполнения, для замены setup в Vue.
     */
    setup(): ConstrSetup<E, CLASSES, SETUP>;
    /**
     * List of available external variables.<br>
     * Список доступных переменных извне.
     */
    expose(): EXPOSE;
    /**
     * The rendering method for the setup method.<br>
     * Метод рендеринга для метода настройки.
     */
    render(): () => VNode | (VNode | any)[] | undefined;
    /**
     * Initialization of basic options.<br>
     * Инициализация базовых опций.
     */
    protected abstract makeOptions(): this;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected abstract initSetup(): SETUP;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected abstract initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected abstract initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.<br>
     * Доработка полученного списка стилей.
     */
    protected abstract initStyles(): ConstrStyles;
    /**
     * A method for rendering.<br>
     * Метод для рендеринга.
     */
    protected abstract initRender(): VNode | (VNode | any)[] | undefined;
    /**
     * Initializes the slot.<br>
     * Инициализирует слот.
     * @param name slot name /<br>название слота
     * @param children if you pass this element, the slot will be added to it /<br>
     * если передать этот элемент, то слот добавится в него
     * @param props property for the slot /<br>свойство для слота
     */
    protected initSlot<K extends keyof SLOTS>(name: K, children?: any[], props?: ConstrItem): VNode | undefined;
    /**
     * Converts the class name to standard for the current component.<br>
     * Преобразовывает название класса в стандартное для текущего компонента.
     * @param classes list of classes /<br>список классов
     */
    protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T;
    /**
     * Getting component names as an array.<br>
     * Получение названий компонентов в виде массива.
     * @param name component name for transformation /<br>название компонента для преобразования
     */
    private initName;
    /**
     * Updating data about the class.<br>
     * Обновление данных об классе.
     */
    private updateClasses;
    /**
     * Refinement of the received list of styles.<br>
     * Доработка полученного списка стилей.
     */
    private updateStyles;
    /**
     * Transformation of the class value into an object.<br>
     * Преобразование значения класса в объект.
     * @param classes list of classes for transformation /<br>список классов для преобразования
     */
    private toClass;
}
