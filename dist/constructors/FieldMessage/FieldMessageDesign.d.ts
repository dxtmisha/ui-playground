import { VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type FieldMessageProps } from './props';
import { type FieldMessageClasses, type FieldMessageComponents, type FieldMessageEmits, type FieldMessageExpose, type FieldMessageSetup, type FieldMessageSlots } from './types';
import { FieldMessageRef } from './FieldMessageRef';
/**
 * FieldMessageDesign
 */
export declare class FieldMessageDesign<COMP extends FieldMessageComponents, SETUP extends FieldMessageSetup, EXPOSE extends FieldMessageExpose, CLASSES extends FieldMessageClasses, P extends FieldMessageProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, FieldMessageEmits, SETUP, EXPOSE, FieldMessageSlots, CLASSES, P> {
    protected message: FieldMessageRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, FieldMessageEmits, P>);
    /**
     * Initialization of basic options.<br>
     * Инициализация базовых опций.
     */
    protected makeOptions(): this;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initSetup(): SETUP;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.<br>
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.<br>
     * Метод для рендеринга.
     */
    protected initRender(): VNode | undefined;
    /**
     * Rendering text.<br>
     * Рендеринг текста.
     */
    protected renderInfo: () => VNode;
    /**
     * Rendering the entered number of characters.<br>
     * Рендеринг введенного количества символов.
     */
    protected renderCounter: () => VNode;
}
