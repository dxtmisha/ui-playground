import { VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts';
import { ScrollbarRef } from './ScrollbarRef.ts';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor.ts';
import { type ScrollbarProps } from './props.ts';
import { type ScrollbarClasses, type ScrollbarComponents, type ScrollbarEmits, type ScrollbarExpose, type ScrollbarSetup, type ScrollbarSlots } from './types.ts';
/**
 * ScrollbarDesign
 */
export declare class ScrollbarDesign<COMP extends ScrollbarComponents, SETUP extends ScrollbarSetup, EXPOSE extends ScrollbarExpose, CLASSES extends ScrollbarClasses, P extends ScrollbarProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, ScrollbarEmits, SETUP, EXPOSE, ScrollbarSlots, CLASSES, P> {
    protected readonly scrollbar: ScrollbarRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ScrollbarEmits, P>);
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
