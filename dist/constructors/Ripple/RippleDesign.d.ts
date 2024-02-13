import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts';
import { RippleRef } from './RippleRef.ts';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor.ts';
import { type RippleProps } from './props.ts';
import { type RippleClasses, type RippleComponents, type RippleEmits, type RippleExpose, type RippleSetup, type RippleSlots } from './types.ts';
/**
 * Constructor class for the wave component.<br>
 * Класс-конструктор для компонента волна.
 */
export declare class RippleDesign<COMP extends RippleComponents, SETUP extends RippleSetup, EXPOSE extends RippleExpose, CLASSES extends RippleClasses, P extends RippleProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, RippleEmits, SETUP, EXPOSE, RippleSlots, CLASSES, P> {
    protected readonly ripple: RippleRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, RippleEmits, P>);
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
    protected initRender(): VNode;
}
