import { VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { WindowRef } from './WindowRef';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type WindowProps } from './props';
import { type WindowClasses, type WindowComponents, type WindowEmits, type WindowExpose, type WindowSetup, type WindowSlots } from './types';
/**
 * WindowDesign
 */
export declare class WindowDesign<COMP extends WindowComponents, SETUP extends WindowSetup, EXPOSE extends WindowExpose, CLASSES extends WindowClasses, P extends WindowProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, WindowEmits, SETUP, EXPOSE, WindowSlots, CLASSES, P> {
    protected readonly window: WindowRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, WindowEmits, P>);
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
    protected initRender(): (VNode | any)[];
    /**
     * Render body element.<br>
     * Рендер элемента тела.
     */
    protected renderBody(): VNode;
    /**
     * Render context element.<br>
     * Рендер элемента контекста.
     */
    protected renderBodyContext(): VNode;
}
