import { VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { MutationRef } from './MutationRef';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type MutationProps } from './props';
import { type MutationClasses, type MutationComponents, type MutationEmits, type MutationExpose, type MutationSetup, type MutationSlots } from './types';
/**
 * MutationDesign
 */
export declare class MutationDesign<COMP extends MutationComponents, SETUP extends MutationSetup, EXPOSE extends MutationExpose, CLASSES extends MutationClasses, P extends MutationProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, MutationEmits, SETUP, EXPOSE, MutationSlots, CLASSES, P> {
    protected mutation: MutationRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MutationEmits, P>);
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
