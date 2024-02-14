import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { MaskRef } from './MaskRef';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type MaskProps } from './props';
import { type MaskClasses, type MaskComponents, type MaskEmits, type MaskExpose, type MaskSetup, type MaskSlots } from './types';
/**
 * MaskDesign
 */
export declare class MaskDesign<COMP extends MaskComponents, SETUP extends MaskSetup, EXPOSE extends MaskExpose, CLASSES extends MaskClasses, P extends MaskProps> extends DesignConstructorAbstract<HTMLInputElement, COMP, MaskEmits, SETUP, EXPOSE, MaskSlots, CLASSES, P> {
    protected readonly mask: MaskRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MaskEmits, P>);
    /**
     * Element for storing the final data.<br>
     * Элемент для хранения конечных данных.
     */
    renderData(): VNode | undefined;
    /**
     * Rendering method for input.<br>
     * Метод рендеринга для ввода.
     */
    renderInput(): VNode;
    /**
     * Rendering method for displaying the mask and the input data.<br>
     * Метод рендеринга для вывода маски и вводимых данных.
     */
    renderView(): VNode;
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
