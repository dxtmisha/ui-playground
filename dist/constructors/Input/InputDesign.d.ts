import { VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type InputProps } from './props';
import { type InputClasses, type InputComponents, type InputEmits, type InputExpose, type InputSetup, type InputSlots } from './types';
/**
 * InputDesign
 */
export declare class InputDesign<COMP extends InputComponents, SETUP extends InputSetup, EXPOSE extends InputExpose, CLASSES extends InputClasses, P extends InputProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, InputEmits, SETUP, EXPOSE, InputSlots, CLASSES, P> {
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, InputEmits, P>);
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
